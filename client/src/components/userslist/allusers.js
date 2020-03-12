import React, { Component } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

export default class AllUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    /**
     * Initialization
     * fetch user data to draw the component
     */
    componentDidMount() {
        let self = this;

        fetch('/react')
            .then(res => res.json())
            .then(users => {self.setState({ users: users });
                console.log('State: ' + JSON.stringify(users))
            })
    }

    /**
     * Create pop-up input box
     * Get the new user name and pass it to updateUser(id)
     */
    getNewName(id) {
        let inputName = prompt('Please enter new user name');

        if (inputName != null && inputName.length > 0){
            return this.updateUser(id,inputName);
        }else if(inputName === ""){
            alert("User name cannot be null.");
        }else{
            return null
        }
    }


    /**
     * Update user by id
     * fetch new state to refresh page
     */
    updateUser(id,name) {
        let userJSON = { 'name' : name , 'id' : id };

        fetch('/react/updateUser',{
            method: 'post',
            contentType: false,
            processData: false,
            body: JSON.stringify(userJSON)
        }).then(res => {
            console.log('***************Update Succeeded**********: '+res);
        });

        fetch('/react')
            .then(res => res.json())
            .then(users => {
                this.setState({ users: users });
            })

    }

    /**
     * Delete user by id
     * fetch new state to refresh page
     */
    deleteUser(id) {
        console.log('!!!!!allusers/deleteuser.js sent request '+id);

        fetch('/react/deleteUser',{
            method: 'post',
            contentType: false,
            processData: false,
            body: id
        })
            .then(res => res.json())
            .then(users => {
                console.log('***************Delete Succeeded**********: ');
                this.setState({ users: users })
            })
    }

    /**
     * Add new user
     * fetch new state to refresh page
     */
    createNewUser() {
        const newUserName = this.refs.newUserName.value;
        console.log('!!!!!allusers/createuser.js sent request '+ newUserName);

        fetch('/react/createUser',{
            method: 'post',
            contentType: false,
            processData: false,
            body: newUserName
        }).then(res => {
            console.log('***************Create Succeeded**********: '+res);
        });

        fetch('/react')
            .then(res => res.json())
            .then(users => {
                this.setState({ users: users });
            })
    }


    render() {
        return (
            <div className="container">
                <h1>Users</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map(user =>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>
                                <button onClick={() => this.getNewName(user.id)}>
                                    <FontAwesomeIcon icon={faEdit} className="mx-auto"/>
                                </button>
                            </td>
                            <td>
                                <button onClick={() => this.deleteUser(user.id)}>
                                    <FontAwesomeIcon icon={faTrash} className="mx-auto"/>
                                </button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
                <table>
                    <tbody>
                    <tr className="table-center">
                        <td>
                            <input type={'text'} ref={'newUserName'}/>
                        </td>
                        <td>
                            <button onClick={() => this.createNewUser()}>Add user</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>

        );
    }





}
