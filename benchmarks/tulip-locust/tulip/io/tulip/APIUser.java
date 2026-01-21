package io.tulip;

import io.github.wfouche.tulip.user.HttpUser;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class APIUser extends HttpUser {

    public APIUser(int userId, int threadId) {
        super(userId, threadId);
        if (userId == 0) {
            logger.info("Java:APIUser");
        }
    }

    public boolean onStart() {
        return super.onStart();
    }

    // Action 1: GET /posts
    public boolean action1() {
        var rsp = get("/posts");
        return rsp.isSuccessful();
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
        var rsp = post(payload, "/posts");
        return rsp.isSuccessful();
    }

    // Action 3: GET /posts/{id}
    public boolean action3() {
        int post_id = 1;
        var rsp = get("/posts/{id}", post_id);
        return rsp.isSuccessful();
    }

    public boolean onStop() {
        return true;
    }

    public Logger logger() {
        return logger;
    }

    // Logger
    private static final Logger logger = LoggerFactory.getLogger(APIUser.class);

}
