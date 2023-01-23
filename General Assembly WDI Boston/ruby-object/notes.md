# Delivery Notes

## Whiteboard Diagrams

![1](https://git.generalassemb.ly/storage/user/4584/files/f679d6dc-264f-11e7-9c3d-0426c04e9213)

```rb
attr_reader :language
```

is equivalent to

```rb
def language
  @language
end
```

![2](https://git.generalassemb.ly/storage/user/4584/files/f6809ed6-264f-11e7-9712-399a936fc340)

```rb
attr_writer :language
```

is equivalent to

```rb
def language=(value)
  @language = value
end
```

![3](https://git.generalassemb.ly/storage/user/4584/files/f6857c94-264f-11e7-81e6-806e89e47ec6)

```rb
attr_accessor :language
```

is equivalent to

```rb
attr_reader :language
attr_writer :language
```
