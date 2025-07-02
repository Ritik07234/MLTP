import './App.css';
import Signin from './Authentication/Signin';
import Signup from './Authentication/Signup';
import Forgotpassword from './Authentication/Forgotpassword';
import Dashboard from './Dashboard/Dashboard';

import SideProfile from './Dashboard/SideProfile';
import NewTicket from './Dashboard/NewTicket'; // Adjust the path if necessary
import MyTicket from './Dashboard/MyTicket';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget-password" element={<Forgotpassword />} /> {/* Forget Password route */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard Route */}
          <Route path="/new_ticket" element={<NewTicket />} />
          <Route path="/my_ticket"  element={<MyTicket/>}/>
          
          <Route path="/" element={<Signin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
