package com.project.project.SpringSecurityauth.Config;

import static com.project.project.Enumerate.Permission.ADMIN_CREATE;
import static com.project.project.Enumerate.Permission.ADMIN_DELETE;
import static com.project.project.Enumerate.Permission.ADMIN_READ;
import static com.project.project.Enumerate.Permission.ADMIN_UPDATE;
import static com.project.project.Enumerate.Permission.USER_CREATE;
import static com.project.project.Enumerate.Permission.USER_DELETE;
import static com.project.project.Enumerate.Permission.USER_READ;
import static com.project.project.Enumerate.Permission.USER_UPDATE;
import static com.project.project.Enumerate.Role.ADMIN;
import static com.project.project.Enumerate.Role.USER;

import static org.springframework.http.HttpMethod.DELETE;
import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpMethod.PUT;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.project.project.Api.Api;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
@RequiredArgsConstructor
public class SecurityConfig {



        private final JwtAuthenticationFilter jwtAuthenticationFilter;
        private final AuthenticationProvider authenticationProvider;


        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
          httpSecurity
              .cors(corsConfiguarationSource -> corsConfiguarationSource.configurationSource(
                  corsConfigurationSource()))
              .csrf(csrf -> csrf.disable())
              .authorizeHttpRequests(authorize -> authorize
                  .requestMatchers(Api.AUTH + "/**")
                  .permitAll()
                  .requestMatchers(Api.ADMIN + "/**")
                  .hasRole(ADMIN.name())
                  .requestMatchers(GET, Api.ADMIN + "/**")
                  .hasAuthority(ADMIN_READ.name())
                  .requestMatchers(POST, Api.ADMIN + "/**")
                  .hasAuthority(ADMIN_CREATE.name())
                  .requestMatchers(PUT, Api.ADMIN + "/**")
                  .hasAuthority(ADMIN_UPDATE.name())
                  .requestMatchers(DELETE, Api.ADMIN + "/**")
                  .hasAuthority(ADMIN_DELETE.name())
                  .requestMatchers(Api.USER + "/**")
                  .hasAnyRole(ADMIN.name(), USER.name())
                  .requestMatchers(GET, Api.USER + "/**")
                  .hasAnyAuthority(ADMIN_READ.name(), USER_READ.name())
                  .requestMatchers(POST, Api.USER + "/**")
                  .hasAnyAuthority(ADMIN_CREATE.name(), USER_CREATE.name())
                  .requestMatchers(PUT, Api.USER + "/**")
                  .hasAnyAuthority(ADMIN_UPDATE.name(), USER_UPDATE.name())
                  .requestMatchers(DELETE, Api.USER + "/**")
                  .hasAnyAuthority(ADMIN_DELETE.name(), USER_DELETE.name())
                  .anyRequest().authenticated())
              .sessionManagement(session -> session
                  .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
              .authenticationProvider(authenticationProvider)
              .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
          return httpSecurity.build();
        }

        @Bean
        public CorsConfigurationSource corsConfigurationSource() {
          CorsConfiguration configuration = new CorsConfiguration();
          configuration.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));
          configuration.setAllowCredentials(true);
          configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE"));
          configuration.setAllowedOrigins(Arrays.asList(Api.REACT));
          UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
          source.registerCorsConfiguration("/**", configuration);
          return source;
        }
}
