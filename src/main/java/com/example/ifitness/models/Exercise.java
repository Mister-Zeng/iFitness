package com.example.ifitness.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "exercise_id")
    private Long id;
    private String name;
    private int sets;
    private int reps;
    private int weight;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "daily_entry_id")
    private DailyEntry dailyEntry;
}
