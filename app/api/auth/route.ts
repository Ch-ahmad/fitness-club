import type { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { token, role } = await req.json();
    if (!token) {
      return Response.json(
        {
          message: "Token not found",
        },
        {
          status: 400,
        }
      );
    }
    console.log({ role, token });
    const session = { token, role };
    cookies().set("session", JSON.stringify(session), {
      expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    });
    return Response.json(
      {
        message: "Session Added Successfully!",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return Response.json(
      {
        message: "Something went wrong",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
export async function DELETE(req: NextRequest, res: NextResponse) {
  try {
    cookies().set("session", "", { expires: new Date(0) });
    return Response.json(
      {
        message: "Successfully logged out",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return Response.json(
      {
        message: "Something went wrong",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const session = cookies().get("session")?.value;
    if (!session) {
      return Response.json(
        {
          message: "Session not found",
          session: {
            token: null,
            role: null,
          },
        },
        {
          status: 200,
        }
      );
    }
    return Response.json(
      {
        message: "Session found",
        session: JSON.parse(session),
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return Response.json(
      {
        error,
        message: "Server Error",
      },
      { status: 400 }
    );
  }
}
