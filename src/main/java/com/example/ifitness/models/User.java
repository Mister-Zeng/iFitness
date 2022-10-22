package com.example.ifitness.models;


import lombok.*;

import javax.persistence.*;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "USER")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;
    private String first_name;
    private String last_name;
    private String role = "user";
    private String token;
    @Column(unique = true)
    protected String username;
    @Column(unique = true)
    private String email_address;
    @Column(unique = true)
    private String password;

    @OneToMany(mappedBy = "user")
    private List<DailyEntry> daily_entry;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "user")
    private MacrosGoal macros_goal;


}
