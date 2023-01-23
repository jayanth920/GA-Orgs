import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return {
      blogpost: null,
      comments: null
    };
  }
});
