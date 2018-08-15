import React, {Component} from 'react'
import Navigation from './Navigation';

class Education extends Component {
    render () {
        return  <div>
            <header>
                Katelynn Johnson
                (702)290-3373
                <a href="mailto:kt.johnson111@outlook.com" target="_top">kt.johnson111@outlook.com</a>
            </header>

                <Navigation />

            <body>
            <h1>My Life</h1>
            <ul> TO DO
                <li>make a timeline? picture of a map? Idk</li>
                <li>I like to do SOME things</li>
            </ul>
            <div className="photo">
                <img src="IMG_0721.jpg" alt="uneducated" /> </div>
            </body>
        </div>
    }
}

export default Education
