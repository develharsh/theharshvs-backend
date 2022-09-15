module.exports.visitor = (message) => {
  return {
    subject: `Visit Alert - Harshvsinghme`,
    body: `Visit Alert Type: ${message}`,
  };
};

module.exports.event = (message) => {
  return {
    subject: `Event Alert - Harshvsinghme`,
    body: `Event Alert Type: ${message}`,
  };
};
module.exports.addBlog = (topic, slug) => {
  return {
    subject: topic,
    body: `<p>Dear Subscriber,<br/>My New Blog on: ${topic} is out now.<br/>You can read it: <a href="http://localhost:3000/blog/${slug}">here</a></p>`,
  };
};
