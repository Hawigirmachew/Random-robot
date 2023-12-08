import React from 'react'
import Typewriter from "typewriter-effect";
const RobotText = () => {
    return (
      <Typewriter
        options={{
          strings: ["Random", "Robot", "App"],
          autoStart: true,
          loop: true,
        }}
      />
    );
  };

function Header() {
  return (
    <header class = 'text-center p-5 text-indigo-900 text-shadow-lg text-8xl title'>
      {<RobotText />}
    </header>
  )
}

export default Header
