import React from "react";
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div className="dashboard-outer-wrapper">
            <div className="dashboard-container">
                <Header />
                <div className="dashboard-main">
                    <Sidebar />
                    <div className="dashboard-content-area">
                        <h2 className="dashboard-title">Dashboard</h2>
                        <div className="dashboard-cards">
                            <div className="dashboard-card card-blue">
                                <p>Total Tickets</p>
                                <h2>12</h2>
                            </div>
                            <div className="dashboard-card card-green">
                                <p>Total Solved</p>
                                <h2>8</h2>
                            </div>
                            <div className="dashboard-card card-red">
                                <p>Total Awaiting Approval</p>
                                <h2>2</h2>
                            </div>
                            <div className="dashboard-card card-yellow">
                                <p>Total in Progress</p>
                                <h2>2</h2>
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

