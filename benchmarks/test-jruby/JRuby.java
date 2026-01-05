///usr/bin/env jbang "$0" "$@" ; exit $?

//DEPS org.jruby:jruby-complete:10.0.2.0

import org.jruby.Main;

public class JRuby {

    public static void main(String... args) {
        Main.main(args);
    }
}
