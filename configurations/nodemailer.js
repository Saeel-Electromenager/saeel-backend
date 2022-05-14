const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: "saeel.electromenager@outlook.fr",
    pass: "72NZMr8%vH@:qH9",
  },
});

const mailContent = (content) => {
  return {
    from: "Saeel Électroménager <saeel.electromenager@outlook.fr>",
    to: content.toEmail,
    subject: content.subject,
    text: content.text,
    html: content.html,
  };
};

exports.resetPassword = (email, code) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(
      mailContent({
        toEmail: email,
        subject: "Récupération du mot de passe Saeel",
        text: "Veuillez s'il vous plaît copier ce code et le coller dans le champ adapté",
        html:
          "<div style='text-align: center;'><h1>Votre code de récupération:</h1><p><strong>" +
          code +
          "</strong></p><p>Merci pour votre confiance, Saeel.</p></div>",
      }),
      (error, info) => {
        resolve(!error || !!info);
      }
    );
  });
};

exports.confirmeEmail = (email, code) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(
      mailContent({
        toEmail: email,
        subject: "Confirmation de l'email Saeel",
        text: "Veuillez s'il vous plaît copier ce code et le coller dans le champ adapté",
        html:
          "<div style='text-align: center;'><h1>Votre code de validation est:</h1><p><strong>" +
          code +
          "</strong></p><p>Merci pour votre confiance, Saeel.</p></div>",
      }),
      (error, info) => {
        error ? console.log(error) : "";
        resolve(!error || !!info);
      }
    );
  });
};
