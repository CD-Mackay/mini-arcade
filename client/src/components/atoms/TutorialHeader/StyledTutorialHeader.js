import styled from 'styled-components';

const StyledTutorialHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
margin: 20px;
width: 90vw;
a {
  border: 1px solid #00FFFF;
  border-radius: 10px;
  color: #00FFFF;
  font-size: 24px;
  padding: 5px;
  text-decoration: none;
}
div {
  display: flex;
  flex-direction: column;
  p {
    font-size: 24px;
    margin-right: 5px;
    padding-top: 5px;
  }
  a {
    margin-right: 5px;
  }
}

@media (min-width: 576px) {
  div {
    flex-direction: row;
    margin: 0 auto;
  }
}
`

export default StyledTutorialHeader;