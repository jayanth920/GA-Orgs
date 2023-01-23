import ENV from 'ga-wdi-boston.ember-object-diagnostic/config/environment'
import ActiveModelAdapter from 'active-model-adapter'

export default ActiveModelAdapter.extend({
  host: ENV.apiHost
})
