import React from 'react'

export default function Navbar(props) {
    return (
   
         <nav class="navbar navbar-expand-lg navbar-light bg-light p-3" >
  <div class="container-fluid">
    <a class="navbar-brand" href="#">{props.title } </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">{props.home}</a>
        </li>
    
        <li class="nav-item">
          <a class="nav-link" href="#">{props.Register}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">{props.Member}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">{props.aboutText}</a>
        </li>
  
      </ul>

    </div>
  </div>
  
</nav>
      
    )
}
