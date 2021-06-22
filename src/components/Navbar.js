export function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Brittany Plummer</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active" aria-current="page" href="#About-Me">About Me</a>
              <a className="nav-link active" aria-current="page" href="#Project">Project</a>
              <a className="nav-link active" aria-current="page" href="#contact">Contact</a>
            </div>
          </div>
        </div>
        <a className="btn btn-dark bi bi-github mx-2" href="https://github.com/BrittPlum " target="_blank"></a>
        <a className="btn btn-dark bi bi-linkedin mx-2" href="https://www.linkedin.com/in/brittany-plummer-25manageme" target="_blank"></a>
       <a className="btn btn-dark bi bi-facebook mx-2" href="https://www.facebook.com/brittplum" target="_blank"></a>
      </nav>
    )
}