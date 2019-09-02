import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addLink } from '../actions/linkActions';
import uuid from 'uuid';

class LinkModal extends Component {
  state = {
    modal: false,
    name: '',
    url: ''
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.url]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const newLink = {
      id: uuid(),
      name: this.state.name,
      url: this.state.url
    };

    // Add link via addLink action (Redux)
    this.props.addLink(newLink);

    // Close modal
    this.toggle();
  };
  render() {
    return (
      <div>
        <Button
          color='dark'
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >
          Lisää linkki
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Lisää linkkilistaan</ModalHeader>

          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='link'>Linkin tiedot</Label>
                <Input
                  type='text'
                  name='name'
                  id='link'
                  placeholder='Linkin nimi'
                  onChange={this.onChange}
                />

                <Input
                  type='text'
                  name='url'
                  id='link'
                  placeholder='Linkin nimi'
                  onChange={this.onChange}
                />

                <Button style={{ marginTop: '2rem' }} color='dark' block>
                  Lisää linkki
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  link: state.link
});

export default connect(
  mapStateToProps,
  { addLink }
)(LinkModal);
