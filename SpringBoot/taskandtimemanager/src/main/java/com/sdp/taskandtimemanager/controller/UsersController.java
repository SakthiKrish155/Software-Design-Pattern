package com.sdp.taskandtimemanager.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sdp.taskandtimemanager.model.Users;
import com.sdp.taskandtimemanager.service.UsersService;

@RestController
@RequestMapping("/users")
public class UsersController {

    @Autowired
    private UsersService service;

    @GetMapping("/findAll")
    public List<Users> findAll() {
        return service.findAllUsers();
    }

    @GetMapping("/findById/{userId}")
    public Users findById(@PathVariable Long userId) {
        return service.findUserById(userId);
    }

    @PostMapping("/add")
    public Users add(@RequestBody Users user) {
        return service.addUser(user);
    }

    @PutMapping("/update/{userId}")
    public Users update(@PathVariable Long userId, @RequestBody Users user) {
        return service.updateUser(userId, user);
    }

    @PatchMapping("/updateSpecific/{userId}")
    public Users patch(@PathVariable Long userId, @RequestBody Users user) {
        return service.patchUser(userId, user);
    }
    @DeleteMapping("delete/{userId}")
    public void delete(@PathVariable Long userId) {
        service.deleteUser(userId);
    }

}
