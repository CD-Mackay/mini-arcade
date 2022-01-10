import styled from 'styled-components';

const StyledWrongLetter = styled.div`
margin: 5px;
padding: 5px;
p {
  color: ${props => props.display ? "red" : "blue"}
}
`

export default StyledWrongLetter;