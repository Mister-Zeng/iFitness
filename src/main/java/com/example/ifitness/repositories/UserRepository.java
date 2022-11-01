package com.example.ifitness.repositories;

import com.example.ifitness.models.DailyEntry;
import com.example.ifitness.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);

    Optional<User> findById(Long id);

//    @Modifying
//    @Query("update User u set u.dailyEntry = :dailyEntry where u.id = :userId and u.dailyEntry = :dailyEntryId")
//    DailyEntry findDailyEntryByUserIdAndDailyEntryId(@Param("userid") Long userId, @Param("dailyEntryId") Long dailyEntryId, @Param("dailyEntry") DailyEntry dailyEntry);
}
