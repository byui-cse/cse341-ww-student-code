module.exports = (mongoose) => {
  const userSchema = mongoose.Schema({
    username: {
      type: String
    },
    password: {
      type: String
    },
    displayName: {
      type: String
    },
    email: {
      type: String
    },
    phoneNumber: {
      type: String
    },
    currentLocation: {
      type: String
    },
    openToNewOpportunities: {
      type: Boolean
    },
    profileIsPublic: {
      type: Boolean
    },
    theme_name: {
      type: String
    },
    info: {
      email: {
        type: String
      },
      phoneNumber: {
        type: String
      },
      currentLocation: {
        type: String
      },
      openToNewOpportunities: {
        type: Boolean
      },
      profileIsPublic: {
        type: Boolean
      },
      theme_name: {
        type: String
      }
    },
    profile: {
      experience: {
        type: [mongoose.SchemaTypes.Mixed]
      },
      education: {
        type: [mongoose.SchemaTypes.Mixed]
      },
      projects: {
        type: [mongoose.SchemaTypes.Mixed]
      },
      skills: {
        type: [String]
      },
      references: {
        type: [mongoose.SchemaTypes.Mixed]
      }
    }
  });

  return mongoose.model('users', userSchema);
};
