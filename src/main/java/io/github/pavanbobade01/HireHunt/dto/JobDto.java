package io.github.pavanbobade01.HireHunt.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

@Data
@NoArgsConstructor
public class JobDto {

    private String id;
    private String title;
    private String company;
    private String location;
    private String description;
    private String jobType;
    private String salaryRange;
    private Date postedDate;
}