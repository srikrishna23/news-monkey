import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0)
const handleOnNext = async ()=>{
  setPage(page+1);
}
const handleOnPrev = async ()=>{
  setPage(page-1);
}

// const maxPages = async ()=>{
   let pageSize = 12
//   if(Math.ceil(totalResults/pageSize)+1<page){
//     return true;
//   }
//   return false;
// }

  useEffect(() => {
    const fetchData = async () => {
        let fetched = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a90ea2fa560b44bdade55343ba306110&page=${page}&pageSize=12`);
        let data = await fetched.json();
        setArticles(data.articles);
        console.log(page);
        setTotalResults(data.totalResults);
        console.log("Total results"+ totalResults)
    };
    fetchData();
  }, [page]);

  return (
    <div className="container my-3">
    {/* ________________________________________________________ */}
    <div className='buttons d-flex justify-content-around'>
        <button type="button" disabled={page<2} onClick={handleOnPrev} className="btn btn-success"> &larr; Prev.</button>
        <button type="button" onClick={handleOnNext} disabled={totalResults<(page)*pageSize} className="btn btn-success">Next &rarr;</button>
      </div>  
    {/* ______________________________________________________ */}
      <h2>News Monkey - Top Headlines</h2>
      <div className='row'>
        {articles.map((ele, index) => (
          <div className='col-md-4' key={index}>
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
      <div className='buttons d-flex justify-content-around'>
        <button type="button" disabled={page<2} onClick={handleOnPrev} className="btn btn-success"> &larr; Prev.</button>
        <button type="button" onClick={handleOnNext} disabled={totalResults<(page)*pageSize} className="btn btn-success">Next &rarr;</button>
      </div>
    </div>
  );
};

export default News;
