jbang run ^
   -R=--enable-native-access=ALL-UNNAMED ^
   -R=--sun-misc-unsafe-memory-access=allow ^
   -R=-Xmx2g ^
   -R=-Xms2g ^
   -R=-XX:+UseZGC ^
   --java 25 ^
   --files logback.xml ^
   --deps io.github.wfouche.tulip:tulip-runtime:2.1.15 ^
   -m io.github.wfouche.tulip.api.TulipApi ^
   io\tulip\JavaHttpUser.java ^
   benchmark_config.json