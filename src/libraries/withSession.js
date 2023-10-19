import { withIronSession } from "iron-session";

export default function withSession(app) {
    return withIronSession(app, {
        password: "mywaysassignment123",
        cookieName: "myways-chat",
        cookieOptions: {
            secure: process.env.NODE_ENV === "production",
        }
    });
};