import React, { Component } from 'react'

import Joi from  'joi-browser'
import Form from  './common/form'
export default class loginForm extends Form{
    // username=React.createRef()
    // componentDidMount(){
    //     this.username.current.focus()
    // }
    state={
        data:{
            username:"",
            password:""
        },
        errors:{

        }
    }
    schema={
                username:Joi.string().required().label("Username"),
                password:Joi.string().required().label("Password")
    }

    
    
    doSubmit=()=>{
        //server
        console.log("submitted")
    }
   
    render() {
        const {data,errors}=this.state
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.submit}>
                   {this.renderInput("username","Username")}
                   {this.renderInput("password","Password","password")}
                   {this.renderButton("Login" )}
                </form>
            </div>
        )
    }
}
