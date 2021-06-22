import logo from './logo.svg';
import bootstrap from 'bootstrap';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css" ;
import './App.css';
import Logo from './images/name.png';

function App() {
  return (
    
    <div className= "container p-3 my-3 bg-white ">
      <div class="jumbotron  text-center ">          
        <h1>RANDOM GENIE</h1>
        <img  className="img-fluid" src={Logo} alt="nameTag" width="100" height="100"/> 
      </div>

      
      <div class="bg-light shadow-lg p-3 mb-5">
        <div class="d-grid gap-2 col-6 mx-auto">
          <button onClick={genarateName} type="submit" className="btn my-3 btn-outline-secondary btn-lg" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Click for random names and more!">GENARATE!</button>
        </div>

        <form className="d-grid gap-3">
          <div className="form-group ">
            <label for="firstName" className="form-label text-secondary fs-6">FIRST NAME</label> <br/>
            <input type="text" className="form-control form-control-lg" id="firstName" placeholder="Your first name( Ex: John, Timmy etc...)" />
          </div>

          <div className="form-group">
            <label for="lastName" className="form-label text-secondary fs-6">LAST NAME</label>
            <input type="text" className="form-control form-control-lg" id="lastName" placeholder="Your last name( Ex: Cooper, Wayne etc...)" />
          </div>

          <div className="form-group">
            <label for="fullName" className="form-label text-secondary fs-6">FULL NAME</label>
             <input type="text" className="form-control form-control-lg" id="fullName" placeholder="Your fullname" />
          </div>

          <div className="form-group">
            <label for="email" className="form-label text-secondary fs-6">E-MAIL</label>
            <input type="text" className="form-control form-control-lg text-lowercase" id="email" placeholder="Your email( Ex: someone@example.com )"  />
          </div>

        </form>
        
      </div> 
    </div>
    
  );
}

function genarateName() {
  const fstName = firstNames[Math.floor(Math.random() * firstNames.length)]
  const lstName = lastNames[Math.floor(Math.random() * lastNames.length)]
  document.getElementById("firstName").value = fstName
  document.getElementById("lastName").value = lstName
  document.getElementById("fullName").value = fstName + " " + lstName
  document.getElementById("email").value = fstName + lstName + "@example.com"
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
