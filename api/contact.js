const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const { name = "", email = "", phone = "", message = "" } = req.body || {};
  const clean = {
    name: String(name).trim().slice(0, 120),
    email: String(email).trim().slice(0, 180),
    phone: String(phone).trim().slice(0, 60),
    message: String(message).trim().slice(0, 5000)
  };

  if (!clean.name || !EMAIL_RE.test(clean.email) || !clean.phone || !clean.message) {
    return res.status(400).json({ ok: false, error: "Complete all four fields." });
  }

  return res.status(200).json({
    ok: true,
    message: "The Alabama mineral review request was received."
  });
}
