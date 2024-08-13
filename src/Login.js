import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simple authentication logic
    if (username === 'user' && password === 'password') {
      onLogin();
    } else {
      alert('Invalid credentials');
    }
  };

  // Inline styles for the component
  const styles = {
    container: {
      backgroundImage: 'url("https://www.shutterstock.com/image-photo/assortment-fresh-organic-ingredients-cooking-260nw-1710095473.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    formContainer: {
      backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark semi-transparent background
      padding: '40px',
      borderRadius: '12px',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
      width: '400px',
      maxWidth: '90%',
      textAlign: 'center',
      opacity: '0.9', // Slightly transparent
    },
    header: {
      fontFamily: 'Papyrus, cursive', // Papyrus font
      fontSize: '36px',
      color: '#fff',
      marginBottom: '20px',
    },
    input: {
      display: 'block',
      width: '100%',
      padding: '12px',
      margin: '10px 0',
      borderRadius: '6px',
      border: '1px solid #ddd',
      fontSize: '16px',
    },
    button: {
      backgroundColor: '#fff',
      color: '#50c878', // Emerald green
      border: '1px solid #50c878',
      padding: '12px 24px',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      fontSize: '16px',
    },
    buttonHover: {
      backgroundColor: '#f5f5f5',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.header}>AAJ Recipes</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button
          onClick={handleLogin}
          style={styles.button}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
