import { usePaths } from 'vitepress-openapi'
import spec from '../openapi/console-api.json' with { type: 'json' }

export default {
  paths() {
    return usePaths({ spec })
      .getPathsByVerbs()
      .map(({ operationId, summary }) => {
        return {
          params: {
            operationId,
            pageTitle: `${summary} - Console API`,
          },
        }
      })
  },
}