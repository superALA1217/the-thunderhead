
const express = require("express");
const fetch = require("node-fetch");
var eco = require("discord-economy");  // For balance req.
const btoa = require("btoa");
var request = require('request');
const { catchAsync } = require("../utils");
const router = express.Router();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const redirect = encodeURIComponent(
  "https://the-thunderhead.glitch.me/api/discord/callback"
);

router.get("/login", (req, res) => {
  res.redirect(
    `https://discordapp.com/api/oauth2/authorize?client_id=${CLIENT_ID}&scope=identify&response_type=code&redirect_uri=${redirect}&response_type=code&scope=identify`
  );
});

router.get(
  "/callback",
  catchAsync(async (req, res) => {
    if (!req.query.code) throw new Error("NoCodeProvided");
    const code = req.query.code;
    const creds = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);
    const response = await fetch(
      `https://discordapp.com/api/oauth2/token?grant_type=authorization_code&code=${code}&redirect_uri=${redirect}&response_type=code&scope=identify`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${creds}`
        }
      }
    );
    

    
    const json = await response.json();

      const getinfo = await fetch(
      `http://discordapp.com/api/users/@me`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${json.access_token}`
        }
      }
    );

    const userData = await getinfo.json();
    console.log(userData);
    var avatarUrl = `avatars/${userData.id}/${userData.avatar}.png`;
    var username = userData.username;
    var tag = userData.discriminator;
    var output = await eco.FetchBalance(userData.id)
    var balance = output.balance
    
    var b64str = btoa(`username=${username}?tag=${tag}?avatar=${avatarUrl}?balance=${balance}`)
    res.redirect(`/?${b64str}`);
  })
);


module.exports = router;


// do something with userData

