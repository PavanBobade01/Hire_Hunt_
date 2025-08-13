package io.github.pavanbobade01.HireHunt.repository;

import io.github.pavanbobade01.HireHunt.entity.CompanyReview;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface CompanyReviewRepository extends MongoRepository<CompanyReview, String> {
    List<CompanyReview> findByCompanyNameIgnoreCase(String companyName);
}
