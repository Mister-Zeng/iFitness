package com.example.ifitness.models;

import com.fasterxml.jackson.annotation.*;
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
    @Column(unique = true)
    private LocalDate date;
    private int weight;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @JsonManagedReference
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "daily_macros_id", unique = true)
    private DailyMacros dailyMacros;

    @JsonManagedReference
    @OneToMany(mappedBy = "dailyEntry", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Exercise> exercise = new ArrayList<Exercise>();

}