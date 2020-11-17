import React, { Component } from 'react';


class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Thêm mới đi bro',
            num: 0,
            index: '',
            user: []
        }
    }

    componentDidMount() {
        this.refs.name.focus();
    }

    btnSubmit = (e) => {
        e.preventDefault();
        console.log('again');

        let user = this.state.user;
        let name = this.refs.name.value;
        let email = this.refs.email.value;
        let phone = this.refs.phone.value;

        //add new 
        if (this.state.num === 0) {   
            let data = {
                name, email,phone
            }
            user.push(data);
        } 
        //update
        else {                      
            let index = this.state.index;
            user[index].name = name;
            user[index].email = email;
            user[index].phone = phone;
        }

        this.setState({
            user: user,
            num: 0
        });

        this.refs.myForm.reset();
        this.refs.name.focus();
    }

    btnRemove = (i) => {
        let user = this.state.user;
        user.splice(i, 1);
        this.setState({
            user: user
        });

        this.refs.myForm.reset();
        this.refs.name.focus();
    }

    btnEdit = (i) => {
        let data = this.state.user[i];
        this.refs.name.value = data.name;
        this.refs.email.value = data.email;
        this.refs.phone.value = data.phone;

        this.setState({
            num: 1,
            index: i
        });

        this.refs.name.focus();
    }

    render() {
        let user = this.state.user;
        return (
            <div className="App">
                <h1>{this.state.title}</h1>
                <form ref="myForm" className="userForm">
                    <label>Name:</label>
                    <input type="text" ref="name" className="txt" />
                    <label>Email:</label>
                    <input type="text" ref="email" className="txt" />
                    <label>Phone:</label>
                    <input type="text" ref="phone" className="txt" />
                    <button onClick={(e) => this.btnSubmit(e)} className="btnSubmit">submit </button>
                </form>
                <pre>

                    <table class="table table-bordered table-hover">

                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Name</th>
                                <th>Mail</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map((data, i) =>
                                <tr key={i} >
                                    <td>
                                        {i + 1}
                                    </td>
                                    <td>
                                        {data.name}
                                    </td>
                                    <td>
                                        {data.email}
                                    </td>
                                    <td>
                                        {data.phone}
                                    </td>
                                    <td>
                                        <button onClick={() => this.btnRemove(i)} className="btnDelete">Delete </button>
                                        <button onClick={() => this.btnEdit(i)} className="btnUpdate">Update </button>
                                    </td>



                                </tr>)}
                        </tbody>

                    </table>

                </pre>

            </div>



        );
    }
}

export default User;