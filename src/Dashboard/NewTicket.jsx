import React from 'react';
import './NewTicket.css';
import Box from '@mui/material/Box';  // Import Box from Material UI
import SideProfile from './SideProfile';  // Adjust the path if necessary
import Navbar from './Navbar';  // Adjust the path if necessary

function NewTicket() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            {/* Navbar at the top */}
            <Navbar />

            {/* Main content area */}
            <Box sx={{ display: 'flex', flex: 1 }}>
                {/* SideProfile on the left */}
                <SideProfile />
                
                <div className="new-ticket-container">
                    <p className="heading">Create New Ticket</p>
                    <div className="form-container">
                        <div className="form-row">
                            <label className="form-label">Ticket No</label>
                            <input type="text" className="form-input" />
                            <label className="form-label">Date</label>
                            <input type="text" className="form-input" />
                        </div>
                        <div className="form-row">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-input" />
                            <label className="form-label">Department</label>
                            <input type="text" className="form-input" />
                        </div>
                        <div className="form-row">
                            <label className="form-label">Description</label>
                            <input type="text" className="form-input-wide" />
                        </div>
                        <div className="form-row">
                            <div className="form-column">
                                <label className="form-label">Category</label>
                                <input type="text" className="form-input" />
                                <label className="form-label">Type</label>
                                <input type="text" className="form-input" />
                                <label className="form-label">Priority</label>
                                <input type="text" className="form-input" />
                            </div>
                            <div className="form-column">
                                <label className="form-label">Details</label>
                                <textarea className="form-textarea"></textarea>
                            </div>
                        </div>
                        <div className="form-row">
                            <button className="submit-btn">Submit</button>
                        </div>
                    </div>
                </div>
            </Box> {/* Closing the second Box */}
        </Box> // Closing the first Box
    );
}

export default NewTicket;
