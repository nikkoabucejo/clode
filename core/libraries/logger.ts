const logger = {
  debug: (...args: any) => console.log("\x1b[34mDebug", ...args, "\x1b[0m"),
  success: (...args: any) => console.log("\x1b[32mSuccess\x1b[0m", ...args),
  error: (...args: any) => console.error("\x1b[31mError\x1b[0m", ...args),
};

export default logger;