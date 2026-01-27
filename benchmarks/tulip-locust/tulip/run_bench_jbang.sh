export JBANG_JAVA_OPTIONS="-XX:TieredStopAtLevel=1"
export JBANG_APP_JAVA_OPTIONS="-Xmx2g -XX:+UseZGC"
jbang run \
   --java 25 \
   --files logback.xml \
   --deps io.github.wfouche.tulip:tulip-runtime:2.2.0 \
   -m io.github.wfouche.tulip.api.TulipApi \
   io/tulip/APIUser.java \
   --config benchmark_config.json
