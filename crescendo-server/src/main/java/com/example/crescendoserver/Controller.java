package com.example.crescendoserver;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @GetMapping("/")
    public String root() {
        return "Hello World!";
        // a
    }
}
