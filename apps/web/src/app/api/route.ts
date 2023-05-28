import { ironOption } from "@/config";
import { withIronSessionApiRoute } from "iron-session/next";
import { NextRequest, NextResponse } from "next/server";

const withIronSession = withIronSessionApiRoute(async (request, response) => {
    console.log(request.body);

    const session = request.session as any;
    session.user = { id: 1 };
    await request.session.save();
    response.send({ ok: true });
}, ironOption);

// export { withIronSession as POST };
export async function POST(request: NextRequest) {
    console.log(request.body);
    const response = NextResponse.next()
    return NextResponse.json({qd: ""})
}

export async function GET(request: NextRequest) {
    // console.log(request.body);
    // const response = NextResponse.next()
    return NextResponse.json({qd: ""})
}
