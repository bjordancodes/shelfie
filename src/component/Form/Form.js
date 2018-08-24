import React, {Component} from "react";

class Form extends Component{
    constructor(){
        super();
        this.state= {
            imageurl: '',
            product_name: '',
            price: 0
        }
    }

    // handleChange(one for each input)
    // post new products to DB
    //clear input boxes

    render(){
        return(<div>Form</div>)
    }
}

export default Form;