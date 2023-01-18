import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'
function Login() {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    })
    const [error, setError] = useState()
    const navigate = useNavigate()
    const { login } = useContext(AuthContext)
    const handleChange = (e) => {
        setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(inputs)
            navigate('/')
        } catch (err) {
            setError(err.response.data);
        }
    }
    return (
        <div className='auth'>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder='username' name='username' value={inputs.username} onChange={handleChange} />
                <input type="password" placeholder='password' name='password' value={inputs.password} onChange={handleChange} />
                <button onClick={handleSubmit}>Login</button>
                {error && <p>{error}</p>}
                <span>Don't you have an account?<Link to='/login'> Login</Link></span>
            </form>
        </div>
    )
}

export default Login
