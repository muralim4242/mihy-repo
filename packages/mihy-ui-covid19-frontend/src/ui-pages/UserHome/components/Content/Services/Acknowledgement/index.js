import React from "react";
import { Card, Typography, CardContent,Divider} from "@material-ui/core";
import { mapDispatchToProps } from "../../../../../../ui-utils/commons";
import { connect } from "react-redux";
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

class Acknowledgement extends React.Component {

    render() {
        return (
            <div >
                <Card style={{ margin: "0px 20px 20px 92px" }}>
                    <CardContent>
                        <Typography variant="h5" gutterBottom align="center">Acknowledgement</Typography>
                        <Divider />
                        <br></br>
                        <br></br>
                        <Typography variant="h6" gutterBottom align="center">
                        <Typography variant="h6" gutterBottom align="center">Service Create Successfully</Typography>
                        <CheckCircleRoundedIcon style={{color:'#FF1493'}}/>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        );
    }
}
const mapStateToProps = ({ screenConfiguration }) => {
    return {};
};
export default connect( mapStateToProps, mapDispatchToProps)(Acknowledgement);
