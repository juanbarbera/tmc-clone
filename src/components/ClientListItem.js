import styled from 'styled-components';

const Client = styled.p`
  font-size: 18px;
`;

const Complement = styled.span`
  font-size: 15px;
`;

export const ClientListItem = ({ client }) => {
  const { name, employees } = client;
  return (
      <Client>{name} - <Complement>{employees} employees</Complement></Client>
  )
}