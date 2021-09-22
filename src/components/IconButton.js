import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { images } from '../images';

const Icon = styled.Image`
  tint-color: ${({ theme, completed }) =>
    completed ? theme.done : theme.text};
  width: 30px;
  height: 30px;
  margin: 10px;
`;

const IconButton = ({ type, onPressIn, id }) => {
  const _onPressIn = () => {
    onPressIn(id);
  };

  return (
    <TouchableOpacity onPressIn={_onPressIn}>
      <Icon source={type} />
    </TouchableOpacity>
  );
};

IconButton.defaultProps = {
  onPressIn: () => {},
};

IconButton.propTypes = {
  type: PropTypes.oneOf(Object.values(images)).isRequired,
  onPressIn: PropTypes.func,
  id: PropTypes.string,
  completed: PropTypes.bool,
};

export default IconButton;
