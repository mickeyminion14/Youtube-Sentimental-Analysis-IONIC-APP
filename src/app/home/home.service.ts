import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get("https://youtube-analysis-backend.herokuapp.com/data");
  }
}
