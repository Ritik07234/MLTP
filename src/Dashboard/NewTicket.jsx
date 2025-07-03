import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import './NewTicket.css';

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
        <>
            <div className="dashboard-outer-wrapper">
                <div className="dashboard-container">
                    <Header />
                    <div className="dashboard-main">
                        <Sidebar />
                        <div className="dashboard-content-area">
                            <div className="new-ticket-content-area">
                                <form className="new-ticket-form" onSubmit={handleSubmit}>
                                    <div className="form-flex-row">
                                        <div className="form-pair">
                                            <label htmlFor="ticketNo">Ticket No.</label>
                                            <input type="text" id="ticketNo" name="ticketNo" value={form.ticketNo} onChange={handleChange} className="gray-input" />
                                        </div>
                                        <div className="form-pair">
                                            <label htmlFor="date">Date</label>
                                            <input type="date" id="date" name="date" value={form.date} onChange={handleChange} className="gray-input" />
                                        </div>
                                    </div>
                                    <div className="form-flex-row">
                                        <div className="form-pair">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" id="name" name="name" value={form.name} onChange={handleChange} className="gray-input" />
                                        </div>
                                        <div className="form-pair">
                                            <label htmlFor="department">Department</label>
                                            <input type="text" id="department" name="department" value={form.department} onChange={handleChange} className="gray-input" />
                                        </div>
                                    </div>
                                    <div className="form-flex-row">
                                        <div className="form-pair full-width">
                                            <label htmlFor="subject">Subject</label>
                                            <input type="text" id="subject" name="subject" value={form.subject} onChange={handleChange} className="gray-input" />
                                        </div>
                                    </div>

                                    <div className="form-grid">
                                        <label htmlFor="category">Category
                                            <input type="text" id="category" name="category" value={form.category} onChange={handleChange} className="gray-input" />
                                        </label>
                                        <label className="description-area" htmlFor="description">Description
                                            <div className="description-wrapper">
                                                <textarea id="description" name="description" value={form.description} onChange={handleChange} className="gray-input" />
                                                <span className="attach-icon">📎</span>
                                            </div>
                                        </label>
                                        <label htmlFor="type">Type
                                            <input type="text" id="type" name="type" value={form.type} onChange={handleChange} className="gray-input" />
                                        </label>
                                        <label htmlFor="priority">Priority
                                            <input type="text" id="priority" name="priority" value={form.priority} onChange={handleChange} className="gray-input" />
                                        </label>
                                    </div>

                                    <div className="submit-row">
                                        <div className="recaptcha-box">
                                            <input type="checkbox" id="robot" checked={robot} onChange={e => setRobot(e.target.checked)} />
                                            <label htmlFor="robot">I'm not a robot</label>
                                            <div className="recaptcha-placeholder">[reCAPTCHA]</div>
                                        </div>
                                        <div className="submit-btn-row">
                                            <button className="submit-btn" type="submit" disabled={!robot}>Submit</button>
                                        </div>
                                    </div>

                                    {error && <div className="error-text">{error}</div>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default NewTicket;
