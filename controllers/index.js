displayJoke = (req, res) => {
  const data =
    'How did the telephone propose to his girlfriend? ...he gave her a ring.';
  res.status(200).send(data);
};

module.exports = {
  displayJoke,
};
