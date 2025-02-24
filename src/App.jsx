import { Route, Routes } from "react-router";
import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Tools from "./components/Tools";
import Works from "./components/Works";
import PassBehaviours from "./pages/PassBehaviours";
import WorksList from "./works/WorksList";
import Home from "./pages/Home";
import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="blog" element={<PassBehaviours />} />

      <Route path="worklist" element={<WorksList />} />
    </Routes>
  );
}

export default App;
