import { serve } from "http://deno.land/std@0.100.0/http/mod.ts"

const PORT = Number(Deno.env.get("PORT")) || 8080;

/** Create Server */

const server = serve( {
    port: PORT
} )

console.log(`http://localhost:${PORT}`);

for await ( const req of server ) {
    req.respond({
        status: 200,
        headers: new Headers({
            "content-type": "text/html",
        }),
        body: "<h2>Hola Matinico !!</h2>"
    })
}
