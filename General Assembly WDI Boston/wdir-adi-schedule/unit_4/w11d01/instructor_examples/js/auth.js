class Auth extends React.Component {
    constructor(props){
        super(props);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.state = { username: "Not logged In" }
    }
    handleChangeName(event){
        this.setState({username:event.target.value})
    }
    render(){
        return <form>
            <Greeting name={this.state.username}></Greeting>
            <input
                onChange={this.handleChangeName}
                type="text"
                placeholder="Your Name" />
            <input type="submit" value="Log In" />
        </form>
    }
}
