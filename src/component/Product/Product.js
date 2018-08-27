import React from "react";
import './product.css'
import {Link} from 'react-router-dom';

export default function Product(props){
    return(props.product.map(e=>{
        return (<div key={e.id} className="productBox">
        <div><img src={e.producturl} className="imgBox"/></div>
        <div className="text1">{e.product_name}<br/>${e.price}</div>
        <div className="myBtns" ><button value={e.id} className="greenBtn" onClick={(e)=>props.deleteItem(e.target.value)}>Delete</button>
        <Link to={`/updater/${e.id}`}>
        <button className="greenBtn" value={e.id} >Edit</button>
        </Link></div>
        
        </div>)
    }))
}