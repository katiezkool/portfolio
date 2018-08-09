import React, {Component} from 'react'
import Navigation from './components/Navigation';

class WorkXP extends Component {
    render () {
        return (
            <div><header>
                Katelynn Johnson
                (702)290-3373
                <a href="mailto:kt.johnson111@outlook.com" target="_top">kt.johnson111@outlook.com</a>
            </header>
                <section>

                    <Navigation />

                </section>
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