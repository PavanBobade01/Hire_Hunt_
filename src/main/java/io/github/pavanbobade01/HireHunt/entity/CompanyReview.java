package io.github.pavanbobade01.HireHunt.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Document(collection = "company_reviews")
public class CompanyReview {

    @Id
    private String id;
    private String companyName;
    private String reviewerName;
    private int rating;
    private String comment;
    private LocalDateTime createdAt = LocalDateTime.now();
}
