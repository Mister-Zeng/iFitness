package com.example.ifitness;

import com.example.ifitness.security.util.RsaKeyProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

//@EnableConfigurationProperties(RsaKeyProperties.class)
@SpringBootApplication
public class IFitnessApplication {

    public static void main(String[] args) {
        SpringApplication.run(IFitnessApplication.class, args);
    }

}
