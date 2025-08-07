///usr/bin/env jbang "$0" "$@" ; exit $?
//DEPS io.github.wfouche.tulip:tulip-runtime:2.1.8
//DEPS org.slf4j:slf4j-api:2.0.17
//DEPS ch.qos.logback:logback-core:1.5.18
//DEPS ch.qos.logback:logback-classic:1.5.18
//SOURCES GroovyHttpUser.groovy
//JAVA 21
//GROOVY 4.0.27
//RUNTIME_OPTIONS -server -Xms2g -Xmx2g -XX:+UseZGC -XX:+ZGenerational
//COMPILE_OPTIONS --tolerance=5
//FILES ../../benchmark_config.json

package io.tulip

import io.github.wfouche.tulip.api.TulipApi

class App {
    static void main(String[] args) {
        TulipApi.runTulip("benchmark_config.json")
    }
}
