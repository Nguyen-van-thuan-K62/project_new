document.addEventListener("DOMContentLoaded", function () {

    // navbar trôi trên máy tính và input_search trên moblie, ipad
    let currentScrollHandler = null;
    function handleScrollEvents() {
        let navbar = document.getElementById("navbar");
        let search = document.getElementById("div_input_search");

        let lastScrollTop = 0;
        const SCROLL_THRESHOLD = 80;

        function desktopScroll() {
            let currentScroll = window.scrollY;
            if (currentScroll < lastScrollTop) {
                navbar.style.transform = "translateY(0)";
                navbar.style.position = "fixed";
                navbar.style.top = "0";
                navbar.style.left = "0";
            } else if (currentScroll - lastScrollTop > SCROLL_THRESHOLD) {
                navbar.style.transform = "translateY(-100%)";
            }
            if (currentScroll === 0) {
                navbar.removeAttribute("style");
                navbar.style.backgroundColor = "rgb(138, 170, 138)";
                navbar.style.height = "40px";
            }
            lastScrollTop = currentScroll;
        }

        function mobileScroll() {
            let currentScroll = window.scrollY;
            if (currentScroll < lastScrollTop) {
                search.style.transform = "translateY(0)";
                search.style.position = "fixed";
                search.style.top = "0";
                search.style.left = "0";
            } else if (currentScroll - lastScrollTop > SCROLL_THRESHOLD) {
                search.style.transform = "translateY(-100%)";
            }
            if (currentScroll === 0) {
                search.removeAttribute("style");
            }
            lastScrollTop = currentScroll;
        }

        if (currentScrollHandler) {
            window.removeEventListener("scroll", currentScrollHandler);
        }

        if (window.innerWidth > 992 && navbar) {
            currentScrollHandler = desktopScroll;
        } else if (window.innerWidth <= 992 && search) {
            currentScrollHandler = mobileScroll;
        }

        if (currentScrollHandler) {
            window.addEventListener("scroll", currentScrollHandler);
        }
    }

    handleScrollEvents();
    window.addEventListener("resize", handleScrollEvents);

    document.getElementById("exit").addEventListener("click", function() {
        document.getElementById("navbarNav").classList.add("hidden");
    });
    
    //click navbar điện thoại
    document.getElementById("menuButton").addEventListener("click", function() {
        document.getElementById("navbarNav").classList.remove("hidden");
    });
    
    //ví trị trang trên máy tính 
    document.querySelectorAll(".nav-link").forEach(item => {
        item.addEventListener("click", function() {
            document.querySelectorAll(".nav-link").forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });
    
    //tooltip cart của section_card
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
});


