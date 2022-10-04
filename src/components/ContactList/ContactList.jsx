import ContactItem from 'components/ContactItem/ContactItem';
import Filter from 'components/Filter/Filter';
import { Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/contacts/selectors';
import { CartStyle, ListContainer, Title } from './ContactList.styled';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const contactsFiltered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Col sm={true} className="centerItem">
      <Filter />
      <ListContainer>
        {!contactsFiltered.length ? (
          <Title>not found</Title>
        ) : (
          <>
            {contactsFiltered.map(({ id, name, number }) => (
              <CartStyle key={id}>
                <ContactItem id={id} name={name} number={number} />
              </CartStyle>
            ))}
          </>
        )}
      </ListContainer>
    </Col>
  );
}
