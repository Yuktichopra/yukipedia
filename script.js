<<<<<<< HEAD
// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hover effects for blogs
const blogArticles = document.querySelectorAll('.blog');
blogArticles.forEach(blog => {
    blog.addEventListener('mouseover', () => {
        blog.style.boxShadow = '0px 5px 15px rgba(0, 128, 0, 0.5)';
    });
    blog.addEventListener('mouseout', () => {
        blog.style.boxShadow = 'none';
    });
});
=======
// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hover effects for blogs
const blogArticles = document.querySelectorAll('.blog');
blogArticles.forEach(blog => {
    blog.addEventListener('mouseover', () => {
        blog.style.boxShadow = '0px 5px 15px rgba(0, 128, 0, 0.5)';
    });
    blog.addEventListener('mouseout', () => {
        blog.style.boxShadow = 'none';
    });
});
>>>>>>> d2bf917 (some changes about the layout)
