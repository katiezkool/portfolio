import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Education extends Component {
    render () {
        return <div>
            <header>
                Katelynn Johnson
                (702)290-3373
                <a href="mailto:kt.johnson111@outlook.com" target="_top">kt.johnson111@outlook.com</a>
            </header>
            <section>
                <Link to="/">
                    <button> Homie</button>
                </Link>
                <Link to="/skills">
                    <button> Skills</button>
                </Link>
                <Link to="/education">
                    <button> Education</button>
                </Link>
                <Link to="/WorkXP">
                    <button> Work Experience</button>
                </Link>
                <Link to="References">
                    <button> References</button>
                </Link>
            </section>
            <body>
            <h1>Education</h1>
            <ul>
                <li>idk if i want to use bullets here</li>
                <li>idk what i want to do here</li>
            </ul>
            <div className="photo">
                <img src="IMG_0721.jpg" alt="uneducated" /> </div>
            </body>
        </div>
    }
}

export default Education
