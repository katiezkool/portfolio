import React, {Component} from 'react'
import Navigation from './Navigation';

class Skills extends Component {
    render () {
        return (
        <div className="projectpg">
          <header>
            Katelynn Johnson <br/>
            (702)290-3373
            <a href="mailto:kt.johnson111@outlook.com" target="_top">kt.johnson111@outlook.com</a>
          </header>
                        <Navigation />


            <h1>My Projects</h1>
            <p> I don't know how to pull in my past projects from Github but maybe I'll take SS's and just use them as links to the repositories </p>

      <div className="container">
        <img src= "namebadgess.png" alt="namebadge" height="500" width="550" />
        <div className="overlay">
          <div class="text">Name Badge assignment where I practiced using state and props within a text area.</div>
        </div>
      </div>
          <div className="container">
            <img src="fffss.png" alt="funfoodfriendsapp" height="550" width="950" />
              <div className="overlay">
                <div class = "text"> My practice storing and retrieving data from a firebase database.  </div>
              </div>
          </div>
          </div>
        )
    }
}

export default Skills
