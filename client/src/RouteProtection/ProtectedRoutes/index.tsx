import {useAuth} from '../../context/authContext.tsx';
import { Outlet, Navigate } from 'react-router-dom';


const ProtectedRoute = () => {
    const { token } = useAuth();

    return token ? (
        <Outlet />
    ) : (
        <Navigate to="/login" replace />
    );
}

export default ProtectedRoute;