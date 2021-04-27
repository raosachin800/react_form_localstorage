import React, { Component } from 'react';

import '../components/signup.css'
class SignUp extends Component{
    state = {
    user: '',
    password:'',
    username:'',
    rememberMe: false
};

componentDidMount() {
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const user = rememberMe ? localStorage.getItem('user') : '';
    const password = rememberMe ? localStorage.getItem('password') : '';
    const email = rememberMe?localStorage.getItem('email'):'';
    this.setState({ user, password,email,rememberMe });
    fetch('https://picsum.photos/id/69/info')
    .then(res=> res.json())
    .then(({ info }) => {
        this.setState({
            isLoaded: true,
            items: info,
        })
    });
}

handleChange = (event) => {
    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;

    this.setState({ [input.name]: value });
};

handleFormSubmit = () => {
    const { user, password,email,rememberMe } = this.state;
    localStorage.setItem('user', rememberMe ? user : '');
    localStorage.setItem('password', rememberMe ? password : '');
    localStorage.setItem('email',rememberMe?email:'')
    localStorage.setItem('rememberMe', rememberMe);
};

render() {
    const { infos} = this.state;
        
    return (
        <div className="login"> 
        
            <form onSubmit={this.handleFormSubmit} >
        <label className="label_username" htmlFor="Username">
            Username
        </label>
        <input value={this.state.user} onChange={this.handleChange} className="username" name="user" placeholder="Enter your Username" type="text"/> 
        <br/>
        <br/>
        <br/>
        <label className="label_email" htmlFor="Username">
            Email Address
        </label>
        <input value={this.state.email} onChange={this.handleChange} className="username" name="email" placeholder="abcd@gmail.com" type="text"/> 
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
        <button className="btn"  >Signup</button>

    </form>
        </div>
    
    );
}
}

export default SignUp
