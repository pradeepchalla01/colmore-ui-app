import React, { useEffect } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { isApiKeyAvailable } from "../../util";
import { companyDetails } from '../../redux/actions/CompanyDetailsAction';
import { getCompanyData } from '../../redux/reducer/CompanyDetailsReducer';

const Details = (props) => {
  const companyDetailsData = useSelector(getCompanyData);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    isApiKeyAvailable(history);
  });

  useEffect(() => {
    dispatch(companyDetails(props.match.params.id));
  }, [dispatch, props]);

  console.log('::::::::::::::', companyDetailsData);
  return (
    <>
      {companyDetailsData.loading &&
        <Row className="mb-4 mt-4">
          <Col md={6}>
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          </Col>
        </Row>
      }
    </>
  )
}

export default Details;
