package com.example.ifitness.models;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Setter
@Getter
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name= "exercises")
public class Exercise {

    @Id
    @GeneratedValue
    @Column(name = "exercise_id")
    private Long id;
    private String name;
    private int sets;
    private int reps;
    private int weight;

    @ManyToOne
    @JoinColumn(name = "daily_entry_id", unique = true)
    private DailyEntry dailyEntry;
}
