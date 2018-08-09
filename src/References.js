import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Navigation from "./components/Navigation";

class References extends Component {
    render () {
        return (
            <div>
                <header>
                    Katelynn Johnson
                    (702)290-3373
                    <a href="mailto:kt.johnson111@outlook.com" target="_top">kt.johnson111@outlook.com</a>
                </header>
                <section>

                    <Navigation/>

                </section>
            <body>
            <h1>
                References
            </h1>
            <p> I know that I will put them here 1 sec</p>
            </body>
            </div>
        )
    }
}

export default References

