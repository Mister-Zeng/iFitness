package com.example.ifitness.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "daily_macros")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class DailyMacros {
    @Id
    @GeneratedValue
    @Column(name = "daily_macros_id")
    private Long id;
    private int calories;
    private int protein;
    private int fat;
    private int carbs;

    @JsonBackReference
    @OneToOne(mappedBy = "dailyMacros", cascade = CascadeType.ALL, orphanRemoval = true)
    private DailyEntry dailyEntry;
}
