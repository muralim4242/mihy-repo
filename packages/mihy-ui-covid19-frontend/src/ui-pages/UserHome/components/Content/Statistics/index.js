import React from "react";
import Typography from "@material-ui/core/Typography";
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
            <div style={{ padding: 8 }}>
                <Typography
                    variant="h3"
                    color="textPrimary"
                    style={{ padding: 8 }}>Statistics</Typography>
                <TotalCasesChart />
                <DailyCasesChart />
                <AgeChart />
                <PatientGenderChart />
            </div>
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
