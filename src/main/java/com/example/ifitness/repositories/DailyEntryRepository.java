package com.example.ifitness.repositories;

import com.example.ifitness.models.DailyEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface DailyEntryRepository extends JpaRepository<DailyEntry, Long> {
    List<DailyEntry> findDailyEntryById(Long id);
    @Query("select de from DailyEntry de where de.user.username = :username and de.date = :localDate")
    DailyEntry findByUsernameAndDate(@Param("username") String username, @Param("localDate") LocalDate date);
}
