import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return {
      blogposts: null,
      comments: null
    };
  }
});
