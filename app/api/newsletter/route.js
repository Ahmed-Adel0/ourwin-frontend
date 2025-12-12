import logger from "@/lib/logger";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return Response.json({ error: "Email is required" }, { status: 400 });
    }

    logger.log("Newsletter subscription:", { email });

    return Response.json(
      { success: true, message: "Successfully subscribed to newsletter" },
      { status: 200 }
    );
  } catch (error) {
    logger.error("Newsletter subscription error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
