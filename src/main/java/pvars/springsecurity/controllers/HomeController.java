package pvars.springsecurity.controllers;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import pvars.springsecurity.models.form.LoginForm;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

@Controller
public class HomeController implements WebMvcConfigurer {
    @GetMapping("/")
    public String home(){
        return "home";
    }

    @GetMapping("/admin")
    public String admin(){
        return "admin";
    }

    @GetMapping("/member")
    public String member(){
        return "member";
    }

    @GetMapping("/login")
    public String login(LoginForm loginForm) {
        return "login";
    }

    @PostMapping("/handle")
    public String handleLogin(Model model, @Valid LoginForm loginForm, BindingResult bindingResult){
        if (bindingResult.hasErrors()){
            return "redirect:/login";
        }

        model.addAttribute("user", loginForm.getUsername());
        return "login";
    }

    @GetMapping("/403")
    public String accessDenied(){
        return "403";
    }

    @GetMapping("/logout")
    public String logout (HttpServletRequest request, HttpServletResponse response, RedirectAttributes redirectAttributes) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication != null){
            redirectAttributes.addFlashAttribute("MESSAGES", "You have been logged out!");

            new SecurityContextLogoutHandler().logout(request, response, authentication);
        }

        return "redirect:/login";
    }
}
