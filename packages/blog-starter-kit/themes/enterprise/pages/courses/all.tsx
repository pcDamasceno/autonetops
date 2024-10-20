// Import necessary modules
import { Course } from '../../components/course'; 
import { YoutubeEmbed } from '../../components/youtube';
import { Container } from '../../components/container';
import Head from 'next/head'; // For SEO and metadata

// The all.tsx page component
const AllCoursesPage = () => {
  return (
    <>
      <Head>
        <title>All Courses | AutoNetOps</title>
        <meta name="description" content="Browse all available courses on network automation." />
      </Head>
      
      {/* Layout container for the page */}
      <Container>
        <h1 className="text-3xl font-title font-bold text-neutral-950 mb-8">Available Courses</h1>
        
        {/* Rendering the Course component */}
        <Course />
        {/*{<YoutubeEmbed embedId="si=dcCYX5cw_b_uJryp&amp;list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d" /> } */}
        
        
        {/* You can add more courses or components here if needed */}
      </Container>
    </>
  )
}

export default AllCoursesPage;
