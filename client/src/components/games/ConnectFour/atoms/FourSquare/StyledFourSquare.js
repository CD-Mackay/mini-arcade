import styled from 'styled-components';

const StyledFourSquare = styled.div`
border: 1px solid #00FFFF;
width: 100%;
height: 120px;
display: flex;
flex-direction: column;
justify-content: center;
:hover {
  background: ${props => props.available === true ? "green" : "gray"}
}
#circle {
  height: 50%;
  width: 50%;
  border: 1px solid ${props => props.selected === 0 ? "#00FFFF" : props.selected === 1 ? "red" : "yellow"};
  background: ${props => props.selected === 0 ? "#24282f" : props.selected === 1 ? "red" : "yellow"};
  margin: 0 auto;
  border-radius: 50%;
}
`

export default StyledFourSquare;