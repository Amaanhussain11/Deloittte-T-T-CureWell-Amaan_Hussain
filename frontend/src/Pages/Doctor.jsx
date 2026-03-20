import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/doctor")
      .then((res) => setDoctors(res.data));
  }, []);

  return (
    <div>
      <h2>Doctors</h2>

      <ul className="list-group ">
        {doctors.map((doc) => (
          <li
            key={doc._id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <span>{doc.doctorname}</span>

            <button
              className="btn btn-primary"
              onClick={() => navigate(`/edit-doctor/${doc._id}`)}
            >
              Edit Dr. Details
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Doctors;
