/* eslint-disable @typescript-eslint/no-var-requires */
const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp();

const allowedEmails = [
  "viewpointicstan@gmail.com",
  "hoshitaro@uchu2.com",
  "ochasan.kc@gmail.com",
];

exports.authorizeUserByEmail = functions.auth.user().onCreate(async (user) => {
  const uid = user.uid;
  const email = user.email;

  if (allowedEmails.includes(email)) {
    await admin.auth().setCustomUserClaims(uid, { authorized: true });
    console.log(`setCustomUserClaims: ${email}`);
    return true;
  } else {
    await admin.auth().deleteUser(uid);
    console.log(`Delete user: ${email}`);
    return false;
  }
});
