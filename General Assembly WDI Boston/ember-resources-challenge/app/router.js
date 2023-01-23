import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('blogposts');
  this.route('blogpost', {path: '/blogposts/:blogpost_id'});
});

export default Router;
