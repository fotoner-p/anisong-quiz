import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  font-weight: bold;
  font-size: 20px;
  border-radius: 16px;
  width: 100%;
  color: #fff;
  background-color: ${props => props.theme.color.main};
  
  &:hover{
    transition: background-color .1s ease;
    background-color: ${props => props.theme.color.mainBright};
  }
`

type LinkProps = {
  to: string;
}

const LinkButton:React.FC<LinkProps> = ({to, children}) => {
  return(
    <StyledLink to={to}>
      {children}
    </StyledLink>
  );
}

export default LinkButton;