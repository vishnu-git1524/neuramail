import { db } from "./server/db";

await db.user.create({
    data: {
        firstName: "John",
        lastName: "Doe",
        emailAddress: "john.doe@example.com",
    }
})