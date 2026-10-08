/* Assembles email addresses in the browser so they never appear
   in the raw HTML source, defeating simple scraper bots.
   Usage in HTML:
     <a class="email-link" data-u="kyle" data-d="ringler" data-t="me">email</a>
   The address becomes:  data-u @ data-d . data-t              */

document.querySelectorAll(".email-link").forEach(function (el) {
  var addr = el.dataset.u + "\u0040" + el.dataset.d + "\u002e" + el.dataset.t;
  el.href = "mailto:" + addr;
  el.textContent = addr;
});
