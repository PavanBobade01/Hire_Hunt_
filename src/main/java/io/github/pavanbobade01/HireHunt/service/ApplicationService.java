package io.github.pavanbobade01.HireHunt.service;

import io.github.pavanbobade01.HireHunt.entity.Application;
import io.github.pavanbobade01.HireHunt.repository.ApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ApplicationService {

    @Autowired
    private ApplicationRepository applicationRepository;

    public Application submitApplication(Application application) {
        // You can add logic here to check if the job exists, etc.
        return applicationRepository.save(application);
    }

    public Optional<Application> getApplicationById(String id) {
        return applicationRepository.findById(id);
    }

    public List<Application> getApplicationsByJobId(String jobId) {
        return applicationRepository.findByJobId(jobId);
    }

    public List<Application> getApplicationsByJobSeekerId(String jobSeekerId) {
        return applicationRepository.findByJobSeekerId(jobSeekerId);
    }

    public Application updateApplicationStatus(String id, String status) {
        Optional<Application> optionalApplication = applicationRepository.findById(id);
        if (optionalApplication.isPresent()) {
            Application application = optionalApplication.get();
            application.setStatus(status);
            return applicationRepository.save(application);
        }
        return null; // Or throw a custom exception
    }

    public void deleteApplication(String id) {
        applicationRepository.deleteById(id);
    }
}
