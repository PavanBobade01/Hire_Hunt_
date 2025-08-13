package io.github.pavanbobade01.HireHunt.entity;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;

@Data
@Document(collection = "applications")
public class Application {

    @Id
    private String id;
    private String jobId; // Link to the job being applied for
    private String jobSeekerId; // Link to the user who applied
    private String resumeUrl; // A URL to the user's resume
    private String coverLetter;
    private Date applicationDate;
    private String status; // e.g., "Submitted", "Under Review", "Hired"
}