import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let { title, description, imgUrl, newsUrl, pageUrl} = this.props;
    return (
      <div>
          <div className="row mx-3">
                <div className="col-md-3 my-4">
                    <div className="card" style={{width: "18rem"}}>
                        <img src={imgUrl || "https://images.theconversation.com/files/377569/original/file-20210107-17-q20ja9.jpg?ixlib=rb-1.1.0&rect=278%2C340%2C4644%2C3098&q=45&auto=format&w=926&fit=clip"} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">{String(title).length<60?title:title.slice(0,60)}</h5>
                          <p className="card-text">{String(description).length<80?description:description.slice(0,80)}</p>                 
                          <a href={(pageUrl)?pageUrl:"https://www.youtube.com/watch?v=cIqgQn-XBIQ&list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&index=27"} target="_blank" className="btn btn-sm btn-primary">more details</a>
                        </div>
                    </div>
                </div>
          </div>
      </div>
    )
  }
}

export default NewsItem
