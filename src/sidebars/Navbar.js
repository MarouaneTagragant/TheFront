import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Navbar extends Component {
    render() {
        return (
            <div className="sidenav col-md-2">
                <Link to="/admin/users">All users</Link>
                <Link to="/admin/users/add">Add User</Link>
            </div>

            
        )
    }
}

export default Navbar
