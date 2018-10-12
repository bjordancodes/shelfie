import React, {Component} from "react";
import Product from '../Product/Product';
import Form from '../Form/Form';
import axios from 'axios';
import './dashboard.css';
import {HashRouter, Link} from 'react-router-dom';
import router from '../../router';


export default class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            inventory: [
        ],
        }
    }


    componentDidMount(){
        axios
        .get('/api/products')
        .then(response=> this.setState({inventory: response.data}))
        .catch(err=> console.log("yikes"));
    }

    componentDidUpdate(prevProps){
        if (this.props.id !== prevProps.id){
            this.fetchData(this.props.id);
        }
    }

    deleteItem = (id) => {
        axios
        .delete(`/api/products/${id}`)
        .then(response=> console.log(response))
        .catch(err=> console.log(err));
    }

    render(){
        console.log("this is really me");
        return(
        <HashRouter><dashboard>
        <div><Product product={this.state.inventory} deleteItem={this.deleteItem}/></div>
        {router}
        <p>Test by VU again </p>
            Test by Vu 3
        </dashboard>
        </HashRouter>)
    }
}