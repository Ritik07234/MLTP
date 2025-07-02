import React from 'react';
import './Navbar.css';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Perform any logout logic if needed
        navigate('/'); // Navigate back to the Signin page
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h1 className="title">Helpdesk</h1>
            </div>
            <div className="navbar-right">
                <ButtonGroup
                    disableElevation
                    variant="contained"
                    aria-label="Navigation group buttons"
                >
                    <Button className="navBtn bg-black text-white">BM</Button>
                    <Button className="navBtn bg-white text-dark">BI</Button>
                </ButtonGroup>
                <NotificationsIcon
                    className="navIcons"
                    aria-label="Notifications"
                    role="button"
                />
                <PersonIcon
                    className="navIcons"
                    aria-label="Profile"
                    role="button"
                />
                <LogoutIcon
                    className="navIcons"
                    aria-label="Logout"
                    role="button"
                    onClick={handleLogout} // Add onClick handler for Logout
                />
            </div>
        </nav>
    );
};

export default Navbar;
