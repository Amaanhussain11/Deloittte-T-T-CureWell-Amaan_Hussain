import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Surgeries = () => {
  const [surgeries, setSurgeries] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/api/surgery/today')
      .then(res => setSurgeries(res.data));
  }, []);

  return (
    <div>
      <h2>Today's Surgeries</h2>

      <table className="table">
        <thead>
          <tr>
            <th>Doctor</th>
            <th>Category</th>
            <th>Time</th>
            <th className="text-end">Action</th>
          </tr>
        </thead>

        <tbody>
          {surgeries.map(s => (
            <tr key={s._id}>
            <td>{s.doctor?.doctorname}</td>
            <td>{s.surgerycategory}</td>
            <td>{s.surgerystarttime} - {s.surgeryendtime}</td>
          
            <td className="text-end">
              <button
                className="btn btn-primary btn-sm"
                onClick={() => navigate(`/edit-surgery/${s._id}`)}
              >
                Edit Surgery Details
              </button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Surgeries;