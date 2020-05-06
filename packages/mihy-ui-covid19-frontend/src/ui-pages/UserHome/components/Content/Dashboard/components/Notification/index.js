import React from "react";
import { mapDispatchToProps } from "../../../../../../../ui-utils/commons";
import { connect } from "react-redux";
import { httpRequest } from "../../../../../../../ui-utils/api";
import { Typography, Card, CardContent } from "@material-ui/core";
import { formatDistance, format } from 'date-fns';

class Notification extends React.Component {
    componentDidMount = async () => {
        const { setAppData } = this.props
        this.feathRecentData();
        setAppData("checked", true)
    };
    feathRecentData = async () => {
        const { setAppData } = this.props;
        const fetchRecentCases = await httpRequest({
            endPoint: "updatelog/log.json"
        })
        setAppData("recentCases", fetchRecentCases);
    }
    render() {
        const { recentCases } = this.props;
        let currentDate = new Date();
        return (
            <div>
                <div className="updates-header">
                    <h2>{format(currentDate, 'd MMM')}</h2>
                </div>
                {
                    recentCases.length > 0 && recentCases.reverse().map((data, key) => {
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
        )
    }
}
const mapStateToProps = ({ screenConfiguration }) => {
    const { preparedFinalObject = {} } = screenConfiguration;
    const { recentCases = [] } = preparedFinalObject;
    return {
        recentCases
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Notification);
