import React from 'react';
import styled from "styled-components";

const MainStyle = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.basicWidth};
  padding: 20px;
  background-color: #fff;
  border-radius: 16px;
  font-size: 16px;
  line-height: 1.33;
`

const Article:React.FC = ({children}) => {
  return(
    <MainStyle>
      {children}
    </MainStyle>
  );
}

export default Article;