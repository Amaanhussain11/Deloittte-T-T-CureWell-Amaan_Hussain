import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Doctor from "./Pages/Doctor";  
import EditDoctor from "./Pages/EditDr";
import AddDoctor from "./Pages/AddDr";
import Spec from "./Pages/Spec";
import DoctorsBySpec from "./Pages/DocBySepc";
import TodaySurgery from "./Pages/TodaySurgery";
import EditSurgeryDetails from "./Pages/EditSurgeryDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Doctor />} />
          <Route path="/edit-doctor/:id" element={<EditDoctor />} />
          <Route path="/add-doctor" element={<AddDoctor />} />

          <Route path="specs" element={<Spec/>} />
          <Route path="/doc-spec/:id/" element={<DoctorsBySpec />} />
          <Route path="/surgeries" element={<TodaySurgery/>} />
          <Route path="/edit-surgery/:id" element={<EditSurgeryDetails />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
