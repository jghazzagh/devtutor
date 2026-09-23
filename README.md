# MCC Skills Coach

A static proof-of-concept tutoring website for McLennan Community College students. It contains two complete guided-practice units:

- Developmental Math: fractions and mixed numbers
- Integrated Reading and Writing: building effective academic paragraphs

The site uses only HTML, CSS, and JavaScript. It does not require a database, account, API key, package installation, or build command.

## Included features

- Fourteen complete lessons
- Immediate feedback for knowledge checks
- Common-error feedback for Math practice
- Multi-level Guided Help panel
- Guided paragraph builder
- Browser-based progress tracking
- MCC tutoring and Upswing referrals
- Responsive layouts for desktop, tablet, mobile, and Brightspace links
- Keyboard navigation, visible focus styles, reduced-motion support, and print styles

## Preview locally

Open `index.html` directly in a current browser, or serve the folder with any local web server.

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload the entire contents of this folder to the repository root.
3. Open the repository's **Settings**.
4. Select **Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and the root `/(root)` folder.
7. Save the setting and wait for GitHub to provide the public URL.

The site uses hash-based navigation, so it works on GitHub Pages without server routing rules.

## Brightspace

The simplest initial approach is to add the published GitHub Pages URL as a web link that opens in a new tab. The site can also be embedded in a responsive iframe if MCC's Brightspace security settings allow the GitHub Pages domain.

Replace the example URL below with the published GitHub Pages address:

```html
<div style="position:relative;width:100%;min-height:800px;">
  <iframe
    src="https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/"
    title="MCC Skills Coach"
    loading="lazy"
    style="width:100%;height:85vh;min-height:800px;border:0;border-radius:10px;"
    allow="clipboard-write">
  </iframe>
</div>
```

## Privacy

Lesson progress and paragraph drafts are saved only in the student's browser using local storage. They are not transmitted to MCC, an instructor, or a third-party service. Clearing browser data or switching devices removes or hides that progress.

## Updating content

- Lesson content and feedback: `assets/js/content.js`
- Navigation and interactive behavior: `assets/js/app.js`
- MCC visual styles: `assets/css/styles.css`
- Page shell and metadata: `index.html`

## Instructional references

The original instructional content was informed by:

- CalculatorSoup mixed-number calculator and explanations
- Excelsior Online Writing Lab paragraphing resources
- MCC Academic Support and Tutoring information

Review institutional links and contact information before a production launch.
