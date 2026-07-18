package com.runningmedian.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI runningMedianOpenAPI() {

        return new OpenAPI()

                .info(

                        new Info()

                                .title("Running Median Visualizer API")

                                .description("""
                                        REST API for the Running Median Visualizer.

                                        This API demonstrates the Two Heap Algorithm
                                        for maintaining the running median of a stream
                                        of numbers in O(log n) insertion time and
                                        O(1) median retrieval.
                                        """)

                                .version("1.0.0")

                                .contact(

                                        new Contact()

                                                .name("Raghunath Toparam")

                                                .email("your-email@example.com")

                                                .url("https://github.com/your-github")
                                )

                                .license(

                                        new License()

                                                .name("MIT License")
                                )

                )

                .externalDocs(

                        new ExternalDocumentation()

                                .description("Project Repository")

                                .url("https://github.com/your-github/RunningMedianVisualizer")
                );

    }

}