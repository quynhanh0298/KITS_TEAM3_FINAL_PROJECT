package edu.kits.finalproject.onlinelearningwebapp.entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.Collections;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RequiredArgsConstructor
public enum Role {

    USER(Collections.emptySet()),
    STUDENT(
            Set.of(
                    Permission.STUDENT_UPDATE,
                    Permission.STUDENT_DELETE,
                    Permission.STUDENT_READ,
                    Permission.STUDENT_CREATE
            )
    ),
    TUTOR(
            Set.of(
                    Permission.TUTOR_UPDATE,
                    Permission.TUTOR_CREATE,
                    Permission.TUTOR_DELETE,
                    Permission.TUTOR_READ
            )
    )

    ;

    @Getter
    private final Set<Permission> permissions;

    public List<SimpleGrantedAuthority> getAuthorities() {
        var authorities = getPermissions()
                .stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
                .collect(Collectors.toList());
        authorities.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return authorities;
    }
}
