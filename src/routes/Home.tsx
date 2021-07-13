import React from 'react';
import styled from "styled-components";
import Article from "../components/Article";
import TwitterLink from "../components/TwitterLink";
import LinkButton from "../components/LinkButton";

const Title = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${props => props.theme.color.main};
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const NoticeAlpha = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  width: 90px;
  height: 36px;
  border-radius: 12px;
  background-color: ${props => props.theme.color.sub};
`

const Home:React.FC = () =>{
  return (
    <Article>
      <Title>
        Anisong-Quiz
        <NoticeAlpha>
          알파 테스트
        </NoticeAlpha>
      </Title>
      애니송, J-POP, ost 등의 서브컬쳐 곡들을 맞춰 보세요 !<br/>
      지속적으로 개발이 이루어지는 상황으로 사이트의 디자인 변화, 기능추가 등이 있을 수 있어요<br/><br/>

      버그 리포트, 사이트 문의등은 <TwitterLink twitterId="Fotoner_P"/>로 연락해주세요<br/><br/>
      <LinkButton to="/quiz">퀴즈 풀어보기</LinkButton>
    </Article>
  );
}

export default Home;
