exports.handler = async function (event, context) {
    const generateHtml = (userAgent) => {
    return `
        <!DOCTYPE html>
        <html>
        <head>
        </head>
        <body>
            <p>🔎 user-agent ---> ${userAgent}</p>
        </body>
        </html>
    `;
    };
    const headers = await generateHtml(`${event.headers["user-agent"]}`);
    try {
        return { 
            statusCode: 200, 
            body: headers
        }
    } catch (err) {
        return { 
            statusCode: 500, 
            body: err.toString() 
        }
    }
};