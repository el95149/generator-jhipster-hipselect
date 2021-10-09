const constants = require('generator-jhipster/generators/generator-constants');

const VUE_DIR = constants.VUE_DIR;
const CURRENT_VUE_TEMPLATE_PATH = 'vue';

const vueFiles = {
    common: [
        {
            templates: ['package.json']
        }
    ],
    vueApp: [
        {
            path: VUE_DIR,
            templates: ['main.ts']
        }
    ]
};

module.exports = {
    writeFiles
};

function writeFiles() {
    this.writeFilesToDisk(vueFiles, this, false, CURRENT_VUE_TEMPLATE_PATH);
}
