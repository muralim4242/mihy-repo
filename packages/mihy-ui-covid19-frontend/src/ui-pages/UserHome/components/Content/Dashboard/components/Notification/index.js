import React from "react";
import { mapDispatchToProps } from "../../../../../../../ui-utils/commons";
import { connect } from "react-redux";
import { httpRequest } from "../../../../../../../ui-utils/api";
import { Typography, Card, CardContent, Dialog, Slide, AppBar, Toolbar, IconButton, makeStyles } from "@material-ui/core";
import { formatDistance, format } from 'date-fns';
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/styles";

const styles = ({
    root: {
        padding: "60px 8px 8px 8px"
    }
});

class Notification extends React.Component {
    handleClose = () => {
        const { history, setAppData } = this.props;
        setAppData("dashboard.dialogOpen", false);
        history.push("/user-home");
    };

    render() {
        const Transition = React.forwardRef(function Transition(props, ref) {
            return <Slide direction="up" ref={ref} {...props} />;
        });
        const { recentCases, dashboard, classes } = this.props;
        const { dialogOpen = false } = dashboard;
        const { handleClose } = this;
        let currentDate = new Date();
        return (
            recentCases.length > 0 && <div>
                <Dialog
                    fullScreen
                    open={dialogOpen}
                    TransitionComponent={Transition}
                >
                    <AppBar >
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="h6" >
                                Recent Covid19 Cases
                                </Typography>
                        </Toolbar>
                    </AppBar>
                    <div>
                        <div className={classes.root}>
                            <h2 >{format(currentDate, 'd MMM')}</h2>
                        </div>
                        {
                            recentCases.reverse().map((data, key) => {
                                const activityDate = new Date(data.timestamp * 1000);
                                const addHeader = () => {
                                    currentDate = activityDate;
                                    return (
                                        <React.Fragment>
                                            {
                                                key === 0 ? (
                                                    <div >
                                                        <h4>No updates yet!</h4>
                                                    </div>
                                                ) : (
                                                        ''
                                                    )
                                            }
                                            <div >
                                                <h2>{format(activityDate, 'd MMM')}</h2>
                                            </div>
                                        </React.Fragment>
                                    );
                                };
                                return (
                                    <div key={key}>
                                        {
                                            activityDate.getDate() !== currentDate.getDate()
                                                ? addHeader()
                                                : ' '
                                        }
                                        <Card>
                                            <CardContent>
                                                <Typography>
                                                    {formatDistance(
                                                        new Date(data.timestamp * 1000),
                                                        new Date()
                                                    ) + ' ago'}
                                                </Typography>
                                                <Typography>{data.update}</Typography>
                                            </CardContent>
                                        </Card>
                                        <br />
                                    </div>
                                )
                            })
                        }
                    </div>
                </Dialog>
            </div>
        )
    }
}
const mapStateToProps = ({ screenConfiguration }) => {
    const { preparedFinalObject = {} } = screenConfiguration;
    const { recentCases = [], dashboard = {} } = preparedFinalObject;
    return {
        recentCases, dashboard
    }
}
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Notification));
