import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../service/api";

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async(e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await api.post('/api/auth/login', { username, password });
            localStorage.setItem('token', response.data.token);
            navigate('/');
        }catch(error) {
            console.error('Erro ao fazer login:', error);
            
        }
    };

    return(
        <div className="container mx-auto mt-10">
            <h2 className="text-2xl font-semibold mb-6">Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
                <div>
                    <label htmlFor="username" className="block">Username:</label>
                    <input 
                        id="username"
                        type="text" 
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block">Password:</label>
                    <input 
                        id="password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login;