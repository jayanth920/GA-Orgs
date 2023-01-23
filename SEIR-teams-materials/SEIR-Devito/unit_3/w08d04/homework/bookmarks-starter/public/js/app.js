// ==================================
//          SET UP
// ==================================
const app = angular.module('BookmarkApp', []);

// ==================================
//          CONTROLLER
// ==================================
app.controller('BookmarkController', ['$http', function($http) {

  // ==================================
  //          VARIABLES
  // ==================================
  this.editIndex = null

  // ==================================
  //          BACKEND ROUTES
  // ==================================
  // get all bookmarks
  this.getBookmarks = () => {
    $http({
      method: 'GET',
      url: '/bookmark'
    }).then((res) => {
        this.allBookmarks = res.data
    }, (err) => {
        console.log(err)
    })
  }

  // create new bookmark
  this.newBookmark = () => {
    $http({
      method: 'POST',
      url: '/bookmark',
      data: this.newBookmarkData
    }).then((res) => {
        // clears the forms
        this.newBookmarkData = null
        // makes it so the page automatically adds the new bookmark on the page
        this.getBookmarks()
    }, (err) => {
        console.log(err)
    })
  }

  // delete bookmark
  this.deleteBookmark = (id) => {
    $http({
      method: 'DELETE',
      url: '/bookmark/' + id
    }).then((res) => {
      // makes it so the page automatically removes the bookmark from the page
      this.getBookmarks()
    }, (err) => {
        console.log(err)
    })
  }

  this.editBookmark = (id) => {
    // http put req
    $http({
      method: 'PUT',
      url: '/bookmark/' + id,
      data: this.editData
    }).then((res) => {
      // makes it so the page automatically edits the bookmark on the page
      this.getBookmarks()
      // hides the form
      this.editIndex = null
    }, (err) => {
        console.log(err)
    })
  }

  // ==================================
  //          FRONTEND MANIP
  // ==================================
  // show edit form
  this.showEditBookmark = (bookmark, id) => {
    this.editData = bookmark
    this.editIndex = id
  }

  // call on getBookmarks on page load
  this.getBookmarks()

}])
