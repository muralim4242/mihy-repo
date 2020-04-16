import React from "react";
// import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../../../../ui-utils/commons";
import { withTranslation } from "react-i18next";
import AgeChart from './AgeChart'


class Statistics extends React.Component {


    render() {

        return (
            <div>
                Statistics
                <AgeChart />
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
