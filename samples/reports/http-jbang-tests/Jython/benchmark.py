from __future__ import print_function

# /// jbang
# requires-jython = "2.7.4"
# requires-java = "21"
# dependencies = [
#   "io.github.wfouche.tulip:tulip-runtime:2.1.8",
#   "org.slf4j:slf4j-api:2.0.17",
#   "ch.qos.logback:logback-core:1.5.18",
#   "ch.qos.logback:logback-classic:1.5.18",
# ]
# runtime-options = [
#   "-server", "-Xms2g", "-Xmx2g", "-XX:+UseZGC", "-XX:+ZGenerational"
# ]
# ///

import io.github.wfouche.tulip.user.HttpUser as HttpUser
import io.github.wfouche.tulip.api.TulipUserFactory as TulipUserFactory
import io.github.wfouche.tulip.api.TulipApi as TulipApi
import java.util.concurrent.ThreadLocalRandom as ThreadLocalRandom

class PythonHttpUser(HttpUser):

    def __init__(self, userId, threadId):
        HttpUser.__init__(self, userId, threadId)

    def onStart(self):
        if self.userId == 0:
            print("Jython")
            HttpUser.onStart(self)
        return True

    def action1(self):
        id = ThreadLocalRandom.current().nextInt(100) + 1
        return len(self.http_GET("/posts/{id}", id)) > 0

    def action2(self):
        id = ThreadLocalRandom.current().nextInt(500) + 1
        return len(self.http_GET("/comments/{id}", id)) > 0

    def action3(self):
        id = ThreadLocalRandom.current().nextInt(200) + 1
        return len(self.http_GET("/todos/{id}", id)) > 0

    def onStop(self):
        return True

class UserFactory(TulipUserFactory):

    def getUser(self, userId, className, threadId):
        return PythonHttpUser(userId, threadId)

TulipApi.runTulip("benchmark_config.json", UserFactory())

