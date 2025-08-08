///usr/bin/env jbang "$0" "$@" ; exit $?
//DEPS io.github.wfouche.tulip:tulip-runtime:2.1.8
//DEPS org.slf4j:slf4j-api:2.0.17
//DEPS ch.qos.logback:logback-core:1.5.18
//DEPS ch.qos.logback:logback-classic:1.5.18
//SOURCES KotlinHttpUser.kt
//JAVA 21
//KOTLIN 2.1.21
//RUNTIME_OPTIONS -server -Xms2g -Xmx2g -XX:+UseZGC -XX:+ZGenerational
//COMPILE_OPTIONS -progressive
//FILES ../../benchmark_config.json

package io.tulip

import io.github.wfouche.tulip.api.TulipApi

class App() {
    companion object {
        @JvmStatic
        fun main(args: Array<String>) {
            TulipApi.runTulip("benchmark_config.json")
        }
    }
}
