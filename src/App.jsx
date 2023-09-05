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
            <a class="hover:scale-75 transition delay-150 px-8 block" href="#experience">Experience & Work</a>
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

function Experience({jobTitle, company, start, end, description, software, workResults}) {

  return (
    <div class="grid grid-cols-2">
        <div class="text-[#778899] text-xl grid place-content-start text-left">
          {jobTitle ? jobTitle : "Default"} - {company ? company : "Default"}<br /><br />
          <span className="font-light text-lg">{start} - {end}</span>
        </div>
        
        <div class="">
          {description ? <p class="text-left text-lg tracking-wide text-[#3F6184]">{description}</p> : "Default"}<br />

          <p className="font-bold text-left flex flex-row-wrap">{software}</p>

          <p className="font-bold text-left flex flex-row-wrap hover:underline decoration-[#3F6184]">{workResults}</p>
        </div>
    </div>
  );
}

function Work ({projName, description, software}) {

  return (
    <div class="grid grid-cols-2">
        <div class="text-[#778899] text-xl grid place-content-start text-left">
          {projName}
        </div>
        
        <div class="">
          {description ? <p class="text-left text-lg tracking-wide text-[#3F6184]">{description}</p> : "Default"}<br />

          <p className="font-bold text-left flex flex-row-wrap">{software}</p>
        </div>
    </div>
  );
}

function App() {
  const softwareP1 = (
    <ul>
      <li class="float-left rounded-xl bg-[#5FAEB6] mx-1 px-1">CSS</li>
      <li class="float-left rounded-xl bg-[#5FAEB6] mx-1 px-1">HTML</li>
      <li class="float-left rounded-xl bg-[#5FAEB6] mx-1 px-1">PHP</li>
      <li class="float-left rounded-xl bg-[#5FAEB6] mx-1 px-1">PHPMailer</li>
      <li class="float-left rounded-xl bg-[#5FAEB6] mx-1 px-1">GitHub</li>
      <li class="float-left rounded-xl bg-[#5FAEB6] mx-1 px-1">Git</li>
      <li class="float-left rounded-xl bg-[#5FAEB6] mx-1 px-1">Figma</li>
    </ul>
  );

  const softwareP2 = (
    <ul>
      <li class="float-left rounded-xl bg-[#5FAEB6] mx-1 px-1">SQL Server</li>
      <li class="float-left rounded-xl bg-[#5FAEB6] mx-1 px-1">Lucid Chart</li>
    </ul>
  );

  const descJ1 = "Implemented Software Development Cycle, with small team, for website front and backend."+
  " Maintained web domain with respect to Rutgers web protocols and tracked changes with version control software.";
  const softwareJ1 = (
    <ul>
      <li class="float-left rounded-xl bg-[#5FAEB6] mx-1 px-1">CSS</li>
      <li class="float-left rounded-xl bg-[#5FAEB6] mx-1 px-1">HTML</li>
      <li class="float-left rounded-xl bg-[#5FAEB6] mx-1 px-1">PHP</li>
      <li class="float-left rounded-xl bg-[#5FAEB6] mx-1 px-1">PHPMailer</li>
      <li class="float-left rounded-xl bg-[#5FAEB6] mx-1 px-1">GitHub</li>
      <li class="float-left rounded-xl bg-[#5FAEB6] mx-1 px-1">Git</li>
      <li class="float-left rounded-xl bg-[#5FAEB6] mx-1 px-1">Figma</li>
      <li class="float-left rounded-xl bg-[#5FAEB6] mx-1 px-1">WAMP</li>
      <li class="float-left rounded-xl bg-[#5FAEB6] mx-1 px-1">JavaScript</li>
    </ul>
  );

  const workResult1 = '';

  const descJ2 ="Built entity relationship diagrams and implemented in MySQL. Formulate queries to store user input to database and "+
  "created triggers for auto generation of records in other tables. Normalized tables for first normal form. Work with members to merge "+
  "database with backend and answer questions related to debuging in the process.";
  const softwareJ2 = softwareP2;

  const descJ3 = "Developed code to conduct experiments in a Head-Mounted Display using Psychtoolbox library and others in MATLAB."+
  "Installed appropriate drivers for HMD to display stimuli. Used Vizard to create virtual environments in HMD. Use summary statistics,"+
  "distribution plots and joy plots in R for easy assesment of experiment data.";
  const softwareJ3 = (
    <ul>
      <li class="float-left rounded-xl bg-[#5FAEB6] mx-1 px-1">Python</li>
      <li class="float-left rounded-xl bg-[#5FAEB6] mx-1 px-1">Linux</li>
      <li class="float-left rounded-xl bg-[#5FAEB6] mx-1 px-1">MATLAB</li>
      <li class="float-left rounded-xl bg-[#5FAEB6] mx-1 px-1">R Studio</li>
    </ul>
  );

  const descJ4 ="Created a SQL server database through Azure, and a document management system using C# asp.NET framework to manage"+
  " and sort faculty records.";
  const softwareJ4 = (
    <ul>
      <li class="float-left rounded-xl bg-[#5FAEB6] mx-1 px-1">ASP.NET</li>
      <li class="float-left rounded-xl bg-[#5FAEB6] mx-1 px-1">SQL Server</li>
      <li class="float-left rounded-xl bg-[#5FAEB6] mx-1 px-1">C#</li>
      <li class="float-left rounded-xl bg-[#5FAEB6] mx-1 px-1">Microsoft Azure</li>
    </ul>
  );

  const descJ5 =" Learned and practiced the necessary statistics topics, R libraries and syntax through my advisor and open resources" +
  " to conduct the experiment. Generated random populations of varying size, population shape (normal, uniform and mixed-normal)" +
  + "and variance ratio then applied a two-stage procedure determining whether a type 1 error had been committed.";
  const softwareJ5 = (
    <ul>
      <li class="float-left rounded-xl bg-[#5FAEB6] mx-1 px-1">R Studio</li>
      <li class="float-left rounded-xl bg-[#5FAEB6] mx-1 px-1">ANOVA</li>
      <li class="float-left rounded-xl bg-[#5FAEB6] mx-1 px-1">Levene test</li>
      <li class="float-left rounded-xl bg-[#5FAEB6] mx-1 px-1">Welch test</li>
      <li class="float-left rounded-xl bg-[#5FAEB6] mx-1 px-1">t-test</li>
    </ul>
  );


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
      

      <div id="projects" class="h-[60vw]">
        <div className="h-1/5 border-2">
          <Work projName="Rutgers University GS-LSAMP Website" description="Short description"  software={softwareP1}/>
        </div>

        <div className="h-1/5 border-2">
          <Work projName="Course Of Study Database" img={lsampSVG} alt="ERD" software={softwareP2}/>
          Report
        </div>

        <div className="h-1/5 border-2">
          <Work projName="Robustness of a Two-Stage Procedure" img="" alt="Robustness of a Two-Stage Procedure Paper" software={softwareP2}/>
          Research Poster and Paper
        </div>

        <div className="h-1/5 border-2">
          <Work projName="Observer sensitivity to oriented stimuli altered after adaptation"
           description="short desctription (I presented at the Fall 2022 GS-LSAMP conference)"
           software="Software used" />
          Research Poster and Abstract
        </div>

        <div className="h-1/5 border-2">
          <Work projName="Faculty Record File Management System" description="description of project" software="software used" />
          Paper and General Process
        </div>


      </div>

      <div class="h-[10vw]">

      </div>

      <div id="experience" class="h-[70vw]">

        <div class="h-1/5">
          <Experience jobTitle="Web Developer" company="Rutgers Newark LSAMP" start="January 2023" end="August 2023" 
          description={descJ1} software={softwareJ1} workResults={workResult1}/>
        </div>

        <div class="h-1/5">
          <Experience jobTitle="Database Developer" company="Rutgers IT" start="February 2023" end="May 2023" 
          description={descJ2} software={softwareJ2}/> 
        </div>

        <div class="h-1/5">
          <Experience jobTitle="Research Assistant" company="Rutgers Data Science" start="January 2022" end="December 2022" 
          description={descJ3} software={softwareJ3}/>
        </div>

        <div class="h-1/5">
          <Experience jobTitle="Research Intern" company="St. Peters University" start="May 2021" end="September 2021" 
          description={descJ5} software={softwareJ5}/>
        </div>
        
        <div class="h-1/5">
          <Experience jobTitle="Team Leader" company="Union County College" start="January 2021" end="August 2021" 
          description={descJ4} software={softwareJ4}/>
        </div>

        

      </div>
      <br/><br/>
      <footer class="font-light">Drafted in figma, coded in Visual Studio Code. Built with Tailwindcss, React and Vite.</footer>
      
    </body>
  );
}

export default App;
