import styled from 'styled-components';

const StyledGameList = styled.div`
max-width: 1000px;
margin: 0 auto;
.game-wrapper {
  background: #646F82;
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  max-width: 80vw;
  margin: 0 auto;
  padding: 10px;
}
@media (min-width: 768px) {
  .game-wrapper {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
`

export default StyledGameList;