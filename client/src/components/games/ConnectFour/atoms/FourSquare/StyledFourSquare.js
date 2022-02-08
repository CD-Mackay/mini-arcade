import styled from 'styled-components';

const StyledFourSquare = styled.div`
border: 1px solid #00FFFF;
height: 120px;
#circle {
  height: 50%;
  width: 50%;
  border: 1px solid ${props => props.selected === 0 ? "#00FFFF" : props.selected === 1 ? "red" : "yellow"};
  margin: 0 auto;
  border-radius: 150px;
}
`

export default StyledFourSquare;