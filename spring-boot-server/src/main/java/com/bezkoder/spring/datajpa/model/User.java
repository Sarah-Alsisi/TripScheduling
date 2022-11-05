package com.bezkoder.spring.datajpa.model;


import javax.persistence.*;

@Entity
@Table(name = "Users")
public class User{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int id;

    @Column(name = "username")
    private String username;
    @Column(name = "password")
    private String password;
    @Column(name = "role")
    // User/admin
    private String role;
    @Column(name = "is_loggedin")
    // check if Admin/User is logged in
    private Boolean is_loggedin;

    // default constructor
    public User() {
        super();
    }
    // parametrized constructor
    public User(String username, String password, String role, boolean is_loggedin)
    {
        super();
        this.username=username;
        this.password=password;
        this.role=role;
        this.is_loggedin=is_loggedin;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Boolean getIs_loggedin() {
        return is_loggedin;
    }

    public void setIs_loggedin(Boolean is_loggedin) {
        this.is_loggedin = is_loggedin;
    }

}
