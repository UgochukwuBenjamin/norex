import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Contact from "./pages/Contact";
import Enroll from "./pages/Enroll";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/courses" element={<Courses />} />

          {/* Course Details Page */}
          <Route path="/courses/:id" element={<CourseDetails />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/enroll" element={<Enroll />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}