import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class References extends Component {
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
            <h1>
                References
            </h1>
            <p> I know that I will put them here in a bit</p>
            </body>
            </div>
        )
    }
}

export default References

