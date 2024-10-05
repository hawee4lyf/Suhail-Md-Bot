const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_18_46_10_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDcxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQyLFxuICAgICAgICA2MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjE5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDg3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE0LFxuICAgICAgICA0NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ5LFxuICAgICAgICA4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQzLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgOTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MixcbiAgICAgICAgODgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDk0LFxuICAgICAgICAzLFxuICAgICAgICAyMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTcsXG4gICAgICAgIDY1LFxuICAgICAgICA1NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg5LFxuICAgICAgICA4LFxuICAgICAgICA0MixcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDUsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDMxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjEyLFxuICAgICAgICA2NSxcbiAgICAgICAgMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDg4LFxuICAgICAgICA5MSxcbiAgICAgICAgNCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNixcbiAgICAgICAgMjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDc2LFxuICAgICAgICA3MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMixcbiAgICAgICAgNzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTksXG4gICAgICAgIDg4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDU0LFxuICAgICAgICAyLFxuICAgICAgICAxMixcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGdzBsalQyUTR6QTEyOXp4SnlpNGVQaFQrS2UwUXpTeHpLMk1IWk1SZFU4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJHWmc0RGhMY1E3SzEzRnJ5Wi01WVBRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU1YTU3MzNkLTk0OGItNDcxMC1iM2FlLWFjMzNmMjlmNjc2OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzcsXG4gICAgICAxNTQsXG4gICAgICAxMTEsXG4gICAgICAxNDYsXG4gICAgICAyNDMsXG4gICAgICAxOTQsXG4gICAgICAyOSxcbiAgICAgIDIzNyxcbiAgICAgIDIxNCxcbiAgICAgIDQ2LFxuICAgICAgMjQ1LFxuICAgICAgMTk3LFxuICAgICAgMjQxLFxuICAgICAgOTMsXG4gICAgICAxMSxcbiAgICAgIDIyLFxuICAgICAgMTM3LFxuICAgICAgMTA2LFxuICAgICAgMjA0LFxuICAgICAgMTI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NyxcbiAgICAgIDc4LFxuICAgICAgMjIwLFxuICAgICAgMTkyLFxuICAgICAgMjAxLFxuICAgICAgMjA3LFxuICAgICAgMjMxLFxuICAgICAgNjUsXG4gICAgICAyMTUsXG4gICAgICAyMTQsXG4gICAgICAxNTcsXG4gICAgICA1LFxuICAgICAgMTY1LFxuICAgICAgMzQsXG4gICAgICAxOTgsXG4gICAgICA4MyxcbiAgICAgIDcyLFxuICAgICAgMjA4LFxuICAgICAgODQsXG4gICAgICAxMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUVE2QjlRTlhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjM4ODY4Mjg6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4OTQ3NzE5NjY2MDg3NDoxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKcVVsNDRFRU9hU2hyZ0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlBlZTVkdEt2MERaYUtzZTVJTnFXeTZxTE93Y1l1RDhIUmswY0tSSHNmbGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidUlHa01SM0ZaV053S3pwZ1lpUUhGVFFwT0ltb3prdDJJR0FRUW9TUXo0akhMWlBvWEkxZGlVTnljcWZSM0RxWDUrSnBHeFlwTitCNCtLZHlPZ0lwQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidkdaOWhMVzJIazFUMHRBSlg2ZFVqNXFNVWE0blNZRE10OWs5RWdpelFrUjFNVFBsdy9BTUVKM1h5YlhKY21FN1J3UEVhekFsc29xWUdpUHpNWWh1aEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2Mzg4NjgyODoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODE1Mzk2MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZBYVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRkFhLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTTFFMzU3MXIwNTgrMTJHTG85akMvRHFuYUZWNzBNVEIrb0hoRVpXZVRpUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTAzNDgxMzY3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
