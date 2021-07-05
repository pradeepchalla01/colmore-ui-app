import React, { useState, useEffect } from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { isApiKeyAvailable } from "../../util";
import { companyDetails } from '../../redux/actions/CompanyDetailsAction';
import { getCompanyData } from '../../redux/reducer/CompanyDetailsReducer';
import Plot from 'react-plotly.js';

const Details = (props) => {
  const companyDetailsData = useSelector(getCompanyData);
  const dispatch = useDispatch();
  const history = useHistory();
  const [dailyChartXValArray, setDailyChartXValArray] = useState();
  const [dailyChartYValArray, setDailyChartYValArray] = useState();
  const [weeklyChartXValArray, setWeeklyChartXValArray] = useState();
  const [weeklyChartYValArray, setWeeklyChartYValArray] = useState();

  useEffect(() => {
    isApiKeyAvailable(history);
  });

  useEffect(() => {
    dispatch(companyDetails(props.match.params.id));
  }, [dispatch, props]);

  useEffect(() => {
    const dailyHistoricalData = companyDetailsData?.companyDetails?.dailyHistoricalData;
    const weeklyHistoricalData = companyDetailsData?.companyDetails?.weeklyHistoricalData;
    const dailyChartXValues = [];
    const dailyChartYValues = [];
    const weeklyChartXValues = [];
    const weeklyChartYValues = [];
    if (dailyHistoricalData?.['Time Series (Daily)']) {
      for (let key in dailyHistoricalData['Time Series (Daily)']) {
        dailyChartXValues.push(key);
        dailyChartYValues.push(dailyHistoricalData['Time Series (Daily)'][key]['1. open']);
      }
    }
    if (weeklyHistoricalData?.['Weekly Time Series']) {
      for (let key in weeklyHistoricalData['Weekly Time Series']) {
        weeklyChartXValues.push(key);
        weeklyChartYValues.push(weeklyHistoricalData['Weekly Time Series'][key]['1. open']);
      }
    }
    setDailyChartXValArray(dailyChartXValues);
    setDailyChartYValArray(dailyChartYValues);
    setWeeklyChartXValArray(weeklyChartXValues);
    setWeeklyChartYValArray(weeklyChartYValues);
  }, [companyDetailsData]);

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
      <Plot
        data={[
          {
            x: dailyChartXValArray,
            y: dailyChartYValArray,
            name: 'daily',
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: '#7F7F7F' },
          },
          {
            x: weeklyChartXValArray,
            y: weeklyChartYValArray,
            name: 'weekly',
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: '#f00a31' },
          }
        ]}
        layout={{
          width: 1024,
          height: 768,
          title: companyDetailsData?.companyDetails?.indicatorsData?.['Meta Data']?.['1: Symbol']
        }}
      />
    </>
  )
}

export default Details;
