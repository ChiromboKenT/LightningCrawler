interface configuration {
    [value: string] :  string | number | boolean
}

export const  config: configuration  = {
    APP_PORT : process.env.APP_PORT || 5000,
    APP_URL :  process.env.APP_URL || "/",
    REDIS_HOST : process.env.REDIS_HOST || "redis",
    REDIS_PORT : process.env.REDIS_PORT || 6379,
    ALLOW_EXTERNAL : process.env.ALLOW_EXTERNAL || false,
    ALLOW_SUB_DOMAINS : process.env.ALLOW_SUB_DOMAINS || false,

}