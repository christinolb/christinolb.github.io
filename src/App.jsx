/* src/App.jsx */
import React from "react";
import "./App.css";

function SectionTitle({sectionName}) {
  return (
    <h1 class="border-2 border-rose-600 flex justify-center py-20">
        {sectionName ? sectionName : "Default section name"}
    </h1>
  );
}

function Experience({jobTitle, company, start, end, description, software}) {

  return (
    <div>
                <h3>
                {jobTitle ? jobTitle : "Default"} - {company ? company : "Default"}
                {start ? start : "Default"} - {end ? end : "Default"}
                </h3>

                <p>
                {description ? description : "Default"}
                    
                    <b>{software ? software : "Default"}</b>
                </p>
      </div>
  );
}

function App() {
  return (
    <body>
      <nav class=" bg-[#D9D9D9] block items-center p-1">
        <ul class="m-0 p-0 list-none items-center flex flex-row-reverse">
          <li>
            <a class="hover:scale-75 transition delay-200 px-6 block" href="https://www.linkedin.com/in/christino-barbosa-8a4587197/" 
                target="_blank"><img src="" width="80" height="80" alt="LinkedIn"/></a>
          </li>
          <li>
            <a class="hover:scale-75 transition delay-200 px-6 block" href="https://github.com/christinolb" target="_blank"><img src="public/img/GITHUB-LOGO.png" width="100" height="100" alt="GitHub"/></a>
          </li>
          <li>
            <a class="hover:text-white transition delay-200 px-8 block" href="#projects">Projects</a>
          </li>
          <li>
            <a class="hover:text-white transition delay-200 px-8 block" href="#experience">Experience</a>
          </li>
          <li>
            <a class="hover:text-white transition delay-200 px-8 block" href="#index">About Me</a>
          </li>
        </ul>
      </nav>

      <h1 id="index" class="py-20 flex justify-center">
            Christino Lorenzo Barbosa
      </h1>

      <div class="flex justify-center">
            <p class="w-[60rem] h-[20rem] bg-blue-400">
                I started coding robots in highschool for competitions. In college I wandered into the other realms of Computer Science such as 
                Data Science/ Machine Learning, and Web Development with various software. I worked on 3 Web Development teams for University and 
                college, one which I lead and published a paper. On each team I played a different role project lead/ asp.net programmer, backend
                and fullstack developer.
    
                Having wokred with web development in various projects has inspired me to continue to build my skillset in the field and
                pursue a career oriented around such skills. My focus is building websites which exceed the standard and are sleek in design.
                
                Other than coding I love to start my day with long runs and end it with a fun bass and trombone jam sesh!
            </p>
      </div>

      <SectionTitle sectionName="Experience" />
      <>
      <Experience />
      </>
      


    
      
    </body>
  );
}

export default App;
