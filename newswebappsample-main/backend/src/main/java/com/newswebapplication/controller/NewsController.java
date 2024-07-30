package com.newswebapplication.controller;
import com.newswebapplication.service.NewsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/news")
public class NewsController {

    @Autowired
    private NewsService newsService;

    @GetMapping
    public ResponseEntity<String> getNews() {
        String newsData = newsService.getNews();
        return ResponseEntity.ok(newsData);
    }
//     public ResponseEntity<?> getNews() {
//         return ResponseEntity.ok("News data");
// }
}
