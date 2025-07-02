import React from 'react';
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import './MyTicket.css'; 
import Box from '@mui/material/Box'; // Ensure you import Box from MUI
import Navbar from './Navbar'; // Make sure Navbar is imported
import SideProfile from './SideProfile'; // Make sure SideProfile is imported

function MyTicket() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            {/* Navbar at the top */}
            <Navbar />

            {/* Main content area */}
            <Box sx={{ display: 'flex', flex: 1 }}>
                {/* SideProfile on the left */}
                <SideProfile />
                
                <div className="my-ticket-container">
                    <p className="heading">List of Ticket</p>
                    <div className="my-ticket">
                        <div className="search-bar">
                            <input type="search" className="search-input" placeholder="Find ticket" id="searchBar" />
                            <SearchIcon className="search-icon" />
                        </div>
                        <div className="show-select">
                            <label htmlFor="entries" className="show-label">Show:</label>
                            <select name="entries" id="entries" className="show-select-dropdown">
                                {[...Array(10)].map((_, i) => (
                                    <option key={i} value={i + 1}>{i + 1}</option>
                                ))}
                            </select>
                            <p className="entries-text">Entries</p>
                        </div>
                        <div className="table-header">
                            <div className="header-column">Ticket No.</div>
                            <div className="header-column">Issue</div>
                            <div className="header-column">Status</div>
                            <div className="header-column">Support by</div>
                            <div className="header-column">Date</div>
                            <div className="header-column">Rate</div>
                        </div>
                        <div className="table-row">
                            <div className="row-column">
                                <Link to="#">1234</Link>
                            </div>
                            <div className="row-column">New ticket issue</div>
                            <div className="row-column">
                                <span className="status-in-progress">In Progress</span>
                            </div>
                            <div className="row-column">Tech Support</div>
                            <div className="row-column">13/08/21</div>
                            <div className="row-column">
                                {Array(5).fill().map((_, i) => <StarIcon className="star-icon" key={i} />)}
                            </div>
                        </div>
                        {/* Add more rows here as needed */}
                        <p className="pagination">Showing 1 to 5 of 5 entries</p>
                    </div>
                </div>
            </Box>
        </Box>
    );
}

export default MyTicket;

