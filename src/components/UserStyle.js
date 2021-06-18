import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr);

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const PageTitle = styled.h2`
  text-align: center;
`;

export const UserCard = styled.div`
  width: 500px;
  margin: 0 auto;
  text-align: center;
  border: 1px solid black;
  margin-bottom: 10px;
  border-radius: 8px;
`;

export const UserCardHeader = styled.div`
  border-bottom: 1px solid black;
  background: #66de93;
`;

export const CardTitle = styled.h2``;

export const UserCardContent = styled.div``;

export const UserName = styled.p``;

export const UserSurname = styled.p``;

export const UserEmail = styled.p``;

export const Loading = styled.div``;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10px;
`;
