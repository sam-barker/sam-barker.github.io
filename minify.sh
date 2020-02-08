#!/usr/bin/env bash

function main {
  npx clean-css-cli -o dist/style.css src/style.css \
  && \
  npx html-minifier \
    --remove-attribute-quotes \
    --collapse-whitespace \
    --collapse-inline-tag-whitespace \
    --keep-closing-slash \
    --minify-css \
    --minify-js \
    --minify-urls \
    --remove-comments \
    --remove-empty-attributes \
    --remove-redundant-attributes \
    --input-dir src/ \
    --output-dir dist/ \
  && \
  echo 'Minification completed!'
}

main "$@"
