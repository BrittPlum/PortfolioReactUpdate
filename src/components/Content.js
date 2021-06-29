import React from 'react'


function Content() {

    return (
        <div>
        <div className="container-fluid heroImage">
          <div className="row text-center introText">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <h2>Brittany Plummer</h2>
              <a className="btn btn-light px-5 viewMyWorkBtn" href="#project">View My Work</a>
            </div>
          </div>
        </div>
        <section className="section-one text-center">
          <h1 className="p-4" id="About-Me">About Me</h1>
          
          <div className="container">
            <div className="row">
              <div className="col">
                <p>I am an entry-level web developer. My programing skills include a good knowledge of front end applications.</p>
                  <div className="card className=h-100 d-inline-block style=width: 120px"></div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <b>Email:</b>
                      <p>brittanyplummer@gmail.com</p>
                      <b>Phone:</b>
                      <p>+1 203-273-0697</p>
                      <a className="btn btn-dark px-5 viewMyWorkBtn" href="assests/resume.pdf" target="_blank" download>My Resume</a>
                    </h5>
                    
                 
          </div>
              </div>
              <div className="col text-center">
                <img className="rounded-circle m-3" src={ process.env.PUBLIC_URL + '/assests/pexels-pixabay-459335.jpg'} alt="self picture" width="300" height="400"/>
               </div>
            </div>
          </div>
        </section>

        <div className="contiainer-fluid">
    <div className="row pt-5 pb-5 techSectionTit font text-center">
      <h1 className="techIKnowTitle p-4">Technologies & Tools</h1>
      <div className="col-6 col-lg-4 col-md-2 col-sm-4 tech p-5" >
        <i className="fab fa-html5 fa-4x font"></i>
          <h4>Html</h4>
      </div>
      <div className="col-6 col-lg-4 col-md-2 col-sm-4 tech p-5">
        <i className="fab fa-css3 fa-4x font"></i>
          <h4>CSS</h4>
      </div>
      <div className="col-6 col-lg-4 col-md-2 col-sm-4 tech p-5">
        <i className="fab fa-bootstrap fa-4x font"></i>
          <h4>Bootstrap</h4>
      </div>
      <div className="col-6 col-lg-4 col-md-2 col-sm-4 tech p-5">
        <i className="fab fa-js fa-4x font"></i>
          <h4>javaScript</h4>
      </div>
      <div className="col-6 col-lg-4 col-md-2 col-sm-4 tech p-5">
        <i className="fas fa-code fa-4x font"></i>
          <h4>jQuery</h4>
      </div>
      <div className="col-6 col-lg-4 col-md-2 col-sm-4 tech p-5">
        <i className="fab fa-node-js fa-4x"></i>
          <h3>Node .js</h3>
      </div>
      <div className="col-6 col-lg-4 col-md-2 col-sm-4 tech p-5">
        <i className="fas fa-database fa-4x font"></i>
          <h3>MySQL</h3>
      </div>
      <div className="col-6 col-lg-4 col-md-2 col-sm-4 tech p-5">
        <i className="fab fa-npm fa-4x font"></i>
          <h3>npm packages</h3>
      </div>
      <div className="col-6 col-lg-4 col-md-2 col-sm-4 tech p-5">
        <i className="fas fa-database fa-4x font"></i>
          <h3>MongoDB</h3>
      </div>
    </div>
  </div>
  </div>
    )
}

export default Content