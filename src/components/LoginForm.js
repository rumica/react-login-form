import React, { useState } from 'react'

function LoginForm({Login, error}) {
    
    const [info, setInfo] = useState({
        name:"",
        email:"",
        password:""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        Login(info);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-container">
                    <h2>Login Form</h2>
                    {(error != "") ? (<div className="error">{error}</div>) : ""}
                    <div className="form-item">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" onChange={e => setInfo({...info, name: e.target.value})} value={info.name}/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email"  onChange={e => setInfo({...info, email: e.target.value})} value={info.email}/>
                    </div>
                    <div className="form-item">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password"  onChange={e => setInfo({...info, password: e.target.value})} value={info.password}/>
                    </div>
                    <input type="submit" value="LOGIN" />
                </div>
            </form>
        </div>
    )
}

export default LoginForm;
