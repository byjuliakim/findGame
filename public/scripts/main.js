"use strict";

!function (a) {
    function f(a, b) {
        if (!(a.originalEvent.touches.length > 1)) {
            a.preventDefault();var c = a.originalEvent.changedTouches[0],
                d = document.createEvent("MouseEvents");d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), a.target.dispatchEvent(d);
        }
    }if (a.support.touch = "ontouchend" in document, a.support.touch) {
        var e,
            b = a.ui.mouse.prototype,
            c = b._mouseInit,
            d = b._mouseDestroy;b._touchStart = function (a) {
            var b = this;!e && b._mouseCapture(a.originalEvent.changedTouches[0]) && (e = !0, b._touchMoved = !1, f(a, "mouseover"), f(a, "mousemove"), f(a, "mousedown"));
        }, b._touchMove = function (a) {
            e && (this._touchMoved = !0, f(a, "mousemove"));
        }, b._touchEnd = function (a) {
            e && (f(a, "mouseup"), f(a, "mouseout"), this._touchMoved || f(a, "click"), e = !1);
        }, b._mouseInit = function () {
            var b = this;b.element.bind({ touchstart: a.proxy(b, "_touchStart"), touchmove: a.proxy(b, "_touchMove"), touchend: a.proxy(b, "_touchEnd") }), c.call(b);
        }, b._mouseDestroy = function () {
            var b = this;b.element.unbind({ touchstart: a.proxy(b, "_touchStart"), touchmove: a.proxy(b, "_touchMove"), touchend: a.proxy(b, "_touchEnd") }), d.call(b);
        };
    }
}(jQuery);

var iconApp = {};

iconApp.iconArray = ["glass", "music", "search", "envelope-o", "heart", "star", "star-o", "user", "film", "th-large", "th", "th-list", "check", "remove", "search-plus", "search-minus", "power-off", "signal", "gear", "trash-o", "home", "file-o", "clock-o", "road", "download", "arrow-circle-o-down", "inbox", "play-circle-o", "repeat", "refresh", "list-alt", "lock", "flag", "headphones", "volume-off", "volume-down", "qrcode", "barcode", "tag", "tags", "book", "bookmark", "print", "camera", "font", "bold", "italic", "text-height", "text-width", "align-center", "align-right", "align-justify", "list", "indent", "video-camera", "photo", "pencil", "map-marker", "adjust", "tint", "edit", "share-square-o", "check-square-o", "arrows", "step-backward", "fast-backward", "backward", "play", "pause", "stop", "eject", "chevron-left", "plus-circle", "minus-circle", "times-circle", "check-circle", "question-circle", "info-circle", "crosshairs", "times-circle-o", "check-circle-o", "ban", "arrow-left", "mail-forward", "expand", "compress", "plus", "minus", "asterisk", "exclamation-circle", "gift", "leaf", "fire", "eye", "eye-slash", "warning", "plane", "calendar", "random", "comment", "magnet", "chevron-up", "retweet", "shopping-cart", "folder", "folder-open", "arrows-v", "arrows-h", "bar-chart", "twitter-square", "facebook-square", "camera-retro", "key", "cogs", "comments", "thumbs-o-up", "star-half", "heart-o", "sign-out", "linkedin-square", "thumb-tack", "external-link", "sign-in", "trophy", "github-square", "upload", "lemon-o", "phone", "square-o", "bookmark-o", "phone-square", "twitter", "facebook-f", "github", "unlock", "credit-card", "rss", "hdd-o", "bullhorn", "bell", "certificate", "hand-o-right", "arrow-circle-left", "globe", "wrench", "tasks", "filter", "briefcase", "arrows-alt", "users", "link", "cloud", "flask", "cut", "copy", "paperclip", "save", "square", "bars", "strikethrough", "underline", "table", "magic", "truck", "pinterest", "pinterest-square", "google-plus-square", "google-plus", "money", "caret-down", "columns", "sort", "envelope", "linkedin", "undo", "legal", "dashboard", "comment-o", "comments-o", "flash", "sitemap", "umbrella", "paste", "lightbulb-o", "exchange", "cloud-download", "cloud-upload", "user-md", "stethoscope", "suitcase", "bell-o", "coffee", "cutlery", "file-text-o", "building-o", "hospital-o", "ambulance", "medkit", "fighter-jet", "beer", "h-square", "plus-square", "angle-double-left", "angle-left", "desktop", "laptop", "tablet", "mobile-phone", "mobile", "circle-o", "quote-left", "quote-right", "spinner", "circle", "mail-reply", "reply", "github-alt", "folder-o", "folder-open-o", "smile-o", "frown-o", "meh-o", "gamepad", "keyboard-o", "flag-o", "flag-checkered", "terminal", "code", "mail-reply-all", "reply-all", "star-half-empty", "star-half-full", "star-half-o", "location-arrow", "crop", "code-fork", "unlink", "chain-broken", "question", "info", "exclamation", "superscript", "subscript", "eraser", "puzzle-piece", "microphone", "microphone-slash", "shield", "calendar-o", "fire-extinguisher", "rocket", "maxcdn", "chevron-circle-left", "html5", "css3", "anchor", "unlock-alt", "bullseye", "ellipsis-h", "ellipsis-v", "rss-square", "play-circle", "ticket", "minus-square", "minus-square-o", "level-down", "check-square", "pencil-square", "external-link-square", "share-square", "compass", "toggle-down", "caret-square-o-down", "euro", "gbp", "dollar", "rupee", "inr", "cny", "rmb", "yen", "jpy", "ruble", "rouble", "rub", "won", "krw", "bitcoin", "btc", "file", "file-text", "sort-alpha-asc", "sort-alpha-desc", "sort-amount-asc", "sort-amount-desc", "sort-numeric-asc", "sort-numeric-desc", "thumbs-up", "youtube-square", "youtube", "xing", "xing-square", "youtube-play", "dropbox", "stack-overflow", "instagram", "flickr", "adn", "bitbucket", "bitbucket-square", "tumblr", "tumblr-square", "long-arrow-down", "apple", "windows", "android", "linux", "dribbble", "skype", "foursquare", "trello", "female", "male", "gittip", "gratipay", "sun-o", "moon-o", "archive", "bug", "vk", "weibo", "renren", "pagelines", "stack-exchange", "arrow-circle-o-right", "dot-circle-o", "wheelchair", "vimeo-square", "turkish-lira", "try", "plus-square-o", "space-shuttle", "slack", "envelope-square", "wordpress", "openid", "institution", "bank", "university", "mortar-board", "graduation-cap", "yahoo", "google", "reddit", "reddit-square", "stumbleupon-circle", "stumbleupon", "delicious", "digg", "pied-piper", "pied-piper-alt", "drupal", "joomla", "language", "fax", "building", "child", "paw", "spoon", "cube", "cubes", "behance", "behance-square", "steam", "steam-square", "recycle", "automobile", "car", "cab", "taxi", "tree", "spotify", "deviantart", "soundcloud", "database", "file-pdf-o", "file-word-o", "file-excel-o", "file-powerpoint-o", "file-photo-o", "file-picture-o", "file-image-o", "file-zip-o", "file-archive-o", "file-sound-o", "file-audio-o", "file-movie-o", "file-video-o", "file-code-o", "vine", "codepen", "jsfiddle", "life-bouy", "life-buoy", "life-saver", "support", "life-ring", "circle-o-notch", "ra", "rebel", "ge", "empire", "git-square", "git", "hacker-news", "tencent-weibo", "qq", "wechat", "weixin", "send", "paper-plane", "send-o", "paper-plane-o", "history", "genderless", "circle-thin", "header", "paragraph", "sliders", "share-alt", "share-alt-square", "bomb", "soccer-ball-o", "futbol-o", "tty", "binoculars", "plug", "slideshare", "twitch", "yelp", "newspaper-o", "wifi", "calculator", "paypal", "google-wallet", "cc-visa", "cc-mastercard", "cc-discover", "cc-amex", "cc-paypal", "cc-stripe", "bell-slash", "bell-slash-o", "trash", "copyright", "at", "eyedropper", "paint-brush", "birthday-cake", "area-chart", "pie-chart", "line-chart", "lastfm", "lastfm-square", "toggle-off", "toggle-on", "bicycle", "bus", "ioxhost", "angellist", "cc", "shekel", "sheqel", "ils", "meanpath", "buysellads", "connectdevelop", "dashcube", "forumbee", "leanpub", "sellsy", "shirtsinbulk", "simplybuilt", "skyatlas", "cart-plus", "cart-arrow-down", "diamond", "ship", "user-secret", "motorcycle", "street-view", "heartbeat", "venus", "mars", "mercury", "transgender", "transgender-alt", "venus-double", "mars-double", "venus-mars", "mars-stroke", "mars-stroke-v", "mars-stroke-h", "neuter", "facebook-official", "pinterest-p", "whatsapp", "server", "user-plus", "user-times", "hotel", "bed", "viacoin", "train", "subway", "medium"];

//randomly create the 200 icons from the list
// iconApp. = function(){
iconApp.random = Math.floor(Math.random() * 100);

// };

//display the icons randomly inside a container

iconApp.displayIcon = function () {
    var ww = $('.wrapper').width() - 110;
    var wh = $('.wrapper').height() - 110;

    for (var i = 0; i < 100; i++) {
        //save the value of the array on a variable

        var iconHTML = "<div class='icons' id=" + iconApp.iconArray[i] + "><div class=flex><i class='fa fa-" + iconApp.iconArray[i] + "' aria-hidden='true'></i><div></div>";

        //generate icons on the page
        var generate = $(iconHTML).appendTo('.wrapper');

        //position the icons randomly on page
        $(generate).each(function (i) {
            var rotationNum = Math.round(Math.random() * 360 + 1);
            var rotation = "rotate(" + rotationNum + "deg)";
            var posx = Math.round(Math.random() * ww);
            var posy = Math.round(Math.random() * wh);
            $(this).css("top", posy + "px").css("left", posx + "px").css("transform", rotation);
            $(this).draggable({
                addClasses: false,
                containment: "parent",
                cursor: "crosshair"
            });
        });
    };
};
//and display a random one icon going in the header
iconApp.diplayHeader = function () {
    // iconApp.randomIcon = "";
    iconApp.randomIcon = iconApp.iconArray[iconApp.random];

    var $findHTML = ' "<div class="flex"><i class="fa fa-' + iconApp.randomIcon + '" aria-hidden="true"></i></div>"';

    $('.mainHead h1').append($findHTML);
};

//on click of the right icons display "correct!" else display "incorrect"
//need to have a "restart" button
iconApp.events = function () {
    $('.icons').click(function () {
        $(this).find('.flex').css('background', '#EF8354');
        if (this.id === iconApp.randomIcon) {
            $.APP.stopTimer();
            $('.icons').unbind('click');
            $('.correct').fadeIn();
            $('button').on('click', function () {
                window.location.reload();
            });
        } else {
            $('.icons').unbind('click');
            $('.wrong').fadeIn();
            $('button').on('click', function () {
                $('.wrong').fadeOut();
                $('.icons').bind('click', iconApp.events);
            });
        };
    });
};

iconApp.init = function () {
    iconApp.displayIcon();
    iconApp.diplayHeader();
    iconApp.events();
};

$(function () {
    $('.start').on('click', function () {
        $('.instruction').fadeOut();
        iconApp.init();
        $.APP.startTimer('sw');
    });
});

//timer APP
$(function () {
    $.extend({
        APP: {
            formatTimer: function formatTimer(a) {
                if (a < 10) {
                    a = '0' + a;
                }
                return a;
            },
            startTimer: function startTimer(dir) {
                var a;
                // save type
                $.APP.dir = dir;
                // get current date
                $.APP.d1 = new Date();
                switch ($.APP.state) {
                    case 'pause':
                        // resume timer
                        // get current timestamp (for calculations) and
                        // substract time difference between pause and now
                        $.APP.t1 = $.APP.d1.getTime() - $.APP.td;
                        break;
                    default:
                        // get current timestamp (for calculations)
                        $.APP.t1 = $.APP.d1.getTime();
                        break;
                }

                // reset state
                $.APP.state = 'alive';
                // start loop
                $.APP.loopTimer();
            },

            pauseTimer: function pauseTimer() {
                // save timestamp of pause
                $.APP.dp = new Date();
                $.APP.tp = $.APP.dp.getTime();

                // save elapsed time (until pause)
                $.APP.td = $.APP.tp - $.APP.t1;

                // change button value
                $('#' + $.APP.dir + '_start').val('Resume');

                // set state
                $.APP.state = 'pause';
                $('#' + $.APP.dir + '_status').html('Paused');
            },

            stopTimer: function stopTimer() {
                // change button value
                $('#' + $.APP.dir + '_start').val('Restart');

                // set state
                $.APP.state = 'stop';
                $('#' + $.APP.dir + '_status').html('Stopped');
            },

            resetTimer: function resetTimer() {
                // reset display
                $('#' + $.APP.dir + '_ms,#' + $.APP.dir + '_s,#' + $.APP.dir + '_m,#' + $.APP.dir + '_h').html('00');

                // change button value
                $('#' + $.APP.dir + '_start').val('Start');

                // set state
                $.APP.state = 'reset';
                $('#' + $.APP.dir + '_status').html('Reset & Idle again');
            },

            endTimer: function endTimer(callback) {
                // change button value
                $('#' + $.APP.dir + '_start').val('Restart');

                // set state
                $.APP.state = 'end';

                // invoke callback
                if (typeof callback === 'function') {
                    callback();
                }
            },

            loopTimer: function loopTimer() {
                var td;
                var d2, t2;

                var ms = 0;
                var s = 0;
                var m = 0;
                var h = 0;

                if ($.APP.state === 'alive') {

                    // get current date and convert it into 
                    // timestamp for calculations
                    d2 = new Date();
                    t2 = d2.getTime();

                    // calculate time difference between
                    // initial and current timestamp
                    if ($.APP.dir === 'sw') {
                        td = t2 - $.APP.t1;
                        // reversed if countdown
                    } else {
                        td = $.APP.t1 - t2;
                        if (td <= 0) {
                            // if time difference is 0 end countdown
                            $.APP.endTimer(function () {
                                $.APP.resetTimer();
                                $('#' + $.APP.dir + '_status').html('Ended & Reset');
                            });
                        }
                    }

                    // calculate milliseconds
                    ms = td % 1000;
                    if (ms < 1) {
                        ms = 0;
                    } else {
                        // calculate seconds
                        s = (td - ms) / 1000;
                        if (s < 1) {
                            s = 0;
                        } else {
                            // calculate minutes   
                            var m = (s - s % 60) / 60;
                            if (m < 1) {
                                m = 0;
                            } else {
                                // calculate hours
                                var h = (m - m % 60) / 60;
                                if (h < 1) {
                                    h = 0;
                                }
                            }
                        }
                    }

                    // substract elapsed minutes & hours
                    ms = Math.round(ms / 100);
                    s = s - m * 60;
                    m = m - h * 60;

                    // update display
                    $('#' + $.APP.dir + '_ms').html($.APP.formatTimer(ms));
                    $('#' + $.APP.dir + '_s').html($.APP.formatTimer(s));
                    $('#' + $.APP.dir + '_m').html($.APP.formatTimer(m));
                    $('#' + $.APP.dir + '_h').html($.APP.formatTimer(h));

                    // loop
                    $.APP.t = setTimeout($.APP.loopTimer, 1);
                } else {

                    // kill loop
                    clearTimeout($.APP.t);
                    return true;
                }
            }
        }
    });

    $('#sw_stop').on('click', function () {
        $.APP.stopTimer();
    });

    $('#sw_reset').on('click', function () {
        $.APP.resetTimer();
    });

    $('#sw_pause').on('click', function () {
        $.APP.pauseTimer();
    });
});

//twitter
window.twttr = function (d, s, id) {
    var js,
        fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function (f) {
        t._e.push(f);
    };

    return t;
}(document, "script", "twitter-wjs");