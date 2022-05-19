import styled from 'styled-components';

const StyledHeader = styled.div`
display: grid;
grid-template-columns: ${props => props.location === "/" ? "1fr" : "1fr 3fr 1fr"};
padding: 10px;
width: 100vw;
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

@media (min-width: 576px) {
  width: 90vw;
}

@media (min-width: 992px) {
  width: 70vw;
}
`

export default StyledHeader;