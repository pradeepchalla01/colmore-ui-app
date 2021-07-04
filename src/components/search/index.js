import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { isApiKeyAvailable } from "../../util";
import { searchCompany } from '../../redux/actions/SearchAction';
import { getSearchResults } from '../../redux/reducer/SearchReducer';

const Search = () => {
  const searchResults = useSelector(getSearchResults);
  const dispatch = useDispatch();
  const history = useHistory();
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    isApiKeyAvailable(history);
  });

  useEffect(() => {
    if (keyword) {
      dispatch(searchCompany(keyword));
    }
  }, [dispatch, keyword]);

  console.log(searchResults);
  const handleSubmit = (event) => {
    event.preventDefault();
    setKeyword('');
  }

  return (
    <>
      <Row>
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <h2>Search Page</h2>
            <Form.Control type="text" placeholder="Search company" required value={keyword} onInput={e => setKeyword(e.target.value)} />
            <Button className="mt-2" variant="primary" type="submit">Cancel</Button>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default Search;
