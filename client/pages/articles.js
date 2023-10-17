// client/pages/articles.js
import React from 'react';

const articlesData = [
  { id: 1, title: 'Article 1', content: 'Contenu de l\'article 1' },
  { id: 2, title: 'Article 2', content: 'Contenu de l\'article 2' },
  // Ajoutez d'autres articles fictifs ici
];

const Articles = () => {
  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articlesData.map(article => (
          <li key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
