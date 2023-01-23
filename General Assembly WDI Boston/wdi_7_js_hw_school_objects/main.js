// Application namespace
var CourseApp = {};

// =========== STUDENT ==============
CourseApp.Student = function(name) {
                 // a student object properties
}

// This will give all the students access to a method .generate_html
// which you can use to render each student to the page indvidiually
CourseApp.Student.prototype.generate_html = function(){ ...}


// ===========  TEACHER ==============
CourseApp.Teacher = function(name) {
                 // a teacher object properties
}
// This will give all the teachers access to a method .generate_html
// which you can use to render each student to the page indvidiually
CourseApp.Teacher.prototype.generate_html = function(){ ...}

// =========== COURSE ==============
CourseApp.Course = function(name) {
                 // a course object properties
}

// This will give all the courses access to a method .generate_html
// which you can use to render each student to the page indvidiually
CourseApp.Course.prototype.generate_html = function(){ ...}





///////////////////////////////////////////////////////////
//                                                       //
//            BONUS STAGE BELOW                          //
//                                                       //
///////////////////////////////////////////////////////////


// The following 3 methods will run ONLY when you click the 
// 'Add Foo' button in the HTML. Ignore what the 'e' is in each
// of the methods

// For example, if I click the 'Add Teacher' button on the page
// the 'CourseApp.add_teacher' method will run

CourseApp.add_teacher = function(e){
  // Prompt the user for information to add a teacher
  // Append this teacher to the list of teachers on the page
}

CourseApp.add_course = function(e){
  // Prompt the user for information to add a course
  // Append this course to the list of courses on the page
}

CourseApp.add_student = function(e){
  // Prompt the user for information to add a student
  // Append this student to the list of students on the page
}