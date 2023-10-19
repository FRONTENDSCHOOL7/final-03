import styled from 'styled-components';

const styleConstants = {
  textColor: '#767676',
  fontFamily: "'Spoqa Han Sans Neo', sans-serif"
};
export const ChatListsLayout = styled.ul`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  gap: 20px;
  min-height: 712px;
  width: 390px;
  align-items: center;
  overflow-x: scroll;
`;

export const Li = styled.li`
  width: 358px;
  height: 42px;
  background-color: pink;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const StyledProfileImg = styled.img`
  width: 42px;
  height: 42px;
  margin-right: 12px;
`;
export const UserChatBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const H2 = styled.p`
  color: #000;
  font-family: ${styleConstants.fontFamily};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const P = styled.p`
  color: ${styleConstants.textColor};
  font-family: ${styleConstants.fontFamily};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const Span = styled.span`
  color: #dbdbdb;
  font-family: ${styleConstants.fontFamily};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: absolute;
  bottom: 3px;
  right: 0px;
`;
