import React, { Component } from 'react'

export default class Toolbar extends Component {
    render() {
        return (
            <div >
<nav  className="navbar">
  <a className="title" href="#">Home</a>
  <a className="title" href="#">About</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="toolbarlogout">Log-out</span>
  </button>
</nav>
            </div>
        )
    }
}
