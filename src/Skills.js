import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Skills extends Component {
    render () {
        return (
            <div>
                <header>
                    Katelynn Johnson
                    (702)290-3373
                    <a href="mailto:kt.johnson111@outlook.com" target="_top">kt.johnson111@outlook.com</a>
                </header>
                <section>
                <Link to="/">
                    <button> Homie</button></Link>
                <Link to="/skills">
                    <button> Skills </button></Link>
                <Link to="/education">
                    <button> Education</button></Link>
                <Link to="/WorkXP">
                    <button> Work Experience </button></Link>
                <Link to="References">
                    <button> References </button></Link>
                </section>
        <body>
            <h1>Skills</h1>
        <ul>
            <li>probably gonna use a few lists</li>
            <li>because</li>
            <li>i wanna</li>
          <li> i got quite a few skills</li>
          <li> (: </li>
      </ul>


        <img src="DSC05017.jpg" alt="WOWZA" height="650" width="1050" />
                </body>
            </div>
        )
    }
}

export default Skills
