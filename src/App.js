import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Project from "./components/Project/Project";
import Service from "./components/Services/Service";

function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <About />
      <Service />\
      <Project />
      <Contact />
    </>
  );
}

export default App;
