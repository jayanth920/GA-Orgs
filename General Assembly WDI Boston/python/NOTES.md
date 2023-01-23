
## Multi-line Comments in python
​
[Here](https://stackoverflow.com/a/7696949) is a good explanation. The important part is:
​
>Python does have a multiline string/comment syntax in the sense that unless used as docstrings, multiline strings generate no bytecode -- just like #-prepended comments. In effect, it acts exactly like a comment.
>
>On the other hand, if you say this behavior must be documented in the official documentation to be a true comment syntax, then yes, you would be right to say it is not guaranteed as part of the language specification.
​

So, we can use multiline strings as multiline comments, but it is not officialy documented
and PEP8, Python's style guide, says to use multiple single line comments.

```py
'''
multiline strings can be used
as multiline comments!!
'''

# many single line comments
# are prefered when
# commenting multiple lines
```
