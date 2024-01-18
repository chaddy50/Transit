/// <reference lib="dom" />

async function go()
{
    const response = await fetch("https://external.transitapp.com/v3/public/available_networks", {
        method: "GET",
        headers: {
            "Accept-Language": "en"
        }
    })
    console.log(response);
}

go();