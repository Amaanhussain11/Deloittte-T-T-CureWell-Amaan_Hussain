import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const EditDoctor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const formik = useFormik({
    initialValues: {
      name: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required')
    }),
    onSubmit: async (values) => {
      try {
        await axios.put(`http://localhost:3000/api/doctor/${id}`, {
          name: values.name
        });

        alert('Doctor updated successfully');
        navigate('/');
      } catch (err) {
        console.error(err);
      }
    },
    enableReinitialize: true // VERY IMPORTANT
  });

  // Fetch doctor data
  useEffect(() => {
    axios.get(`http://localhost:3000/api/doctor/${id}`)
      .then(res => {
        formik.setValues({
          name: res.data.doctorname
        });
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>Edit Doctor</h2>

      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.name && formik.errors.name && (
            <div className="text-danger">{formik.errors.name}</div>
          )}
        </div>

        <button type="submit" className="btn btn-success">
          Update Doctor
        </button>
      </form>
    </div>
  );
};

export default EditDoctor;