# HTTP/JSON delivery notes

## HTTP Discussion

It would be good to show a diagram like this:

![document load
diagram](https://media.git.generalassemb.ly/user/5965/files/0c6d1800-3628-11eb-96ec-c973bd49ab6b)

Or like draw one like this:

![http req/res cycle](https://git.generalassemb.ly/storage/user/3667/files/4f6a301a-2e9d-11e8-9828-637ad9e1acf1)

It would also be good to discuss how HTTP and IP fit together to make "the Web"
and "the Internet". Specifically, they're both part of a tech stack. On the
very low-level side you have the physical connection. This is fiberoptic cable,
microwave radiation (for wifi), etc. Then, above that, you have low-level
protocols like wifi, ethernet, etc. The next step up is the Internet Protocol
(IP). This is what we call "the internet" and it's used for a lot more than
serving web pages, e.g. video games, email, Slack. Above IP you have TCP, which
is a protocol that adds reliability to IP by communicating back and forth
between client and server to ensure that all sent packets are properly recieved.
Finally, on top you have HTTP. This layer is "the Web".

You could draw it like this:

![web stack](https://git.generalassemb.ly/storage/user/3667/files/74d36baa-2e9d-11e8-98ff-9e5aec049e3a)

### Alternative OSI 5-layer diagram

When Ben has extra time, he will diagram the OSI 5-layer diagram. Which breaks up "wires" from above and talks about ethernet.

OSI 5-layer model
1. http (hypertext transfer protocol)
2. tcp (transmission control protcol)
3. ip (internet protocol)
4. ethernet (local protocol)
5. wires/cables (typically for ethernet)

Refresher:
- ethernet - used to communicate over a local network (like GA's wifi)
- ip - used to identify which computer you're using on the internet
- tcp - used to send messages reliably between different computers over the internet
- HTTP (send web data)
