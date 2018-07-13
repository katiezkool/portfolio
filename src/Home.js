import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Home extends Component {
    render() {
        return (
            <div>
                <header>Katelynn Johnson
                    (702)290-3373
                    kt.johnson111@outlook.com
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
                    <Link to="/References">
                        <button> References</button>
                    </Link></section>
                <p>Hi mtv welcome 2 my crib  i don't understand why this line break is not doing the thing but im sure i will figure something out i just wanna know what all these words are gonna look like when i type all these words its like lorem ipsum but katie lorem ipsum <br />
                    <div className="photo">
                        <img src="DSC05388.jpg" alt="flowery" height="650" width="1050" />
                    </div> </p>

            </div>
        )
    }
}



export default Home

