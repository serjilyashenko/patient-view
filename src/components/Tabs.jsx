import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Tabs extends Component {

  renderTabs() {
    const {tabs, active, onChange} = this.props;
    return tabs.map((tab, index) => {
      const isActiveClass = active === index ? 'tabs__link_active' : '';

      return <span className={`tabs__link ${isActiveClass}`} key={tab} onClick={() => onChange(index)}>{tab}</span>;
    });
  }

  render() {
    return (
      <div className="tabs">
        <div className="tabs__header">
          {this.renderTabs()}
        </div>
        <div className="tabs__content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  active: PropTypes.number.isRequired,
};

export default Tabs;
