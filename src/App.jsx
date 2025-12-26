import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { store } from "./store";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Homme from "./pages/Homme";
import Bookings from "./pages/Bookings";
import Rooms from "./pages/Rooms";
import Customers from "./pages/Customers";
import Contact from "./pages/Contact"

const PrivateRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  return auth ? children : <Navigate to="/login" />;
};

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/Homme"
            element={
              <PrivateRoute>
                <Homme />
              </PrivateRoute>
            }
          />
          <Route
            path="/bookings"
            element={
              <PrivateRoute>
                <Bookings />
              </PrivateRoute>
            }
          />
          <Route
            path="/rooms"
            element={
              <PrivateRoute>
                <Rooms />
              </PrivateRoute>
            }
          />
          <Route
            path="/customers"
            element={
              <PrivateRoute>
                <Customers />
              </PrivateRoute>
            }
          />
          <Route
            path="/Contact"
            element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
}

// ------------ desboard-----------
// import React from 'react'
// import Dashboard from './pages/Dashboard'

// const App = () => {
//   return (
//     <div>
//       <Dashboard/>
//     </div>
//   )
// }

// export default App

// ------------ Booking-----------

// import React from 'react'
// import Bookings from './pages/Bookings'

// const App = () => {
//   return (
//     <div>
//       <Bookings/>
//     </div>
//   )
// }

// export default App

// ------------ service-----------

// import React from 'react'
// import Rooms from './pages/Rooms'

// const App = () => {
//   return (
//     <div>
//       <Rooms/>
//     </div>
//   )
// }

// export default App


// ------------ facilities-----------


// import React from 'react'
// import Customers from './pages/Customers'


// const App = () => {
//   return (
//     <div>
//       <Customers/>
//     </div>
//   )
// }

// export default App


// ------------ contect-----------

// import React from 'react'
// import Contact from './pages/Contact'

// const App = () => {
//   return (
//     <div>
//       <Contact/>
//     </div>
//   )
// }

// export default App