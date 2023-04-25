import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Login from '../Login';

 class AppNav extends Component {
    render() {
        return (
        <div>
             <AppBar position="static">
             <Toolbar>
                <p>ALBUMNS</p>
                <Login></Login>
             </Toolbar>
             </AppBar>
        </div>
        );
    }

}

export default AppNav