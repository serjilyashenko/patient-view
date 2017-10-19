import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PersonListItem extends Component {

  render() {
    const {name, remark, photo, onClick} = this.props;
    const remarkElement = remark ? <span> - {remark}</span> : null;

    return (
      <div onClick={() => onClick()}>
        <img src={photo} alt={name}/>
        <div>
          {name}
          {remarkElement}
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
