import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const AddDoctor = () => {

  const formik = useFormik({
    initialValues: {
      name: ''
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required('Doctor name is required')
        .min(3, 'Minimum 3 characters')
    }),

    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        await axios.post('http://localhost:3000/api/doctor/create', {
          name: values.name
        });

        alert("Doctor added successfully");
        resetForm();
      } catch (err) {
        console.error(err);
        alert("Error adding doctor");
      } finally {
        setSubmitting(false);
      }
    }
  });

  return (
    <div className="container mt-4">
      <h2>Add Doctor</h2>

      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter doctor name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.name && formik.errors.name && (
            <div className="text-danger mt-1">
              {formik.errors.name}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Adding..." : "Add"}
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;