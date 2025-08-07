package io.tulip

import io.github.wfouche.tulip.user.HttpUser
import java.util.concurrent.ThreadLocalRandom
import org.slf4j.Logger
import org.slf4j.LoggerFactory

class KotlinHttpUser(userId: Int, threadId: Int) : HttpUser(userId, threadId) {

    // Action 0
    override fun onStart(): Boolean {
        // Initialize the shared RestClient object only once
        if (userId == 0) {
            logger.info("Kotlin")
            super.onStart()
        }
        return true
    }

    // Action 1: GET /posts/{id}
    override fun action1(): Boolean {
        val id: Int = ThreadLocalRandom.current().nextInt(100)+1
        return !http_GET("/posts/{id}", id).isEmpty()
    }

    // Action 2: GET /comments/{id}
    override fun action2(): Boolean {
        val id: Int = ThreadLocalRandom.current().nextInt(500)+1
        return !http_GET("/comments/{id}", id).isEmpty()
    }

    // Action 3: GET /todos/{id}
    override fun action3(): Boolean {
        val id: Int = ThreadLocalRandom.current().nextInt(200)+1
        return !http_GET("/todos/{id}", id).isEmpty()
    }

    override fun onStop(): Boolean {
        return true
    }

    // RestClient object
    companion object {
        private val logger = LoggerFactory.getLogger(KotlinHttpUser::class.java)
    }
}
