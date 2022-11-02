package com.example.ifitness.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "macros_goal")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class MacrosGoal {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "macros_goal_id")
    private Long id;
    private int calories;
    private int protein;
    private int fat;
    private int carbs;

    @JsonIgnore
    @OneToOne(mappedBy = "macrosGoal")
    private User user;
}

