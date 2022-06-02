import React from 'react';
import WikiViewer from "./WikiViewer";
import axios from 'axios';

// WikiViewer container component
export default class WikiViewerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      searched: false
    };
    this.searchHandler = this.searchHandler.bind(this);
  }

  // Scroll to the very top on load
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  // Retrieve and save articles
  searchHandler(e) {
    e.preventDefault(); // prevent refresh on submit
    let searchInput = document.getElementById("search-input").value;
    console.log(`Searching articles for "${searchInput}"`);

    // Request for articles from server
    axios.get("/wikiApi", { params: {searchInput} })
      .then(res => {
        let searchResults = res.data.query.search;

        // Format articles data
        searchResults = searchResults.map(article => {
          let updatedArticle = {...article};
          // Remove html tags from article snippet
          updatedArticle.snippet = updatedArticle.snippet.replace( /(<([^>]+)>)/ig, '');
          // Format timestamp
          let updatedTimestamp = new Date(updatedArticle.timestamp)
          updatedArticle.timestamp = updatedTimestamp.toLocaleDateString();
          return updatedArticle;
        })

        this.setState({
          searchResults: [...searchResults],
          searched: true
        });
      })
      .catch(err => console.log(err));
  }
  
  render() {
    // Send data to presentational component
    return <WikiViewer
      searchResults={this.state.searchResults}
      searched={this.state.searched}
      searchHandler={this.searchHandler}/>;
  }
};