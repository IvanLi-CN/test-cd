module.exports = {
  apps: [
    {
      name: "test-cd",
      script: "npm",
      args: "run start",
      watch: false,
      ignore_watch: ["node_modules"],
      log_date_format: "MM-DD HH:mm:ss.SSS Z",
      env: {},
      max_restarts: 5,
    },
  ],
};
