import React from 'react';

const Dosa = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      backgroundImage: 'url("https://img.freepik.com/free-photo/top-view-circular-food-frame_23-2148723455.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '20px',
    },
    header: {
      fontSize: '36px',
      marginBottom: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Dosa Recipes</h1>
      <p>Here you can find various recipes for Dosa.</p>
      {/* Add more content related to Dosa here */}
    </div>
  );
};

export default Dosa;
