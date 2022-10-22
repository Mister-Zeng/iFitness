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
    private int calories;
    private int protein;
    private int fat;
    private int carbs;


    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "daily_entry_id")
    private DailyEntry daily_entry_list;

}
