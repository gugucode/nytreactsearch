
import React from "react";
import API from "../utils/API";

class ShowSavedArticles extends React.Component {
    removeArticle = (id) => {
        API.deleteArticle(id)
        .then(res => {
            console.log(res.data)
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
                    {this.props.data.map(article => (
                        <div key={article._id} className="row">
                            <div className="col-8">
                                <a href={article.url}>{article.title}</a>
                                <p>{article.date}</p>
                            </div>
                            <div className="col-3">
                                <button type="button" className="btn btn-info" onClick={()=> this.removeArticle(article._id)}>remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default ShowSavedArticles;