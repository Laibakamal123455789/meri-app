"use client";

import Link from "next/link";

import "./header.css";


export  function Header(){
    return <nav className="navbar navbar-expand-lg navbar-dark bg-black custom-navbar" >
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Home <span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/signin">
          SignIn
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/users">
          Users
          </Link>     
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/login">
         Login
          </Link>     
        </li>

      </ul>
    </div>
  </nav>
  
}