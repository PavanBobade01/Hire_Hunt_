package io.github.pavanbobade01.HireHunt.dto;

import lombok.Data;

@Data
public class CompanyReviewResponseDto {
    private String id;
    private String companyName;
    private int rating;
    private String comment;
    private String reviewerName;
}
