module.exports = (mongoose) => {
  const Theme = mongoose.model(
    'themes',
    mongoose.Schema({
      themeName: {
        type: String
      },
      fontSize: {
        type: Number
      },
      fontFamily: {
        type: String
      },
      inspiration: {
        type: String
      },
      colors: {
        type: [String]
      }
    })
  );

  return Theme;
};
