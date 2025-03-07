document.addEventListener("DOMContentLoaded", function () {
    if(window.innerWidth > 820){
        let navbar = document.getElementById("navbar");
        let lastScrollTop = 0;
        const SCROLL_THRESHOLD = 80;

        if (!navbar) return;

        window.addEventListener("scroll", function () {
            let currentScroll = window.scrollY;

            if (currentScroll < lastScrollTop) {
                navbar.style.transform = "translateY(0)";
                navbar.style.position = "fixed";
                navbar.style.top = "0";
                navbar.style.left = "0";
            }else if (currentScroll - lastScrollTop > SCROLL_THRESHOLD){
                navbar.style.transform = "translateY(-100%)";
            }

            if (currentScroll === 0) {
                navbar.removeAttribute("style");
                navbar.style.backgroundColor = "rgb(138, 170, 138)";
            }

            lastScrollTop = currentScroll;
        });
    }

    if(window.innerWidth <= 820){
        let search = document.getElementById("div_input_search");
        let lastScrollTop = 0;
        const SCROLL_THRESHOLD = 80;

        if (!search) return;

        window.addEventListener("scroll", function () {
            let currentScroll = window.scrollY;

            if (currentScroll < lastScrollTop) {
                search.style.transform = "translateY(0)";
                search.style.position = "fixed";
                search.style.top = "0";
                search.style.left = "0";
            }else if (currentScroll - lastScrollTop > SCROLL_THRESHOLD){
                search.style.transform = "translateY(-100%)";
            }

            if (currentScroll === 0) {
                search.removeAttribute("style");
            }

            lastScrollTop = currentScroll;
        });
    }

    document.getElementById("exit").addEventListener("click", function() {
        document.getElementById("navbarNav").classList.add("hidden");
    });

    document.getElementById("menuButton").addEventListener("click", function() {
        document.getElementById("navbarNav").classList.remove("hidden");
    });

    document.querySelectorAll(".nav-link").forEach(item => {
        item.addEventListener("click", function() {
            document.querySelectorAll(".nav-link").forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });

    
});
