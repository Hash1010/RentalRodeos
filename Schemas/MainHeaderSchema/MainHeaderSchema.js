   define("MainHeaderSchema", ["ProcessModuleUtilities"], function(ProcessModuleUtilities) {
    return {
        attributes: {},
        methods: {              
            init: function() {
                this.callParent(arguments);
                this.Terrasoft.ServerChannel.on(Terrasoft.EventName.ON_MESSAGE, this.onPopupMessageReceived, this);
                   this.GetCurrentUserFieldValue();
            },
       
                     


          
            destroy: function() {
                this.Terrasoft.ServerChannel.un(Terrasoft.EventName.ON_MESSAGE, this.onPopupMessageReceived, this);
                this.callParent(arguments);
            },
            onPopupMessageReceived: function(sender, message) {
                if (message && message.Header && message.Header.Sender === "ErrorMessageSender") {
                    var result = this.Ext.decode(message.Body);
                    if (result.MessageText && result.Contact === Terrasoft.SysValue.CURRENT_USER_CONTACT.value) {
                        this.showInformationDialog(result.MessageText);
                    }
                }
			
            }
        },
        diff: []
    };
});