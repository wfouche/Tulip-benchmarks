GRADLE_VERSION=9.3.1

./gradlew --no-daemon wrapper --gradle-version $GRADLE_VERSION && ./gradlew wrapper

