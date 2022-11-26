// Teste de cache no Redis
(async () => {
 
    const redis = require('redis');
    const client = redis.createClient();
    client.connect();
 
    client.on("error", (error) => {
        console.error(error);
    });
 
    const res = await client.set("key", "Valor123");
    console.log(`Result do set: ${res}`);
 
    const key = await client.get("key");
    console.log(`Result do get: ${key}`);
 
})();