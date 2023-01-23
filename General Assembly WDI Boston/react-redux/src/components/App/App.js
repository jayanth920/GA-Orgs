import React, { Fragment } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import Header from '../Header/Header'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'

const App = ({ alerts, user }) => (
  <Fragment>
    <Header />
    <main className="container">
      <Route
        path='/sign-up'
        render={() => (<SignUp />)}
      />
      <Route
        path='/sign-in'
        render={() => (<SignIn />)}
      />
      <AuthenticatedRoute
        user={user}
        path='/sign-out'
        component={SignOut}
      />
      <AuthenticatedRoute
        user={user}
        path='/change-password'
        component={ChangePassword}
      />
    </main>
    {alerts && alerts.map((alert, index) => (
      <AutoDismissAlert
        key={index}
        alert={alert}
      />
    ))}
  </Fragment>
)

const mapStateToProps = state => (
  {
    alerts: state.alerts,
    user: state.user
  }
)

export default withRouter(connect(mapStateToProps)(App))
