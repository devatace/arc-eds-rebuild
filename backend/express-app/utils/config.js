import dotenv from "dotenv";

dotenv.config()

export const PORT = process.env.EXP_PORT || 3300;
export const frontend_url = process.env.FRONTEND_URL;

export const mail_user = process.env.devEmail;
export const mail_pass = process.env.devPassword