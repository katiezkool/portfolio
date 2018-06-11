import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Skills extends Component {
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

            <h1>Skills</h1>
        <ul>
            <li>probably gonna use a few lists</li>
            <li>because</li>
            <li>i wanna</li>
        </ul> </body>
       </div>
        )
    }
}

export default Skills
