package io.github.pavanbobade01.HireHunt.dto;

import lombok.Data;

@Data
public class CompanyReviewRequestDto {
    private String companyName;
    private int rating;
    private String comment;
    private String reviewerName;
}
