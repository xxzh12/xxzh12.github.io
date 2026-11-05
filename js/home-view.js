(function () {
  'use strict';

  function currentView() {
    return new URLSearchParams(window.location.search).get('view') === 'papers'
      ? 'papers' : 'classic';
  }

  function applyView(view) {
    document.documentElement.classList.toggle('home-with-papers', view === 'papers');
  }

  // Apply before rendering so the requested layout does not flash on load.
  applyView(currentView());

  document.addEventListener('DOMContentLoaded', function () {
    var select = document.getElementById('home-view');
    var homeLink = document.querySelector('#layout-menu a.current');

    function syncView() {
      var view = currentView();
      applyView(view);
      select.value = view;
      homeLink.href = view === 'papers' ? 'index.html?view=papers' : 'index.html';
    }

    syncView();
    document.getElementById('home-view-switch').hidden = false;
    select.addEventListener('change', function () {
      var url = new URL(window.location.href);
      if (select.value === 'papers') {
        url.searchParams.set('view', 'papers');
      } else {
        url.searchParams.delete('view');
      }
      window.history.pushState(null, '', url);
      syncView();
    });
    window.addEventListener('popstate', syncView);
  });
}());
