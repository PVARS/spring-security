package pvars.springsecurity.models.form;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

public class LoginForm {
    @NotBlank(message = "Username field should not be empty")
    @Size(min = 3, max = 50, message = "Should be in between 3 - 50")
    private String username;

    @NotBlank(message = "Password field should not be empty")
    @Size(min = 3, max = 50, message = "Should be in between 3 - 50")
    private String password;

    public String getUsername () {
        return username;
    }

    public void setUsername (String username) {
        this.username = username;
    }

    public String getPassword () {
        return password;
    }

    public void setPassword (String password) {
        this.password = password;
    }

    @Override
    public String toString () {
        return "LoginForm{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
