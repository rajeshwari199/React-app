import './Header.css';

const Header=()=>{
    return(
        <div className='mb-5' >

<nav className="navbar navbar-expand-sm navbar-light">
  <div className="container-fluid">
    <div className="col-md-12">
        <div className="row">
            <div className="col-md-6">
            <a className="navbar-brand" href="/">Logo</a>
            </div>
            <div className="col-md-6">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Browsejobs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Jobs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Payment</a>
        </li>
      </ul>
    </div>
            </div>
        </div>
    </div>
    

  </div>
    </nav>

        </div>
    )
}
export default Header;