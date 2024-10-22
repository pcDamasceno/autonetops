import Link from 'next/link';
import { useEffect, useRef } from 'react';

type Tag = {
  id: string;
  name: string;
  slug: string;
}

type Post = {
  title: string;
  tags: Tag[];
};

type TagListProps = {
  title: string;
  posts: Post[];
};

export const TagList = ({ title, posts }: TagListProps) => {
  const uniqueTags = new Map<string, Tag>();

  posts.forEach(post => {
    post.tags.forEach(tag => {
      uniqueTags.set(tag.id, tag);
    });
  });

  const tagsArray = Array.from(uniqueTags.values());
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const handleScroll = () => {
        scrollContainer.scrollBy({
          left: 1, // Adjust the scroll speed
          behavior: 'smooth',
        });
      };

      const intervalId = setInterval(handleScroll, 50); // Adjust the interval for scroll speed

      return () => clearInterval(intervalId);
    }
  }, []);

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <div className="overflow-hidden">
        <div
          ref={scrollRef}
          className="flex space-x-4 animate-scroll"
          style={{ animation: 'scroll 20s linear infinite' }} // Adjust the duration as needed
        >
          {tagsArray.map(tag => (
            <Link key={tag.id} href={`/tags/${tag.slug}`}>
              <div className="bg-gray-200 text-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
                {tag.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%); /* Scroll left */
          }
        }
      `}</style>
    </div>
  );
};
