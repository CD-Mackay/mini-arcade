import styled from 'styled-components';

const StyledTextInput = styled.div`
display: flex;
form {
  display: flex;
  flex-direction: column;
  input {
    background: #24282f;
    border: 1px solid #00FFFF;
    border-radius: 5px;
    color: #00FFFF;
    font-size: 20px;
    padding: 5px;
  }
  div {
    text-align: center;
    p {
      font-size: 24px;
      opacity: ${props => props.error ? 1 : 0};
      padding: 5px;
      transition: opacity 0.3s ease-out;
    }
  }
  Button {
    margin: 5px;
  }
}

`

export default StyledTextInput;