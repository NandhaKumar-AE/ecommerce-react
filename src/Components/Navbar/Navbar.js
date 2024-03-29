import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
    <>
        <div className="Navbar">
        <nav class="navbar navbar-expand-lg navbar-dark bg-black">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">FavBrand</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#men">mens</a></li>
           
            <li><a class="dropdown-item" href="#women">womens</a></li>
          
            <li><a class="dropdown-item" href="#kids">kids</a></li>
          </ul>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link" href="#">Order</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">profile</a>
        </li> */}
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>
        </>
  )
}
