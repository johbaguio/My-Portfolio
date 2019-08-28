import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import MemoryGame from '../Static/Images/memory-game.png';
import HyfQuiz from '../Static/Images/hyf-quiz.png';
import QuotesApp from '../Static/Images/quotes-app.png';
import CurrencyConverter from '../Static/Images/currency-converter.png';
import ExcessLuggage from '../Static/Images/excess-luggage.png';
import Jo from '../Static/Images/jo-about.jpg';
import Jo1 from '../Static/Images/jo-about4.jpg';
import Jo2 from '../Static/Images/jo-about3.jpg';
import Image from 'react-bootstrap/Image';
import Carousel from 'react-bootstrap/Carousel';



class About extends Component {
    render() {
        return (
            <div className='aboutMe-container'>
                {/* <h1 className='name'> Johanna May Baguio </h1> */}

                <Carousel className='carousel-aboutme'>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Jo}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Milan, Italy</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Jo1}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Vatican City</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Jo2}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Venice, Italy</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <div className='aboutMe-details'>
                    <p className='aboutMe-1'>
                        I’m a 28 year old web developer with a bachelor’s degree in informations and communications technology. I recently earned my post - graduate units in programming at Hack Your Future where I was able to hone my skills in programming using the languages REACT, JAVA SCRIPT, Etc. Throughout the entire program, I was able to create the following projects:  </p>
                    <div className='projects-container-abtme'>

                        <div className='card-container-aboutMe'>
                            <Card style={{ width: '18rem' }} className='card-projects'>
                                <Card.Img variant="top" src={QuotesApp} className='card-image' />
                                <Card.Body>
                                    <Card.Title>Quotes Generator</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                            </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem' }} className='card-projects'>
                                <Card.Img variant="top" src={HyfQuiz} className='card-image' />
                                <Card.Body>
                                    <Card.Title>HYF Quiz</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                            </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem' }} className='card-projects'>
                                <Card.Img variant="top" src={MemoryGame} className='card-image' />
                                <Card.Body>
                                    <Card.Title>HYF-Christmas memory game</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                            </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>

                    <p className='aboutMe-2'>
                        Aside from navigating the cyber world, I also love exploring different places in the world. I love immersing myself in the diversities found in the country’s structures, history, and culture. In every place I’ve set my foot into, I made sure to take a piece of that place with me. These fragments of memories are collectively known as my excess luggage. Hop on and take a peek inside! ✈   </p>

                    
                     <img src="https://s19.postimg.cc/ik3qv5ysz/HEADER.jpg"  className='excess-luggage-pic' alt ='Excess Luggage Banner' />

                </div>

            

            </div>
        )
    }
}

export default About; 

{/* <a  href='https://johbaguio.github.io/hyf-quiz/?' target='_blank' className='link-excess-luggage'></a> */}