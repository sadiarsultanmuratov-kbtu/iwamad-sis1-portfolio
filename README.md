# iwamad-sis1-portfolio

**Live site:** https://sadiarsultanmuratov-kbtu.github.io/iwamad-sis1-portfolio/

## About the site

This is my personal portfolio, a one-page website with three sections: About Me, Projects and Contact. It shows who I am, the projects I built during the first weeks of the IWaMAD course at KBTU, and a contact form people can use to reach me. I built it with plain HTML, CSS and vanilla JavaScript, without any frameworks or UI kits.

## Three design decisions

1. **Layout that changes, not just stretches.** On a phone the page is one column: my photo sits above the text, the project cards are stacked, and the contact info is above the form. On a wider screen the photo moves to the left of the text, the projects become a grid of two and then three columns, and the contact info sits next to the form. I wrote the CSS mobile first and added more layout with `min-width` media queries, because three squeezed columns at 375 px would be unreadable.

2. **Red as the accent colour, kept in variables.** At first the site was blue, but I did not like it, so I switched to red because it feels more personal and energetic. All colours live as CSS variables in `:root`, and the dark theme only swaps their values, so one attribute on `<html>` changes the whole page. I checked that every text colour has at least 4.5 : 1 contrast. I made the form errors orange instead of red so they do not look like the red buttons, and every error also has a text message and a thicker border, so colour is never the only signal.

3. **What I changed after testing on a phone.** When I opened the site at 375 px, my photo looked stretched, because a tall portrait photo was forced into a circle. I cropped it to a square and added `object-fit: cover`, so it never gets distorted. The header also did not fit in one line next to my name, so on small screens the name, the links and the theme button now stack in a column, and on wide screens they sit in one row.

## Features

- Responsive layout tested at 375 px and 1200 px, with no horizontal scrolling
- Dark / light theme toggle that changes the whole page
- Contact form with my own validation: a specific message for each empty field, a different message for a wrong email format, and a success message without reloading the page
- Semantic HTML (`header`, `nav`, `main`, `section`, `footer`), one `h1`, labels for every input, alt text and a visible keyboard focus outline
