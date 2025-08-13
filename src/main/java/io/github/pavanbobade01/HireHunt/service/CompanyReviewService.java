package io.github.pavanbobade01.HireHunt.service;

import io.github.pavanbobade01.HireHunt.dto.CompanyReviewRequestDto;
import io.github.pavanbobade01.HireHunt.dto.CompanyReviewResponseDto;
import io.github.pavanbobade01.HireHunt.entity.CompanyReview;
import io.github.pavanbobade01.HireHunt.repository.CompanyReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CompanyReviewService {

    private final CompanyReviewRepository repository;

    public CompanyReviewResponseDto addReview(CompanyReviewRequestDto dto) {
        CompanyReview review = new CompanyReview();
        review.setCompanyName(dto.getCompanyName());
        review.setReviewerName(dto.getReviewerName());
        review.setRating(dto.getRating());
        review.setComment(dto.getComment());

        return toResponseDto(repository.save(review));
    }

    public List<CompanyReviewResponseDto> getAllReviews() {
        return repository.findAll().stream()
                .map(this::toResponseDto)
                .collect(Collectors.toList());
    }

    public List<CompanyReviewResponseDto> getReviewsByCompany(String companyName) {
        return repository.findByCompanyNameIgnoreCase(companyName).stream()
                .map(this::toResponseDto)
                .collect(Collectors.toList());
    }

    private CompanyReviewResponseDto toResponseDto(CompanyReview review) {
        CompanyReviewResponseDto dto = new CompanyReviewResponseDto();
        dto.setId(review.getId());
        dto.setCompanyName(review.getCompanyName());
        dto.setReviewerName(review.getReviewerName());
        dto.setRating(review.getRating());
        dto.setComment(review.getComment());
        return dto;
    }
}
