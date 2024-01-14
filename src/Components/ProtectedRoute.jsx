import { useIsAuthenticated } from "@azure/msal-react";
import { Navigate } from 'react-router-dom';

export function ProtectedRoute({ children }) {
    const isAuthenticated = useIsAuthenticated();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
}



// Redirect them to the /login page, but save the current location they were trying to go to
