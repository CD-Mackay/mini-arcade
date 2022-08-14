import styled from 'styled-components';

const StyledThrowSelect = styled.div`
margin-bottom: 10px;
#rock {
  border: ${props => props.input === "rock" ? "2px solid #43ffff" : "2px solid #24282f"};
  border-radius: 10px;
  margin-bottom: 5px;
  width: 200px;
  Button {
    width: 100%;
  }
}
#paper {
  border: ${props => props.input === "paper" ? "2px solid #43ffff" : "2px solid #24282f"};
  border-radius: 10px;
  margin-bottom: 5px;
  width: 200px;
  Button {
    width: 100%;
  }
}
#scissors {
  border: ${props => props.input === "scissors" ? "2px solid #43ffff" : "2px solid #24282f"};
  border-radius: 10px;
  margin-bottom: 5px;
  width: 200px;
  Button {
    width: 100%;
  }
}
`

export default StyledThrowSelect;