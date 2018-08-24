import axios from "axios";

export default {
  // Gets all saved articles
  getSavedArticles: function() {
    return axios.get("/api/articles/saved");
  },

  // Deletes the book with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/delete/" + id);
  },
  // Saves a book to the database
  saveArticle: function(articleData) {
    console.log("try to save")
    return axios.post("/api/articles/save", articleData);
  }
};
