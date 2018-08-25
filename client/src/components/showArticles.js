
import React from "react";
import API from "../utils/API";
import ShowSavedArticles from "./showSavedArticles";
import {ShowOneArticle} from "./showOneArticle";

class ShowArticles extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            savedArticles: []
        }
    }

    // Get all saved articles from DB
    getSavedArticlesEvent = () => {
        API.getSavedArticles()
        .then(res => {
            console.log(res)
            this.setState({
                savedArticles: res.data
            })
        })
        .catch(err => console.log(err))
    }

    // Save new article to DB
    saveArticleToDB = (data, id) => {
        console.log("saving")
        API.saveArticle(data)
        .then(res => {
            console.log(this);
            this.getSavedArticlesEvent();
            document.getElementById(id).style.display = "none";
            document.getElementById(`saved_${id}`).style.visibility = "visible"
        })
        .catch(err => console.log(err));
    }

    // get all saved articles from db once this page is load
    componentDidMount = () => {
        this.getSavedArticlesEvent();
    }

    render() {  
        return (
            <div>
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <i className="fas fa-newspaper"></i>
                        Search results
                    </div>
                    <div className="panel-body">
                        <ul className="list-group">
                            {this.props.data.map(article => (
                                    <ShowOneArticle key={article._id} article={article} saveArticleToDB={this.saveArticleToDB}/>
                                )  
                            )}
                        </ul>
                    </div>
                </div>
                <ShowSavedArticles data={this.state.savedArticles}/>
            </div>
        );
    }
    
};

export default ShowArticles;