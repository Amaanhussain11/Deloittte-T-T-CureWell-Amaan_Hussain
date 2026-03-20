import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const EditSurgery = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const formik = useFormik({
    initialValues: {
      category: '',
      startTime: '',
      endTime: ''
    },

    validationSchema: Yup.object({
      category: Yup.string().required('Required'),
      startTime: Yup.string().required('Required'),
      endTime: Yup.string().required('Required')
    }),

    onSubmit: async (values) => {
      try {
        await axios.put(`http://localhost:3000/api/surgery/update-time/${id}`, values);
        alert("Surgery updated");
        navigate('/surgeries');
      } catch (err) {
        console.error(err);
      }
    },

    enableReinitialize: true
  });

  // Fetch surgery details
  useEffect(() => {
    axios.get(`http://localhost:3000/api/surgery/${id}`)
      .then(res => {
        formik.setValues({
          category: res.data.surgerycategory,
          startTime: res.data.surgerystarttime,
          endTime: res.data.surgeryendtime
        });
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>Edit Surgery</h2>

      <form onSubmit={formik.handleSubmit}>
        
        <div className="mb-3">
          <label>Category</label>
          <input
            name="category"
            className="form-control"
            value={formik.values.category}
            onChange={formik.handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Start Time</label>
          <input
            name="startTime"
            className="form-control"
            value={formik.values.startTime}
            onChange={formik.handleChange}
          />
        </div>

        <div className="mb-3">
          <label>End Time</label>
          <input
            name="endTime"
            className="form-control"
            value={formik.values.endTime}
            onChange={formik.handleChange}
          />
        </div>

        <button className="btn btn-success">Update</button>
      </form>
    </div>
  );
};

export default EditSurgery;