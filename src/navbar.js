import React from 'react'

const Navbar = () => {
  return (
  <>
    <section class="navbar-bg">
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
    
    <a class="navbar-brand" href="#">Chavda</a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <button class="btn btn-outline-success" type="submit">Sign Up</button>
      <button class="btn btn-outline-success" type="submit">Login</button>
    </div>
  </div>
</nav>
</section>
  </>
  )
}

export default Navbar