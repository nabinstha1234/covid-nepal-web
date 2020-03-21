import React, { FC } from 'react';
import { Col } from 'react-bootstrap';
import TextCaption from 'src/components/TextCaption/TextCaption';
import { ICovidCasesCounts } from 'src/services/covidCases';
import { setCommas } from 'src/utils/stringManipulation';

interface IGlobalCovidCasesProps {
  covidCasesCounts: ICovidCasesCounts | null;
}

const GlobalCovidCases: FC<IGlobalCovidCasesProps> = ({ covidCasesCounts }) => {
  return (
    <>
      <Col xs="6">
        <div className="font-weight-bold h5 mb-3">Global Update</div>

        <div className="mt-3" style={{ paddingTop: '69px' }}>
          Total Confirmed
        </div>
        <div className="h3 m-0 font-weight-bold  d-inline-block">
          {' '}
          {covidCasesCounts ? setCommas(covidCasesCounts.confirmedGlobal) : '-'}
        </div>
        {/* <TextCaption type={'success'} value={'0.10'} /> */}

        <div className="mt-3">Total Recovered</div>
        <div className="h3 m-0 font-weight-bold d-inline-block ">
          {' '}
          {covidCasesCounts ? setCommas(covidCasesCounts.recoveredGlobal) : '-'}
        </div>
        {/* <TextCaption type={'warning'} value={'0.10'} /> */}

        <div className="mt-3">Total Deaths</div>
        <div className="h3 m-0 font-weight-bold d-inline-block">
          {' '}
          {covidCasesCounts ? setCommas(covidCasesCounts.deathGlobal) : '-'}
        </div>
        {/* <TextCaption type={'danger'} value={'0.10'} /> */}
      </Col>
    </>
  );
};

export default GlobalCovidCases;