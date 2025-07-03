import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import './MyTicket.css'; 
import Box from '@mui/material/Box';

function MyTicket() {
    const [tickets, setTickets] = useState([]);
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('tickets') || '[]');
        setTickets(stored);
    }, []);
    return (
        <div className="dashboard-outer-wrapper">
            <div className="dashboard-container">
                <Header />
                <div className="dashboard-main">
                    <Sidebar />
                    <div className="dashboard-content-area">
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
                                {tickets.map((ticket, idx) => (
                                    <div className="table-row" key={idx}>
                                        <div className="row-column">
                                            <Link to="#">{ticket.ticketNo}</Link>
                                        </div>
                                        <div className="row-column">{ticket.description}</div>
                                        <div className="row-column">
                                            <span className="status-in-progress">{ticket.status}</span>
                                        </div>
                                        <div className="row-column">{ticket.supportBy}</div>
                                        <div className="row-column">{ticket.date}</div>
                                        <div className="row-column">
                                            {Array(5).fill().map((_, i) => <StarIcon className="star-icon" key={i} />)}
                                        </div>
                                    </div>
                                ))}
                                <p className="pagination">Showing {tickets.length} entries</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MyTicket;

