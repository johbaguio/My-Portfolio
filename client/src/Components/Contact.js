import React, { Component } from 'react';
import { Form, ButtonToolbar, Button } from 'react-bootstrap';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import axios from 'axios';


class Contact extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    async handleSubmit(e) {
        e.preventDefault()
        const { name, email, message } = this.state;

        const form = await axios.post('/Contact', {
            name,
            email,
            message
        })
    }

    render() {
        return (
            <div className='contact-container'>
                <div className='contact-form'>
                    <h1> Let's connect, shall we? </h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Name </Form.Label>
                            <Form.Group className='form-grp'>
                                <Form.Control as="select" className='form-grp1'>
                                    <option>Ms.</option>
                                    <option>Mr.</option>
                                    <option>Mrs.</option>
                                    <option>Miss</option>
                                </Form.Control>
                                <Form.Control type="email" name='name' placeholder="Your name here" className='form-grp2' onChange={this.handleChange} />
                            </Form.Group>

                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='email' placeholder="name@example.com" onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows="3" name='message' onChange={this.handleChange} />
                        </Form.Group>
                        <ButtonToolbar>
                            <Button variant="primary">Send</Button>
                        </ButtonToolbar>
                    </Form>


                    <div className='contact-socials'>
                        {/* LinkedIn */}
                        <a href='https://www.linkedin.com/in/johanna-may-baguio-a8aa90174/' rel='noopener noreferrer' target='_blank'>
                            Let's connect <i className="fa fa-linkedin-square" aria-hidden='true' />
                        </a> <br />
                        {/* Instagram */}
                        <a href='https://www.instagram.com/johbaguio/' rel='noopener noreferrer' target='_blank'>
                            Follow me  <i className="fa fa-instagram" aria-hidden='true' />
                        </a> <br />
                        {/* Facebook */}
                        <a href='https://www.facebook.com/johbaguio' rel='noopener noreferrer' target='_blank'>
                            Add me up  <i className="fa fa-facebook-square" aria-hidden='true' />
                        </a>
                    </div>

                </div>
                <div className='my-map'>
                    <Map google={this.props.google} zoom={14}>

                        <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />


                    </Map>
                </div>

            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyBc6j870jYNCFdpDUJPwDpo0YINhsaKnxM')
})(Contact)