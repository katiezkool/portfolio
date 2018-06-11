import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class WorkXP extends Component {
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
            <h1>Work Experience</h1>
            <ul>
                <li>another list</li>
                <li>and another bullet</li>
                <li> also dont forget to change layout</li>
            </ul>
            </body>
            </div>
        )
    }
}

export default WorkXP