import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getLinks, deleteLink } from '../actions/linkActions';
import PropTypes from 'prop-types';

class LinkList extends Component {
  componentDidMount() {
    this.props.getLinks();
  }

  onDeleteClick = id => {
    this.props.deleteLink(id);
  };

  render() {
    const { links } = this.props.link;

    return (
      <Container>
        <ListGroup>
          <TransitionGroup className='link-list'>
            {links.map(({ id, name, url }) => (
              <CSSTransition classNames='fade' key={id} timeout={500}>
                <ListGroupItem>
                  <Button
                    className='remove-btn'
                    color='danger'
                    size='sm'
                    onClick={this.onDeleteClick.bind(this, id)}
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

LinkList.propTypes = {
  getLinks: PropTypes.func.isRequired,
  link: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  link: state.link
});

export default connect(
  mapStateToProps,
  { getLinks, deleteLink }
)(LinkList);
