import { Component, ViewChild } from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor() {}
  @ViewChild("barChart", { static: false }) barChart;
  @ViewChild("barChart1", { static: false }) barChart1;
  @ViewChild("barChart2", { static: false }) barChart2;
  bars: any;
  colorArray: any;

  ionViewDidEnter() {
    this.createBarChart();
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: "line",
      data: {
        labels: ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"],
        datasets: [
          {
            label: "Viewers in millions",
            data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
            backgroundColor: "rgb(0,0,0,0)", // array should have same number of elements as number of dataset
            borderColor: "rgb(255, 204, 255)", // array should have same number of elements as number of dataset
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
    this.bars = new Chart(this.barChart1.nativeElement, {
      type: "line",
      data: {
        labels: ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"],
        datasets: [
          {
            label: "Viewers in millions",
            data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
            backgroundColor: "rgb(0,0,0,0)", // array should have same number of elements as number of dataset
            borderColor: "rgb(255, 128, 0)", // array should have same number of elements as number of dataset
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
    this.bars = new Chart(this.barChart2.nativeElement, {
      type: "line",
      data: {
        labels: ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8"],
        datasets: [
          {
            label: "Viewers in millions",
            data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
            backgroundColor: "rgb(0,0,0,0)", // array should have same number of elements as number of dataset
            borderColor: "rgb(102, 204, 0)", // array should have same number of elements as number of dataset
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }
}
