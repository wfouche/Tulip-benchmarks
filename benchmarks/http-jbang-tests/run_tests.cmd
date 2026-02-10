set TULIP_PARAMS=10000.0 http://localhost:7070 2.2.3 HTTP_1_1 21
set TULIP_JAVA_OPTIONS=-Xms1g -Xmx2g -XX:+UseZGC
set TULIP_CLI=tulip-cli-dev@wfouche

call jbang cache clear

call jbang --fresh run %TULIP_CLI%

set TULIP_JAVA_OPTIONS=

set JAVA_OPTS=
if not exist "Java" (md Java)
cd Java
call jbang run %TULIP_CLI% init Java %TULIP_PARAMS%
call run_bench.cmd
cd ..

set JAVA_OPTS=
if not exist "Groovy" (md Groovy)
cd Groovy
call jbang run %TULIP_CLI% init Groovy %TULIP_PARAMS%
call run_bench.cmd
cd ..

set JAVA_OPTS=
if not exist "Kotlin" (md Kotlin)
cd Kotlin
call jbang run %TULIP_CLI% init Kotlin %TULIP_PARAMS%
call run_bench.cmd
cd ..

set JAVA_OPTS=
if not exist "Scala" (md Scala)
cd Scala
call jbang run %TULIP_CLI% init Scala %TULIP_PARAMS%
call run_bench.cmd
cd ..

set JAVA_OPTS=
if not exist "Jython" (md Jython)
cd Jython
call jbang run %TULIP_CLI% init Jython %TULIP_PARAMS%
call run_bench.cmd
cd ..

start index.html
