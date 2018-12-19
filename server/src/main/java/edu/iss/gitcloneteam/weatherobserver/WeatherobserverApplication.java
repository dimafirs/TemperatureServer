package edu.iss.gitcloneteam.weatherobserver;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.retry.annotation.EnableRetry;
import org.springframework.retry.backoff.BackOffPolicy;
import org.springframework.retry.backoff.ExponentialBackOffPolicy;
import org.springframework.retry.backoff.FixedBackOffPolicy;
import org.springframework.retry.policy.SimpleRetryPolicy;
import org.springframework.retry.support.RetryTemplate;

@SpringBootApplication
public class WeatherobserverApplication {

	public static void main(String[] args) {
		SpringApplication.run(WeatherobserverApplication.class, args);
	}

	@Bean
	public RetryTemplate retryTemplate() {
		RetryTemplate retryTemplate = new RetryTemplate();

		ExponentialBackOffPolicy backOffPolicy = new ExponentialBackOffPolicy();
		backOffPolicy.setInitialInterval(1000);
		backOffPolicy.setMultiplier(2.0);
		backOffPolicy.setMaxInterval(60000);
		retryTemplate.setBackOffPolicy(backOffPolicy);

		SimpleRetryPolicy retryPolicy = new SimpleRetryPolicy();
		retryPolicy.setMaxAttempts(100);
		retryTemplate.setRetryPolicy(retryPolicy);

		return retryTemplate;
	}
}
