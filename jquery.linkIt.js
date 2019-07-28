/**
 * name: LinkIt
 * author: Miguel Figaredo
 * version: 1.0.0
 * license: MIT
 * 
 * JQuery LinkIt Plugin
 * 
 */

 (function($){
    $.fn.linkIt = function(options) {
        // alert(this.html());
        // Default settings
        var settings = $.extend({
            href : null,
            text: null,
            target: '_self',
            color: 'navy',
            background: '',
            decoration: 'none'
        }, options);

        // alert(settings.whatever);
        // Validate
        if(settings.href === null) {
            console.log('You need href option for linkIt to work');
            return this;
        }

        return this.each(function(){
            var object = $(this);
            if(settings.text == null) {
                settings.text = object.text();

            }
            object.wrap('<a target="'+settings.target+'" href="'+settings.href+'"></a>')
                .text(settings.text)
                .css({
                    'color' : settings.color,
                    'background-color' : settings.background,
                    'text-decoration': settings.decoration,
                });
        });


    }

 }(jQuery));

 