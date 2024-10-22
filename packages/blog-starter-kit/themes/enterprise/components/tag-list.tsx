import Link from 'next/link';

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

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">{title}</h2>
      <div className="overflow-x-auto whitespace-nowrap">
        <div className="flex space-x-4">
          {tagsArray.map(tag => (
            <Link key={tag.id} href={`/tag/${tag.slug}`}>
              <div className="bg-gray-200 text-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-200">
                {tag.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
