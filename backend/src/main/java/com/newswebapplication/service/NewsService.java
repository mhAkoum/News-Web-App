package com.newswebapplication.service;

import org.springframework.web.client.RestTemplate;
import org.springframework.stereotype.Service;

@Service
public class NewsService {
    private final RestTemplate restTemplate = new RestTemplate();
    private final String apiKey = "ff226a0cb5fd4163a410de53d7dd7013";
    private final String apiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + apiKey;

    public String getNews() {
        return restTemplate.getForObject(apiUrl, String.class);
    }
}
