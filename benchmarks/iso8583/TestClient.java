//DEPS org.jpos:jpos:2.1.10
//JAVA 21

import org.jpos.iso.*;
import org.jpos.iso.channel.ASCIIChannel;
import org.jpos.iso.channel.PostChannel;
import org.jpos.iso.packager.GenericPackager;
import org.jpos.iso.packager.PostPackager;

import java.io.IOException;

public class TestClient {

    public static void main(String[] args) throws IOException {
        try {
            // 1. Define the ISO 8583 Message Structure (Packager)
            // Ensure iso8583.xml is in your classpath or provide the full path
            ISOPackager packager = new PostPackager(); //("postpack.xml");

            // 2. Create the ISO 8583 Message
            ISOMsg isoMsg = new ISOMsg();
            isoMsg.setMTI("0200"); // Financial Transaction Request
            isoMsg.set(3, "000000"); // Processing Code
            isoMsg.set(4, "000000010000"); // Amount, Transaction (e.g., 100.00)
            isoMsg.set(11, ISOUtil.zeropad(Integer.toString(123456), 6)); // System Trace Audit Number
            isoMsg.set(41, "12345678"); // Card Acceptor Terminal Identification

            // 3. Establish a Communication Channel
            String hostname = "localhost"; // Replace with your server's IP/hostname
            int port = 8000; // Replace with your server's port
            PostChannel channel = new PostChannel(hostname, port, packager);

            // 4. Send the Message
            channel.connect();
            channel.send(isoMsg);
            System.out.println("Sent ISO 8583 message.");

            // 5. Receive the Response
            ISOMsg response = channel.receive();
            System.out.println("Received ISO 8583 response:");
            response.dump(System.out, "");

        } catch (ISOException e) {
            e.printStackTrace();
        } finally {
            // Ensure the channel is disconnected
            // This would typically be handled within a try-with-resources or explicit finally block
        }
    }
}