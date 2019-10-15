package hu.elte.issuetracker.repository;

import hu.elte.issuetracker.model.Message;
import org.springframework.data.repository.CrudRepository;

public interface MessageRepository extends CrudRepository<Message, Integer> {
}
