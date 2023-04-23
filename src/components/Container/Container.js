import { ContainerStyled } from './Container.styled';
import PropTypes from 'prop-types';

export const Container = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

Container.propTypes = {
  children: PropTypes.array.isRequired,
};
