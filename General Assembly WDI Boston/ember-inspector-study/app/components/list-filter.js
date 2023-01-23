import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-filter'],
  value: '',

  init () {
    this._super(...arguments)
    this.get('filter')('').then((results) => this.set('results', results))
  },

  actions: {
    handleFilterEntry () {
      const filterInputValue = this.get('value')
      const filterAction = this.get('filter')
      filterAction(filterInputValue).then((filterResults) => this.set('results', filterResults))
    }
  }

})
