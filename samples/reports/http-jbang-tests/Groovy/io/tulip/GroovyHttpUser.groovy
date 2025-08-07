package io.tulip

import io.github.wfouche.tulip.user.HttpUser
import java.util.concurrent.ThreadLocalRandom
import org.slf4j.Logger
import org.slf4j.LoggerFactory

class GroovyHttpUser extends HttpUser {

    GroovyHttpUser(int userId, int threadId) {
        super(userId, threadId)
    }

    boolean onStart() {
        // Initialize the shared RestClient object only once
        if (userId == 0) {
            logger.info("Groovy")
            super.onStart()
        }
        return true
    }

    // Action 1: GET /posts/{id}
    boolean action1() {
        int id = ThreadLocalRandom.current().nextInt(100) + 1
        return !http_GET("/posts/{id}", id).isEmpty()
    }

    // Action 2: GET /comments/{id}
    boolean action2() {
        int id = ThreadLocalRandom.current().nextInt(500) + 1
        return !http_GET("/comments/{id}", id).isEmpty()
    }

    // Action 3: GET /todos/{id}
    boolean action3() {
        int id = ThreadLocalRandom.current().nextInt(200) + 1
        return !http_GET("/todos/{id}", id).isEmpty()
    }

    boolean onStop() {
        return true
    }

    // Logger
    static Logger logger = LoggerFactory.getLogger(GroovyHttpUser.class)

}
