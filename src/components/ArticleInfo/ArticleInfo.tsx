import React from 'react';
import './ArticleInfo.css';

interface ArticleInfoProps {
  title: string;
  subtitle: string;
  content: string[];
}

const ArticleInfo: React.FC<ArticleInfoProps> = ({ title, subtitle, content }) => {
  return (
    <div className="article-info">
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      {content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default ArticleInfo;
