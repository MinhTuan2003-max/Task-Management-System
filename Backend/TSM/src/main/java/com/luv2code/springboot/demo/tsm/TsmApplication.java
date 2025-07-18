package com.luv2code.springboot.demo.tsm;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class TsmApplication {
    public static void main(String[] args) {
        SpringApplication.run(TsmApplication.class, args);
    }
}
