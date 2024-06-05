import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
`;

const CounterValue = styled.div`
  font-size: 3rem;
  margin: 20px 0;
  color: #007bff;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1.2rem;
  margin: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`;

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <Container>
      <Title>Counter App</Title>
      <CounterValue>{count}</CounterValue>
      <ButtonGroup>
        <Button onClick={increment} disabled={count === 20}>
          Increment
        </Button>
        <Button onClick={decrement} disabled={count === 0}>
          Decrement
        </Button>
        <Button onClick={reset} disabled={count === 0}>
          Reset
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default App;
