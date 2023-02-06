package com.example.practice.controller;

import com.example.practice.model.Student;
import com.example.practice.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StudentController {
    @Autowired
    private StudentService studentService;

    @GetMapping("/allstudents")
    public List<Student> getAllStudents(){
        return this.studentService.getStudents();
    }

    @PostMapping("/createstudent")
    public String createStudent(@RequestBody Student student){
        return this.studentService.createStudent(student);
    }

    //delete
    @DeleteMapping("/delete/{id}")
    public String deleteStudent(@PathVariable int id){
        return studentService.deleteStudent(id);
    }

    //update
    @PutMapping("/updatestudent")
    public Student updateStudent(@RequestBody Student student) throws Exception {
        return studentService.updateStudent(student);
    }

    //getbyid
    @GetMapping("/studentbyid/{id}")
    public Student getStudentById(@PathVariable int id) throws Exception {
        return studentService.getStudentById(id);
    }
}
