import React from 'react'
import styled from 'styled-components'
import ContactPage from './ContactPage'

import mainLogo from '../images/Logo/logo1.png'
import state from '../images/Content/nebraska-state.png'
import card1 from '../images/Content/card1.jpg'
import card2 from '../images/Content/card2.jpg'
import card3 from '../images/Content/card3.jpg'



const HomeContainer = styled.div`

`

const HomeLogo = styled.img`
    width: 75%;
    margin-top: -4rem;
    margin-bottom: 10%;

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
const Info = styled.p`
    font-size: 2.5rem;
    padding: 0%;
    line-height: 3.25rem;

    @media (max-width: 500px) {
        font-size: 1.25rem;
        padding-bottom: 5%;
        line-height: 2rem;
    }
`
const Phone = styled.h1`
    font-size: 2.75rem;
    font-weight: bold;
    padding: 2%;
`
const BookingContainer = styled.div`
    margin: 4%;
`
const Booking = styled.a`
    color: white;
    font-size: 1.5rem;
    border: 1px solid white;
    padding: 1%;
    border-radius: .5rem;

    @media (max-width: 500px) {
        font-size: .70rem;
        border: 1px solid white;
        padding: 1.5%;
        border-radius: .5rem;
    }

    &:hover {
        background: white;
        text-decoration: none;
        color: black;
        border: 1px solid black;
      }
`


export default function HomePage() {
    return (
        <HomeContainer className="home">
            <div className="home-logo" >
                <HomeLogo src={mainLogo} alt="logo"></HomeLogo>
            </div>

            <Info>
                Services and Pricing: <br></br>
                Mini Consult (15min-20min) <br></br>
                Private Reading (45min-1hr) <br></br>
                Private Dinner/Party (Hourly Rate) <br></br>
                Pop Ups and Social Events
            </Info>

            <Phone>Phone readings are also available upon request</Phone>
            
            <BookingContainer>
                <Booking href="#contact">Schedule a Reading!</Booking>
            </BookingContainer>


            <div className="card-wrapper">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={card1} alt="card1" />
                        </div>
                        <div className="flip-card-back">
                            <h3>More information here</h3>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={card2} alt="card2" />
                        </div>
                        <div className="flip-card-back">
                            <h3>More information here</h3>
                        </div>
                    </div>
                </div>
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img src={card3} alt="card3" />
                        </div>
                        <div className="flip-card-back">
                            <h3>More information here</h3>
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

        </HomeContainer>
    )
}
