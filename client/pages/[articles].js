// client/pages/articles/[articleId].js
import { useRouter } from 'next/router';

const ArticlePage = () => {
  const router = useRouter();
  const { articleId } = router.query;

  // Les données factices de l'article
  const articleData = {
    id: articleId,
    title: `Titre de l'article ${articleId}`,
    content: `Contenu de l'article ${articleId}`,
  };

  return (
    <div>
      <h1>Article {articleData.id}</h1>
      <h2>{articleData.title}</h2>
      <p>{articleData.content}</p>
    </div>
  );
};

export default ArticlePage;
