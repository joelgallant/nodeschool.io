module.exports = function (msgs) {
  return msgs.filter(function (msg) {
    return msg.message.length < 50;
  }).map(function (msg) {
    return msg.message;
  });
}
