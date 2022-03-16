import { serve } from "http://deno.land/std@0.100.0/http/mod.ts"

const paramsString = "q=URLUtils.searchParams&topic=api"
const searchParams = new URLSearchParams(paramsString);

for ( const p of searchParams){
    console.log('params',p);
    
}

const s = serve({ port: 8080 });
for await ( const req of s ) {
    const u = req.url;
    // const frase = u
    // console.log('url',u.replace({'/?frase=',''},{'%20',' '}));
    let message = u.replace('/?frase=','')
    message = message.replace('%20',' ')
    req.respond({body: message})
}