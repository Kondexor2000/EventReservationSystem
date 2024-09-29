import React, { useState } from 'react';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!username || !password) {
      alert("Proszę wprowadzić zarówno nazwę użytkownika, jak i hasło.");
      return;
    }
    alert(`Zarejestrowano jako ${username}`);
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>Rejestracja</h2>
      <input 
        type="text" 
        placeholder="Stwórz nazwę użytkownika" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Wprowadź hasło" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleRegister}>Zarejestruj się</button>
    </div>
  );
};

export default Register;