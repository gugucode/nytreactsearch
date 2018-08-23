import axios from "axios";

export default {
  // Gets all saved articles
  getSavedArticles: function() {
    return axios.get("/api/savedArticles");
  },

  // Deletes the book with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/article/" + id);
  },
  // Saves a book to the database
  saveArticle: function(articleData) {
    console.log("try to save")
    return axios.post("/api/article", articleData);
  }
};
