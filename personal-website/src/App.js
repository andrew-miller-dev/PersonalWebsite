import './App.css';
import Title from './components/title/title';
import InfoBar from '../src/components/infobar/infobar.js';
import { bio, eduCreate } from './texts';
import { projects } from "./assets/projects";
import {projectCreate} from './texts';
import { education } from './assets/education';

function App() {


  return (
    <div className="background">
<section id="sidebar"> 
      
      </section>
    
    <div className="container">
      <div className="App">
        
        
      <div className="body">
        <div className="content">
           <Title />
        <InfoBar />
        </div>
        
      </div>
    </div>
    </div>
      
    <section id="main">

    <div className="sectionHead">
      About Me
    </div>
    <div className="sectionBody">
      {bio}
    </div>
    
    <div className="sectionHead">
      Projects
    </div>
    <div className="sectionBody">
    {projectCreate(projects)}
    </div>
    <div className="sectionHead">
     Education
    </div>
    <div className="sectionBody">
    {eduCreate(education)}
    </div>
    <div className="sectionHead">
     Skills 
    </div>
    <div className="sectionBody">
    Text describing Skills
    </div>

    <div className="sectionHead">
    Contact Me
    </div>
    <div className="sectionBody">
      All my info
    </div>

    <div>
    </div>
    </section>
    </div>
  );
}

export default App;
