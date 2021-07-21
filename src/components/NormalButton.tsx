import styled, {css} from "styled-components";

type ButtonProps = {
  disable: boolean;
}

const NormalButton = styled.button<ButtonProps>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  font-weight: bold;
  font-size: 20px;
  border-radius: 16px;
  flex: 1;
  user-select: none;
  color: #fff;
  background-color: ${props => 
    props.disable? props.theme.color.mainGrey: props.theme.color.main
  };
  transition: background-color .5s ease;

  ${props => !props.disable&&
    css`
      &:hover{
        background-color: ${props => props.theme.color.mainBright};
      }
    `
  }
`

export default NormalButton
