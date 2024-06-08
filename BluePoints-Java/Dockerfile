FROM alpine/java:22-jre

ARG PROFILE=homologacao

ENV SPRING_PROFILES_ACTIVE=$PROFILE

EXPOSE 8080

WORKDIR /app

COPY target/ ./

CMD ["java", "-jar", "bluepoints.jar"]
