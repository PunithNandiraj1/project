import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
const endpoint = 'http://localhost:4000/products/add'
class App extends Component {

  state ={
    products:[],
    product:{
      name: '',
     // price:0

    }
  }
  componentDidMount(){
    this.getProducts();
    
  }
  getProducts = _ =>  {
    fetch('http://192.168.136.17:4000/products')
     .then(response => response.json()
     .then(response => this.setState({products: response.data}))
     .catch(err => console.log(err)));
  }

  addProduct = _ =>{
    const{product} =this.state;
   
    
 console.log(product);

    fetch('http://192.168.136.17:4000/products/add',{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method :'POST',
      body : JSON.stringify(product)
      })
      .then(this.getProducts)
      .catch(err => console.error(err))
   }
   
  // axios
  // .post(endpoint, data, {
  //   headers: {
  //    'Content-Type': 'application/json'
  // }
    
  // }).then(this.getProducts)
  //   .catch(err => console.error(err))

  dowloadText = _ =>{
    fetch('http://192.168.136.17:4000/download',{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method :'POST',
      body : JSON.stringify()
      }).then(response => response.json()
      .catch(err => console.log(err)));
    }
   
   renderProduct = ({td_id,name}) => <div key={td_id}>{name}</div>
  render() {
    const {products,product}= this.state;
    return (
      <div className="App">
       {products.map(this.renderProduct)}
       <div>
         <input 
         value={product.name} 
          onChange={e => this.setState({ product: { ...product,name: e.target.value}})}/> 
         {/* <input 
          value={product.price}
          onChange={e => this.setState({ product: { ...product,price: e.target.value}})}/>  */}
          <button onClick={this.addProduct}> Submit </button>
       </div>
      </div>
    );
  }
}

export default App;
