import React from "react";
import { Grid, Typography, Card } from "@material-ui/core/";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../../../../../ui-utils/commons";
import { httpRequest } from "../../../../../../ui-utils/api";
import { withTranslation } from "react-i18next";
import { Doughnut, defaults } from 'react-chartjs-2';


class PatientGenderChart extends React.Component {
    calcGender = (genderArray) => {
        defaults.global.tooltips.intersect = false;
        defaults.global.tooltips.mode = 'nearest';
        defaults.global.tooltips.position = 'average';
        defaults.global.tooltips.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        defaults.global.tooltips.displayColors = false;
        defaults.global.tooltips.borderColor = '#c62828';
        defaults.global.tooltips.borderWidth = 1;
        defaults.global.tooltips.titleFontColor = '#000';
        defaults.global.tooltips.bodyFontColor = '#000';
        defaults.global.tooltips.caretPadding = 4;
        defaults.global.tooltips.intersect = false;
        defaults.global.tooltips.mode = 'nearest';
        defaults.global.tooltips.position = 'nearest';

        defaults.global.legend.display = true;
        defaults.global.legend.position = 'bottom';

        defaults.global.hover.intersect = false;

        let male = 0;
        let female = 0;
        let unknown = 0;

        genderArray.forEach(el => {
            if (el === 'M') {
                male++;
            } else if (el === 'F') {
                female++;
            } else {
                unknown++;
            }
        })
        this.props.setAppData('patientGenderMale', male)
        this.props.setAppData('patientGenderFemale', female)
        this.props.setAppData('patientGenderUnkown', unknown)
    }
    componentDidMount = async () => {
        let patientsGenderArray = []
        const response = await httpRequest({
            endPoint: "https://api.covid19india.org/raw_data.json",
            method: "get"
        });
        response.raw_data.map(el => patientsGenderArray.push(el.gender))
        await this.calcGender(patientsGenderArray)
    }

    render() {
        const { patientGenderMale, patientGenderFemale, patientGenderUnkown } = this.props
        const chartData = {
            datasets: [
                {
                    data: [patientGenderMale || 0, patientGenderFemale || 0, patientGenderUnkown || 0],
                    backgroundColor: ['blue', 'pink', 'grey'],
                    label: 'Hola',
                },
            ],
            labels: ['Male', 'Female', 'Awaiting Details'],
        };

        const chartOptions = {
            layout: {
                padding: {
                    left: 20,
                    right: 20,
                    top: 0,
                    bottom: 20,
                },
            },
            events: ['mousemove', 'mouseout', 'touchstart', 'touchmove', 'touchend'],
            responsive: true,
            maintainAspectRatio: false,
            tooltips: {
                mode: 'point',
                position: 'nearest',
                callbacks: {
                    label: function (tooltipItem, data) {
                        const dataset = data.datasets[tooltipItem.datasetIndex];
                        const meta = dataset._meta[Object.keys(dataset._meta)[0]];
                        const total = meta.total;
                        const currentValue = dataset.data[tooltipItem.index];
                        const percentage = parseFloat(
                            ((currentValue / total) * 100).toFixed(1)
                        );
                        return currentValue + ' (' + percentage + '%)';
                    },
                    title: function (tooltipItem, data) {
                        return data.labels[tooltipItem[0].index];
                    },
                },
            },
        };

        return (
            <div>
                <Grid container>
                    <Card style={{ margin: 8 }}>
                        <Grid item md={12} xs={12}>
                            <Typography
                                variant="h5"
                                color="primary" style={{ padding: 8 }}>PATIENT GENDER</Typography>
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <Doughnut data={chartData} options={chartOptions} />
                        </Grid>
                    </Card>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = ({ screenConfiguration }) => {
    const { preparedFinalObject = {} } = screenConfiguration;
    const {
        patientGenderChart = {},
        patientGenderMale = 0,
        patientGenderFemale = 0,
        patientGenderUnkown = 0
    } = preparedFinalObject;

    return {
        patientGenderChart,
        patientGenderMale,
        patientGenderFemale,
        patientGenderUnkown
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withTranslation()(PatientGenderChart));
