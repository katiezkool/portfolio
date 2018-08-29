import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Navigation extends Component {
    render () {
        return (
            <div className="section">


                <Link to="/">
                    <button> Home</button>
                </Link>
                <Link to="/Projects">
                    <button> My Projects</button>
                </Link>
                <Link to="/Pictures">
                    <button> My Pictures</button>
                </Link>
                <Link to="/contactme">
                    <button> Contact Me</button>
                </Link>
            </div> )
    }
}
export default Navigation;