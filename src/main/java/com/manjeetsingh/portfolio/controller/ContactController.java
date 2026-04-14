package com.manjeetsingh.portfolio.controller;

import com.manjeetsingh.portfolio.dto.ContactRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.logging.Logger;

@RestController
@RequestMapping("/api")
public class ContactController {

    private static final Logger log = Logger.getLogger(ContactController.class.getName());

    @PostMapping("/contact")
    public ResponseEntity<Map<String, String>> handleContact(@RequestBody ContactRequest request) {
        // Log the received message (extend this to send email if needed)
        log.info("=== NEW CONTACT FORM SUBMISSION ===");
        log.info(request.toString());
        log.info("===================================");

        return ResponseEntity.ok(Map.of("status", "success", "message", "Message received!"));
    }
}
