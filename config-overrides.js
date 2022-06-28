const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',
        '@ui': 'src/components/UI',
        '@constants': 'src/constants',
        '@context': 'src/context',
        '@containers': 'src/containers',
        '@hoc-helpers': 'src/hoc-helpers',
        '@hooks': 'src/hooks',
        '@routes': 'src/routes',
        '@services': 'src/services',
        '@static': 'src/static',
        '@store': 'src/store',
        '@styles': 'src/styles',
        '@utils': 'src/utils',
    })(config);
    
    return config;
}
  