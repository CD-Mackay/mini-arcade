import styled from 'styled-components';

const StyledGameSquare = styled.div`
border: 1px solid #00FFFF;
height: 150px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
  p {
    font-size: 46px;
    transition: opacity 0.3s ease-out;
    opacity: ${props => props.opacity == 0 ? 0 : 1};
  }
:hover {
  background: #8d1b1f;
}
`

export default StyledGameSquare;