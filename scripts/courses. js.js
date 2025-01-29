// Filter Courses
document.querySelectorAll('.filter-tag').forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.filter-tag').forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get filter value
        const filter = this.dataset.filter;
        
        // Filter courses
        filterCourses(filter);
    });
});

function filterCourses(filter) {
    const courses = document.querySelectorAll('.course-card');
    
    courses.forEach(course => {
        const tags = course.dataset.tags.split(' ');
        
        if(filter === 'all' || tags.includes(filter)) {
            course.style.display = 'block';
        } else {
            course.style.display = 'none';
        }
    });
}

// Apply Button Handler
document.querySelectorAll('.apply-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const courseTitle = this.closest('.course-card').querySelector('h3').textContent;
        alert(`Applying for: ${courseTitle}`);
    });
});

// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Newsletter Form Submission
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    alert(`Thanks for subscribing! We've sent a confirmation to ${email}`);
    this.reset();
});

