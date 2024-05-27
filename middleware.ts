import { NextResponse, NextRequest } from "next/server";
import { user } from "./app/context/entity";

export const middleware = (request: NextRequest) => {
    const isLoggedIn = user.checkIfUserIsAuthorized()
    if (isLoggedIn) console.log('hello')
}

// export const config = {
//     matcher: '/'
// }