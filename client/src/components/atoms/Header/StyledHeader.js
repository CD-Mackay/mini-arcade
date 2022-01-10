import styled from 'styled-components';

const StyledHeader = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
padding: 10px;
width: 100vw;
h1 {
  font-size: 42px;
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