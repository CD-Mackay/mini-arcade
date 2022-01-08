import styled from 'styled-components';

const StyledLetterWrapper = styled.div`
margin: 2px;
border-bottom: 2px solid #00FFFF;
div {
  p {
    font-size: 42px;
    color: ${props => props.display ? "#24282f" : "#00FFFFF"};
    margin-bottom: 2px;
    padding: 12px;
  }
}

`


export default StyledLetterWrapper;