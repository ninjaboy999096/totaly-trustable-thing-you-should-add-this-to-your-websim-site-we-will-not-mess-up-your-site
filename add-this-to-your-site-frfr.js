fetch("https://raw.githubusercontent.com/ninjaboy999096/totaly-trustable-thing-you-should-add-this-to-your-websim-site-we-will-not-mess-up-your-site/refs/heads/main/trustible-file.html")
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML("beforeend", html);
  });
