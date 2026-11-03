document.querySelectorAll('[data-filter]').forEach(function (b) {
  b.addEventListener('click', function () {
    var f = b.getAttribute('data-filter');
    document.querySelectorAll('[data-filter]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
    document.querySelectorAll('.brief-item').forEach(function (li) { li.hidden = !!f && li.getAttribute('data-section') !== f; });
  });
});
