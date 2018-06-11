

const $ = query => document.querySelector(query);
const $$ = query => document.querySelectorAll(query);

const html = rawHtml => {
  const template = document.createElement('template');
  template.innerHTML = rawHtml;
  return template.content;
}