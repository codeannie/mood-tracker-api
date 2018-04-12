const DATABASE_URL = process.env.DATABASE_URL ||
                    global.DATABASE_URL ||
                    'mongodb://localhost/mood-tracker';

const PORT = process.env.PORT || 8080;
const JWT_SECRET = 'ManageMoodTracker2018';
const JWT_EXPIRY = process.env.JWT-EXPIRY || '7d';
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN;

export { DATABASE_URL, PORT, JWT_SECRET, JWT_EXPIRY, CLIENT_ORIGIN };