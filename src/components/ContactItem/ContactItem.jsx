import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import { TableName } from 'components/ContactList/ContactList.styled';
import { deleteContacts } from 'redux/contacts/Operations';
import Button from '@mui/material/Button';

export default function ContactItem({ id, name, number, index }) {
  const dispatch = useDispatch();

  return (
    <>
      <td>
        <TableName> {index + 1}</TableName>
      </td>
      <td>
        <TableName>
          <Avatar name={name} round={true} size={40} />
        </TableName>
      </td>
      <td>
        <TableName> {name}</TableName>
      </td>
      <td>
        <TableName>{number}</TableName>
      </td>
      <td>
        <TableName>
          <Button
            variant="outlined"
            color="error"
            type="submit"
            onClick={() => dispatch(deleteContacts(id))}
          >
            Delete
          </Button>
        </TableName>
      </td>
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
