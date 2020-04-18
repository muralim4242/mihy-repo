import React from "react";
import { Card, Typography, CardContent, Divider, Button, Hidden } from "@material-ui/core";
import { mapDispatchToProps } from "../../../../../ui-utils/commons";
import { connect } from "react-redux";

class Services extends React.Component {
     handleChange(property) {
        const { history } = this.props;
        history.push(property)
      }
    render() {
        return (
            <div >
                <Hidden mdDown>
                    <Card style={{ margin: "0px 20px 20px 92px" }}>
                        <CardContent>
                            <Typography variant="h4" gutterBottom align="center">
                            Services
                            </Typography>
                            <Divider />
                            <br></br>
                            <Typography variant="h6" gutterBottom align="center">
                            <Button variant="contained" color="primary" fullWidth={true} onClick={e => { this.handleChange("/user-home/doner-stepper") }}>Doner </Button>
                            </Typography>
                            <Typography variant="h6" gutterBottom align="center">
                            <Button variant="contained" color="primary" fullWidth={true}  onClick={e => { this.handleChange("/user-home/taker-stepper") }}>Taker </Button>
                            </Typography>
                        </CardContent>
                    </Card>
                </Hidden>

                <Hidden mdUp>
                    <Card style={{ margin: "0px 20px 20px 20px" }}>
                        <CardContent>
                            <Typography variant="h4" gutterBottom align="center">
                            Services
                            </Typography>
                            <Divider />
                            <br></br>
                            <Typography variant="h6" gutterBottom align="center">
                            <Button variant="contained" color="primary" fullWidth={true} onClick={e => { this.handleChange(e) }}>Doner </Button>
                            </Typography>
                            <Typography variant="h6" gutterBottom align="center">
                            <Button variant="contained" color="primary" fullWidth={true} >Taker </Button>
                            </Typography>
                        </CardContent>
                    </Card>
                </Hidden>
            </div>
        );
    }
}

const mapStateToProps = ({ screenConfiguration }) => {
    return {};
};

export default connect( mapStateToProps,mapDispatchToProps)(Services);
