import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DoctorsBySpec = () => {
  const { id } = useParams();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/doc-spec/by-specialisation/${id}`)
      .then(res => setDoctors(res.data));
  }, [id]);

  return (
    <div className="container mt-4">
      <h2>Doctors for this Specialisation</h2>

      <ul className="list-group">
        {doctors.length > 0 ? (
          doctors.map(doc => (
            <li key={doc._id} className="list-group-item">
              {doc.doctorname}
            </li>
          ))
        ) : (
          <p>No doctors assigned</p>
        )}
      </ul>
    </div>
  );
};

export default DoctorsBySpec;