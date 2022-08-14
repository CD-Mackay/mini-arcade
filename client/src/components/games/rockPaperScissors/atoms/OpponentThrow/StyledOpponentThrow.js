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
  font-size: 18px;
  opacity: ${props => props.opacity === 0 ? 0 : 1};
  padding: 10px;
  transition: opacity 0.2s ease-out;
}

.throw {
  display: flex;
  flex-direction: column;
}

`

export default StyledOpponentThrow;