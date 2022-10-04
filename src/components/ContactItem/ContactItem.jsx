import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContacts } from 'redux/contacts/Operations';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { UpdateUserForm } from './UpdateContactItem/UpdateContactItem';
import { getContacts } from 'redux/contacts/selectors';
import { useState } from 'react';
import { AvatarContact, AvatarWrapper } from './ContactItem.styled';
import { CardNumber } from 'components/ContactList/ContactList.styled';

export default function ContactItem({ id, name, number }) {
  const [userToUpdate, setUserToUpdate] = useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const users = useSelector(getContacts);
  const dispatch = useDispatch();
  const closeForm = () => {
    setUserToUpdate(null);
  };

  const showUpdateForm = userId => {
    const user = users.find(({ id }) => id === userId);
    setUserToUpdate(user);
  };
  return (
    <>
      <AvatarWrapper>
        <AvatarContact name={name} size={320} />
      </AvatarWrapper>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <CardNumber href={'tel:' + number}>{number}</CardNumber>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          color="error"
          type="submit"
          onClick={() => dispatch(deleteContacts(id))}
        >
          Delete
        </Button>
        <Button
          onClick={() => {
            showUpdateForm(id);
            handleOpen(true);
          }}
          color="success"
          variant="outlined"
        >
          Edit
        </Button>
        {userToUpdate && userToUpdate.id === id && (
          <UpdateUserForm
            userToUpdate={userToUpdate}
            closeForm={closeForm}
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
          />
        )}
      </CardActions>
    </>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
