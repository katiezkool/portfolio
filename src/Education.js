import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Education extends Component {
    render () {
        return (
            <div>
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
            <body>
            <h1>Education</h1>
            <ul>
                <li>idk if i want to use bullets here</li>
                <li>idk what i want to do here</li>
            </ul>
            </body>
            </div>
        )
    }
}

export default Education
