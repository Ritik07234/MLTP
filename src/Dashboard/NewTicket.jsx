import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import './NewTicket.css';
import Box from '@mui/material/Box';

function NewTicket() {
    const [form, setForm] = useState({
        ticketNo: '',
        date: '',
        name: '',
        department: '',
        subject: '',
        category: '',
        type: '',
        priority: '',
        description: '',
    });
    const [robot, setRobot] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(form).some(v => !v.trim())) {
            setError('Please fill all fields.');
            return;
        }
        if (!robot) {
            setError('Please confirm you are not a robot.');
            return;
        }
        setError('');
        const tickets = JSON.parse(localStorage.getItem('tickets') || '[]');
        tickets.push({ ...form, status: 'In Progress', supportBy: 'Tech Support', date: form.date, rate: 0 });
        localStorage.setItem('tickets', JSON.stringify(tickets));
        setForm({ ticketNo: '', date: '', name: '', department: '', subject: '', category: '', type: '', priority: '', description: '' });
        setRobot(false);
        alert('Ticket submitted!');
    };

    return (
        <div className="dashboard-outer-wrapper">
            <div className="dashboard-container">
                <Header />
                <div className="dashboard-main">
                    <Sidebar />
                    <div className="dashboard-content-area">
                        <div className="new-ticket-content-area">
                            <form className="new-ticket-form" onSubmit={handleSubmit}>
                                <div className="row-flex">
                                    <div className="form-group">
                                        <label>Ticket No</label>
                                        <input type="text" name="ticketNo" value={form.ticketNo} onChange={handleChange} className="gray-input" />
                                    </div>
                                    <div className="form-group">
                                        <label>Date</label>
                                        <input type="date" name="date" value={form.date} onChange={handleChange} className="gray-input" />
                                    </div>
                                </div>
                                <div className="row-flex">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" name="name" value={form.name} onChange={handleChange} className="gray-input" />
                                    </div>
                                    <div className="form-group">
                                        <label>Department</label>
                                        <input type="text" name="department" value={form.department} onChange={handleChange} className="gray-input" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Subject</label>
                                    <input type="text" name="subject" value={form.subject} onChange={handleChange} className="gray-input" />
                                </div>
                                <div className="form-group">
                                    <label>Category</label>
                                    <input type="text" name="category" value={form.category} onChange={handleChange} className="gray-input" />
                                </div>
                                <div className="form-group">
                                    <label>Type</label>
                                    <input type="text" name="type" value={form.type} onChange={handleChange} className="gray-input" />
                                </div>
                                <div className="form-group">
                                    <label>Priority</label>
                                    <input type="text" name="priority" value={form.priority} onChange={handleChange} className="gray-input" />
                                </div>
                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea name="description" value={form.description} onChange={handleChange} className="gray-input" style={{ minHeight: '80px' }} />
                                </div>
                                <div className="robot-row">
                                    <input type="checkbox" id="robot" checked={robot} onChange={e => setRobot(e.target.checked)} />
                                    <label htmlFor="robot" style={{ margin: '0 12px 0 6px' }}>I'm not a robot</label>
                                    <button className="submit-btn" type="submit" disabled={!robot}>Submit</button>
                                </div>
                                {error && <div style={{ color: 'red', marginTop: '8px' }}>{error}</div>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default NewTicket;

