import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Spinner, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { isApiKeyAvailable } from "../../util";
import { FiltersObject } from "../../constants";
import { searchCompany } from '../../redux/actions/SearchAction';
import { getSearchData } from '../../redux/reducer/SearchReducer';

const Search = () => {
  const searchData = useSelector(getSearchData);
  const dispatch = useDispatch();
  const history = useHistory();
  const [keyword, setKeyword] = useState('');
  const [filterObj, setFilterObj] = useState({});
  const [filteredResults, setFilteredResults] = useState(searchData.searchResults || []);

  useEffect(() => {
    isApiKeyAvailable(history);
  });

  useEffect(() => {
    if (keyword) {
      dispatch(searchCompany(keyword));
    }
  }, [dispatch, keyword]);

  useEffect(() => {
    setFilteredResults(searchData.searchResults)
  }, [searchData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setKeyword('');
  }

  const selectCompany = (selectedCompany) => {
    history.push(`/details/${selectedCompany['1. symbol']}`);
  }

  const toggleChange = (key, value) => {
    const filter = { ...filterObj };
    if (!filter[key]) {
      filter[key] = [value];
    } else {
      const index = filter[key]?.indexOf(value);
      if (index > -1) {
        filter[key].splice(index, 1);
        if(!filter[key]?.length) {
          delete filter[key];
        }
      } else {
        filter[key].push(value);
      }
    }
    setFilterObj(filter);
  }

  useEffect(() => {
    const filteredData = searchData.searchResults && [...searchData.searchResults];
    const updatedData = filteredData?.length && filteredData.filter((obj) => {
      if (Object.keys(filterObj)?.length) {
        return Object.keys(filterObj).some((key) => {
          if (filterObj[key].length) {
            return filterObj[key].includes(obj[key]);
          } else {
            return true;
          }
        });
      } else {
        return true;
      }
    });
    setFilteredResults(updatedData);
  }, [filterObj, searchData.searchResults]);

  return (
    <>
      <Row className="mb-4">
        <Col md={10}>
          <Form onSubmit={handleSubmit}>
            <h2>Search Page</h2>
            <Form.Control type="text" placeholder="Search company" required value={keyword} onInput={e => setKeyword(e.target.value)} />
            <Button className="mt-2" variant="primary" type="submit">Cancel</Button>
          </Form>
        </Col>
      </Row>
      {searchData.loading &&
        <Row>
          <Col md={10}>
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      }
      {filteredResults &&
        <Row>
          <Col md={3}>
            <h3 className="text-left mb-4">Filters</h3>
            {searchData.filtersObj &&
              Object.keys(searchData.filtersObj).map((key, index) => (
                searchData.filtersObj[key]?.length &&
                (<Col md={12} className="text-left mb-4" key={index}>
                  <h4>{FiltersObject[key].val}</h4>
                  <Col md={12} style={{ display: 'grid', gridAutoColumns: 'max-content' }}>
                    {
                      searchData.filtersObj[key].map((value, i) => (
                        <div key={i}>
                          <input type="checkbox" style={{ marginRight: '5px' }} onChange={() => toggleChange(FiltersObject[key].prop, value)} />
                          {value}
                        </div>
                      ))
                    }
                  </Col>
                </Col>)
              ))
            }
          </Col>
          <Col md={7}>
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
                {filteredResults.map((item, index) => (
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
