package org.mcjug.serverless.lambda;

import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClient;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBQueryExpression;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import org.mcjug.serverless.model.TodoTask;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class QueryRequestHandler implements RequestHandler<String, List<TodoTask>> {
    private AmazonDynamoDB dynamoDb = AmazonDynamoDBClient.builder().build();
    private DynamoDBMapper mapper = new DynamoDBMapper(dynamoDb);

    public List<TodoTask> handleRequest(String projectId, Context context) {
        return query(projectId);
    }

    @SuppressWarnings("unchecked")
    private List<TodoTask> query(String projectId) {
        Map<String, AttributeValue> eav = new HashMap<>();
        eav.put(":v1", new AttributeValue().withS(projectId));

        DynamoDBQueryExpression<TodoTask> queryExpression = new DynamoDBQueryExpression<TodoTask>()
                .withKeyConditionExpression("projectId = :v1")
                .withExpressionAttributeValues(eav);

        return mapper.query(TodoTask.class, queryExpression);
    }
}