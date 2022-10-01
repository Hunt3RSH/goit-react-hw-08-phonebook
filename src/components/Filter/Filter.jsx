import { StyledContainer } from 'components/ContactForm/ContactForm.styled';
import { Form } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { getFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/slice';
import { FilterLabel } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <StyledContainer className="mb-4">
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
    </StyledContainer>
  );
};

export default Filter;
