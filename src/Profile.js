import React from 'react';

const Profile = () => {
    // Mock user data
    const userData = {
        name: "Khaled Al-Otaibi",
        email: "khaled.a@example.com"
    };

    const containerStyle = {
        maxWidth: '500px',
        margin: '50px auto',
        padding: '30px',
        borderRadius: '12px',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f5f5f5',
        fontFamily: 'Arial, sans-serif'
    };

    const fieldStyle = {
        marginBottom: '20px',
        textAlign: 'left'
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        borderRadius: '6px',
        border: '1px solid #ccc',
        boxSizing: 'border-box'
    };

    const buttonStyle = {
        padding: '12px 30px',
        backgroundColor: '#28a745', 
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '16px',
        float: 'right'
    };

    const handleSave = (e) => {
        e.preventDefault(); 
        alert('Profile Updated Successfully!');
    };

    return (
        <div style={containerStyle}>
            <h2 style={{ textAlign: 'center', color: '#28a745', marginBottom: '30px' }}>User Profile</h2>
            
            <form onSubmit={handleSave}>
                
                <div style={fieldStyle}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Name:</label>
                    <input type="text" defaultValue={userData.name} style={inputStyle} />
                </div>
                
                <div style={fieldStyle}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email:</label>
                    <input type="email" defaultValue={userData.email} style={inputStyle} readOnly />
                </div>
                
                <button type="submit" style={buttonStyle}>
                    Save Profile
                </button>
            </form>
        </div>
    );
};

export default Profile;