package org.mcjug.serverless;

import org.mcjug.serverless.lambda.CreateRequestHandler;
import org.mcjug.serverless.lambda.DeleteRequestHandler;
import org.mcjug.serverless.lambda.GetRequestHandler;
import org.mcjug.serverless.lambda.QueryRequestHandler;
import org.mcjug.serverless.model.TodoHash;
import org.mcjug.serverless.model.TodoTask;

import java.io.IOException;
import java.util.List;

public class TestCRUD {
    public static void main(String[] args) throws IOException {
        TodoTask task = new TodoTask();
        task.setProjectId("TEST-123");
        task.setTaskId("TASK-123");
        task.setTitle("Test Task");
        task.setText("Main test runner");

        CreateRequestHandler create = new CreateRequestHandler();
        create.handleRequest(task, null);
        System.out.println("saved: " + task.toString());

        GetRequestHandler get = new GetRequestHandler();
        TodoTask getResult = get.handleRequest(new TodoHash("TEST-123", "TASK-123"),null);
        System.out.println("retrieved: " + getResult.toString());

        QueryRequestHandler query = new QueryRequestHandler();
        List<TodoTask> queryResult = query.handleRequest("TEST-123",null);
        System.out.println("query found " + queryResult.size()  + " result(s)");
        System.out.println(" first item: " + queryResult.get(0).toString());

        DeleteRequestHandler delete = new DeleteRequestHandler();
        TodoTask deleteResult = delete.handleRequest(task,null);
        System.out.println("deleted: " + deleteResult.toString());

        System.out.println("Example Complete!");
    }
}
