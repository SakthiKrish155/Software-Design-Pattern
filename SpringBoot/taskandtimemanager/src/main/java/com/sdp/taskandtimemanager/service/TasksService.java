package com.sdp.taskandtimemanager.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sdp.taskandtimemanager.dto.TaskFormDto;
import com.sdp.taskandtimemanager.model.Projects;
import com.sdp.taskandtimemanager.model.Tasks;
import com.sdp.taskandtimemanager.model.Users;
import com.sdp.taskandtimemanager.repo.ProjectsRepo;
import com.sdp.taskandtimemanager.repo.TasksRepo;
import com.sdp.taskandtimemanager.repo.UsersRepo;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class TasksService {

    @Autowired
    private TasksRepo repo;
    @Autowired
    private ProjectsRepo prepo;
    @Autowired
    private UsersRepo urepo;

    public List<Tasks> findAllTasks() {
        return repo.findAll();
    }

    public Tasks findTaskById(Long taskId) {
        return repo.findById(taskId).orElse(null);
    }

    public String addTask(TaskFormDto task, Long projectId, Long userId) {
        // task.getProject().getProjectid();
        Projects project = prepo.findById(projectId).get();
        Users user = urepo.findById(userId).get();

        Tasks taskObj = new Tasks();
        taskObj.setMember(user);
        taskObj.setProject(project);
        taskObj.setTaskname(task.getTaskname());
        taskObj.setTaskdescription(task.getTaskdescription());
        taskObj.setTaskpriority(task.getTaskpriority());
        taskObj.setTaskstatus(task.getTaskstatus());

        repo.save(taskObj);
        // System.out.println( "````````````"+ project + "````````````");

        if (project == null) {
            return "Project not found";
        }
        if (user == null) {
            return "User not found";
        }

        // task.setProject(project);
        // task.setMember(user);

        // repo.save(task);
        return "Task added";
    }

    public String updateTask(Long taskId, TaskFormDto taskDto, Long projectId, Long assignedTo) {
        Optional<Tasks> optionalTask = repo.findById(taskId);
        if (optionalTask.isPresent()) {
            Tasks existingTask = optionalTask.get();
    
            Projects project = prepo.findById(projectId).orElse(null);
            Users user = urepo.findById(assignedTo).orElse(null);
    
            if (project == null) {
                return "Project not found";
            }
            if (user == null) {
                return "User not found";
            }
    
            existingTask.setTaskname(taskDto.getTaskname());
            existingTask.setTaskdescription(taskDto.getTaskdescription());
            existingTask.setTaskpriority(taskDto.getTaskpriority());
            existingTask.setTaskstatus(taskDto.getTaskstatus());
            existingTask.setProject(project);
            existingTask.setMember(user);
    
            repo.save(existingTask);
            return "Task updated successfully";
        }
        return "Task not found";
    }
    

    public Tasks patchTask(Long taskId, Tasks task) {
        Optional<Tasks> optionalTask = repo.findById(taskId);
        if (optionalTask.isPresent()) {
            Tasks existingTask = optionalTask.get();

            if (task.getTaskname() != null) {
                existingTask.setTaskname(task.getTaskname());
            }

            if (task.getTaskdescription() != null) {
                existingTask.setTaskdescription(task.getTaskdescription());
            }

            if (task.getTaskstatus() != null) {
                existingTask.setTaskstatus(task.getTaskstatus());
            }

            if (task.getTaskpriority() != null) {
                existingTask.setTaskpriority(task.getTaskpriority());
            }

            // Projects project = prepo.findById(projectId).orElse(null);
            // Users user = urepo.findById(userId).orElse(null);

            // if (project != null) {
            // existingTask.setProject(project);
            // }
            // if (user != null) {
            // existingTask.setMember(user);
            // }

            return repo.save(existingTask);
        }
        return task;
    }

    public void deleteTask(Long taskId) {
        repo.deleteById(taskId);
    }

}
