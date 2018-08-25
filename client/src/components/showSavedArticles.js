
import React from "react";
import API from "../utils/API";
import $ from "jquery";

class ShowSavedArticles extends React.Component {
    // Handle remove article event
    removeArticle = (id) => {
        API.deleteArticle(id)
        .then(res => {
            // if article is removed from DB, hide the article
            $(`#saved_${res.data._id}`).fadeOut("slow");
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <i className="fas fa-newspaper"></i>
                    Saved Articles
                </div>
                <div className="panel-body">
                    <ul className="list-group">
                    {/* print the saved articles */}
                    {this.props.data.map(article => (
                        <li key={article._id} className="list-group-item d-flex justify-content-between align-items-center" id={`saved_${article._id}`}>
                            <div className="row">
                                <div className="col-12 col-md-9">
                                    <a href={article.url}>{article.title}</a>
                                </div>
                                <div className="col-5 col-md-2">
                                    <p>{(article.date).slice(0,10)}</p>
                                </div>
                                <div className="col-4 col-md-1">
                                    <button type="button" className="btn btn-warning btn-sm" onClick={()=> this.removeArticle(article._id)}>remove</button>
                                </div>
                            </div>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default ShowSavedArticles;