import React, {Component} from 'react';

class Tabs extends Component {

  renderTabs() {
    const {tabs, onChange} = this.props;
    return tabs.map((tab, index) => <span key={tab} onClick={() => onChange(index)}>{tab} </span>);
  }

  render() {
    return (
      <div>
        {this.renderTabs()}
        <hr/>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Tabs;
