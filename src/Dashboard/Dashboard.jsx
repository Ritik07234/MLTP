import React, { useEffect, useState } from "react";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import "./Dashboard.css";

const Dashboard = () => {
    const [ticketStats, setTicketStats] = useState({
        total: 0,
        solved: 0,
        awaiting: 0,
        inProgress: 0
    });

    useEffect(() => {
        const tickets = JSON.parse(localStorage.getItem('tickets') || '[]');
        const total = tickets.length;
        const solved = tickets.filter(t => t.status && t.status.toLowerCase() === 'solved').length;
        const awaiting = tickets.filter(t => t.status && t.status.toLowerCase().includes('await')).length;
        const inProgress = tickets.filter(t => t.status && t.status.toLowerCase().includes('progress')).length;
        setTicketStats({ total, solved, awaiting, inProgress });
    }, []);

    return (
        <div className="dashboard-outer-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div className="dashboard-container" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Header />
                <div className="dashboard-main" style={{ flex: 1, display: 'flex' }}>
                    <Sidebar />
                    <div className="dashboard-content-area" style={{ flex: 1 }}>
                        <h2 className="dashboard-title">Dashboard</h2>
                        <div className="dashboard-cards">
                            <div className="dashboard-card card-blue">
                                <p>Total Tickets</p>
                                <h2>{ticketStats.total}</h2>
                            </div>
                            <div className="dashboard-card card-green">
                                <p>Total Solved</p>
                                <h2>{ticketStats.solved}</h2>
                            </div>
                            <div className="dashboard-card card-red">
                                <p>Total Awaiting Approval</p>
                                <h2>{ticketStats.awaiting}</h2>
                            </div>
                            <div className="dashboard-card card-yellow">
                                <p>Total in Progress</p>
                                <h2>{ticketStats.inProgress}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;

