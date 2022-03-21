import styled from 'styled-components';

const StyledOpponentThrow = styled.div`
div {
  display: flex;
  height: 40px;
  h1 {
    font-size: 24px;
  }
}
p {
  opacity: ${props => props.opacity === 0 ? 0 : 1};
  transition: opacity 0.2s ease-out;
  padding: 10px;
  font-size: 18px;
}

`

export default StyledOpponentThrow;