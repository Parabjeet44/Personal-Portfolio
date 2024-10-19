# Personal Portfolio Page

A responsive personal portfolio website that showcases projects fetched from GitHub API.

## Features

- Responsive design that works on desktop and mobile
- Dynamic project loading from GitHub API
- Interactive modal for project details
- Contact form with validation
- Skills showcase
- Clean and modern UI

Approach
1. Responsive Design
The layout of the portfolio is designed with a mobile-first approach, ensuring that it is responsive across different devices and screen sizes. The use of CSS Grid and Flexbox allows the content to adjust fluidly. The layout prioritizes a clean, minimalistic design to ensure focus on the portfolio projects and personal information. Key elements such as navigation, skill showcase, and project grids are optimized to adapt dynamically.

2. GitHub API Integration
The portfolio dynamically fetches projects from the GitHub API, showcasing your latest public repositories. The integration uses JavaScript's fetch API to request repository data and display it in a grid format. Users can view essential details, including the name, description, and languages used in the project.

3. Project Modal
Each project in the portfolio has a modal that provides more detailed information about the project, such as the description, technologies used, and live demo links. The modal opens when a project card is clicked, creating an interactive and user-friendly experience.

4. Contact Form with Validation
The contact form allows users to reach out directly through the website. The form includes client-side validation for required fields, ensuring all necessary information is provided before submission.

5. Skills Section
A skills showcase section lists relevant technical skills, presented in a visually appealing way. Each skill is rendered as a tag-style element, and the layout adapts responsively for different screen sizes.

6. UI/UX Considerations
The overall UI is designed to be modern and clean, with a focus on ease of use and readability. Key decisions include:


7. Code Structure and Cleanliness
The project is structured in a simple, maintainable way. Each component (HTML, CSS, JavaScript) is well-organized, and future modifications can be made easily.

Separation of Concerns: HTML handles structure, CSS handles styling, and JavaScript handles functionality.
CSS Variables (:root): CSS variables are used for easy customization of colors, fonts, and spacing throughout the project.

8. Performance Optimizations
The project is designed with minimal external dependencies, ensuring quick load times.
Where possible, asynchronous JavaScript methods are used to ensure API requests do not block rendering.
Static resources are optimized for fast load times, ensuring the portfolio is performant even on slower networks.



## Tech Stack

- HTML5
- CSS3 (with CSS Variables)
- JavaScript (Vanilla)
- GitHub REST API

## Project Structure

```
portfolio/
│
├── index.html      # Main HTML structure
├── styles.css      # CSS styling
├── script.js       # JavaScript functionality
└── README.md       # Documentation
```

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. Open `script.js` and replace `your-github-username` with your actual GitHub username:
   ```javascript
   const GITHUB_USERNAME = 'your-github-username';
   ```

3. Customize the content:
   - Update your name and introduction in `index.html`
   - Modify the skills list in `index.html`
   - Adjust colors in `styles.css` if desired

4. Deploy:
   - You can use GitHub Pages for hosting
   - Or deploy to any static site hosting service

## Running Locally

Simply open `index.html` in a web browser to view the portfolio.

## API Rate Limits

The GitHub API has rate limits for unauthenticated requests. For production use, consider:
- Implementing authentication
- Caching API responses
- Using a backend proxy

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Feel free to submit issues and enhancement requests.
