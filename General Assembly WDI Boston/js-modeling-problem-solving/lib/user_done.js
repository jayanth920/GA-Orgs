module.exports = User;

var Dept = require('./department.js'),
    DepartmentRole = require('./departmentRole.js'),
    _ = require('lodash');


//////////////////////////////////////////////
/// User
//////////////////////////////////////////////

//////////////////////////////////////////////
// Class Variables
User.departments = [];
User.departmentRoles = [];


//////////////////////////////////////////////
// Class methods

User.addDepartment = function(deptName){
  var department = new Dept(deptName);
  User.departments.push(department);
  return department;
};

User.addToDepartmentRole = function(user, dept, role){
  console.log("Adding ", user.name, "to dept", dept, "as a ", role);
  User.departmentRoles.push(new DepartmentRole(user.id, dept.id, role));
};


// create a class method that will genreate an id.
User.getID = (function(){
  var id = 0;

  return function(){
    var origID = id;
    id = id + 1;
    return origID;
  };
})();

//////////////////////////////////////////////
// Constructor Function

function User(name){
  this.name = name;
  this.storeManager = false;
  this.id = User.getID();
}

//////////////////////////////////////////////
// Instance Methods
User.prototype.setAsStoreManager = function(){
  this.storeManager = true;
};

// private method, find all the user's department ids
function _departmentIDs(user){
  return _.uniq(_.pluck(_.filter(User.departmentRoles, function(dp){
    return dp.userID === user.id;
  }), 'deptID'));
};

// private method, find all the user's products
function _products(user){
  var products = [];
  user.departments().forEach(function(dept){
    products = products.concat(dept.products);
  });
  return products;
};

// Find all the user's departments
User.prototype.departments = function(){
  var departments,
      departmentIDs;

  if(this.storeManager){
    departments = User.departments;
  }else{
    departmentIDs = _departmentIDs(this),
    departments = [];
    console.log(this.name, 'department ids are', departmentIDs);
    User.departments.forEach(function(dept){
      if(_.include(departmentIDs, dept.id)){
        departments.push(dept);
      }
    });
  }
  return departments;
};

// find all the user's products.
User.prototype.findProducts = function(){
  var products = [];
  if(this.storeManager){
    User.departments.forEach(function(dept){
      products = products.concat(dept.products);
    });
  }else{
   products = _products(this);
  };
  return products;
};
