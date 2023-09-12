import React from "react";
import "./App.css";

import {Link} from "react-router-dom";
import linkedinSVG from './assets/linkedin-logo.svg';
import githubSVG from './assets/GITHUB-LOGO.svg';

function Nav() {
  return (
    <>
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
              <a href="#index" class="hover:scale-75 transition delay-150 px-8 block">About</a>
            </li>
          </ul>
        </nav>
    </>
  )
};

export default Nav;