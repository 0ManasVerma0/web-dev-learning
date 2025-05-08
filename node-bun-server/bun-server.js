import {serve} from "bun";

serve({
    fetch(request){
        const url = new URL(request.url);
        if(url.pathname === "/"){
            return new Response("Hello there this is a Bun server", {status: 200})
        } else if(url.pathname === "/another-bun"){
            return new Response("Hello there this is another Bun server", {status: 200})
        } else {
            return new Response("SED you got error and its a 404 file not found :(", {status: 404})
        }
    },
    port: 3000,
    hostname: "127.0.0.1",
})