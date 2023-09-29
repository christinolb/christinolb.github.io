/* src/App.jsx */
import React from "react";

import "./App.css";
import linkedinSVG from './assets/linkedin-logo.svg';
import githubSVG from './assets/GITHUB-LOGO.svg';
import abstract from './assets/papers-presentations/abstract_BR.pdf';
import posterBr from './assets/papers-presentations//ChristinoResearchPoster.pdf';
import frfdmsPaper from'./assets/papers-presentations/FRFDMS-paper.pdf';
import frfdmsProcess from './assets/papers-presentations/FRFDMSProcessGeneral.pdf';
import robustPaper from './assets/papers-presentations/Robustness-of-a-Two-Stage-Procedure_paper.pdf';
import robustPoster from './assets/papers-presentations/Robustness-of-a-Two-Stage-Procedure.pdf';
import sasnReport from './assets/papers-presentations/sasn_course_of_study_report.pdf';


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
  const workResult1 = (
    <ul>
      <li class="font-bold hover:underline inline-block text-[#3F6184] decoration-2 px-1"><a href="https://run-gslsamp-site-fork.vercel.app/" target="_blank">Git Repository (in progress)</a></li>
    </ul>
  );

  const descJ2 ="Built entity relationship diagrams and implemented in MySQL. Formulate queries to store user input to database and "+
  "created triggers for auto generation of records in other tables. Normalized tables for first normal form. Work with members to merge "+
  "database with backend and answer questions related to debuging in the process.";
  const softwareJ2 = (
    <ul>
      <li class="float-left rounded-xl bg-[#5FAEB6] mx-1 px-1">SQL Server</li>
      <li class="float-left rounded-xl bg-[#5FAEB6] mx-1 px-1">Lucid Chart</li>
    </ul>
  );
  const workResult2 = (
    <ul>
      <li class="font-bold hover:underline inline-block text-[#3F6184] decoration-2 px-1"><a href={sasnReport} target="_blank">SASN Course of Study Report</a></li>
    </ul>
  );
  
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
  const workResult3 = (
    <ul>
      <li class="font-bold hover:underline inline-block text-[#3F6184] decoration-2 px-2"><a href={posterBr} target="_blank">Presentation Poster</a></li>
      <li class="font-bold hover:underline inline-block text-[#3F6184] decoration-2 px-1"><a href={abstract} target="_blank">Abstract</a></li>
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
  const workResult4 = (
    <ul>
      <li class="font-bold hover:underline inline-block text-[#3F6184] decoration-2 px-2"><a href={frfdmsProcess} target="_blank">Flow Diagram</a></li>
      <li class="font-bold hover:underline inline-block text-[#3F6184] decoration-2 px-1"><a href={frfdmsPaper} target="_blank">Paper</a></li>    </ul>
  );
  const descJ5 = " Learned and practiced the necessary statistics topics, R libraries and syntax through my advisor and open resources" +
  " to conduct the experiment. Generated random populations of varying size, population shape (normal, uniform and mixed-normal) "
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

  const workResult5 = (
    <ul>
      <li class="font-bold hover:underline inline-block text-[#3F6184] decoration-2 px-1"><a href={robustPoster} target="_blank">Poster Presentation</a></li>
      <li class="font-bold hover:underline inline-block text-[#3F6184] decoration-2 px-2"><a href={robustPaper} target="_blank">Research Paper</a></li>
    </ul>
  );

  return (
    <body class="h-screen">
          <div class="h-full">

            <h1 id="name" class="pt-20 flex justify-center text-[70px] text-[#3F6184]" >
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

            <div>
              <ul class="m-0 p-0 list-none items-center flex flex-row justify-center text-2xl">
                <li>
                  <a class="hover:scale-75 transition delay-150 px-4 block" href="https://www.linkedin.com/in/christino-barbosa-8a4587197/" 
                      target="_blank"><img src={linkedinSVG} height='70' width='70' alt="LinkedIn"/></a>
                </li>
                <li>
                <a class="hover:scale-75 transition delay-150 px-2 block" href="https://github.com/christinolb" target="_blank">
                  <img src={githubSVG} width="100" height="100" alt="GitHub"/></a>
                </li>
              </ul>
            </div>

            <h1 class="text-[#778899] text-xl justify-center pt-9">
              More info below
            </h1>

          </div>
      
      {/**Experience and Projects*/}
      <div id="experience" class="h-[70vw]">

        <div class="h-1/5">
          <Experience jobTitle="Web Developer" company="Rutgers Newark LSAMP" start="January 2023" end="August 2023" 
          description={descJ1} software={softwareJ1} workResults={workResult1}/>
        </div>

        <div class="h-1/5">
          <Experience jobTitle="Database Developer" company="Rutgers IT" start="February 2023" end="May 2023" 
          description={descJ2} software={softwareJ2} workResults={workResult2}/> 
        </div>

        <div class="h-1/5">
          <Experience jobTitle="Research Assistant" company="Rutgers Data Science" start="January 2022" end="December 2022" 
          description={descJ3} software={softwareJ3} workResults={workResult3}/>
        </div>

        <div class="h-1/5">
          <Experience jobTitle="Research Intern" company="St. Peters University" start="May 2021" end="September 2021" 
          description={descJ5} software={softwareJ5} workResults={workResult5}/>
        </div>
        
        <div class="h-1/5 py-4">
          <Experience jobTitle="Team Leader" company="Union County College" start="January 2021" end="August 2021" 
          description={descJ4} software={softwareJ4} workResults={workResult4}/>
        </div>

        

      </div>
      <br/><br/>
      {/**Software and tools used*/}
      <footer class="font-light">Drafted in figma, coded in Visual Studio Code. Built with Tailwindcss, React and Vite.</footer>
      
    </body>
  );
}

export default App;
