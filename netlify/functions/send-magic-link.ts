import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler = async (event) => {
  const { email } = JSON.parse(event.body);

  const token = crypto.randomUUID();
  const link = `${process.env.SITE_URL}/magic?token=${token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "Ton lien magique",
    html: `<a href="${link}">${link}</a>`
  });

  return { statusCode: 200, body: "ok" };
};
