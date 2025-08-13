package io.github.pavanbobade01.HireHunt.repository;


import io.github.pavanbobade01.HireHunt.entity.Application;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ApplicationRepository extends MongoRepository<Application, String> {

    // Find all applications for a specific job
    List<Application> findByJobId(String jobId);

    // Find all applications submitted by a specific job seeker
    List<Application> findByJobSeekerId(String jobSeekerId);
}