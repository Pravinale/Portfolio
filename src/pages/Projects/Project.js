import React from 'react'
import './Project.css'
import pgrestro from '../../assets/pgrestro.png'
import pgstore from '../../assets/pgstore.png'
import CodeEditor from '../../assets/CodeEditor.png'

const Project = () => {
  return (
    <>
        <div className='project-container'>
          <div className='my-project'>
            <h1>My Projects</h1>
          </div>

          <div className='projects'>
            <div className='project-card'>
              <img src={pgstore}/>
              <div className='project-content'>
                <h1>PG Store</h1>
                <p>Ecommerce Website (frontend only) HTML, CSS, Reactjs
                </p>
                <a href="https://pravinale.github.io/Ecommerce/" target="_blank">View Project</a>
              </div>
            </div>
            <div className='project-card'>
              <img src={pgrestro}/>
              <div className='project-content'>
                <h1>PG Restro</h1>
                <p>Restaurant Website (frontend only) HTML, CSS, Reactjs</p>
                <a href="https://pravinale.github.io/Restaurant/" target="_blank">View Project</a>
              </div>
            </div>
            <div className='project-card'>
              <img src={CodeEditor}/>
              <div className='project-content'>
                <h1>Code Editor</h1>
                <p></p>
                <a href="https://pravinale.github.io/CodeEditor/" target="_blank">View Project</a>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Project