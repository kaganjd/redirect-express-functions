exports.handler = async function(event, context) {
    console.log(JSON.parse(event.body))
    return {
      statusCode: s,
      body: event.body
    };
};