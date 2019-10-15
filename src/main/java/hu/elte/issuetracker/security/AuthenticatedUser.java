package hu.elte.issuetracker.security;

import hu.elte.issuetracker.model.User;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.RequestScope;

@RequestScope
@Component
@Data
@NoArgsConstructor
public class AuthenticatedUser {
    private User user;
}
