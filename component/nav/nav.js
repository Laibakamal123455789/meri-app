"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Nav() {
  let route = useRouter();

  let searchRef = useRef();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-yellow custom-navbars">
     
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-ittem active">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-ittem">
            <Link className="nav-link" href="/dashboard/cases">
              Cases
            </Link>
          </li>
          <li className="nav-ittem">
            <Link className="nav-link" href="/dashboard/services">
              Services
            </Link>
          </li>
          <li className="nav-ittem">
            <Link className="nav-link" href="/dashboard/cart">
            Cart
            </Link>
          </li>
          <li className="nav-ittem">
            <Link className="nav-link" href="/dashboard/model">
            Model
            </Link>
          </li>
        </ul>

        <form className="form-2">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            ref={searchRef}
          />
          <button
            onClick={(e) => {
              e.preventDefault()
              route.push("cases?q=" + searchRef.current.value);
            }}s
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
