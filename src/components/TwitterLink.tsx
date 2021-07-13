import React from 'react';
import styled from "styled-components";

const MainStyle = styled.span`
  a{
    color: rgba(29,161,242,1.00);
    font-weight: bold;
  }
`

type TwitterProps = {
  twitterId: string;
}

const TwitterLink:React.FC<TwitterProps> = ({twitterId}) => {
  return(
    <MainStyle>
      <a href={`https://twitter.com/${twitterId}`}>
        @{twitterId}
      </a>
    </MainStyle>
  );
}

export default TwitterLink;