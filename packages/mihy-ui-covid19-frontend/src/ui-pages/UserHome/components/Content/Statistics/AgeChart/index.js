import React from "react";
import { Grid, Typography } from "@material-ui/core/";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../../../../../ui-utils/commons";
import { httpRequest } from "../../../../../../ui-utils/api";
import { withTranslation } from "react-i18next";
import { Bar, defaults } from 'react-chartjs-2';


class AgeChart extends React.Component {
    calcAges = async (tempArray) => {
        const ages = Array(10).fill(0);
        let unknown = 0;
        tempArray.forEach(el => {
            const age = parseInt(el);
            for (let i = 0; i < 10; i++) {
                if (age > i * 10 && age <= (i + 1) * 10) {
                    ages[i]++;
                }
                else {
                    unknown++;
                }
            }
        })
        this.props.setAppData('ageChartAges', ages)
        this.props.setAppData('ageChartUnknown', unknown)
    }
    componentDidMount = async () => {
        const { setAppData } = this.props
        let agesArray = []
        const response = await httpRequest({
            endPoint: "https://api.covid19india.org/raw_data.json",
            method: "get"
        });
        response.raw_data.map(el => agesArray.push(el.agebracket))
        await this.calcAges(agesArray)
    }

    render() {
        const chartData = {
            labels: [
                '0-10',
                '11-20',
                '21-30',
                '31-40',
                '41-50',
                '51-60',
                '61-70',
                '71-80',
                '81-90',
                '91-100',
            ],
            datasets: [
                {
                    data: this.props.ageChartAges || [],
                    label: 'Cases',
                    backgroundColor: '#ff073a',
                },
            ],
        };

        const chartOptions = {
            events: ['mousemove', 'mouseout', 'touchstart', 'touchmove', 'touchend'],
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false,
            },
            layout: {
                padding: {
                    left: 20,
                    right: 20,
                    top: 20,
                    bottom: 0,
                },
            },
            scales: {
                xAxes: [
                    {
                        stacked: true,
                        gridLines: {
                            color: 'rgba(0, 0, 0, 0)',
                        },
                    },
                ],
                yAxes: [
                    {
                        stacked: true,
                    },
                ],
            },
        };

        return (
            <div>
                <Grid container>
                    <Grid item md={12} xs={12}>
                        <Typography>PATIENT AGE</Typography>
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Bar data={chartData} options={chartOptions} />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <div className="chart-note">*Awaiting details for {this.props.ageChartUnknown || 0} patients</div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = ({ screenConfiguration }) => {
    const { preparedFinalObject = {} } = screenConfiguration;
    const {
        ageChart = {},
        ageChartAges,
        ageChartUnknown
    } = preparedFinalObject;

    return {
        ageChart,
        ageChartAges,
        ageChartUnknown
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTranslation()(AgeChart));
