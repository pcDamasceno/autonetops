import { resizeImage } from '@starter-kit/utils/image';
import request from 'graphql-request';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Container } from '../../components/container';
import { AppProvider } from '../../components/contexts/appContext';
import { CoverImage } from '../../components/cover-image';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Layout } from '../../components/layout';
import {
  PublicationFragment,
  SeriesEdge,
  SeriesByPublicationQueryVariables,
  SeriesByPublicationQuery,
  SeriesByPublicationDocument
} from '../../generated/graphql';

import { DEFAULT_COVER } from '../../utils/const';
import Link from 'next/link';
const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;


// Props interface for static page
type Props = {
  seriesList: SeriesEdge[];
  publication: PublicationFragment;
}

export default function SeriesPage({ seriesList, publication }: Props) {
  const title = `Tutorials - ${publication.title}`;

  return (
    <AppProvider publication={publication}>
      <Layout>
        <Head>
          <title>{title}</title>
        </Head>
        <Header />
        <Container className="flex flex-col items-stretch gap-10 px-5 pb-10">
          <h1 className="text-4xl font-bold mb-8">{title}</h1>
          {seriesList.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {seriesList.map((series) => (
                <div key={series.node.slug} className="flex flex-col items-stretch">
                  <div className="relative">
                    <CoverImage
                      title={series.node.name}
                      src={resizeImage(
                        series.node.coverImage,
                        {
                          w: 400,
                          h: 210,
                          c: 'thumb',
                        },
                        DEFAULT_COVER,
                      )}
                    />
                  </div>
                  <h2 className="text-2xl font-semibold leading-tight text-slate-800 dark:text-neutral-50">
                    <Link
                      href={series.node.slug}
                      className="hover:text-primary-600 dark:hover:text-primary-500 hover:underline"
                    >
                      {series.node.name}
                    </Link>
                  </h2>
                  <Link href={series.node.slug}>
                    <p className="text-md leading-snug text-slate-500 dark:text-neutral-400">
                    {
                      series.node.description?.html
                        ? series.node.description.html.length > 140
                          ? series.node.description.html.substring(0, 140) + '…'
                          : series.node.description.html
                        : 'No description available'
                    }
                    </p>
                  </Link>
                  <div className="text-sm font-semibold text-slate-500 dark:text-neutral-300">
                    <Link href={series.node.slug}>
                    Posts On this Tutorial: X
                    </Link>
                  </div>
                  <div
                    className="hashnode-content-style mt-2"
                    dangerouslySetInnerHTML={{ __html: series.node.description?.html ?? '' }}
                  ></div>
                </div>
              ))}
            </div>
          ) : (
            <div>No Series found</div>
          )}
        </Container>
        <Footer />
      </Layout>
    </AppProvider>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  // Fetch all series data
  const data = await request<SeriesByPublicationQuery, SeriesByPublicationQueryVariables>(
    GQL_ENDPOINT,
    SeriesByPublicationDocument,
    {
      host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
      first: 5
    },
  );

	const publication = data.publication;
	if (!publication) {
		return {
			notFound: true,
		};
	}
  const seriesList = publication?.seriesList.edges ?? [];
  //console.log('data', seriesList)

  // Return data as props
  return {
    props: {
      seriesList,
      publication
    },
    revalidate: 1, // Revalidate after 1 second
  };
};
