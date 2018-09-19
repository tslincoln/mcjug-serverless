package org.mcjug.serverless.lambda;

import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClient;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import org.mcjug.serverless.model.TodoHash;
import org.mcjug.serverless.model.TodoTask;

public class GetRequestHandler implements RequestHandler<TodoHash, TodoTask> {
    private AmazonDynamoDB dynamoDb = AmazonDynamoDBClient.builder().build();
    private DynamoDBMapper mapper = new DynamoDBMapper(dynamoDb);

    public TodoTask handleRequest(TodoHash hash, Context context) {
        return mapper.load(TodoTask.class,hash.getProjectId(),hash.getTaskId());
    }
}

