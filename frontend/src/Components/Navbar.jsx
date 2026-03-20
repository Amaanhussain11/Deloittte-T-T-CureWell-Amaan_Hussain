import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <h3 className="text-white">CureWell</h3>

      <div>
        <Link className="btn btn-outline-light mx-2" to="/">View Doctors</Link>
        <Link className="btn btn-outline-light mx-2" to="/specs">View Specializations</Link>
        <Link className="btn btn-outline-light mx-2" to="/surgeries">View Today's Surgery</Link>
        <Link className="btn btn-warning mx-2" to="/add-doctor">Add Doctor</Link>
      </div>
    </nav>
  );
};

export default Navbar;