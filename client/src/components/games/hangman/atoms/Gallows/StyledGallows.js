import styled from 'styled-components';

const StyledGallows = styled.div`
height: 30vh;
display: flex;
flex-direction: column;
padding: 20px;
#head {
  border: 2px solid #00FFFF;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin: 0 auto;
  opacity: ${props => props.display > 0 ? "1" : "0"};
}
#arms {
  display: grid;
  grid-template-columns: 1fr 1fr;
  #right-arm {
    border-top: 2px solid #00FFFF;
    width: 50px;
    opacity: ${props => props.display > 1 ? "1" : "0"};
  }
  #left-arm {
    border-top: 2px solid #00FFFF;
    width: 50px;
    opacity: ${props => props.display > 2 ? "1" : "0"};
  }
}
#body {
  height: 100px;
  border: 1px solid #00FFFF;
  margin: 0 auto;
  opacity: ${props => props.display > 3 ? "1" : "0"};
}
#legs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  #left-leg {
    width: 50px;
    border: 1px solid #00FFFF;
    opacity: ${props => props.display > 4 ? "1" : "0"};
  }
  #right-leg {
    width: 50px;
    border: 1px solid #00FFFF;
    opacity: ${props => props.display > 5 ? "1" : "0"};
  }
}
`

export default StyledGallows;