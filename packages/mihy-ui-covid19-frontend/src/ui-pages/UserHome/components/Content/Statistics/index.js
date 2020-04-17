import React from "react";
import { Grid, Hidden } from "@material-ui/core";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../../../../ui-utils/commons";
import { withTranslation } from "react-i18next";
import AgeChart from './AgeChart'
import PatientGenderChart from './PatientGenderChart'
import DailyCasesChart from './DailyCasesChart'
import TotalCasesChart from './TotalCasesChart'

class Statistics extends React.Component {

    render() {

        return (
            <>
                <Hidden mdUp >
                    <Grid style={{ padding: 8 }}>
                        <TotalCasesChart />
                        <DailyCasesChart />
                        <AgeChart />
                        <PatientGenderChart />
                    </Grid>
                </Hidden>
                <Hidden mdDown >
                    <Grid style={{ padding: 8, marginLeft: 100 }}>
                        <TotalCasesChart />
                        <DailyCasesChart />
                        <AgeChart />
                        <PatientGenderChart />
                    </Grid>
                </Hidden>
            </>
        );
    }
}

const mapStateToProps = ({ screenConfiguration }) => {
    const { preparedFinalObject = {} } = screenConfiguration;
    const {
        statistics = {}
    } = preparedFinalObject;

    return {
        statistics
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTranslation()(Statistics));
