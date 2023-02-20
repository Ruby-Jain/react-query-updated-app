import styled from "styled-components";

export const StyledButton = styled.button`
  border: 5px solid white;
  cursor: pointer;
  background-color: blue;
  border-radius: 20%;
  color: white;
  display: inline-block;
  padding: 1rem 2rem;
  font-size: 1rem;
  margin: 1rem 0;
  left: 400px;
  position: relative;
  margin-right: 1rem;
`;
export const StyledButton2 = styled(StyledButton)`
  background-color: green;
`;
export const StyleCharacters = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const StyledTitle = styled.h2`
  justify-content: center;
  align-items: center;
  text-align: center;
`;