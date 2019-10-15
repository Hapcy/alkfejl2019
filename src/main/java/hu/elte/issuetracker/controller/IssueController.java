package hu.elte.issuetracker.controller;

import hu.elte.issuetracker.model.Issue;
import hu.elte.issuetracker.model.Message;
import hu.elte.issuetracker.repository.IssueRepository;
import hu.elte.issuetracker.repository.MessageRepository;
import hu.elte.issuetracker.security.AuthenticatedUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/issues")
public class IssueController {

    @Autowired
    private AuthenticatedUser authenticatedUser;

    @Autowired
    private IssueRepository issueRepository;

    @Autowired
    private MessageRepository messageRepository;

    @Secured({"ROLE_USER", "ROLE_ADMIN"})
    @GetMapping("")
    public Iterable<Issue> getIssues() {
        return issueRepository.findAll();
    }

    @Secured({ "ROLE_USER", "ROLE_ADMIN" })
    @PostMapping("")
    public ResponseEntity<Issue> createIssue(
            @RequestBody Issue issue
    ) {
        issue.setUser(authenticatedUser.getUser());
        Issue savedIssue = issueRepository.save(issue);
        return ResponseEntity.ok(savedIssue);
    }

    @Secured({ "ROLE_ADMIN" })
    @PatchMapping("/{id}")
    public ResponseEntity<Issue> modifyIssue(
            @PathVariable Integer id,
            @RequestBody Issue issue
    ) {
        Optional<Issue> oIssue = issueRepository.findById(id);
        if (oIssue.isPresent()) {
            if (issue.getStatus() == null) {
                return ResponseEntity.badRequest().build();
            }
            Issue oldIssue = oIssue.get();
            oldIssue.setStatus(issue.getStatus());
            Issue savedIssue = issueRepository.save(oldIssue);

            /*
            issue.setId(oldIssue.getId());
            issue.setMessages(oldIssue.getMessages());
            ...
             */

            return ResponseEntity.ok(savedIssue);
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @Secured({ "ROLE_USER", "ROLE_ADMIN" })
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
