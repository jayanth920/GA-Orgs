# Minimal Linux Distro
FROM alpine:3.7

MAINTAINER syed

# Set working directory to /app
WORKDIR /app

# Copy current directory contents into the container at /app
ADD . /app

# Set our Java Home env variable
ENV JAVA_HOME=/usr/lib/jvm/default-jvm

# Install openjdk 8 and symlink all Java libraries
RUN apk --update add openjdk8 && \
    ln -sf "${JAVA_HOME}/bin/"* "/usr/bin/"

# Compile
RUN javac /app/src/HelloDolly.java

# ls output of our /app directory
CMD ["java", "-cp", "/app/src/", "HelloDolly"]
