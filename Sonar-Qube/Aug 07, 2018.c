mvn clean org.jacoco:jacoco-maven-plugin:prepare-agent install

mvn clean install sonar:sonar -Dsonar.login=<user_token>

<plugin>
	<groupId>org.sonarsource.scanner.maven</groupId>
	<artifactId>sonar-maven-plugin</artifactId>
	<version>3.10.0.2594</version>
</plugin>
<plugin>
	<groupId>org.jacoco</groupId>
	<artifactId>jacoco-maven-plugin</artifactId>
	<version>0.8.11</version>
	<executions>
		<execution>
			<id>prepare-agent</id>
			<goals>
				<goal>prepare-agent</goal>
			</goals>
		</execution>
		<execution>
			<id>report</id>
				<goals>
					<goal>report</goal>
				</goals>
		</execution>
	</executions>
</plugin>