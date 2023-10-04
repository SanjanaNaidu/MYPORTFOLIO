import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro.js";
import Skills from "./components/Skills/skills.js";
import Education from "./components/Education/education";
import Experience from "./components/Experience/experience";
import Projects from "./components/Projects/projects"
import ContactMe from "./components/ContactMe/contactme";
function App() {
  return (
    <div className="App">
         <Navbar/>
         <Intro/>
         <Skills/>
         <Education/>
         <Experience/>
         <Projects/>
         <ContactMe/>
      </div>
  );
}
export default App;
