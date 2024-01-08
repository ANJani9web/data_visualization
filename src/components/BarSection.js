import React, { Component } from "react";
import Chart from "react-apexcharts";

class BarGraphSection extends Component {
  constructor(props) {
    super(props);

    // Set default values for MarketCap and TotVol
    const marketCapValue = props.MarketCap || 0;
    const totVolValue = props.TotVol || 0;

    this.state = {
      marketCap: {
        options: {
          chart: {
            id: "bar-chart",
            type: "bar",
            toolbar: {
              show: false,
            },
          },
          xaxis: {
            categories: ["Market Cap"],
          },
          yaxis: {
            labels: {
              style: {
                colors: "#ffffff", // Set y-axis label color to white
              },
            },
            axisBorder: {
              show: true,
              color: "#ffffff", // Set y-axis border color to white
            },
            tickAmount: 5,
            tickPlacement: "on",
          },
          colors: ["#ff69f5"],
          dataLabels: {
            enabled: true,
            offsetY: -20,
            style: {
              fontSize: "12px",
              colors: ["#ffffff"],
            },
          },
          grid: {
            show: false,
          },
        },
        series: [
          {
            name: "Market Cap",
            data: [marketCapValue],
          },
        ],
      },
      totalVolume: {
        options: {
          chart: {
            id: "bar-chart",
            type: "bar",
            toolbar: {
              show: false,
            },
          },
          xaxis: {
            categories: ["Total Volume"],
          },
          yaxis: {
            labels: {
              style: {
                colors: "#ffffff", // Set y-axis label color to white
              },
            },
            axisBorder: {
              show: true,
              color: "#ffffff", // Set y-axis border color to white
            },
            tickAmount: 5,
            tickPlacement: "on",
          },
          colors: ["#00ffea"],
          dataLabels: {
            enabled: true,
            offsetY: -20,
            style: {
              fontSize: "12px",
              colors: ["#ffffff"],
            },
          },
          grid: {
            show: false,
          },
        },
        series: [
          {
            name: "Total Volume",
            data: [totVolValue],
          },
        ],
      },
    };
  }

  render() {
    return (
      <div style={{ textAlign: "center", paddingTop: "20px" }}>
        <h2>Bar Graph Section</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "20px",
          }}
        >
          <div style={{ marginRight: "20px" }}>
            <Chart
              options={this.state.marketCap.options}
              series={this.state.marketCap.series}
              type="bar"
              height="200"
              width="300"
            />
          </div>
          <div>
            <Chart
              options={this.state.totalVolume.options}
              series={this.state.totalVolume.series}
              type="bar"
              height="200"
              width="300"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BarGraphSection;
