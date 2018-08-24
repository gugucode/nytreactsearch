import React from 'react';
import { Form, ShowArticles } from '../../components';
import axios from "axios";

class searchArticles extends React.Component {
  constructor(props){
    super(props);
    this.state = {   
      searchKey: "",
      validkey : {visibility: 'hidden'},
      retrieveNum: 0,
      startYear: "",
      endYear: "",
      validStartYear : {visibility: 'hidden'},
      validEndYear : {visibility: 'hidden'},
      searchResult: [],
      saveArticles: []
    }
  }

  convertDate = (d) => {
    if(d !== ""){
      console.log(typeof d)
      const year = d.getFullYear();
      const month = d.getMonth()+1 < 10 ? `0${d.getMonth()+1}`: `${d.getMonth()+1}`;
      const day = d.getDate() < 10 ? `0${d.getDate()}`: `${d.getDate()}`;;
      return `${year}${month}${day}`;
    }
    return "";
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
    this.setState({validkey: {visibility: 'hidden'}})
  }

  handlClear = event => {
    this.setState({searchResult: []})
  }

  handleSubmit = event => {
    event.preventDefault();
    const specialChar = ['*','$','#','%','@','&','^','~']
    const begin_date = this.convertDate(this.state.startYear);
    const end_date = this.convertDate(this.state.endYear);
 
    let d = {
      'api-key': "414e5ea5e0604d6fac912d88e362063a",
          q: this.state.searchKey,
          sort: 'newest',
          page: this.state.retrieveNum,
    };

    if(begin_date !== ""){
      d.begin_date = begin_date;
    }

    if(end_date !== ""){
      d.end_date = end_date;
    }

    if(this.state.searchKey !== "" && specialChar.indexOf(this.state.searchKey) === -1){
      axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
        params: {
          ...d
        }
      })
      .then(response => {
        console.log(response.data.response.docs)
        this.setState({searchResult: response.data.response.docs})
      })
      .catch(function (error) {
        console.log(error);
        
      });
    }else{
      this.setState({validkey: {visibility: 'visible'}})
    }
    console.log(this.state)
  };

  handleStartYearChange = event => {
    const startYear = new Date(event.target.value);
    console.log(typeof startYear)
    if(this.state.endYear === "" || startYear < this.state.endYear){
      this.setState({startYear: startYear})
      this.setState({validStartYear: {visibility: 'hidden'}})
    }else{
      this.setState({
        startYear: "",
        validStartYear: {visibility: 'visible'}
      })
    }
  };

  handleEndYearChange = event => {
    const endYear = new Date(event.target.value);
    if(this.state.startYear === "" || endYear > this.state.startYear){
      this.setState({endYear: endYear})
      this.setState({validEndYear: {visibility: 'hidden'}})
    }else{
      this.setState({
        endYear: "",
        validEndYear: {visibility: 'visible'}
      })
    }
  };

  render() {
    return (
      <div className="container">
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
