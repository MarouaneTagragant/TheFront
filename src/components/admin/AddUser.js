import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getClasses,addUser} from '../../actions/UsersActions'
class AddUser extends Component {

    state = {
        name           : '',
        dateofbirthday : '',
        phone          : '',
        gender         : 1,
        role           : 2,
        userclass      : '',
        email          : '',
        password       : '',
        password_confirmation : ''
    }

    componentDidMount(){
        this.props.getClasses()
    }


    HandleFormUser = (e) => {

        e.preventDefault();
        const {
            name,
            dateofbirthday,
            phone,
            gender,
            role,
            userclass,
            email,
            password,
            password_confirmation } = this.state


        const newUser = {
            name,
            dateofbirthday,
            phone,
            gender,
            role,
            userclass,
            email,
            password,
            password_confirmation
        }

        this.props.addUser(newUser)




    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {

        const { classes } = this.props
        return (
            <div className="col-md-10">
                <h1>La list des utilisateurs</h1>
                <div className="card">
                <div className="card-header">Ajouter un utilisateur</div>
                
                <form encType="multipart/form-data" onSubmit={this.HandleFormUser}>

                    <div className="form-group row">
                        <label htmlFor="name" className="col-md-4 col-form-label text-md-right">Nom et Preson</label>
                        <div className="col-md-6">
                            <input type="text" className="form-control" name="name" required autoComplete="name" autoFocus onChange={this.onChange} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="name" className="col-md-4 col-form-label text-md-right">La date de naissance</label>
                        <div className="col-md-6">
                            <input type="date" className="form-control" name="dateofbirthday" required autoComplete="dateofbirthday" autoFocus onChange={this.onChange} onChange={this.onChange} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="name" className="col-md-4 col-form-label text-md-right">Numero de telephone</label>
                        <div className="col-md-6">
                            <input type="text" className="form-control" name="phone" required autoComplete="phone" autoFocus onChange={this.onChange} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="name" className="col-md-4 col-form-label text-md-right">Sex</label>
                        <div className="col-md-6">
                        <select className="form-control" name="gender"  required autoComplete="gender" autoFocus onChange={this.onChange}> 
                            <option value="1"> Male </option>
                            <option value="2"> Female </option>
                        </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="name" className="col-md-4 col-form-label text-md-right">Le role de l'utilisateur</label>
                        <div className="col-md-6">
                        <select id="role" className="form-control" name="role"  required autoComplete="role" autoFocus onChange={this.onChange}>
                            <option value="2">Professeur</option>
                            <option value="3">Parent</option>
                            <option value="4">Student</option>
                        </select>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="name" className="col-md-4 col-form-label text-md-right">La classe de l'utilisateur</label>
                        <div className="col-md-6">
                        <select id="userclass" className="form-control" name="userclass"  required autoComplete="userclass" autoFocus onChange={this.onChange}>      
                                {
                                    classes.map(Classe =>(
                                        <option value={Classe.id}>{Classe.name}</option>
                                    ))
                                }
                        </select>
                        </div>
                    </div>                    

                    <div className="form-group row">
                        <label htmlFor="name" className="col-md-4 col-form-label text-md-right">L'addresse Email</label>
                        <div className="col-md-6">
                        <input id="email" type="email" className="form-control" name="email"  required autoComplete="email" onChange={this.onChange}/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Mot de passe</label>
                        <div className="col-md-6">
                            <input id="password" type="password" className="form-control" name="password" required autoComplete="new-password" onChange={this.onChange} />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Confirmation de Mot de passe</label>
                        <div className="col-md-6">
                            <input id="password-confirm" type="password" className="form-control" name="password_confirmation" required autoComplete="new-password" onChange={this.onChange}/>
                        </div>
                    </div>

                    <div className="form-group row mb-0">
                        <div className="col-md-6 offset-md-4">
                            <button type="submit" className="btn btn-primary">Ajouter</button>
                        </div>
                    </div>
                </form>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        classes : state.classes.classes
    }
}

export default  connect(mapStateToProps,{getClasses,addUser})(AddUser)
