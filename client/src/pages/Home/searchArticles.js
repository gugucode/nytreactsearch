import React from 'react';
import { Form, ShowArticles } from '../../components';
import axios from "axios";
import API from "../../utils/API";

class searchArticles extends React.Component {
  constructor(props){
    super(props);
    this.state = {   
      searchKey: "",
      validkey : {visibility: 'hidden'},
      retrieveNum: 1,
      startYear: "",
      endYear: "",
      validStartYear : {visibility: 'hidden'},
      validEndYear : {visibility: 'hidden'},
      searchResult: [],
      savedArticles: []
    }
  }

  // change date format to "YYYYMMDD"
  convertDate = (d) => {
    if(d !== ""){
      const year = d.getFullYear();
      const month = d.getMonth()+1 < 10 ? `0${d.getMonth()+1}`: `${d.getMonth()+1}`;
      const day = d.getDate() < 10 ? `0${d.getDate()}`: `${d.getDate()}`;;
      return `${year}${month}${day}`;
    }
    return "";
  }

  getSavedArticlesEvent = () => {
    API.getSavedArticles()
    .then(res => {
        this.setState({savedArticles: res.data})
    })
    .catch(err => console.log(err))
  }

  // handle search key and retrieveNum change
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      validkey: {visibility: 'hidden'}
    })
  }

  // handle start year change and validation
  handleStartYearChange = event => {
    const startYear = new Date(event.target.value);
    let d = {
      startYear: "",
      validStartYear: {visibility: 'visible'}
    }

    if(this.state.endYear === "" || startYear < this.state.endYear){
      d.startYear = startYear;
      d.validStartYear = {visibility: 'hidden'}
    }

    this.setState(d);
    
  };

  // handle end year change and validation
  handleEndYearChange = event => {
    const endYear = new Date(event.target.value);
    let d = {
      endYear: "",
      validEndYear: {visibility: 'visible'}
    }

    if(this.state.startYear === "" || endYear > this.state.startYear){
      d.endYear = endYear;
      d.validEndYear = {visibility: 'hidden'}
    }
    this.setState(d)
    
  };

  // Handle clear button event
  handlClear = event => {
    this.setState({searchResult: []})
  }

  // handle Submit event
  handleSubmit = event => {
    event.preventDefault();
    const specialChar = ['*','$','#','%','@','&','^','~']
    const begin_date = this.convertDate(this.state.startYear);
    const end_date = this.convertDate(this.state.endYear);
 
    let d = {
      'api-key': "414e5ea5e0604d6fac912d88e362063a",
      'q': this.state.searchKey,
      'sort': 'newest',
    };

    if(begin_date !== ""){
      d.begin_date = begin_date;
    }

    if(end_date !== ""){
      d.end_date = end_date;
    }

    // if search key is not empty and special character, get articles from New York Time API
    if(this.state.searchKey !== "" && specialChar.indexOf(this.state.searchKey) === -1){
      axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?', {params: d})
      .then(response => {
        this.setState({searchResult: response.data.response.docs.slice(0,this.state.retrieveNum)})
      })
      .catch(error => {console.log(error);});
    }else{
      this.setState({validkey: {visibility: 'visible'}})
    }
  };

  // print main page
  render() {
    return (
      <div>
          <Form 
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit} 
            handlClear={this.handlClear}
            handleStartYearChange={this.handleStartYearChange} 
            handleEndYearChange={this.handleEndYearChange} 
            validEndYear={this.state.validEndYear} 
            validStartYear={this.state.validStartYear}
            validkey={this.state.validkey}
          />
          <ShowArticles data={this.state.searchResult} />
      </div>
    );
  }
}

export default searchArticles;
