import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        let fetched = await fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a90ea2fa560b44bdade55343ba306110");
        let data = await fetched.json();
        setArticles(data.articles);
        console.log(data.articles);
    };

    fetchData();
  }, []);

  return (
    <div className="container my-3">
      <h2>News Monkey - Top Headlines</h2>
      <div className='row'>
        {articles.map((ele, index) => (
          <div className='col-md-3' key={index}>
            <NewsItem
              title={ele.title}
              description={ele.description}
              imgUrl={ele.urlToImage}
              newsUrl={ele.content}
              pageUrl={ele.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
