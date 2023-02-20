import React from "react";
import { StyledCharacter } from "./style";
import { Styledimage } from "./style";
import { Textcontainer } from "./style";

const Character = (props) => {
  return (
    <StyledCharacter>
      <Styledimage src={props.fetchedData.thumbnailUrl}></Styledimage>
      <Textcontainer>
        <h2>{props.fetchedData.title}</h2>
        <p>
          {props.fetchedData.id} 
        </p>
        <p>{props.fetchedData.title}</p>
      </Textcontainer>
    </StyledCharacter>
  );
};

export default React.memo(Character);
