///usr/bin/env jbang "$0" "$@" ; exit $?

//DEPS org.slf4j:slf4j-simple:2.0.16
//DEPS org.jruby:jruby-complete:10.0.2.0
//DEPS io.javalin:javalin:6.4.0

import org.jruby.Main;

public class JRuby {

    public static void main(String... args) {
        Main.main(args);
    }
}
