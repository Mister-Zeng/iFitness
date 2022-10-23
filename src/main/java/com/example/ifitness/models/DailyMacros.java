package com.example.ifitness.models;

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
    private int calories = 0;
    private int protein = 0;
    private int fat = 0;
    private int carbs = 0;


    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "daily_entry_id")
    private DailyEntry daily_entry_list;

}
