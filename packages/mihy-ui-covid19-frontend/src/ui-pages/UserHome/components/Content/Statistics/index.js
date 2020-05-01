import React from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../../../../ui-utils/commons";
import { httpRequest } from "../../../../../ui-utils/api";
import { withTranslation } from "react-i18next";
import AgeChart from "./AgeChart";
import PatientGenderChart from "./PatientGenderChart";
import DailyCasesChart from "./DailyCasesChart";
import TotalCasesChart from "./TotalCasesChart";

class Statistics extends React.Component {

  componentDidMount = async () => {
    let { setAppData,statistics={} } = this.props
    const response = await httpRequest({
      endPoint: "https://api.covid19india.org/data.json",
      method: "get"
    });


    // setAppData('covidData', response.cases_time_series);

    let patientsGenderArray = [];
    let agesArray = [];
    const anotherResponse = await httpRequest({
      endPoint: "https://api.covid19india.org/raw_data3.json",
      method: "get"
    });
    anotherResponse.raw_data.forEach(el => patientsGenderArray.push(el.gender));
    anotherResponse.raw_data.forEach(el => agesArray.push(el.agebracket));
    // setAppData('patientsGenderArray', patientsGenderArray);
    // setAppData('agesArray', agesArray);
    statistics={
      ...statistics,
      covidData:response.cases_time_series,
      patientsGenderArray,
      agesArray
    }
    setAppData('statistics', statistics);
  }

  render() {
    const { covidData = [], patientsGenderArray = [], agesArray = [] } = this.props
    return (
      <div>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            {covidData.length>0 && <TotalCasesChart casesData={covidData} />}
          </Grid>
          <Grid item xs={12} md={6}>
            {covidData.length>0 && <DailyCasesChart casesData={covidData} />}
          </Grid>
          <Grid item xs={12} md={6}>
            {agesArray.length>0  && <AgeChart agesArray={agesArray} />}
          </Grid>
          <Grid item xs={12} md={6}>
            {patientsGenderArray.length>0 && <PatientGenderChart genderArray={patientsGenderArray} />}
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ screenConfiguration }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  let { statistics = {} } = preparedFinalObject;
  const { covidData = [], patientsGenderArray = [], agesArray = []}=statistics
  return {
    covidData,
    patientsGenderArray,
    agesArray
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Statistics));
