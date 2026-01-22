///usr/bin/env jbang "$0" "$@" ; exit $?
//DEPS io.github.wfouche.tulip:tulip-runtime:2.1.17
//SOURCES APIUser.java
//JAVA 21
//FILES ../../benchmark_config.json
//FILES ../../logback.xml

package io.tulip;

import io.github.wfouche.tulip.api.TulipApi;

public class App {
   public static void main(String[] args) {
      TulipApi.runTulip("benchmark_config.json");
   }
}
