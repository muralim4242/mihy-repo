import React from "react";
import { mapDispatchToProps } from "../../../../../../../ui-utils/commons";
import { initGA, pageView } from "../../../../../../../ui-utils/tracking";
import { connect } from "react-redux";
import { Typography, Card, CardContent, Dialog, Slide, AppBar, Toolbar, IconButton } from "@material-ui/core";
import { formatDistance, format } from 'date-fns';
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/styles";
import { withTranslation } from "react-i18next";

const styles = ({
    root: {
        padding: "62px 0px 0px 8px"
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
        // color: "salmon"
    }
});

class Notification extends React.Component {
    componentDidMount = () => {
        const { match = {} } = this.props;
        initGA();
        pageView(match.url)
    }

    handleClose = () => {
        const { history, setAppData, match = {} } = this.props;
        setAppData("dashboard.dialogOpen", false);
        history.push("/user-home");
        initGA();
        pageView(match.url)
    };

    render() {
        const Transition = React.forwardRef(function Transition(props, ref) {
            return <Slide direction="up" ref={ref} {...props} />;
        });
        const { recentCases = [], dashboard, classes, t } = this.props;

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
                                {t("Latest News")}
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <div style={{ padding: '8px' }}>
                        <div className={classes.root}>
                            <Typography variant="h6" color="primary" display="block">{format(currentDate, 'd MMM')}</Typography>
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
                                            <div className={classes.dateStyle} >
                                                <Typography variant="h6" color="primary" display="block">{format(activityDate, 'd MMM')}</Typography>
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
                                                <Typography variant="caption" display="block">
                                                    {formatDistance(
                                                        new Date(data.timestamp * 1000),
                                                        new Date()
                                                    ) + ' ago'}
                                                </Typography>
                                                <Typography variant="subtitle1">{data.update}</Typography>
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
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Notification)));
