import styled from 'styled-components';

const StyledHeader = styled.div`
display: grid;
grid-template-columns: ${props => props.location === "/" ? "1fr" : "1fr 1fr 1fr"};
padding: 10px;
width: 70vw;
margin: 0 auto;
text-align: center;
h1 {
  font-size: 42px;
  padding: 10px;
}

.button-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  Button {
    margin: 0 auto;
  }
  a {
    margin: 0 auto;
  }
}
`

export default StyledHeader;