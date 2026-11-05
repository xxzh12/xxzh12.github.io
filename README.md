# Yuhao Ji Homepage

`index.jemdoc` builds the homepage with `make`. `papers/` contains the published Daily Papers pages. The two outputs are independent.

The homepage layout is controlled internally in `index.jemdoc`, with no public
selector or URL parameter:

- Classic (current default): keep `# jemdoc: addcss{css/home-view.css}` to hide the
  sidebar and use the narrower layout.
- With Daily Papers: remove that directive to restore the original wide layout
  and sidebar. Add it back to return to classic.

Run `make` after changing the setting, then commit and push the source and generated
`index.html`. Both layouts share the same current biography, publications, and
other content. Published pages in `papers/` remain independent.
