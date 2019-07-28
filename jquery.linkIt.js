/**
 * name: LinkIt
 * author: Miguel Figaredo
 * version: 0.2.0
 * license: MIT
 * 
 * JQuery LinkIt Plugin
 * Simple jQuery plugin that allows to attach a link to any element
 */

 (function($){
    $.fn.linkIt = function(options) {
        
        // Default settings
        var settings = $.extend({
            href : null,
            text: null,
            target: '_self',
            color: 'navy',
            background: '',
            decoration: 'none'
        }, options);

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

 