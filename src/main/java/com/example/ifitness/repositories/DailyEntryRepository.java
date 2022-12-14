package com.example.ifitness.repositories;

import com.example.ifitness.models.DailyEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.Optional;

public interface DailyEntryRepository extends JpaRepository<DailyEntry, Long> {
    Optional<DailyEntry> findById(Long id);
    @Query("select de from DailyEntry de where de.user.id = :userId and de.date = :localDate")
    DailyEntry findByUserIdAndDate(@Param("userId") Long userId, @Param("localDate") LocalDate date);

}
