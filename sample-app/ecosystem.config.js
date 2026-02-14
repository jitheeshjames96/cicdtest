module.exports = {
  apps: [
    {
      name: "sample-app",
      script: "app.js",
      instances: "max",
      exec_mode: "cluster",
      autorestart: true,
      max_memory_restart: "500M"
    }
  ]
};

