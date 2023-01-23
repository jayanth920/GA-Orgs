# CSS Selector Reference Sheet

\* = Selects all elements

:root = document root, used for defining variables and such

ElementName = Selects all elements of that type

.ClassName = Selects all elements with the same Class Name

#IDName = selects the element with the matching ID (each elements ID must be unique)

Element[attribute] = selects any element with the particular attribute and value if specified

Element:hover = selects an element of that type that is being hovered over

Element:link = Link that isn't yet visited

Element:visited = Link that has been visited

Element:active = An element that is in an "Active" state

Element:focus = An input that is currently focused

Element1 Element2 = selects all Element2 that is a descendant of any Element1

Element1 > Element = Selects and Element2 that is a direct child of an element1

# The :before and :after

Added content before or after an element

```
li:before {
    content: "*";
}

```

The above places and asterisk before every li tag

# CSS Functions Reference

### attr() = returns the value of the selected attribute of that element

```
a:after {
  content: " (" attr(href) ")";
}
```

### calc() = allows you to do calculations on attribute values

```
div {
    max-width: calc(80% - 100px)
}
```

### var() = allows variables to be used

```
:root{
    --mainColor: organge;
}

body{
    background-color: var(--mainColor)
}
```