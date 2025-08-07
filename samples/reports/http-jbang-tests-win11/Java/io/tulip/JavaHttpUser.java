package io.tulip;

import io.github.wfouche.tulip.user.HttpUser;
import java.util.concurrent.ThreadLocalRandom;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class JavaHttpUser extends HttpUser {

    public JavaHttpUser(int userId, int threadId) {
        super(userId, threadId);
    }

    public boolean onStart() {
        // Initialize the shared RestClient object only once
        if (getUserId() == 0) {
            logger.info("Java");
            super.onStart();
        }
        return true;
    }

    // Action 1: GET /posts/{id}
    public boolean action1() {
        int id = ThreadLocalRandom.current().nextInt(100)+1;
        return !http_GET("/posts/{id}", id).isEmpty();
    }

    // Action 2: GET /comments/{id}
    public boolean action2() {
        int id = ThreadLocalRandom.current().nextInt(500)+1;
        return !http_GET("/comments/{id}", id).isEmpty();
    }

    // Action 3: GET /todos/{id}
    public boolean action3() {
        int id = ThreadLocalRandom.current().nextInt(200)+1;
        return !http_GET("/todos/{id}", id).isEmpty();
    }

    public boolean onStop() {
        return true;
    }

    // Logger
    private static final Logger logger = LoggerFactory.getLogger(JavaHttpUser.class);

}
