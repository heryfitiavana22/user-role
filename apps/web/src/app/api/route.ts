import { NextRequest, NextResponse } from "next/server";

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
