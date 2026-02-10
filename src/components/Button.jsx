
function Button({ onClick, children, variant = 'primary' }) {
  const styles = {
    primary: { backgroundColor: '#007bff', color: 'white' },
    secondary: { backgroundColor: '#6c757d', color: 'white' },
    danger: { backgroundColor: '#dc3545', color: 'white' }
  };

  return (
    <button 
      onClick={onClick}
      style={{
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        ...styles[variant]
      }}
    >
      {children}
    </button>
  );
}

export default Button;