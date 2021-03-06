package demo.controller;


import demo.model.Car;
import demo.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/cars")
public class CarController {

    @Autowired
    private CarService carService;

    @GetMapping(path="/{carId}")
    public ResponseEntity<Car> getCarById(@PathVariable("carId") Integer carId) {
        Car car = carService.getCarById(carId);
        return new ResponseEntity<>(car, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Car>> getAllCars() {
        List<Car> list = carService.getAllCars();
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
}
