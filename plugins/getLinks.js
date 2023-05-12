export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  return {
    provide: {
      getLink: (path, external=false) => {
        if (external) {
          return `${config.externalURL}${path}`;
        } else if (!config.dev) {
          return `${config.baseURL}${path}`;
        }
        return path;
      },
    }
  }
});