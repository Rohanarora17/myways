import { withIronSession } from "iron-session";

export default function withSession(app) {
    return withIronSession(app, {
        password: "bXlzcWxhc3N3b3JkMTIzNDU2Nzg5MA====",
        cookieName: "myways",
        cookieOptions: {
            secure: process.env.NODE_ENV === "production",
        }
    });
};