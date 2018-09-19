package org.mcjug.serverless.model;

public class TodoHash {
    private String projectId;
    private String taskId;

    public TodoHash (){}


    public TodoHash (String projectId, String taskId){
        this.projectId = projectId;
        this.taskId = taskId;
    }

    public String getProjectId() {
        return projectId;
    }

    public void setProjectId(String projectId) {
        this.projectId = projectId;
    }

    public String getTaskId() {
        return taskId;
    }

    public void setTaskId(String taskId) {
        this.taskId = taskId;
    }
}
