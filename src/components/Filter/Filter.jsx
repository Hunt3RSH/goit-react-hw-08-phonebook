import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { getFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/contactsSlice';
import { FilterLabel } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <>
      <FilterLabel>
        Find contacts by name
        <Form.Control
          type="text"
          name="filter"
          value={filter}
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={e => dispatch(setFilter(e.target.value))}
          required
        />
      </FilterLabel>
    </>
  );
};

export default Filter;
