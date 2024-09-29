import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/actions';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (!username || !password) {
      setError("Proszę wprowadzić nazwę użytkownika i hasło.");
      return;
    }

    dispatch(login(username));
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <div>
      <h2>Logowanie</h2>
      <input 
        type="text" 
        placeholder="Wprowadź swoją nazwę użytkownika" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Wprowadź swoje hasło" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleLogin}>Zaloguj się</button>
    </div>
  );
};

export default Login;