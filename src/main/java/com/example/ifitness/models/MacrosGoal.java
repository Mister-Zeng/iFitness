package com.example.ifitness.models;

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
    @Column(name = "macros_goal_id")
    private Long id;
    private int calories = 0;
    private int protein = 0;
    private int fat = 0;
    private int carbs = 0;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;
}

