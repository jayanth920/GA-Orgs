// class Greeting extends React.Component{
//     render(){
//         return <h1>Welcome {this.props.name}!</h1>
//     }
// }

// class Auth extends React.Component{
//     constructor(props){
//         super(props)
//         this.handleFormSubmit = this.handleFormSubmit.bind(this)
//     }
//     handleFormSubmit(event){
//         event.preventDefault();
//         this.props.onLogin(this.refs.username.value)
//     }
//     render(){
//         return <form onSubmit={this.handleFormSubmit}>
//             <input
//                 ref="username"
//                 type="text"
//                 placeholder="Your Name"/>
//             <input type="Submit"  value="Log In"/>
//         </form>
//     }
// }
//
// class Heading extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = { username: null };
//         this.updateUsername = this.updateUsername.bind(this);
//     }
//     updateUsername(newName){
//         this.setState({username:newName});
//     }
//     render(){
//         return <header>
//             <h1>Welcome {this.state.username}</h1>
//             <Auth onLogin={this.updateUsername}></Auth>
//         </header>
//     }
// }
//
// ReactDOM.render(
//     <Heading></Heading>,
//     document.querySelector("main")
// )

class MovieInfo extends React.Component {
    render(){
        return <ul>
            <li>Title: {this.props.data.Title}</li>
            <li>Directors: {this.props.data.Director}</li>
            <li>Actors: {this.props.data.Actors}</li>
            <li>Year: {this.props.data.Year}</li>
            <li>Rated: {this.props.data.Rated}</li>
        </ul>
    }
}

class OMDBQueryForm extends React.Component {
    constructor(props){
        super(props);
        this.queryOMDB = this.queryOMDB.bind(this);
        this.state = {foundMovie: null}
    }
    queryOMDB(event){
        event.preventDefault();
        fetch('http://www.omdbapi.com/?apikey=53aa2cd6&t='+this.refs.title.value).then(
            (response) => {
                response.json().then(
                    (data) => {
                        console.log(data);
                        this.setState({foundMovie: data})
                    }
                )
            }
        )
    }
    render(){
        return <form onSubmit={this.queryOMDB}>
            <input
                ref="title"
                type="text"
                placeholder="Movie Title"/>
            <input type="submit" value="Find Movie Info"/>
            {
                (this.state.foundMovie !== null)?
                    <MovieInfo data={this.state.foundMovie}></MovieInfo>
                :
                    null
            }
        </form>
    }
}


ReactDOM.render(
    <OMDBQueryForm></OMDBQueryForm>,
    document.querySelector('main')
)
