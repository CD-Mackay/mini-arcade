import styled from 'styled-components';

const StyledDropdown = styled.div`
.drop {
  align-items: flex-start;
  display: ${props => props.show ? "flex" : "none"};
  flex-direction: column;
  position: absolute;
}
`

export default StyledDropdown;