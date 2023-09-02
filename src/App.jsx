/* src/App.jsx */
import React from "react";
import "./App.css";
import linkedinSVG from './assets/linkedin-logo.svg';
import githubSVG from './assets/GITHUB-LOGO.svg';
import lsampSVG from './assets/lsamp-webpage.svg'

function Nav (){

  return(
    <nav class="border-b-[2px] p-1">
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
            <a class="hover:scale-75 transition delay-150 px-8 block" href="#projects">Projects</a>
          </li>
          <li>
            <a class="hover:scale-75 transition delay-150 px-8 block" href="#experience">Experience</a>
          </li>
          <li>
            <a class="hover:scale-75 transition delay-150 px-8 block" href="#index">About Me</a>
          </li>
        </ul>
      </nav>
  );
}

function SectionTitle({sectionName}) {
  return (
    <h1 class="border-2 border-rose-600 flex justify-center py-20">
        {sectionName ? sectionName : "Default section name"}
    </h1>
  );
}

function Experience({jobTitle, company, start, end, description, software}) {

  return (
    <div><br /><br /><br />
                <h3>
                {jobTitle ? jobTitle : "Default"} - {company ? company : "Default"}<br /><br />
                {start ? start : "Default"} - {end ? end : "Default"}<br /><br />
                </h3>

                <p>
                {description ? description : "Default"}<br /><br />
                    
                    <b>{software ? software : "Default"}</b>
                </p>
      </div>
  );
}

function Project ({projName, workProof, img, alt, software}) {

  return (
    <div>
      <div><br /><br /><br />
        {projName}
      </div>

      <div><br /><br />
      <a href={workProof} target="_blank"><img src={img} 
      height="600px" width="700px" alt={alt}/></a>
      </div><br /><br />
      <b>{software}</b>
    </div>
  );
}

function App() {
  const descJ1 = "Implemented Software Development Cycle for website front and backend,"+
  " maintained web domain with respect to Rutgers web protocols and tracked changes with version control software.";
  const softwareJ1 = "CSS - HTML - JavaScript - PHP - PHPMailer - Git - GitHub - Figma - WAMP";

  const descJ2 ="Built entity relationship diagrams and implemented in MySQL. Formulate queries to store user input to database and "+
  "created triggers for auto generation of records in other tables. Normalized tables for first normal form.";
  const softwareJ2 = "MySQL - Lucid Chart";

  const descJ3 = "Developed code to conduct experiments in a Head-Mounted Display using Psychtoolbox library and others in MATLAB."+
  "Installed appropriate drivers for HMD to display stimuli. Used Vizard to create virtual environments in HMD. Use summary statistics,"+
  "distribution plots and joy plots in R for easy assesment of experiment data.";
  const softwareJ3 = "Python - Linux - MATLAB - R Studio";

  const descJ4 ="Created a SQL server database through Azure, and a document management system using C# asp.NET framework to manage"+
  " and sort faculty records.";
  const softwareJ4 ="ASP.NET - SQL Server - C# - Microsoft Azure";  
  return (
    <body class="">

      <div class="snap-y snap-mandatory">
        <div class="snap-center">
          <div class="border-4">
            {/*NAV BAR */}
            <Nav />

            <h1 id="index" class="pt-20 flex justify-center text-[70px] text-[#3F6184]">
                  Christino Lorenzo Barbosa
            </h1>

            <h3 class="pt-1 pb-[70px] text-[#3F6184] text-[26px]">
              Engineer concise Software for clintele needs
            </h3>

            <div class="">
                  <p class="w-[60rem] h-[20rem] text-[#778899] text-xl text-left py-10">
                      Across the realms of Computer Science Autonomously or Cooperatively...<br/><br/>

                  </p>
            </div>
          </div>
        </div>
      </div>

      <div class="snap-center snap-always">
        <SectionTitle sectionName="Projects" />
        <>
          <Project projName="Rutgers University GS-LSAMP Website" workProof="https://github.com/rutgers-newark-gslsamp/run-gslsamp-site"
          img={lsampSVG} alt="Mockup Contact Us Page" software="HTML - CSS - PHP - PHPMailer - GitHub - Git - Figma"/>

          <Project projName="Course Of Study Database" img="" alt="ERD" software="SQL Server - Lucid Chart"/>
        </>
      </div>
      <SectionTitle sectionName="Experience" />
      <>
        <Experience jobTitle="Web Developer" company="Rutgers Newark LSAMP" start="January 2023" end="August 2023" 
        description={descJ1} software={softwareJ1}/>

        <Experience jobTitle="Database Developer" company="Rutgers IT" start="February 2023" end="May 2023" 
        description={descJ2} software={softwareJ2}/> 

        <Experience jobTitle="Research Assistant" company="Rutgers Data Science" start="January 2022" end="December 2022" 
        description={descJ3} software={softwareJ3}/>

        <Experience jobTitle="Project Leader" company="Union County College" start="January 2021" end="August 2021" 
        description={descJ4} software={softwareJ4}/>

      </>
 
      
    </body>
  );
}

export default App;
