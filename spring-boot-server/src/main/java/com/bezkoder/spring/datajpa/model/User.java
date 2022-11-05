package com.bezkoder.spring.datajpa.model;

import javax.persistence.*;

@Entity
@Table(name = "Users")
public class User{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long id;

    @Column(name = "username")
    private String username;
    @Column(name = "password")
    private String password;
    @Column(name = "is_admin")
    // User/admin
    private Boolean is_Admin;
    @Column(name = "is_loggedin")
    // check if Admin/User is logged in
    private Boolean is_loggedin;

    // default constructor
    public User() {
        super();
    }
    // parametrized constructor
    public User(String username, String password, boolean isAdmin, boolean is_loggedin)
    {
        super();
        this.username=username;
        this.password=password;
        this.is_Admin=isAdmin;
        this.is_loggedin=is_loggedin;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
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

    public Boolean getIs_Admin() {
        return is_Admin;
    }

    public void setIs_Admin(Boolean is_Admin) {
        this.is_Admin = is_Admin;
    }

    public Boolean getIs_loggedin() {
        return is_loggedin;
    }

    public void setIs_loggedin(Boolean is_loggedin) {
        this.is_loggedin = is_loggedin;
    }

}
