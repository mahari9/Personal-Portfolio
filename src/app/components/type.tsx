import React from 'react'
import Typewriter from 'typewriter-effect'

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'Software Engineer',
          'Full Stack Developer',
          'MERN Stack Developer',
          'Collaborative Tech Contributor',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Type