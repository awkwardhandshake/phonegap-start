
var doorcontrol = function () {
    
    var content = function ()
    {
        return jQuery("#doorcontrolcontent");
    };

    var currentEntrypath = "";
    
    var onOpenSuccess = function (data)
    {
        hideEntryPathList();
        
        content().children(".doorControlStatus").html(jQuery(data).children());
        
        setTimeout(showEntryPathList, doorcontrol.unlockDurationSeconds * 1000);
    };
    
    var onOpenError = function (request, testStatus, errorThrown)
    {
        hideEntryPathList();
        
        showStatus(currentEntrypath, doorcontrol.errorText, "error");
        
        setTimeout(showEntryPathList, 4000);
    };

    hideEntryPathList = function ()
    {
        content().find("ul").hide();
    };
    
    showEntryPathList = function ()
    {
        content().find("ul").show();
        content().children(".doorControlStatus").html("");
    };
    
    showStatus = function (entryPath, statusMsg, cssclass)
    {
        hideEntryPathList();
        
        var html = '<div class="doorControlEntryPath">' + entryPath + '</div>'
            + '<div class="doorControlMessage ' + cssclass + '">' + statusMsg + '</div>';
            
        content().children(".doorControlStatus").html(html);
    };

    return {
        activationUrl: "",
        unlockText: "Låser upp...",
        unlockDurationSeconds: 10,
        errorText: "Ett fel uppstod! Dörr ej upplåst.",
        
        openEntryPath: function ()
        {
            if (jQuery(this).is("a"))
                currentEntrypath = jQuery.query.load(this.href).get("epName");
            else
                currentEntrypath = jQuery(this).val();
                
            showStatus(currentEntrypath, doorcontrol.unlockText, "throbber");
            
            jQuery.ajax({
                url: doorcontrol.activationUrl,
                type: "POST",
                data: { epName: currentEntrypath },
                success: onOpenSuccess,
                error: onOpenError
            });
            
            return false;
        }
        
    };
}();