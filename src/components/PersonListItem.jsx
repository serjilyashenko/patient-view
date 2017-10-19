import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PersonListItem extends Component {

  render() {
    const {name, remark, photo, active, onClick} = this.props;
    const remarkElement = remark ? <span>{remark}</span> : null;
    const activeClass = active ? 'list-item_active' : '';

    return (
      <div className={`list-item ${activeClass}`} onClick={() => onClick()}>
        <img className="list-item__picture" src={photo} alt={name}/>
        <div className="list-item__content">
          <div className="list-item__title">
            {name}
          </div>
          <div className="list-item__details">
            {remarkElement}
          </div>
        </div>
      </div>
    );
  }
}

PersonListItem.propTypes = {
  name: PropTypes.string.isRequired,
  remark: PropTypes.string,
  photo: PropTypes.string,
};

export default PersonListItem;
