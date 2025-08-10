set TULIP_PARAMS=10000.0 http://localhost:7070 2.1.9-dev
set TULIP_JAVA_OPTIONS=-server -Xms2g -Xmx2g -XX:+UseZGC -XX:+ZGenerational
set TULI_CLI=tulip-cli-dev

call jbang cache clear

call jbang --fresh run tulip-cli@wfouche

if not exist "Java" (md Java)
cd Java
call jbang run %TULI_CLI%@wfouche init Java %TULIP_PARAMS%
call run_bench.cmd
cd ..

REM if not exist "Groovy" (md Groovy)
REM cd Groovy
REM call jbang run tulip-cli@wfouche init Groovy %TULIP_PARAMS%
REM call run_bench.cmd
REM cd ..

if not exist "Kotlin" (md Kotlin)
cd Kotlin
call jbang run %TULI_CLI%@wfouche init Kotlin %TULIP_PARAMS%
call run_bench.cmd
cd ..

if not exist "Scala" (md Scala)
cd Scala
call jbang run %TULI_CLI%@wfouche init Scala %TULIP_PARAMS%
call run_bench.cmd
cd ..

if not exist "Jython" (md Jython)
cd Jython
call jbang run %TULI_CLI%@wfouche init Jython %TULIP_PARAMS%
call run_bench.cmd
cd ..
