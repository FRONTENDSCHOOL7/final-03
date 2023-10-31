import styled from 'styled-components';

export const SearchHeaderLayout = styled.div`
  display: flex;
  flex-direction: row;
  padding: 13px 0;
  border-bottom: 0.5px solid #dbdbdb;
  width: 100vh;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const BackArrowButton = styled.button`
  width: 22px;
  height: 22px;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
`;
export const SearchBox = styled.input`
  width: 316px;
  height: 32px;
  border-radius: 32px;
  background-color: #f2f2f2;
  border: none;
  padding-left: 16px;

  ::placeholder {
    color: #c4c4c4;
    font-family: 'Spoqa Han Sans Neo';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  &:focus {
    outline: none;
  }
`;