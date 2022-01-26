import styled from 'styled-components';

const StyledOpponentThrow = styled.div`
display: flex;
p {
  opacity: ${props => props.opacity === 0 ? 0 : 1};
  transition: opacity 0.2s ease-out;
}
`

export default StyledOpponentThrow;