import React, { Component } from 'react'
import  Navbar from '../components/Navbar'

export default class Index extends Component {
    render() {
        return (
            <div style={{backgroundColor:"#5D6D7E ", color:"#EDAB79" }}>
                <Navbar/>
                <div style={{display:'flex', alignItems:'center', 
                    height: '100vh', justifyContent:'center'}}> 
                    <h2> THIS IS THE LANDING PAGE :) </h2>
                </div>
            </div>
        )
    }
}
