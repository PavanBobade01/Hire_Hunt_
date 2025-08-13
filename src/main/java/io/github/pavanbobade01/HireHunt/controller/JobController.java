package io.github.pavanbobade01.HireHunt.controller;

import io.github.pavanbobade01.HireHunt.dto.JobDto;
import io.github.pavanbobade01.HireHunt.entity.Job;
import io.github.pavanbobade01.HireHunt.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/jobs")
@CrossOrigin(origins = "http://localhost:3000") // ✅ Added CORS for React frontend
public class JobController {

    @Autowired
    private JobService jobService;

    private JobDto convertToDto(Job job) {
        JobDto jobDto = new JobDto();
        jobDto.setId(job.getId());
        jobDto.setTitle(job.getTitle());
        jobDto.setCompany(job.getCompany());
        jobDto.setLocation(job.getLocation());
        jobDto.setDescription(job.getDescription());
        jobDto.setJobType(job.getJobType());
        jobDto.setSalaryRange(job.getSalaryRange());
        jobDto.setPostedDate(job.getPostedDate());
        return jobDto;
    }

    private Job convertToEntity(JobDto jobDto) {
        Job job = new Job();
        job.setId(jobDto.getId());
        job.setTitle(jobDto.getTitle());
        job.setCompany(jobDto.getCompany());
        job.setLocation(jobDto.getLocation());
        job.setDescription(jobDto.getDescription());
        job.setJobType(jobDto.getJobType());
        job.setSalaryRange(jobDto.getSalaryRange());
        job.setPostedDate(jobDto.getPostedDate());
        return job;
    }

    @PreAuthorize("hasRole('RECRUITER')")
    @PostMapping
    public ResponseEntity<JobDto> createJob(@RequestBody JobDto jobDto) {
        Job jobToCreate = convertToEntity(jobDto);
        Job createdJob = jobService.createJob(jobToCreate);
        return ResponseEntity.ok(convertToDto(createdJob));
    }

    @GetMapping
    public ResponseEntity<List<JobDto>> getAllJobs() {
        List<JobDto> jobs = jobService.getAllJobs().stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
        return ResponseEntity.ok(jobs);
    }

    @GetMapping("/{id}")
    public ResponseEntity<JobDto> getJobById(@PathVariable String id) {
        Optional<Job> job = jobService.getJobById(id);
        return job.map(this::convertToDto)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PreAuthorize("hasRole('RECRUITER')")
    @PutMapping("/{id}")
    public ResponseEntity<JobDto> updateJob(@PathVariable String id, @RequestBody JobDto jobDto) {
        Job jobToUpdate = convertToEntity(jobDto);
        Job updatedJob = jobService.updateJob(id, jobToUpdate);
        if (updatedJob != null) {
            return ResponseEntity.ok(convertToDto(updatedJob));
        }
        return ResponseEntity.notFound().build();
    }

    @PreAuthorize("hasRole('RECRUITER')")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJob(@PathVariable String id) {
        jobService.deleteJob(id);
        return ResponseEntity.noContent().build();
    }
}
