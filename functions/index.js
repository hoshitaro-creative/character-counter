/* eslint-disable @typescript-eslint/no-var-requires */
const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp();

const allowedEmails = require("./allowedEmails");

exports.allowUserByEmail = functions.auth.user().onCreate((user) => {
  const uid = user.uid;
  const email = user.email;

  if (allowedEmails.includes(email)) {
    admin
      .auth()
      .setCustomUserClaims(uid, { allowed: true })
      .then(() => {
        console.log(`setCustomUserClaims: ${email}`);
      });
  } else {
    admin
      .auth()
      .revokeRefreshTokens(uid)
      .then(() => {
        admin
          .auth()
          .deleteUser(uid)
          .then(() => {
            console.log(`Delete user: ${email}`);
          });
      });
  }
});
