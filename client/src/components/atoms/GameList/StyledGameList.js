import styled from 'styled-components';

const StyledGameList = styled.div`
width: 100vw;
.game-wrapper {
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
  width: 80vw;
  margin: 0 auto;
  background: #646F82;
  padding: 10px;
}
`

export default StyledGameList;