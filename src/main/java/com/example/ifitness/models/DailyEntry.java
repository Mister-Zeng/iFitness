package com.example.ifitness.models;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "daily_entry")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class DailyEntry {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "daily_entry_id", unique = true)
    private Long id;
    private LocalDate date;
    private Long weight;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @OneToOne
    @JoinColumn(name = "daily_macros_id", unique = true)
    private DailyMacros dailyMacros;

    @OneToMany(mappedBy = "dailyEntry", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Exercise> exercise = new ArrayList<Exercise>();
}