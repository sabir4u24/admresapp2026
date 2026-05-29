"use client"

import Link from "next/link"

export function Header() {
  return (
    <>
      <div className="top-bar">
        <div className="container d-flex justify-content-between align-items-center">
          <div>
            <i className="fas fa-phone-alt me-2 text-rust"></i> 0374-2330044
            <span className="mx-2">|</span>
            <i className="fas fa-envelope me-2 text-rust"></i> holy_brook@yahoo.com
          </div>
          <div>
            <a href="#" className="text-dark me-2"><i className="fab fa-facebook transition-all"></i></a>
            <a href="#" className="text-dark me-2"><i className="fab fa-instagram"></i></a>
            <Link href="/login" className="btn btn-sm btn-portal ms-2 shadow-sm">Portal Login</Link>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" href="/">
            <span>HOLY BROOK SCHOOL</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" href="/">Home</Link></li>
              
              <li className="nav-item dropdown dropdown-hover">
                <a className="nav-link dropdown-toggle" href="#" id="aboutDropdown" role="button" data-bs-toggle="dropdown">About Us</a>
                <ul className="dropdown-menu animate__animated animate__fadeIn">
                  <li><Link className="dropdown-item" href="/about">School Profile</Link></li>
                  <li><Link className="dropdown-item" href="/faculty">Faculty</Link></li>
                  <li><Link className="dropdown-item" href="/mandatory-disclosure">Mandatory Disclosure</Link></li>
                </ul>
              </li>

              <li className="nav-item"><Link className="nav-link" href="/academics">Academics</Link></li>
              
              <li className="nav-item dropdown dropdown-hover">
                <a className="nav-link dropdown-toggle" href="#" id="admissionDropdown" role="button" data-bs-toggle="dropdown">Admissions</a>
                <ul className="dropdown-menu animate__animated animate__fadeIn">
                  <li><Link className="dropdown-item" href="/admissions">Admission Process</Link></li>
                  <li><Link className="dropdown-item" href="/apply-admission">Apply Online</Link></li>
                </ul>
              </li>

              <li className="nav-item"><Link className="nav-link" href="/gallery">Gallery</Link></li>
              <li className="nav-item"><Link className="nav-link" href="/news">News & Events</Link></li>
              
              <li className="nav-item dropdown dropdown-hover">
                <a className="nav-link dropdown-toggle" href="#" id="downloadDropdown" role="button" data-bs-toggle="dropdown">Downloads</a>
                <ul className="dropdown-menu animate__animated animate__fadeIn">
                  <li><Link className="dropdown-item" href="/downloads">Resources</Link></li>
                  <li><Link className="dropdown-item" href="/apply-tc">Apply for TC</Link></li>
                </ul>
              </li>

              <li className="nav-item"><Link className="nav-link" href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
