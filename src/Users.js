import React, { useState, useEffect } from 'react';

const Users = () => {
    // 1. useState: To define state for storing data and loading status
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // 2. useEffect: To handle the side effect (data fetching)
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                // Fetching data from a mock user API
                const response = await fetch('https://jsonplaceholder.typicode.com/users'); 
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                
                // Update state with fetched data
                setUsers(data); 
            } catch (error) {
                console.error("Error fetching users:", error);
                // Optionally handle error display here
            } finally {
                // Set loading to false regardless of success or failure
                setLoading(false); 
            }
        };

        fetchUsers();
    }, []); // Empty dependency array means this runs only once after the initial render.

    // Display loading state while waiting for data
    if (loading) {
        return <h2 style={{ textAlign: 'center', marginTop: '50px', color: '#007bff' }}>Loading Users...</h2>;
    }

    // Display the list of users
    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ color: '#007bff', textAlign: 'center' }}>User List (API Data)</h1>
            
            {users.length > 0 ? (
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {users.map(user => (
                        <li 
                            key={user.id} 
                            style={{ 
                                border: '1px solid #ddd', 
                                padding: '15px', 
                                marginBottom: '10px', 
                                borderRadius: '8px',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                                backgroundColor: '#fff'
                            }}
                        >
                            <h3 style={{ margin: '0 0 5px 0', color: '#333' }}>{user.name}</h3>
                            <p style={{ margin: '0', color: '#555' }}>Email: {user.email}</p>
                            <p style={{ margin: '0', color: '#555' }}>Username: {user.username}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p style={{ textAlign: 'center', color: '#dc3545' }}>No users found.</p>
            )}
        </div>
    );
};

export default Users;