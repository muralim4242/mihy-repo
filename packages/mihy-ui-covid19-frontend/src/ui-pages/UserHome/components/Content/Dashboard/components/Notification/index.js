import React from "react";
import { mapDispatchToProps } from "../../../../../../../ui-utils/commons";
import { connect } from "react-redux";
import { Typography, Card, CardContent, Dialog, Slide, AppBar, Toolbar, IconButton } from "@material-ui/core";
import { formatDistance, format } from 'date-fns';
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/styles";

const styles = ({
    root: {
        padding: "70px 0px 0px 8px"
    },
    card: {
        borderRadius: "10px"
    },
    dateStyle: {
        padding: "0px 0px 0px 8px"
    },
    fontStyle: {
        fontWeight: 900,
        fontSize: "large",
        color: "salmon"
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
        const { recentCases = [], dashboard, classes } = this.props;
        const { dialogOpen = false } = dashboard;
        const { handleClose } = this;
        let currentDate = new Date();
        console.log("recentCases:", recentCases);

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
                            <Typography className={classes.fontStyle}>{format(currentDate, 'd MMM')}</Typography>
                        </div>
                        {
                            recentCases.reverse().map((data, key) => {
                                console.log("data:", data, "key:", key);
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
                                            <div className={classes.dateStyle} >
                                                <Typography className={classes.fontStyle}>{format(activityDate, 'd MMM')}</Typography>
                                            </div>
                                        </React.Fragment>
                                    );
                                };
                                return (
                                    <React.Fragment key={key}>
                                        {
                                            activityDate.getDate() !== currentDate.getDate()
                                                ? addHeader()
                                                : ' '
                                        }
                                        <Card className={classes.card}>
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
                                    </React.Fragment>
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
    let { recentCases = [], dashboard = {} } = preparedFinalObject;
    recentCases = recentCases && [...recentCases];
    return {
        recentCases, dashboard
    }
}
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Notification));
