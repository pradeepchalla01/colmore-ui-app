import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Spinner, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { isApiKeyAvailable } from "../../util";
import { searchCompany } from '../../redux/actions/SearchAction';
import { getSearchData } from '../../redux/reducer/SearchReducer';

const Search = () => {
  const searchData = useSelector(getSearchData);
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

  const handleSubmit = (event) => {
    event.preventDefault();
    setKeyword('');
  }

  const selectCompany = (selectedCompany) => {
    history.push("/details");
  }

  return (
    <>
      <Row className="mb-2">
        <Col md={6}>
          <Form onSubmit={handleSubmit}>
            <h2>Search Page</h2>
            <Form.Control type="text" placeholder="Search company" required value={keyword} onInput={e => setKeyword(e.target.value)} />
            <Button className="mt-2" variant="primary" type="submit">Cancel</Button>
          </Form>
        </Col>
      </Row>
      {searchData.loading &&
        <Row>
          <Col md={6}>
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      }
      {searchData.searchResults &&
        <Row>
          <Col md={6}>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Company Name</th>
                  <th>Symbol</th>
                  <th>Region</th>
                </tr>
              </thead>
              <tbody>
                {searchData.searchResults.map((item, index) => (
                  <tr key={index} style={{ cursor: "pointer" }} onClick={() => selectCompany(item)}>
                    <td>{index + 1}</td>
                    <td>{item['2. name']}</td>
                    <td>{item['1. symbol']}</td>
                    <td>{item['4. region']}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      }
    </>
  )
}

export default Search;
