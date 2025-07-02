import React from 'react';
import './Side.css';
import { Link } from "react-router-dom";
import Dashboard_img from '../Images/Dashboard_Layout.png';
import New_Ticket from '../Images/New Ticket.png';
import My_Ticket from '../Images/Two Tickets.png';

function Sidebar() {
    return (
        <div className="col-2 sidebar pt-5">
            <span className="d-block text-center p-3">
                <img src={Dashboard_img} alt="" className="me-2" />
                <Link to="/" className="sideLinks">
                    <span className="sidebarLinks">Dashboard</span>
                </Link>
            </span>
            <span className="d-block text-center p-3">
                <img src={New_Ticket} alt="" className="me-3" />
                <Link to="/new_ticket" className="sideLinks">
                    <span className="sidebarLinks">New Ticket</span>
                </Link>
            </span>
            <span className="d-block text-center p-3">
                <img src={My_Ticket} alt="" className="me-4" />
                <Link to="/my_ticket" className="sideLinks">
                    <span className="sidebarLinks">My Ticket</span>
                </Link>
            </span>
            
        </div>
    )
}

export default Sidebar