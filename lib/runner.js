const color = require("ansi-colors");
const symbols = require("./symbols");

class Runner {
  constructor(data = {}) {
    this.data = data;
    this.tasks = {};
  }

  /**
   * Merges the internal `data` object of runner with provided `data` object
   *
   * ```js
   * runner.set({foo: 'bar'})
   * ```
   * @param {Object} `object` object
   * @api public
   */
  set = (data) => {
    this.data = { ...this.data, ...data };
  };

  get = (key) => {
    return this.data[key];
  };

  clear = () => {
    this.data = {};
  };

  task = (taskName, cb) => {
    this.tasks[taskName] = cb;
  };

  run = (tasks, cb) => {
    if (typeof tasks === "string") {
      const taskFn = this.tasks[tasks];
      if (!taskFn) throw new Error(`task not registered: ${tasks}`);
      console.log(symbols.info, `${color.dim("started:")}${tasks}`);
      taskFn(() =>
        console.log(
          symbols.success,
          `${color.greenBright("finished:")}${tasks}`
        )
      );
      cb();
      return;
    }
    if (Array.isArray(tasks)) {
      for (const task of tasks) {
        const taskFn = this.tasks[task];
        if (!taskFn) throw new Error(`task not registered: ${task}`);
        console.log(symbols.info, `${color.dim("started:")}${task}`);
        taskFn(() =>
          console.log(
            symbols.success,
            `${color.greenBright("finished:")}${task}`
          )
        );
      }
      cb();
      return;
    }
  };
}

module.exports = Runner;
