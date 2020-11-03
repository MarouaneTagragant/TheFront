import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getContacts} from '../../actions/UsersActions'
import * as IconName from "react-icons/bs"
import {Link} from 'react-router-dom'


class ListUsers extends Component {

    componentDidMount(){
        this.props.getContacts()
    }

    render() {
        const { users } = this.props;

        return (
            <div className="col-md-10">
            <h1>La list des utilisateurs</h1>
            <table className="table userstable">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Telephone</th>
                        <th scope="col">Sex</th>
                        <th scope="col">Role</th>
                        <th scope="col">Classe</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(User =>(
                            <tr key={User.id}>
                                <td>{User.id}</td>
                                <td>{User.name}</td>
                                <td>{User.phone}</td>
                                <td>
                                    {
                                        User.gender
                                    }
                                </td>
                                <td>{User.role.name}</td>
                                <td>{User.classe_id}</td>
                                <td>
                                    <Link className="showIcon"><IconName.BsFillEyeFill /></Link>
                                    <Link className="editIcon"><IconName.BsPencil /></Link>
                                    <Link className="deleteIcon"><IconName.BsFillTrashFill /></Link>
                                </td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>

        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users : state.users.users
    }
}

export default connect(mapStateToProps,{getContacts})(ListUsers)