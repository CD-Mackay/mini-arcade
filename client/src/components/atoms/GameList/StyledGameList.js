import styled from 'styled-components';

const StyledGameList = styled.div`
.game-wrapper {
  border-radius: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  max-width: 80vw;
  margin: 0 auto;
  background: #646F82;
  padding: 10px;
}
@media (min-width: 768px) {
  .game-wrapper {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
`

export default StyledGameList;