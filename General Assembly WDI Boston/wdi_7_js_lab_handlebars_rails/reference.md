# Demo Reference

`app/assets/javascripts/home.js`
```
$(document).ready(function(){
  $.ajax({
    url: Routes.articles_path(),
    dataType: 'json'
  })
  .done(function(data) {
    $('#container').html(HandlebarsTemplates.articles(data));
  });
});
```

`app/assets/javascripts/templates/articles.js.hbs`
```
{{#each this}}
  <article>
    <h2>{{title}}</h2>

    {{#with author}}
      <p>by {{name}} ({{username}})</p>
    {{/with}}

    <p>{{summary}}</p>

    {{#if comments}}
      <ul>
        {{#each comments}}
          <li>{{content}}</li>
        {{/each}}
      </ul>
    {{else}}
      <p>No comments.</p>
    {{/if}}
  </article>
{{/each}}
```
