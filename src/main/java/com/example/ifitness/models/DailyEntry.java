package com.example.ifitness.models;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "daily_entry")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class DailyEntry {

    @Id
    @GeneratedValue
    @Column(name = "daily_entry_id")
    private Long id;
    private Date date;
    private Long weight;

    @OneToOne
    @JoinColumn(name="daily_macros_id")
    private DailyMacros dailyMacros;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id")
    private User user;

    @OneToOne(cascade = CascadeType.ALL, mappedBy = "dailyEntry")
    private Exercise exercise;
}