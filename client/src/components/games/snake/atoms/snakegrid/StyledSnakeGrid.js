import styled from 'styled-components';

const StyledSnakeGrid = styled.div`
width: 400px;
height: 400px;
display: flex;
flex-wrap: wrap;
border: 2px solid #00FFFF;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr;


.snake {
  color: blue;
}

.apple {
  color: red;
}

`

export default StyledSnakeGrid;