import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Specialisations = () => {
  const [specs, setSpecs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/api/specs')
      .then(res => setSpecs(res.data));
  }, []);

  return (
    <div>
      <h2>Specialisations</h2>

      <ul className="list-group">
        {specs.map(spec => (
          <li
            key={spec._id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>{spec.specialisationname}</span>

            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() => navigate(`/doc-spec//${spec._id}`)}
            >
              View Doctors
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Specialisations;