package com.sdp.taskandtimemanager.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sdp.taskandtimemanager.model.Users;

public interface UsersRepo extends JpaRepository<Users,Long> {
    
}
