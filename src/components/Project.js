function Project(props) {

    return (
        
        <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-5 workCard">
            <div class="card mx-auto" style="width: 18rem; height: 20rem;">
                <img src="assests/Lyrichordpic.png" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.description}</p>
                    <a href="https://seanmonaghan.github.io/LyriChord/" class="btn btn-dark" target="_blank">View Project</a>
                    <a href="https://github.com/Seanmonaghan/LyriChord" class="btn btn-dark" target="_blank">GitHub</a>
                </div>
            </div>
      </div>
      
    )
}

export default Project