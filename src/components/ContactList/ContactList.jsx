import { Pagination } from '@mui/material';
import ContactItem from 'components/ContactItem/ContactItem';
import Filter from 'components/Filter/Filter';
import { useMemo, useState } from 'react';
import { Col, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import {
  ContactsItem,
  ContactsListBody,
  ListContainer,
  TableName,
  Title,
} from './ContactList.styled';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const [page, setPage] = useState(1);
  const [curPage, setCurPage] = useState(1);

  const onPageChange = (_, currentPage) => {
    setCurPage(currentPage);
  };

  const newContacts = useMemo(() => {
    const contactsFiltered = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    setPage(Math.ceil(contactsFiltered.length / 10));
    const firstPageIndex = (curPage - 1) * 10;
    const lastPageIndex = firstPageIndex + 10;
    setCurPage(curPage);
    return contactsFiltered.slice(firstPageIndex, lastPageIndex);
  }, [contacts, curPage, filter]);

  return (
    <Col sm={true} className="centerItem">
      <Filter />
      <ListContainer>
        {!newContacts.length ? (
          <Title>not found</Title>
        ) : (
          <>
            <Title>My Contacts</Title>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>
                    <TableName>№</TableName>
                  </th>
                  <th>
                    <TableName>Avatar</TableName>
                  </th>
                  <th>
                    <TableName>Name</TableName>
                  </th>
                  <th>
                    <TableName>Number</TableName>
                  </th>
                  <th>
                    <TableName>Option</TableName>
                  </th>
                </tr>
              </thead>
              <ContactsListBody>
                {newContacts.map(({ id, name, number }, index) => (
                  <ContactsItem key={id}>
                    <ContactItem
                      id={id}
                      name={name}
                      number={number}
                      index={index}
                    />
                  </ContactsItem>
                ))}
              </ContactsListBody>
            </Table>
            <Pagination
              count={page}
              onChange={onPageChange}
              defaultPage={1}
              variant="outlined"
              shape="rounded"
              className="centerItem"
            />
          </>
        )}
      </ListContainer>
    </Col>
  );
}
