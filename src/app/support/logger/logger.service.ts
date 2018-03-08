
/**
 * The possible log levels.
 */
export enum LogLevel {
  Off = 0,
  Error,
  Warning,
  Info,
  Debug
}

/**
 * Log output handler function.
 */
export type LogOutput = (source: string, level: LogLevel, ...objects: any[]) => void;

export class Logger {

  /**
   * Current logging level.
   */
  static level = LogLevel.Debug;

  /**
   * Additional log outputs.
   */
  static outputs: LogOutput[] = [];

  /**
   * Enables production mode.
   */
  static enableProductionMode() {
    Logger.level = LogLevel.Warning;
  }

  constructor(private source?: string) { }

  /**
   * Logs messages or objects with the debug level.
   */
  debug(...objects: any[]) {
    this.log(console.log, LogLevel.Debug, objects);
  }

  /**
   * Logs messages or objects with the info level.
   */
  info(...objects: any[]) {
    this.log(console.info, LogLevel.Info, objects);
  }

  /**
   * Logs messages or objects with the warning level.
   */
  warn(...objects: any[]) {
    this.log(console.warn, LogLevel.Warning, objects);
  }

  /**
   * Logs messages or objects with the error level.
   */
  error(...objects: any[]) {
    this.log(console.error, LogLevel.Error, objects);
  }

  private log(func: Function, level: LogLevel, objects: any[]) {
    if (level <= Logger.level) {
      const log = this.source ? ['[' + this.source + ']'].concat(objects) : objects;
      func.apply(console, log);
      Logger.outputs.forEach((output) => output.apply(output, [this.source, level].concat(objects)));
    }
  }
}
