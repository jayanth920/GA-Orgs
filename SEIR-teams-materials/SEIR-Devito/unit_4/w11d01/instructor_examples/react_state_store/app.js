console.log('this is products', products)
const message = 'Hi there!'
// Create our App Component
class App extends React.Component {
  constructor(props) {
    // super allows us to reference the this keyword
    // super also inherits all the parent functionality
    super(props)
    // props is an object and is passed in as an object
    // state is an object that we create as an object
    this.state = {
      products: products,
      name: '',
      price: 0,
      description: 'Describe the item',
      isHiring: true
    }
    // this give handleChange a context of this being the App
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleHiring = this.toggleHiring.bind(this)
  }
  // create a new method to handle changes to input
  handleChange(event){
    console.log(event.target.value)
    console.log('this is this inside of handleChange', this)
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  handleSubmit(event) {
    // .preventDefault() prevents the page from loading
    event.preventDefault()
    // making any reference to the keyword this...requires that this method
    // be bound in the constructor
    // create a new object with key/values stored in state
    // call this.setState to unshift the new obj into the first place in the array
    // reset the values in state so that they clear the input fields
    const newItem = {
      name: this.state.name,
      price: this.state.price,
      description: this.state.description
    }
    // ...products is the ES6 Spread Operator
    this.setState({
      products: [ newItem, ...products],
      name: '',
      price: 0,
      description: 'Describe the item'
    })
  }
  toggleHiring () {
    // binding the method in constuctor give our method access
    // to the context of this bound to the App
    this.setState( {isHiring: !this.state.isHiring})
  }
  // render is a required method for a react Class Component
  render () {
    console.log('this is this inside of render', this)
    // render must return JSX
    // let productsMap = this.state.products.map(product => <li>{product.name}</li>)
    // console.log('this is productsMap', productsMap)
    return (
      <div>
        <h1 onClick={this.toggleHiring}> Big Time Shopping</h1>
        {!this.state.isHiring ? <h2>Yes, we are hiring</h2> : <h2>Nope</h2>}
        <form>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            value={this.state.name}
            onChange={this.handleChange}
            /* id is being used here to reference the elements key in state */
            id='name'
            placeholder='name of product' />
          <br />
          <label htmlFor='price'>Price</label>
          <input
            type='number'
            value={this.state.price}
            onChange={this.handleChange}
            id='price' />
          <br />
          <label htmlFor='description'>Description</label>
          <input
            type='textarea'
            value={this.state.description}
            onChange={this.handleChange}
            id='description' />
            <input type='submit' />
          </form>
        </form>
        <div>
          <h2>Preview our new item</h2>
          <h3>{this.state.name}</h3>
          <h4>{this.state.price}</h4>
          <h5>{this.state.description}</h5>
        </div>
        <ul>
        {/* this is a comment inside of JSX */}
        {/* all variables must use {} to be enumerated */}
         {this.state.products.map(product => {
           return (
            <li>{product.name} {product.price}</li>)
            } // closes the code block
          ) // closes the return
        } // closes the jsx codeblock
        </ul>
      </div>
    )
  }
}


// Use ReactDOM to render the parent Component
ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
