import React, {Component} from 'react'
import Navigation from './Navigation';


class Home extends Component {
    render() {
        return <div className="bigimg">
            <header>
                Katelynn Johnson <br/>
                (702)290-3373
                <a href="mailto:kt.johnson111@outlook.com" target="_top">kt.johnson111@outlook.com</a>
            </header>
                <Navigation />

            <p> <span>I am passionate about Web Development <br />
              and am eager to continue expanding my <br />
              knowledge by gaining more experience. <br />
              Click around to take a look at <br />
              some of the projects I've
              <br /> made during my studies. </span></p>




        </div>
    }
}



export default Home

