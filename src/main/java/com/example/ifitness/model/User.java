package com.example.ifitness.model;

import lombok.*;
import javax.persistence.*;

@Entity
@Table(name = "users")
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String roles;
    @Column(unique = true)
    private String email;
    private String password;


}
