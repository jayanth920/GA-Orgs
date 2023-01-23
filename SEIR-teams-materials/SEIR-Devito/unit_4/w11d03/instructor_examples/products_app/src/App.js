import React, { Component } from 'react';
import products from './data.js'
import AllTheThings from './components/AllTheThings.js'
import MyShoppingCart from './components/MyShoppingCart.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      products: products,
      cart: []
    }
    this.addToCart = this.addToCart.bind(this)
    this.removeCartItem = this.removeCartItem.bind(this)
  }

  // create a addToCart method that will
  // update the cart array with a product
  // using this.setState({})
  addToCart (item) {
    // WITHOUT binding this would return undefined
    // WITH binding it would return? App {}
    //console.log('this is this', this)
    //console.log('this is time from addToCart', item)
     this.setState({
       cart: [item, ...this.state.cart]
     })
   //console.log('this is cart in state', this.state.cart)
 }

 removeCartItem(index) {
   console.log('this is index from removeCartItem', index)
   let newArr = this.state.cart.slice()
   newArr.splice(index,1)
   this.setState({
     cart: newArr
   })
 }

 // REMOVE AN ITEM FROM CART
 // Create the removeCartItem method
 //   - create a new array that is a replica of this.state.cart using slice()
 //   - use splice to remove the element from the array based on its index
 //   - set state to the spliced array
 // Bind the removeCartItem method in the constructor
 // Pass the method down as a prop to MyShoppingCart
 // Add an onClick event to the the item that calls the removeCartItem method
 // Pass the index of the item to removeCartItem when it's called


  // what is the one required method in component..render
  render() {
    return (
      <div className="App">

        <h1>Big Time Shopping</h1>

        <div className="AllTheThings">
        <h2>Put these in your cart!</h2>
        {this.state.products.map((product, index) => {
          return (
            <AllTheThings
              product={product}
              key={index}
              handleAdd={this.addToCart}
            />
          )
        })}
        </div>
        <MyShoppingCart
          cart={this.state.cart}
          handleRemove={this.removeCartItem}
        />
      </div>
    );
  }
}

export default App;
