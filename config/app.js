(function(){"use strict";var e=require("crypto"),n=require("base64url"),i=require("fs"),r=Date.now(),t=n(e.randomBytes(64));i.appendFile("./config/app.js","\n//UNIX="+r+"\n//APP_KEY="+t,function(e){if(e)throw e}),i.appendFile(".env","\n#UNIX="+r+"\n#APP_KEY="+t,function(e){if(e)throw e;process.exit(0)})}).call(this);

//UNIX=1643396756435
//APP_KEY=-JYS92l1bsxICaJ39yVlaleVcusZPgUhxLilAltPDZuU7mCwIkpZoXaDEygkzyTXVS9ly6dAHtZuQQOENdueSA