import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class LinkList extends Component {
  state = {
    links: [
      { id: uuid(), name: 'Google', url: 'https://www.google.com' },
      { id: uuid(), name: 'Reddit', url: 'https://www.reddit.com' },
      { id: uuid(), name: 'YouTube', url: 'https://www.youtube.com' }
    ]
  };

  render() {
    const { links } = this.state;

    return (
      <Container>
        <Button
          color='dark'
          style={{ marginBottom: '2rem' }}
          onClick={() => {
            const name = prompt('Enter link name');
            const url = prompt('Enter link url');
            if (name && url) {
              this.setState(state => ({
                links: [...state.links, { id: uuid(), name: name, url: url }]
              }));
            }
          }}
        >
          Lisää linkki
        </Button>
        <ListGroup>
          <TransitionGroup className='link-list'>
            {links.map(({ id, name, url }) => (
              <CSSTransition classNames='fade' key={id} timeout={500}>
                <ListGroupItem>
                  <Button
                    className='remove-btn'
                    color='danger'
                    size='sm'
                    onClick={() => {
                      this.setState(state => ({
                        links: state.links.filter(link => link.id !== id)
                      }));
                    }}
                  >
                    &times;
                  </Button>
                  <a href={url}> {name}</a>
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

export default LinkList;
