import styled from 'styled-components';

const StyledHeader = styled.div`
display: grid;
grid-template-columns: ${props => props.location === "/" ? "1fr" : "1fr 1fr 1fr"};
padding: 10px;
width: 100vw;
text-align: center;
h1 {
  font-size: 42px;
  padding: 10px;
}
#button-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  Button {
    margin: 0 auto;
  }
}
`

export default StyledHeader;