import React, {Component} from "react";
import '../Form/form.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Updater extends Component{
    constructor(){
        super();
        this.state= {
            imageurl: '',
            product_name: '',
            price: 0
        }
        this.handleName = this.handleName.bind(this);
    }

   handleName(e){
    this.setState({product_name: e})
   }
   handlePrice =(e) =>{
    this.setState({price: e})
   }
   handleUrl = (e) =>{
    this.setState({imageurl: e})
   }
   resetForm = () =>{
       document.getElementById("myForm").reset();
   }

    updateProduct(){
        var {id, product_name, price, imageurl} = this.state;
        axios
        .put(`api/products/${this.props.match.params.id}?product_name=${product_name}&price=${price}&producturl=${imageurl}`)
        .then(res=> console.log("update complete!"))
        .catch(err=> this.status(500).alert("internal error"));
    }

create
    render(){
        return(<div className="inputBox">
            <img src={this.state.imageurl} className="placeholderImg"/>
            <form id="myForm">
            <input onChange={(e)=> this.handleName(e.target.value)} 
            placeholder="Product Name"/>
            <input onChange={(e)=> this.handlePrice(e.target.value)} 
            placeholder="Price"/>
            <input onChange={(e)=> this.handleUrl(e.target.value)} 
            placeholder="Image URL"/><br/>
            <button className="btn" onClick={this.resetForm}>Cancel</button>
            <button className="btn" onClick={()=>this.updateProduct()}>Update Inventory</button>
            </form>
        </div>)
    }
}