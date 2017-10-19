import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Tabs from './Tabs';
import PatientOverview from './PersonOverview';
import PersonData from './PersonData';
import Messages from './Messages';
import Notes from './Notes';

class PersonDetails extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
    };

    this.handleTabsChange = this.handleTabsChange.bind(this);
  }

  handleTabsChange(tabIndex) {
    this.setState({activeIndex: tabIndex})
  }

  getTsbsMap() {
    const {condition, about} = this.props.person;
    return [
      {
        label: 'Overview',
        content: <PatientOverview condition={condition} about={about}/>
      },
      {
        label: 'Data',
        content: <PersonData/>
      },
      {
        label: 'Messages',
        content: <Messages/>
      },
      {
        label: 'Notes',
        content: <Notes/>
      },
    ];
  }

  getTabLabels() {
    return this.getTsbsMap().map(it => it.label);
  }

  getTabContents() {
    return this.getTsbsMap().map(it => it.content);
  }

  render() {
    const {activeIndex} = this.state;
    const tabLabels = this.getTabLabels();
    const tabContents = this.getTabContents();

    return (
      <Tabs tabs={tabLabels} active={activeIndex} onChange={this.handleTabsChange}>
        {tabContents[activeIndex]}
      </Tabs>
    );
  }
}

PersonDetails.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default PersonDetails;
