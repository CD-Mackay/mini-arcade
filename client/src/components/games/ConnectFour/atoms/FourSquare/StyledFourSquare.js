import styled from 'styled-components';

const StyledFourSquare = styled.div`
border: 1px solid #00FFFF;
display: flex;
flex-direction: column;
height: 40px;
justify-content: center;
width: 40px;

:hover {
  background: ${props => props.available === true ? "green" : "gray"}
}
#circle {
  background: ${props => props.selected === 0 ? "#24282f" : props.selected === 1 ? "red" : "yellow"};
  border: 1px solid ${props => props.selected === 0 ? "#00FFFF" : props.selected === 1 ? "red" : "yellow"};
  border-radius: 50%;
  height: 50%;
  margin: 0 auto;
  width: 50%;
}

@media (min-width: 576px) {
  height: 60px;
  width: 60px;
}

@media (min-width: 768px) {
  height: 70px;
  width: 70px;
}
@media (min-width: 976px) {
  height: 100px;
  width: 100px;
}
`

export default StyledFourSquare;