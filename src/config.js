const dev = {
  s3: {
    REGION: "ap-south-1",
    BUCKET: "notes-paradox"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://2si05roihb.execute-api.us-east-1.amazonaws.com/dev/notes"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_wPjAdp714",
    APP_CLIENT_ID: "74fvboe7rqp59ucuofbjn1h4k3",
    IDENTITY_POOL_ID: "us-east-2:3cb3ab3f-a37f-467c-9d0d-059351f328cc"
  },
  STRIPE_KEY: "sk_test_spySUYoAyKxyLZGi2i4gQ9sQ",
};

const prod = {
  s3: {
    REGION: "ap-south-1",
    BUCKET: "notes-paradox"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://2si05roihb.execute-api.us-east-1.amazonaws.com/dev/notes"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_wPjAdp714",
    APP_CLIENT_ID: "74fvboe7rqp59ucuofbjn1h4k3",
    IDENTITY_POOL_ID: "us-east-2:3cb3ab3f-a37f-467c-9d0d-059351f328cc"
  },
  STRIPE_KEY: "sk_test_spySUYoAyKxyLZGi2i4gQ9sQ",
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};