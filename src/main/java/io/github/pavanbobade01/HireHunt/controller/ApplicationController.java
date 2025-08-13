package io.github.pavanbobade01.HireHunt.controller;


import io.github.pavanbobade01.HireHunt.dto.ApplicationDto;
import io.github.pavanbobade01.HireHunt.entity.Application;
import io.github.pavanbobade01.HireHunt.service.ApplicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/applications")
public class ApplicationController {

    @Autowired
    private ApplicationService applicationService;

    // Helper method to convert Entity to DTO
    private ApplicationDto convertToDto(Application application) {
        ApplicationDto dto = new ApplicationDto();
        dto.setId(application.getId());
        dto.setJobId(application.getJobId());
        dto.setJobSeekerId(application.getJobSeekerId());
        dto.setResumeUrl(application.getResumeUrl());
        dto.setCoverLetter(application.getCoverLetter());
        dto.setApplicationDate(application.getApplicationDate());
        dto.setStatus(application.getStatus());
        return dto;
    }

    // Helper method to convert DTO to Entity
    private Application convertToEntity(ApplicationDto dto) {
        Application application = new Application();
        application.setId(dto.getId());
        application.setJobId(dto.getJobId());
        application.setJobSeekerId(dto.getJobSeekerId());
        application.setResumeUrl(dto.getResumeUrl());
        application.setCoverLetter(dto.getCoverLetter());
        application.setApplicationDate(dto.getApplicationDate());
        application.setStatus(dto.getStatus());
        return application;
    }

    @PostMapping
    public ResponseEntity<ApplicationDto> submitApplication(@RequestBody ApplicationDto applicationDto) {
        Application application = convertToEntity(applicationDto);
        Application submittedApplication = applicationService.submitApplication(application);
        return ResponseEntity.ok(convertToDto(submittedApplication));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApplicationDto> getApplicationById(@PathVariable String id) {
        return applicationService.getApplicationById(id)
                .map(this::convertToDto)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/job/{jobId}")
    public ResponseEntity<List<ApplicationDto>> getApplicationsByJobId(@PathVariable String jobId) {
        List<ApplicationDto> applications = applicationService.getApplicationsByJobId(jobId).stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
        return ResponseEntity.ok(applications);
    }

    @GetMapping("/jobseeker/{jobSeekerId}")
    public ResponseEntity<List<ApplicationDto>> getApplicationsByJobSeekerId(@PathVariable String jobSeekerId) {
        List<ApplicationDto> applications = applicationService.getApplicationsByJobSeekerId(jobSeekerId).stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
        return ResponseEntity.ok(applications);
    }
}
