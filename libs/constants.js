module.exports = {
    HEADER: {
      TOKEN: 'authorization',
      API_KEY: 'api-key',
      CONTENT_TYPE: 'application/json',
      REFRESH_TOKEN: 'refresh_token'
    },
    ERROR: {
      CODE: 500,
      MSG: 'error'
    },
    SUCCESS: {
      CODE: 200,
      MSG: 'ok'
    },
    EMAIL_TYPE: {
      PASSWORD_RESET: 'PASSWORD_RESET'
    },
    MSG: {
      HAS_RECORD: 'record(s) found',
      CREATE: 'Created Sucessfully',
      REMOVE: 'Deleted Sucessfully',
      UPDATE: 'Updated Sucessfully',
      BAD_REQUEST: 'Bad request',
      UNAUTHORIZED: 'Unauthorized',
      NO_RECORD: 'No records found',
      TRY_AGAIN: 'Try again',
      LOGIN: 'Logged in sucessfully',
      FORGOTPASSWORD: 'Forgot password sent successfully',
      AUTH_TOKEN_EXPIRED: 'TokenExpiredError',
      AUTH_MALFORMED: 'JsonWebTokenError',
      SESSION_EXPIRED: 'Session expired',
      INVALID_TOKEN: 'Invalid token',
      AUTH_MSG: 'Username or Password is invalid'
    },
    STATUS: {
      ACTIVE: 'ACTIVE',
      INACTIVE: 'INACTIVE',
      DELETE: 'DELETED'
    },
    SESSION: {
      DESTROY_FAIL: 'Unable to destroy session',
      EXP_KEY: 'session_expire_time',
      EXIST: {
        CODE: 309
      },
      EXPIRED: {
        CODE: 310
      },
      MESSAGE: {
        message: 'Logged out successfully'
      }
    },
    // ALLOWED_MIME_TYPE: ['image/jpeg', 'image/png', 'image/jpg', 'image/JPEG', 'image/PNG', 'image/JPG'],
    TOKEN_EXPIRED_TIME: process.env.TOKEN_EXPIRED_TIME,
  
  }
  