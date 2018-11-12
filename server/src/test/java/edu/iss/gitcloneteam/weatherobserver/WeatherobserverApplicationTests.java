package edu.iss.gitcloneteam.weatherobserver;

import edu.iss.gitcloneteam.weatherobserver.utils.ProjectVersionReader;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;

import java.io.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class WeatherobserverApplicationTests {

	public WeatherobserverApplicationTests() {
	}

	@Test
	public void contextLoads() {
	}

	// simple tests
	@Test
	public void readVersion() {
		String expectedVersion = "0.0.3-test";
		String fileName = "src/test/resources/git_version_test.txt";

		try (Writer writer = new BufferedWriter(new OutputStreamWriter(
				new FileOutputStream(fileName), "utf-8"))) {
			writer.write(expectedVersion);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

		ProjectVersionReader projectVersionReader = new ProjectVersionReader();
		projectVersionReader.setFileName(fileName);
		String testVersion = projectVersionReader.readVersion();

		assertEquals(expectedVersion, testVersion);
	}

}
