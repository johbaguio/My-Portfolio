import React, { Component } from 'react';
import {Card, Button} from 'react-bootstrap';
import MemoryGame from '../Static/Images/memory-game.png';
import HyfQuiz from '../Static/Images/hyf-quiz.png';
import QuotesApp from '../Static/Images/quotes-app.png';
import CurrencyConverter from '../Static/Images/currency-converter.png';
import ExcessLuggage from '../Static/Images/excess-luggage.png';


class Projects extends Component {
    render() {
        return (
            <div className='projects-container'>
                <h1 className='projects-text'>Projects</h1>
                <hr className='hr-projects0' />
                <hr className='hr-projects' />
                <div className='card-container'>
                    <Card style={{ width: '18rem' }} className='card-projects'>
                        <Card.Img variant="top" src={QuotesApp}  className='card-image' />
                        <Card.Body>
                            <Card.Title>Quotes Generator</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    {/* <Card style={{ width: '18rem' }} className='card-projects'>
                        <Card.Img variant="top" src={CurrencyConverter}  className='card-image' />
                        <Card.Body>
                            <Card.Title>Currency Converter</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card> */}
                    <Card style={{ width: '18rem' }} className='card-projects'>
                        <Card.Img variant="top" src={HyfQuiz}  className='card-image' />
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
                        <Card.Img variant="top" src={ExcessLuggage}  className='card-image' />
                        <Card.Body>
                            <Card.Title>Excess Luggage</Card.Title>
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
            
        )
    }
}

export default Projects;