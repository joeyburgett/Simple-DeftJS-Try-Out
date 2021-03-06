/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class First.store.Employees
 * @extends Ext.data.Store
 *
 * Store of the "First" module
 */

Ext.define('First.store.Employees', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.Rest',
        'Ext.window.MessageBox'
    ],

    model: 'First.model.Employee',

    autoLoad: false,

    autoSync: false,

    pageSize: 20,

    proxy: {
        type: 'rest',
        appendId: true,
        api: {
            read: 'employee/'
        },
        reader: {
            type: 'json',
            root: 'data',
            idProperty: 'id',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            root: 'data',
            nameProperty: 'mapping',
            encode: false,
            writeAllFields: false,
            allowSingle: false
        },
        listeners: {
            exception: function(proxy, response, operation) {
                Ext.MessageBox.show({
                    title: 'EXCEPTION',
                    msg: Ext.String.format(
                        '{0} ({1})',
                        response.status,
                        response.statusText
                    ),
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
        },
        buildUrl: function(request) {
            var url = Ext.data.proxy.Rest.prototype.buildUrl.apply(this, arguments);
            // Adds a slash before query string
            return url.replace(/(\d+)(\?)/, "$1/$2");
        }
    }
});
