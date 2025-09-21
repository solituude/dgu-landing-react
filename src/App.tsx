import {Header} from "./components/Header/Header";
import {HeroSections} from "./sections/HeroSection/HeroSections";
import {AboutSection} from "./sections/AboutSection/AboutSection";
import {SolutionSection} from "./sections/SolutionSection/SolutionSection";
import {PathSection} from "./sections/PathSection/PathSection";
import {AdvantagesSection} from "./sections/AdvantagesSection/AdvantagesSection";
import {SupportSection} from "./sections/SupportSection/SupportSection";
import {Footer} from "./components/Footer/Footer";

import "./styles/global.scss";
import './App.css'

export default function App() {
  return (
      <div>
        <Header/>
        <main>
          <HeroSections/>
          <AboutSection/>
          <SolutionSection/>
          <PathSection/>
          <AdvantagesSection/>
          <SupportSection/>
        </main>
        <Footer/>
      </div>
  );
}
