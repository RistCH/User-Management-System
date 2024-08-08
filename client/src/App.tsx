
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


import Dashboard from "./sidebarPages/dashboard/index.tsx";
import UserList from "./sidebarPages/user_list/index.tsx";
import Profile from "./sidebarPages/profile/index.tsx";
// import Settings from "./sidebarPages/settings/index.tsx"; 
// import Register from "./components/register/index.tsx"; 
import Login from "./components/login/index.tsx";
import ProtectedRoute from "./RouteProtection/ProtectedRoutes";


  
function App() {


  return (
    <Router>
      <Routes> 
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<ProtectedRoute/>}>
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/UserList" element={<UserList/>} />

      </Routes>
        

    </Router> 

   
  )
}

export default App;
