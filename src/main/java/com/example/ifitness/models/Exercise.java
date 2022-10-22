package com.example.ifitness.models;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Setter
@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name= "Exercise")
public class Exercise {

    @Id
    @GeneratedValue
    @Column(name = "exercise_id")
    private Long id;
    private String name;
    private int sets;
    private int reps;
    private int weight;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "daily_entry_id")
    private DailyEntry dailyEntry;
}
