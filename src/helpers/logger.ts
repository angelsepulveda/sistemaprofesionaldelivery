const loggerInfo = (message: unknown): void => {
  console.log(new Date(), message)
}

const loggerError = (message: string, err: Error) => {
  console.error(new Date(), message, err)
}

const loggerWarn = (message: string, err: Error) => {
  console.warn(new Date(), message, err)
}

export { loggerError, loggerInfo,loggerWarn }
