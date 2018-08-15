import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Navigation extends Component {
    render () {
        return (
            <div className="section">


                <Link to="/">
                    <button> Home</button>
                </Link>
                <Link to="/skills">
                    <button> My Projects</button>
                </Link>
                <Link to="/education">
                    <button> Education</button>
                </Link>
                <Link to="/WorkXP">
                    <button> Experience</button>
                </Link>
                <Link to="/References">
                    <button> References</button>
                </Link>
            </div> )
    }
}
export default Navigation;