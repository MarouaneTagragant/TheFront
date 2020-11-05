import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AddUser from '../components/admin/AddUser'
import DetailUser from '../components/admin/DetailUser'
import ListUsers from '../components/admin/ListUsers'
import Navbar from './Navbar'


class AdminSidebar extends Component {
    render() {
        return (
            <Router>
                
                    <Navbar/>
                    <Switch>
                        <Route path="/admin/users" component={ListUsers} exact/>
                        <Route path="/admin/users/add" component={AddUser} exact/>
                        <Route path="/admin/showUser/:id" component={DetailUser} exact/>
                    </Switch>
                
            </Router>
        )
    }
}

export default AdminSidebar
