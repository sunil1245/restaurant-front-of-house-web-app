package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Timers {

	public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
	}

    @CrossOrigin(origins = "http://localhost:5500")
    @RestController
    @RequestMapping("api/timers/all")
    @GetMapping("/timers/all")
    public String getAllTimers() {
        return "List of All Timers";
    }

}
