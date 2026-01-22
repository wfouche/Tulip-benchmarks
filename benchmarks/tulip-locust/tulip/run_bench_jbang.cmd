set JBANG_JAVA_OPTIONS=-XX:TieredStopAtLevel=1
set JBANG_APP_JAVA_OPTIONS=-Xmx2g -XX:+UseZGC -XX:+ZGenerational
jbang run ^
   --java 21 ^
   --files logback.xml ^
   --deps io.github.wfouche.tulip:tulip-runtime:2.1.17 ^
   -m io.github.wfouche.tulip.api.TulipApi ^
   io\tulip\APIUser.java ^
   benchmark_config.json