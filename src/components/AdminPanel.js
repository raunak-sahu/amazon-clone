import { Link } from "react-router-dom";

function AdminPanel() {

  return (

    <div className="admin-panel">

      <h2>Admin Panel</h2>

      <Link to="/add-product">

        <button>
          Add Product
        </button>

      </Link>

    </div>

  );

}

export default AdminPanel;