///usr/bin/env jbang "$0" "$@" ; exit $?
//DEPS io.github.wfouche.tulip:tulip-runtime:2.2.0
//SOURCES APIUser.java
//JAVA 25
//FILES ../../benchmark_config.json
//FILES ../../logback.xml
// RUNTIME_OPTIONS -Djdk.virtualThreadScheduler.parallelism=16
//NATIVE_OPTIONS -O3 --gc=G1
package io.tulip;

import io.github.wfouche.tulip.api.TulipApi;
import io.github.wfouche.tulip.api.TulipUser;
import io.github.wfouche.tulip.api.TulipUserFactory;

class UserFactory extends TulipUserFactory {

   public TulipUser getUser(String classname, int userId, int threadId) {
      var obj = new APIUser();
      obj.initRuntime(userId, threadId);
      return obj;
   }

}

public class App {
   public static void main(String[] args) {
      TulipApi.runTulip("benchmark_config.json", new UserFactory());
   }
}
