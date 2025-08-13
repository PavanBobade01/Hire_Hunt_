package io.github.pavanbobade01.HireHunt.controller;

import io.github.pavanbobade01.HireHunt.dto.CompanyReviewRequestDto;
import io.github.pavanbobade01.HireHunt.dto.CompanyReviewResponseDto;
import io.github.pavanbobade01.HireHunt.service.CompanyReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/company-reviews")
@RequiredArgsConstructor
@CrossOrigin(origins = "*") // Allow all origins for testing
public class CompanyReviewController {

    private final CompanyReviewService reviewService;

    @PostMapping
    public ResponseEntity<CompanyReviewResponseDto> addReview(@RequestBody CompanyReviewRequestDto dto) {
        return ResponseEntity.ok(reviewService.addReview(dto));
    }

    @GetMapping
    public ResponseEntity<List<CompanyReviewResponseDto>> getAllReviews() {
        return ResponseEntity.ok(reviewService.getAllReviews());
    }

    @GetMapping("/company/{name}")
    public ResponseEntity<List<CompanyReviewResponseDto>> getReviewsByCompany(@PathVariable String name) {
        return ResponseEntity.ok(reviewService.getReviewsByCompany(name));
    }
}
