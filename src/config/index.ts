import dotenv from 'dotenv';

if(process.env.NODE_ENV !== "production"){
  const envFound = dotenv.config();
  if (envFound.error) {
  }
}

export default {
  bot: process.env.BOT_TOKEN,
  port: process.env.NODE_ENV === "production" ? process.env.PORT : 3000,
  url: process.env.URL,
  logs: {
    level: process.env.LOG_LEVEL || 'silly'
  },
};
