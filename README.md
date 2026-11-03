# julianespada.com

Note: we encourage you to add the below to your existing `README.md` on your GitHub project.

## We're Using GitHub Under Protest

This project is currently hosted on GitHub.  This is not ideal; GitHub is a
proprietary, trade-secret system that is not Free and Open Souce Software
(FOSS).  We are deeply concerned about using a proprietary system like GitHub
to develop our FOSS project.  We have an
[open {bug ticket, mailing list thread, etc.} ](INSERT_LINK) where the
project contributors are actively discussing how we can move away from GitHub
in the long term.  We urge you to read about the
[Give up GitHub](https://GiveUpGitHub.org) campaign from
[the Software Freedom Conservancy](https://sfconservancy.org) to understand
some of the reasons why GitHub is not a good place to host FOSS projects.

If you are a contributor who personally has already quit using GitHub, please
[check this resource](INSERT_LINK) for how to send us contributions without
using GitHub directly.

Any use of this project's code by GitHub Copilot, past or present, is done
without our permission.  We do not consent to GitHub's use of this project's
code in Copilot.

![Logo of the GiveUpGitHub campaign](https://sfconservancy.org/static/img/GiveUpGitHub.png)


Personal site and résumé for Julian Espada, Lead Software Engineer.

A static site (plain HTML, CSS and JavaScript, no build step), based on the
[vCard](https://github.com/codewithsadee/vcard-personal-portfolio) template by codewithsadee.

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Layout

- `index.html` holds every page. The URL hash picks which one shows (`#about`, `#resume`, `#portfolio`, `#contact`).
- `assets/` holds styles, scripts, fonts and images.
- `files/` is gitignored. The web server serves it for downloads that live outside version control, such as the résumé PDF (`files/Julian-Espada-Resume.pdf`).

## License

Copyright (C) 2025 Julian Espada.

The site code is licensed under the GNU General Public License, version 2 only; see [LICENSE](LICENSE).

Parts of the code come from the vCard template and remain available under their original MIT license, which is kept in [LICENSE-vcard-template](LICENSE-vcard-template). The inline icons come from [Ionicons](https://ionic.io/ionicons) (MIT) and [Simple Icons](https://simpleicons.org) (CC0). The Poppins font files are under the SIL Open Font License.

The personal content (biography, résumé details and images of Julian Espada) isn't covered by these licenses.
