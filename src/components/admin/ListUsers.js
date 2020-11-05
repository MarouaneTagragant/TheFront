import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUsers,getClasses,getUser} from '../../actions/UsersActions'
import * as IconName from "react-icons/bs"
import {Link} from 'react-router-dom'
import DetailUser from './DetailUser'


class ListUsers extends Component {

    componentDidMount(){
        this.props.getUsers()
        this.props.getClasses()
    }


    render() {
        const { users } = this.props;
        const { classes } = this.props;


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
                                        (User.gender ===  1) ? "Male" : "Female"
                                    }
                                </td>
                                <td>{User.role.name}</td>
                                <td>{
                                        classes.map(Classe =>(
                                            (User.classe_id === Classe.id) ? Classe.name : null
                                        ))
                                    }
                                </td>
                                <td>
                                    <Link  to={`/admin/showUser/${User.id}`} className="showIcon"><IconName.BsFillEyeFill /></Link>
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
        users   : state.users.users,
        classes : state.classes.classes
    }
}

export default connect(mapStateToProps,{getUsers,getClasses,getUser})(ListUsers)