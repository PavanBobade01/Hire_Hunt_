package io.github.pavanbobade01.HireHunt.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

@Data
@NoArgsConstructor
public class ApplicationDto {

    private String id;
    private String jobId;
    private String jobSeekerId;
    private String resumeUrl;
    private String coverLetter;
    private Date applicationDate;
    private String status;
}