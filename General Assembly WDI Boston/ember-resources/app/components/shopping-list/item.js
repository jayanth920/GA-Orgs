import Component from '@ember/component'

export default Component.extend({
  tagName: 'li',
  classNameBindings: ['crossed'],
  crossed: false,
  actions: {
    crossOff () {
      this.toggleProperty('crossed')
    }
  }
})
