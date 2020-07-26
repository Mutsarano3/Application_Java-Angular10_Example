package com.backend.backend.Controllers;


import com.backend.backend.Model.User;
import com.backend.backend.Repositories.IUser;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private IUser repositories_user;

    @GetMapping("/")
    public ResponseEntity getAllUsers()
    {
        return ResponseEntity.ok(repositories_user.findAll());

    }

    @PostMapping("/")
    public ResponseEntity addUser(@RequestBody  User user)
    {
        if(user == null)
        {
            return ResponseEntity.badRequest().build();
        }


        repositories_user.save(user);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @PutMapping("/{id}")
    public ResponseEntity EditUser(@PathVariable(name = "id") Long id, @RequestBody  User user)
    {
        User user2 = repositories_user.getOne(id);
        if(user2 == null)
        {
            return ResponseEntity.notFound().build();
        }

        if(user == null)
        {
            return ResponseEntity.badRequest().build();
        }
        user2.setFirstname(user.getFirstname());
        user2.setName(user.getName());
        user2.setPassword(user.getPassword());
        repositories_user.save(user2);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity findUserById(@PathVariable(name = "id")Long id)
    {
        User user = repositories_user.getOne(id);
        if(user == null)
        {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(user);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteUser(@PathVariable(name = "id") Long id)
    {
        User user = repositories_user.getOne(id);
        if(user == null)
        {
            return ResponseEntity.notFound().build();
        }

        repositories_user.delete(user);

        return ResponseEntity.noContent().build();

        
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestParam(name = "email") String email,@RequestParam(name = "password") String password)
    {
        User user = repositories_user.findByEmailAndPassword(email, password);
        if(user == null)
        {
            return  ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(user.getId());
    }


    
}