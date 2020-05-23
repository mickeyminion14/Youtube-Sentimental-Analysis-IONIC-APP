import { Component } from "@angular/core";
import { Chart } from "chart.js";
import { HomeService } from "./home.service";
import { TitleCasePipe } from "@angular/common";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(
    private homeService: HomeService,
    private titleCasePipe: TitleCasePipe
  ) {}
  bars: any;
  decisionChart: any;
  kernal_svcChart: any;
  knnChart: any;
  linear_regressionChart: any;
  random_forestChart: any;

  ionViewDidEnter() {
    this.getGraphData();
  }

  getGraphData() {
    this.homeService.getData().subscribe((data: any) => {
      this.createDecisionChart(data.data.decision_tree);
      this.createKernelChart(data.data.kernal_svc);
      this.createKnnChart(data.data.knn);
      this.createLinearChart(data.data.linear_regression);
      this.createForestChart(data.data.random_forest);
    });
  }

  createDecisionChart(data) {
    let dataLabels = [];
    let dataPoints = [];

    let keysArr = Object.keys(data);

    keysArr.forEach((element: string) => {
      dataLabels.push(this.titleCasePipe.transform(element));
      dataPoints.push(data[element]);
    });
    console.log(dataLabels, dataPoints);
    this.decisionChart = new Chart("decision", {
      type: "doughnut",

      data: {
        labels: [...dataLabels],

        datasets: [
          {
            label: "Total Users",
            data: [...dataPoints],
            backgroundColor: [
              "#F38BDB",
              "#99FF33",
              "#FF9999",
              "#00CCCC",
              "#FF8000",
              "#0080FF",
            ],
            borderColor: [
              "rgb(0,0,0,0)",
              "rgb(0,0,0,0)",
              "rgb(0,0,0,0)",
              "rgb(0,0,0,0)",
              "rgb(0,0,0,0)",
              "rgb(0,0,0,0)",
            ],
          },
        ],
      },
      options: {},
    });
  }
  createKernelChart(data) {
    let dataLabels = [];
    let dataPoints = [];

    let keysArr = Object.keys(data);

    keysArr.forEach((element: string) => {
      dataLabels.push(this.titleCasePipe.transform(element));
      dataPoints.push(data[element]);
    });
    console.log(dataLabels, dataPoints);
    this.kernal_svcChart = new Chart("kernal_svc", {
      type: "doughnut",

      data: {
        labels: [...dataLabels],

        datasets: [
          {
            label: "Total Users",
            data: [...dataPoints],
            backgroundColor: [
              "#F38BDB",
              "#99FF33",
              "#FF9999",
              "#00CCCC",
              "#FF8000",
              "#0080FF",
            ],
            borderColor: [
              "rgb(0,0,0,0)",
              "rgb(0,0,0,0)",
              "rgb(0,0,0,0)",
              "rgb(0,0,0,0)",
              "rgb(0,0,0,0)",
              "rgb(0,0,0,0)",
            ],
          },
        ],
      },
      options: {},
    });
  }
  createKnnChart(data) {
    let dataLabels = [];
    let dataPoints = [];

    let keysArr = Object.keys(data);

    keysArr.forEach((element: string) => {
      dataLabels.push(this.titleCasePipe.transform(element));
      dataPoints.push(data[element]);
    });
    console.log(dataLabels, dataPoints);
    this.knnChart = new Chart("knn", {
      type: "doughnut",

      data: {
        labels: [...dataLabels],

        datasets: [
          {
            label: "Total Users",
            data: [...dataPoints],
            backgroundColor: [
              "#F38BDB",
              "#99FF33",
              "#FF9999",
              "#00CCCC",
              "#FF8000",
              "#0080FF",
            ],
            borderColor: [
              "rgb(0,0,0,0)",
              "rgb(0,0,0,0)",
              "rgb(0,0,0,0)",
              "rgb(0,0,0,0)",
              "rgb(0,0,0,0)",
              "rgb(0,0,0,0)",
            ],
          },
        ],
      },
      options: {},
    });
  }
  createLinearChart(data) {
    let dataLabels = [];
    let dataPoints = [];

    let keysArr = Object.keys(data);

    keysArr.forEach((element: string) => {
      dataLabels.push(this.titleCasePipe.transform(element));
      dataPoints.push(data[element]);
    });
    console.log(dataLabels, dataPoints);
    this.linear_regressionChart = new Chart("linear_regression", {
      type: "doughnut",

      data: {
        labels: [...dataLabels],

        datasets: [
          {
            label: "Total Users",
            data: [...dataPoints],
            backgroundColor: [
              "#F38BDB",
              "#99FF33",
              "#FF9999",
              "#00CCCC",
              "#FF8000",
              "#0080FF",
            ],
            borderColor: [
              "rgb(0,0,0,0)",
              "rgb(0,0,0,0)",
              "rgb(0,0,0,0)",
              "rgb(0,0,0,0)",
              "rgb(0,0,0,0)",
              "rgb(0,0,0,0)",
            ],
          },
        ],
      },
      options: {},
    });
  }
  createForestChart(data) {
    let dataLabels = [];
    let dataPoints = [];

    let keysArr = Object.keys(data);

    keysArr.forEach((element: string) => {
      dataLabels.push(this.titleCasePipe.transform(element));
      dataPoints.push(data[element]);
    });
    console.log(dataLabels, dataPoints);
    this.random_forestChart = new Chart("random_forest", {
      type: "doughnut",

      data: {
        labels: [...dataLabels],

        datasets: [
          {
            label: "Total Users",
            data: [...dataPoints],
            backgroundColor: [
              "#F38BDB",
              "#99FF33",
              "#FF9999",
              "#00CCCC",
              "#FF8000",
              "#0080FF",
            ],
            borderColor: [
              "rgb(0,0,0,0)",
              "rgb(0,0,0,0)",
              "rgb(0,0,0,0)",
              "rgb(0,0,0,0)",
              "rgb(0,0,0,0)",
              "rgb(0,0,0,0)",
            ],
          },
        ],
      },
      options: {},
    });
  }
}
