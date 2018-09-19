package org.mcjug.serverless.lambda;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClient;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import org.mcjug.serverless.model.TodoTask;

public class CreateRequestHandler implements RequestHandler<TodoTask, TodoTask> {
    private AmazonDynamoDB dynamoDb = AmazonDynamoDBClient.builder().build();
    private DynamoDBMapper mapper = new DynamoDBMapper(dynamoDb);

    public TodoTask handleRequest(TodoTask task, Context context) {
        mapper.save(task);
        return task;
    }
}
