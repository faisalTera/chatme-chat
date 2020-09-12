import mongodb from 'mongodb';

export default {
  // "port": 3005,
  // "mongoUrl": "mongodb://localhost:27017/chat-api",
  "port": process.env.PORT,
  "mongoUrl": "mongodb://Faisal:F12345@ds363058.mlab.com:63058/chatme-chat",
  "bodyLimit": "100kb"
}
