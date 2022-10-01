import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  padding: 40px 0;
`;

export const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContactsListBody = styled.tbody``;

export const ContactsItem = styled.tr`
  &:nth-child(odd) {
    background-color: #c2c2c247;
  }
  &:nth-child(even) {
    background-color: #ecf1f3;
  }
`;

export const TableName = styled.span`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  line-height: 40px;
`;
