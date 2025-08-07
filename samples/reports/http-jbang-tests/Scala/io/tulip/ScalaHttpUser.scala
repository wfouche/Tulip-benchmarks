package io.tulip

import io.github.wfouche.tulip.user.HttpUser
import java.util.concurrent.ThreadLocalRandom
import org.slf4j.Logger
import org.slf4j.LoggerFactory

class ScalaHttpUser(userId: Int, threadId: Int) extends HttpUser(userId, threadId) {

  override def onStart(): Boolean = {
    // Initialize the shared RestClient object only once
    if (getUserId == 0) {
      logger.info("Scala")
      super.onStart()
    }
    true
  }

  // Action 1: GET /posts/{id}
  override def action1(): Boolean = {
    val id = ThreadLocalRandom.current().nextInt(100) + 1
    !http_GET("/posts/{id}", id).isEmpty()
  }

  // Action 2: GET /comments/{id}
  override def action2(): Boolean = {
    val id = ThreadLocalRandom.current().nextInt(500) + 1
    !http_GET("/comments/{id}", id).isEmpty()
  }

  // Action 3: GET /todos/{id}
  override def action3(): Boolean = {
    val id = ThreadLocalRandom.current().nextInt(200) + 1
    !http_GET("/todos/{id}", id).isEmpty()
  }

  override def onStop(): Boolean = true

}

// Logger
val logger: Logger = LoggerFactory.getLogger(classOf[ScalaHttpUser])
