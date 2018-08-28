import React, {Component} from 'react'
import Navigation from './Navigation';
import styled from 'styled-components';

const Image = styled.img`
 height: 450px;
  width: 650px;
  display: block;
  margin: 0 auto;
  flex-direction: row;
  -webkit-filter: blur(0);
  filter: blur(0);
  -webkit-transition: .3s ease-in-out;
  transition: .3s ease-in-out;
  border: 3px double black;
  
  &:hover {
  -webkit-filter: blur(3px);
  filter: blur(3px);
  }
`
class Pictures extends Component {
    render () {
        return  <div className="color">
          <header className="bgimg">
            Katelynn Johnson <br/>
            (702)290-3373
            <a href="mailto:kt.johnson111@outlook.com" target="_top">kt.johnson111@outlook.com</a>
          </header>

                <Navigation />

            <div className="contained">
              <div className = "tooltip"><span class="tooltiptext">June 9 2018 1:22 AM <br /> Taylorsville, Utah</span><Image src="picture1.jpg" alt="codycody" /></div>
              <div className = "tooltip"><span className="tooltiptext">June 13 2018 7:12 AM <br /> Kauai, Hawaii</span><Image src="picture2.jpg" alt="flowerbee" /></div>
              <div className = "tooltip"><span className="tooltiptext">July 5 2018 12:08 AM <br /> Taylorsville, Utah</span><Image src="picture3.jpg" alt="sparklers" /></div>
              <div className = "tooltip"><span className="tooltiptext">July 1 2018 6:16 PM <br /> Taylorsville, Utah</span><Image src="picture4.jpg" alt="BG" /></div>
              <div className = "tooltip"><span className="tooltiptext">July 14 2018 4:56 PM <br /> Kauai, Hawaii</span><Image src="picture5.jpg" alt="pinkflowers" /></div>
              <div className = "tooltip"><span className="tooltiptext">July 5 2018 12:19 AM <br /> Taylorsville, Utah</span><Image src="picture6.jpg" alt="sk8" /></div>
              <div className = "tooltip"><span className="tooltiptext">June 14 2018 1:59 PM<br /> Kauai, Hawaii</span><Image src="picture7.jpg" alt="angelflow" /></div>
              <div className = "tooltip"><span className="tooltiptext">March 5 2018 12:28PM <br /> Brighton, Utah</span><Image src="picture8.jpg" alt="snoweeee" /></div>
            </div>
        </div>
    }
}

export default Pictures
