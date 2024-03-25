import { useState } from 'react'
import { Modal, Button } from '@mui/material'
import './Login.css'
// import { login } from '../../../services/login';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleLogin = () => {
        // e.preventDefault();
        // Handle login logic here, for example, send credentials to server
        console.log('Logging in with:', username, password);
    };

    return (
        <>
            <div className='login'>
                <Button onClick={handleOpen} style={{color: 'white'}}>Login</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div className='modal-content'>
                        <h2>Ecommerce UN</h2>
                        <form onSubmit={handleLogin}>
                            <div>
                                {/* <label>Username:</label> */}
                                <input type="text" value={username} placeholder='username or email' onChange={(e) => setUsername(e.target.value)} />
                            </div>
                            <div>
                                {/* <label>Password:</label> */}
                                <input type="password" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button type="submit">Login</button>
                        </form>
                    </div>
                </Modal>
            </div>
        </>

    );
}

