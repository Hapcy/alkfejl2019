package hu.elte.issuetracker.controller;

import hu.elte.issuetracker.model.Issue;
import hu.elte.issuetracker.repository.IssueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/issue")
public class IssueController {

    @Autowired
    private IssueRepository issueRepository;

    @GetMapping("")
    public Iterable<Issue> getIssues() {
        return issueRepository.findAll();
    }

}
