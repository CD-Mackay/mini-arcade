import styled from 'styled-components';

const StyledTextInput = styled.div`
display: flex;
form {
  display: flex;
  flex-direction: column;
  input {
    border: 1px solid #00FFFF;
    background: #24282f;
    padding: 5px;
    border-radius: 5px;
    font-size: 20px;
    color: #00FFFF;
  }
  div {
    text-align: center;
    p {
      opacity: ${props => props.error ? 1 : 0};
      transition: opacity 0.3s ease-out;
      padding: 5px;
      font-size: 24px;
    }
  }
  Button {
    margin: 5px;
  }
}

`

export default StyledTextInput;