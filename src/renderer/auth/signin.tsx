import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await window.api.login({
      username,
      password,
    });

    console.log('login response:', res);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>

      <form onSubmit={onSubmit}>
        <input
          value={username}
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />

        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
