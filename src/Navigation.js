import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Navigation extends Component {
    render () {
        return (
            <div className="section">


                <Link to="/">
                    <button> Me</button>
                </Link>
                <Link to="/Projects">
                    <button> My Projects</button>
                </Link>
                <Link to="/Pictures">
                    <button> My Pics</button>
                </Link>
                <Link to="/WorkXP">
                    <button> My Cat</button>
                </Link>
                <Link to="/References">
                    <button> References</button>
                </Link>
            </div> )
    }
}
export default Navigation;