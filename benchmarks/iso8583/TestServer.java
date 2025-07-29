///usr/bin/env jbang "$0" "$@" ; exit $?

//DEPS org.jpos:jpos:2.1.10
//JAVA 21

// https://github.com/beckerdo/ISO-8583-Examples/blob/master/src/test/java/info/danbecker/iso8583examples/TestServer.java

import java.io.*;

import org.jpos.iso.*;
import org.jpos.util.*;
import org.jpos.iso.channel.*;
import org.jpos.iso.packager.*;

public class TestServer implements ISORequestListener {
	public static final org.slf4j.Logger jLogger = 
		org.slf4j.LoggerFactory.getLogger(TestServer.class);

	public boolean process(ISOSource source, ISOMsg msg) {
		try {
			//jLogger.info( "Received msg=" + msg );
			msg.setResponseMTI();
			msg.set(39, "00");
			source.send(msg);
		} catch (ISOException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return true;
	}

	public static void main(String[] args) throws Exception {
		Logger logger = new Logger(); // org.jpos.util
		logger.addListener(new SimpleLogListener(System.out));
		ServerChannel channel = new PostChannel(new PostPackager());
		((LogSource) channel).setLogger(logger, "channel");
		ISOServer server = new ISOServer(8000, channel, null);
		server.setLogger(logger, "server");
		server.addISORequestListener(new TestServer());
		new Thread(server).start();
	}
}
