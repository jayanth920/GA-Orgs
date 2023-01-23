# Delivery Notes

The solution code for the list component is set up to render an ordered list.
The component for the list-item uses classNameBindings of li and also the
template itself uses li tags which means that when it renders the ordered
list it ends up rending two li's for each item.

This causes the list items to be numbered only odd, skipping the even numbers
due to the nested li's. This is a teachable moment and in the end you should
switch the ol tag to an ul tag so that it renders with bullets instead of
numbered.

You could also change the li tag in the template to a p tag or something to
avoid rendering two li's for each item.

## Whiteboard Diagrams

![](https://git.generalassemb.ly/storage/user/3667/files/0e7cc40a-bc06-11e7-8e32-1748cd62c13c)

## Component Diagram

![](https://emberigniter.com/images/5-essential-concepts/simplified2.png)
