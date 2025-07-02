import React from "react";
import { AiOutlinePaperClip } from "react-icons/ai"; // Replace icons as needed
import Navbar from "./Navbar"; // Adjust the path if necessary
import SideProfile from "./SideProfile"; // Adjust the path if necessary
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            {/* Navbar at the top */}
            <Navbar />

            {/* Main content area */}
            <div className="dashboard-main">
                {/* SideProfile on the left */}
                <SideProfile />

                {/* Dashboard main content */}
                <div className="dashboard-content">
                    <h2 className="dashboard-title">Dashboard</h2>

                    {/* Dashboard Cards */}
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
    );
};

export default Dashboard;

