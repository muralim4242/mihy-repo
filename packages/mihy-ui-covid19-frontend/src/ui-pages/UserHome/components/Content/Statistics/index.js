import React from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../../../../ui-utils/commons";
import { withTranslation } from "react-i18next";
import AgeChart from "./AgeChart";
import PatientGenderChart from "./PatientGenderChart";
import DailyCasesChart from "./DailyCasesChart";
import TotalCasesChart from "./TotalCasesChart";

class Statistics extends React.Component {
  render() {
    return (
      <div>
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <TotalCasesChart />
          </Grid>
          <Grid item xs={12} md={6}>
            <DailyCasesChart />
          </Grid>
          <Grid item xs={12} md={6}>
            <AgeChart />
          </Grid>
          <Grid item xs={12} md={6}>
            <PatientGenderChart />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = ({ screenConfiguration }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  const { statistics = {} } = preparedFinalObject;
  return {
    statistics
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Statistics));
