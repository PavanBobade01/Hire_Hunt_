package io.github.pavanbobade01.HireHunt.repository;

import io.github.pavanbobade01.HireHunt.entity.Job;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobRepository extends MongoRepository<Job, String> {

    List<Job> findByLocationIgnoreCase(String location);

    List<Job> findByJobType(String jobType);

    List<Job> findByPostedByRecruiterId(String recruiterId);

    List<Job> findByTitleContainingIgnoreCaseOrCompanyContainingIgnoreCase(String title, String company);
}