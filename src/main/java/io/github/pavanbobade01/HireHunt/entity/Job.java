package io.github.pavanbobade01.HireHunt.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.index.TextIndexed;
import java.util.Date;

@Data
@Document(collection = "jobs")
public class Job {

    @Id
    private String id;

    @TextIndexed
    private String title;

    private String company;

    @TextIndexed
    private String description;

    private String location;

    private String jobType;

    private String salaryRange;

    private String postedByRecruiterId;

    private Date postedDate;

    private String status;
}