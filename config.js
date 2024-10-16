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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348163886828";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

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

  sessionName:process.env.SESSION_ID || "SUHAIL_18_46_10_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDg5LFxuICAgICAgICAyNixcbiAgICAgICAgMTkxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDU1LFxuICAgICAgICA2MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgOCxcbiAgICAgICAgMjExLFxuICAgICAgICA1MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5LFxuICAgICAgICAxMixcbiAgICAgICAgMjA2LFxuICAgICAgICA4NSxcbiAgICAgICAgODAsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNixcbiAgICAgICAgMzksXG4gICAgICAgIDU1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDUwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTUsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDg0LFxuICAgICAgICAzMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODUsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM5LFxuICAgICAgICA4NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDgsXG4gICAgICAgIDExLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEyLFxuICAgICAgICAxODUsXG4gICAgICAgIDExLFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDY5LFxuICAgICAgICA4MixcbiAgICAgICAgMjMzLFxuICAgICAgICA2LFxuICAgICAgICAxNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDgyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTksXG4gICAgICAgIDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDMzLFxuICAgICAgICA1MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAzNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMSxcbiAgICAgICAgODMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDY2LFxuICAgICAgICAyNixcbiAgICAgICAgMTg4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQxLFxuICAgICAgICA4MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQyLFxuICAgICAgICAyLFxuICAgICAgICA1NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTcsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc1LFxuICAgICAgICA4MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDUzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDMwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTksXG4gICAgICAgIDYwLFxuICAgICAgICA3NixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1MixcbiAgICAgICAgMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDczLFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImFPS3dZWGpNaE52VEt5MEdIR0tMWUFOb3NpS0RkaWI5bGd6Z2doWGwwdHM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImY4RXdYdzlPUkxPdzlNTy1sOE9CcEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGY4MzI0YjctOTIwNy00OTNiLTkxYzgtMjAxNTE2NGNiMDQxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MCxcbiAgICAgIDgsXG4gICAgICA0NixcbiAgICAgIDExNCxcbiAgICAgIDYyLFxuICAgICAgMTU3LFxuICAgICAgMTE2LFxuICAgICAgMTY0LFxuICAgICAgMTg4LFxuICAgICAgMTYzLFxuICAgICAgMjUyLFxuICAgICAgMTEyLFxuICAgICAgMjUzLFxuICAgICAgNTYsXG4gICAgICAyNDMsXG4gICAgICAyNDcsXG4gICAgICAxODUsXG4gICAgICA5OCxcbiAgICAgIDY4LFxuICAgICAgOTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE5LFxuICAgICAgMTMyLFxuICAgICAgNzgsXG4gICAgICAxNTcsXG4gICAgICAyMTEsXG4gICAgICA3MCxcbiAgICAgIDkzLFxuICAgICAgNDgsXG4gICAgICAxMzksXG4gICAgICA1MixcbiAgICAgIDIxLFxuICAgICAgODUsXG4gICAgICAxOTMsXG4gICAgICA0NyxcbiAgICAgIDE2MyxcbiAgICAgIDExMCxcbiAgICAgIDIxNCxcbiAgICAgIDYxLFxuICAgICAgNzEsXG4gICAgICAxMDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUkxBRTRKWkpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjM4ODY4Mjg6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE4OTQ3NzE5NjY2MDg3NDoxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKdVVsNDRFRVBXVHdMZ0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlBlZTVkdEt2MERaYUtzZTVJTnFXeTZxTE93Y1l1RDhIUmswY0tSSHNmbGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUnphN3Z0V3lLTVJFS0ZZM0JaU0tWQUFMbUl6OHVEd2ZpM0dUNWFNallXSlhKZDZtQXJveHdVVXhqMWpUZkpMZ0lrYjkwb0ZqWFVCVmd2T2M1RGJUQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZWZQVzJYc2NVK0lLRnlMaGdMUk9HSGpuWjVMWTRBdUNRMFBMNTdSSXRsT292dkNIcWlGeUdjczArcXo3aFhVNW5BcHI0bjAvbTRvNlplazRGTGhoQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2Mzg4NjgyODoxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTEwNDM3NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZBYVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRkFhLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTTFFMzU3MXIwNTgrMTJHTG85akMvRHFuYUZWNzBNVEIrb0hoRVpXZVRpUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTAzNDgxMzY3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0=",  // PUT SESSION ID HERE 
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
 
