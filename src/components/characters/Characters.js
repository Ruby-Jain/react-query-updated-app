import React from "react";
import { StyledTitle } from "./style2";
import { StyleCharacters } from "./style2";
import { StyledButton } from "./style2";
import { StyledButton2 } from "./style2";
import { useQuery } from "react-query";
import { useState } from "react";
import Character from "../character/Character";
import axios from "axios";
import { useEffect } from "react";

const Characters = () => {
  const [page, setpage] = useState(1);

  const fetchdata = async (page) => {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=50&_page=${page}`)
    return data;
  };
  /* fetching data keeping the page number as dependency array for changing the page numbers */
  useEffect(() => { 
    fetchdata(page);
  }, [page]) ;

  const { data, status, isFetching } = useQuery( //using this hook for 3 in 1 operations instead of writing code for the same
    ["character", page],
    () => fetchdata(page),
    {
      keepPreviousData: true,
    }
  );

  if (isFetching || status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "error") {
    return <div>Page not found</div>;
  }
  console.log(data);

  return (
    <>
      <StyledTitle>
        Fetching API using React Query & Styled Components & Optimization
      </StyledTitle>
      <StyleCharacters>
        {data.map((element, id) => { //setting the data to the UI
          return <Character key={id} fetchedData={element} />;
        })}
      </StyleCharacters>
      <br />

      <StyledButton
        disabled={page === 1} //setting the previous button disabled when user is at 1st page
        onClick={() => {
          setpage((page) => page - 1);
        }}
        className="prevpage"
      >
        Previous
      </StyledButton>
      <StyledButton2
        disabled={page === 100} //setting the next button disabled when user is in the last page
        onClick={() => {
          setpage((page) => page + 1);
        }}
        className="nextpage"
      >
        Next
      </StyledButton2>
    </>
  );
};

export default React.memo(Characters); //using memo for cashing and fast performance
