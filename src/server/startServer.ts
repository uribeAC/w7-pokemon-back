import chalk from "chalk";
import app from "./app.js";

const startServer = (port: number): void => {
  app.listen(port, () => {
    console.log(chalk.blue("******************************************"));
    console.log(
      chalk.blue("🚀💫 Server launched:") +
        chalk.green(` Listening on http://localhost:${port}`),
    );
    console.log(chalk.blue("******************************************"));
  });
};

export default startServer;
