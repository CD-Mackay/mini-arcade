import styled from 'styled-components';

const StyledScoreKeeper = styled.div`
border: 1px solid #00FFFF;
width: 300px;
max-height: 200px;
h4 {
  font-size: 28px;
  margin: 5px;
}
.score {
  display: flex;
  justify-content: space-between;
  border: 1px solid #00FFFF;
  p {
    margin: 4px;
  }
}
`

export default StyledScoreKeeper;