import React from "react";
import { CardContent,Typography, Card } from "@material-ui/core/";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../../../../../ui-utils/commons";
import { httpRequest } from "../../../../../../ui-utils/api";
import { withTranslation } from "react-i18next";
import { Bar, defaults } from "react-chartjs-2";

class AgeChart extends React.Component {
  calcAges = async tempArray => {
    defaults.global.tooltips.intersect = false;
    defaults.global.tooltips.mode = "nearest";
    defaults.global.tooltips.position = "average";
    defaults.global.tooltips.backgroundColor = "rgba(255, 255, 255, 0.8)";
    defaults.global.tooltips.displayColors = false;
    defaults.global.tooltips.borderColor = "#c62828";
    defaults.global.tooltips.borderWidth = 1;
    defaults.global.tooltips.titleFontColor = "#000";
    defaults.global.tooltips.bodyFontColor = "#000";
    defaults.global.tooltips.caretPadding = 4;
    defaults.global.tooltips.intersect = false;
    defaults.global.tooltips.mode = "nearest";
    defaults.global.tooltips.position = "nearest";

    defaults.global.legend.display = true;
    defaults.global.legend.position = "bottom";

    defaults.global.hover.intersect = false;

    const ages = Array(10).fill(0);
    let unknown = 0;
    tempArray.forEach(el => {
      const age = parseInt(el);
      for (let i = 0; i < 10; i++) {
        if (age > i * 10 && age <= (i + 1) * 10) {
          ages[i]++;
        } else {
          unknown++;
        }
      }
    });
    this.props.setAppData("ageChartAges", ages);
    this.props.setAppData("ageChartUnknown", unknown);
  };
  componentDidMount = async () => {
    let agesArray = [];
    const response = await httpRequest({
      endPoint: "https://api.covid19india.org/raw_data.json",
      method: "get"
    });
    response.raw_data.map(el => agesArray.push(el.agebracket));
    await this.calcAges(agesArray);
  };

  render() {
    const {t}=this.props;
    const chartData = {
      labels: [
        "0-10",
        "11-20",
        "21-30",
        "31-40",
        "41-50",
        "51-60",
        "61-70",
        "71-80",
        "81-90",
        "91-100"
      ],
      datasets: [
        {
          data: this.props.ageChartAges || [],
          label: t("Cases"),
          backgroundColor: "#ff073a"
        }
      ]
    };

    const chartOptions = {
      events: ["mousemove", "mouseout", "touchstart", "touchmove", "touchend"],
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      layout: {
        // padding: {
        //     left: 20,
        //     right: 20,
        //     top: 20,
        //     bottom: 0,
        // },
      },
      scales: {
        xAxes: [
          {
            stacked: true,
            gridLines: {
              color: "rgba(0, 0, 0, 0)"
            }
          }
        ],
        yAxes: [
          {
            stacked: true
          }
        ]
      }
    };

    return (
      <div>
        <Typography variant="h6" color="primary">
          {t("PATIENT AGE")}
        </Typography>
        <Card >
          <CardContent className="ChartContainer">
          <Bar data={chartData} options={chartOptions} />
          {/*Awaiting details for {this.props.ageChartUnknown || 0} patients*/}
          </CardContent>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = ({ screenConfiguration }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  const { ageChart = {}, ageChartAges, ageChartUnknown } = preparedFinalObject;

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
