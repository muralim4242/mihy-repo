import React from "react";
import { CardContent, Typography, Card } from "@material-ui/core/";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../../../../../ui-utils/commons";
import { withTranslation } from "react-i18next";
import { Line, defaults } from "react-chartjs-2";

class TotalCasesChart extends React.Component {
  calcTotalCases = () => {
    defaults.global.elements.line.fill = false;
    defaults.global.tooltips.intersect = false;
    defaults.global.tooltips.mode = "nearest";
    defaults.global.tooltips.position = "average";
    defaults.global.tooltips.backgroundColor = "rgba(255, 255, 255, 0.6)";
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

    const dates = [];
    const confirmed = [];
    const recovered = [];
    const deaths = [];

    this.props.casesData.forEach((el, index) => {      
      if (index >= 31) {
        dates.push(el.date);
        confirmed.push(el.totalconfirmed);
        recovered.push(el.totalrecovered);
        deaths.push(el.totaldeceased);
      }
    });
    this.props.setAppData("totalCasesChart.totalCasesDates", dates);
    this.props.setAppData("totalCasesChart.totalCasesConfirmed", confirmed);
    this.props.setAppData("totalCasesChart.totalCasesRecovered", recovered);
    this.props.setAppData("totalCasesChart.totalCasesDeceased", deaths);
  };

  componentDidMount = async () => {
    this.calcTotalCases()
  };

  render() {
    const { totalCasesChart, t } = this.props;
    const {
      totalCasesDates,
      totalCasesConfirmed,
      totalCasesRecovered,
      totalCasesDeceased
    } = totalCasesChart;

    const dataset = {
      labels: totalCasesDates || [],
      datasets: [
        {
          borderWidth: 2,
          data: totalCasesConfirmed || [],
          borderCapStyle: "round",
          pointBackgroundColor: "#ff073a",
          label: t("confirmed"),
          borderColor: "#ff073a",
          pointHoverRadius: 2
        },
        {
          borderWidth: 2,
          data: totalCasesRecovered || [],
          borderCapStyle: "round",
          pointBackgroundColor: "#28a745",
          label: t("recovered"),
          borderColor: "#28a745",
          pointHoverRadius: 2
        },
        {
          borderWidth: 2,
          data: totalCasesDeceased || [],
          borderCapStyle: "round",
          pointBackgroundColor: "#6c757d",
          label: t("deaths"),
          borderColor: "#6c757d",
          pointHoverRadius: 2
        }
      ]
    };

    const options = {
      responsive: true,
      events: [
        "click",
        "mousemove",
        "mouseout",
        "touchstart",
        "touchmove",
        "touchend"
      ],
      maintainAspectRatio: false,
      tooltips: {
        mode: "index"
      },
      elements: {
        point: {
          radius: 0
        },
        line: {
          tension: 0.1
        }
      },
      layout: {
        // padding: {
        //   left: 20,
        //   right: 20,
        //   top: 0,
        //   bottom: 20
        // }
      },
      scales: {
        yAxes: [
          {
            type: "linear",
            ticks: {
              beginAtZero: true,
              max: undefined,
              precision: 0
            },
            scaleLabel: {
              display: false,
              labelString: t("Total Cases")
            }
          }
        ],
        xAxes: [
          {
            type: "time",
            time: {
              unit: "day",
              tooltipFormat: "MMM DD",
              stepSize: 7,
              displayFormats: {
                millisecond: "MMM DD",
                second: "MMM DD",
                minute: "MMM DD",
                hour: "MMM DD",
                day: "MMM DD",
                week: "MMM DD",
                month: "MMM DD",
                quarter: "MMM DD",
                year: "MMM DD"
              }
            },
            gridLines: {
              color: "rgba(0, 0, 0, 0)"
            }
          }
        ]
      }
    };

    return (
      <div>
        <Typography variant="h6" color="primary">
          {t("INDIA - TOTAL CASES")}
        </Typography>
        <Card >
          <CardContent className="ChartContainer">
            <Line data={dataset} options={options} />
          </CardContent>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = ({ screenConfiguration }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  const { totalCasesChart = {} } = preparedFinalObject;

  return {
    totalCasesChart
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(TotalCasesChart));
