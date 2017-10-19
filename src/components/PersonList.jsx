import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PersonItem from './PersonListItem';

class PersonList extends Component {

  render() {
    const {persons, onSelectPerson} = this.props;
    const patientElements = persons.map(({id, name, age, photo}) =>
      <PersonItem
        key={id}
        name={name}
        remark={age + ' years'}
        photo={photo}
        onClick={() => onSelectPerson(id)}
      />);

    return (
      <div>
        {patientElements}
      </div>
    );
  }
}

PersonList.propTypes = {
  persons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PersonList;
