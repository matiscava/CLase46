import { serve } from "http://deno.land/std@0.100.0/http/mod.ts"

const s = serve({ port: 8000 });
for await ( const req of s ) {
    req.respond({body: "Hello Deno Server!"})
}