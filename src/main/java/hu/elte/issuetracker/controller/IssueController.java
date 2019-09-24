package hu.elte.issuetracker.controller;

import hu.elte.issuetracker.model.Issue;
import hu.elte.issuetracker.model.Message;
import hu.elte.issuetracker.repository.IssueRepository;
import hu.elte.issuetracker.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/issues")
public class IssueController {

    @Autowired
    private IssueRepository issueRepository;

    @Autowired
    private MessageRepository messageRepository;

    @GetMapping("")
    public Iterable<Issue> getIssues() {
        return issueRepository.findAll();
    }

    @PostMapping("")
    public ResponseEntity<Issue> createIssue(
            @RequestBody Issue issue
    ) {
        issue.setCreatedAt(LocalDateTime.now());
        issue.setModifiedAt(LocalDateTime.now());
        Issue savedIssue = issueRepository.save(issue);
        return ResponseEntity.ok(savedIssue);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteIssue(
            @PathVariable Integer id
    ) {
        try {
            issueRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/{id}/messages")
    public ResponseEntity<Message> addMessage(
            @RequestBody Message message,
            @PathVariable Integer id
    ) {
        Optional<Issue> oIssue = issueRepository.findById(id);
        if (oIssue.isPresent()) {
            Issue issue = oIssue.get();
            issue.getMessages().add(message);
            message.setIssue(issue);
            Message createdMessage = messageRepository.save(message);
            return ResponseEntity.ok(createdMessage);
        } else {
            return ResponseEntity.notFound().build();
        }

    }

}
