module.exports = {
  StatusEnum: {
    SUCCESS: 200,                   // OK
    NO_CONTENT: 204,                // No Content
    ALREADY_EXIST: 409,             // Conflict (Custom code for "Already Exists")
    NOT_FOUND: 404,                // Not Found
    INTERNAL_SERVER_ERROR: 500,     // Internal Server Error
    TOKEN_EXP: 401,                 // Unauthorized (Token Expired)
    PATTERN_NOT_MATCH: 422,         // Unprocessable Entity (Custom code for "Pattern Not Match")
    PARTNER_NOT_MATCH: 423
  },

  StatusMessages: {
    SUCCESS: 'Success',
    NO_CONTENT: 'No Content',
    ALREADY_EXIST: 'Already Exist',
    NOT_FOUND: 'Not Found',
    INTERNAL_SERVER_ERROR: 'Internal Server Error',
    PATTERN_NOT_MATCH: 'Pattern Not Match',
    TOKEN_EXP: "Your token has expired, please login again",
    NO_TOKEN: "Access denied. No token provided.",
    INVALID_TOKEN: "Invalid token.",
    NO_IMAGE: "No Image upload!",

  },
  social_type: {
    Google: 0,
    Facebook: 1,
    Apple: 2,
    email: 3
  },
  Messages: {
    Invalid_Email: "Invalid Email Address",
    Invalid_Id: "Invalid Id Please Check",
    Id_Required: "Id Must Be Required",
    CourtId_Required: "Court Id Must Be Required",
    Invalid_Social: "Invalid Social Type",
    User_Not_Found: "User Not Found Please Register First",
    Email_Already_Registered: "Email Address Already Registered",
    Time_Slot_Required: "TimeSlot Id Must Be Required",
    



  },

  }


// module.exports = BASEURL