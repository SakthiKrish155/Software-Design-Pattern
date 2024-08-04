package com.sdp.taskandtimemanager.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sdp.taskandtimemanager.model.Users;
import com.sdp.taskandtimemanager.repo.UsersRepo;

@Service
public class UsersService {

    @Autowired
    private UsersRepo repo;

    public List<Users> findAllUsers() {
        return repo.findAll();
    }

    public Users findUserById(Long userId) {
        return repo.findById(userId).orElse(null);
    }

    public Users addUser(Users user) {
        return repo.save(user);
    }

    public Users updateUser(Long userId, Users user) {
        Optional<Users> optionalUser = repo.findById(userId);
        if (optionalUser.isPresent()) {
            Users existingUser = optionalUser.get();
            existingUser.setUsername(user.getUsername());
            existingUser.setEmail(user.getEmail());
            existingUser.setPassword(user.getPassword());
            existingUser.setContact(user.getContact());
            existingUser.setDob(user.getDob());
            return repo.save(existingUser);
        }
        return user;
    }

    public Users patchUser(Long userId, Users user) {
        Optional<Users> optionalUser = repo.findById(userId);
        if (optionalUser.isPresent()) {
            Users existingUsers = optionalUser.get();
            if (user.getUsername() != null) {
                existingUsers.setUsername(user.getUsername());
            }
            if (user.getEmail() != null) {
                existingUsers.setEmail(user.getEmail());
            }
            if (user.getPassword() != null) {
                existingUsers.setPassword(user.getPassword());
            }
            if (user.getDob() != null) {
                existingUsers.setDob(user.getDob());
            }
            if (user.getRole() != null) {
                existingUsers.setRole(user.getRole());
            }
            if (user.getContact() != null) {
                existingUsers.setContact(user.getContact());
            }
            return repo.save(existingUsers);
        }
        return user;
    }

    public void deleteUser(Long userId) {
        repo.deleteById(userId);
    }

}
