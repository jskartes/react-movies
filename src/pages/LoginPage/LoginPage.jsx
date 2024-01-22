import { useState } from 'react';

const LoginPage = ({ setUser }) => {
  const [formData, setFormData] = useState('');

  const handleChange = event => {
    setFormData(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    setUser(formData);
  }

  return (
    <div className='LoginPage'>
      <h1>Login</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          required
          type='text'
          name='username'
          value={formData}
          onChange={handleChange}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
