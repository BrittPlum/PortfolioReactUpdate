import React from 'react'



function Project(props) {

    return (
        
        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-5 workCard">
            <div className="card mx-auto" style={{width: "18rem", height: "20rem"}}>
            <figure className="imgcontainer">
                <img src={props.image} className="card-img-top" alt="..."/>
                </figure>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a href={props.webLink} className="btn btn-dark" target="_blank">View Project</a>
                    <a href={props.gitHub} className="btn btn-dark" target="_blank">GitHub</a>
                </div>
            </div>
      </div>
    
      
    )
}

export default Project