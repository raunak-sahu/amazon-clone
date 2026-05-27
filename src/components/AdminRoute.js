import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {

  const email =
    localStorage.getItem("email");

  return email === "admin@gmail.com"
    ? children
    : <Navigate to="/" />;

}

export default AdminRoute;