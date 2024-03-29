import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';


const News = (props) => {
  let {country, category} = props;
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [pageSize, setPageSize] = useState(9);
  const [loading, setLoading] = useState(true);
const handleOnNext = async ()=>{
  setPage(page+1);
}
const handleOnPrev = async ()=>{
  setPage(page-1);
}


  useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
        let fetched = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=a90ea2fa560b44bdade55343ba306110&page=${page}&pageSize=9`);
        // let fetched = await fetch("news-monkey/SampleOutput.json");
        let data = await fetched.json();
        setArticles(data.articles);
        setTotalResults(data.totalResults);
        // console.log(data.articles);
        setLoading(false);
    };
    fetchData();
  }, [page,category]);

  useEffect(()=>{
    const restart = ()=>{
      setPage(1)
    }
    restart();
  },[category]);

  return (
    <>
      {(loading)?<Spinner/>:null}
    {(!loading)?<div className="container my-3">
      <div className='buttons d-flex justify-content-around'>
        <button type="button" disabled={page<2} onClick={handleOnPrev} className="btn btn-success"> &larr; Prev.</button>
        <button type="button" onClick={handleOnNext} disabled={totalResults<(page)*pageSize} className="btn btn-success">Next &rarr;</button>
      </div> 
        
      <h2>News Monkey - {category.toUpperCase()} Headlines</h2>
      <div className='row'>
        {articles.map((ele, index) => (
          <div className='col-md-4' key={index}>
            <NewsItem
              title={ele.title}
              description={(ele.description)?ele.description:""}
              imgUrl={(ele.urlToImage)}
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
    </div>:null}
    </>
  );
};

export default News;

News.defaultProps = {
  country : 'in',
  category : 'general'
}