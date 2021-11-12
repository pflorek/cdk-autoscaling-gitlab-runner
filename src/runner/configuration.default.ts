type DefaultConfiguration =
  | GlobalConfiguration
  | {
      runnersConfig: Omit<RunnersConfiguration, "token" | "cache">;
    };

const configuration: DefaultConfiguration = {
  concurrent: 10,
  checkInterval: 0,
  runnersConfig: {
    name: "gitlab-runner",
    url: "https://gitlab.com",
    limit: 10,
    outputLimit: 52428800,
    docker: {
      image: "docker:19.03.5",
    },
    machine: {
      idleCount: 0,
      idleTime: 300,
      maxBuilds: 20,
      machineName: "gitlab-runner",
      machineOptions: {
        instanceType: 
      },
      autoscaling: [],
    },
  },
};
