import logo from './logo.svg';
import bootstrap from 'bootstrap';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css" ;
import './App.css';
import Logo from './images/name.png';

function App() {
  return (
    
    <div className= "container p-3 my-3 bg-white text-black">
      <div class="jumbotron  text-center ">          
        <h1>RANDOM GENIE</h1>
        <img  className="img-fluid" src={Logo} alt="nameTag" width="100" height="100"/> 
      </div>

      <div class="shadow-lg p-3 mb-5 bg-body rounded">
        <div class="d-grid gap-2 col-6 mx-auto">
          <button onClick={genarateName} type="submit" className="btn my-3 btn-outline-primary btn-lg" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Click for random names and more!">GENARATE</button>
        </div>

        <ul class="list-group list-group-flush">
          <li class="list-group-item fs-5">FIRST NAME<br/>
          <button id="firstName" className="btn my-3 btn-secondary btn-lg">First Name</button>
          </li>
          <li class="list-group-item fs-5">LAST NAME<br/>
          <button id="lastName" className="btn my-3 btn-secondary btn-lg">Last Name</button>
          </li>
          <li class="list-group-item fs-5">FULLNAME<br/>
          <button id="fullName" className="btn my-3 btn-secondary btn-lg">Fullt Name</button>
          </li>
          <li class="list-group-item fs-5">E-MAIL<br/>
          <button id="email" className="btn my-3 btn-secondary btn-lg">Email</button>
          </li>
        </ul>
        
      
      </div>
      


      
  
      
      {/*
      <div className="form-group shadow p-4 mb-4 bg-white text-primary"> 
        <div class="d-grid gap-2 ">
          <button type="submit" className="btn my-3 btn-outline-primary " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Click for random names and more!">Genarate</button>
        </div>
<label for="firstName" className="form-label">First Name</label><br/>
        <label for="fstName">First name</label>
        <input type="text" className="form-control" id="fstName" placeholder="Enter your first name( Ex: John, Timmy etc...)" />
                
        <label for="lstName">Last name</label>
        <input type="text" className="form-control" id="lstName" placeholder="Enter your last name( Ex: Cooper, Wayne etc...)" />
        
        <label for="fullName">Full name</label>
        <input type="text" className="form-control" id="fullName" placeholder="Enter your fullname" />

        <label for="mail">E-mail</label>
        <input type="text" className="form-control" id="mail" placeholder="someone@example.com" />
        
        

        <div className="d-grid gap-2 "> 
          <button type="reset" className="btn my-3 btn-outline-danger " data-bs-toggle="tooltip" data-bs-placement="bottom" title="Clear all fields">Clear All</button>
        </div>
      </div>

      */}
    </div>

     
    
    
  );
}

function genarateName() {
  const fstName = firstNames[Math.floor(Math.random() * firstNames.length)]
  const lstName = lastNames[Math.floor(Math.random() * lastNames.length)]
  document.getElementById("firstName").innerHTML = fstName
  document.getElementById("lastName").innerHTML = lstName
  document.getElementById("fullName").innerHTML = fstName + " " + lstName
  document.getElementById("email").innerHTML = fstName + lstName + "@example.com"
}

const firstNames = [
  "Alex",
  "Bob",
  "Dacre",
  "Earl",
  "John",
  "Sam",
  "Thomas",
  "Van",
  "Zean"
]

const lastNames = [
  "Broad",
  "Bush",
  "Fungus",
  "Holland",
  "Lemon",
  "Molder",
  "Neesham",
  "Parker",
  "Wilder"
]
export default App;
