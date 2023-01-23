var restify = require('restify');
var util = require('util');
var md5 = require('md5');

var tokens = {};
var messages = [];


// for debug

// tokens['5650d4508ce2f7ddbae283379d5fe04c'] = {
//   nickname: "stripey"
// };
// messages.push({
//   messageId: messages.length,
//   token: '5650d4508ce2f7ddbae283379d5fe04c',
//   nickname: 'stripey',
//   message: 'chuff 0'
// });
// messages.push({
//   messageId: messages.length,
//   token: '5650d4508ce2f7ddbae283379d5fe04c',
//   nickname: 'stripey',
//   message: 'chuff 1'
// });
// messages.push({
//   messageId: messages.length,
//   token: '5650d4508ce2f7ddbae283379d5fe04c',
//   nickname: 'stripey',
//   message: 'chuff 2'
// });
// messages.push({
//   messageId: messages.length,
//   token: '5650d4508ce2f7ddbae283379d5fe04c',
//   nickname: 'stripey',
//   message: 'chuff 3'
// });
// messages.push({
//   messageId: messages.length,
//   token: '5650d4508ce2f7ddbae283379d5fe04c',
//   nickname: 'stripey',
//   message: 'chuff 4'
// });

// errors

function MissingNicknameError() {
  restify.RestError.call(this, {
    statusCode: 409,
    restCode: 'MissingNickname',
    message: '"nickname" is a required parameter',
    constructorOpt: MissingNicknameError
  });

  this.name = 'MissingNicknameError';
}
util.inherits(MissingNicknameError, restify.RestError);

function DuplicateNicknameError() {
  restify.RestError.call(this, {
    statusCode: 409,
    restCode: 'DuplicateNickname',
    message: 'that "nickname" is in use',
    constructorOpt: DuplicateNicknameError
  });

  this.name = 'DuplicateNicknameError';
}
util.inherits(MissingNicknameError, restify.RestError);

function MissingTokenError() {
  restify.RestError.call(this, {
    statusCode: 409,
    restCode: 'MissingToken',
    message: '"token" is a required parameter',
    constructorOpt: MissingTokenError
  });

  this.name = 'MissingTokenError';
}
util.inherits(MissingTokenError, restify.RestError);

function BadTokenError() {
  restify.RestError.call(this, {
    statusCode: 409,
    restCode: 'BadToken',
    message: 'the "token" provided was not recognized',
    constructorOpt: BadTokenError
  });

  this.name = 'BadTokenError';
}
util.inherits(BadTokenError, restify.RestError);

// formatter

function formatResult(req, res, body) {
    if (body instanceof Error) {
        res.statusCode = body.statusCode || 500;
        body = body.message;
    } else if (typeof (body) === 'object') {
        body = JSON.stringify(body);
    } else {
        body = body.toString();
    }

    res.setHeader('Content-Length', Buffer.byteLength(body));
    return (body);
}


// can we talk?

function register(req, res, next) {
  if (!req.params.nickname) {
    console.log ("register called with no nickname");
    next(new MissingNicknameError());
    return;
  }

  var nickname = req.params.nickname;
  var token = md5.digest_s(nickname);
  if (tokens[token] !== undefined) {
    console.log("register called with duplicate nickname");
    next(new DuplicateNicknameError());
    return;
  }

  console.log(nickname + " registered - " + token);
  tokens[token] = { nickname: nickname };
  console.log(tokens);
  res.send(201, { token: token });
  next();
}

function say (req, res, next) {
  if (!req.params.token) {
    console.log ("say called with no token");
    next(new MissingTokenError());
    return;
  }

  var token = req.params.token;
  if (!tokens[token]) {
    console.log ("say called with bad token");
    next(new BadTokenError());
    return;
  }

  var message = req.params.message || "I have nothing to say";

  var messageStruct = {
    messageId: messages.length,
    token: token,
    nickname: tokens[token].nickname,
    message: message
  };

  messages.push(messageStruct);
  console.log(messageStruct);
  res.send(201, messageStruct);
  next();
}

function fetch(req, res, next){
  if (!req.params.token) {
    console.log ("fetch called with no token");
    next(new MissingTokenError());
    return;
  }

  var token = req.params.token;
  if (!tokens[token]) {
    console.log ("fetch called with bad token");
    next(new BadTokenError());
    return;
  }

  var messageCount = req.params.count || 20;
  var last = messages.length;
  var first = req.params.from || messages.length - messageCount;
  if (first < 0) {
    first = 0;
  }
  var partialMessages = messages.slice(first, last);

  console.log(token + ' requested messages ' + first + ' to ' + last);
  res.send(201, partialMessages);
  next();
}

function usage (req, req, next) {
  res.sent(201, {
    register: {
      method: 'POST',
      url: '/register',
      required: ['nickname'],
      returns: ['token']
    },

    say: {
      method: 'POST',
      url: '/say',
      required: ['token'],
      optional: ['message'],
      returns: ['messageId', 'token', 'nickname', 'message']
    },

    fetch: {
      method: 'GET',
      required: [token],
      optional: [from, count]
    }
  });
}

// at your service

var server = restify.createServer({
  name: 'chat',
  version: '0.1.0',
  formatter: formatResult
});

server.pre(restify.pre.pause());
server.pre(restify.pre.sanitizePath());
server.pre(restify.pre.userAgentConnection());

// allow 1 request per second per IP

server.use(restify.throttle({ burst: 2, rate: 1, ip: true }));

// common stuff you probably want

server.use(restify.acceptParser(server.acceptable));
server.use(restify.dateParser());
server.use(restify.authorizationParser());
server.use(restify.queryParser());
server.use(restify.gzipResponse());
server.use(restify.bodyParser());

server.get('/', usage);

server.post('/register', register);
server.post('/say', say);
server.get('/fetch', fetch);
server.head('/fetch', fetch);

server.listen(8080);
