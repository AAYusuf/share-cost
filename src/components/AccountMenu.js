import React, { Component } from 'react'
import {Col} from 'reactstrap'

export default class AccountMenu extends Component {
    render() {
        return (
            <div>
                    <ul>
                        <li><a href="/profile">Profile</a></li>
                        <li><a href="/my-account">Subscriptions</a> </li>
                        <li><a href="/wallet">Wallet</a></li>
                        <li><a href="/bank">Bank</a></li>
                        <li><a href="/settings">Settings</a></li> 
                    </ul>
               
            </div>
        )
    }
}
