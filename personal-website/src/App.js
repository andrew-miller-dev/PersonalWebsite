import './App.css';
import Title from './title';
import Backsplash from './backsplash';
import { bio } from './texts';

function App() {
  return (
    <div className="background">
<section id="sidebar"> 
      <img src="C:\Users\amill\personal_website\PersonalWebsite\personal-website\src\assets\headshot.jpg" alt="You dumb." />
      
      </section>
    
    <div className="container">
      <div className="App">
      <header className="App-header">
        <Backsplash />
      </header>
      <div className="body">
        <Title />
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
     Skills 
    </div>
    <div className="sectionBody">
    Text describing Skills
    </div>
    <div className="sectionHead">
      Projects
    </div>
    <div className="sectionBody">
    All my projects
    </div>
    <div className="sectionHead">
    Contact Me
    </div>
    <div>

    </div>
    </section>
    </div>
  );
}

export default App;
