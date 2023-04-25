import React, { Component } from 'react';
import Button from '@mui/material/Button';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from './initializers/firebase';

export default class Login extends Component {
    constructor(props){
        super(props)
        this.login = this.login.bind(this);
    }

    login(){
        
        const provider = new GoogleAuthProvider();
        
        provider.addScope('https://www.googleapis.com/auth/photoslibrary.readonly')
        
        signInWithPopup(auth, provider).then( result => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
       }).catch(err=>{
        console.log(err);
       }) 
    }

    render() {
        return (
        <div>
            <Button variant="contained" onClick={this.login}> Iniciar sesión con google</Button>
        </div>
        );
    }
}

