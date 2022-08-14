import styled from 'styled-components';

const StyledGameSquare = styled.div`
border: 1px solid #00FFFF;
display: flex;
flex-direction: column;
height: 50px;
justify-content: center;
width: 100%;
  p {
    font-size: 46px;
    opacity: ${props => props.opacity == 0 ? 0 : 1};
    transition: opacity 0.3s ease-out;
  }
:hover {
  background: #8d1b1f;
}

@media (min-width: 576px) {
  height: 90px;
}

@media (min-width: 768px) {
height: 150px;
}
`

export default StyledGameSquare;