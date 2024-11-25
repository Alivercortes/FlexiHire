



window.addEventListener('DOMContentLoaded', () => {
    const jobsContainer = document.getElementById('jobsContainer');
    const jobs = JSON.parse(localStorage.getItem('jobs')) || [];

    if (jobs.length === 0) {
        jobsContainer.innerHTML = '<p>No jobs have been posted yet.</p>';
    } else {
        jobs.forEach((job) => {
            const jobCard = document.createElement('div');
            jobCard.className = 'job-card';

            jobCard.innerHTML = `
                <h3>${job.category}</h3>
                <p>${job.details}</p>
            `;

            jobsContainer.appendChild(jobCard);
        });
    }
});
