function reset(t,r){for(let a in t){let o=t[a],l=Array.from(o.word.toUpperCase()),s=a.substring(0,a.length-1);if(r[o.startY][o.startX]=s,"d"==a.charAt(a.length-1))for(var e=0;e<l.length;e++)r[o.startY+e+1][o.startX]="|";else for(e=0;e<l.length;e++)r[o.startY][o.startX+e+1]="|"}}function reveal(t,r,e){let a=t[e],o=Array.from(a.word.toUpperCase());if("d"==e.charAt(e.length-1))for(var l=0;l<o.length;l++){let t=o[l].toString();32==t.charCodeAt(0)&&(t="|"),r[a.startY+l+1][a.startX]=t}else for(l=0;l<o.length;l++){let t=o[l].toString();32==t.charCodeAt(0)&&(t="|"),r[a.startY][a.startX+l+1]=t}}function fullPopulate(t,r){for(let a in t){let o=t[a],l=Array.from(o.word.toUpperCase()),s=a.substring(0,a.length-1);if(r[o.startY][o.startX]=s,"d"==a.charAt(a.length-1))for(var e=0;e<l.length;e++){let t=l[e].toString();32==t.charCodeAt(0)&&(t="|"),r[o.startY+e+1][o.startX]=t}else for(e=0;e<l.length;e++){let t=l[e].toString();32==t.charCodeAt(0)&&(t="|"),r[o.startY][o.startX+e+1]=t}}}