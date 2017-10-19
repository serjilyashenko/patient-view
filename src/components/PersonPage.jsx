import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PersonList from './PersonList';
import PersonShortInfo from './PersonShortInfo';
import PersonDetails from './PersonDetails';

class PersonPage extends Component {

  constructor(props) {
    super(props);

    const activePerson = props.persons[0] || {};
    const activePersonId = activePerson.id;

    this.state = {
      activePersonId,
    };

    this.handleSelectPerson = this.handleSelectPerson.bind(this);
  }


  handleSelectPerson(id) {
    this.setState({activePersonId: id});
  }

  getActivePerson() {
    const {persons} = this.props;
    const {activePersonId} = this.state;

    return persons.find(person => person.id === activePersonId);
  }

  renderPersonContent() {
    const activePerson = this.getActivePerson();

    if (!activePerson) {
      return <div>null</div>;
    }

    return (
      <div>
        <PersonShortInfo person={activePerson}/>
        <div style={{height: 50}}></div>
        <PersonDetails person={activePerson}/>
      </div>
    );
  }

  render() {
    const {persons} = this.props;

    return (
      <div style={{clear: 'both', overflow: 'hidden'}}>
        <div style={{float: 'left', borderRight: '2px solid black', margin: 10}}>
          <PersonList persons={persons} onSelectPerson={this.handleSelectPerson}/>
        </div>
        <div style={{float: 'left', margin: 10}}>
          {this.renderPersonContent()}
        </div>
      </div>
    );
  }
}

PersonPage.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PersonPage;
