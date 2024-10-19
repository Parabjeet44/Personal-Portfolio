# Personal Portfolio Page

A responsive personal portfolio website that showcases projects fetched from GitHub API.

## Features

- Responsive design that works on desktop and mobile
- Dynamic project loading from GitHub API
- Interactive modal for project details
- Contact form with validation
- Skills showcase
- Clean and modern UI

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
