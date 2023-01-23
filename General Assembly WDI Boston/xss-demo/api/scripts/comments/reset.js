var projectName = 'xss-demo-api';

db = connect('localhost:27017/' + projectName + '-development')
db.comments.remove({});
