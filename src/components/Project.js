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
    // <section class="section-four" id="project">
    //   <div class="container">
    //     <div class="row">
    //       <div class="section-title text-center">
    //         <h1 class="p-4" id="Projects">Projects</h1>
    //       </div>
    //       <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-5 workCard">
    //         <div class="card mx-auto">
    //           <div class="card-body">
    //             <figure class="imgcontainer">
    //             <img src="assests/Lyrichordpic.png" class="card-img-top" alt="...">
    //             </figure>
    //             <h5 class="card-title">Lyrichord</h5>
    //             <p class="card-text">A way to search for lyrics and chords at the same time!</p>
    //             <a href="https://seanmonaghan.github.io/LyriChord/" class="btn btn-dark" target="_blank">View Project</a>
    //             <a href="https://github.com/Seanmonaghan/LyriChord" class="btn btn-dark" target="_blank">GitHub</a>
    //           </div>
    //         </div>
    //       </div>
    //       <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12  mb-5 workCard">
    //         <div class="card mx-auto" >
    //           <div class="card-body">
    //             <figure class="imgcontainer">
    //             <img src="assests/remote-recruit.herokuapp.com_.png" class="card-img-top" alt="...">
    //             </figure>
    //             <h5 class="card-title">remoteRecruit</h5>
    //             <p class="card-text">Full-stack application that brings freelancers and employers together.</p>
    //             <a href="https://remote-recruit.herokuapp.com/" class="btn btn-dark" target="_blank">View Project</a>
    //             <a href="https://github.com/lbburnsy/remoteRecruit" class="btn btn-dark" target="_blank">GitHub</a>
    //           </div>
    //         </div>
    //       </div>

    //       <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12  mb-5 workCard">
    //         <div class="card mx-auto" >
    //           <div class="card-body">
    //             <figure class="imgcontainer">
    //             <img src="assests/workouttracker33.herokuapp.com_stats.png" class="card-img-top" alt="...">
    //             </figure>
    //             <h5 class="card-title">Workout Tracker</h5>
    //             <p class="card-text">An application that allows you in track and input your workouts.</p>
    //             <a href="https://workouttracker33.herokuapp.com/" class="btn btn-dark" target="_blank">View Project</a>
    //             <a href="https://github.com/BrittPlum/Workout-Tracker" class="btn btn-dark" target="_blank">GitHub</a>
    //           </div>
    //         </div>
    //       </div>
    //       </div>
    // </section>
      
    )
}

export default Project