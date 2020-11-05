import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getUser} from '../../actions/UsersActions'


class DetailUser extends Component {


    componentDidMount(){
        const id = this.props.match.params.id
        this.props.getUser(id)
    }
    render() {
        const { user } = this.props
        console.log(user[0])

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
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.phone}</td>
                            <td>{user.gender}</td>
                            <td>{
                                    (user.role_id === 1) ? "Male" : "Female"
                                }</td>
                            <td>{user.classe.name}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user   : state.user.user
    }
}

export default connect(mapStateToProps,{getUser})(DetailUser)