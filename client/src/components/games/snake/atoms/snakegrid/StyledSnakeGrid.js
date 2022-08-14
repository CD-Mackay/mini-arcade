import styled from 'styled-components';

const StyledSnakeGrid = styled.div`
border: 2px solid #00FFFF;
display: grid;
display: flex;
flex-wrap: wrap;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
height: 400px;
width: 400px;

.apple {
  color: red;
}

.snake {
  color: blue;
}

`

export default StyledSnakeGrid;