# julianespada.com

Personal site and résumé for Julian Espada, Lead Software Engineer.

A static site (plain HTML, CSS and JavaScript, no build step), based on the
[vCard](https://github.com/codewithsadee/vcard-personal-portfolio) template by codewithsadee.

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Layout

- `index.html` holds every page. The URL hash picks which one shows (`#about`, `#resume`, `#portfolio`, `#blog`, `#contact`).
- `assets/` holds styles, scripts, fonts and images.
- `files/` is gitignored. The web server serves it for downloads that live outside version control, such as the résumé PDF (`files/Julian-Espada-Resume.pdf`).

## License

Copyright (C) 2025 Julian Espada.

The site code is licensed under the GNU General Public License, version 2 only; see [LICENSE](LICENSE).

Parts of the code come from the vCard template and remain available under their original MIT license, which is kept in [LICENSE-vcard-template](LICENSE-vcard-template). The inline icons come from [Ionicons](https://ionic.io/ionicons) (MIT) and [Simple Icons](https://simpleicons.org) (CC0). The Poppins font files are under the SIL Open Font License.

The personal content (biography, résumé details and images of Julian Espada) isn't covered by these licenses.
