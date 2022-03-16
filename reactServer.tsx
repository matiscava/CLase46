// @deno-types="https://deno.land/x/servest@v1.3.4/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
// @deno-types="https://deno.land/x/servest@v1.3.4/types/react-dom/server/index.d.ts"
import ReactDOMServer from "https://dev.jspm.io/react-dom/server.js";
import { createApp } from 'https://deno.land/x/servest@v1.3.4/mod.ts';



const app = createApp();
// deno-lint-ignore no-inferrable-types
let visits:number = 0;

app.handle('/',async (req) => {
    await req.respond({
        status: 200,
        headers: new Headers({
            "content-type":"text/html; charset=UTF-8"
        }),
        body: ReactDOMServer.renderToString(
            <html>
                <head>
                    <meta charSet= "utf-8" />
                    <title>servest con React</title>
                </head>
                <body>
                    <h1 style={{color: 'blue'}}>Hello Servest con React!</h1>
                    <h2 style={{color: 'brown'}}>Visitas: {++visits}</h2>
                    <h3 style={{color: 'purple'}}>FyH: {new Date().toLocaleString()}</h3>

                </body>
            </html>
        ),
    })
})
app.listen({port: 8080})