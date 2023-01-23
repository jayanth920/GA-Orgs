import Ember from 'ember'

export default Ember.Component.extend({
  classNames: ['listr'],
  classNameBindings: ['listDetailHidden'],
  listDetailHidden: false,
  actions: {
    toggleDetail () {
      this.toggleProperty('listDetailHidden')
    }
  }
})
