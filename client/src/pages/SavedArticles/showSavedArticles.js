import React from 'react';
import {Form,ShowArticles, ShowSavedArticles } from '../../components';
import API from "../../utils/API";
// import axios from "axios";

class DisplaySavedArticles extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            savedArticles: []
        }
    }
    
    componentDidMount = () => {
        API.getSavedArticles()
        .then(res => {
            console.log(res)
            // this.setState({
            //     savedArticles: res
            // })
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

export default DisplaySavedArticles;