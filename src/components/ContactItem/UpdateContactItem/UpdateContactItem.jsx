import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/Operations';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { StyledBox, StyledFormEdit } from './UpdateContactItem.style';

export const UpdateUserForm = ({
  userToUpdate,
  closeForm,
  open,
  handleClose,
}) => {
  const [name, setName] = useState(userToUpdate.name);
  const [number, setNumber] = useState(userToUpdate.number);

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(updateContact({ ...userToUpdate, name, number }));
    closeForm();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledBox>
          <Button onClick={handleClose} color="error">
            Close
          </Button>

          <StyledFormEdit onSubmit={handleSubmit}>
            <label>
              <TextField
                fullWidth
                label="Name"
                id="fullWidth"
                type="text"
                required
                name="name"
                value={name}
                onChange={handleChange}
              />
            </label>
            <label>
              <TextField
                fullWidth
                label="Number"
                id="fullWidth"
                type="tel"
                required
                name="number"
                value={number}
                onChange={handleChange}
              />
            </label>
            <Button type="submit" variant="contained" color="success">
              Save changes
            </Button>
          </StyledFormEdit>
        </StyledBox>
      </Modal>
    </div>
  );
};
