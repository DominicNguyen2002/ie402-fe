import React from 'react';
import './ArticleCard.css'; // Assuming you want to style your component

interface ArticleCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="article-card">
      <img src={imageUrl} alt="Article" className="article-card__image" />
      <div className="article-card__content">
        <h2 className="article-card__title">{title}</h2>
        <p className="article-card__description">{description}</p>
        <a href="#" className="article-card__link">Đọc câu chuyện</a>
      </div>
    </div>
  );
};

export default ArticleCard;
