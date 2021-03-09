import React from 'react'
import styled from 'styled-components'
import ContactPage from './ContactPage'

import mainLogo from '../images/Logo/logo1.png'
import state from '../images/Content/nebraska-state.png'
import card1 from '../images/Content/card1.jpg'
import card2 from '../images/Content/card2.jpg'
import card3 from '../images/Content/card3.jpg'
import arrow from '../images/Content/downarrow.png'


const HomeLogo = styled.img`
    width: 75%;
    margin-top: -4rem;
    margin-bottom: 5%;

    @media (max-width: 500px) {
        width: 100%;
        margin-top: 0rem;
    }
`

const Location = styled.p`
    font-size: 2rem;
    padding: 1%;
    margin-bottom: 10%;

    @media (max-width: 500px) {
        font-size: 1.25rem;
        padding: 0%;
    }
`
const State = styled.img`
    margin: 20px;
    width: 100px;

    @media (max-width: 500px) {
        width: 70px;
        margin: 10px;
    }
`

export default function HomePage() {
    return (
        <container className="home">
            <div className="home-logo" >
                <HomeLogo src={mainLogo} alt="logo"></HomeLogo>
            </div>

            <div className="info">
              <p>
                Hover over <br/>
                these cards <br/>
                for more info!
              </p>
              <img src={arrow} alt="arror" />
            </div>

            <div className="card-wrapper">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={card1} alt="card1" />
                        </div>
                        <div className="flip-card-back">
                            <div className="services">
                              <h1>Services and Pricing:</h1>
                              <p>
                                Mini Consult (15min-20min) <br/>
                                Private Reading (45min-1hr) <br/>
                                Private Dinner/Party (Hourly Rate) <br/>
                                Pop Ups and Social Events
                              </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={card2} alt="card2" />
                        </div>
                        <div className="flip-card-back">
                            <h1 className="phone">
                              Phone readings are also available upon request
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={card3} alt="card3" />
                        </div>
                        <div className="flip-card-back">
                            <div className="booking">
                              <a href="#contact">Contact me!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id="contact">
                <ContactPage />
            </div>

            <div>
                <Location>
                    Located in <br></br> 
                    Omaha, Nebraska <br></br>
                    <State src={state} alt="state-outline"/>
                </Location>
            </div>

        </container>
    )
}
