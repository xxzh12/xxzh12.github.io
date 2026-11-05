# Yuhao Ji Homepage

`index.jemdoc` builds the homepage with `make`. `papers/` contains the published Daily Papers pages. The two outputs are independent.

The homepage defaults to a classic, narrower layout without the sidebar. Use the
“Homepage view” selector to restore the wider layout with Daily Papers, or link
directly to `index.html?view=papers`. Both layouts share the same current content;
this is a layout switch, not a rollback of biography or publications. The switch
uses `css/home-view.css` and `js/home-view.js` and survives `make` rebuilds.
