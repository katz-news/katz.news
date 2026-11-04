(function () {
  var started = Date.now();
  document.querySelectorAll('form.katz-form').forEach(function (f) {
    var status = f.querySelector('.form-status');
    f.setAttribute('novalidate', '');
    f.addEventListener('submit', function (ev) {
      ev.preventDefault();
      if (!f.reportValidity()) return;
      f.querySelector('[name=elapsed]').value = String(Date.now() - started);
      var button = f.querySelector('button[type=submit]');
      button.disabled = true;
      status.textContent = 'Sending…';
      fetch(f.action, { method: 'POST', mode: 'no-cors', body: new URLSearchParams(new FormData(f)) })
        .then(function () {
          f.reset();
          f.querySelectorAll('input, textarea, select, button').forEach(function (x) { x.disabled = true; });
          status.textContent = f.getAttribute('data-success');
        })
        .catch(function () {
          button.disabled = false;
          status.textContent = 'Sorry, that did not send. Please try again in a moment.';
        });
    });
  });
  var url = new URLSearchParams(location.search).get('url');
  var field = document.querySelector('[name=article_url]');
  if (url && field && !field.value) { try { field.value = new URL(url, location.origin).href; } catch (e) {} }
  var g = document.querySelector('.guardian');
  if (g) {
    var sync = function () {
      var yes = document.querySelector('[name=under_16][value=yes]').checked;
      g.hidden = !yes;
      g.querySelectorAll('input').forEach(function (i) { i.required = yes; });
    };
    document.querySelectorAll('[name=under_16]').forEach(function (r) { r.addEventListener('change', sync); });
    sync();
  }
})();
