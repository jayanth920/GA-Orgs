var component = {
  domElement: null,
  initialize: function(container) {
    // create a dom element
    this.domElement = $('<div>');
    // attach it
    container.append(this.domElement);
  },
  render: function(statusText) {
    // update the dom element
    this.domElement.html(statusText);
  }
};

component.initialize($("#comp_demo"));
component.render("This is a test!");
// component.render("This is a another test!");
