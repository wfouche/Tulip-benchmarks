rm -f ./App
jbang cache clear
sdk use java 25.0.2-graal
jbang export native io/tulip/App.java
