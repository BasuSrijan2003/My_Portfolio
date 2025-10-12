import { ThemeProvider } from "./contex/ThemeContex";
import { Navbar } from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/AboutSection";
import Skill from "./components/Skills";
import ExperienceSection from "./components/experience";
import Projects from "./components/project";
import { Footer } from "./components/footer";
import Hobby from "./components/Hobbies";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <HeroSection />
        <About />
        <Skill />
        <ExperienceSection />
        <Projects />
        <Hobby />
        <Footer />
        {/* Add other sections here */}
      </div>
    </ThemeProvider>
  );
}

export default App;
