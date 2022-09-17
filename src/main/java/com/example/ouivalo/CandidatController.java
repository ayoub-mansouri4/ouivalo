package com.example.ouivalo;


import com.example.ouivalo.models.Data;
import com.example.ouivalo.models.Reponse;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.net.URI;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CandidatController {
    @PostMapping("/sendDataToServer")
    public Reponse sendData(@RequestBody Data data){
        RestTemplate restTemplate = new RestTemplate();
        Reponse reponse=new Reponse();
        String url="https://script.google.com/macros/s/AKfycby-TJmFFUFTfiNUbMoSIZx8LVtiskQ-bUt4xO6hmrU0XQpJS8IPUBow/exec";
        reponse.setUrl(restTemplate.postForLocation(url,data).toString());
        return reponse;
    }
}
