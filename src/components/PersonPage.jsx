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
        <PersonDetails person={activePerson}/>
      </div>
    );
  }

  render() {
    const {persons} = this.props;
    const {activePersonId} = this.state;

    return (
      <div className="columns">
        <div className="columns__left">
          <PersonList persons={persons} activePerson={activePersonId} onSelectPerson={this.handleSelectPerson}/>
        </div>
        <div className="columns__main">
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
