export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  return {
    provide: {
      getLink: (path, external=false) => {
        if (external || !config.dev) {
          return `${config.baseURL}${path}`;
        }
        return path;
      },
    }
  }
});