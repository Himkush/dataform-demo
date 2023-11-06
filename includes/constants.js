
const env = dataform.projectConfig.vars.execEnv;
const dataform_dataset = "dataform_"+env
const dataform_test_dataset = "dataform_test_"+env

module.exports = {dataform_dataset, dataform_test_dataset};