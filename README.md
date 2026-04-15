# Lindong Artist Website

Static bilingual portfolio website for Lindong, prepared for GitHub Pages deployment.

## Local Preview

Run the site locally:

```bash
cd "/Users/lindong/Documents/日本潮流股票分析/艺术世界"
python3 -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000
```

## GitHub Pages Deployment

This repo includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

### 1. Local Git Status

Local git initialization and the first commit are already done in this workspace.

Current branch: `main`

Current initial commit:

```text
3bb34e8 Initial artist website for GitHub Pages
```

### 2. Create an Empty GitHub Repository

Create a new repository on GitHub, then connect it:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 3. Enable GitHub Pages

In the GitHub repository:

- Open `Settings`
- Open `Pages`
- Under `Build and deployment`, choose `GitHub Actions`

After pushing to `main`, GitHub will deploy the site automatically.

## Project Structure

- `index.html`: main page structure
- `styles.css`: visual system and responsive layout
- `script.js`: bilingual content switching and work gallery behavior
- `assets/works/`: artwork images extracted from the PDF
