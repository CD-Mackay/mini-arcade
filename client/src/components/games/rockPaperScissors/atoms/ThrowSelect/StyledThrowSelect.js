import styled from 'styled-components';

const StyledThrowSelect = styled.div`
margin-bottom: 10px;
#rock {
  width: 200px;
  border: ${props => props.input === "rock" ? "2px solid #43ffff" : "none"};
  border-radius: 10px;
  margin-bottom: 5px;
  Button {
    width: 100%;
  }
}
#paper {
  width: 200px;
  border: ${props => props.input === "paper" ? "2px solid #43ffff" : "none"};
  border-radius: 10px;
  margin-bottom: 5px;
  Button {
    width: 100%;
  }
}
#scissors {
  width: 200px;
  border: ${props => props.input === "scissors" ? "2px solid #43ffff" : "none"};
  border-radius: 10px;
  margin-bottom: 5px;
  Button {
    width: 100%;
  }
}
`

export default StyledThrowSelect;