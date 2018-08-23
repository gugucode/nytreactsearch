
import React from "react";

class ShowSavedArticles extends React.Component{
    //constructor()
    render() {
        return (
            <div className="panel panel-info">
                <div className="panel-heading">
                    <i className="fas fa-newspaper"></i>
                    Saved Articles
                </div>
                <div className="panel-body">
                    {this.props.data.map(article => (
                        <div className="row">
                            <div className="col-8">
                                <a href={article.url}>{article.title}</a>
                                <p>{article.date}</p>
                            </div>
                            <div className="col-3">
                                <button type="button" className="btn btn-info">remove</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default ShowSavedArticles;