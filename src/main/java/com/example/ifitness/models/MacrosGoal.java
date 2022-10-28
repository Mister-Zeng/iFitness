package com.example.ifitness.models;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "macros_goal")
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MacrosGoal {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "macros_goal_id")
    @Getter
    private Long id;
    @Getter
    private int calories;
    @Getter
    private int protein;
    @Getter
    private int fat;
    @Getter
    private int carbs;

    @OneToOne(mappedBy = "macrosGoal", cascade = CascadeType.ALL, orphanRemoval = true)
    private User user;
}

