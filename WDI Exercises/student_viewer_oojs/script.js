$(document).ready(function(){
  for(var i = 0; i < students.length; i++){
    var student = new Student(students[i].name, students[i].age, students[i].favoriteFood, students[i].imgUrl)
    var studentView = new StudentView(student)
    studentView.render()
    $(".students").append(studentView.el)
  }
})
