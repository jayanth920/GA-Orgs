class Heading extends React.Component {
    render(){
        return <h1>Hello, {this.props.name}!</h1>
    }
}

ReactDOM.render(
    <section>
        <Heading name="Matt"></Heading>
        <Heading name="Helen"></Heading>
    </section>,
    document.querySelector('main')
)

// const nums = [1,5,8,10];
// class List extends React.Component {
//     render(){
//         return <ul>
//             {nums.map( (num, index) =>
//                 <li key={index}>{num}</li>
//             )}
//         </ul>
//     }
// }
//
// ReactDOM.render(
//     <List></List>,
//     document.querySelector('main')
// )
