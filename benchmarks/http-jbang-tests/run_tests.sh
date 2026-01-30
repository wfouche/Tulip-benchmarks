#!/bin/bash

set_title() {
  echo -ne "\033]2;$1\007"
}

jbang cache clear

# Create a 2 GB regions of Large Pages
#
# $ ls /sys/kernel/mm/hugepages/
#   hugepages-1048576kB  hugepages-2048kB
#
# # (As root) Reserve 2 GB of RAM
# $ echo 1024 > /sys/kernel/mm/hugepages/hugepages-2048kB/nr_hugepages
#
# "-XX:+UseLargePages",

export TULIP_PARAMS="10000.0 http://localhost:7070 2.2.0 HTTP_1_1 25"
export TULIP_JAVA_OPTIONS="-Xms1g -Xmx2g -XX:+UseZGC -XX:+ZGenerational"
export TULIP_CLI="tulip-cli-dev@wfouche"
#unset TULIP_JAVA_OPTIONS
#export TULIP_JAVA_OPTIONS="-server -Xms2g -Xmx2g -XX:+UseZGC -XX:+ZGenerational -XX:+UseLargePages"
jbang --fresh run $TULIP_CLI

set_title "Java"

rm -f -r Java
mkdir -p Java
cd Java || exit
echo ""
jbang run $TULIP_CLI init Java $TULIP_PARAMS
. ./run_bench.sh
cd ..

set_title "Groovy"

rm -f -r Groovy
mkdir -p Groovy
cd Groovy || exit
echo ""
jbang run $TULIP_CLI init Groovy $TULIP_PARAMS

. ./run_bench.sh
cd ..

set_title "Kotlin"

rm -f -r Kotlin
mkdir -p Kotlin
cd Kotlin || exit
echo ""
jbang run $TULIP_CLI init Kotlin $TULIP_PARAMS
. ./run_bench.sh
cd ..

set_title "Scala"

rm -f -r Scala
mkdir -p Scala
cd Scala || exit
echo ""
jbang run $TULIP_CLI init Scala $TULIP_PARAMS
. ./run_bench.sh
cd ..

set_title "Jython"

rm -f -r Jython
mkdir -p Jython
cd Jython || exit
echo ""
jbang run $TULIP_CLI init Jython $TULIP_PARAMS
. ./run_bench.sh
cd ..

echo ""
firefox index.html
