package io.tulip;

import io.github.wfouche.tulip.user.HttpUser;
import java.util.concurrent.ThreadLocalRandom;

public class DemoHttpUser extends HttpUser {

    public DemoHttpUser(int userId, int threadId) {
        super(userId, threadId);
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

    // Action 4: POST /posts
    public boolean action4() {
        String body = new String("{\"title\": \"New Title\", \"body\": \"New Body\", \"userId\": 1}");
        return !http_POST(body, "/posts").isEmpty();
    }

    // Action 5: PUT /posts/{id}
    public boolean action5() {
        String body = new String("{\"id\": 1, \"title\": \"New Title\", \"body\": \"New Body\", \"userId\": 1}");
        return !http_PUT(body, "/posts/1").isEmpty();
    }

    // Action 6: PATCH /posts/{id}
    public boolean action6() {
        String body = new String("{\"title\": \"New Title\"}");
        return !http_PATCH(body, "/posts/1").isEmpty();
    }

    // Action 7: DELETE /posts/{id}
    public boolean action7() {
        return !http_DELETE("/posts/1").isEmpty();
    }

}    