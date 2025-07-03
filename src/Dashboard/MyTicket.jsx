import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import './MyTicket.css'; 
import Box from '@mui/material/Box';
import Footer from '../components/Footer';

function MyTicket() {
    const [tickets, setTickets] = useState([]);
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [search, setSearch] = useState('');
    const [showCount, setShowCount] = useState(5);
    const [page, setPage] = useState(1);

    useEffect(() => {
        // User-provided ticket data
        const userTickets = [
            {
                ticketNo: '1234',
                subject: 'Login issue',
                description: 'Login issue',
                status: 'In Progress',
                supportBy: 'Tech support',
                date: '13/08/21',
                rate: 0,
                name: '',
                department: '',
                category: '',
                type: '',
                priority: '',
                attachment: ''
            },
            {
                ticketNo: '1124',
                subject: 'New ticket',
                description: 'New ticket',
                status: 'On hold',
                supportBy: 'Operation Team',
                date: '14/08/21',
                rate: 0,
                name: '',
                department: '',
                category: '',
                type: '',
                priority: '',
                attachment: ''
            },
            {
                ticketNo: '1224',
                subject: 'issue',
                description: 'issue',
                status: 'Closed',
                supportBy: 'Tech support',
                date: '13/08/21',
                rate: 0,
                name: '',
                department: '',
                category: '',
                type: '',
                priority: '',
                attachment: ''
            },
            {
                ticketNo: '1244',
                subject: 'New request',
                description: 'New request',
                status: 'In Progress',
                supportBy: 'Operation Team',
                date: '14/08/21',
                rate: 0,
                name: '',
                department: '',
                category: '',
                type: '',
                priority: '',
                attachment: ''
            },
            {
                ticketNo: '1114',
                subject: 'Ticket submission',
                description: 'Ticket submission',
                status: 'In Progress',
                supportBy: 'Tech support',
                date: '3/08/21',
                rate: 0,
                name: '',
                department: '',
                category: '',
                type: '',
                priority: '',
                attachment: ''
            }
        ];
        localStorage.setItem('tickets', JSON.stringify(userTickets));
        setTickets(userTickets);
    }, []);

    const openModal = (ticket) => setSelectedTicket(ticket);
    const closeModal = () => setSelectedTicket(null);

    // Filter tickets by search
    const filteredTickets = tickets.filter(ticket => {
        const searchLower = search.toLowerCase();
        return (
            ticket.ticketNo.toLowerCase().includes(searchLower) ||
            (ticket.subject && ticket.subject.toLowerCase().includes(searchLower)) ||
            (ticket.status && ticket.status.toLowerCase().includes(searchLower)) ||
            (ticket.supportBy && ticket.supportBy.toLowerCase().includes(searchLower)) ||
            (ticket.date && ticket.date.toLowerCase().includes(searchLower))
        );
    });

    // Pagination logic
    const totalEntries = filteredTickets.length;
    const totalPages = Math.ceil(totalEntries / showCount);
    const startIdx = (page - 1) * showCount;
    const endIdx = Math.min(startIdx + showCount, totalEntries);
    const paginatedTickets = filteredTickets.slice(startIdx, endIdx);

    return (
        <div className="dashboard-outer-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div className="dashboard-container" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Header />
                <div className="dashboard-main" style={{ flex: 1, display: 'flex' }}>
                    <Sidebar />
                    <div className="dashboard-content-area" style={{ flex: 1 }}>
                        <div className="my-ticket-container">
                            <p className="heading">List of Ticket</p>
                            <div className="my-ticket">
                                <div className="search-bar" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                                    <div style={{ position: 'relative', width: '220px' }}>
                                        <input
                                            type="search"
                                            className="search-input"
                                            placeholder="Find ticket"
                                            id="searchBar"
                                            value={search}
                                            onChange={e => { setSearch(e.target.value); setPage(1); }}
                                            style={{ background: '#e5e7eb', border: '1px solid #ccc', borderRadius: '6px', width: '100%', paddingLeft: '36px' }}
                                        />
                                        <SearchIcon style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: '#888', fontSize: '20px' }} />
                                    </div>
                                </div>
                                <div className="show-select" style={{ marginBottom: '20px' }}>
                                    <label htmlFor="entries" className="show-label">Show:</label>
                                    <select
                                        name="entries"
                                        id="entries"
                                        className="show-select-dropdown"
                                        value={showCount}
                                        onChange={e => { setShowCount(Number(e.target.value)); setPage(1); }}
                                        style={{ background: '#e5e7eb', border: '1px solid #ccc', borderRadius: '6px' }}
                                    >
                                        {[5, 10, 15, 20].map((num) => (
                                            <option key={num} value={num}>{num}</option>
                                        ))}
                                    </select>
                                    <p className="entries-text">Entries</p>
                                </div>
                                <div style={{ background: '#f3f4f6', borderRadius: '10px', padding: '8px 0' }}>
                                    <div className="table-header">
                                        <div className="header-column">Ticket No.</div>
                                        <div className="header-column">Subject</div>
                                        <div className="header-column">Status</div>
                                        <div className="header-column">Support by</div>
                                        <div className="header-column">Date</div>
                                        <div className="header-column">Rate</div>
                                    </div>
                                    {paginatedTickets.map((ticket, idx) => (
                                        <div className="table-row" key={idx} onClick={() => openModal(ticket)} style={{ cursor: 'pointer' }}>
                                            <div className="row-column">
                                                <span>{ticket.ticketNo}</span>
                                            </div>
                                            <div className="row-column">{ticket.subject}</div>
                                            <div className="row-column">
                                                <span style={{
                                                    display: 'inline-block',
                                                    padding: '6px 18px',
                                                    borderRadius: '18px',
                                                    color: 'white',
                                                    fontWeight: 600,
                                                    background: ticket.status === 'In Progress' ? '#22c55e' :
                                                                ticket.status === 'On hold' ? '#1e3a8a' :
                                                                ticket.status === 'Closed' ? '#333' :
                                                                ticket.status === 'Solved' ? '#065f46' :
                                                                '#f5a623',
                                                }}>{ticket.status}</span>
                                            </div>
                                            <div className="row-column">{ticket.supportBy}</div>
                                            <div className="row-column">{ticket.date}</div>
                                            <div className="row-column">
                                                {Array(5).fill().map((_, i) => <StarIcon className="star-icon" key={i} />)}
                                            </div>
                                        </div>
                                    ))}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px', padding: '0 8px' }}>
                                        <span style={{ fontSize: '16px', fontWeight: 'bold', textAlign: 'left' }}>
                                            {`Showing ${totalEntries === 0 ? 0 : startIdx + 1} to ${endIdx} of ${totalEntries} entries`}
                                        </span>
                                        <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            <button
                                                onClick={() => setPage(page - 1)}
                                                disabled={page === 1}
                                                style={{
                                                    border: 'none',
                                                    background: '#e5e7eb',
                                                    color: '#333',
                                                    borderRadius: '6px',
                                                    padding: '4px 10px',
                                                    cursor: page === 1 ? 'not-allowed' : 'pointer',
                                                    fontWeight: 600
                                                }}
                                            >{'<<'}</button>
                                            <span style={{ fontWeight: 600, fontSize: '1.1rem', padding: '0 6px' }}>{page}</span>
                                            <button
                                                onClick={() => setPage(page + 1)}
                                                disabled={page === totalPages || totalPages === 0}
                                                style={{
                                                    border: 'none',
                                                    background: '#e5e7eb',
                                                    color: '#333',
                                                    borderRadius: '6px',
                                                    padding: '4px 10px',
                                                    cursor: (page === totalPages || totalPages === 0) ? 'not-allowed' : 'pointer',
                                                    fontWeight: 600
                                                }}
                                            >{'>>'}</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {selectedTicket && (
                            <div style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                width: '100vw',
                                height: '100vh',
                                background: 'rgba(0,0,0,0.3)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 1000
                            }} onClick={closeModal}>
                                <div style={{
                                    background: 'white',
                                    width: '751px',
                                    height: '567.59px',
                                    boxShadow: '0 4px 32px rgba(0,0,0,0.18)',
                                    padding: '32px',
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    cursor: 'default',
                                    justifyContent: 'flex-start'
                                }} onClick={e => e.stopPropagation()}>
                                    <h2 style={{ marginBottom: '24px', textAlign: 'center', fontWeight: 700, fontSize: '2rem' }}>Ticket Details</h2>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flex: 1, gap: '10px', fontSize: '1.1rem' }}>
                                        <div><b>Ticket No:</b> {selectedTicket.ticketNo || ''}</div>
                                        <div><b>Date:</b> {selectedTicket.date || ''}</div>
                                        <div><b>Name:</b> {selectedTicket.name || ''}</div>
                                        <div><b>Dept:</b> {selectedTicket.department || ''}</div>
                                        <div><b>Title:</b> {selectedTicket.subject || ''}</div>
                                        <div><b>Description:</b> {selectedTicket.description || ''}</div>
                                        <div><b>Category:</b> {selectedTicket.category || ''}</div>
                                        <div><b>Type:</b> {selectedTicket.type || ''}</div>
                                        <div><b>Priority:</b> {selectedTicket.priority || ''}</div>
                                        <div><b>Status:</b> {selectedTicket.status || ''}</div>
                                        <div><b>Attachment:</b> {selectedTicket.attachment || ''}</div>
                                    </div>
                                    <button style={{
                                        marginTop: 'auto',
                                        alignSelf: 'center',
                                        width: '180px',
                                        height: '48px',
                                        border: 'none',
                                        borderRadius: '10px',
                                        background: '#22c55e',
                                        color: 'white',
                                        fontSize: '1.2rem',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                                    }} onClick={closeModal}>Close</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MyTicket;

