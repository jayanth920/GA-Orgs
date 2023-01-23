function StudentView(student){
  this.student = student;
  this.el = null
}

StudentView.prototype = {
  template: function(){
    var self = this
    var container = $("<div class='student'></div>")
    container.append($("<h1>" + this.student.name + "</h1>"))
    container.append($("<p>Age: " + this.student.age + "</p>"))
    container.append($("<p>Favorite Food: " + this.student.name + "</p>"))
    container.append($("<img src='" + this.student.imgUrl + "'>"))
    container.on("click", function(){
      self.makeBlue()
    })
    return container
  },
  render: function(){
    this.el = this.template()
  },
  makeBlue: function(){
    this.el.css("background", "blue")
  }
}
