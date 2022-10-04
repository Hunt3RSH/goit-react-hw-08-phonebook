import { Card } from '@mui/material';
import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  padding: 40px 0;
`;

export const ListContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 4fr));
  grid-gap: 15px;
  margin: 0 auto;
  list-style: none;
  justify-content: center;
  margin-top: 40px;
`;

export const TableName = styled.span`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  line-height: 40px;
`;

export const CartStyle = styled(Card)`
  width: 100%;
  border-radius: 40px 10px 40px 10px !important;
`;
