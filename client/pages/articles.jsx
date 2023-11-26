


import Link from 'next/link';

export default function ArticlesPage({ articles }) {
  return (
    <>
      <div className="bg-gray-700 h-screen text-white">
        <h1 className="text-white font-bold underline text-6xl">Articles</h1>
        <br />
        <br />
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <Link href={`/articles/${article.id}`}>
                 {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Fetch your articles data from an API or database
  const articles = [
    { id: '1', title: 'Article 1' },
    { id: '2', title: 'Article 2' },
    // Add more articles as needed
  ];

  return {
    props: {
      articles,
    },
  };
}


