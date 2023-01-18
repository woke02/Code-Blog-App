import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Register() {
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: ''
    })
    const [error,setError]=useState()
    const navigate=useNavigate()
    const handleChange = (e) => {
        setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/auth/register", inputs);
            navigate("/login");
        } catch (err) {
            setError(err.response.data);
        }
    }
    return (
        <div className='auth'>
            <h1>Register</h1>
            <form>
                <input type="text" placeholder='username' name='username' value={inputs.username} onChange={handleChange} />
                <input type="email" placeholder='email' name='email' value={inputs.email} onChange={handleChange} />
                <input type="password" placeholder='password' name='password' value={inputs.password} onChange={handleChange} />
                <button onClick={handleSubmit}>Register</button>
                {error && <p>{error}</p>}
                <span>Don't you have an account?<Link to='/login'> Login</Link></span>
            </form>
        </div>
    )
}

export default Register
