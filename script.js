// Replace with your GitHub username
const GITHUB_USERNAME = 'Parabjeet44';
const GITHUB_API = 'https://api.github.com';

// Function to fetch GitHub repositories with timeout
async function fetchProjects() {
    const loading = document.getElementById('loading');
    const projectGrid = document.getElementById('projectGrid');
    
    try {
        loading.style.display = 'block';
        
        // Add timeout for slow connections
        const fetchWithTimeout = async (url, timeout = 5000) => {
            const controller = new AbortController();
            const id = setTimeout(() => controller.abort(), timeout);
            try {
                const response = await fetch(url, { signal: controller.signal });
                clearTimeout(id);
                return response;
            } catch (error) {
                clearTimeout(id);
                throw error;
            }
        };

        const response = await fetchWithTimeout(`${GITHUB_API}/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc`);
        if (!response.ok) throw new Error('Failed to fetch projects');
        
        const repos = await response.json();
        console.log('Fetched repos:', repos); // Debug log
        
        if (repos.length === 0) {
            projectGrid.innerHTML = '<p>No projects found.</p>';
            return;
        }

        // Filter and map repositories to project cards
        const projects = repos
            .filter(repo => !repo.fork && !repo.private) // Filter out forks and private repos
            .slice(0, 6) // Display top 6 projects
            .map(repo => `
                <div class="project-card" data-repo="${repo.name}">
                    <h3>${repo.name}</h3>
                    <p>${repo.description || 'No description available.'}</p>
                    <div class="project-languages" id="lang-${repo.name}">
                        Loading languages...
                    </div>
                </div>
            `).join('');

        projectGrid.innerHTML = projects;

        // Fetch languages for each repository
        repos.forEach(async (repo) => {
            try {
                const langResponse = await fetch(repo.languages_url);
                const languages = await langResponse.json();
                const langDiv = document.getElementById(`lang-${repo.name}`);
                if (langDiv) {
                    langDiv.innerHTML = Object.keys(languages)
                        .map(lang => `<span class="language-tag">${lang}</span>`)
                        .join('');
                }
            } catch (error) {
                console.error(`Error fetching languages for ${repo.name}:`, error);
            }
        });

        // Add click handlers for project cards
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', () => showProjectDetails(card.dataset.repo));
        });

    } catch (error) {
        projectGrid.innerHTML = '<p>Error loading projects. Please check your connection and try again.</p>';
        console.error('Error loading projects:', error);
    } finally {
        loading.style.display = 'none';
    }
}

// Function to show project details in modal
async function showProjectDetails(repoName) {
    try {
        const response = await fetch(`${GITHUB_API}/repos/${GITHUB_USERNAME}/${repoName}`);
        if (!response.ok) throw new Error('Failed to fetch project details');
        
        const repo = await response.json();
        
        document.getElementById('modalTitle').textContent = repo.name;
        document.getElementById('modalDescription').textContent = repo.description || 'No description available.';
        
        const repoLink = document.getElementById('repoLink');
        repoLink.href = repo.html_url;

        
        document.getElementById('projectModal').style.display = 'block';
    } catch (error) {
        console.error('Error fetching project details:', error);
        alert('Error loading project details. Please try again later.');
    }
}

// Contact form validation
function validateForm(event) {
    event.preventDefault();
    let isValid = true;
    
    // Reset errors
    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    // Validate name
    const name = document.getElementById('name').value.trim();
    if (!name) {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }

    // Validate email
    const email = document.getElementById('email').value.trim();
    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        isValid = false;
    }

    // Validate message
    const message = document.getElementById('message').value.trim();
    if (!message) {
        document.getElementById('messageError').textContent = 'Message is required';
        isValid = false;
    }

    if (isValid) {
        // Here you would typically send the form data to a server
        alert('Message sent successfully!');
        document.getElementById('contactForm').reset();
    }
}

// Initialize mobile events
function initializeMobileEvents() {
    let touchstart = 0;
    let touchend = 0;

    document.addEventListener('touchstart', function(e) {
        touchstart = e.timeStamp;
    });

    document.addEventListener('touchend', function(e) {
        touchend = e.timeStamp;
        
        if (touchend - touchstart < 200) {
            if (e.target === document.getElementById('projectModal')) {
                document.getElementById('projectModal').style.display = 'none';
            }
        }
    });

    document.body.addEventListener('touchmove', function(e) {
        if (document.getElementById('projectModal').style.display === 'block') {
            e.preventDefault();
        }
    }, { passive: false });

    // Fix iOS viewport
    function fixIOSViewport() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    window.addEventListener('resize', fixIOSViewport);
    fixIOSViewport();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    fetchProjects();
    initializeMobileEvents();
    
    document.getElementById('contactForm').addEventListener('submit', validateForm);
    
    document.getElementById('closeModal').addEventListener('click', () => {
        document.getElementById('projectModal').style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === document.getElementById('projectModal')) {
            document.getElementById('projectModal').style.display = 'none';
        }
    });
});