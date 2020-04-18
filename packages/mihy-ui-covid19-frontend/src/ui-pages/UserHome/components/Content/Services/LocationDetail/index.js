import React from "react";
import { Card, Typography, CardContent } from "@material-ui/core";
import { mapDispatchToProps } from "../../../../../../ui-utils/commons";
import { connect } from "react-redux";

class LocationDetail extends React.Component {

    render() {
        return (
            <div >
                <Card style={{padding:"10px 10px 10px 10px"}}>
                    <CardContent>
                        <Typography variant="h5" gutterBottom align="center">CURRENT LOCATION</Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}
const mapStateToProps = ({ screenConfiguration }) => {
    return {};
};
export default connect( mapStateToProps, mapDispatchToProps)(LocationDetail);
