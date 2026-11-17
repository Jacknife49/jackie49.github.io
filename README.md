# Uddalak Mukherjee — academic website

Built with Hugo and [Stack v4.0.3](https://github.com/CaiJimmy/hugo-theme-stack), with an academic homepage layout.

## Edit the content

- `content/_index.md`: homepage biography and research introduction.
- `content/research.md`: research interests.
- `content/background.md`: academic background.
- `content/acknowledgements.md`: acknowledgements.
- `config/_default/config.toml`: name and base URL.
- `config/_default/params.toml`: sidebar description and appearance.
- `assets/scss/custom.scss`: custom appearance.
- `layouts/home.html`: homepage layout.

Sample posts and starter pages are retained as drafts and are not published. Run the preview without `-D` to exclude them.

## Preview

Use Hugo **0.169.0 Extended**, plus Git, Go, and Dart Sass (for the theme's SCSS).

```bash
hugo server --bind 0.0.0.0
```

In Codespaces, open port 1313 from the Ports panel. If changes were made through GitHub, stop your preview, commit or stash any local edits, and pull before restarting.

## Publishing

GitHub repository Settings → Pages → Source must be **GitHub Actions**.

The deployment workflow builds pull requests for validation and publishes pushes to master/main. This repository's project URL is:

https://jacknife49.github.io/jackie49.github.io/

For the shorter URL https://jacknife49.github.io/, the repository would need to be renamed to Jacknife49.github.io and the base URL updated accordingly.

The monogram in the sidebar can be replaced with a photo by setting `sidebar.avatar` to an image in `assets/` and removing the monogram rule in `custom.scss`. No CV or email address is published until supplied for the website.
