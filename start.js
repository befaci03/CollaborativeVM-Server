const e=console;const u=e.error;const o=e.log;const g=e.clear;const f=5;const q='chalk';const b=require;const x=b(q);const z=['/','-','\\','|'];const k=x.Chalk;const h=new k({});(async()=>{for(let p=0;p<((z.length*f)/2);p++){for(const v of z){g();o(h.yellow(v));await new Promise((resolve,reject)=>{setTimeout(resolve,Math.round(z.length*z.toString().length)*2)})}}g();try{require('./colllibs/.launcher/f8A2dFgc1dfS.mjs');}catch(err){u("Error when load of the launcher:",err.message);}})()