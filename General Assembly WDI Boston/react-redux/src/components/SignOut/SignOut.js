import { Component } from 'react'
import { connect } from 'react-redux'
import { initiateSignOut } from '../../actions/user'

class SignOut extends Component {
  componentDidMount () {
    const { user, dispatch } = this.props
    dispatch(initiateSignOut(user))
  }

  render () {
    return ''
  }
}

const mapStateToProps = state => ({ user: state.user })

export default connect(mapStateToProps)(SignOut)
