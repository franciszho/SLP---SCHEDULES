import { getStore } from "@netlify/blobs";

const headers = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store"
};

export default async (request) => {
  try {
    const store = getStore("staff-scheduler-pro");
    const key = "workspace";
    if (request.method === "GET") {
      const data = await store.get(key, { type: "json", consistency: "strong" });
      return new Response(JSON.stringify({ ok: true, data: data || null }), { status: 200, headers });
    }
    if (request.method === "PUT" || request.method === "POST") {
      const body = await request.json();
      const payload = { ...body, updatedAt: new Date().toISOString() };
      await store.setJSON(key, payload);
      return new Response(JSON.stringify({ ok: true, data: payload }), { status: 200, headers });
    }
    return new Response(JSON.stringify({ ok: false, error: "Method not allowed" }), { status: 405, headers });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ ok: false, error: error.message || "Server error" }), { status: 500, headers });
  }
};
