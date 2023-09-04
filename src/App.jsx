/* src/App.jsx */
import React from "react";
import "./App.css";
import linkedinSVG from './assets/linkedin-logo.svg';
import githubSVG from './assets/GITHUB-LOGO.svg';
import lsampSVG from './assets/lsamp-webpage.svg'

function Nav (){

  return(
    <nav id="index" class="border-b-[2px] p-1">
        <ul class="m-0 p-0 list-none items-center flex flex-row-reverse text-2xl">
          <li>
            <a class="hover:scale-75 transition delay-150 px-4 block" href="https://www.linkedin.com/in/christino-barbosa-8a4587197/" 
                target="_blank"><img src={linkedinSVG} height='70' width='70' alt="LinkedIn"/></a>
          </li>
          <li>
          <a class="hover:scale-75 transition delay-150 px-2 block" href="https://github.com/christinolb" target="_blank">
            <img src={githubSVG} width="100" height="100" alt="GitHub"/></a>
          </li>
          <li>
            <a class="hover:scale-75 transition delay-150 px-8 block" href="#experience">Experience</a>
          </li>
          <li>
            <a class="hover:scale-75 transition delay-150 px-8 block" href="#projects">Projects</a>
          </li>
          <li>
            <a class="hover:scale-75 transition delay-150 px-8 block" href="#index">About</a>
          </li>
        </ul>
      </nav>
  );
}

function SectionTitle({sectionName, bookmarkId}) {
  return (
    <h1 id={bookmarkId} class="text-left py-8 text-[40px]">
        {sectionName ? sectionName : "Default section name"}
    </h1>
  );
}

function Experience({jobTitle, company, start, end, description, software}) {

  return (
    <div class="grid grid-cols-2">
        <div class="text-[#778899] text-xl grid place-content-start text-left">
          {jobTitle ? jobTitle : "Default"} - {company ? company : "Default"}<br /><br />
          <span className="font-light text-lg">{start} - {end}</span>
        </div>
        
        <div class="">
          {description ? <p class="text-left text-lg tracking-wide text-[#3F6184]">{description}</p> : "Default"}<br />

          <p className="font-bold text-left flex flex-row-wrap">{software}</p>
        </div>
      </div>
  );
}

function Project ({projName, workProof, img, alt, software}) {

  return (
    <div class="h-1/2">
      <div class="grid grid-cols-2 h-1/2">
          <div class="">
            <a class="flex justify-center" href={workProof} target="_blank"><img src={img} height="70%" width="70%" alt={alt}/></a>
          </div>

          <div class="text-lg text-left grid place-content-center">
            {projName}<br/>
            <b>{software}</b>
          </div>
      </div>
    </div>
  );
}

function App() {
  const softwareE1 = (
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>PHP</li>
      <li>PHPMailer</li>
      <li>GitHub</li>
      <li>Git</li>
      <li>Figma</li>
    </ul>
  );

  const descJ1 = "Implemented Software Development Cycle, with small team, for website front and backend."+
  " Maintained web domain with respect to Rutgers web protocols and tracked changes with version control software.";
  const softwareJ1 = "CSS - HTML - JavaScript - PHP - PHPMailer - Git - GitHub - Figma - WAMP";

  const descJ2 ="Built entity relationship diagrams and implemented in MySQL. Formulate queries to store user input to database and "+
  "created triggers for auto generation of records in other tables. Normalized tables for first normal form. Work with members to merge "+
  "database with backend and answer questions related to debuging in the process.";
  const softwareJ2 = "MySQL - Lucid Chart";

  const descJ3 = "Developed code to conduct experiments in a Head-Mounted Display using Psychtoolbox library and others in MATLAB."+
  "Installed appropriate drivers for HMD to display stimuli. Used Vizard to create virtual environments in HMD. Use summary statistics,"+
  "distribution plots and joy plots in R for easy assesment of experiment data.";
  const softwareJ3 = "Python - Linux - MATLAB - R Studio";

  const descJ4 ="Created a SQL server database through Azure, and a document management system using C# asp.NET framework to manage"+
  " and sort faculty records.";
  const softwareJ4 ="ASP.NET - SQL Server - C# - Microsoft Azure";  
  return (
    <body class="h-screen">
          <div class="h-full">
            {/*NAV BAR */}
            <Nav />

            <h1 class="pt-20 flex justify-center text-[70px] text-[#3F6184]">
                  Christino Lorenzo Barbosa
            </h1>

            <h3 class="pt-1 pb-[70px] text-[#3F6184] text-[26px]">
              Engineering concise Software for clintele needs
            </h3>

            <div class="flex justify-center">
                  <p class="w-[60rem] h-[20rem] text-[#778899] text-xl justify-center py-10">
                      Across the realms of Computer Science Autonomously and Cooperatively...<br/><br/>

                  </p>
            </div>
          </div>
      

      <div class="h-full">
        <SectionTitle bookmarkId="projects" sectionName="Projects" />

          <Project projName="Rutgers University GS-LSAMP Website" workProof="https://github.com/rutgers-newark-gslsamp/run-gslsamp-site"
          img={lsampSVG} alt="Mockup Contact Us Page" software={softwareE1}/>

          <Project projName="Course Of Study Database" img={lsampSVG} alt="ERD" software="SQL Server - Lucid Chart"/>
      </div>

      <div class="h-full">
        <SectionTitle bookmarkId="experience" sectionName="Experience" />

        <div class="h-1/4">
          <Experience jobTitle="Web Developer" company="Rutgers Newark LSAMP" start="January 2023" end="August 2023" 
          description={descJ1} software={softwareJ1}/>
        </div>

        <div class="h-1/4">
          <Experience jobTitle="Database Developer" company="Rutgers IT" start="February 2023" end="May 2023" 
          description={descJ2} software={softwareJ2}/> 
        </div>

        <div class="h-1/4">
          <Experience jobTitle="Research Assistant" company="Rutgers Data Science" start="January 2022" end="December 2022" 
          description={descJ3} software={softwareJ3}/>
        </div>

        <div class="h-1/4">
          <Experience jobTitle="Project Leader" company="Union County College" start="January 2021" end="August 2021" 
          description={descJ4} software={softwareJ4}/>
        </div>

      </div>
      <br/><br/>
      <footer class="font-light">Drafted in figma, coded in Visual Studio Code. Built with Tailwindcss, React and Vite.</footer>
      
    </body>
  );
}

export default App;
