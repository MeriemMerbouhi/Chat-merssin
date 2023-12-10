import { useState } from 'react';
import axios from 'axios';

const projectID = '71743bd7-1f1f-4a4f-9b81-73f9230f7a21';

const LoginForm = () => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 
      'Project-ID': projectID, 
      'User-Name': username, 
      'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username}
            onChange={(e) => setusername(e.target.value)} 
            className="input" 
            placeholder="username" required />
          <input 
            type="password" 
            value={password} 
            onChange={(e) => 
            setPassword(e.target.value)} 
            className="input" 
            placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default LoginForm;