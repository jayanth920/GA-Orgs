import React from 'react';
import './Validator.css';

function Validator () {
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Username" id="username" />

          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" />
          
          <label htmlFor="passwordConfirm">Confirm password</label>
          <input
            type="password"
            placeholder="Confirm password"
            id="passwordConfirm"
          />
          
          <button type="submit">Sign Up</button>
          <p>Passwords must match.</p>
        </form>
      </div>
    );
}

export default Validator;
