package com.backend.backend.Repositories;

import com.backend.backend.Model.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface IUser extends JpaRepository<User,Long> {
    
    public User findByEmailAndPassword(String email, String password);
    public User findByEmail(String email);
}