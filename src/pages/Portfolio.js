import React from 'react'
import Project from "../components/Project"
import {projects} from "../projectData"
import Header from '../components/Header'
import Footer from '../components/Footer'

function Portfolio() {

    return(
        <div>
        <Header />
        <div className="project">
        {projects.map((p, index) => {
            return (
                <Project key={index} {...p} />
            )
        })}
        </div>
        <Footer />
        </div>

    )
}

export default Portfolio