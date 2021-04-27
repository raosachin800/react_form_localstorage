import React, { Component } from 'react';

import '../components/login.css'
class SignUp extends Component{
    state = {
    user: '',
    password:'',
    rememberMe: false
};

componentDidMount() {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const user = rememberMe ? localStorage.getItem('user') : '';
    const password = rememberMe ? localStorage.getItem('password') : '';
    this.setState({ user, password,rememberMe });
}

handleChange = (event) => {
    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;

    this.setState({ [input.name]: value });
};

handleFormSubmit = () => {
    const { user, password,rememberMe } = this.state;
    localStorage.setItem('user', rememberMe ? user : '');
    localStorage.setItem('password', rememberMe ? password : '');
    localStorage.setItem('rememberMe', rememberMe);
};

render() {
    return (
    <form onSubmit={this.handleFormSubmit} className="login">
        <label className="label_username" htmlFor="Username">
            Email Address
        </label>
        <input value={this.state.user} onChange={this.handleChange} className="username" name="user" placeholder="abcd@gmail.com" type="text"/> 
        <br/>
        <br/>
        <br/>
        <label className="label_password" htmlFor="Username">
            Password
        </label>
        <input className="username" type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
        <br/>
        <label className="check">
            <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox" /> Remember me
        </label>
        <br/>
        <button className="btn"  >Log in</button>
    </form>
    );
}
}

export default SignUp
