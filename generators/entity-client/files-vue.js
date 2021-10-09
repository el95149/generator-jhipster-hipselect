const constants = require('generator-jhipster/generators/generator-constants');
// const vueFiles = require('generator-jhipster/generators/client/files-vue').files;

const VUE_DIR = constants.VUE_DIR;
// const ORIGINAL_VUE_TEMPLATE_PATH = '../../../node_modules/generator-jhipster/generators/entity-client/templates/vue';
const CURRENT_VUE_TEMPLATE_PATH = 'vue';

const files = {
    client: [
        {
            path: VUE_DIR,
            templates: [
                {
                    file: 'entities/entity-update.vue',
                    renameTo: generator => `entities/${generator.entityFolderName}/${generator.entityFileName}-update.vue`
                }
            ]
        }
    ]
};

module.exports = {
    writeFiles
};

function writeFiles() {
    // this.writeFilesToDisk(vueFiles, this, false, ORIGINAL_VUE_TEMPLATE_PATH); // always originals first
    this.writeFilesToDisk(files, this, false, CURRENT_VUE_TEMPLATE_PATH);
}
