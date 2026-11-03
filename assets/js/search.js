(function () {
  var q = document.getElementById('q'), out = document.getElementById('results'), data = [];
  fetch('/search.json').then(function (r) { return r.json(); }).then(function (d) { data = d; });
  function esc(s) { var e = document.createElement('span'); e.textContent = s || ''; return e.innerHTML; }
  q.addEventListener('input', function () {
    var t = q.value.trim().toLowerCase();
    if (t.length < 2) { out.innerHTML = ''; return; }
    var hits = data.filter(function (p) { return (p.t + ' ' + p.s).toLowerCase().indexOf(t) > -1; }).slice(0, 30);
    out.innerHTML = hits.length ? hits.map(function (p) {
      return '<li class="brief-item"><p class="label">' + esc(p.d) + '</p><h3><a href="' + esc(p.u) + '">' + esc(p.t) + '</a></h3><div class="summary">' + esc(p.s) + '</div></li>';
    }).join('') : '<li class="empty">No results. Try a different word.</li>';
  });
})();
