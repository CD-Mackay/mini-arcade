import styled from 'styled-components';

const StyledGallows = styled.div`
display: flex;
flex-direction: column;
height: 30vh;
padding: 20px;
#head {
  border: 2px solid #00FFFF;
  border-radius: 50px;
  height: 50px;
  margin: 0 auto;
  opacity: ${props => props.display > 0 ? "1" : "0"};
  width: 50px;
}
#arms {
  display: grid;
  grid-template-columns: 1fr 1fr;
  #right-arm {
    border-top: 2px solid #00FFFF;
    opacity: ${props => props.display > 1 ? "1" : "0"};
    width: 50px;
  }
  #left-arm {
    border-top: 2px solid #00FFFF;
    opacity: ${props => props.display > 2 ? "1" : "0"};
    width: 50px;
  }
}
#body {
  border: 1px solid #00FFFF;
  height: 100px;
  margin: 0 auto;
  opacity: ${props => props.display > 3 ? "1" : "0"};
}
#legs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  #left-leg {
    border: 1px solid #00FFFF;
    opacity: ${props => props.display > 4 ? "1" : "0"};
    width: 50px;
  }
  #right-leg {
    border: 1px solid #00FFFF;
    opacity: ${props => props.display > 5 ? "1" : "0"};
    width: 50px;
  }
}
`

export default StyledGallows;