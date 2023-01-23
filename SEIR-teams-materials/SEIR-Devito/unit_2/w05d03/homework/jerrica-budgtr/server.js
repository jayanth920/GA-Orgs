// =======================================
// DEPENDENCIES
// =======================================
// packages
const express = require('express');

// etc. config
const app = express();
const port = 3000;

// =======================================
// MIDDLEWARE
// =======================================
// body-parser - parses out form data from body of request
app.use(express.urlencoded({ extended: false }));
// static - allows us to access the 'public' folder and use static files like css
app.use(express.static('public'));

// =======================================
// DATA
// =======================================
const Budget = require('./models/budget.js');

// =======================================
// GET ROUTES
// =======================================
// root index, redirects to /budgets
app.get('/', (req, res) => {
  res.redirect('/budgets');
});

// budgets index, displays all data
app.get('/budgets', (req, res) => {
  // default bankAccount var
  let bankAccount = 0;
  // loop through budget data to add onto bankAccount
  for (let budgetItem of Budget) {
    bankAccount += budgetItem.amount;
  }
  // default status var (will be treated as classes on the index page)
  let status = 'default';
  // check the status of the bankAccount
  if(bankAccount < 0) {
    status = 'negatives';
  } else if (bankAccount > 1000) {
    status = 'wealthy';
  }
  // render the index
  res.render('index.ejs', {
    budgets: Budget,
    bankAccount: bankAccount,
    status: status
  });
});

// renders the create a new page
app.get('/budgets/new', (req, res) => {
  res.render('new.ejs');
})

// budgets show, displays one specific budget
app.get('/budgets/:id', (req, res) => {
  res.render('show.ejs', {
    budget: Budget[req.params.id]
  });
});

// =======================================
// ACTION ROUTES
// =======================================
// create a new budget item
app.post('/budgets', (req, res) => {
  // change the 'amount' value to an integer instead of a string
  req.body.amount = parseInt(req.body.amount);
  // push the req.body into the Budget data
  Budget.push(req.body);
  // redirect to the index page
  res.redirect('/budgets');
});

// =======================================
// LISTENER
// =======================================
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
