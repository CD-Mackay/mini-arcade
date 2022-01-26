import styled from 'styled-components';

const StyledRenderThrow = styled.div`
display: flex;
transition: opacity 0.3s ease-out;
#rock {
  opacity: ${props => props.move === "rock" ? 1 : 0};
}
#paper {
  opacity: ${props => props.move === "paper" ? 1 : 0};
}
#scissors {
  opacity: ${props => props.move === "scissors" ? 1 : 0};
}

`

export default StyledRenderThrow;