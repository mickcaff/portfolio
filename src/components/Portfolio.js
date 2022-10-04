import React from 'react'
import Project from './Project.js'
import {projects} from '../data/projects.js'

function Portfolio() {

  return (
    <div className="folio-main">
      <h1>My Recent Work</h1>
      <div className='folio-projects-div'>
        {[...projects].reverse().map((project, index) => {
          return(
            <Project key={index} {...project} />
          )
        })}
      </div>
    </div>
  )
}

export default Portfolio