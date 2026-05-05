import React from 'react'
import "./header.css"
export default function Header() {
  return (
    <nav>
      <h2>MyWebsite</h2>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}
