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
            <p> To Do: add links to corresponding repos in img's</p>

          <div className="container">
            <img src="ghibliss.png" alt="studioghibliapi" height="550" width="950" />
            <div className="overlay">
              <div className="text"> I used a tutorial to help me connect to an API in order to receive and display data.</div>
        </div>
      </div>
          <div className="container">
            <img src="fffss.png" alt="funfoodfriendsapp" height="550" width="950" />
              <div className="overlay">
                <div class = "text"> My practice storing and retrieving data from a firebase database.  </div>
              </div>
          </div>
          <div className="container">
            <img src="namebadgess.png" alt="namebadge" height="500" width="550" />
            <div className="overlay">
              <div className="text">Name Badge assignment where I practiced using state and props within a text area.</div>
            </div>
          </div>
          <div className="container">
            <img src="blackjackss.png" alt="blackjackgame" height="600" width="350" />
            <div className="overlay">
              <div className="text">I made a simple blackjack game to further my JavaScript knowledge.</div>
          </div>
          </div>
          <div className="container">
            <img src="tictactoss.png" alt="tictactogame" height="500" width="650" />
            <div className="overlay">
              <div className="text">I also made a tic-tac-toe game to gain a better understanding of React.</div>
            </div>
          </div>
        </div>
        )
    }
}

export default Skills
