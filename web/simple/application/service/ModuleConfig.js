/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Company.service.ModuleConfig
 *
 * Abstract configuration class for application modules
 */

Ext.define('Application.service.ModuleConfig', {
    moduleConfig: null,

    getModuleConfig: function() {
        var me = this;

        return me.moduleConfig;
    }
});