package io.tulip;

import io.github.wfouche.tulip.user.HttpUser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class APIUser extends HttpUser {

    // Action 1: GET /posts
    public boolean action1() {
        var response = http_get("/posts");
        return response.isSuccessful();
    }

    // Action 2: POST /posts
    public boolean action2() {
        String payload = """
        {
            "title": "Tulip Test Post",
            "body": "This is a test post created during load testing",
            "userId": 1
        }       
        """;
        var response = http_post(payload, "/posts");
        return response.isSuccessful();
    }

    // Action 3: GET /posts/{id}
    public boolean action3() {
        int post_id = 1;
        var response = http_get("/posts/{id}", post_id);
        return response.isSuccessful();
    }

    public Logger logger() {
        return logger;
    }

    // Logger
    private static final Logger logger = LoggerFactory.getLogger(APIUser.class);

}
