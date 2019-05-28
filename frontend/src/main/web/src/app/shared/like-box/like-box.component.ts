import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ResultTableService} from "../services/result-table.service";
import {HotelsService} from "../services/hotels.service";
import {CarService} from "../services/car.service";

@Component({
  selector: 'app-like-box',
  templateUrl: './like-box.component.html',
  styleUrls: ['./like-box.component.scss']
})
export class LikeBoxComponent implements OnInit {

  id: number;
  hotelId: number;
  carId: number;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private resultTableService: ResultTableService,
              private hotelService: HotelsService,
              private carService: CarService) {
    this.route.params.subscribe( params => {
      this.id = params['id'];
      this.hotelId = params['hotelId'];
      this.carId = params['carId'];
    });
  }

  ngOnInit() {
    this.resultTableService.getFlightById(this.id).subscribe(data => {
      this.id = data.flightId;
    });

    this.hotelService.getHotelById(this.hotelId).subscribe(data => {
      this.hotelId = data.hotelId;
    });

    this.carService.getCarById(this.carId).subscribe(data => {
      this.carId = data.carId;
    });
  }

}
