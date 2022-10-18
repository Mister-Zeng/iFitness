package com.example.ifitness.model;

import lombok.*;
import javax.persistence.*;

@Entity
@Table(name = "Users")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String first_name;
    private String last_name;
    private String roles;
    private String height;
    private Integer weight;
    private String username;
    @Column(unique = true)
    private String email;
    @Column(unique = true)
    private String password;


}
