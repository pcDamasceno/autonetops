import { resizeImage } from '@starter-kit/utils/image';
import Link from 'next/link';
import { DEFAULT_COVER } from '../utils/const';
import { CoverImage } from './cover-image';
import { DateFormatter } from './date-formatter';

type Props = {
	title: string;
	coverImage: string;
	date: string;
	excerpt: string;
	slug: string;
	ctaText: string;
	ctaLink: string;
};

export const HeroSection = ({
	title,
	coverImage,
	date,
	excerpt,
	slug,
	ctaText = 'Get Started',
	ctaLink = '/about',
}: Props) => {
	const postURL = `blog/${slug}`;

	return (
		<section className="grid grid-cols-1 gap-5 md:grid-cols-2 items-center bg-gray-100 dark:bg-gray-900 p-10 rounded-lg shadow-lg">
			<div className="col-span-1">
				<CoverImage
					title={title}
					src={resizeImage(coverImage, { w: 1600, h: 840, c: 'thumb' }) || DEFAULT_COVER}
					slug={slug}
					priority={true}
				/>
			</div>
			<div className="col-span-1 flex flex-col gap-5">
				<h1 className="text-2xl font-extrabold leading-snug text-slate-800 dark:text-neutral-50 lg:text-4xl">
					Welcome to AutoNetOps – {title}
				</h1>
				<p className="text-md lg:text-lg leading-relaxed text-slate-500 dark:text-neutral-400">
					{excerpt}
				</p>
				<div className="text-sm font-semibold text-slate-500 dark:text-neutral-300">
					<DateFormatter dateString={date} />
				</div>
				<Link
					href={ctaLink}
					className="mt-5 inline-block rounded bg-primary-600 dark:bg-primary-500 text-white px-6 py-3 font-semibold shadow hover:bg-primary-700 dark:hover:bg-primary-400"
				>
					{ctaText}
				</Link>
			</div>
		</section>
	);
};
