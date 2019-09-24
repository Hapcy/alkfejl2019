package hu.elte.issuetracker.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class Issue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String description;

    @Column
    @NotNull
    private String place;

    @Column
    @NotNull
    private String title;

    @Column
    @NotNull
    @Enumerated(EnumType.STRING)
    private Status status;

    public enum Status {
        NEW, DOING, DONE
    }

    @Column
    @NotNull
    @CreationTimestamp
    private LocalDateTime createdAt;

    @Column
    @NotNull
    @UpdateTimestamp
    private LocalDateTime modifiedAt;

    @OneToMany(mappedBy = "issue")
    private List<Message> messages;

    @ManyToOne
    private User user;

    @ManyToMany
    private List<Label> labels;
}
