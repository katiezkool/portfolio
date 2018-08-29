import React, {Component} from 'react'
import Navigation from "./Navigation";

class References extends Component {
    render () {
        return (
          <div className="color">
            <div className="bigimg">
                <header>
                    Katelynn Johnson <br />
                    (702)290-3373
                    <a href="mailto:kt.johnson111@outlook.com" target="_top">kt.johnson111@outlook.com</a>
                </header>

                    <Navigation/>

            <h1>
                Contact Me
            </h1>
              <div id="social">
                <a href="https://github.com/katiezkool"><img src="https://s8.postimg.cc/oh0uswasl/logo-github.png"
                                                             alt="My Github"/></a>
                <a href="https://www.facebook.com/profile.php?id=1663183817"><img
                  src="https://s8.postimg.cc/ddi5q70ad/logo-facebook.png" alt="My Facebook"/></a>
                <a href="https://www.linkedin.com/in/ktjohnsonslc/"><img
                  src="https://s8.postimg.cc/ibip7vnph/logo-linkedin.png"
                  alt="My LinkedIn"/></a>
              </div>
              <p> <span>You can email me or contact me through Facebook or LinkedIn. Be sure to check out my Github though!</span></p>
              </div>
          </div>
        )
    }
}

export default References

