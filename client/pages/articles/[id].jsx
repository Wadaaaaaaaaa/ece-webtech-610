import Link from 'next/link';

export default function ArticlePage({ article }) {
  return (
    <>
      <div className="bg-gray-700 h-screen text-white">
        <h1 className="text-white font-bold underline text-6xl">Article {article.id}</h1>
        <br />
        <p>{article.content}</p>
        <br />
        <Link href="../articles">Back to Articles</Link>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  // Fetch the list of article IDs from your API or database
  const articleIds = ['1', '2']; // Replace with actual article IDs

  const paths = articleIds.map((id) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch the article data based on the id
  // For example, you can query your API or database here
  const article = {
    id: params.id,
    content: 'This is the content of Article ' + params.id,
  };

  return {
    props: {
      article,
    },
  };
}
