interface configuration {
    [value: string] :  string | number | boolean
}

export const  config: configuration  = {
    APP_PORT : process.env.APP_PORT || 3001,
    APP_URL :  process.env.APP_URL || "/",
    REDIS_HOST : process.env.REDIS_HOST || "myredis.taskforce.run",
    REDIS_PORT : process.env.REDIS_PORT || 32856,
    ALLOW_EXTERNAL : process.env.ALLOW_EXTERNAL || false,
    ALLOW_SUB_DOMAINS : process.env.ALLOW_SUB_DOMAINS || false
}