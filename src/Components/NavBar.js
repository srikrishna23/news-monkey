import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class NavBar extends Component {
  render() {
    
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/general"><b>News Monkey</b></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link active text-dark" aria-current="page" to="/general">
                        <b>
        {<svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16"><path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/></svg>}
                      <br/>
                          Home
                          </b>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active text-primary" aria-current="page" to="/business"><b>Business</b></Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active text-info" aria-current="page" to="/entertainment"><b>Entertainment</b></Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active text-secondary" aria-current="page" to="/sports"><b>Sports</b></Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active text-success" aria-current="page" to="/health"><b>Health</b></Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active text-danger" aria-current="page" to="/science"><b>Science</b></Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active text-warning" aria-current="page" to="/technology"><b>Technology</b></Link>
                    </li>
                    
                </ul>
                
                </div>
            </div>
        </nav>
      </div>
    )
  }
}

export default NavBar
