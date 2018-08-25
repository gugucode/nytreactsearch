import React from "react";
import API from "../../utils/API";
import ShowSavedArticles from "../../components/showSavedArticles";

class SavedArticles extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            savedArticles: []
        }
    }

    componentDidMount = () => {
        this.getSavedArticlesEvent();
    }
    
    getSavedArticlesEvent = () => {
        API.getSavedArticles()
        .then(res => {
            this.setState({
                savedArticles: res.data
            })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <ShowSavedArticles data={this.state.savedArticles}/>
            </div>
        )
    }
}

export default SavedArticles;