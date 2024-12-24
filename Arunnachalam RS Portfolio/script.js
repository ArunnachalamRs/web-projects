window.addEventListener("scroll", () => {
        const sections = document.querySelectorAll("section"); // All sections
        const navLinks = document.querySelectorAll("header nav ul li a"); // Navigation links

        let current = "";

        // Determine which section is in view
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id"); // Get current section ID
            }
        });

        // Update active link
        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
    
    function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
    } else {
        sidebar.style.left = "0px";
    }
}
