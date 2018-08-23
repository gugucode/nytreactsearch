
import React from "react";
import API from "../../utils/API";

// class ShowArticles extends React.Component{
class ShowArticles extends React.Component {
    
    saveArticle = (data) => {
        console.log("saving")
        API.saveArticle(data);
    }

    render() {  
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <i className="fas fa-newspaper"></i>
                    Search results
                </div>
                <div className="panel-body">
                    <ul className="list-group">
                        {this.props.data.map(article => {
                            const data = {
                                title: article.headline.print_headline,
                                author: "",
                                url: article.web_url,
                                date: (article.pub_date).slice(0,10)
                            }

                            return (
                                <li key={article._id} className="list-group-item d-flex justify-content-between align-items-center" >
                                    <div className="row">
                                        <div className="col-12 col-md-9">
                                            <a href={data.url}>{data.title} </a>
                                        </div>
                                        <div className="col-5 col-md-2">
                                            <span>{data.date}</span>
                                        </div>
                                        <div className="col-4 col-md-1">
                                            <button type="button" className="btn btn-info btn-sm" onClick={() => this.saveArticle(data)}>Save</button>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
    
};

export default ShowArticles;