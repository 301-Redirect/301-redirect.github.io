!function(e) {
    function t(t) {
        for (var i, a, o = t[0], l = t[1], h = t[2], c = 0, v = []; c < o.length; c++)
            a = o[c],
            r[a] && v.push(r[a][0]),
            r[a] = 0;
        for (i in l)
            Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i]);
        for (u && u(t); v.length; )
            v.shift()();
        return s.push.apply(s, h || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < s.length; t++) {
            for (var n = s[t], i = !0, o = 1; o < n.length; o++) {
                var l = n[o];
                0 !== r[l] && (i = !1)
            }
            i && (s.splice(t--, 1),
            e = a(a.s = n[0]))
        }
        return e
    }
    var i = {}
      , r = {
        app: 0
    }
      , s = [];
    function a(t) {
        if (i[t])
            return i[t].exports;
        var n = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, a),
        n.l = !0,
        n.exports
    }
    a.e = function(e) {
        var t = []
          , n = r[e];
        if (0 !== n)
            if (n)
                t.push(n[2]);
            else {
                var i = new Promise(function(t, i) {
                    n = r[e] = [t, i]
                }
                );
                t.push(n[2] = i);
                var s, o = document.createElement("script");
                o.charset = "utf-8",
                o.timeout = 120,
                a.nc && o.setAttribute("nonce", a.nc),
                o.src = function(e) {
                    return a.p + "assets/js/" + e + ".js"
                }(e),
                s = function(t) {
                    o.onerror = o.onload = null,
                    clearTimeout(l);
                    var n = r[e];
                    if (0 !== n) {
                        if (n) {
                            var i = t && ("load" === t.type ? "missing" : t.type)
                              , s = t && t.target && t.target.src
                              , a = new Error("Loading chunk " + e + " failed.\n(" + i + ": " + s + ")");
                            a.type = i,
                            a.request = s,
                            n[1](a)
                        }
                        r[e] = void 0
                    }
                }
                ;
                var l = setTimeout(function() {
                    s({
                        type: "timeout",
                        target: o
                    })
                }, 12e4);
                o.onerror = o.onload = s,
                document.head.appendChild(o)
            }
        return Promise.all(t)
    }
    ,
    a.m = e,
    a.c = i,
    a.d = function(e, t, n) {
        a.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    a.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    a.t = function(e, t) {
        if (1 & t && (e = a(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (a.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                a.d(n, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return n
    }
    ,
    a.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return a.d(t, "a", t),
        t
    }
    ,
    a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    a.p = "/",
    a.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var o = this.webpackJsonp = this.webpackJsonp || []
      , l = o.push.bind(o);
    o.push = t,
    o = o.slice();
    for (var h = 0; h < o.length; h++)
        t(o[h]);
    var u = l;
    s.push([365, "vendors"]),
    n()
}({
    126: function(e, t, n) {
        e.exports = {
            icon: "icon-2IkghMD"
        }
    },
    127: function(e, t, n) {
        e.exports = {
            "primary-button": "primary-button-2u4GFLa",
            primaryButton: "primary-button-2u4GFLa",
            "button-content": "button-content-1adY7vO",
            buttonContent: "button-content-1adY7vO",
            icon: "icon-2rxvP21",
            connect: "connect-1u6D8Qj",
            "is-small": "is-small-1IGWDjG",
            isSmall: "is-small-1IGWDjG"
        }
    },
    128: function(e, t, n) {
        e.exports = {
            "hero-block": "hero-block-3-iFLMo",
            heroBlock: "hero-block-3-iFLMo",
            background: "background-3zW6HLB",
            content: "content-1xIcHay",
            logo: "logo-2vyWVA2",
            description: "description-tpdgika",
            "scroll-arrow": "scroll-arrow-2yeq6rA",
            scrollArrow: "scroll-arrow-2yeq6rA",
            "scroll-icon": "scroll-icon-_TMdNJM",
            scrollIcon: "scroll-icon-_TMdNJM",
            isInView: "is-in-view-2PCjpJR"
        }
    },
    129: function(e, t, n) {
        e.exports = {
            "about-content-section": "about-content-section-1lXLGrB",
            aboutContentSection: "about-content-section-1lXLGrB",
            background: "background-sK6A2RZ",
            content: "content-1GLFAvj",
            col: "col-33slgys"
        }
    },
    130: function(e, t, n) {},
    131: function(e, t, n) {
        e.exports = {
            "enter-library-block": "enter-library-block-2t-owV-",
            enterLibraryBlock: "enter-library-block-2t-owV-",
            background: "background-2LGoD5s"
        }
    },
    132: function(e, t, n) {
        e.exports = {
            list: "list-15sSvTC",
            item: "item-2_J61ov",
            image: "image-33R5Bda",
            "read-more": "read-more-ROOVIwu",
            readMore: "read-more-ROOVIwu",
            content: "content-16RgczL",
            role: "role-3s3PK4C"
        }
    },
    133: function(e, t, n) {
        e.exports = {
            "share-list": "share-list-3Hcc_3i",
            shareList: "share-list-3Hcc_3i",
            "share-button": "share-button-1UeddYa",
            shareButton: "share-button-1UeddYa",
            "is-horizontal": "is-horizontal-xRUtPgT",
            isHorizontal: "is-horizontal-xRUtPgT"
        }
    },
    134: function(e, t, n) {
        e.exports = {
            "link-out-block": "link-out-block-2X3-AJz",
            linkOutBlock: "link-out-block-2X3-AJz",
            content: "content--DDr_8p",
            list: "list-3RNZuyg",
            item: "item-30lv7Jz",
            icon: "icon-1zRl-QV",
            title: "title-157Jb3W",
            text: "text-211VEsA",
            "items-4": "items-4-ekc8WIx",
            items4: "items-4-ekc8WIx",
            "is-downloads": "is-downloads-k_KHo8m",
            isDownloads: "is-downloads-k_KHo8m"
        }
    },
    135: function(e, t, n) {
        e.exports = {
            content: "content-3U1VWBG",
            image: "image-3u502pa",
            "image-wrapper": "image-wrapper-2ghPCoi",
            imageWrapper: "image-wrapper-2ghPCoi",
            column: "column-12elxPi",
            text: "text-3pmPA-0"
        }
    },
    136: function(e, t, n) {
        e.exports = {
            "floorplan-block": "floorplan-block-1psxzp2",
            floorplanBlock: "floorplan-block-1psxzp2",
            content: "content-31XCYw7",
            image: "image-RsnG_te",
            list: "list-2YLSFxl",
            number: "number-2-YJaQP"
        }
    },
    137: function(e, t, n) {
        e.exports = {
            "contact-block": "contact-block-3uA3r3c",
            contactBlock: "contact-block-3uA3r3c",
            links: "links-32NkBae",
            content: "content-2sPibTA",
            col: "col-1_GyDgA",
            contact: "contact-3aOSgOV",
            "meta-data": "meta-data-1KKBtOw",
            metaData: "meta-data-1KKBtOw",
            relations: "relations-CbjkxUh"
        }
    },
    138: function(e, t, n) {
        e.exports = {
            scroll: "scroll-PuesCIg"
        }
    },
    139: function(e, t, n) {
        e.exports = {
            "webgl-page": "webgl-page-1DO0Keu",
            webglPage: "webgl-page-1DO0Keu"
        }
    },
    140: function(e, t, n) {
        e.exports = {
            "person-page": "person-page-2LLCSR1",
            personPage: "person-page-2LLCSR1",
            "grid-blocks": "grid-blocks-16DETaG",
            gridBlocks: "grid-blocks-16DETaG",
            "content-wrapper": "content-wrapper-1X1jNE6",
            contentWrapper: "content-wrapper-1X1jNE6",
            content: "content-3vMR6Bq",
            title: "title-1mME8MG",
            "freedom-index": "freedom-index-68JC-8l",
            freedomIndex: "freedom-index-68JC-8l",
            col: "col-HpE6FIk",
            "main-image-wrapper": "main-image-wrapper-2F75E-S",
            mainImageWrapper: "main-image-wrapper-2F75E-S",
            "main-image": "main-image-Qp6Jn5b",
            mainImage: "main-image-Qp6Jn5b",
            "main-image-caption": "main-image-caption-edFLwFS",
            mainImageCaption: "main-image-caption-edFLwFS",
            "personal-image": "personal-image-3CX-JfQ",
            personalImage: "personal-image-3CX-JfQ",
            navigation: "navigation-3wB2uL2",
            "navigation-button": "navigation-button-2pWIRk2",
            navigationButton: "navigation-button-2pWIRk2"
        }
    },
    141: function(e, t, n) {
        e.exports = {
            "close-button": "close-button-1S0lSH-",
            closeButton: "close-button-1S0lSH-"
        }
    },
    142: function(e, t, n) {
        e.exports = {
            "video-page": "video-page-2uV9OGa",
            videoPage: "video-page-2uV9OGa",
            "close-button": "close-button-23DakxJ",
            closeButton: "close-button-23DakxJ"
        }
    },
    143: function(e, t, n) {
        e.exports = {
            "scrolling-grid-blocks": "scrolling-grid-blocks-3A9Of4f",
            scrollingGridBlocks: "scrolling-grid-blocks-3A9Of4f"
        }
    },
    144: function(e, t, n) {
        e.exports = {
            "grid-test-page": "grid-test-page-2PiMLLu",
            gridTestPage: "grid-test-page-2PiMLLu",
            grid: "grid-21ITQQG"
        }
    },
    145: function(e, t, n) {
        e.exports = {
            "text-page": "text-page-1d8j5oo",
            textPage: "text-page-1d8j5oo",
            "scroll-wrapper": "scroll-wrapper-5YXezAE",
            scrollWrapper: "scroll-wrapper-5YXezAE",
            content: "content-1mF3vWm",
            title: "title-HwE16lr",
            "close-button": "close-button-2krmRG9",
            closeButton: "close-button-2krmRG9"
        }
    },
    146: function(e, t, n) {
        e.exports = {
            "site-preloader": "site-preloader-17ycN11",
            sitePreloader: "site-preloader-17ycN11",
            content: "content-3E3FhhR",
            progress: "progress-1sBj3ko",
            loader: "loader-3PCLvz5",
            text: "text-1vEvw9U"
        }
    },
    147: function(e, t, n) {
        e.exports = {
            "current-page-title": "current-page-title-2n_0LbB",
            currentPageTitle: "current-page-title-2n_0LbB",
            wrapper: "wrapper-F9WrxkW",
            "number-wrapper": "number-wrapper-1sUakOY",
            numberWrapper: "number-wrapper-1sUakOY",
            numbers: "numbers-2NbrbE-",
            number: "number-2OjTo6b",
            "is-previous": "is-previous-2uuuuYD",
            isPrevious: "is-previous-2uuuuYD",
            "is-next": "is-next-3pckYsr",
            isNext: "is-next-3pckYsr",
            "title-wrapper": "title-wrapper-qOY9s_g",
            titleWrapper: "title-wrapper-qOY9s_g",
            title: "title-3FxyNQ-",
            "is-active": "is-active-3jEwLzV",
            isActive: "is-active-3jEwLzV"
        }
    },
    148: function(e, t, n) {
        e.exports = {
            "site-header": "site-header-1g8NdTn",
            siteHeader: "site-header-1g8NdTn",
            inverted: "inverted-2R8SnZH",
            background: "background-100xAU2",
            content: "content-3pv9g3h",
            "menu-toggle": "menu-toggle-3iYwygS",
            menuToggle: "menu-toggle-3iYwygS",
            hashtag: "hashtag-2FsK3ee",
            logo: "logo-3L-65jx",
            "page-title": "page-title-3ynDAHF",
            pageTitle: "page-title-3ynDAHF",
            "meta-navigation": "meta-navigation-2jXJeNQ",
            metaNavigation: "meta-navigation-2jXJeNQ",
            share: "share-135dGgy",
            "share-button": "share-button-3FvF_81",
            shareButton: "share-button-3FvF_81"
        }
    },
    149: function(e, t, n) {
        e.exports = {
            "main-navigation": "main-navigation-1xLa89G",
            mainNavigation: "main-navigation-1xLa89G",
            background: "background-3Za0ENr",
            hashtag: "hashtag-1wObycH",
            "content-wrapper": "content-wrapper-2lA-roF",
            contentWrapper: "content-wrapper-2lA-roF",
            grid: "grid-3nN2UOG",
            content: "content-2tKlfhY",
            header: "header-3a2Cf3I",
            "nav-item-list": "nav-item-list-2v_LJN0",
            navItemList: "nav-item-list-2v_LJN0",
            "nav-item": "nav-item-3ZbYCao",
            navItem: "nav-item-3ZbYCao",
            "nav-button": "nav-button-QR3cm4R",
            navButton: "nav-button-QR3cm4R",
            "close-button": "close-button-zo465m-",
            closeButton: "close-button-zo465m-",
            locales: "locales-2olKgLf",
            "locale-button": "locale-button-iPYhPx-",
            localeButton: "locale-button-iPYhPx-"
        }
    },
    150: function(e, t, n) {
        e.exports = {
            "button-arrow": "button-arrow-3L78QYP",
            buttonArrow: "button-arrow-3L78QYP",
            "is-active": "is-active-1ITy6CB",
            isActive: "is-active-1ITy6CB",
            "close-button": "close-button-2n2wvbU",
            closeButton: "close-button-2n2wvbU",
        }
    },
    151: function(e, t, n) {
        e.exports = {
            "is-map-open": "is-map-open-1Og48kL",
            isMapOpen: "is-map-open-1Og48kL",
            "close-button": "close-button-fHki6SB",
            closeButton: "close-button-fHki6SB",
            previous: "previous-3jZ5fF-",
            next: "next-2WHShJ4",
        }
    },
    152: function(e, t, n) {
        e.exports = {
            "hotspot-overlay": "hotspot-overlay-2SdB9o8",
            hotspotOverlay: "hotspot-overlay-2SdB9o8",
            wrapper: "wrapper-cHj2528",
            "grid-blocks": "grid-blocks-vmAvrtY",
            gridBlocks: "grid-blocks-vmAvrtY",
            content: "content-3A3XIcb",
            title: "title-1E6NhdF",
            "freedom-index": "freedom-index-27_Kq73",
            freedomIndex: "freedom-index-27_Kq73",
            "book-cta": "book-cta-1aLtJH5",
            bookCta: "book-cta-1aLtJH5",
            book: "book-2vyDghl",
            "book-cta-text": "book-cta-text-2sw7D1d",
            bookCtaText: "book-cta-text-2sw7D1d",
            "close-button": "close-button-168h9_H",
            closeButton: "close-button-168h9_H",
            copy: "copy-3gFp2bY"
        }
    },
    153: function(e, t, n) {
        e.exports = {
            content: "content-15WJOah",
            scroll: "scroll-WCYGD2c",
            title: "title-2KCQ291",
            credits: "credits-r-FIbLo",
            notes: "notes-pCgQjQq",
            frame: "frame-3QScf-o",
            top: "top-3YgXVFE",
            bottom: "bottom-1CxBfz0",
            "close-button": "close-button-3cHPyrk",
            closeButton: "close-button-3cHPyrk"
        }
    },
    154: function(e, t, n) {
        e.exports = {
            "navigation-hint": "navigation-hint-1RUdOVj",
            navigationHint: "navigation-hint-1RUdOVj",
            icon: "icon-gdcCajl"
        }
    },
    155: function(e, t, n) {
        e.exports = {
            "webgl-container": "webgl-container-1dsR7MO",
            webglContainer: "webgl-container-1dsR7MO",
            navigation: "navigation-nNrOT0b",
            loading: "loading-2Fd_r4B",
            "is-active": "is-active-1FOGws2",
            isActive: "is-active-1FOGws2",
            hotspot: "hotspot-20yt6fd",
            "is-blurred": "is-blurred-1XUMroD",
            isBlurred: "is-blurred-1XUMroD",
            "has-overlay": "has-overlay-39BzG76",
            hasOverlay: "has-overlay-39BzG76"
        }
    },
    156: function(e, t, n) {
        e.exports = {
            app: "app",
            cube: "cube"
        }
    },
    223: function(e, t, n) {
        "use strict";
        var i = n(126)
          , r = n.n(i);
        t.default = r.a
    },
    224: function(e, t, n) {
        "use strict";
        var i = n(127)
          , r = n.n(i);
        t.default = r.a
    },
    225: function(e, t, n) {
        "use strict";
        var i = n(128)
          , r = n.n(i);
        t.default = r.a
    },
    226: function(e, t, n) {
        "use strict";
        var i = n(129)
          , r = n.n(i);
        t.default = r.a
    },
    227: function(e, t, n) {
        "use strict";
        var i = n(130)
          , r = n.n(i);
        t.default = r.a
    },
    228: function(e, t, n) {
        "use strict";
        var i = n(131)
          , r = n.n(i);
        t.default = r.a
    },
    229: function(e, t, n) {
        "use strict";
        var i = n(132)
          , r = n.n(i);
        t.default = r.a
    },
    230: function(e, t, n) {
        "use strict";
        var i = n(133)
          , r = n.n(i);
        t.default = r.a
    },
    231: function(e, t, n) {
        "use strict";
        var i = n(134)
          , r = n.n(i);
        t.default = r.a
    },
    232: function(e, t, n) {
        "use strict";
        var i = n(135)
          , r = n.n(i);
        t.default = r.a
    },
    233: function(e, t, n) {
        "use strict";
        var i = n(136)
          , r = n.n(i);
        t.default = r.a
    },
    234: function(e, t, n) {
        "use strict";
        var i = n(137)
          , r = n.n(i);
        t.default = r.a
    },
    235: function(e, t, n) {
        "use strict";
        var i = n(138)
          , r = n.n(i);
        t.default = r.a
    },
    236: function(e, t, n) {
        "use strict";
        var i = n(139)
          , r = n.n(i);
        t.default = r.a
    },
    237: function(e, t, n) {
        "use strict";
        var i = n(140)
          , r = n.n(i);
        t.default = r.a
    },
    238: function(e, t, n) {
        "use strict";
        var i = n(141)
          , r = n.n(i);
        t.default = r.a
    },
    239: function(e, t, n) {
        "use strict";
        var i = n(142)
          , r = n.n(i);
        t.default = r.a
    },
    24: function(e) {
        e.exports = {
            mediaQueries: {
                XSMALL: "(max-width: 479px)",
                SMALL: "(min-width: 480px)",
                MEDIUM: "(min-width: 900px)",
                LARGE: "(min-width: 1200px)"
            },
            deviceState: {
                XSMALL: 0,
                SMALL: 1,
                MEDIUM: 2,
                LARGE: 3
            }
        }
    },
    240: function(e, t, n) {
        "use strict";
        var i = n(143)
          , r = n.n(i);
        t.default = r.a
    },
    241: function(e, t, n) {
        "use strict";
        var i = n(144)
          , r = n.n(i);
        t.default = r.a
    },
    242: function(e, t, n) {
        "use strict";
        var i = n(145)
          , r = n.n(i);
        t.default = r.a
    },
    244: function(e, t, n) {
        "use strict";
        var i = n(146)
          , r = n.n(i);
        t.default = r.a
    },
    245: function(e, t, n) {
        "use strict";
        var i = n(147)
          , r = n.n(i);
        t.default = r.a
    },
    246: function(e, t, n) {
        "use strict";
        var i = n(148)
          , r = n.n(i);
        t.default = r.a
    },
    247: function(e, t, n) {
        "use strict";
        var i = n(149)
          , r = n.n(i);
        t.default = r.a
    },
    248: function(e, t, n) {
        "use strict";
        var i = n(150)
          , r = n.n(i);
        t.default = r.a
    },
    249: function(e, t, n) {
        "use strict";
        var i = n(151)
          , r = n.n(i);
        t.default = r.a
    },
    250: function(e, t, n) {
        "use strict";
        var i = n(152)
          , r = n.n(i);
        t.default = r.a
    },
    251: function(e, t, n) {
        "use strict";
        var i = n(153)
          , r = n.n(i);
        t.default = r.a
    },
    252: function(e, t, n) {
        "use strict";
        var i = n(154)
          , r = n.n(i);
        t.default = r.a
    },
    253: function(e, t, n) {
        "use strict";
        var i = n(155)
          , r = n.n(i);
        t.default = r.a
    },
    254: function(e, t, n) {
        "use strict";
        var i = n(156)
          , r = n.n(i);
        t.default = r.a
    },
    365: function(e, t, n) {
        n(366),
        e.exports = n(734)
    },
    366: function(e, t, n) {
        "use strict";
        n.r(t);
        n(367),
        n(369),
        n(370),
        n(373),
        n(374),
        n(259),
        n(169),
        n(377),
        n(378),
        n(380),
        n(381),
        n(383),
        n(384),
        n(385),
        n(386),
        n(387),
        n(388),
        n(389),
        n(390),
        n(391),
        n(392),
        n(393),
        n(395),
        n(396),
        n(397),
        n(398),
        n(399),
        n(400),
        n(401),
        n(402),
        n(403),
        n(404),
        n(405),
        n(406),
        n(407),
        n(408),
        n(409),
        n(410),
        n(411),
        n(412),
        n(414),
        n(416),
        n(267),
        n(268),
        n(269),
        n(417),
        n(418),
        n(271),
        n(419),
        n(420),
        n(274),
        n(275),
        n(421),
        n(422),
        n(423),
        n(424),
        n(425),
        n(426),
        n(427),
        n(428),
        n(277),
        n(429),
        n(281),
        n(432),
        n(433),
        n(435),
        n(436),
        n(437),
        n(438),
        n(439),
        n(440),
        n(441),
        n(442),
        n(443),
        n(444),
        n(445),
        n(446),
        n(282),
        n(447),
        n(449),
        n(450),
        n(451),
        n(452),
        n(453),
        n(454),
        n(456),
        n(457),
        n(458),
        n(459),
        n(460),
        n(461),
        n(462),
        n(463),
        n(464),
        n(465),
        n(466),
        n(467),
        n(468),
        n(469),
        n(470),
        n(285),
        n(288),
        n(471),
        n(472),
        n(473),
        n(474),
        n(475),
        n(476),
        n(477),
        n(478),
        n(479),
        n(480),
        n(481),
        n(482),
        n(483),
        n(484),
        n(485),
        n(486),
        n(487),
        n(488),
        n(489),
        n(490),
        n(491),
        n(492),
        n(292),
        n(293),
        n(493);
        t.default = {}
    },
    496: function(e, t) {
        !function(t) {
            var n = "Modernizr"in t
              , i = t.Modernizr;
            !function(e, t, n) {
                function i(e, t) {
                    return typeof e === t
                }
                function r() {
                    return "function" != typeof t.createElement ? t.createElement(arguments[0]) : c ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
                }
                function s() {
                    var e = t.body;
                    return e || ((e = r(c ? "svg" : "body")).fake = !0),
                    e
                }
                var a = []
                  , o = {
                    _version: "3.6.0",
                    _config: {
                        classPrefix: "",
                        enableClasses: !0,
                        enableJSClass: !0,
                        usePrefixes: !0
                    },
                    _q: [],
                    on: function(e, t) {
                        var n = this;
                        setTimeout(function() {
                            t(n[e])
                        }, 0)
                    },
                    addTest: function(e, t, n) {
                        a.push({
                            name: e,
                            fn: t,
                            options: n
                        })
                    },
                    addAsyncTest: function(e) {
                        a.push({
                            name: null,
                            fn: e
                        })
                    }
                }
                  , l = function() {};
                l.prototype = o,
                l = new l;
                var h = []
                  , u = t.documentElement
                  , c = "svg" === u.nodeName.toLowerCase()
                  , v = o._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
                o._prefixes = v;
                var d = o.testStyles = function(e, n, i, a) {
                    var o, l, h, c, v = "modernizr", d = r("div"), f = s();
                    if (parseInt(i, 10))
                        for (; i--; )
                            (h = r("div")).id = a ? a[i] : v + (i + 1),
                            d.appendChild(h);
                    return (o = r("style")).type = "text/css",
                    o.id = "s" + v,
                    (f.fake ? f : d).appendChild(o),
                    f.appendChild(d),
                    o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(t.createTextNode(e)),
                    d.id = v,
                    f.fake && (f.style.background = "",
                    f.style.overflow = "hidden",
                    c = u.style.overflow,
                    u.style.overflow = "hidden",
                    u.appendChild(f)),
                    l = n(d, e),
                    f.fake ? (f.parentNode.removeChild(f),
                    u.style.overflow = c,
                    u.offsetHeight) : d.parentNode.removeChild(d),
                    !!l
                }
                ;
                l.addTest("touchevents", function() {
                    var n;
                    if ("ontouchstart"in e || e.DocumentTouch && t instanceof DocumentTouch)
                        n = !0;
                    else {
                        var i = ["@media (", v.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                        d(i, function(e) {
                            n = 9 === e.offsetTop
                        })
                    }
                    return n
                }),
                function() {
                    var e, t, n, r, s, o;
                    for (var u in a)
                        if (a.hasOwnProperty(u)) {
                            if (e = [],
                            (t = a[u]).name && (e.push(t.name.toLowerCase()),
                            t.options && t.options.aliases && t.options.aliases.length))
                                for (n = 0; n < t.options.aliases.length; n++)
                                    e.push(t.options.aliases[n].toLowerCase());
                            for (r = i(t.fn, "function") ? t.fn() : t.fn,
                            s = 0; s < e.length; s++)
                                1 === (o = e[s].split(".")).length ? l[o[0]] = r : (!l[o[0]] || l[o[0]]instanceof Boolean || (l[o[0]] = new Boolean(l[o[0]])),
                                l[o[0]][o[1]] = r),
                                h.push((r ? "" : "no-") + o.join("-"))
                        }
                }(),
                function(e) {
                    var t = u.className
                      , n = l._config.classPrefix || "";
                    if (c && (t = t.baseVal),
                    l._config.enableJSClass) {
                        var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                        t = t.replace(i, "$1" + n + "js$2")
                    }
                    l._config.enableClasses && (t += " " + n + e.join(" " + n),
                    c ? u.className.baseVal = t : u.className = t)
                }(h),
                delete o.addTest,
                delete o.addAsyncTest;
                for (var f = 0; f < l._q.length; f++)
                    l._q[f]();
                e.Modernizr = l
            }(t, document),
            e.exports = t.Modernizr,
            n ? t.Modernizr = i : delete t.Modernizr
        }(window)
    },
    497: function(e, t, n) {},
    499: function(e, t, n) {
        var i = {
            "./arrow-down.svg": 500,
            "./arrow-left.svg": 501,
            "./arrow-right.svg": 502,
            "./axe.svg": 503,
            "./book.svg": 504,
            "./close.svg": 505,
            "./donate.svg": 506,
            "./enter-full-screen.svg": 507,
            "./exit-full-screen.svg": 508,
            "./hashtag-rotated.svg": 510,
            "./hashtag.svg": 511,
            "./info-hotspot.svg": 512,
            "./lang-en.svg": 515,
            "./logo-big.svg": 517,
            "./map.svg": 519,
            "./menu.svg": 520, // Menu Hamburger icon
            "./press.svg": 522,
            "./share-cloud.svg": 528,
            "./share-facebook.svg": 529,
            "./share-instagram.svg": 530,
            "./share-twitter.svg": 531,
            "./share.svg": 532,
            "./sign.svg": 533
        };
        function r(e) {
            var t = s(e);
            return n(t)
        }
        function s(e) {
            if (!n.o(i, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return i[e]
        }
        r.keys = function() {
            return Object.keys(i)
        }
        ,
        r.resolve = s,
        e.exports = r,
        r.id = 499
    },
    500: function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.04 9.6"><path d="M5.63 5.33v1.42H7V5.33zM4.22 0h-1.4v6.75H1.41v1.42h1.41V9.6h1.4V8.17h1.41V6.75H4.22zM0 5.33v1.42h1.41V5.33z"></path></svg>'
    },
    501: function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.58 11.84"><path d="M2.58 2.63V4H4V2.63zM1.32 4v1.26h1.26V4zM0 5.26v1.32h1.32V5.26zm2.58 1.32H1.32v1.31h1.26zM4 7.89H2.58v1.32H4zm0-6.57v1.31h1.26V1.32zm1.26 7.89H4v1.31h1.26zm1.32 1.31H5.26v1.32h1.32zM5.26 0v1.32h1.32V0z" fill="#fff"></path></svg>'
    },
    502: function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.58 11.84"><path d="M2.63 2.63V4H4V2.63zM4 4v1.26h1.26V4zm1.26 1.26v1.32h1.32V5.26zM4 7.89h1.26V6.58H4zM2.63 9.21H4V7.89H2.63zM1.32 1.32v1.31h1.31V1.32zm0 9.2h1.31V9.21H1.32zM0 11.84h1.32v-1.32H0zM0 0v1.32h1.32V0z" fill="#fff"></path></svg>'
    },
    503: function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.47 20.48"><g fill="#231f20"><path d="M4.72 14.17H3.15v1.58h1.57v-1.58zM9.45 9.45H7.87v1.58h1.58V9.45zM11.02 7.88H9.45v1.57h1.57V7.88zM9.45 1.57h4.72V0H6.3v1.57h3.15zM7.87 11.03H6.3v1.57h1.57v-1.57zM6.3 12.6H4.72v1.57H6.3V12.6zM12.6 6.3h-1.58v1.58h1.58V6.3zM14.17 4.72H12.6V6.3h1.57V4.72zM17.32 15.75h1.58v-1.58h-1.58v1.58zM4.72 1.57v1.58H6.3V1.57H4.72zM15.75 3.15v1.57h1.57V6.3h1.58V1.57h-4.73v1.58h1.58zM11.02 3.15H6.3v1.57h6.3V3.15h-1.58zM14.17 6.3v1.58h1.58V6.3h-1.58zM9.45 12.6h1.57v-1.57H9.45v1.57zM12.6 9.45h1.57V7.88H12.6v1.57zM11.02 11.03h1.58V9.45h-1.58v1.58zM17.32 11.03V7.88h-1.57v6.29h1.57v-3.14zM18.9 6.3v7.87h1.57V6.3H18.9zM1.57 17.32H0v3.16h3.15V18.9H1.57v-1.58zM3.15 18.9h1.57v-1.58H3.15v1.58zM3.15 15.75H1.57v1.57h1.58v-1.57zM7.87 14.17h1.58V12.6H7.87v1.57zM6.3 15.75h1.57v-1.58H6.3v1.58zM4.72 17.32H6.3v-1.57H4.72v1.57z"></path></g></svg>'
    },
    504: function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.08 26.24"><path d="M6 23.85v1.2h3.63v-1.2zm-3.59-1.19v1.19H6v-1.19zM1.2 21.47V7.16h1.21V6H1.2V4.77H0v17.89h2.41v-1.19zm16.85 2.38h1.2v-1.19h1.2v-1.19h1.21v-1.19h1.2v-1.2h1.2v-1.19h1.21V16.7h1.2V8.35h1.2V7.16h-1.2V0h-1.2v1.19h-1.21v1.2h-1.2v1.19h-1.2v1.19h-1.21V6h-1.2v1.2h-1.2v1.15h-1.21v1.19h-1.2v1.19h-1.2V9.54h-1.2V8.35H12V7.16h-1.2V6H9.63V4.77H8.42V3.58h-1.2V2.39H6v-1.2H4.81V0h-1.2v7.16h-1.2v1.19h1.2v8.35h1.2v1.19H6v1.19h1.2v1.2h1.2v1.19h1.23v1.19h1.2v1.19H12v1.2H9.63v1.19h10.82v-1.19h-2.4zm-3.61 0h-1.2v-1.19H12v-1.19h-1.2v-1.19H9.63v-1.2H8.42v-1.19h-1.2V16.7H6v-1.19H4.81V3.58H6v1.19h1.2V6h1.2v1.2h1.23v1.15h1.2v1.19H12v1.19h1.21v1.2h1.2zm2.4 0h-1.2V11.93h1.2v-1.2h1.21V9.54h1.2V8.35h1.2V7.16h1.21V6h1.2V4.77h1.2V3.58h1.21v11.93h-1.21v1.19h-1.2v1.19h-1.2v1.19h-1.21v1.2h-1.2v1.19h-1.2v1.19h-1.21zm3.61 1.2h3.61v-1.2h-3.61zm3.61-1.2h3.61v-1.19h-3.61zm4.82-19.08V6h-1.21v1.2h1.21v14.27h-1.21v1.19h2.41V4.77z" fill="#fff"></path></svg>'
    },
    505: function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.84 11.84"><path d="M2.63 2.63V4H4V2.63zM4 4v1.26h1.26V4zm1.26 1.26v1.32h1.32V5.26zM4 7.89h1.26V6.58H4zM2.63 9.21H4V7.89H2.63zm6.58-6.58H7.89V4h1.32zm1.31-1.31H9.21v1.31h1.31zm-9.2 0v1.31h1.31V1.32zm0 9.2h1.31V9.21H1.32zm9.2 0V9.21H9.21v1.31zm1.32 1.32v-1.32h-1.32v1.32zM0 11.84h1.32v-1.32H0zM11.84 0h-1.32v1.32h1.32zM0 0v1.32h1.32V0zm7.89 4H6.58v1.26h1.31zm0 3.94V6.58H6.58v1.31zm1.32 1.27V7.89H7.89v1.32z" fill="#fff"></path></svg>'
    },
    506: function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.09 23.68"><g fill="#231f20"><path d="M16.98 8.45h1.7V6.76h-1.7v1.69zM13.59 3.38V1.69h-1.7v1.69h1.7zM6.79 1.69h-1.7v5.07h1.7V1.69zM15.28 10.14h1.7V8.45h-1.7v1.69zM20.38 6.76V1.69h-1.7v5.07h1.7zM18.68 0h-5.09v1.69h5.09V0zM10.19 11.83h5.09v-1.69h-5.09v1.69zM6.79 6.76v1.69h1.7V6.76h-1.7zM8.49 8.45v1.69h1.7V8.45h-1.7zM11.89 0h-5.1v1.69h5.1V0zM16.98 21.99h1.7v-1.7h-1.7v1.7zM13.59 21.99h-6.8v-1.7H1.7v-5.08h1.7v-1.69H0v8.47h5.09v1.69h11.89v-1.69h-3.39zM18.68 20.29h1.7V18.6h-1.7v1.69zM6.79 13.52h1.7v-1.69H3.4v1.69h3.39zM20.38 13.52v5.08h1.71v-5.08h-1.71zM20.38 11.83h-1.7v1.69h1.7v-1.69z"></path><path d="M6.79 16.91h-1.7v1.69h3.4v-1.69h-1.7zM10.19 15.21v-1.69h-1.7v1.69h1.7zM18.68 13.52h-1.7v1.69h1.7v-1.69zM11.89 16.91h1.7v1.69h-5.1v1.69h6.79v-3.38h1.7v-1.7h-6.79v1.7h1.7z"></path></g></svg>'
    },
    507: function(e, t) {
        e.exports = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 11.8 11.8" xml:space="preserve"><path d="M2.6 2.6H4V4H2.6zM4 4h1.3v1.3H4z"></path><path d="M2.6 1.3H4V0H0V3.9h1.3V2.6h1.3V1.3zM7.8 2.6h1.4V4H7.8zM6.6 4h1.3v1.3H6.6z"></path><path d="M10.5 0H7.9v1.3h1.3v1.3h1.3V4h1.3V0zM6.6 6.6h1.3v1.3H6.6z"></path><path d="M7.8 7.8h1.4v1.4H7.8zM10.5 9.2H9.2v1.3H7.9v1.3H11.8V7.9h-1.3zM2.6 7.8H4v1.4H2.6zM4 6.6h1.3v1.3H4z"></path><path d="M1.3 9.2V7.9H0V11.8h4v-1.3H2.6V9.2H1.3z"></path></svg>'
    },
    508: function(e, t) {
        e.exports = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 11.8 11.8" xml:space="preserve"><path d="M2.6 2.6V1.3H1.3v1.4h1.3zM1.3 1.3V0H0v1.3h1.3zm2.6 2.6V2.6H2.6v1.3h1.3zm1.4 1.4V3.9H3.9v1.3h1.4zM3.9 1.3h1.3v1.3H3.9zM1.3 3.9h1.3v1.3H1.3z"></path><path d="M2.6 3.9h1.3v1.3H2.6z"></path><path d="M3.9 2.6h1.3v1.3H3.9zM9.2 1.3h1.4v1.4H9.2zM10.6 0h1.3v1.3h-1.3z"></path><path d="M7.9 2.6h1.3v1.3H7.9zM6.6 3.9h1.3v1.3H6.6z"></path><path d="M9.2 3.9h1.3v1.3H9.2zM6.6 1.3h1.3v1.3H6.6zM6.6 2.6h1.3v1.3H6.6z"></path><path d="M7.9 3.9h1.3v1.3H7.9zM9.2 9.2v1.4h1.4V9.2H9.2zm1.4 1.4v1.3h1.3v-1.3h-1.3zM7.9 7.9v1.3h1.3V7.9H7.9zM6.6 6.6v1.3h1.3V6.6H6.6zM6.6 9.2h1.3v1.3H6.6zM9.2 6.6h1.3v1.3H9.2z"></path><path d="M7.9 6.6h1.3v1.3H7.9zM6.6 7.9h1.3v1.3H6.6zM1.3 9.2h1.4v1.4H1.3zM0 10.6h1.3v1.3H0z"></path><path d="M2.6 7.9h1.3v1.3H2.6zM3.9 6.6h1.3v1.3H3.9zM1.3 6.6h1.3v1.3H1.3z"></path><path d="M3.9 9.2h1.3v1.3H3.9z"></path><path d="M3.9 7.9h1.3v1.3H3.9zM2.6 6.6h1.3v1.3H2.6z"></path></svg>'
    },
    510: function(e, t) {
        e.exports = '<div></div><!--<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.68 83.2"><img src="assets/image/hashtag-rotated.png" style="object-fit:contain; width:2.5vw;"></img></svg>-->'
    },
    511: function(e, t) {
        e.exports = '<img src="assets/image/hashtag.png" style="height: 70vh;"></img>'
    },
    512: function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16.32"><path d="M8.82 6.43H6v1.44h1.4v2.78H6v1.44h4.24v-1.44H8.82zm0-2.89H7.4V5h1.42zm6-1.92V0H1.22v1.62H0V14.7h1.22v1.62h13.56V14.7H16V1.62zM15 13.31h-1.22v2H2.22v-2H1V3h1.22V1h11.56v1.63H15z" fill="#fff"></path></svg>'
    },
    514: function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.71 6.7"><path d="M0 1h.5v4.69H0v1h3.74V0H0zm1.51 0h1.23v4.69H1.51zm7.2 0V0H5v6.7h3.71v-1H6V3.74h2.71v-1H6V1z" fill="#fff"></path></svg>'
    },
    515: function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.94 6.7"><path d="M7.93 0v2.23h-.24V2h-.24a1.72 1.72 0 0 1 0-.25H7.2v-.26H7v-.25h-.3V1h-.25V.75H6.2V.5H6V.25h-.29V0h-1v6.7h1v-5H6V2h.2v.24h.25v.25h.25v.25H7V3h.2v.25h.25v.25h.24v.24h.25v3h1V0zM3.75 1V0H0v6.69h3.75v-1H1v-2h2.75v-1H1V1z" fill="#fff"></path></svg>'
    },
    516: function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38.4 22.72"><g fill="#231f20"><path d="M8.53 11.35H7.11v1.42h4.27v-1.42zM25.6 4.26H27V2.84h-2.82v1.42zM28.44 11.35H27v1.42h4.27v-1.42z"></path><path d="M37 21.29V8.52h-7.13V7.1h-1.43V4.26H27v1.42H11.38V4.26H10V7.1H8.53v1.42H1.42v12.77H0v1.43h38.4v-1.43zM11.38 7.1H27v1.42H11.38zM4.27 17v4.26H2.84v-5.65h1.43zM10 17v4.26H8.53v-5.65H10zm5.68 0v4.26h-1.46v-5.65h1.42zm2.85 0v4.26h-1.46v-5.65h1.42zm2.84 0v4.26h-1.46v-5.65h1.42zm2.85 0v4.26h-1.46v-5.65h1.42zm5.69 0v4.26h-1.47v-5.65h1.43zm4.26 4.26v-5.65h1.43v5.68zm1.43-9.94h-2.89v1.42h2.85v1.42h-2.85v7.1h-1.42v-7.1H27v7.1h-1.4v-7.1h-1.42v-1.39h-2.85v-1.42h-4.26v1.42h-2.85v1.42H12.8v7.1h-1.42v-7.1H7.11v7.1H5.69v-7.1H2.84v-1.42h2.85v-1.42H2.84V9.94h32.72zM17.07 2.84h1.42V1.42h1.42v1.42h4.27V1.42h-2.85V0h-4.26v1.42h-2.85v1.42zM14.22 4.26V2.84h-2.84v1.42z"></path></g></svg>'
    },
    517: function(e, t) {
        e.exports = '<div class="main-text-splash">301<br>redirect</div>'
    },
    518: function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 452 37"><defs><path d="M323 0h-6v37h14v-5h-8zm68 37h6V20h5v17h6V0h-17zm6-32h5v10h-5zm49-5v15h-5V0h-6v21h6v16h6V21h5V0zM336 37h6V0h-6zM0 5h6v32h5V5h6V0H0zm90 27h-6V0h-6v37h18V0h-6zm279 5h6V20h5v17h6V19h-2v-1h-1v-2h1l-.09-1H386V0h-17zm6-32h5v10h-5zm-28 32h17V19h-2v-1h-1v-2h1v-1h2V0h-17zm11-5h-5V20h5zm-5-27h5v10h-5zm-68 0h3v27h-3v5h19V0h-19zm8 0h6v27h-6zm-74 32h17V0h-17zm6-32h5v27h-5zM116 9h-1V8h-1V7h-1V6h-1V5h-1V4h-1V3h-1V2h-1V0h-7v37h6V9h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v20h7V0h-7zm82 11h11v12h-5v-5h-6v10h16V15h-10V5h5v5h5V0h-16zM49 37h16v-5H55V20h10v-5H55V5h10V0H49zM38 15H28V0h-6v37h6V21h10v16h6V0h-6zm90 22h16V27h-5v5h-6V5h6v5h5V0h-16zm21 0h17v-5h-11V20h11v-5h-11V5h11V0h-17zm92 0h6V20h5v17h6V19h-2v-1h-1v-2h1l-.09-1H258V0h-17zm6-32h5v10h-5zm16 32h17v-5h-11V20h11v-5h-11V5h11V0h-17zm150 0h6V20h5v17h6V19h-2v-1h-1v-2h1l-.09-1H430V0h-17zm6-32h5v10h-5zM186 9h-1V8h-1V7h-1V6h-1V5h-1V4h-1V3h-1V2h-1V0h-7v37h6V9h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v1h1v20h7V0h-7z" fill="inherit" id="logo-small-text"></path><mask id="logo-small-bar-mask"><path class="js-bar-mask" fill="#fff" d="M71 0h240v37H71z"></path></mask><mask id="logo-small-text-mask"><use xlink:href="#logo-small-text" fill="#fff"></use></mask></defs><path d="M311 23.06H71v-11h240z" fill="#e41c40" mask="url(#logo-small-bar-mask)"></path><use xlink:href="#logo-small-text" fill="currentColor"></use><g mask="url(#logo-small-text-mask)"><path class="masked-text" d="M311 23.06H71v-11h240z" fill="#ff5c83" mask="url(#logo-small-bar-mask)"></path></g></svg>'
    },
    520: function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.68 11.84"><path d="M0 11.84h1.28V0H0zM6.4 0v11.84h1.28V0zM3.2 11.84h1.28V0H3.2z" fill="#fff" fill-rule="evenodd"></path></svg>'
    },
    521: function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.23 7.32"><path d="M3.14 2.09v-1H2.09v1zm1 1.05V2.09h-1v1.05zm0 0v1h1.09v-1zm-1 2.09h1V4.18h-1zm-1.05 1h1.05v-1H2.09zM1.09 1h1V0H0v7.32h2.09v-1h-1z"></path></svg>'
    },
    522: function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.91 18.48"><g fill="#231f20"><path d="M1.42 0h17.06v1.42H1.42zM18.49 1.42V10h-10V8.53H4.27V7.11h8.53V10h1.42V5.68H5.69V4.26h10V10h1.42V2.84H4.27v2.84H2.84v2.85H1.42V1.42H0V18.48h19.91V1.42zm0 15.63H1.42V10h7.11v1.42h10z"></path></g></svg>'
    },
    528: function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.78 21.99"><g fill="none"><path d="M8.5 16.92v-1.69H1.7v1.69h5.1v1.69h1.7zM17 3.38h-1.7v1.69h-3.4V3.38h-1.7v1.69H6.8v1.7h1.7v3.38H5.1v1.7h1.7v1.69h1.7v-1.69h3.39v1.69h1.7v-1.69H17v-1.7h-1.7V6.77h3.4v-1.7H17zm-3.4 5.08v1.69h-3.4V6.77h3.4zM17 15.23h-5.1v3.38h1.7v-1.69h8.5v-1.69zM22.09 1.69v13.54h1.69V1.69zM1.7 11.85V1.69H0v13.54h1.7zM5.1 1.69h17V0H1.7v1.69z"></path><path d="M6.8 20.3v-1.69H5.1v1.69H3.4V22h6.79v-1.7zM10.19 18.61h1.7v1.69h-1.7z"></path></g></svg>'
    },
    529: function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M10 45h15V30h-5v-5h5V15h10v5h-5v5h5v5h-5v15h10v-5h5V10h-5V5H10v5H5v30h5z" fill="#fff"></path></svg>'
    },
    530: function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50.04"><path d="M50 35V5h-5v40h5v-5.1zM40 10h-5v5h5zM0 10v35h5V5H0zm15 10h-5v10h5V20zm0 10v5h5v-5zm5-15h-5v5h5zm0 20v5h10v-5H20zm10-20v-5H20v5h10zm0 0v5h5v-5zm5 15h5V20h-5v10zm-5 5h5v-5h-5zM40 0H5v5h40V0zM10 50h35v-5H5v5z" fill="#fff"></path></svg>'
    },
    531: function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M37.49 12.37v-5h-10v5h-5v5h-10v10h5v10h-5v5h10v-5h10v-5h5v-15h5v-5zm-30 0v5h5v-5z" fill="#fff"></path></svg>'
    },
    532: function(e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.52 11.84"><path d="M7.68 10.56h-6.4v1.28h9v-1.28h-2.6zm-4.16-8H4.8V1.28H1.28v1.28h2.24zm-1 4.16v2.56h1.32V6.4H2.56zM10.24 8v2.56h1.28V7h-1.28zm-6.4-1.6h1.28V5.12H3.84zm1.28-1.28H6.4V3.84H5.12zM7.68 0v1.28H9V0zm-6.4 7.68V2.56H0v8h1.28V7.68zm9-5.12V1.28H9v1.28H6.4v1.28H9v1.28h1.28V3.84h1.28V2.56zM7.68 6.4H9V5.12H7.68z" fill="#fff" fill-rule="evenodd"></path></svg>'
    },
    533: function(e, t) {
        //e.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.55 23.68"><g fill="#231f20"><path d="M25.46 5.04h1.7v1.69h-1.7zM23.76 5.04h1.7V3.38h-1.7V1.69H15.27V0H8.48v1.69H0V23.68h1.7V3.38h5.09v1.66H16.98V3.38H22.04V6.73h1.72V5.04z"></path><path d="M6.79 8.43h8.48v-1.7H3.39v1.7h3.4zM23.76 6.73h1.7v1.69h-1.7zM8.48 20.29H3.39v1.7h8.49v-1.7h-3.4zM11.88 18.6h1.7v1.69h-1.7zM25.46 8.43h1.7v1.69h-1.7zM22.04 8.43h1.72v1.69h-1.72zM3.39 11.84h8.49v-1.72H3.39v1.72zM18.67 13.53h-1.69v-1.69h-1.71v3.38h1.71v1.69h3.37v-1.69h-1.68v-1.69z"></path><path d="M22.04 13.53h-1.69v1.69h1.69v8.46h1.72V11.84h-1.72v1.69zM20.35 6.73h1.7v1.69h-1.7zM27.15 6.73h1.7v1.69h-1.7zM23.76 10.12h1.7v1.72h-1.7zM18.67 8.43h1.68v1.69h-1.68zM28.85 3.38V1.69H25.46v1.69h1.69v1.66h1.7v1.69h1.7V3.38h-1.7zM16.98 10.12h1.69v1.72h-1.69zM15.27 15.22h-1.69v3.38h3.4v-1.69h-1.71v-1.69z"></path></g></svg>'
    },
    701: function(e, t, n) {
        var i = {
            "./de.json": [735, 0],
            "./en.json": [736, 1]
        };
        function r(e) {
            if (!n.o(i, e))
                return Promise.resolve().then(function() {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND",
                    t
                });
            var t = i[e]
              , r = t[0];
            return n.e(t[1]).then(function() {
                return n.t(r, 3)
            })
        }
        r.keys = function() {
            return Object.keys(i)
        }
        ,
        r.id = 701,
        e.exports = r
    },
    705: function(e, t, n) {
        var i = {
            "./default/default.fs.glsl": 706,
            "./default/default.vs.glsl": 707
        };
        function r(e) {
            var t = s(e);
            return n(t)
        }
        function s(e) {
            if (!n.o(i, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return i[e]
        }
        r.keys = function() {
            return Object.keys(i)
        }
        ,
        r.resolve = s,
        e.exports = r,
        r.id = 705
    },
    706: function(e, t) {
        e.exports = "#ifdef GL_ES\n\tprecision mediump float;\n#endif\n\nvarying vec2 vUV;\n\nuniform sampler2D uTexture;\t\n\nvoid main(void) {\n\tgl_FragColor = texture2D(uTexture, vUV);\n}"
    },
    707: function(e, t) {
        e.exports = "attribute vec3 aPos;\nattribute vec2 aUV0;\n\nvarying vec2 vUV;\n\nvoid main(void) {\n\tvUV = aUV0;\n\tgl_Position = vec4(aPos, 1.0);\n}"
    },
    708: function(e, t, n) {
        var i = {
            "./boxBlur/boxBlur.fs.glsl": 709,
            "./boxBlur/boxBlur.vs.glsl": 710,
            "./circle/circle.fs.glsl": 711,
            "./circle/circle.vs.glsl": 712,
            "./cubeMap/cubeMap.fs.glsl": 713,
            "./cubeMap/cubeMap.vs.glsl": 714,
            "./dottedCircle/dottedCircle.fs.glsl": 715,
            "./dottedCircle/dottedCircle.vs.glsl": 716,
            "./hotspots/hotspots.fs.glsl": 717,
            "./hotspots/hotspots.vs.glsl": 718,
            "./includes/fireworks.glsl": 719,
            "./modelViewer/modelViewer.fs.glsl": 720,
            "./modelViewer/modelViewer.vs.glsl": 721,
            "./shadow/shadow.fs.glsl": 722,
            "./shadow/shadow.vs.glsl": 723,
            "./spriteSheet/spriteSheet.fs.glsl": 724,
            "./spriteSheet/spriteSheet.vs.glsl": 725,
            "./temporalBlur/temporalBlur.fs.glsl": 726,
            "./temporalBlur/temporalBlur.vs.glsl": 727,
            "./tunnel/tunnel.fs.glsl": 728,
            "./tunnel/tunnel.vs.glsl": 729,
            "./unlit/unlit.fs.glsl": 730,
            "./unlit/unlit.vs.glsl": 731,
            "./voxelTransition/voxelTransition.fs.glsl": 732,
            "./voxelTransition/voxelTransition.vs.glsl": 733
        };
        function r(e) {
            var t = s(e);
            return n(t)
        }
        function s(e) {
            if (!n.o(i, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return i[e]
        }
        r.keys = function() {
            return Object.keys(i)
        }
        ,
        r.resolve = s,
        e.exports = r,
        r.id = 708
    },
    709: function(e, t) {
        e.exports = "#ifdef GL_ES\n\tprecision mediump float;\n#endif\n\nvarying vec2 vUV;\n\nuniform sampler2D uTexture;\nuniform vec2 uSourceTexelSize;\n\nuniform sampler2D uSource;\nuniform float uSharp;\n\nvec3 ts(vec2 uv)\n{\n  vec3 c = texture2D(uTexture, uv).xyz;\n  if(uSharp > 0.){\n    return mix(c, texture2D(uSource, uv).xyz, uSharp * uSharp);\n  }else{\n   return c;\n  }\n}\n\nvoid main(void) {\n\tvec4 o = uSourceTexelSize.xyxy * vec2(-1, 1).xxyy;\n\tvec3 s = ts(vUV + o.xy) + ts(vUV + o.zy) + ts(vUV + o.xw) + ts(vUV + o.zw) ;\n\tgl_FragColor.xyz = s * 0.25;\n\tgl_FragColor.w = 1.;\n}\n"
    },
    710: function(e, t) {
        e.exports = "#ifdef GL_ES\n\tprecision mediump float;\n#endif\n\nattribute vec3 aPos;\nattribute vec2 aUV0;\n\nvarying vec2 vUV;\n\nvoid main(void) {\n\tvUV = aUV0;\n\tgl_Position = vec4(aPos, 1.0);\n}"
    },
    711: function(e, t) {
        e.exports = "#ifdef GL_ES\n\tprecision mediump float;\n#endif\n\n//uniform vec3 uColor;\n\nvarying vec2 vUV;\n\nvoid main(void)\n{\n  gl_FragColor = vec4(1,1,1,1);\n\n}\n\n"
    },
    712: function(e, t) {
        e.exports = "\nattribute vec3 aPos;\nattribute vec2 aUV0;\n\nuniform mat4 uViewProjection;\nuniform float uRadius;\nuniform float uY;\nuniform float uThickness;\nuniform float uVisibility;\nuniform vec3 uCamPos;\n\nvarying vec2 vUV;\n\n#define PI2 6.2831853\n\nvoid main(void) {\n  vUV = aUV0 * 2. - 1.;\n\n  float phase = aUV0.x * PI2 * uVisibility;\n  vec3 p = vec3 (sin(phase)* uRadius, uY, cos(phase)* uRadius) ;\n\n  vec3 view = normalize(p - uCamPos);\n  vec3 dir = vec3 (-cos(phase), 0, sin(phase)) ;\n  vec3 side = normalize(cross(dir, view));\n\n  p += side * (uThickness * (aUV0.y * 2. - 1.));\n\n  gl_Position = uViewProjection * vec4(p, 1.);\n}\n\n"
    },
    713: function(e, t) {
        e.exports = "#ifdef GL_ES\nprecision mediump float;\n#endif\n\nvarying vec3 vEye;\n\nuniform samplerCube  _CubeSampler;\n\nvoid main(void) {\n\tvec3 n = normalize(vEye);\n\tvec3 c = textureCube(_CubeSampler, n).xyz;\n\tgl_FragColor = vec4(c, 1.);\n}\n"
    },
    714: function(e, t) {
        e.exports = "attribute vec3 aPos;\n\nvarying vec3 vEye;\n\nuniform vec3 _Frustum;\n//uniform mat3 _EyeMatrix;\n//uniform mat4 _View;\nuniform mat4 _InvView;\n\nvoid main(void) {\n\tgl_Position = vec4(aPos, 1.0);\n\n//\tvEye = _EyeMatrix * (-vec3(aPos.xy,1.) * _Frustum);\n//\tvEye = _EyeMatrix * (vec3(aPos.xy,1.) * -_Frustum);\n//\tvEye = mat3(_View) * (vec3(aPos.xy,1.) * -_Frustum);\n//\tvEye = mat3(_InvView) * (vec3(aPos.xy,1.) * vec3(1,-1,-1) * _Frustum);\n\n  //found by trial and error\n\tvEye = mat3(_InvView) * (vec3(aPos.xy,-1.) * _Frustum);\n  vEye.xy *= -1.;\n}\n"
    },
    715: function(e, t) {
        e.exports = "#ifdef GL_ES\n\tprecision mediump float;\n#endif\n\nvoid main(void)\n{\n  vec2 uv = gl_PointCoord * 2. - 1.;\n  float l = smoothstep(1., 0.75, dot(uv,uv));\n  gl_FragColor = vec4(229. / 255.,20./255.,68./ 255.,l);\n\n}\n\n"
    },
    716: function(e, t) {
        e.exports = "\nattribute float aPhase;\n\nuniform mat4 uViewProjection;\nuniform float uRadius;\nuniform float uY;\nuniform float uThickness;\nuniform float uVisibility;\nuniform float uScreenHeight;\n\n#define PI2 6.2831853\n\nvoid main(void) {\n  float phase = aPhase * PI2;\n  vec3 p = vec3 (sin(phase)* uRadius, uY, cos(phase)* uRadius) ;\n\n  gl_Position = uViewProjection * vec4(p, 1.);\n\n  //hide\n  if(uVisibility < aPhase)gl_Position.x = -1000.;\n\n  gl_PointSize = (uThickness * uScreenHeight) / gl_Position.w;\n}\n\n"
    },
    717: function(e, t) {
        e.exports = "\n#ifdef GL_ES\n\tprecision highp float;\n#endif\n\nuniform sampler2D _Texture;\n\nvoid main(void)\n{\n  vec2 uv = gl_PointCoord;\n  gl_FragColor = texture2D(_Texture, uv);\n\n}\n\n"
    },
    718: function(e, t) {
        e.exports = "\nattribute float aIndex;\n\nuniform mat4 _ViewProjection;\nuniform vec4 _PositionsRadii[MAX_COUNT];\n\nvoid main(void) {\n  vec4 posRadius = _PositionsRadii[int(aIndex)];\n\n  gl_Position = _ViewProjection * vec4(posRadius.xyz, 1.);\n\n\tgl_PointSize = posRadius.w;\n}\n\n"
    },
    719: function(e, t) {
        e.exports = "uniform float uOpacity;\nuniform float uSeed;\nuniform float uPhase;\nuniform float uAge;\nuniform float uGravity;\nuniform float uGravityRandomness;\nuniform vec3 uSpawnPosition;\n\nvec3 getPosition(in float ppPhase, in vec3 dir, in float random0)\n{\n\tvec3 v = mix(dir, normalize(dir), 0.5);\n\n\tfloat dist = 1.-pow(ppPhase-1., 2.);\n\t//vec3 local = v * sqrt(ppPhase);\n\tvec3 local = v * dist;\n\n\tfloat gravity = mix(1., uGravityRandomness * random0, uGravityRandomness)*  uGravity;\n\tlocal.y -= uAge * uAge * gravity;\n\n\treturn local + uSpawnPosition;\n}\n\nvec3 getColor(in float ppPhase, in vec3 random)\n{\n\tfloat brightness = uOpacity * smoothstep(1., 0.8, ppPhase);\n\treturn fract(random * 1234.567) * brightness;\n}\n\nfloat getPhase(in float random)\n{\n\tfloat d = 0.2;\n//\treturn uPhase * (1. + d) - random * d;\n\treturn clamp(uPhase * (1. + d) - random * d, 0., 1.);\n}"
    },
    720: function(e, t) {
        e.exports = "\n#ifdef GL_ES\n\tprecision mediump float;\n#endif\n\nvarying vec2 vUV;\nvarying vec3 vPos;\n\nuniform sampler2D  uTexture;\n\nuniform vec3 _CamPos;\nuniform float _Progress;\nuniform float  _Resolution;\nuniform float  _Randomness;\n\n/*//sphere is integer sized\nbool getVoxel(vec3 c) {\n  vec3 p = c + 0.5;\n  float d =  (length(p) - _Resolution);\n  return d < 0.0;\n}\n\n//https://www.shadertoy.com/view/4dX3zl\nvec3 getVoxelPos(vec3 ro, vec3 rayDir)\n{\n  //place start of ray close to sphere\n  //vec3 mapPos = floor(normalize(rayDir) * (_Resolution - 1.));\n  vec3 mapPos = vec3(floor(ro));\n\n  vec3 deltaDist = abs(vec3(length(rayDir)) / rayDir);\n  vec3 s = sign(rayDir);\n\n  vec3 sideDist = (s * mapPos - ro + (s * 0.5) + 0.5) * deltaDist;\n\n  for (int i = 0; i < 4; i++) {\n    if (getVoxel(mapPos)) continue;\n    bvec3 mask = lessThanEqual(sideDist.xyz, min(sideDist.yzx, sideDist.zxy));\n\n    //All components of mask are false except for the corresponding largest component\n    //of sideDist, which is the axis along which the ray should be incremented.\n\n    sideDist += vec3(mask) * deltaDist;\n    mapPos += vec3(mask) * s;\n\n  }\n  return mapPos;\n}\n\n\nvec3 voxelTransition()\n{\n  float r = uProgress;\n  float eye = normalize(vPos - uCamPos);\n  vec3 voxelPos = getVoxelPos(uCamPos, eye);\n  return fract(voxelPos);\n}*/\n\n#define dim 4096.\n#define voxelSize 12.\n#define num (dim / voxelSize)\n\nbool voxelMask(vec2 uv, float progress)\n{\n  vec2 iUv = floor(uv * num);\n  float iVoxel = iUv.x + iUv.y * num;\n  float iProgress = floor(progress * num * num);\n  return iVoxel < iProgress;\n}\n\nvoid main(void) {\n    vec3 c = texture2D(uTexture, vUV).xyz;\n/*    if(uProgress < 1.){\n      vec3 voxels = voxelTransition();\n      gl_FragColor.xyz = mix(voxels, c, smoothstep(0.8, 1, uProgress));\n    }else{\n      gl_FragColor.xyz = c;\n    }*/\n    if(voxelMask(vUV, _Progress))discard;\n  gl_FragColor.xyz = c;\n\t \tgl_FragColor.w = 1.;\n }\n"
    },
    721: function(e, t) {
        e.exports = "\nattribute vec3 aPos;\nattribute vec2 aUV0;\n\nuniform mat4 _ViewProjection;\nuniform mat4 _Model;\n\n#ifdef SCALE_UV0\n    uniform vec4 _UV0Scale;\n#endif\n#ifdef SKINNED_MATRICES\nattribute vec4 aSkinIndex;\nattribute vec4 aSkinWeight;\n#endif\n\nvarying vec2 vUV;\nvarying vec3 vPos;\n\n#ifdef SKINNED_MATRICES\n\t#ifdef SKINNED_MATRICES_TEXTURE\n\tuniform sampler2D _BoneTexture;\n\tuniform float _BoneTextureWidth;\n\tuniform float _BoneTextureHeight;\n\n\tmat4 getBoneMatrix( const in float i ) {\n\n\t\tfloat j = i * 4.0;\n\t\tfloat x = mod( j,  _BoneTextureWidth );\n\t\tfloat y = floor( j / _BoneTextureWidth );\n\n\t\tfloat dx = 1.0 / _BoneTextureWidth;\n\t\tfloat dy = 1.0 / _BoneTextureHeight;\n\n\t\ty = dy * ( y + 0.5 );\n\n\t\tvec4 v1 = texture2D( _BoneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\tvec4 v2 = texture2D( _BoneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\tvec4 v3 = texture2D( _BoneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\tvec4 v4 = texture2D( _BoneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n\t\treturn mat4( v1, v2, v3, v4 );\n\t}\n\t#else\n\tuniform mat4 _BoneMatrices[BONE_COUNT];\n\tmat4 getBoneMatrix( const in float i ) {\n\t\treturn _BoneMatrices[int(i)];\n\t}\n\t#endif\n#endif\n\nvoid main(void) {\n#ifdef SKINNED_MATRICES\n  mat4 skinMatrix = mat4(0.0);\n  skinMatrix += aSkinWeight.x * getBoneMatrix(aSkinIndex.x);\n  skinMatrix += aSkinWeight.y * getBoneMatrix(aSkinIndex.y);\n  skinMatrix += aSkinWeight.z * getBoneMatrix(aSkinIndex.z);\n  skinMatrix += aSkinWeight.w * getBoneMatrix(aSkinIndex.w);\n\n  vec4 pos = skinMatrix * vec4(aPos, 1.0);\n#else\n\tvec4 pos = vec4(aPos, 1.0);\n#endif\n\n\tvec4 world = _Model * pos;\n\n  vPos = world.xyz;\n\tvUV = aUV0;\n\n\t#ifdef SCALE_UV0\n\t\tvUV *= _UV0Scale.xy;\n\t\tvUV += _UV0Scale.zw;\n\t#endif\n\n\tgl_Position = _ViewProjection * world;\n}\n\n"
    },
    722: function(e, t) {
        e.exports = "#ifdef GL_ES\n\tprecision mediump float;\n#endif\n\nuniform vec3 uColor;\n\nvarying vec2 vUV;\n\nvoid main(void)\n{\n  float b = smoothstep(0., 1., dot(vUV,vUV));\n  vec3 c = mix(uColor, vec3(1.), b);\n  gl_FragColor = vec4(c, 1.);\n\n}\n\n"
    },
    723: function(e, t) {
        e.exports = "\nattribute vec3 aPos;\nattribute vec2 aUV0;\n\nuniform mat4 uViewProjection;\nuniform float uSize;\nuniform vec3 uPosition;\n\nvarying vec2 vUV;\n\nvoid main(void) {\n  vUV = aUV0 * 2. - 1.;\n\n  vec3 world = aPos * uSize + uPosition;\n\n  gl_Position = uViewProjection * vec4(world, 1.);\n}\n\n"
    },
    724: function(e, t) {
        e.exports = "#ifdef GL_ES\n\tprecision mediump float;\n#endif\n\nvarying vec2 vUVSprite;\n\nuniform sampler2D uSpriteSheet;\n\nvoid main(void) {\n\tgl_FragColor =  texture2D(uSpriteSheet, vUVSprite);\n}\n"
    },
    725: function(e, t) {
        e.exports = "attribute vec3 aPos;\nattribute vec2 aUV0;\n\nuniform mat4 uViewProjection;\nuniform mat4 uWorld;\n\nuniform vec4 uSpriteData;\nuniform vec4 uSpriteOffset;\n\nvarying vec2 vUVSprite;\n\nvoid main(void) {\n\tvUVSprite = uSpriteData.xy + aUV0 * uSpriteData.zw;\n\n\tvec2 xz = -uSpriteOffset.xy +  uSpriteOffset.zw * aUV0;\n\n    gl_Position = uViewProjection * uWorld * vec4( xz.x, xz.y, 0.,  1.);\n }\n\n"
    },
    726: function(e, t) {
        e.exports = "#ifdef GL_ES\n\tprecision mediump float;\n#endif\n\nvarying vec2 vUV;\nvarying vec3 vEyeOld;\n\nuniform sampler2D uTexture;\nuniform sampler2D _Feedback;\nuniform sampler2D _BlueNoise;\nuniform float _FeedbackAmount;\nuniform float _Distance;\n//uniform float _Time;\nuniform float _ReProject;\nuniform float _TimeStep;\nuniform float _UseSqrt;\nuniform float _AspectRatio;\n\nuniform mat4 _ViewProjection;\n\n#define HASHSCALE3 vec3(443.897, 441.423, 437.195)\n#define GA 2.3996\n#define PI2 6.2831853\n\nvec3 ts(sampler2D t, vec2 uv){\n\treturn texture2D(t, uv).xyz;\n}\n\nvec2 getOffset(float phase)\n{\n\tfloat a = phase * PI2;\n\tfloat r = fract(phase);\n\treturn vec2(sin(a), cos(a) * _AspectRatio) * (_Distance * r);\n}\n\nvoid main(void) {\n\tfloat phase = texture2D(_BlueNoise, gl_FragCoord.xy / 256.).x;\n  float step = GA / PI2;\n\tphase += step * _TimeStep;\n\n\tvec2 uv0 =  getOffset(phase);\n\tvec2 uv1 =  getOffset(phase + step * 0.5);\n\n  vec2 mv = vec2(0,0);\n  if(_ReProject > 0.5){\n    //TODO: test on VS\n    //tested: cannot be done on vs: it is not linear\n    vec4 screenOld = _ViewProjection * vec4(vEyeOld, 1.);\n    screenOld.xy /= screenOld.w;\n    screenOld.xy *= -1.;\n    screenOld.xy = screenOld.xy * 0.5 + 0.5;\n\n    mv = screenOld.xy - vUV;\n    mv *= -1.;\n  }\n\n\t//tested: it really needs the 2 opposite samples\n\tvec3 feedback = ts(_Feedback, vUV + mv + uv0) + ts(_Feedback, vUV + mv - uv0);\n\tvec3 now = ts(uTexture, vUV + uv1) + ts(uTexture, vUV - uv1);\n\tvec3 col = mix(now,  feedback, _FeedbackAmount)* 0.5;\n\tgl_FragColor = vec4(col, 1.);\n}\n"
    },
    727: function(e, t) {
        e.exports = "attribute vec3 aPos;\nattribute vec2 aUV0;\n\nvarying vec2 vUV;\n\n//varying vec3 vEye;\nvarying vec3 vEyeOld;\n\nuniform vec3 _Frustum;\n//uniform mat3 _EyeMatrix;\nuniform mat3 _EyeMatrixOld;\n\nvoid main(void) {\n\tvUV = aUV0;\n\tgl_Position = vec4(aPos, 1.0);\n\n//\tvEye = _EyeMatrix * (vec3(aPos.xy,1.) * -_Frustum);\n\tvEyeOld = _EyeMatrixOld * (vec3(aPos.xy,1.) * -_Frustum);\n}"
    },
    728: function(e, t) {
        e.exports = "#ifdef GL_ES\n\tprecision mediump float;\n#endif\n\nvarying vec2 vUV;\n\nuniform float uProgress;\nuniform float uTime;\nuniform float uAspect;\nuniform float uTemporalFrequency;\nuniform float uRadialFrequency;\n\n#define HASHSCALE3 vec3(.1031, .1030, .0973)\nvec2 hash21(float p)\n{\n\tvec3 p3 = fract(vec3(p) * HASHSCALE3);\n\tp3 += dot(p3, p3.yzx + 19.19);\n\treturn fract((p3.xx+p3.yz)*p3.zy);\n}\n\nvoid main(void) {\n\tvec2 uv2 = vUV * 2. - 1.;\n\tuv2.x *= uAspect;\n\n\tfloat l = length(uv2);\n\n\tfloat a = 0.;\n\tfloat p = uProgress;\n  float ra = uAspect * 1.1;\n\t//float r = 0.;\n\tif(p < 1.){\n    //in\n\t\tp *= p;\n\t\tfloat r = p * ra;\n\t\ta = smoothstep(r * 1.1, r, l);\n\t}else{\n    //out\n\t\tp = p - 1.;\n\t\tp *= p;\n\t\tfloat r = p * ra;\n\t\ta = smoothstep(r, r * 1.1, l);\n\t}\n\n\tfloat radial = atan(uv2.x, uv2.y);\n\tfloat phase = radial * uRadialFrequency;\n\tvec2 r = hash21(floor(phase));\n\tr.x += uTime * uTemporalFrequency * (r.y + 0.5);\n\tr.x += 1. / l;\n\n//\tfloat b = fract(radial / 6.28);\n\t//float b = fract(r.x);\n\n\t//add some lights:\n\tfloat b = smoothstep(0.4, 0.2, abs(fract(r.x) - 0.5));\n\tb *= smoothstep(0.15, 0.05, abs(fract(phase) - 0.5));\n\t//light at the end of the tunnel\n\tfloat end = smoothstep(0.1, 0.05, l);\n\tend = end * end * end;\n\tb = max(b, end);\n\n\n\t//vec3 c = vec3(b,b,b);\n\tvec3 c = mix(vec3(148, 195, 214) / 255.,vec3(1,1,1), b);\n\n\tgl_FragColor = vec4(c, a);\n//\tgl_FragColor = texture2D(uTexture, vUV);\n}\n\n"
    },
    729: function(e, t) {
        e.exports = "attribute vec3 aPos;\nattribute vec2 aUV0;\n\nvarying vec2 vUV;\n\nvoid main(void) {\n\tvUV = aUV0;\n\tgl_Position = vec4(aPos, 1.0);\n}"
    },
    730: function(e, t) {
        e.exports = "\n#ifdef GL_ES\n\tprecision mediump float;\n#endif\n\nvarying vec2 vUV;\n\n#ifdef AO_ON_UV2\nvarying vec2 vUV1;\nuniform sampler2D  _AO;\n#endif\n\n\nuniform sampler2D  uTexture;\n\n#ifdef HAS_VOXEL_TRANSITION\n  uniform float _Progress;\n\n#define dim 1024.\n//approximate - not all textures have patches of the same size\n#define voxelSize 16.\n\nbool voxelMask(vec2 uv, float progress)\n{\n  float num = floor(dim / voxelSize);\n  vec2 iUv = floor(uv * num);\n  float iVoxel = iUv.x + iUv.y * num;\n  float iProgress = floor(progress * num * num);\n  return iVoxel > iProgress;\n}\n#endif\n\nvoid main(void) {\n\t#ifdef TRANSPARENT\n\t \tgl_FragColor = texture2D(uTexture, vUV);\n\t#else\n\t \tgl_FragColor.xyz = texture2D(uTexture, vUV).xyz;\n\n\t \tgl_FragColor.w = 1.;\n\t#endif\n\n  #ifdef AO_ON_UV2\n  float ao = texture2D(_AO, vUV1).x;\n  gl_FragColor.xyz *= ao * 1.3;\n\n  #ifdef HAS_VOXEL_TRANSITION\n  // gl_FragColor.xyz = vec3(_Progress);\n  if(voxelMask(vUV1, _Progress))discard;\n  #endif\n  #endif\n }\n"
    },
    731: function(e, t) {
        e.exports = "\nattribute vec3 aPos;\nattribute vec2 aUV0;\n#ifdef AO_ON_UV2\nattribute vec2 aUV1;\nvarying vec2 vUV1;\n#endif\n\nuniform mat4 _ViewProjection;\nuniform mat4 _Model;\n\n#ifdef SCALE_UV0\n    uniform vec4 _UV0Scale;\n#endif\n\n\n\n#ifdef SKINNED_MATRICES\nattribute vec4 aSkinIndex;\nattribute vec4 aSkinWeight;\n#endif\n\nvarying vec2 vUV;\n\n#ifdef SKINNED_MATRICES\n\t#ifdef SKINNED_MATRICES_TEXTURE\n\tuniform sampler2D _BoneTexture;\n\tuniform float _BoneTextureWidth;\n\tuniform float _BoneTextureHeight;\n\n\tmat4 getBoneMatrix( const in float i ) {\n\n\t\tfloat j = i * 4.0;\n\t\tfloat x = mod( j,  _BoneTextureWidth );\n\t\tfloat y = floor( j / _BoneTextureWidth );\n\n\t\tfloat dx = 1.0 / _BoneTextureWidth;\n\t\tfloat dy = 1.0 / _BoneTextureHeight;\n\n\t\ty = dy * ( y + 0.5 );\n\n\t\tvec4 v1 = texture2D( _BoneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\tvec4 v2 = texture2D( _BoneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\tvec4 v3 = texture2D( _BoneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\tvec4 v4 = texture2D( _BoneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n\t\treturn mat4( v1, v2, v3, v4 );\n\t}\n\t#else\n\tuniform mat4 _BoneMatrices[BONE_COUNT];\n\tmat4 getBoneMatrix( const in float i ) {\n\t\treturn _BoneMatrices[int(i)];\n\t}\n\t#endif\n#endif\n\nvoid main(void) {\n#ifdef SKINNED_MATRICES\n  mat4 skinMatrix = mat4(0.0);\n  skinMatrix += aSkinWeight.x * getBoneMatrix(aSkinIndex.x);\n  skinMatrix += aSkinWeight.y * getBoneMatrix(aSkinIndex.y);\n  skinMatrix += aSkinWeight.z * getBoneMatrix(aSkinIndex.z);\n  skinMatrix += aSkinWeight.w * getBoneMatrix(aSkinIndex.w);\n\n  vec4 pos = skinMatrix * vec4(aPos, 1.0);\n#else\n\tvec4 pos = vec4(aPos, 1.0);\n#endif\n\n\tvec4 world = _Model * pos;\n\n\tvUV = aUV0;\n  #ifdef AO_ON_UV2\n  vUV1 = aUV1;\n  #endif\n\n\t#ifdef SCALE_UV0\n\t\tvUV *= _UV0Scale.xy;\n\t\tvUV += _UV0Scale.zw;\n\t#endif\n\n\tgl_Position = _ViewProjection * world;\n}\n\n"
    },
    732: function(e, t) {
        e.exports = "#ifdef GL_ES\nprecision mediump float;\n#endif\n\nvarying vec3 vEye;\nvarying vec2 vUV;\nvarying vec3 vForward;\n\nuniform sampler2D  _Source;\nuniform sampler2D  _Destination;\nuniform float  _Transition;\nuniform float  _TransitionLength;\nuniform float  _Resolution;\nuniform float  _Randomness;\nuniform vec3  _Dir;\n\nfloat hash13(vec3 p3)\n{\n  p3  = fract(p3 * .1031);\n  p3 += dot(p3, p3.yzx + 33.33);\n  return fract((p3.x + p3.y) * p3.z);\n}\n\nbool getVoxel(vec3 c) {\n  vec3 p = c + 0.5;\n  float d =  -(length(p) - _Resolution);\n  return d < 0.0;\n}\n\n//https://www.shadertoy.com/view/4dX3zl\n//TODO: can be replaced by a texture lookup\nvec3 getVoxelPos(vec3 rayDir)\n{\n  //place start of ray close to sphere\n  vec3 mapPos = floor(normalize(rayDir) * (_Resolution - 1.));\n\n  vec3 deltaDist = abs(vec3(length(rayDir)) / rayDir);\n  vec3 s = sign(rayDir);\n\n  vec3 sideDist = (s * mapPos + (s * 0.5) + 0.5) * deltaDist;\n\n  for (int i = 0; i < 4; i++) {\n    if (getVoxel(mapPos)) continue;\n    bvec3 mask = lessThanEqual(sideDist.xyz, min(sideDist.yzx, sideDist.zxy));\n\n    //All components of mask are false except for the corresponding largest component\n    //of sideDist, which is the axis along which the ray should be incremented.\n\n    sideDist += vec3(mask) * deltaDist;\n    mapPos += vec3(mask) * s;\n\n  }\n  return mapPos;\n}\n\nfloat voxelTransition(in vec3 n)\n{\n  vec3 i = getVoxelPos(n);\n  //direction of wipe effect\n  vec3 d = normalize(vForward);\n  float p = dot(i/ _Resolution, d) + 1.;\n  p += hash13(i) * _Randomness;\n  return smoothstep(0., _TransitionLength, _Transition * 0.5 * (1. + _Randomness + _TransitionLength)- p);\n}\n\nfloat fadeTransition(in vec2 uv)\n{\n//  uv = uv * 2. - 1.;\n//  float p = dot(uv,uv);\n//  return smoothstep(0., _TransitionLength, _Transition * 0.5 * (1. + _TransitionLength)- p);\n  return _Transition;\n}\n\nvoid main(void) {\n//  vec2 sourceUV = ((vUV - 0.5) * (1. - _Transition * 0.5)) + 0.5;\n  float s = _Transition * _Transition * (3. - 2. * _Transition);\n  vec2 sourceUV = ((vUV - 0.5) * (1. - s * 0.5)) + 0.5;\n  vec3 c0 = texture2D(_Source, sourceUV).xyz;\n  vec3 c1 = texture2D(_Destination, vUV).xyz;\n\n//  vec3 c = mix(c0, c1, voxelTransition(normalize(vEye)));\n\n  vec3 c = mix(c0, c1, fadeTransition(vUV));\n\n  gl_FragColor = vec4(c , 1.);\n}\n"
    },
    733: function(e, t) {
        e.exports = "attribute vec3 aPos;\nattribute vec2 aUV0;\n\nvarying vec3 vEye;\nvarying vec3 vForward;\nvarying vec2 vUV;\n\nuniform vec3 _Frustum;\nuniform mat4 _InvView;\n\nvoid main(void) {\n\tgl_Position = vec4(aPos, 1.0);\n\n  //found by trial and error\n  vEye = mat3(_InvView) * (vec3(aPos.xy,-1.) * _Frustum);\n  vEye.xy *= -1.;\n\n  vForward = mat3(_InvView) * vec3(0.,0.,1.);\n  vForward.xy *= -1.;\n\n  vUV = aUV0;\n}\n"
    },
    734: function(e, t, n) {
        "use strict";
        n.r(t);
        n(496);
        var i, r = n(25), s = n(157), a = n.n(s), o = n(357), l = (n(497),
        n(12));
        l.a.sensibleDefaults = !1;
        var h = {
            closable: {
                bind: function(e, t, n) {
                    i = function(i) {
                        i.stopPropagation();
                        var r = t.value
                          , s = r.handler
                          , a = r.exclude
                          , o = !1;
                        a.forEach(function(e) {
                            if (!o) {
                                var t = n.context.$refs[e];
                                o = t.contains(i.target)
                            }
                        }),
                        e.contains(i.target) || o || n.context[s]()
                    }
                    ,
                    document.addEventListener("click", i),
                    document.addEventListener("touchstart", i)
                },
                unbind: function() {
                    document.removeEventListener("click", i),
                    document.removeEventListener("touchstart", i)
                }
            }
        }
          , u = n(499)
          , c = {
            name: "Icon",
            props: {
                name: l.a.string.isRequired
            },
            computed: {
                icon: function() {
                    return u("./".concat(this.name, ".svg"))
                }
            }
        }
          , v = n(223)
          , d = n(11);
        var f = {
            Icon: Object(d.a)(c, function() {
                var e = this.$createElement;
                return (this._self._c || e)("span", {
                    class: [this.$style.icon],
                    attrs: {
                        "data-icon": this.name
                    },
                    domProps: {
                        innerHTML: this._s(this.icon)
                    }
                })
            }, [], !1, function(e) {
                this.$style = v.default.locals || v.default
            }, null, null).exports
        }
          , _ = n(243)
          , p = "production"
          , m = "development"
          , g = "staging"
          , y = "local"
          , E = {
            LOCALE: "locale",
            API: "api",
            BASE: "base"
        }
          , T = {
            LOCALE_ENABLED: "locale-enabled",
            LOCALE_ROUTING_ENABLED: "locale-routing-enabled",
            STATIC_ROOT: "static-root",
            PUBLIC_PATH: "public-path",
            VERSIONED_STATIC_ROOT: "versioned-static-root"
        }
          , R = {
            DEFAULT_LOCALE: "default-locale",
            AVAILABLE_LOCALES: "available-locales",
            PERSIST_QUERY_PARAMS: "persist-query-params"
        }
          , A = {}
          , x = function(e, t) {
            A[e] = t
        }
          , k = function(e) {
            return A[e]
        }
          , b = "configManager"
          , M = function() {
            var e = k(b)
              , t = {
                languages: e.getProperty(R.AVAILABLE_LOCALES).map(function(e) {
                    return "string" === typeof e ? {
                        code: e,
                        urlPrefix: e,
                        translationKey: e
                    } : e
                }),
                defaultCode: e.getProperty(R.DEFAULT_LOCALE),
                persistent: !1
            };
            return {
                localeEnabled: e.getVariable(T.LOCALE_ENABLED),
                localeRoutingEnabled: e.getVariable(T.LOCALE_ROUTING_ENABLED),
                config: t
            }
        }
          , w = n(14)
          , S = n.n(w)
          , C = n(15)
          , I = n(6)
          , P = n(0)
          , L = n.n(P)
          , V = n(1)
          , O = n.n(V)
          , N = n(4)
          , F = n.n(N)
          , B = n(2)
          , D = n.n(B)
          , U = n(5)
          , z = n.n(U)
          , H = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            O()(t, [{
                key: "setupTransitionInTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupTransitionOutTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupLoopingAnimationTimeline",
                value: function(e, t, n) {}
            }]),
            t
        }(I.AbstractTransitionController)
          , G = [{
            title: "hero.pageTitle",
            component: "HeroBlock",
            translationPrefix: "hero",
            inverted: !0
        }, {
            title: "about.pageTitle",
            component: "AboutBlock",
            translationPrefix: "about"
        }, {
            title: "people.pageTitle",
            component: "PeopleBlock",
            translationPrefix: "people"
        }, /*{
            title: "testimonials.pageTitle",
            component: "TestimonialsBlock",
            translationPrefix: "testimonials",
            inverted: !0
        }, */{
            title: "contact.pageTitle",
            component: "ContactBlock",
            translationPrefix: "contact",
        }]
          , $ = n(16)
          , X = n.n($)
          , W = n(10)
          , j = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            O()(t, [{
                key: "playLogoTimeline",
                value: function() {
                    var e = new W.TimelineMax
                      , t = this.parentController.$refs.logo
                      , n = this.parentController.$refs.background
                      , i = t.$el.querySelector(".js-bar-mask");
                    e.fromTo(i, 1.2, {
                        transformOrigin: "left top",
                        scaleX: 0
                    }, {
                        transformOrigin: "left top",
                        scaleX: 1,
                        ease: W.Power2.easeIn
                    }, .25),
                    e.fromTo(i, 1.2, {
                        xPercent: 0
                    }, {
                        xPercent: 100,
                        ease: W.Power2.easeInOut
                    }, "+=1.6"),
                    e.fromTo(n, 4, {
                        scale: 1.2
                    }, {
                        scale: 1,
                        ease: W.Power2.easeOut
                    }, 0)
                }
            }, {
                key: "setScrollProgress",
                value: function(e) {
                    W.TweenMax.set(this.parentController.$refs.background, {
                        yPercent: 50 * e
                    }),
                    W.TweenMax.set(this.parentController.$refs.content, {
                        yPercent: 25 * e
                    })
                }
            }, {
                key: "setupTransitionInTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupTransitionOutTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupLoopingAnimationTimeline",
                value: function(e, t, n) {}
            }]),
            t
        }(I.AbstractTransitionController)
          , Y = n(8)
          , q = n.n(Y)
          , K = n(100)
          , Z = n(79)
          , J = n.n(Z)
          , Q = n(3);
        Q.l._gsDefine("plugins.ThrowPropsPlugin", ["utils.VelocityTracker", "plugins.TweenPlugin", "TweenLite", "easing.Ease"], function(e) {
            var t, n, i, r, s = function(e, t) {
                Q.k.call(this, "throwProps"),
                this._overwriteProps.length = 0
            }, a = 999999999999999, o = Q.l._gsDefine.globals, l = !1, h = {
                x: 1,
                y: 1,
                z: 2,
                scale: 1,
                scaleX: 1,
                scaleY: 1,
                rotation: 1,
                rotationZ: 1,
                rotationX: 2,
                rotationY: 2,
                skewX: 1,
                skewY: 1,
                xPercent: 1,
                yPercent: 1
            }, u = function(e, t, n, i, r) {
                var s, o, l, h, u = t.length, c = 0, v = a;
                if ("object" === typeof e) {
                    for (; --u > -1; ) {
                        for (l in s = t[u],
                        o = 0,
                        e)
                            o += (h = s[l] - e[l]) * h;
                        o < v && (c = u,
                        v = o)
                    }
                    if ((r || a) < a && r < Math.sqrt(v))
                        return e
                } else
                    for (; --u > -1; )
                        (o = (s = t[u]) - e) < 0 && (o = -o),
                        o < v && s >= i && s <= n && (c = u,
                        v = o);
                return t[c]
            }, c = function(e, t, n, i, r, s) {
                if ("auto" === e.end)
                    return e;
                var o, l, h = e.end;
                if (n = isNaN(n) ? a : n,
                i = isNaN(i) ? -a : i,
                "object" === typeof t) {
                    if (o = t.calculated ? t : ("function" === typeof h ? h(t) : u(t, h, n, i, s)) || t,
                    !t.calculated) {
                        for (l in o)
                            t[l] = o[l];
                        t.calculated = !0
                    }
                    o = o[r]
                } else
                    o = "function" === typeof h ? h(t) : h instanceof Array ? u(t, h, n, i, s) : Number(h);
                return o > n ? o = n : o < i && (o = i),
                {
                    max: o,
                    min: o,
                    unitFactor: e.unitFactor
                }
            }, v = function(e, t, n) {
                for (var i in t)
                    void 0 === e[i] && i !== n && (e[i] = t[i]);
                return e
            }, d = s.calculateChange = function(e, t, n, i) {
                return null == i && (i = .05),
                n * i * e / (t instanceof Q.b ? t : t ? new Q.b(t) : Q.j.defaultEase).getRatio(i)
            }
            , f = s.calculateDuration = function(e, t, n, i, r) {
                r = r || .05;
                var s = i instanceof Q.b ? i : i ? new Q.b(i) : Q.j.defaultEase;
                return Math.abs((t - e) * s.getRatio(r) / n / r)
            }
            , _ = s.calculateTweenDuration = function(t, n, i, r, a, o) {
                if ("string" === typeof t && (t = Q.j.selector(t)),
                !t)
                    return 0;
                null == i && (i = 10),
                null == r && (r = .2),
                null == a && (a = 1),
                t.length && (t = t[0] || t);
                var h, u, _, p, m, g, y, E, T, R, A, x, k, b = 0, M = 9999999999, w = n.throwProps || n, S = n.ease instanceof Q.b ? n.ease : n.ease ? new Q.b(n.ease) : Q.j.defaultEase, C = isNaN(w.checkpoint) ? .05 : Number(w.checkpoint), I = isNaN(w.resistance) ? s.defaultResistance : Number(w.resistance);
                if (w.linkedProps)
                    for (x = w.linkedProps.split(","),
                    A = {},
                    k = 0; k < x.length; k++)
                        (u = w[h = x[k]]) && (_ = (p = void 0 !== u.velocity && "number" === typeof u.velocity ? Number(u.velocity) || 0 : (T = T || e.getByTarget(t)) && T.isTrackingProp(h) ? T.getVelocity(h) : 0) * (m = isNaN(u.resistance) ? I : Number(u.resistance)) > 0 ? p / m : p / -m,
                        g = "function" === typeof t[h] ? t[h.indexOf("set") || "function" !== typeof t["get" + h.substr(3)] ? h : "get" + h.substr(3)]() : t[h] || 0,
                        A[h] = g + d(p, S, _, C));
                for (h in w)
                    "resistance" !== h && "checkpoint" !== h && "preventOvershoot" !== h && "linkedProps" !== h && "radius" !== h && ("object" !== typeof (u = w[h]) && ((T = T || e.getByTarget(t)) && T.isTrackingProp(h) ? u = "number" === typeof u ? {
                        velocity: u
                    } : {
                        velocity: T.getVelocity(h)
                    } : _ = (p = Number(u) || 0) * I > 0 ? p / I : p / -I),
                    "object" === typeof u && (_ = (p = void 0 !== u.velocity && "number" === typeof u.velocity ? Number(u.velocity) || 0 : (T = T || e.getByTarget(t)) && T.isTrackingProp(h) ? T.getVelocity(h) : 0) * (m = isNaN(u.resistance) ? I : Number(u.resistance)) > 0 ? p / m : p / -m,
                    y = (g = "function" === typeof t[h] ? t[h.indexOf("set") || "function" !== typeof t["get" + h.substr(3)] ? h : "get" + h.substr(3)]() : t[h] || 0) + d(p, S, _, C),
                    void 0 !== u.end && (u = c(u, A && h in A ? A : y, u.max, u.min, h, w.radius),
                    (o || l) && (w[h] = v(u, w[h], "end"))),
                    void 0 !== u.max && y > Number(u.max) + 1e-10 ? (R = u.unitFactor || s.defaultUnitFactors[h] || 1,
                    (E = g > u.max && u.min !== u.max || p * R > -15 && p * R < 45 ? r + .1 * (i - r) : f(g, u.max, p, S, C)) + a < M && (M = E + a)) : void 0 !== u.min && y < Number(u.min) - 1e-10 && (R = u.unitFactor || s.defaultUnitFactors[h] || 1,
                    (E = g < u.min && u.min !== u.max || p * R > -45 && p * R < 15 ? r + .1 * (i - r) : f(g, u.min, p, S, C)) + a < M && (M = E + a)),
                    E > b && (b = E)),
                    _ > b && (b = _));
                return b > M && (b = M),
                b > i ? i : b < r ? r : b
            }
            , p = s.prototype = new Q.k("throwProps");
            return p.constructor = s,
            s.version = "0.11.2",
            s.API = 2,
            s._autoCSS = !0,
            s.defaultResistance = 100,
            s.defaultUnitFactors = {
                time: 1e3,
                totalTime: 1e3
            },
            s.track = function(t, n, i) {
                return e.track(t, n, i)
            }
            ,
            s.untrack = function(t, n) {
                e.untrack(t, n)
            }
            ,
            s.isTracking = function(t, n) {
                return e.isTracking(t, n)
            }
            ,
            s.getVelocity = function(t, n) {
                var i = e.getByTarget(t);
                return i ? i.getVelocity(n) : NaN
            }
            ,
            s._cssRegister = function() {
                var i = o.com.greensock.plugins.CSSPlugin;
                if (i) {
                    var r = i._internals
                      , a = r._parseToProxy
                      , l = r._setPluginRatio
                      , u = r.CSSPropTween;
                    r._registerComplexSpecialProp("throwProps", {
                        parser: function(i, r, o, c, v, d) {
                            d = new s;
                            var f, _, p, m, g = {}, y = {}, E = {}, T = {}, R = {}, A = {};
                            for (_ in n = {},
                            r)
                                "resistance" !== _ && "preventOvershoot" !== _ && "linkedProps" !== _ && "radius" !== _ && ("object" === typeof (f = r[_]) ? (void 0 !== f.velocity && "number" === typeof f.velocity ? g[_] = Number(f.velocity) || 0 : (m = m || e.getByTarget(i),
                                g[_] = m && m.isTrackingProp(_) ? m.getVelocity(_) : 0),
                                void 0 !== f.end && (T[_] = f.end),
                                void 0 !== f.min && (y[_] = f.min),
                                void 0 !== f.max && (E[_] = f.max),
                                f.preventOvershoot && (A[_] = !0),
                                void 0 !== f.resistance && (!0,
                                R[_] = f.resistance)) : "number" === typeof f ? g[_] = f : (m = m || e.getByTarget(i)) && m.isTrackingProp(_) ? g[_] = m.getVelocity(_) : g[_] = f || 0,
                                h[_] && c._enableTransforms(2 === h[_]));
                            for (_ in p = a(i, g, c, v, d),
                            t = p.proxy,
                            g = p.end,
                            t)
                                n[_] = {
                                    velocity: g[_],
                                    min: y[_],
                                    max: E[_],
                                    end: T[_],
                                    resistance: R[_],
                                    preventOvershoot: A[_]
                                };
                            return null != r.resistance && (n.resistance = r.resistance),
                            null != r.linkedProps && (n.linkedProps = r.linkedProps),
                            null != r.radius && (n.radius = r.radius),
                            r.preventOvershoot && (n.preventOvershoot = !0),
                            v = new u(i,"throwProps",0,0,p.pt,2),
                            c._overwriteProps.pop(),
                            v.plugin = d,
                            v.setRatio = l,
                            v.data = p,
                            d._onInitTween(t, n, c._tween),
                            v
                        }
                    })
                }
            }
            ,
            s.to = function(e, s, a, o, h) {
                s.throwProps || (s = {
                    throwProps: s
                }),
                0 === h && (s.throwProps.preventOvershoot = !0),
                l = !0;
                var u = new Q.j(e,o || 1,s);
                return u.render(0, !0, !0),
                u.vars.css ? (u.duration(_(t, {
                    throwProps: n,
                    ease: s.ease
                }, a, o, h)),
                u._delay && !u.vars.immediateRender ? u.invalidate() : i._onInitTween(t, r, u),
                l = !1,
                u) : (u.kill(),
                u = new Q.j(e,_(e, s, a, o, h),s),
                l = !1,
                u)
            }
            ,
            p._onInitTween = function(t, n, s, a) {
                this.target = t,
                this._props = [],
                i = this,
                r = n;
                var o, h, u, f, _, p, m, g, y, E, T, R, A = s._ease, x = isNaN(n.checkpoint) ? .05 : Number(n.checkpoint), k = s._duration, b = n.preventOvershoot, M = 0;
                if (n.linkedProps)
                    for (T = n.linkedProps.split(","),
                    E = {},
                    R = 0; R < T.length; R++)
                        (h = n[o = T[R]]) && (_ = void 0 !== h.velocity && "number" === typeof h.velocity ? Number(h.velocity) || 0 : (y = y || e.getByTarget(t)) && y.isTrackingProp(o) ? y.getVelocity(o) : 0,
                        u = "function" === typeof t[o] ? t[o.indexOf("set") || "function" !== typeof t["get" + o.substr(3)] ? o : "get" + o.substr(3)]() : t[o] || 0,
                        E[o] = u + d(_, A, k, x));
                for (o in n)
                    if ("resistance" !== o && "checkpoint" !== o && "preventOvershoot" !== o && "linkedProps" !== o && "radius" !== o) {
                        if ("function" === typeof (h = n[o]) && (h = h(a, t)),
                        "number" === typeof h)
                            _ = Number(h) || 0;
                        else if ("object" !== typeof h || isNaN(h.velocity)) {
                            if (!(y = y || e.getByTarget(t)) || !y.isTrackingProp(o))
                                throw "ERROR: No velocity was defined in the throwProps tween of " + t + " property: " + o;
                            _ = y.getVelocity(o)
                        } else
                            _ = Number(h.velocity);
                        p = d(_, A, k, x),
                        g = 0,
                        u = (f = "function" === typeof t[o]) ? t[o.indexOf("set") || "function" !== typeof t["get" + o.substr(3)] ? o : "get" + o.substr(3)]() : t[o],
                        "object" === typeof h && (m = u + p,
                        void 0 !== h.end && (h = c(h, E && o in E ? E : m, h.max, h.min, o, n.radius),
                        l && (n[o] = v(h, n[o], "end"))),
                        void 0 !== h.max && Number(h.max) < m ? b || h.preventOvershoot ? p = h.max - u : g = h.max - u - p : void 0 !== h.min && Number(h.min) > m && (b || h.preventOvershoot ? p = h.min - u : g = h.min - u - p)),
                        this._overwriteProps[M] = o,
                        this._props[M++] = {
                            p: o,
                            s: u,
                            c1: p,
                            c2: g,
                            f: f,
                            r: !1
                        }
                    }
                return !0
            }
            ,
            p._kill = function(e) {
                for (var t = this._props.length; --t > -1; )
                    null != e[this._props[t].p] && this._props.splice(t, 1);
                return Q.k.prototype._kill.call(this, e)
            }
            ,
            p._mod = function(e) {
                for (var t, n = this._props, i = n.length; --i > -1; )
                    "function" === typeof (t = e[n[i].p] || e.throwProps) && (n[i].m = t)
            }
            ,
            p.setRatio = function(e) {
                for (var t, n, i = this._props.length; --i > -1; )
                    n = (t = this._props[i]).s + t.c1 * e + t.c2 * e * e,
                    t.m ? n = t.m(n, this.target) : 1 === e && (n = (1e4 * n + (n < 0 ? -.5 : .5) | 0) / 1e4),
                    t.f ? this.target[t.p](n) : this.target[t.p] = n
            }
            ,
            Q.k.activate([s]),
            s
        }, !0),
        Q.l._gsDefine("utils.VelocityTracker", ["TweenLite"], function() {
            var e, t, n, i = /([A-Z])/g, r = {}, s = Q.l.document, a = {
                x: 1,
                y: 1,
                z: 2,
                scale: 1,
                scaleX: 1,
                scaleY: 1,
                rotation: 1,
                rotationZ: 1,
                rotationX: 2,
                rotationY: 2,
                skewX: 1,
                skewY: 1,
                xPercent: 1,
                yPercent: 1
            }, o = "undefined" !== typeof window ? window : s.defaultView || {
                getComputedStyle: function() {}
            }, l = function(e, t, n) {
                var s, a = (e._gsTransform || r)[t];
                return a || 0 === a ? a : (e.style[t] ? a = e.style[t] : (n = n || (s = e,
                o.getComputedStyle(s))) ? a = n[t] || n.getPropertyValue(t) || n.getPropertyValue(t.replace(i, "-$1").toLowerCase()) : e.currentStyle && (a = e.currentStyle[t]),
                parseFloat(a) || 0)
            }, h = Q.j.ticker, u = function(e, t, n) {
                this.p = e,
                this.f = t,
                this.v1 = this.v2 = 0,
                this.t1 = this.t2 = h.time,
                this.css = !1,
                this.type = "",
                this._prev = null,
                n && (this._next = n,
                n._prev = this)
            }, c = function() {
                var t, i, r = e, s = h.time;
                if (s - n >= .03)
                    for (n,
                    n = s; r; ) {
                        for (i = r._firstVP; i; )
                            ((t = i.css ? l(r.target, i.p) : i.f ? r.target[i.p]() : r.target[i.p]) !== i.v1 || s - i.t1 > .15) && (i.v2 = i.v1,
                            i.v1 = t,
                            i.t2 = i.t1,
                            i.t1 = s),
                            i = i._next;
                        r = r._next
                    }
            }, v = function(i) {
                this._lookup = {},
                this.target = i,
                this.elem = !(!i.style || !i.nodeType),
                t || (h.addEventListener("tick", c, null, !1, -100),
                n = h.time,
                t = !0),
                e && (this._next = e,
                e._prev = this),
                e = this
            }, d = v.getByTarget = function(t) {
                for (var n = e; n; ) {
                    if (n.target === t)
                        return n;
                    n = n._next
                }
            }
            , f = v.prototype;
            return f.addProp = function(e, t) {
                if (!this._lookup[e]) {
                    var n = this.target
                      , i = "function" === typeof n[e]
                      , r = i ? this._altProp(e) : e
                      , s = this._firstVP;
                    this._firstVP = this._lookup[e] = this._lookup[r] = s = new u(r !== e && 0 === e.indexOf("set") ? r : e,i,s),
                    s.css = this.elem && (void 0 !== this.target.style[s.p] || a[s.p]),
                    s.css && a[s.p] && !n._gsTransform && Q.j.set(n, {
                        x: "+=0",
                        overwrite: !1
                    }),
                    s.type = t || s.css && 0 === e.indexOf("rotation") ? "deg" : "",
                    s.v1 = s.v2 = s.css ? l(n, s.p) : i ? n[s.p]() : n[s.p]
                }
            }
            ,
            f.removeProp = function(e) {
                var t = this._lookup[e];
                t && (t._prev ? t._prev._next = t._next : t === this._firstVP && (this._firstVP = t._next),
                t._next && (t._next._prev = t._prev),
                this._lookup[e] = 0,
                t.f && (this._lookup[this._altProp(e)] = 0))
            }
            ,
            f.isTrackingProp = function(e) {
                return this._lookup[e]instanceof u
            }
            ,
            f.getVelocity = function(e) {
                var t, n, i = this._lookup[e], r = this.target;
                if (!i)
                    throw "The velocity of " + e + " is not being tracked.";
                return t = (i.css ? l(r, i.p) : i.f ? r[i.p]() : r[i.p]) - i.v2,
                "rad" !== i.type && "deg" !== i.type || (t %= n = "rad" === i.type ? 2 * Math.PI : 360) !== t % (n / 2) && (t = t < 0 ? t + n : t - n),
                t / (h.time - i.t2)
            }
            ,
            f._altProp = function(e) {
                var t = e.substr(0, 3)
                  , n = ("get" === t ? "set" : "set" === t ? "get" : t) + e.substr(3);
                return "function" === typeof this.target[n] ? n : e
            }
            ,
            v.getByTarget = function(t) {
                var n = e;
                for ("string" === typeof t && (t = Q.j.selector(t)),
                t.length && t !== window && t[0] && t[0].style && !t.nodeType && (t = t[0]); n; ) {
                    if (n.target === t)
                        return n;
                    n = n._next
                }
            }
            ,
            v.track = function(e, t, n) {
                var i = d(e)
                  , r = t.split(",")
                  , s = r.length;
                for (n = (n || "").split(","),
                i || (i = new v(e)); --s > -1; )
                    i.addProp(r[s], n[s] || n[0]);
                return i
            }
            ,
            v.untrack = function(t, n) {
                var i = d(t)
                  , r = (n || "").split(",")
                  , s = r.length;
                if (i) {
                    for (; --s > -1; )
                        i.removeProp(r[s]);
                    i._firstVP && n || (i._prev ? i._prev._next = i._next : i === e && (e = i._next),
                    i._next && (i._next._prev = i._prev))
                }
            }
            ,
            v.isTracking = function(e, t) {
                var n = d(e);
                return !!n && (!(t || !n._firstVP) || n.isTrackingProp(t))
            }
            ,
            v
        }, !0);
        Q.n.ThrowPropsPlugin;
        var ee = Q.n.com.greensock.utils.VelocityTracker;
        Q.l._gsDefine("easing.CustomEase", ["easing.Ease"], function() {
            var e = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
              , t = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
              , n = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi
              , i = /[cLlsS]/g
              , r = "CustomEase only accepts Cubic Bezier data."
              , s = function e(t, n, i, r, s, a, o, l, h, u, c) {
                var v, d = (t + i) / 2, f = (n + r) / 2, _ = (i + s) / 2, p = (r + a) / 2, m = (s + o) / 2, g = (a + l) / 2, y = (d + _) / 2, E = (f + p) / 2, T = (_ + m) / 2, R = (p + g) / 2, A = (y + T) / 2, x = (E + R) / 2, k = o - t, b = l - n, M = Math.abs((i - o) * b - (r - l) * k), w = Math.abs((s - o) * b - (a - l) * k);
                return u || (u = [{
                    x: t,
                    y: n
                }, {
                    x: o,
                    y: l
                }],
                c = 1),
                u.splice(c || u.length - 1, 0, {
                    x: A,
                    y: x
                }),
                (M + w) * (M + w) > h * (k * k + b * b) && (v = u.length,
                e(t, n, d, f, y, E, A, x, h, u, c),
                e(A, x, T, R, m, g, o, l, h, u, c + 1 + (u.length - v))),
                u
            }
              , a = function(e) {
                var t = this.lookup[e * this.l | 0] || this.lookup[this.l - 1];
                return t.nx < e && (t = t.n),
                t.y + (e - t.x) / t.cx * t.cy
            }
              , o = function(e, t, n) {
                this._calcEnd = !0,
                this.id = e,
                e && (Q.b.map[e] = this),
                this.getRatio = a,
                this.setData(t, n)
            }
              , l = o.prototype = new Q.b;
            return l.constructor = o,
            l.setData = function(a, o) {
                var l, h, u, c, v, d, f, _, p, m, g = (a = a || "0,0,1,1").match(e), y = 1, E = [];
                if (m = (o = o || {}).precision || 1,
                this.data = a,
                this.lookup = [],
                this.points = E,
                this.fast = m <= 1,
                (i.test(a) || -1 !== a.indexOf("M") && -1 === a.indexOf("C")) && (g = function(e) {
                    var i, s, a, o, l, h, u, c, v, d, f, _ = (e + "").replace(n, function(e) {
                        var t = +e;
                        return t < 1e-4 && t > -1e-4 ? 0 : t
                    }).match(t) || [], p = [], m = 0, g = 0, y = _.length, E = 2;
                    for (i = 0; i < y; i++)
                        if (v = o,
                        isNaN(_[i]) ? l = (o = _[i].toUpperCase()) !== _[i] : i--,
                        s = +_[i + 1],
                        a = +_[i + 2],
                        l && (s += m,
                        a += g),
                        i || (u = s,
                        c = a),
                        "M" === o)
                            h && h.length < 8 && (p.length -= 1,
                            E = 0),
                            m = u = s,
                            g = c = a,
                            h = [s, a],
                            E = 2,
                            p.push(h),
                            i += 2,
                            o = "L";
                        else if ("C" === o)
                            h || (h = [0, 0]),
                            h[E++] = s,
                            h[E++] = a,
                            l || (m = g = 0),
                            h[E++] = m + 1 * _[i + 3],
                            h[E++] = g + 1 * _[i + 4],
                            h[E++] = m += 1 * _[i + 5],
                            h[E++] = g += 1 * _[i + 6],
                            i += 6;
                        else if ("S" === o)
                            "C" === v || "S" === v ? (d = m - h[E - 4],
                            f = g - h[E - 3],
                            h[E++] = m + d,
                            h[E++] = g + f) : (h[E++] = m,
                            h[E++] = g),
                            h[E++] = s,
                            h[E++] = a,
                            l || (m = g = 0),
                            h[E++] = m += 1 * _[i + 3],
                            h[E++] = g += 1 * _[i + 4],
                            i += 4;
                        else {
                            if ("L" !== o && "Z" !== o)
                                throw r;
                            "Z" === o && (s = u,
                            a = c,
                            h.closed = !0),
                            ("L" === o || Math.abs(m - s) > .5 || Math.abs(g - a) > .5) && (h[E++] = m + (s - m) / 3,
                            h[E++] = g + (a - g) / 3,
                            h[E++] = m + 2 * (s - m) / 3,
                            h[E++] = g + 2 * (a - g) / 3,
                            h[E++] = s,
                            h[E++] = a,
                            "L" === o && (i += 2)),
                            m = s,
                            g = a
                        }
                    return p[0]
                }(a)),
                4 === (l = g.length))
                    g.unshift(0, 0),
                    g.push(1, 1),
                    l = 8;
                else if ((l - 2) % 6)
                    throw r;
                for (0 === +g[0] && 1 === +g[l - 2] || function(e, t, n) {
                    n || 0 === n || (n = Math.max(+e[e.length - 1], +e[1]));
                    var i, r = -1 * +e[0], s = -n, a = e.length, o = 1 / (+e[a - 2] + r), l = -t || (Math.abs(+e[a - 1] - +e[1]) < .01 * (+e[a - 2] - +e[0]) ? function(e) {
                        var t, n = e.length, i = 999999999999;
                        for (t = 1; t < n; t += 6)
                            +e[t] < i && (i = +e[t]);
                        return i
                    }(e) + s : +e[a - 1] + s);
                    for (l = l ? 1 / l : -o,
                    i = 0; i < a; i += 2)
                        e[i] = (+e[i] + r) * o,
                        e[i + 1] = (+e[i + 1] + s) * l
                }(g, o.height, o.originY),
                this.rawBezier = g,
                c = 2; c < l; c += 6)
                    h = {
                        x: +g[c - 2],
                        y: +g[c - 1]
                    },
                    u = {
                        x: +g[c + 4],
                        y: +g[c + 5]
                    },
                    E.push(h, u),
                    s(h.x, h.y, +g[c], +g[c + 1], +g[c + 2], +g[c + 3], u.x, u.y, 1 / (2e5 * m), E, E.length - 1);
                for (l = E.length,
                c = 0; c < l; c++)
                    f = E[c],
                    _ = E[c - 1] || f,
                    f.x > _.x || _.y !== f.y && _.x === f.x || f === _ ? (_.cx = f.x - _.x,
                    _.cy = f.y - _.y,
                    _.n = f,
                    _.nx = f.x,
                    this.fast && c > 1 && Math.abs(_.cy / _.cx - E[c - 2].cy / E[c - 2].cx) > 2 && (this.fast = !1),
                    _.cx < y && (_.cx ? y = _.cx : (_.cx = .001,
                    c === l - 1 && (_.x -= .001,
                    y = Math.min(y, .001),
                    this.fast = !1)))) : (E.splice(c--, 1),
                    l--);
                if (l = 1 / y + 1 | 0,
                this.l = l,
                v = 1 / l,
                d = 0,
                f = E[0],
                this.fast) {
                    for (c = 0; c < l; c++)
                        p = c * v,
                        f.nx < p && (f = E[++d]),
                        h = f.y + (p - f.x) / f.cx * f.cy,
                        this.lookup[c] = {
                            x: p,
                            cx: v,
                            y: h,
                            cy: 0,
                            nx: 9
                        },
                        c && (this.lookup[c - 1].cy = h - this.lookup[c - 1].y);
                    this.lookup[l - 1].cy = E[E.length - 1].y - h
                } else {
                    for (c = 0; c < l; c++)
                        f.nx < c * v && (f = E[++d]),
                        this.lookup[c] = f;
                    d < E.length - 1 && (this.lookup[c - 1] = E[E.length - 2])
                }
                return this._calcEnd = 1 !== E[E.length - 1].y || 0 !== E[0].y,
                this
            }
            ,
            l.getRatio = a,
            l.getSVGData = function(e) {
                return o.getSVGData(this, e)
            }
            ,
            o.create = function(e, t, n) {
                return new o(e,t,n)
            }
            ,
            o.version = "0.2.2",
            o.bezierToPoints = s,
            o.get = function(e) {
                return Q.b.map[e]
            }
            ,
            o.getSVGData = function(e, t) {
                var n, i, r, s, a, o, l, h, u, c, v = (t = t || {}).width || 100, d = t.height || 100, f = t.x || 0, _ = (t.y || 0) + d, p = t.path;
                if (t.invert && (d = -d,
                _ = 0),
                (e = e.getRatio ? e : Q.b.map[e] || console.log("No ease found: ", e)).rawBezier) {
                    for (n = [],
                    l = e.rawBezier.length,
                    r = 0; r < l; r += 2)
                        n.push((1e3 * (f + e.rawBezier[r] * v) | 0) / 1e3 + "," + (1e3 * (_ + e.rawBezier[r + 1] * -d) | 0) / 1e3);
                    n[0] = "M" + n[0],
                    n[1] = "C" + n[1]
                } else
                    for (n = ["M" + f + "," + _],
                    s = 1 / (l = Math.max(5, 200 * (t.precision || 1))),
                    h = 5 / (l += 2),
                    u = (1e3 * (f + s * v) | 0) / 1e3,
                    i = ((c = (1e3 * (_ + e.getRatio(s) * -d) | 0) / 1e3) - _) / (u - f),
                    r = 2; r < l; r++)
                        a = (1e3 * (f + r * s * v) | 0) / 1e3,
                        o = (1e3 * (_ + e.getRatio(r * s) * -d) | 0) / 1e3,
                        (Math.abs((o - c) / (a - u) - i) > h || r === l - 1) && (n.push(u + "," + c),
                        i = (o - c) / (a - u)),
                        u = a,
                        c = o;
                return p && ("string" === typeof p ? document.querySelector(p) : p).setAttribute("d", n.join(" ")),
                n.join(" ")
            }
            ,
            o
        }, !0);
        var te = {
            VinnieInOut: Q.n.CustomEase.create("VinnieInOut", "M0,0 C0.2,0 0,1 1,1")
        }
          , ne = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            O()(t, [{
                key: "transformDelta",
                value: function(e) {
                    return this.options.isLock ? {
                        x: 0,
                        y: 0
                    } : e
                }
            }]),
            t
        }(K.a);
        ne.pluginName = "lock",
        ne.defaultOptions = {
            isLock: !1
        };
        var ie = ne;
        K.b.use(ie);
        var re = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            t
        }(Object(Z.createEventClass)()("UPDATE"))
          , se = function(e) {
            function t() {
                var e;
                return L()(this, t),
                (e = F()(this, D()(t).call(this))).options = {
                    damping: .1,
                    rounding: 1e3,
                    alwaysShowTracks: !1,
                    scrollToEasing: te.VinnieInOut
                },
                e
            }
            return z()(t, e),
            O()(t, [{
                key: "init",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.wrapper = e,
                    this.options = Object.assign({}, this.options, t),
                    (this.options.damping <= 0 || this.options.damping > 1) && console.warn("The damping that you are using might cause visual issues, please select a value between 0.01 and 1"),
                    this.scrollbar = K.b.init(this.wrapper, {
                        damping: this.options.damping,
                        continuousScrolling: !1,
                        alwaysShowTracks: this.options.alwaysShowTracks
                    }),
                    this.scrollbar.addListener(this.update.bind(this)),
                    this.velocityTracker = ee.track(this.scrollbar.offset, "y"),
                    this.update()
                }
            }, {
                key: "scrollTo",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1600
                      , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.options.scrollToEasing;
                    this.scrollbar && this.scrollbar.scrollTo(e, t, n, {
                        easing: function(e) {
                            return i.getRatio(e)
                        }
                    })
                }
            }, {
                key: "lockScroll",
                value: function(e) {
                    this.scrollbar.updatePluginOptions("lock", {
                        isLock: e
                    })
                }
            }, {
                key: "update",
                value: function() {
                    this.dispatchEvent(new re(re.types.UPDATE))
                }
            }, {
                key: "dispose",
                value: function() {
                    this.scrollbar.destroy(),
                    q()(D()(t.prototype), "dispose", this).call(this)
                }
            }, {
                key: "y",
                get: function() {
                    return this.scrollbar ? this.scrollbar.offset.y : 0
                }
            }, {
                key: "velocity",
                get: function() {
                    return Math.round(this.velocityTracker.getVelocity("y") * this.options.rounding) / this.options.rounding / 100
                }
            }]),
            t
        }(J.a);
        function ae(e, t, n) {
            var i = n - t;
            return 0 === i ? t : 1 / i * (e - t)
        }
        var oe, le = {
            title: l.a.string,
            component: l.a.string,
            translationPrefix: l.a.string,
            inverted: l.a.bool.def(!1)
        }, he = "".concat("app", "/setDeviceState"), ue = "".concat("app", "/setCurrentScrollSection"), ce = "".concat("app", "/setHeaderLogoVisibility"), ve = "".concat("app", "/setWebglVisibility"), de = {
            state: {
                deviceState: null,
                currentScrollSection: null,
                headerLogoVisible: !1,
                webglVisible: !1
            },
            getters: {},
            mutations: (oe = {},
            X()(oe, he, function(e, t) {
                e.deviceState = t
            }),
            X()(oe, ue, function(e, t) {
                e.currentScrollSection = t
            }),
            X()(oe, ce, function(e, t) {
                e.headerLogoVisible = t
            }),
            X()(oe, ve, function(e, t) {
                e.webglVisible = t
            }),
            oe),
            actions: {}
        }, fe = {
            name: "HomePageBlock",
            props: {
                index: l.a.number,
                data: l.a.shape(le),
                inverted: l.a.bool.def(!1)
            },
            data: function() {
                return {
                    scrollProgress: -1,
                    isInView: !1
                }
            },
            computed: {
                content: function() {
                    return this.$store.getters.translation[this.data.translationPrefix]
                }
            },
            mounted: function() {
                this.$el.classList.add("full-page"),
                this.inverted && this.$el.setAttribute("data-invert-navigation", "true"),
                this.$scroll.addEventListener(re.types.UPDATE, this.onScrollUpdate)
            },
            methods: S()({
                translate: function(e) {
                    return this.$t("".concat(this.data.translationPrefix, ".").concat(e))
                },
                onScrollUpdate: function() {
                    var e = this.getElementTop()
                      , t = this.$el.offsetHeight
                      , n = window.innerHeight;
                    this.scrollProgress = 1 - Math.max(0, Math.min(1, ae(e, -t, n))),
                    this.isInView = this.scrollProgress > 0 && this.scrollProgress < 1,
                    this.isInView && e < .1 * window.innerHeight && this.setCurrentScrollSection(this.index)
                },
                getElementTop: function() {
                    return this.$el.offsetTop - this.$scroll.y
                }
            }, Object(C.c)({
                setCurrentScrollSection: ue
            }))
        }, _e = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            O()(t, [{
                key: "setupTransitionInTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupTransitionOutTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupLoopingAnimationTimeline",
                value: function(e, t, n) {}
            }]),
            t
        }(I.AbstractTransitionController), pe = n(13), me = function(e) {
            return {
                validator: function(t) {
                    return null === t || ("undefined" === typeof t ? !e.required : Object(pe.f)(e, t))
                }
            }
        }, ge = {
            name: "PrimaryButton",
            extends: I.AbstractTransitionComponent,
            props: {
                small: l.a.bool.def(!1),
                icon: me(l.a.string),
                link: l.a.string
            },
            methods: {
                handleAllComponentsReady: function() {
                    this.transitionController = new _e(this),
                    this.isReady()
                }
            }
        }, ye = n(224);
        var Ee = Object(d.a)(ge, function() {
            var e, t, n = this, i = n.$createElement, r = n._self._c || i;
            return n.link ? r("a", {
                class: [n.$style.primaryButton, (e = {},
                e[n.$style.isSmall] = n.small,
                e)],
                attrs: {
                    target: "_blank",
                    href: n.link
                },
                on: {
                    click: function(e) {
                        return n.$emit("click")
                    }
                }
            }, [r("span", {
                class: n.$style.connect
            }), n._v(" "), r("span", {
                class: n.$style.buttonContent
            }, [n._t("default"), n._v(" "), n.icon ? r("Icon", {
                class: n.$style.icon,
                attrs: {
                    name: n.icon
                }
            }) : n._e()], 2)]) : r("button", {
                class: [n.$style.primaryButton, (t = {},
                t[n.$style.isSmall] = n.small,
                t)],
                on: {
                    click: function(e) {
                        return n.$emit("click")
                    }
                }
            }, [r("span", {
                class: n.$style.connect
            }), n._v(" "), r("span", {
                class: n.$style.buttonContent
            }, [n._t("default"), n._v(" "), n.icon ? r("Icon", {
                class: n.$style.icon,
                attrs: {
                    name: n.icon
                }
            }) : n._e()], 2)])
        }, [], !1, function(e) {
            this.$style = ye.default.locals || ye.default
        }, null, null).exports
          , Te = n(24)
          , Re = {
            HERO: {
                slug: "about-301-redirect",
                name: "About Video",
                src: "video/launch-film-{lang}.mp4",
                youtubeId: "EBI7-pL52GY"
            },
            MAKING_OF: {
                slug: "making-of",
                name: "Making of Video",
                src: "video/making-of-film-{lang}.mp4",
                youtubeId: {
                    en: "JW5X9yznNJg",
                    de: "ydmxhxOl26c"
                }
            }
        }
          , Ae = {
            name: "HeroBlock",
            components: {
                PrimaryButton: Ee
            },
            extends: I.AbstractTransitionComponent,
            mixins: [fe],
            data: function() {
                return {
                    videoSlug: Re.HERO.slug
                }
            },
            computed: S()({}, Object(C.d)({
                deviceState: function(e) {
                    return e.app.deviceState
                }
            }), Object(C.b)(["currentLanguage"]), {
                backgroundSource: function() {
                    return "".concat(this.$versionRoot, "image/filler-main-background-").concat(this.deviceState < Te.deviceState.MEDIUM ? "small" : "large", ".png")
                }
            }),
            watch: {
                isInView: function(e) {
                    e && this.transitionController && this.transitionController.playLogoTimeline()
                },
                scrollProgress: function(e) {
                    this.setHeaderLogoVisibility(e >= 1),
                    this.transitionController && this.deviceState >= Te.deviceState.MEDIUM && this.transitionController.setScrollProgress(2 * (e - .5))
                }
            },
            methods: S()({}, Object(C.c)({
                setHeaderLogoVisibility: ce
            }), {
                handleAllComponentsReady: function() {
                    this.transitionController = new j(this),
                    this.isReady()
                },
                onScrollClick: function() {
                    this.$scroll.scrollTo(0, this.$el.offsetHeight)
                },
                onPlayClick: function() {
                    this.$router.push({
                        name: this.RouteNames.VIDEO,
                        params: X()({}, this.Params.SLUG, this.videoSlug)
                    })
                }
            })
        }
          , xe = n(225);
        var ke = Object(d.a)(Ae, function() {
            var e, t = this, n = t.$createElement, i = t._self._c || n;
            return i("div", {
                class: ["full-page", t.$style.heroBlock, (e = {},
                e[t.$style.isInView] = t.isInView,
                e)]
            }, [i("figure", {
                ref: "background",
                class: t.$style.background,
                style: "background-image: url('" + t.backgroundSource + "');"
            }), t._v(" "), i("div", {
                ref: "content",
                class: ["content", t.$style.content]
            }, [i("Icon", {
                ref: "logo",
                class: t.$style.logo,
                attrs: {
                    name: "logo-big"
                }
            }), t._v(" "), i("div", {
                class: ["copy-01", t.$style.description]
            }, [i("p", {
                domProps: {
                    innerHTML: t._s(t.translate("title"))
                }
            }), t._v(" "), i("PrimaryButton", {
                attrs: {
                    icon: "play-small"
                },
                on: {
                    click: t.onPlayClick
                }
            }, [t._v("\n        " + t._s(t.translate("cta")) + "\n      ")])], 1)], 1), t._v(" "), i("Icon", {
                class: t.$style.rsfLogo,
                attrs: {
                    name: "rsf-" + t.currentLanguage.code
                }
            }), t._v(" "), i("button", {
                class: t.$style.scrollArrow,
                on: {
                    click: t.onScrollClick
                }
            }, [i("span", {
                class: t.$style.scrollIcon
            })])], 1)
        }, [], !1, function(e) {
            this.$style = xe.default.locals || xe.default
        }, null, null).exports
          , be = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            O()(t, [{
                key: "setupTransitionInTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupTransitionOutTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupLoopingAnimationTimeline",
                value: function(e, t, n) {}
            }]),
            t
        }(I.AbstractTransitionController)
          , Me = n(18)
          , we = n.n(Me)
          , Se = n(27)
          , Ce = n.n(Se)
          , Ie = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            O()(t, [{
                key: "setupTransitionInTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupTransitionOutTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupLoopingAnimationTimeline",
                value: function(e, t, n) {}
            }]),
            t
        }(I.AbstractTransitionController)
          , Pe = n(41)
          , Le = n.n(Pe);
        function Ve(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}
              , n = [];
            return new Promise(function(i) {
                var r = 0;
                new Pe.LoadImageTask({
                    assets: e,
                    onAssetLoaded: function(i) {
                        var s = i.index
                          , a = i.asset;
                        r += 1,
                        t && t(r / e.length),
                        n[s] = a
                    }
                }).load().then(function() {
                    return i(n)
                })
            }
            )
        }
        var Oe = n(47)
          , Ne = n.n(Oe)
          , Fe = n(19)
          , Be = n.n(Fe)
          , De = n(158)
          , Ue = n.n(De)
          , ze = n(48)
          , He = n(29)
          , Ge = n.n(He)
          , $e = n(64)
          , Xe = n.n($e)
          , We = function(e) {
            function t(e) {
                var n, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return L()(this, t),
                (n = F()(this, D()(t).call(this))).images = [],
                n.canvas = null,
                n.context = null,
                n.currentFrame = 0,
                n.lastDrawnFrame = -1,
                n.sizeOption = "cover",
                n.parentElement = e,
                n.hasAlpha = i,
                n.createCanvas(),
                n.resizeListener = new ze.DisposableEventListener(window,"resize",Xe()(n.handleResize.bind(Be()(n)), 200)),
                n
            }
            return z()(t, e),
            O()(t, [{
                key: "init",
                value: function(e) {
                    this.imageElements = e,
                    this.draw()
                }
            }, {
                key: "playTo",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.images.length - 1
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    return this.stop(),
                    new Promise(function(i) {
                        var r = Math.abs(t - e.currentFrame) / 30
                          , s = null !== n ? Math.min(n, r) : r;
                        W.TweenLite.to(e, s, {
                            currentFrame: t,
                            ease: W.Linear.easeNone,
                            roundProps: "currentFrame",
                            onUpdate: e.draw.bind(e),
                            onComplete: function() {
                                return i()
                            }
                        })
                    }
                    )
                }
            }, {
                key: "loop",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.images.length;
                    this.renderFrame = t,
                    this.playTo(n).then(function() {
                        return e.loop(t, n)
                    })
                }
            }, {
                key: "stop",
                value: function() {
                    W.TweenLite.killTweensOf(this)
                }
            }, {
                key: "forceUpdate",
                value: function() {
                    this.lastDrawnFrame = -1,
                    this.draw()
                }
            }, {
                key: "createCanvas",
                value: function() {
                    this.canvas = document.createElement("canvas"),
                    this.context = this.canvas.getContext("2d"),
                    this.handleResize(),
                    this.parentElement.appendChild(this.canvas)
                }
            }, {
                key: "handleResize",
                value: function() {
                    if (this.canvas) {
                        var e = this.parentElement
                          , n = e.offsetWidth
                          , i = e.offsetHeight;
                        this.canvas.width = n * t.PIXELRATIO,
                        this.canvas.height = i * t.PIXELRATIO
                    }
                    this.lastDrawnFrame = -1,
                    this.draw()
                }
            }, {
                key: "clear",
                value: function() {
                    var e = this.canvas
                      , t = e.width
                      , n = e.height;
                    this.context.clearRect(0, 0, t, n)
                }
            }, {
                key: "draw",
                value: function() {
                    if (this.currentFrame !== this.lastDrawnFrame && this.images[this.currentFrame]) {
                        var e = this.canvas
                          , n = e.width
                          , i = e.height
                          , r = this.parentElement
                          , s = r.offsetWidth
                          , a = r.offsetHeight
                          , o = Ue()([0, 0, this.images[0].width, this.images[0].height], [0, 0, s * t.PIXELRATIO, a * t.PIXELRATIO], this.sizeOption)
                          , l = Ne()(o, 4)
                          , h = l[0]
                          , u = l[1]
                          , c = l[2]
                          , v = l[3];
                        this.context && (this.hasAlpha && this.context.clearRect(0, 0, n, i),
                        this.context.drawImage(this.images[this.currentFrame], h, u, c, v)),
                        this.lastDrawnFrame = this.currentFrame
                    }
                }
            }, {
                key: "size",
                set: function(e) {
                    this.sizeOption = e,
                    this.clear(),
                    this.draw()
                }
            }, {
                key: "canvasElement",
                get: function() {
                    return this.canvas
                }
            }, {
                key: "imageElements",
                set: function(e) {
                    this.images = e
                }
            }, {
                key: "renderFrame",
                set: function(e) {
                    W.TweenLite.killTweensOf(this),
                    this.currentFrame = e,
                    this.draw()
                }
            }]),
            t
        }(Ge.a);
        We.PIXELRATIO = window.devicePixelRatio;
        var je, Ye = n(159), qe = n.n(Ye), Ke = n(32), Ze = n.n(Ke);
        !function(e) {
            e[e.SEQUENCE = 0] = "SEQUENCE",
            e[e.IMAGE = 1] = "IMAGE"
        }(je || (je = {}));
        var Je = je
          , Qe = function(e, t) {
            return e.reduce(function(e, n) {
                switch (n.type) {
                default:
                case Je.IMAGE:
                    e.push(nt(n.source, t));
                    break;
                case Je.SEQUENCE:
                    e.push.apply(e, qe()(et(n, t)))
                }
                return e
            }, [])
        }
          , et = function(e, t) {
            return tt(Array(e.total).fill(0).map(function(t) {
                return e.source
            }), t, e.padLeft)
        }
          , tt = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
            return e.map(function(e, i) {
                return nt(e, t).replace("{frame}", n ? (i + 1).toString().padStart(n, "0") : "")
            })
        }
          , nt = function(e, t) {
            return e.replace("{$versionRoot}", t).replace(/{ext}/g, Ze.a.safari || Ze.a.msie || Ze.a.ios && Ze.a.chrome ? "png" : "webp")
        }
          , it = {
            name: "AboutContentSection",
            extends: I.AbstractTransitionComponent,
            props: {
                background: l.a.string,
                sequence: l.a.shape({
                    type: l.a.number,
                    source: l.a.string,
                    total: l.a.number,
                    padLeft: l.a.number
                }),
                content: l.a.arrayOf(l.a.string),
                inverted: l.a.bool.def(!1)
            },
            computed: S()({}, Object(C.d)({
                deviceState: function(e) {
                    return e.app.deviceState
                }
            })),
            mounted: function() {
                var e = Ce()(we.a.mark(function e() {
                    return we.a.wrap(function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return this.currentFrame = 0,
                                this.inverted && this.$el.setAttribute("data-invert-navigation", "true"),
                                this.$scroll.addEventListener(re.types.UPDATE, this.handleScroll),
                                e.next = 5,
                                Ve(et(this.sequence, this.$versionRoot));
                            case 5:
                                this.images = e.sent,
                                this.renderer = new We(this.$refs.background,!0),
                                this.renderer.size = "contain",
                                this.renderer.imageElements = this.images,
                                this.renderer.renderFrame = this.currentFrame;
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }, e, this)
                }));
                return function() {
                    return e.apply(this, arguments)
                }
            }(),
            methods: {
                handleAllComponentsReady: function() {
                    this.transitionController = new Ie(this),
                    this.isReady()
                },
                setFixedPosition: function(e) {
                    Object.assign(this.$refs.background.style, {
                        webkitTransform: "translateY(".concat(e - this.$el.offsetTop, "px)"),
                        transform: "translateY(".concat(e - this.$el.offsetTop, "px)")
                    })
                },
                getContentProgress: function() {
                    var e = this.$parent.getElementTop() + this.$el.offsetTop
                      , t = this.$el.offsetHeight
                      , n = window.innerHeight;
                    return 1 - Math.max(0, Math.min(1, ae(e, -t, n)))
                },
                handleScroll: function() {
                    if (this.deviceState >= Te.deviceState.MEDIUM) {
                        var e = this.getContentProgress()
                          , t = window.innerHeight
                          , n = [-.25 * t, .25 * t];
                        W.TweenMax.staggerTo(this.$refs.col, 0, {
                            cycle: {
                                y: function(t) {
                                    return -n[t] * e
                                }
                            }
                        }, 0),
                        W.TweenMax.set(this.$refs.background.children, {
                            scale: 1 - .25 * (1 - e)
                        })
                    } else
                        W.TweenMax.set(this.$refs.col, {
                            y: 0
                        });
                    this.currentFrame = Math.round(90 * (this.$parent.scrollProgress + 1) / 2),
                    this.renderer && (this.renderer.renderFrame = this.currentFrame)
                }
            }
        }
          , rt = n(226);
        var st = Object(d.a)(it, function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("article", {
                class: ["full-page", e.$style.aboutContentSection]
            }, [n("figure", {
                ref: "background",
                class: e.$style.background
            }), e._v(" "), n("section", {
                class: ["content", e.$style.content]
            }, e._l(e.content, function(t, i) {
                return n("div", {
                    key: "col-" + i,
                    ref: "col",
                    refInFor: !0,
                    class: ["rich-content", e.$style.col],
                    domProps: {
                        innerHTML: e._s(t)
                    }
                })
            }), 0)])
        }, [], !1, function(e) {
            this.$style = rt.default.locals || rt.default
        }, null, null).exports
          , at = {
            FIST_SEQUENCE: {
                type: Je.SEQUENCE,
                source: "{$versionRoot}sequence/comp_html/{ext}/comp_html-{frame}.{ext}",
                total: 1,
                padLeft: 4
            },
            LIBRARY_SEQUENCE: {
                type: Je.SEQUENCE,
                source: "{$versionRoot}sequence/comp_css/{ext}/comp_css-{frame}.{ext}",
                total: 1,
                padLeft: 4
            }
        }
          , ot = {
            name: "AboutBlock",
            components: {
                AboutContentSection: st
            },
            extends: I.AbstractTransitionComponent,
            mixins: [fe],
            data: function() {
                return {
                    assets: at
                }
            },
            mounted: function() {
                this.$scroll.addEventListener(re.types.UPDATE, this.handleScroll)
            },
            methods: {
                handleAllComponentsReady: function() {
                    this.transitionController = new be(this),
                    this.isReady()
                },
                handleScroll: function() {
                    var e = this.getElementTop();
                    this.$refs.intro.setFixedPosition(-1 * e),
                    this.$refs.continue.setFixedPosition(-1 * e)
                }
            }
        }
          , lt = n(227);
        var ht = Object(d.a)(ot, function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("article", {
                class: [e.$style.aboutBlock]
            }, [n("AboutContentSection", {
                ref: "intro",
                attrs: {
                    content: e.content.intro,
                    background: e.$versionRoot + "image/about-1-background.png",
                    sequence: e.assets.FIST_SEQUENCE,
                    "data-inside": "true"
                }
            }), e._v(" "), n("AboutContentSection", {
                ref: "continue",
                attrs: {
                    content: e.content.continue,
                    background: e.$versionRoot + "image/about-2-background.png",
                    sequence: e.assets.LIBRARY_SEQUENCE,
                    inverted: !0,
                    "data-inside": "true"
                }
            })], 1)
        }, [], !1, function(e) {
            this.$style = lt.default.locals || lt.default
        }, null, null).exports
          , ut = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            O()(t, [{
                key: "setScrollProgress",
                value: function(e) {
                    W.TweenMax.set(this.parentController.$refs.background, {
                        yPercent: 25 * e
                    })
                }
            }, {
                key: "setupTransitionInTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupTransitionOutTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupLoopingAnimationTimeline",
                value: function(e, t, n) {}
            }]),
            t
        }(I.AbstractTransitionController);
        function ct(e) {
            window.dataLayer && window.dataLayer.push(e)
        }
        function vt(e) {
            ct({
                event: "pageMetaData",
                page_path: e.path,
                page_title: e.name,
                page_campaign: "",
                user_id: ""
            })
        }
        function dt(e) {
            ct({
                event: "buttonClick",
                event_category: "buttonClick",
                component_id: e,
                navigation_url: window.location.href
            })
        }
        var ft = {
            name: "EnterLibraryBlock",
            components: {
                PrimaryButton: Ee
            },
            extends: I.AbstractTransitionComponent,
            mixins: [fe],
            computed: S()({}, Object(C.d)({
                isWebglVisible: function(e) {
                    return e.app.webglVisible
                },
                deviceState: function(e) {
                    return e.app.deviceState
                }
            }), {
                canPlayVideo: function() {
                    return !this.isWebglVisible && this.isInView
                },
                videoSource: function() {
                    return "".concat(this.$versionRoot, "video/enter-loop-").concat(this.deviceState < Te.deviceState.MEDIUM ? "small" : "large", ".mp4")
                }
            }),
            watch: {
                canPlayVideo: function() {
                    this.canPlayVideo ? this.$refs.video.play() : this.$refs.video.pause()
                },
                scrollProgress: function(e) {
                    this.transitionController && this.transitionController.setScrollProgress(2 * e - 1)
                }
            },
            methods: S()({}, Object(C.c)({
                setWebglVisiblity: ve
            }), {
                handleAllComponentsReady: function() {
                    this.transitionController = new ut(this),
                    this.isReady()
                },
                onEnterClick: function() {
                    this.setWebglVisiblity(!0),
                    dt("start_webgl")
                }
            })
        }
          , _t = n(228);
        var pt = Object(d.a)(ft, function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                class: [e.$style.enterLibraryBlock]
            }, [n("figure", {
                ref: "background",
                class: e.$style.background
            }, [n("video", {
                ref: "video",
                attrs: {
                    src: e.videoSource,
                    loop: "",
                    muted: "",
                    playsinline: ""
                },
                domProps: {
                    muted: !0
                }
            })]), e._v(" "), n("PrimaryButton", {
                attrs: {
                    icon: "arrow-down"
                },
                nativeOn: {
                    click: function(t) {
                        return t.preventDefault(),
                        e.onEnterClick(t)
                    }
                }
            }, [e._v("\n    " + e._s(e.translate("cta")) + "\n  ")])], 1)
        }, [], !1, function(e) {
            this.$style = _t.default.locals || _t.default
        }, null, null).exports
          , mt = n(160)
          , gt = n.n(mt)
          , yt = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            O()(t, [{
                key: "setupTransitionInTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupTransitionOutTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupLoopingAnimationTimeline",
                value: function(e, t, n) {}
            }]),
            t
        }(I.AbstractTransitionController)
          , Et = {
            name: "PeopleBlock",
            components: {
                PrimaryButton: Ee
            },
            extends: I.AbstractTransitionComponent,
            mixins: [fe],
            watch: {
                isInView: function() {}
            },
            mounted: function() {
                this.currentVelocity = 0,
                this.targetVelocity = 0,
                this.$scroll.addEventListener(re.types.UPDATE, this.handleScroll),
                this.tick()
            },
            methods: {
                handleAllComponentsReady: function() {
                    this.transitionController = new yt(this),
                    this.isReady()
                },
                tick: function() {
                    this.isInView && (this.currentVelocity = gt()(this.currentVelocity, this.targetVelocity, .15),
                    W.TweenLite.set(this.$refs.content, {
                        y: 2 * this.currentVelocity
                    })),
                    requestAnimationFrame(this.tick)
                },
                handleScroll: function() {
                    if (this.isInView) {
                        var e = this.$scroll.velocity;
                        this.targetVelocity = e
                    }
                },
                onReadMoreClick: function(e) {
                    this.$router.push({
                        name: this.RouteNames.JOURNALIST,
                        params: X()({}, this.Params.SLUG, e)
                    })
                }
            }
        }
          , Tt = n(229);
        var Rt = Object(d.a)(Et, function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                class: [e.$style.peopleBlock]
            }, [n("div", {
                class: ["content"]
            }, [n("ol", {
                class: e.$style.list
            }, e._l(e.content.entries, function(t, i) {
                return n("li", {
                    key: "story-" + i,
                    ref: "item",
                    refInFor: !0,
                    class: e.$style.item
                }, [n("figure", {
                    ref: "image",
                    refInFor: !0,
                    class: e.$style.image
                }, [n("img", {
                    attrs: {
                        src: e.$versionRoot + "image/people/" + t.id + "/cover.jpg",
                        alt: t.name
                    }
                }), e._v(" "), n("PrimaryButton", {
                    class: e.$style.readMore,
                    attrs: {
                        small: !0
                    },
                    nativeOn: {
                        click: function(n) {
                            return n.preventDefault(),
                            e.onReadMoreClick(t.id)
                        }
                    }
                }, [e._v("\n            " + e._s(e.$t("general.readMore")) + "\n          ")])], 1), e._v(" "), n("div", {
                    ref: "content",
                    refInFor: !0,
                    class: e.$style.content
                }, [n("h3", {
                    class: ["font-pixel", e.$style.role]
                }, [e._v("\n            " + e._s(t.role) + "\n          ")]), e._v(" "), n("h2", {
                    class: ["copy-01", e.$style.name]
                }, [e._v("\n            " + e._s(t.name) + "\n          ")])])])
            }), 0)])])
        }, [], !1, function(e) {
            this.$style = Tt.default.locals || Tt.default
        }, null, null).exports
          , At = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            O()(t, [{
                key: "setupTransitionInTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupTransitionOutTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupLoopingAnimationTimeline",
                value: function(e, t, n) {}
            }]),
            t
        }(I.AbstractTransitionController)
          , xt = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            O()(t, [{
                key: "setupTransitionInTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupTransitionOutTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupLoopingAnimationTimeline",
                value: function(e, t, n) {}
            }]),
            t
        }(I.AbstractTransitionController)
          , kt = {
            FACEBOOK: "facebook",
            INSTAGRAM: "instagram"
        }
          , bt = {
            name: "ShareList",
            extends: I.AbstractTransitionComponent,
            props: {
                horizontal: l.a.bool.def(!1)
            },
            data: function() {
                return {
                    SHARE_OPTIONS: kt
                }
            },
            methods: {
                handleAllComponentsReady: function() {
                    this.transitionController = new xt(this),
                    this.isReady()
                },
                onShareClick: function(e) {
                    switch (e) {
                    case kt.FACEBOOK:
                        window.open("<insert fb link here>")
                        break;
                    case kt.INSTAGRAM:
                        window.open("https://www.instagram.com/the.301.redirect/")
                    }
                    dt("share_".concat(e))
                },
                openPopup: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                    window.open(e.replace("{url}", t).replace("{text}", n), "sharer", "toolbar=0,status=0,resizable=1,width=626,height=436")
                }
            }
        }
          , Mt = n(230);
        var wt = Object(d.a)(bt, function() {
            var e, t = this, n = t.$createElement, i = t._self._c || n;
            return i("ul", {
                class: [t.$style.shareList, (e = {},
                e[t.$style.isHorizontal] = t.horizontal,
                e)]
            }, t._l(Object.keys(t.SHARE_OPTIONS), function(e, n) {
                return i("li", {
                    key: "share-" + n
                }, [i("button", {
                    class: t.$style.shareButton,
                    on: {
                        click: function(n) {
                            return t.onShareClick(t.SHARE_OPTIONS[e])
                        }
                    }
                }, [i("Icon", {
                    attrs: {
                        name: "share-" + t.SHARE_OPTIONS[e]
                    }
                })], 1)])
            }), 0)
        }, [], !1, function(e) {
            this.$style = Mt.default.locals || Mt.default
        }, null, null).exports
          , St = {
            name: "LinkOutBlock",
            components: {
                PrimaryButton: Ee,
                ShareList: wt
            },
            extends: I.AbstractTransitionComponent,
            mixins: [fe],
            computed: {
                isDownloadSection: function() {
                    return "downloads" === this.data.translationPrefix
                }
            },
            methods: {
                handleAllComponentsReady: function() {
                    this.transitionController = new At(this),
                    this.isReady()
                },
                onButtonClick: function(e) {
                    var t, n, i = e.cta.href;
                    if (i = i.replace("{root}", this.$staticRoot),
                    this.isDownloadSection) {
                        var r = i.split(".");
                        ct({
                            event: "download",
                            event_category: "download",
                            download_type: r[r.length - 1],
                            download_filename: i
                        })
                    } else
                        t = i,
                        n = this.data.translationPrefix,
                        ct({
                            event: "linkClick",
                            event_category: "link",
                            event_action: t,
                            event_label: window.location.href,
                            component_id: n
                        });
                    window.open(i)
                }
            }
        }
          , Ct = n(231);
        var It = Object(d.a)(St, function() {
            var e, t = this, n = t.$createElement, i = t._self._c || n;
            return i("div", {
                class: [t.$style.linkOutBlock, (e = {},
                e[t.$style.isDownloads] = t.isDownloadSection,
                e)]
            }, [i("div", {
                class: ["content", t.$style.content]
            }, [i("ol", {
                class: [t.$style.list, t.$style["items-" + t.content.entries.length]]
            }, t._l(t.content.entries, function(e, n) {
                return i("li", {
                    key: "entry-" + n,
                    class: ["copy-02", t.$style.item]
                }, [i("Icon", {
                    class: t.$style.icon,
                    attrs: {
                        name: e.icon
                    }
                }), t._v(" "), i("h3", {
                    class: ["heading-02", t.$style.title]
                }, [t._v("\n          " + t._s(e.title) + "\n        ")]), t._v(" "), i("p", {
                    class: t.$style.text
                }, [t._v("\n          " + t._s(e.text) + "\n        ")]), t._v(" "), "share-cloud" !== e.icon ? i("PrimaryButton", {
                    attrs: {
                        small: !0
                    },
                    nativeOn: {
                        click: function(n) {
                            return n.preventDefault(),
                            t.onButtonClick(e)
                        }
                    }
                }, [t._v("\n          " + t._s(e.cta.label) + "\n        ")]) : i("ShareList", {
                    attrs: {
                        horizontal: !0
                    }
                })], 1)
            }), 0)])])
        }, [], !1, function(e) {
            this.$style = Ct.default.locals || Ct.default
        }, null, null).exports
          , Pt = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            O()(t, [{
                key: "setupTransitionInTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupTransitionOutTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupLoopingAnimationTimeline",
                value: function(e, t, n) {}
            }]),
            t
        }(I.AbstractTransitionController)
          , Lt = {
            name: "TestimonialsBlock",
            components: {
                PrimaryButton: Ee
            },
            extends: I.AbstractTransitionComponent,
            mixins: [fe],
            data: function() {
                return {
                    videoSlug: Re.MAKING_OF.slug
                }
            },
            computed: S()({}, Object(C.d)({
                deviceState: function(e) {
                    return e.app.deviceState
                }
            }), {
                imageSource: function() {
                    return "".concat(this.$versionRoot, "image/making-of.jpg")
                },
                videoSuffix: function() {
                    return this.deviceState >= Te.deviceState.MEDIUM ? "large" : "small"
                }
            }),
            watch: {
                isInView: function(e) {}
            },
            beforeDestroy: function() {
                this.disposables.dispose()
            },
            methods: {
                handleAllComponentsReady: function() {
                    this.transitionController = new Pt(this),
                    this.isReady()
                },
                onPlayClick: function() {
                    this.$router.push({
                        name: this.RouteNames.VIDEO,
                        params: X()({}, this.Params.SLUG, this.videoSlug)
                    })
                }
            }
        }
          , Vt = n(232);
        var Ot = Object(d.a)(Lt, function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("article", {
                class: [e.$style.testimonialsBlock]
            }, [n("div", {
                class: ["content", e.$style.content]
            }, [n("figure", {
                class: e.$style.imageWrapper
            }, [n("div", {
                ref: "image",
                class: e.$style.image,
                style: "background-image: url('" + e.imageSource + "');"
            })]), e._v(" "), n("div", {
                class: ["rich-content", e.$style.column]
            }, [n("div", {
                class: e.$style.text,
                domProps: {
                    innerHTML: e._s(e.content.text)
                }
            }), e._v(" "), n("PrimaryButton", {
                attrs: {
                    icon: "play-small"
                },
                nativeOn: {
                    click: function(t) {
                        return t.preventDefault(),
                        e.onPlayClick(t)
                    }
                }
            }, [e._v("\n        " + e._s(e.translate("cta")) + "\n      ")])], 1)])])
        }, [], !1, function(e) {
            this.$style = Vt.default.locals || Vt.default
        }, null, null).exports
          , Nt = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            O()(t, [{
                key: "setupTransitionInTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupTransitionOutTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupLoopingAnimationTimeline",
                value: function(e, t, n) {}
            }]),
            t
        }(I.AbstractTransitionController)
          , Ft = {
            name: "FloorplanBlock",
            components: {
                PrimaryButton: Ee
            },
            extends: I.AbstractTransitionComponent,
            mixins: [fe],
            methods: {
                handleAllComponentsReady: function() {
                    this.transitionController = new Nt(this),
                    this.isReady()
                }
            }
        }
          , Bt = n(233);
        var Dt = Object(d.a)(Ft, function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                class: e.$style.floorplanBlock
            }, [n("div", {
                class: ["content", e.$style.content]
            }, [n("figure", {
                class: e.$style.image
            }, [n("img", {
                attrs: {
                    src: e.$versionRoot + "image/floorplan.png",
                    alt: e.content.pageTitle
                }
            })]), e._v(" "), n("ol", {
                class: e.$style.list
            }, e._l(e.content.entry, function(t, i) {
                return n("li", {
                    key: "entry-" + i
                }, [n("span", {
                    class: e.$style.number
                }, [e._v(e._s((i + 1).toString()))]), e._v(" "), n("p", {
                    domProps: {
                        innerHTML: e._s(t)
                    }
                })])
            }), 0)])])
        }, [], !1, function(e) {
            this.$style = Bt.default.locals || Bt.default
        }, null, null).exports
          , Ut = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            O()(t, [{
                key: "setupTransitionInTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupTransitionOutTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupLoopingAnimationTimeline",
                value: function(e, t, n) {}
            }]),
            t
        }(I.AbstractTransitionController)
          , zt = {
            name: "ContactBlock",
            extends: I.AbstractTransitionComponent,
            mixins: [fe],
            methods: {
                handleAllComponentsReady: function() {
                    this.transitionController = new Ut(this),
                    this.isReady()
                },
                onLegalClick: function(e) {
                    var t = e.split("/")
                      , n = Ne()(t, 3)
                      , i = n[1]
                      , r = n[2];
                    this.$router.push({
                        name: i,
                        params: X()({}, this.Params.SLUG, r)
                    })
                }
            }
        }
          , Ht = n(234);
        var Gt, $t = Object(d.a)(zt, function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                class: [e.$style.contactBlock]
            }, [n("div", {
                class: e.$style.content
            }, [n("div", {
                class: [e.$style.col, e.$style.contact]
            }, [n("h2", [e._v(e._s(e.content.title))]), e._v(" "), n("p", {
                staticClass: "copy-03",
                domProps: {
                    innerHTML: e._s(e.content.address)
                }
            })]), e._v(" "), n("p", {
                class: ["copy-03", e.$style.col, e.$style.relations],
                domProps: {
                    innerHTML: e._s(e.content.pressRelations)
                }
            }), e._v(" "), n("div", {
                class: [e.$style.col, e.$style.metaData]
            }, [n("ul", {
                class: ["copy-03", e.$style.links]
            }, e._l(e.content.links, function(t, i) {
                return n("li", {
                    key: "link-" + i
                }, [n("a", {
                    attrs: {
                        href: t.href
                    },
                    on: {
                        click: function(n) {
                            return n.preventDefault(),
                            e.onLegalClick(t.href)
                        }
                    }
                }, [e._v(e._s(t.label))])])
            }), 0), e._v(" "), n("p", {
                staticClass: "copy-03"
            }, [e._v("\n        " + e._s(e.content.copyright) + "\n      ")]), e._v(" "), n("Icon", {
                attrs: {
                    name: "rsf-logo"
                }
            })], 1)])])
        }, [], !1, function(e) {
            this.$style = Ht.default.locals || Ht.default
        }, null, null).exports;
        !function(e) {
            e.MENU_CLICK = "menuClick",
            e.PAGE_CHANGE = "pageChange",
            e.PAGE_TRANSITION_COMPLETE = "pageTransitionComplete"
        }(Gt || (Gt = {}));
        var Xt = new r.a
          , Wt = {
            name: "HomePage",
            components: {
                HeroBlock: ke,
                AboutBlock: ht,
                EnterLibraryBlock: pt,
                PeopleBlock: Rt,
                LinkOutBlock: It,
                TestimonialsBlock: Ot,
                FloorplanBlock: Dt,
                ContactBlock: $t
            },
            extends: I.AbstractPageTransitionComponent,
            data: function() {
                return {
                    blocks: G
                }
            },
            computed: S()({}, Object(C.d)({
                currentScrollSection: function(e) {
                    return e.app.currentScrollSection
                }
            }), Object(C.b)(["currentLanguage"])),
            watch: {
                $route: function() {
                    this.$scroll.lockScroll(this.$route.name !== this.RouteNames.HOME)
                },
                currentLanguage: function() {
                    var e = this
                      , t = this.currentScrollSection;
                    this.$nextTick(function() {
                        e.$scroll.scrollTo(0, e.$refs.block[t].$el.offsetTop, 0)
                    })
                }
            },
            mounted: function() {
                this.$eventBus.$on(Gt.MENU_CLICK, this.onMenuItemClick)
            },
            beforeDestroy: function() {
                this.scrollListener.dispose(),
                this.$eventBus.$off(Gt.MENU_CLICK, this.onMenuItemClick)
            },
            methods: {
                handleAllComponentsReady: function() {
                    this.$scroll.init(this.$refs.scroll, {
                        damping: .1
                    }),
                    this.transitionController = new H(this),
                    this.isReady()
                },
                onMenuItemClick: function(e) {
                    this.$scroll.scrollTo(0, this.$refs.block[e].$el.offsetTop)
                },
                onLeave: function(e, t) {
                    I.FlowManager.transitionOut.then(function() {
                        return I.FlowManager.done()
                    }).then(t)
                }
            }
        }
          , jt = n(235);
        var Yt = Object(d.a)(Wt, function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                class: [e.$style.homePage]
            }, [n("div", {
                ref: "scroll",
                class: e.$style.scroll
            }, e._l(e.blocks, function(t, i) {
                return n(t.component, {
                    key: "block-" + i,
                    ref: "block",
                    refInFor: !0,
                    tag: "component",
                    attrs: {
                        data: t,
                        index: i,
                        inverted: t.inverted
                    },
                    on: {
                        startWebgl: function(t) {
                            return e.$emit("startWebgl")
                        }
                    }
                })
            }), 1), e._v(" "), n("transition", {
                on: {
                    leave: e.onLeave
                }
            }, [n("router-view")], 1)], 1)
        }, [], !1, function(e) {
            this.$style = jt.default.locals || jt.default
        }, null, null).exports
          , qt = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            O()(t, [{
                key: "setupTransitionInTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupTransitionOutTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupLoopingAnimationTimeline",
                value: function(e, t, n) {}
            }]),
            t
        }(I.AbstractTransitionController)
          , Kt = {
            name: "WebglPage",
            extends: I.AbstractPageTransitionComponent,
            methods: {
                handleAllComponentsReady: function() {
                    this.transitionController = new qt(this),
                    this.isReady()
                }
            }
        }
          , Zt = n(236);
        var Jt = Object(d.a)(Kt, function() {
            var e = this.$createElement;
            return (this._self._c || e)("div", {
                class: [this.$style.webglPage]
            })
        }, [], !1, function(e) {
            this.$style = Zt.default.locals || Zt.default
        }, null, null).exports
          , Qt = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            O()(t, [{
                key: "setupTransitionInTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupTransitionOutTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupLoopingAnimationTimeline",
                value: function(e, t, n) {}
            }]),
            t
        }(I.AbstractTransitionController)
          , en = n(80)
          , tn = n.n(en)
          , nn = function() {
            function e(t, n) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .75
                  , r = arguments.length > 3 ? arguments[3] : void 0;
                L()(this, e),
                this.currentOpacity = 0,
                this.light = t,
                this.opacity = t ? i : .05,
                this.x = n,
                this.animationCompleteCallback = r,
                this.start()
            }
            return O()(e, [{
                key: "getColor",
                value: function() {
                    var e = this.light ? 255 : 0;
                    return "rgba(".concat(e, ", ").concat(e, ", ").concat(e, ", ").concat(this.currentOpacity, ")")
                }
            }, {
                key: "start",
                value: function() {
                    var e = this;
                    this.timeline = new W.TimelineLite({
                        onComplete: function() {
                            return e.animationCompleteCallback(e)
                        }
                    }),
                    this.timeline.to(this, tn()(.3, 1.2), {
                        currentOpacity: this.opacity,
                        ease: W.Power2.easeInOut
                    }, tn()(0, 2)),
                    this.timeline.to(this, tn()(2, 4), {
                        currentOpacity: 0,
                        ease: W.Power2.easeInOut
                    })
                }
            }, {
                key: "dispose",
                value: function() {
                    this.timeline && (this.timeline.kill(),
                    this.timeline = null),
                    W.TweenLite.killTweensOf(this)
                }
            }, {
                key: "paused",
                set: function(e) {
                    this.timeline && (e ? this.timeline.pause() : this.timeline.play())
                }
            }]),
            e
        }()
          , rn = function() {
            function e(t, n, i, r, s) {
                L()(this, e),
                this.currentY = 0,
                this.cells = [],
                this.currentColumns = [],
                this.maxLightOpacity = s,
                this.startY = t,
                this.totalColumns = Math.ceil(i / sn.GRID_BLOCK_SIZE),
                this.currentColumns = Array(this.totalColumns).fill(null).map(function(e, t) {
                    return {
                        index: t,
                        filled: !1
                    }
                }),
                Array(e.MAX_PER_ROW).fill(0).forEach(this.addNewCell.bind(this)),
                this.update(n, r)
            }
            return O()(e, [{
                key: "update",
                value: function(e, t) {
                    return this.currentY = e + this.startY,
                    this.currentY > -sn.GRID_BLOCK_SIZE && this.currentY < t
                }
            }, {
                key: "addNewCell",
                value: function() {
                    var e = this.getRandomCell();
                    null !== e && (this.cells.push(new nn(Math.random() > .45,e,this.maxLightOpacity,this.onCellAnimationComplete.bind(this, e))),
                    this.currentColumns[e].filled = !0)
                }
            }, {
                key: "getRandomCell",
                value: function() {
                    var e = this.currentColumns.filter(function(e) {
                        return !e.filled
                    });
                    return e[tn()(0, e.length - 1)] ? e[tn()(0, e.length - 1)].index : null
                }
            }, {
                key: "onCellAnimationComplete",
                value: function(e, t) {
                    var n = this.cells.findIndex(function(e) {
                        return e === t
                    });
                    this.cells[n].dispose(),
                    this.cells.splice(n, 1),
                    this.currentColumns[e].filled = !1,
                    this.addNewCell()
                }
            }, {
                key: "dispose",
                value: function() {
                    this.cells.forEach(function(e) {
                        return e.dispose()
                    })
                }
            }, {
                key: "paused",
                set: function(e) {
                    this.cells.forEach(function(t) {
                        return t.paused = e
                    })
                }
            }]),
            e
        }();
        rn.MAX_PER_ROW = 4;
        var sn = function(e) {
            function t(e) {
                var n;
                return L()(this, t),
                (n = F()(this, D()(t).call(this))).width = 0,
                n.height = 0,
                n.rowStart = 0,
                n.rows = [],
                n.maxLightOpacity = e,
                n
            }
            return z()(t, e),
            O()(t, [{
                key: "updateSize",
                value: function(e, n, i) {
                    var r = this;
                    this.scrollY = i,
                    this.width = e,
                    this.height = n,
                    this.rows.forEach(function(e) {
                        return e.dispose()
                    });
                    var s = Math.ceil(this.height / t.GRID_BLOCK_SIZE) + 1;
                    this.rows = Array(s).fill(0).map(function(e, n) {
                        return r.addRow((n - 1) * t.GRID_BLOCK_SIZE)
                    })
                }
            }, {
                key: "update",
                value: function(e, t) {
                    var n = this;
                    return this.scrollY = e,
                    this.rows.forEach(function(e, t) {
                        e.update(n.rowStart, n.height) || (n.rows[t].dispose(),
                        n.rows.splice(t, 1))
                    }),
                    this.findNewRowsAbove(),
                    this.findNewRowsBelow(),
                    {
                        rows: this.rows,
                        mask: t ? this.getMask(e) : null
                    }
                }
            }, {
                key: "findNewRowsAbove",
                value: function() {
                    var e = Math.min.apply(Math, qe()(this.rows.map(function(e) {
                        return e.currentY
                    })));
                    if (e > 0 && this.rows.length > 0) {
                        var n = this.rows.find(function(t) {
                            return t.currentY === e
                        })
                          , i = Math.ceil(e / t.GRID_BLOCK_SIZE);
                        this.addRows(n.startY - t.GRID_BLOCK_SIZE * i, i)
                    }
                }
            }, {
                key: "findNewRowsBelow",
                value: function() {
                    var e = this.rows.reduce(function(e, n) {
                        return n.currentY + t.GRID_BLOCK_SIZE > e.y && (e.row = n,
                        e.y = n.currentY + t.GRID_BLOCK_SIZE),
                        e
                    }, {
                        y: 0,
                        row: null
                    });
                    e.row && e.y < this.height && this.addRows(e.row.startY + t.GRID_BLOCK_SIZE, Math.ceil((this.height - e.y) / t.GRID_BLOCK_SIZE))
                }
            }, {
                key: "addRows",
                value: function(e, n) {
                    var i = this;
                    this.rows = this.rows.concat(Array(n).fill(0).map(function(n, r) {
                        return i.addRow(e + r * t.GRID_BLOCK_SIZE)
                    }))
                }
            }, {
                key: "addRow",
                value: function(e) {
                    return new rn(e,this.rowStart,this.width,this.height,this.maxLightOpacity)
                }
            }, {
                key: "getMask",
                value: function(e) {
                    var n = this;
                    return Array.from(document.querySelectorAll("[".concat(t.INVERTED_NAVIGATION_ATTRIBUTE, "]"))).reduce(function(t, i) {
                        var r = n.getInViewProperties(i, e)
                          , s = r.inView
                          , a = r.top
                          , o = r.bottom;
                        return s && (t.top = Math.min(t.top, Math.max(0, a)),
                        t.bottom = Math.min(innerHeight, o)),
                        t
                    }, {
                        top: innerHeight,
                        bottom: innerHeight
                    })
                }
            }, {
                key: "getInViewProperties",
                value: function(e, t) {
                    var n = window.innerHeight
                      , i = e.offsetTop
                      , r = e.offsetHeight
                      , s = i - t;
                    e.getAttribute("data-inside") && (s += e.parentNode.offsetTop);
                    var a = s + r;
                    return {
                        top: s,
                        bottom: a,
                        inView: s < n && a > 0
                    }
                }
            }, {
                key: "paused",
                set: function(e) {
                    this.rows.forEach(function(t) {
                        return t.paused = e
                    })
                }
            }, {
                key: "scrollY",
                set: function(e) {
                    this.rowStart = -e * t.SCROLL_DIVIDER
                }
            }]),
            t
        }(Ge.a);
        sn.GRID_BLOCK_SIZE = 40,
        sn.SCROLL_DIVIDER = .25,
        sn.INVERTED_NAVIGATION_ATTRIBUTE = "data-invert-navigation";
        var an = function(e) {
            function t(e, n, i) {
                var r;
                return L()(this, t),
                (r = F()(this, D()(t).call(this))).canvas = null,
                r.context = null,
                r.smoothScroll = void 0,
                r.options = {
                    color: t.COLOR,
                    maxLightOpacity: .75,
                    hasMask: !0
                },
                r.isPaused = !1,
                r.parentElement = e,
                r.smoothScroll = n,
                r.options = Object.assign(r.options, i),
                r.container = new sn(r.options.maxLightOpacity),
                r.createCanvas(),
                window.addEventListener("resize", Xe()(r.handleResize.bind(Be()(r)), 150)),
                setImmediate(r.handleResize.bind(Be()(r))),
                r
            }
            return z()(t, e),
            O()(t, [{
                key: "handleResize",
                value: function() {
                    this.updateSize(),
                    this.handleUpdate()
                }
            }, {
                key: "createCanvas",
                value: function() {
                    this.canvas = document.createElement("canvas"),
                    this.context = this.canvas.getContext("2d"),
                    this.parentElement.appendChild(this.canvas)
                }
            }, {
                key: "updateSize",
                value: function() {
                    var e = this.parentElement
                      , t = e.offsetWidth
                      , n = e.offsetHeight;
                    this.canvas && (this.canvas.width = t,
                    this.canvas.height = n),
                    this.container.updateSize(t, n, this.smoothScroll ? this.smoothScroll.y : 0)
                }
            }, {
                key: "handleUpdate",
                value: function() {
                    var e = this
                      , t = this.canvas
                      , n = t.width
                      , i = t.height;
                    if (requestAnimationFrame(this.handleUpdate.bind(this)),
                    this.context && !this.isPaused) {
                        this.context.globalCompositeOperation = "source-over",
                        this.context.fillStyle = this.options.color,
                        this.context.fillRect(0, 0, n, i);
                        var r = this.container.update(this.smoothScroll ? this.smoothScroll.y : 0, this.options.hasMask)
                          , s = r.mask;
                        r.rows.forEach(function(t) {
                            t.cells.forEach(function(n) {
                                e.context.fillStyle = n.getColor(),
                                e.context.fillRect(n.x * sn.GRID_BLOCK_SIZE, t.currentY, sn.GRID_BLOCK_SIZE, sn.GRID_BLOCK_SIZE)
                            })
                        }),
                        this.smoothScroll && null !== s && (this.context.globalCompositeOperation = "difference",
                        this.context.fillStyle = "#f6f6f6",
                        this.context.fillRect(0, s.top, n, s.bottom - s.top),
                        this.context.globalCompositeOperation = "source-over")
                    }
                }
            }, {
                key: "paused",
                set: function(e) {
                    var t = this;
                    this.container.paused = e,
                    setTimeout(function() {
                        t.isPaused = e
                    }, 0)
                }
            }, {
                key: "scroll",
                set: function(e) {
                    this.smoothScroll = e
                }
            }]),
            t
        }(Ge.a);
        an.COLOR = "#ececec";
        var on = {
            name: "PersonPage",
            extends: I.AbstractPageTransitionComponent,
            computed: S()({
                blockTranslations: function() {
                    return this.$store.getters.translation.people
                },
                currentPersonIndex: function() {
                    var e = this;
                    return this.blockTranslations.entries.findIndex(function(t) {
                        return t.id === e.$route.params[e.Params.SLUG]
                    })
                },
                personContent: function() {
                    return this.blockTranslations.entries[this.currentPersonIndex]
                },
                previousSlug: function() {
                    var e = (this.currentPersonIndex - 1 + this.blockTranslations.entries.length) % this.blockTranslations.entries.length;
                    return this.blockTranslations.entries[e].id
                },
                nextSlug: function() {
                    var e = (this.currentPersonIndex + 1) % this.blockTranslations.entries.length;
                    return this.blockTranslations.entries[e].id
                }
            }, Object(C.b)(["currentLanguage"])),
            mounted: function() {
                this.currentVelocity = 0,
                this.targetVelocity = 0,
                this.scroll = new se,
                this.scroll.init(this.$refs.scroll),
                this.scrollListener = new ze.DisposableEventListener(this.scroll,re.types.UPDATE,this.onScrollUpdate),
                this.grid = new an(this.$refs.gridBlocks,this.scroll,{
                    color: "#131313",
                    maxLightOpacity: .025,
                    hasMask: !1
                }),
                this.$eventBus.$on(Gt.PAGE_TRANSITION_COMPLETE, this.onPageTransitionComplete),
                this.tick()
            },
            beforeDestroy: function() {
                this.scroll.dispose(),
                this.grid.dispose(),
                this.scrollListener.dispose(),
                this.$eventBus.$off(Gt.PAGE_TRANSITION_COMPLETE, this.onPageTransitionComplete),
                cancelAnimationFrame(this.tickFrame)
            },
            methods: {
                handleAllComponentsReady: function() {
                    this.transitionController = new Qt(this),
                    this.isReady()
                },
                onCloseClick: function() {
                    this.$eventBus.$emit(Gt.PAGE_CHANGE, this.RouteNames.HOME)
                },
                onPreviousClick: function() {
                    this.$router.push({
                        name: this.RouteNames.JOURNALIST,
                        params: X()({}, this.Params.SLUG, this.previousSlug)
                    })
                },
                onNextClick: function() {
                    this.$router.push({
                        name: this.RouteNames.JOURNALIST,
                        params: X()({}, this.Params.SLUG, this.nextSlug)
                    })
                },
                onPageTransitionComplete: function() {
                    Object.assign(this.$el.style, {
                        transform: "translateX(100%)"
                    })
                },
                onScrollUpdate: function() {
                    this.targetVelocity = this.scroll.velocity
                },
                tick: function() {
                    this.currentVelocity = gt()(this.currentVelocity, this.targetVelocity, .1),
                    W.TweenLite.set([this.$refs.mainImage], {
                        y: 2 * this.currentVelocity
                    }),
                    W.TweenLite.set([this.$refs.personalImage], {
                        y: this.currentVelocity
                    }),
                    W.TweenLite.set([this.$refs.bookImage], {
                        y: 3 * this.currentVelocity
                    }),
                    this.tickFrame = requestAnimationFrame(this.tick)
                }
            }
        }
          , ln = n(237);
        var hn = Object(d.a)(on, function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("article", {
                class: [e.$style.personPage]
            }, [n("div", {
                ref: "gridBlocks",
                class: e.$style.gridBlocks
            }), e._v(" "), n("div", {
                ref: "scroll",
                class: e.$style.contentWrapper
            }, [n("div", {
                class: e.$style.content
            }, [n("div", {
                class: e.$style.grid
            }, [n("div", {
                class: e.$style.col
            }, [n("header", [n("h1", {
                class: ["heading-02", e.$style.title]
            }, [e._v("\n              " + e._s(e.personContent.title) + "\n            ")])]), e._v(" "), n("div", {
                class: e.$style.freedomIndex
            }, [n("p", [e._v("\n              " + e._s(e.blockTranslations.freedomIndex) + "\n              "), n("span", {
                staticClass: "font-pixel",
                domProps: {
                    innerHTML: e._s(e.blockTranslations.rank.replace("{x}", e.personContent.rank))
                }
            })])]), e._v(" "), e.personContent.intro ? n("p", {
                class: ["rich-content small"],
                domProps: {
                    innerHTML: e._s(e.personContent.intro)
                }
            }) : e._e(), e._v(" "), n("figure", {
                ref: "mainImage",
                class: e.$style.mainImageWrapper
            }, [n("div", {
                class: e.$style.mainImage
            }, [n("img", {
                attrs: {
                    src: e.$versionRoot + "image/people/" + e.personContent.id + "/room.jpg",
                    alt: e.personContent.roomalt
                }
            })]), e._v(" "), n("figcaption", {
                class: e.$style.mainImageCaption
            }, [e._v("\n              " + e._s(e.personContent.imageCaption) + "\n            ")])])]), e._v(" "), n("div", {
                class: e.$style.col
            }, [e.personContent.continue ? n("p", {
                class: ["rich-content small"],
                domProps: {
                    innerHTML: e._s(e.personContent.continue)
                }
            }) : e._e(), e._v(" "), n("figure", {
                class: e.$style.personalImage
            }, [n("img", {
                ref: "personalImage",
                attrs: {
                    src: e.$versionRoot + "image/people/" + e.personContent.id + "/cover.png",
                    alt: e.personContent.title
                }
            }), e._v(" ")])])])])]), e._v(" "), n("nav", {
                class: e.$style.navigation
            }, [n("button", {
                class: e.$style.navigationButton,
                on: {
                    click: function(t) {
                        return t.preventDefault(),
                        e.onCloseClick(t)
                    }
                }
            }, [n("Icon", {
                attrs: {
                    name: "close"
                }
            })], 1), e._v(" "), n("button", {
                class: e.$style.navigationButton,
                on: {
                    click: function(t) {
                        return t.preventDefault(),
                        e.onPreviousClick(t)
                    }
                }
            }, [n("Icon", {
                attrs: {
                    name: "arrow-left"
                }
            })], 1), e._v(" "), n("button", {
                class: e.$style.navigationButton,
                on: {
                    click: function(t) {
                        return t.preventDefault(),
                        e.onNextClick(t)
                    }
                }
            }, [n("Icon", {
                attrs: {
                    name: "arrow-right"
                }
            })], 1)])])
        }, [], !1, function(e) {
            this.$style = ln.default.locals || ln.default
        }, null, null).exports
          , un = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            O()(t, [{
                key: "setupTransitionInTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupTransitionOutTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupLoopingAnimationTimeline",
                value: function(e, t, n) {}
            }]),
            t
        }(I.AbstractTransitionController)
          , cn = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            O()(t, [{
                key: "setupTransitionInTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupTransitionOutTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupLoopingAnimationTimeline",
                value: function(e, t, n) {}
            }]),
            t
        }(I.AbstractTransitionController)
          , vn = {
            name: "CloseButton",
            extends: I.AbstractTransitionComponent,
            methods: {
                handleAllComponentsReady: function() {
                    this.transitionController = new cn(this),
                    this.isReady()
                }
            }
        }
          , dn = n(238);
        var fn = Object(d.a)(vn, function() {
            var e = this.$createElement
              , t = this._self._c || e;
            return t("button", {
                class: [this.$style.closeButton]
            }, [t("Icon", {
                attrs: {
                    name: "close"
                }
            })], 1)
        }, [], !1, function(e) {
            this.$style = dn.default.locals || dn.default
        }, null, null).exports
          , _n = fn
          , pn = {
            name: "VideoPage",
            components: {
                CloseButton: _n
            },
            extends: I.AbstractPageTransitionComponent,
            data: function() {
                return {
                    playerVars: {
                        autoplay: 1,
                        modestbranding: 1,
                        rel: 0
                    },
                    isFirstPlay: !0,
                    isPlaying: !1,
                    isFullScreen: !1,
                    progress: 0,
                    volume: 1
                }
            },
            computed: S()({}, Object(C.b)(["currentLanguage"]), {
                currentVideo: function() {
                    var e = this;
                    return Object.values(Re).find(function(t) {
                        return t.slug === e.$route.params[e.Params.SLUG]
                    })
                },
                youtubeId: function() {
                    var e = this.currentVideo.youtubeId;
                    return "string" === typeof e ? e : e[this.currentLanguage.code]
                },
                player: function() {
                    return this.$refs.youtube.player
                }
            }),
            watch: {
                isPlaying: function(e) {
                    e && this.tick()
                },
                isFullScreen: function() {
                    this.transitionController.toggleFullscreenTimeline()
                }
            },
            mounted: function() {
                this.trackedProgress = [0],
                this.$eventBus.$on(Gt.PAGE_TRANSITION_COMPLETE, this.onPageTransitionComplete)
            },
            beforeDestroy: function() {
                this.isPlaying = !1,
                this.$eventBus.$off(Gt.PAGE_TRANSITION_COMPLETE, this.onPageTransitionComplete)
            },
            methods: {
                handleAllComponentsReady: function() {
                    this.transitionController = new un(this),
                    this.isReady()
                },
                onPageTransitionComplete: function() {
                    Object.assign(this.$el.style, {
                        transform: "translateX(100%)"
                    })
                },
                onCloseClick: function() {
                    this.pauseVideo(),
                    this.$eventBus.$emit(Gt.PAGE_CHANGE, this.RouteNames.HOME)
                },
                playVideo: function() {
                    this.player.playVideo()
                },
                pauseVideo: function() {
                    this.player.pauseVideo()
                },
                onPlayerReady: function() {
                    var e = Ce()(we.a.mark(function e() {
                        var t;
                        return we.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.player.getDuration();
                                case 2:
                                    t = e.sent,
                                    this.duration = t;
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                onVideoPlay: function() {
                    var e, t;
                    this.isFirstPlay && (this.trackedProgress = [0],
                    e = this.currentVideo.name,
                    t = this.duration,
                    ct({
                        event: "videoStart",
                        event_category: "video",
                        event_action: "start",
                        event_label: e,
                        video_length: t,
                        video_position: 0
                    }),
                    this.isFirstPlay = !1),
                    this.isPlaying = !0
                },
                onVideoPause: function() {
                    this.isPlaying = !1
                },
                onVideoEnded: function() {
                    var e, t;
                    e = this.currentVideo.name,
                    t = this.duration,
                    ct({
                        event: "videoComplete",
                        event_category: "video",
                        event_action: "complete",
                        event_label: e,
                        video_length: t
                    }),
                    this.isPlaying = !1,
                    this.isFirstPlay = !0,
                    this.onCloseClick()
                },
                tick: function() {
                    var e = Ce()(we.a.mark(function e() {
                        var t, n, i, r;
                        return we.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.isPlaying && window.requestAnimationFrame(this.tick),
                                    e.next = 3,
                                    this.player.getCurrentTime();
                                case 3:
                                    t = e.sent,
                                    n = this.duration,
                                    this.progress = t / n,
                                    4,
                                    i = Math.floor(4 * this.progress),
                                    r = this.trackedProgress[this.trackedProgress.length - 1],
                                    i > r && (this.trackedProgress.push(i),
                                    ct({
                                        event: "videoStatus",
                                        event_category: "video",
                                        event_action: "status",
                                        event_label: this.currentVideo.name,
                                        video_length: n,
                                        video_position: i / 4
                                    }));
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                togglePlay: function() {
                    this.isPlaying ? this.pauseVideo() : this.playVideo()
                }
            }
        }
          , mn = n(239);
        var gn = Object(d.a)(pn, function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                class: [e.$style.videoPage]
            }, [n("youtube", {
                ref: "youtube",
                attrs: {
                    "video-id": e.youtubeId,
                    "player-vars": e.playerVars
                },
                on: {
                    ready: e.onPlayerReady,
                    playing: e.onVideoPlay,
                    paused: e.onVideoPause,
                    ended: e.onVideoEnded
                }
            }), e._v(" "), n("CloseButton", {
                class: e.$style.closeButton,
                nativeOn: {
                    click: function(t) {
                        return t.preventDefault(),
                        e.onCloseClick(t)
                    }
                }
            })], 1)
        }, [], !1, function(e) {
            this.$style = mn.default.locals || mn.default
        }, null, null).exports
          , yn = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            O()(t, [{
                key: "setupTransitionInTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupTransitionOutTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupLoopingAnimationTimeline",
                value: function(e, t, n) {}
            }]),
            t
        }(I.AbstractTransitionController)
          , En = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            O()(t, [{
                key: "setupTransitionInTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupTransitionOutTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupLoopingAnimationTimeline",
                value: function(e, t, n) {}
            }]),
            t
        }(I.AbstractTransitionController)
          , Tn = {
            name: "ScrollingGridBlocks",
            props: {
                paused: l.a.bool.def(!1),
                color: me(l.a.string),
                lightOpacity: me(l.a.number),
                hasMask: l.a.bool.def(!0)
            },
            extends: I.AbstractTransitionComponent,
            watch: {
                paused: function() {
                    this.renderer && (this.renderer.paused = this.paused)
                }
            },
            mounted: function() {
                var e = {
                    hasMask: this.hasMask
                };
                null !== this.color && (e.color = this.color),
                null !== this.lightOpacity && (e.maxLightOpacity = this.lightOpacity),
                this.renderer = new an(this.$el,this.$scroll,e),
                this.renderer.paused = this.paused
            },
            beforeDestroy: function() {
                this.renderer && this.renderer.dispose()
            },
            methods: {
                handleAllComponentsReady: function() {
                    this.transitionController = new En(this),
                    this.isReady()
                }
            }
        } , Rn = n(240);
        var An = Object(d.a)(Tn, function() {
            var e = this.$createElement;
            return (this._self._c || e)("div", {
                class: [this.$style.scrollingGridBlocks]
            })
        }, [], !1, function(e) {
            this.$style = Rn.default.locals || Rn.default
        }, null, null).exports
            , xn = {
            name: "GridTestPage",
            components: {
                ScrollingGridBlocks: An
            },
            extends: I.AbstractPageTransitionComponent,
            data: function() {
                return {
                    isPaused: !1
                }
            },
            mounted: function() {
                this.$eventBus.$on(Gt.PAGE_TRANSITION_COMPLETE, this.onPageTransitionComplete)
            },
            beforeDestroy: function() {
                this.$eventBus.$off(Gt.PAGE_TRANSITION_COMPLETE, this.onPageTransitionComplete)
            },
            methods: {
                handleAllComponentsReady: function() {
                    this.transitionController = new yn(this),
                    this.isReady()
                },
                onPageTransitionComplete: function() {
                    Object.assign(this.$el.style, {
                        transform: "translateX(100%)"
                    })
                }
            }
        }
          , kn = n(241);
        var bn = Object(d.a)(xn, function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                class: [e.$style.gridTestPage]
            }, [n("div", {
                class: e.$style.grid
            }, [n("ScrollingGridBlocks", {
                attrs: {
                    paused: e.isPaused,
                    "has-mask": !1,
                    color: "#fff"
                }
            })], 1), e._v(" "), n("button", {
                on: {
                    click: function() {
                        return e.isPaused = !e.isPaused
                    }
                }
            }, [e._v("\n    " + e._s(e.isPaused ? "Play" : "Pause") + "\n  ")])])
        }, [], !1, function(e) {
            this.$style = kn.default.locals || kn.default
        }, null, null).exports
          , Mn = {
            ID: "id",
            SLUG: "slug"
        }
          , wn = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            O()(t, [{
                key: "setupTransitionInTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupTransitionOutTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupLoopingAnimationTimeline",
                value: function(e, t, n) {}
            }]),
            t
        }(I.AbstractTransitionController)
          , Sn = {
            name: "TextPage",
            components: {
                CloseButton: _n
            },
            extends: I.AbstractPageTransitionComponent,
            computed: {
                pageData: function() {
                    return this.$store.getters.translation.legal[this.$route.params[this.Params.SLUG]]
                }
            },
            mounted: function() {
                this.$eventBus.$on(Gt.PAGE_TRANSITION_COMPLETE, this.onPageTransitionComplete)
            },
            beforeDestroy: function() {
                this.$eventBus.$off(Gt.PAGE_TRANSITION_COMPLETE, this.onPageTransitionComplete),
                this.scrollEvent && this.scrollEvent.dispose()
            },
            methods: {
                handleAllComponentsReady: function() {
                    this.transitionController = new wn(this),
                    this.scroll = new se,
                    this.scroll.init(this.$refs.scrollWrapper, {
                        alwaysShowTracks: !0
                    }),
                    this.scrollEvent = new ze.DisposableEventListener(this.scroll,re.types.UPDATE,this.handleScroll),
                    this.isReady()
                },
                onCloseClick: function() {
                    this.$eventBus.$emit(Gt.PAGE_CHANGE, this.RouteNames.HOME)
                },
                onPageTransitionComplete: function() {
                    Object.assign(this.$el.style, {
                        transform: "translateX(100%)"
                    })
                },
                handleScroll: function() {
                    document.documentElement.style.setProperty("--scroll-position", "".concat(this.scroll.y, "px"))
                }
            }
        }
          , Cn = n(242);
        var In = Object(d.a)(Sn, function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                class: [e.$style.textPage]
            }, [n("CloseButton", {
                class: e.$style.closeButton,
                nativeOn: {
                    click: function(t) {
                        return t.preventDefault(),
                        e.onCloseClick(t)
                    }
                }
            }), e._v(" "), n("div", {
                ref: "scrollWrapper",
                class: e.$style.scrollWrapper
            }, [n("div", {
                class: e.$style.content
            }, [n("h2", {
                class: ["heading-02", e.$style.title]
            }, [e._v("\n        " + e._s(e.pageData.title) + "\n      ")]), e._v(" "), n("div", {
                staticClass: "rich-content small",
                domProps: {
                    innerHTML: e._s(e.pageData.content)
                }
            })])])], 1)
        }, [], !1, function(e) {
            this.$style = Cn.default.locals || Cn.default
        }, null, null).exports
          , Pn = {
            HOME: "home",
            JOURNALIST: "person",
            VIDEO: "video",
            LEGAL: "legal",
            WEBGL: "webgl",
            TEST: "test"
        }
          , Ln = [{
            path: "/",
            component: Yt,
            name: Pn.HOME,
            children: [{
                path: "person/:".concat(Mn.SLUG),
                component: hn,
                name: Pn.JOURNALIST
            }, {
                path: "v/:".concat(Mn.SLUG),
                component: gn,
                name: Pn.VIDEO
            }, {
                path: "legal/:".concat(Mn.SLUG),
                component: In,
                name: Pn.LEGAL
            }]
        }, {
            path: "/webgl",
            component: Jt,
            name: Pn.WEBGL
        }, {
            path: "/grid-test",
            component: bn,
            name: Pn.TEST
        }];
        r.a.use(_.a);
        var Vn = null
          , On = function() {
            if (!Vn) {
                var e = M()
                  , t = k(b)
                  , n = e.localeEnabled && e.localeRoutingEnabled ? Object(s.routeParser)(Ln, e.config.defaultCode) : Ln.concat({
                    path: "*",
                    redirect: "/"
                });
                (Vn = new _.a({
                    mode: "history",
                    routes: n,
                    base: t.getVariable(T.PUBLIC_PATH)
                })).beforeEach(function(e, n, i) {
                    var r = t.getProperty(R.PERSIST_QUERY_PARAMS)
                      , s = !1
                      , a = Object.assign({}, e.query);
                    r && r.length > 0 && r.forEach(function(e) {
                        "undefined" !== typeof n.query[e] && "undefined" === typeof a[e] && (a[e] = n.query[e],
                        s = !0)
                    }),
                    s ? i({
                        path: e.path,
                        query: a
                    }) : i()
                })
            }
            return Vn
        }
          , Nn = {
            app: de
        };
        r.a.use(C.a);
        var Fn, Bn, Dn = null, Un = function() {
            return Dn || (Dn = new C.a.Store({
                modules: Nn,
                strict: !1
            })),
            Dn
        }, zn = n(359), Hn = n.n(zn), Gn = n(99), $n = n.n(Gn), Xn = n(161), Wn = n.n(Xn), jn = {
            install: function(e, t) {
                Object.keys(t).forEach(function(n) {
                    e.prototype[n] ? console.error("Skipping ".concat(n, ". ").concat(n, " already exists on the Vue prototype")) : Object.defineProperty(e.prototype, n, {
                        get: function() {
                            return t[n]
                        }
                    })
                })
            }
        }, Yn = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , i = S()({}, n, t);
            return e.replace(/:(\w+)/g, function(e, t) {
                return "undefined" !== typeof i[t] ? i[t] || "" : e
            }).replace(/\/:(\w+\?+)/g, function() {
                return ""
            }).replace(/\?/g, function() {
                return ""
            }).replace(/:(\w+)/g, function(e, t) {
                throw new Error('Param "'.concat(t, '" is missing in params'),i)
            })
        }, qn = [], Kn = {
            isLoaded: function(e) {
                return qn.includes(e)
            },
            setLoadCallback: function(e) {
                Fn = e
            },
            getTranslation: function(e) {
                var t = e.translationKey
                  , i = e.code;
                return n(701)("./".concat(t, ".json")).then(function(e) {
                    return qn.push(i),
                    Fn && setTimeout(function() {
                        Fn(i)
                    }),
                    e
                })
            }
        };
        !function(e) {
            e.DOME = "dome",
            e.EGYPT = "egypt",
            e.HALL = "hall",
            e.RFS_1 = "rsf_1",
            e.RFS_2 = "rsf_2",
            e.RUSSIA = "russia",
            e.SAUDI_ARABIA = "saudi_arabia",
            e.VIETNAM = "vietnam",
            e.MEXICO = "mexico",
            e.EXTERIOR1 = "exterior1",
            e.EXTERIOR2 = "exterior2",
            e.EXTERIOR3 = "exterior3",
            e.EXTERIOR4 = "exterior4",
            e.EXTERIOR5 = "exterior5"
        }(Bn || (Bn = {}));
        var Zn, Jn, Qn, ei, ti = Bn, ni = function(e) {
            return new Promise(function(t) {
                Kn.isLoaded(e.getters.currentLanguage.code) ? t() : Kn.setLoadCallback(function(n) {
                    n === e.getters.currentLanguage.code && t()
                })
            }
            )
        }, ii = function(e) {
            !function() {
                var e = k(b)
                  , t = Object.keys(Te.mediaQueries).reduce(function(e, t) {
                    return e[t] = Te.mediaQueries[t].replace(/'/g, ""),
                    e
                }, {});
                r.a.use(jn, {
                    $config: e,
                    $gateway: k("gateway"),
                    $http: $n.a,
                    $versionRoot: e.getVariable(T.VERSIONED_STATIC_ROOT),
                    $staticRoot: e.getVariable(T.STATIC_ROOT),
                    $appPreloader: k("appPreloader"),
                    $webgl: k("webgl"),
                    $eventBus: Xt,
                    URLNames: E,
                    PropertyNames: R,
                    VariableNames: T,
                    RouteNames: Pn,
                    Params: Mn,
                    WorldId: ti,
                    createPath: Yn,
                    $deviceStateTracker: new Wn.a({
                        mediaQueries: t,
                        deviceState: Te.deviceState,
                        showStateIndicator: !1
                    }),
                    DeviceState: Te.deviceState
                }),
                r.a.use(Hn.a)
            }();
            var t = k(b);
            return Promise.all([t.getVariable(T.LOCALE_ENABLED) ? ni(e) : Promise.resolve(), Promise.resolve()])
        }, ri = n(360), si = n.n(ri), ai = {
            environments: (Zn = {},
            X()(Zn, p, {
                variables: {},
                urls: {}
            }),
            X()(Zn, g, {
                extends: p,
                variables: {},
                urls: {}
            }),
            X()(Zn, m, {
                extends: g,
                variables: {},
                urls: {}
            }),
            X()(Zn, y, {
                extends: m,
                variables: {},
                urls: {}
            }),
            Zn),
            variables: (Jn = {},
            X()(Jn, T.LOCALE_ENABLED, !0),
            X()(Jn, T.LOCALE_ROUTING_ENABLED, !0),
            X()(Jn, T.VERSIONED_STATIC_ROOT, (window.webpackPublicPath || "/") + "assets/static/"),
            X()(Jn, T.STATIC_ROOT, (window.webpackPublicPath || "/") + ""),
            X()(Jn, T.PUBLIC_PATH, window.webpackPublicPath || "/"),
            Jn),
            urls: (Qn = {},
            X()(Qn, E.API, "".concat("/", "api/")),
            X()(Qn, E.BASE, "https://www.uncensoredlibrary.com/"),
            Qn),
            properties: (ei = {},
            X()(ei, R.DEFAULT_LOCALE, ["de", "at"].includes(countryCode.toLowerCase()) ? "de" : "en"),
            X()(ei, R.AVAILABLE_LOCALES, ["en", "de"]),
            X()(ei, R.PERSIST_QUERY_PARAMS, []),
            ei)
        }, oi = p;
        switch (document.location.host.split(":").shift()) {
        case "localhost":
            oi = y;
            break;
        default:
            oi = p
        }
        var li = {
            config: ai,
            environment: oi
        }
          , hi = function(e) {
            function t() {
                var e;
                return L()(this, t),
                (e = F()(this, D()(t).call(this))).taskLoaderOptions = null,
                e.versionRoot = k(b).getVariable(T.VERSIONED_STATIC_ROOT),
                e.tasks = [],
                e.taskLoader = new Le.a,
                e.taskLoader.addEventListener(Pe.TaskLoaderEvent.UPDATE, e.onUpdate.bind(Be()(e))),
                e.taskLoader.addEventListener(Pe.TaskLoaderEvent.COMPLETE, e.onComplete.bind(Be()(e))),
                e
            }
            return z()(t, e),
            O()(t, [{
                key: "addTask",
                value: function(e) {
                    this.tasks.push(e)
                }
            }, {
                key: "start",
                value: function(e) {
                    return this.loadTasks(this.tasks, e)
                }
            }, {
                key: "onUpdate",
                value: function(e) {
                    this.taskLoaderOptions && this.taskLoaderOptions.onUpdate && this.taskLoaderOptions.onUpdate(e.data.progress)
                }
            }, {
                key: "onComplete",
                value: function(e) {
                    this.taskLoaderOptions && this.taskLoaderOptions.onComplete && this.taskLoaderOptions.onComplete()
                }
            }, {
                key: "loadTasks",
                value: function(e, t) {
                    return this.taskLoaderOptions = t || null,
                    this.taskLoader.loadTasks(e)
                }
            }]),
            t
        }(J.a)
          , ui = n(361)
          , ci = function() {
            function e() {
                L()(this, e)
            }
            return O()(e, null, [{
                key: "posMod",
                value: function(e, t) {
                    return (e % t + t) % t
                }
            }, {
                key: "fract",
                value: function(e) {
                    return e - Math.floor(e)
                }
            }, {
                key: "lerp",
                value: function(e, t, n) {
                    return (1 - n) * e + n * t
                }
            }, {
                key: "clamp01",
                value: function(e) {
                    return e < 0 ? 0 : e > 1 ? 1 : e
                }
            }, {
                key: "gain01",
                value: function(e, t) {
                    return e > .5 ? 1 - .5 * Math.pow(2 - 2 * e, t) : .5 * Math.pow(2 * e, t)
                }
            }, {
                key: "smootherStep01",
                value: function(e) {
                    return e * e * e * (e * (6 * e - 15) + 10)
                }
            }, {
                key: "smoothStep01",
                value: function(t) {
                    return (t = e.clamp(t, 0, 1)) * t * (3 - 2 * t)
                }
            }, {
                key: "invSmoothStep01",
                value: function(e) {
                    return e + (e - e * e * (3 - 2 * e))
                }
            }, {
                key: "smoothStep",
                value: function(t, n, i) {
                    return (i = e.clamp((i - t) / (n - t), 0, 1)) * i * (3 - 2 * i)
                }
            }, {
                key: "step",
                value: function(t, n, i) {
                    return e.clamp01((i - t) / (n - t))
                }
            }, {
                key: "nearestPowerOfTwo",
                value: function(e) {
                    return Math.pow(2, Math.round(Math.log(e) / Math.log(2)))
                }
            }, {
                key: "smallerPowerOfTwo",
                value: function(e) {
                    return Math.pow(2, Math.floor(Math.log(e) / Math.log(2)))
                }
            }, {
                key: "clamp",
                value: function(e, t, n) {
                    return Math.min(Math.max(e, t), n)
                }
            }, {
                key: "degToRad",
                value: function(e) {
                    return e * (Math.PI / 180)
                }
            }, {
                key: "radToDeg",
                value: function(e) {
                    return e * (180 / Math.PI)
                }
            }, {
                key: "latLongToCartesian",
                value: function(e, t, n, i) {
                    var r = this.degToRad(t)
                      , s = this.degToRad(n) + Math.PI;
                    return e.z = i * Math.cos(r) * Math.cos(s),
                    e.x = i * Math.cos(r) * Math.sin(s),
                    e.y = i * Math.sin(r),
                    e
                }
            }]),
            e
        }()
          , vi = function() {
            function e() {
                L()(this, e),
                this.isDestructed = !1
            }
            return O()(e, [{
                key: "destruct",
                value: function() {
                    this.isDestructed ? console.error("Cannot destruct twice") : this.isDestructed = !0
                }
            }]),
            e
        }()
          , di = function(e) {
            function t() {
                var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                return L()(this, t),
                (e = F()(this, D()(t).call(this)))._finished = !1,
                e._easeInOut = !1,
                e._isUpdating = !1,
                e._update = function() {
                    return e.update()
                }
                ,
                e.value = n,
                e
            }
            return z()(t, e),
            O()(t, [{
                key: "to",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                      , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
                      , r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    this.goal = e,
                    this.progress = 0,
                    this.startValue = this.value,
                    this._duration = 1e3 * t,
                    this._t0 = +new Date,
                    this._finished = !1,
                    this._completeCallback = i,
                    this._animateCallback = n,
                    this._easeInOut = r,
                    this._isUpdating || this.update()
                }
            }, {
                key: "fromTo",
                value: function(e, t, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
                      , r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
                      , s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                    this.value = e,
                    this.to(t, n, i, r, s)
                }
            }, {
                key: "stop",
                value: function() {
                    this._finished = !0,
                    this._completeCallback = null,
                    this._animateCallback = null
                }
            }, {
                key: "update",
                value: function() {
                    if (void 0 === this._t0 || void 0 === this._duration || void 0 === this.startValue || void 0 === this.goal)
                        throw new Error("cannot update: Tween not started. Call Tween.to or Tween.fromTo first");
                    if (this._isUpdating = !1,
                    !this.isDestructed && !this._finished)
                        if (this.progress = (+new Date - this._t0) / this._duration,
                        this.progress > 1 && (this.progress = 1),
                        this.easedProgress = this.progress,
                        this._easeInOut && (this.easedProgress = ci.smoothStep01(this.easedProgress)),
                        this.value = ci.lerp(this.startValue, this.goal, this.easedProgress),
                        this._animateCallback && this._animateCallback.call(this, this.value),
                        this.progress >= 1) {
                            if (this._finished = !0,
                            this._completeCallback) {
                                var e = this._completeCallback;
                                this._completeCallback = null,
                                e.call(this)
                            }
                        } else
                            this._isUpdating = !0,
                            window.requestAnimationFrame(this._update)
                }
            }]),
            t
        }(vi)
          , fi = function(e) {
            function t(e, n) {
                var i, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                return L()(this, t),
                (i = F()(this, D()(t).call(this))).dataName = null,
                i.exposed = !1,
                i.name = n,
                i.parent = e,
                i._callback = s,
                i._materials = r || [],
                i
            }
            return z()(t, e),
            O()(t, [{
                key: "expose",
                value: function() {
                    this.exposed = !0
                }
            }, {
                key: "getValue",
                value: function() {
                    return this._value
                }
            }, {
                key: "setUpdateUICallback",
                value: function(e) {
                    this._updateUIcallback = e
                }
            }, {
                key: "setChangeCallback",
                value: function(e) {
                    this._callback = e
                }
            }, {
                key: "setValue",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    e !== this._value && (this._value = e,
                    this.setShaderUniform(e),
                    this._callback && n && this._callback(this._value),
                    !t && this._updateUIcallback && this._updateUIcallback.call(this, this.getValue()))
                }
            }, {
                key: "setFromUI",
                value: function(e) {
                    this.setValue(e, !0)
                }
            }, {
                key: "setShaderUniform",
                value: function(e) {
                    console.log("warning: override this")
                }
            }]),
            t
        }(vi)
          , _i = function(e) {
            function t(e, n, i) {
                var r, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1, o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : [], l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, h = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
                L()(this, t),
                (r = F()(this, D()(t).call(this, e, null !== l ? l : n, o, h)))._floatUniforms = [];
                for (var u = 0; u < r._materials.length; u++)
                    r._floatUniforms[u] = r._materials[u].addFloatUniform(n, i);
                return r.min = s,
                r.max = a,
                r.max < i && (r.max = 2 * i),
                r.min > i && (r.min = i - 1),
                r.setValue(i, !1, !1),
                r
            }
            return z()(t, e),
            O()(t, [{
                key: "setValue",
                value: function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    e = ci.clamp(e, this.min, this.max),
                    q()(D()(t.prototype), "setValue", this).call(this, e, n, i)
                }
            }, {
                key: "setShaderUniform",
                value: function(e) {
                    for (var t = 0; t < this._floatUniforms.length; t++)
                        this._floatUniforms[t].set(e)
                }
            }, {
                key: "to",
                value: function(e, t) {
                    var n = this
                      , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    this._tween || (this._tween = new di),
                    i ? this._tween.fromTo(this.getValue(), e, t, function(e) {
                        return n.setValue(e)
                    }, function() {
                        return i()
                    }) : this._tween.fromTo(this.getValue(), e, t, function(e) {
                        return n.setValue(e)
                    })
                }
            }, {
                key: "destruct",
                value: function() {
                    if (this._floatUniforms) {
                        for (var e = 0; e < this._floatUniforms.length; e++)
                            this._floatUniforms[e].destruct();
                        this._floatUniforms = []
                    }
                    this._tween && (this._tween.destruct(),
                    delete this._tween),
                    q()(D()(t.prototype), "destruct", this).call(this)
                }
            }]),
            t
        }(fi)
          , pi = function(e) {
            function t(e, n, i) {
                var r, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1, o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null, l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, h = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null;
                L()(this, t),
                (r = F()(this, D()(t).call(this, e, null !== l ? l : n, o, h)))._floatUniforms = [];
                for (var u = 0; u < r._materials.length; u++)
                    r._floatUniforms[u] = r._materials[u].addFloatUniform(n, i);
                return r.min = s,
                r.max = a,
                r.max < i && (r.max = 2 * i),
                r.min > i && (r.min = i - 1),
                r.setValue(i),
                r
            }
            return z()(t, e),
            O()(t, [{
                key: "setShaderUniform",
                value: function(e) {
                    for (var t = 0; t < this._floatUniforms.length; t++)
                        this._floatUniforms[t].set(e)
                }
            }]),
            t
        }(fi)
          , mi = function(e) {
            function t(e, n, i) {
                var r, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
                return L()(this, t),
                (r = F()(this, D()(t).call(this, e, null !== a ? a : n, s, o))).setValue(i, !1, !1),
                r
            }
            return z()(t, e),
            O()(t, [{
                key: "setShaderUniform",
                value: function(e) {
                    for (var t = 0; t < this._materials.length; t++)
                        this._materials[t].setFloat(this.name, !0 === e ? 1 : 0)
                }
            }]),
            t
        }(fi)
          , gi = function(e) {
            function t(e, n) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                return L()(this, t),
                F()(this, D()(t).call(this, e, n, null, i))
            }
            return z()(t, e),
            O()(t, [{
                key: "getValue",
                value: function() {
                    return this._callback
                }
            }]),
            t
        }(fi)
          , yi = n(7)
          , Ei = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                L()(this, e),
                this.v = yi.e.fromValues(t, n, i)
            }
            return O()(e, [{
                key: "clone",
                value: function() {
                    return new e(this.x,this.y,this.z)
                }
            }, {
                key: "copy",
                value: function(e) {
                    return yi.e.copy(this.v, e.v),
                    this
                }
            }, {
                key: "setValues",
                value: function(e, t, n) {
                    return yi.e.set(this.v, e, t, n),
                    this
                }
            }, {
                key: "length",
                value: function() {
                    return yi.e.length(this.v)
                }
            }, {
                key: "toString",
                value: function() {
                    return "(" + this.x + ", " + this.y + ", " + this.z + ")"
                }
            }, {
                key: "equals",
                value: function(e) {
                    return e.x === this.x && e.y === this.y && e.z === this.z
                }
            }, {
                key: "normalize",
                value: function() {
                    return yi.e.normalize(this.v, this.v),
                    this
                }
            }, {
                key: "negate",
                value: function() {
                    return yi.e.negate(this.v, this.v),
                    this
                }
            }, {
                key: "multiplyScalar",
                value: function(e) {
                    return yi.e.scale(this.v, this.v, e),
                    this
                }
            }, {
                key: "multiply",
                value: function(e) {
                    return yi.e.multiply(this.v, this.v, e.v),
                    this
                }
            }, {
                key: "divide",
                value: function(e) {
                    return yi.e.divide(this.v, this.v, e.v),
                    this
                }
            }, {
                key: "add",
                value: function(e) {
                    return yi.e.add(this.v, this.v, e.v),
                    this
                }
            }, {
                key: "subtract",
                value: function(e) {
                    return yi.e.subtract(this.v, this.v, e.v),
                    this
                }
            }, {
                key: "subtractScalar",
                value: function(e) {
                    return this.x -= e,
                    this.y -= e,
                    this.z -= e,
                    this
                }
            }, {
                key: "rotateX",
                value: function(e, t) {
                    return yi.e.rotateX(this.v, this.v, e.v, t),
                    this
                }
            }, {
                key: "rotateY",
                value: function(e, t) {
                    return yi.e.rotateY(this.v, this.v, e.v, t),
                    this
                }
            }, {
                key: "transform",
                value: function(e) {
                    return yi.e.transformMat4(this.v, this.v, e),
                    this
                }
            }, {
                key: "transformMat3",
                value: function(e) {
                    return yi.e.transformMat3(this.v, this.v, e),
                    this
                }
            }, {
                key: "randomize",
                value: function() {
                    return this.x = 2 * Math.random() - 1,
                    this.y = 2 * Math.random() - 1,
                    this.z = 2 * Math.random() - 1,
                    this
                }
            }, {
                key: "randomize01",
                value: function() {
                    return this.x = Math.random(),
                    this.y = Math.random(),
                    this.z = Math.random(),
                    this
                }
            }, {
                key: "randomizeSphere",
                value: function() {
                    do {
                        this.randomize()
                    } while (this.length() > 1);
                    return this
                }
            }, {
                key: "smoothstep",
                value: function() {
                    return this.x = e.smoothstep1(this.x),
                    this.y = e.smoothstep1(this.y),
                    this.z = e.smoothstep1(this.z),
                    this
                }
            }, {
                key: "min",
                value: function(e) {
                    this.x = Math.min(this.x, e.x),
                    this.y = Math.min(this.y, e.y),
                    this.z = Math.min(this.z, e.z)
                }
            }, {
                key: "max",
                value: function(e) {
                    this.x = Math.max(this.x, e.x),
                    this.y = Math.max(this.y, e.y),
                    this.z = Math.max(this.z, e.z)
                }
            }, {
                key: "x",
                get: function() {
                    return this.v[0]
                },
                set: function(e) {
                    this.v[0] = e
                }
            }, {
                key: "y",
                get: function() {
                    return this.v[1]
                },
                set: function(e) {
                    this.v[1] = e
                }
            }, {
                key: "z",
                get: function() {
                    return this.v[2]
                },
                set: function(e) {
                    this.v[2] = e
                }
            }], [{
                key: "smoothstep1",
                value: function(e) {
                    return e * e * (3 - 2 * e)
                }
            }, {
                key: "dot",
                value: function(e, t) {
                    return yi.e.dot(e.v, t.v)
                }
            }, {
                key: "distance",
                value: function(e, t) {
                    return yi.e.distance(e.v, t.v)
                }
            }, {
                key: "multiplyScalar",
                value: function(e, t, n) {
                    return e.x = t.x * n,
                    e.y = t.y * n,
                    e.z = t.z * n,
                    e
                }
            }, {
                key: "cross",
                value: function(e, t, n) {
                    return yi.e.cross(e.v, t.v, n.v),
                    e
                }
            }, {
                key: "add",
                value: function(e, t, n) {
                    return yi.e.add(e.v, t.v, n.v),
                    e
                }
            }, {
                key: "subtract",
                value: function(e, t, n) {
                    return yi.e.subtract(e.v, t.v, n.v),
                    e
                }
            }, {
                key: "lerp",
                value: function(e, t, n, i) {
                    return yi.e.lerp(e.v, t.v, n.v, i),
                    e
                }
            }, {
                key: "fract",
                value: function(e, t) {
                    return e.x = t.x - Math.floor(t.x),
                    e.y = t.y - Math.floor(t.y),
                    e.x = t.z - Math.floor(t.z),
                    e
                }
            }, {
                key: "floor",
                value: function(e, t) {
                    return yi.e.floor(e.v, t.v),
                    e
                }
            }, {
                key: "bezier",
                value: function(e, t, n, i, r, s) {
                    yi.e.bezier(e.v, t.v, n.v, i.v, r.v, s)
                }
            }]),
            e
        }();
        Ei.ZERO = new Ei,
        Ei.RIGHT = new Ei(1,0,0),
        Ei.UP = new Ei(0,1,0),
        Ei.FORWARD = new Ei(0,0,1),
        Ei.ONE = new Ei(1,1,1);
        var Ti, Ri = Ei, Ai = function(e) {
            function t(e, n, i) {
                var r, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [], a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null, o = arguments.length > 5 ? arguments[5] : void 0;
                L()(this, t),
                (r = F()(this, D()(t).call(this, e, null !== a ? a : n, s, o)))._uniforms = [],
                r._color = new Ri;
                for (var l = 0; l < r._materials.length; l++)
                    r._uniforms[l] = r._materials[l].addVector3Uniform(n, r._color);
                return r.setValue([255 * i.x, 255 * i.y, 255 * i.z]),
                r
            }
            return z()(t, e),
            O()(t, [{
                key: "getValueVector3",
                value: function() {
                    return this._color
                }
            }, {
                key: "convertColorToArray",
                value: function(e) {
                    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                    return t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : e
                }
            }, {
                key: "setValue",
                value: function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    e instanceof Ri ? this._color.copy(e) : (e = this.convertColorToArray(e),
                    this._color.setValues(e[0] / 255, e[1] / 255, e[2] / 255)),
                    q()(D()(t.prototype), "setValue", this).call(this, [255 * this._color.x, 255 * this._color.y, 255 * this._color.z], n)
                }
            }, {
                key: "setShaderUniform",
                value: function(e) {
                    for (var t = 0; t < this._uniforms.length; t++)
                        this._uniforms[t].set(this._color)
                }
            }]),
            t
        }(fi), xi = function(e) {
            function t() {
                var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return L()(this, t),
                (e = F()(this, D()(t).call(this)))._params = {},
                e.folderIndex = -2,
                n && n.add(Be()(e)),
                e._jsonExportEnabled = i,
                e._params = r,
                e
            }
            return z()(t, e),
            O()(t, [{
                key: "load",
                value: function(e) {
                    e.call(this)
                }
            }, {
                key: "init",
                value: function(e) {
                    this._rootGroup = e;
                    var t = {};
                    this._gui = new ui.a(this._params),
                    this.readGroup(null, e, t, this._gui),
                    this._jsonExportEnabled && this._gui.remember(t),
                    this.setVisible(!0)
                }
            }, {
                key: "getDatGUI",
                value: function() {
                    return this._gui
                }
            }, {
                key: "setPreset",
                value: function(e) {
                    if (!this._gui)
                        throw new Error("Cannot set preset: DatGui not initialized");
                    this.folderIndex = -2,
                    this.setPresetRecurse(this._gui.__folders.controls, e.remembered.Default)
                }
            }, {
                key: "setPresetRecurse",
                value: function(e, t) {
                    this.folderIndex++;
                    var n = t[this.folderIndex];
                    if ("undefined" !== typeof n) {
                        var i = !0
                          , r = !1
                          , s = void 0;
                        try {
                            for (var a, o = e.__controllers[Symbol.iterator](); !(i = (a = o.next()).done); i = !0) {
                                var l = a.value
                                  , h = n[l.property];
                                "undefined" !== typeof h && l.setValue(h)
                            }
                        } catch (f) {
                            r = !0,
                            s = f
                        } finally {
                            try {
                                i || null == o.return || o.return()
                            } finally {
                                if (r)
                                    throw s
                            }
                        }
                    }
                    for (var u = Object.keys(e.__folders), c = 0; c < u.length; c++) {
                        var v = u[c]
                          , d = e.__folders[v];
                        this.setPresetRecurse(d, t)
                    }
                }
            }, {
                key: "readGroup",
                value: function(e, t, n, i) {
                    if (!t.name)
                        throw new Error("group name not initialized");
                    if (!this._gui)
                        throw new Error("cannot read group: DatGui not initialized");
                    var r = this.uniqueName(i.__folders, t.name);
                    t.uniqueName = r;
                    var s = i.addFolder(r);
                    t.collapsed || s.open();
                    var a = !0
                      , o = !1
                      , l = void 0;
                    try {
                        for (var h, u = t.params[Symbol.iterator](); !(a = (h = u.next()).done); a = !0) {
                            var c = h.value;
                            c.dataName = this.uniqueName(n, c.name);
                            var v = c.dataName;
                            void 0 == n[v] ? n[v] = c.getValue() : console.log("property " + v + " already exists on param object", n);
                            var d = void 0;
                            if (c instanceof _i) {
                                var f = c;
                                d = s.add(n, v, f.min, f.max)
                            }
                            if (c instanceof pi) {
                                var _ = c;
                                d = s.add(n, v, _.min, _.max).step(1)
                            }
                            if (c instanceof mi && (d = s.add(n, v)),
                            c instanceof gi && (d = s.add(n, v)),
                            c instanceof Ai && (d = s.addColor(n, v)),
                            !(c instanceof gi)) {
                                if (void 0 === d)
                                    throw new TypeError("Unknown type of parameter");
                                this.addHandlers(d, n, c)
                            }
                        }
                    } catch (A) {
                        o = !0,
                        l = A
                    } finally {
                        try {
                            a || null == u.return || u.return()
                        } finally {
                            if (o)
                                throw l
                        }
                    }
                    var p = !0
                      , m = !1
                      , g = void 0;
                    try {
                        for (var y, E = t.children[Symbol.iterator](); !(p = (y = E.next()).done); p = !0) {
                            var T = y.value
                              , R = {};
                            this._jsonExportEnabled && this._gui.remember(R),
                            this.readGroup(t, T, R, s)
                        }
                    } catch (A) {
                        m = !0,
                        g = A
                    } finally {
                        try {
                            p || null == E.return || E.return()
                        } finally {
                            if (m)
                                throw g
                        }
                    }
                }
            }, {
                key: "uniqueName",
                value: function(e, t) {
                    return t in e ? this.uniqueName(e, "U_" + t) : t
                }
            }, {
                key: "addHandlers",
                value: function(e, t, n) {
                    n.setUpdateUICallback(function(e) {
                        t[n.dataName] = e
                    }),
                    e.listen(),
                    e.onChange(function(e) {
                        t[n.dataName] = e,
                        n.setFromUI(e)
                    }),
                    e.onFinishChange = function(e) {
                        return n.setFromUI(e)
                    }
                }
            }, {
                key: "setVisible",
                value: function(e) {
                    if (!this._gui)
                        throw new Error("cannot set visible: DatGui not initialized");
                    this._visible = e,
                    this._gui.domElement.parentElement && (this._gui.domElement.parentElement.style.zIndex = (e ? 999 : 0).toString(),
                    this._gui.domElement.parentElement.style.visibility = (e ? "visible" : "hidden").toString())
                }
            }, {
                key: "destruct",
                value: function() {
                    this._gui && (this._gui.domElement.parentElement && this._gui.domElement.parentElement.removeChild(this._gui.domElement),
                    delete this._gui),
                    q()(D()(t.prototype), "destruct", this).call(this)
                }
            }]),
            t
        }(vi), ki = function(e) {
            function t() {
                var e;
                return L()(this, t),
                (e = F()(this, D()(t).call(this))).params = [],
                e.children = [],
                e
            }
            return z()(t, e),
            O()(t, [{
                key: "addGroup",
                value: function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                      , i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                      , r = new t;
                    return r.init(e, n, i),
                    this.children.push(r),
                    r
                }
            }, {
                key: "removeGroup",
                value: function(e) {
                    var t = null
                      , n = !0
                      , i = !1
                      , r = void 0;
                    try {
                        for (var s, a = this.children[Symbol.iterator](); !(n = (s = a.next()).done); n = !0) {
                            var o = s.value;
                            if (console.log("checking", o.name, e),
                            o.name === e) {
                                t = o;
                                break
                            }
                        }
                    } catch (l) {
                        i = !0,
                        r = l
                    } finally {
                        try {
                            n || null == a.return || a.return()
                        } finally {
                            if (i)
                                throw r
                        }
                    }
                    t && this.children.splice(this.children.indexOf(t), 1)
                }
            }, {
                key: "removeAllGroups",
                value: function() {
                    this.children = []
                }
            }, {
                key: "pushGroup",
                value: function(e) {
                    this.children.push(e)
                }
            }, {
                key: "init",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                      , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    this.name = e,
                    this.collapsed = n,
                    this.materials = t ? [].concat(t) : []
                }
            }, {
                key: "addParamFloat",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                      , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1
                      , r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
                      , s = new _i(this,e,t,n,i,[],null,r);
                    return this.params.push(s),
                    s
                }
            }, {
                key: "addShaderParamFloat",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                      , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1
                      , r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
                      , s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
                    this.materials && 0 != this.materials.length || console.warn("Adding shader param to param group that has no materials", e);
                    var a = new _i(this,e,t,n,i,this.materials,r,s);
                    return this.params.push(a),
                    a
                }
            }, {
                key: "addParamInt",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                      , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1
                      , r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
                      , s = new pi(this,e,t,n,i,null,null,r);
                    return this.params.push(s),
                    s
                }
            }, {
                key: "addShaderParamInt",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                      , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1
                      , r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
                      , s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
                    this.materials && 0 != this.materials.length || console.warn("Adding shader param to param group that has no materials");
                    var a = new pi(this,e,t,n,i,this.materials,r,s);
                    return this.params.push(a),
                    a
                }
            }, {
                key: "addParamBool",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                      , i = new mi(this,e,t,null,null,n);
                    return this.params.push(i),
                    i
                }
            }, {
                key: "addShaderParamBool",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                      , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    this.materials && 0 != this.materials.length || console.warn("Adding shader param to param group that has no materials");
                    var r = new mi(this,e,t,this.materials,n,i);
                    return this.params.push(r),
                    r
                }
            }, {
                key: "addParamColor",
                value: function(e, t, n) {
                    var i = new Ai(this,e,t,[],null,n);
                    return this.params.push(i),
                    i
                }
            }, {
                key: "addShaderParamColor",
                value: function(e, t, n, i) {
                    this.materials && 0 != this.materials.length || console.warn("Adding shader param to param group that has no materials");
                    var r = new Ai(this,e,t,this.materials,n,i);
                    return this.params.push(r),
                    r
                }
            }, {
                key: "addButton",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                      , n = new gi(this,e,t);
                    return this.params.push(n),
                    n
                }
            }, {
                key: "getParameters",
                value: function() {
                    var e = []
                      , t = !0
                      , n = !1
                      , i = void 0;
                    try {
                        for (var r, s = this.children[Symbol.iterator](); !(t = (r = s.next()).done); t = !0) {
                            var a = r.value;
                            e = e.concat(a.getParameters())
                        }
                    } catch (d) {
                        n = !0,
                        i = d
                    } finally {
                        try {
                            t || null == s.return || s.return()
                        } finally {
                            if (n)
                                throw i
                        }
                    }
                    var o = !0
                      , l = !1
                      , h = void 0;
                    try {
                        for (var u, c = this.params[Symbol.iterator](); !(o = (u = c.next()).done); o = !0) {
                            var v = u.value;
                            e.push(v)
                        }
                    } catch (d) {
                        l = !0,
                        h = d
                    } finally {
                        try {
                            o || null == c.return || c.return()
                        } finally {
                            if (l)
                                throw h
                        }
                    }
                    return e
                }
            }, {
                key: "destruct",
                value: function() {
                    if (this.params)
                        for (var e = 0; e < this.params.length; e++)
                            this.params[e].isDestructed || this.params[e].destruct();
                    if (this.children)
                        for (var n = 0; n < this.children.length; n++)
                            this.children[n].isDestructed || this.children[n].destruct(),
                            this.children[n].destruct();
                    q()(D()(t.prototype), "destruct", this).call(this)
                }
            }], [{
                key: "exposeParam",
                value: function(e) {
                    e.expose()
                }
            }]),
            t
        }(vi);
        !function(e) {
            e.KRAKEN = "Kraken",
            e.SCALE = "Scale",
            e.CAGE = "Cage",
            e.SHRINE = "Shrine",
            e.MAZE = "Maze",
            e.TRUTH = "Truth"
        }(Ti || (Ti = {}));
        var bi = Ti
          , Mi = n(222)
          , wi = n.n(Mi)
          , Si = function(e) {
            function t() {
                var e;
                return L()(this, t),
                (e = F()(this, D()(t).call(this)))._loadsRequested = [],
                e._loadsCompleted = 0,
                e._progress = 0,
                e._isLoading = !1,
                e._callbackPerPreloadable = [],
                e
            }
            return z()(t, e),
            O()(t, [{
                key: "add",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                      , n = this._loadsRequested.push(e) - 1;
                    return this._callbackPerPreloadable.push(t),
                    this.isLoading() && this.startLoader(n),
                    e
                }
            }, {
                key: "load",
                value: function(e, t) {
                    this._callback = e,
                    this._progressCallBack = t,
                    this.loadAll()
                }
            }, {
                key: "isLoading",
                value: function() {
                    return this._isLoading
                }
            }, {
                key: "loadAll",
                value: function() {
                    if (0 !== this._loadsRequested.length) {
                        this._isLoading = !0;
                        for (var e = 0; e < this._loadsRequested.length; e++)
                            this.startLoader(e)
                    } else
                        this.loadDoneCallback()
                }
            }, {
                key: "setCallbackForPreloadable",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    this._callbackPerPreloadable[this.getIndexOfPreloadable(e)] = t
                }
            }, {
                key: "getIndexOfPreloadable",
                value: function(e) {
                    return this._loadsRequested.indexOf(e)
                }
            }, {
                key: "startLoader",
                value: function(e) {
                    var t = this;
                    this._loadsRequested[e].load(function() {
                        var n = t._callbackPerPreloadable[e];
                        n && n(),
                        t.loadDoneCallback()
                    })
                }
            }, {
                key: "loadDoneCallback",
                value: function() {
                    this._loadsCompleted++,
                    this._progress += (1 - this._progress) / (1 + this._loadsRequested.length - this._loadsCompleted),
                    this._progressCallBack && (this._loadsRequested.length ? this._progressCallBack.call(this, this._progress) : this._progressCallBack.call(this, 1)),
                    this._loadsCompleted >= this._loadsRequested.length && (this._isLoading = !1,
                    this._callback && (this._callback.call(this),
                    this._callback = null))
                }
            }, {
                key: "destruct",
                value: function() {
                    this._callback = null,
                    q()(D()(t.prototype), "destruct", this).call(this)
                }
            }]),
            t
        }(vi)
          , Ci = function e() {
            L()(this, e)
        };
        Ci.isDebugMode = !0,
        Ci.doLogs = !0,
        Ci.usePngOnly = !1,
        Ci.useWebp = !0,
        Ci.useQuarterResTextures = !1;
        var Ii = function() {
            function e() {
                L()(this, e),
                this.visible = !0
            }
            return O()(e, [{
                key: "destruct",
                value: function() {
                    this.mesh && (this.mesh.destruct(),
                    this.mesh = null),
                    this.vao = null
                }
            }]),
            e
        }()
          , Pi = function(e) {
            function t(e) {
                var n;
                return L()(this, t),
                (n = F()(this, D()(t).call(this)))._materials = [],
                n._materialsByName = {},
                n._meshRenderers = [],
                n._meshRenderersById = {},
                n._sortedModels = [],
                n._firstTransparentIndex = 0,
                n._transparentSortDirty = !0,
                n._renderer = e,
                n
            }
            return z()(t, e),
            O()(t, [{
                key: "update",
                value: function() {}
            }, {
                key: "handleLoaded",
                value: function() {
                    for (var e = 0; e < this._materials.length; e++)
                        this._materials[e].init();
                    var t = this._renderer;
                    if (this._renderer.extensionManager.vertex_array_object)
                        for (var n = 0; n < this._meshRenderers.length; n++) {
                            var i = this._meshRenderers[n];
                            i.vao = t.initVAO(i.mesh, i.material)
                        }
                    this.sortByMaterial(),
                    this._transparentSortDirty = !0
                }
            }, {
                key: "compare",
                value: function(e, t) {
                    return e.z < t.z ? 1 : -1
                }
            }, {
                key: "transparencySort",
                value: function(e) {
                    Ci.doLogs && console.log("transparencySort", this._materials),
                    this._transparentModels = [];
                    for (var t = this._materials.length, n = this._firstTransparentIndex; n < t; n++) {
                        var i = this._materials[n]
                          , r = this._sortedModels[i.index];
                        if (r)
                            for (var s = 0; s < r.length; s++) {
                                var a = r[s];
                                a.z = e.getDepth(a.transform.getWorldPosition()),
                                this._transparentModels.push(a)
                            }
                        else
                            console.warn("no batch for: ", i.name)
                    }
                    this._transparentModels.sort(this.compare),
                    this._transparentSortDirty = !1
                }
            }, {
                key: "sortByMaterial",
                value: function() {
                    for (var e = [], t = 0, n = this._materials.length, i = n - 1, r = 0; r < n; r++) {
                        var s = this._materials[r];
                        s.transparent || s.additive ? s.index = i-- : s.index = t++,
                        this._sortedModels[r] = []
                    }
                    this._firstTransparentIndex = i + 1;
                    for (var a = 0; a < n; a++) {
                        var o = this._materials[a];
                        e[o.index] = o
                    }
                    this._materials = e;
                    for (var l = 0; l < this._meshRenderers.length; l++) {
                        var h = this._meshRenderers[l];
                        h.visible && (this._sortedModels[h.material.index].push(h),
                        0)
                    }
                    this._transparentSortDirty = !0
                }
            }, {
                key: "draw",
                value: function(e, t) {
                    if (1 != this.isDestructed)
                        for (var n = e.getViewProjection(), i = this._renderer, r = 0; r < this._firstTransparentIndex; r++) {
                            var s = this._materials[r];
                            s.setMatrix("_ViewProjection", n);
                            for (var a = this._sortedModels[s.index], o = 0; o < a.length; o++) {
                                var l = a[o];
                                if (s.skinned) {
                                    var h = t[l.mesh.animatorId];
                                    0 == h.boneMatrices.length ? console.warn("animator.boneMatrices.length == 0", h) : s.setMatrixFloatArray("_BoneMatrices", h.boneMatrices)
                                }
                                s.setMatrix("_Model", l.transform.getWorldMatrix()),
                                l.vao ? i.drawVAO(l.vao, l.mesh, s) : i.draw(l.mesh, s)
                            }
                        }
                    else
                        Ci.doLogs && console.error("drawing a destructed model: aborting")
                }
            }, {
                key: "drawTransparent",
                value: function(e) {
                    if (1 != this.isDestructed) {
                        this._transparentSortDirty && this.transparencySort(e);
                        for (var t = e.getViewProjection(), n = null, i = this._renderer, r = this._transparentModels.length, s = 0; s < r; s++) {
                            var a = this._transparentModels[s];
                            n != a.material && (n = a.material).setMatrix("_ViewProjection", t),
                            n.setMatrix("_Model", a.transform.getWorldMatrix()),
                            a.vao ? i.drawVAO(a.vao, a.mesh, n) : i.draw(a.mesh, n)
                        }
                    }
                }
            }, {
                key: "addMeshRenderer",
                value: function(e) {
                    this._meshRenderers.push(e),
                    this._meshRenderersById[e.transform.id] || (this._meshRenderersById[e.transform.id] = []),
                    this._meshRenderersById[e.transform.id].push(e)
                }
            }, {
                key: "addMaterial",
                value: function(e) {
                    this._materials.push(e),
                    this._materialsByName[e.name] = e
                }
            }, {
                key: "getMaterialByName",
                value: function(e) {
                    return this._materialsByName[e]
                }
            }, {
                key: "getRendererById",
                value: function(e) {
                    return this._meshRenderersById[e]
                }
            }, {
                key: "destruct",
                value: function() {
                    !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    if (this._meshRenderers) {
                        for (var e = 0; e < this._meshRenderers.length; e++)
                            this._meshRenderers[e] && this._meshRenderers[e].destruct();
                        this._meshRenderers = null
                    }
                    if (this._materials) {
                        for (var n = 0; n < this._materials.length; n++)
                            this._materials[n] && this._materials[n].destruct();
                        this._materials = null
                    }
                    this._materialsByName = null,
                    this._sortedModels = null,
                    this._meshRenderersById = null,
                    this._transparentModels = null,
                    q()(D()(t.prototype), "destruct", this).call(this)
                }
            }, {
                key: "materials",
                get: function() {
                    return this._materials
                }
            }]),
            t
        }(vi)
          , Li = function() {
            function e() {
                L()(this, e),
                this.averageFps = 60,
                this._manualUpdate = !1,
                e._instance && alert("do not create additional instances of the time class"),
                this.fps = 60,
                this.deltaTime = 1 / this.fps,
                this.time = 0,
                this.update()
            }
            return O()(e, [{
                key: "updateManual",
                value: function() {
                    this._manualUpdate = !0,
                    this.updateDeltaTime()
                }
            }, {
                key: "update",
                value: function() {
                    var e = this;
                    this._manualUpdate || (this.updateDeltaTime(),
                    window.requestAnimationFrame(function(t) {
                        return e.update()
                    }))
                }
            }, {
                key: "updateDeltaTime",
                value: function() {
                    var e = performance.now();
                    this.deltaTime = .001 * e - this.time,
                    this.deltaTime > .05 && (this.deltaTime = .05),
                    0 === this.deltaTime && (this.deltaTime = 1 / 60),
                    this.time = .001 * e,
                    this.fps = 1 / this.deltaTime,
                    this.averageFps > 0 ? this.averageFps = ci.lerp(this.fps, this.averageFps, .95) : this.averageFps = 1 / 60
                }
            }, {
                key: "testPerformance",
                value: function(e) {
                    console.time("timer0"),
                    e.call(this),
                    console.timeEnd("timer0")
                }
            }], [{
                key: "getInstance",
                value: function() {
                    return e._instance || (e._instance = new e),
                    e._instance
                }
            }]),
            e
        }()
          , Vi = function() {
            function e(t, n) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                L()(this, e),
                this.active = !1,
                this.blendProgress = 0,
                this.loop = !1,
                this.time = 0,
                this.clip = t,
                this.loop = n,
                this.blendProgress = i
            }
            return O()(e, [{
                key: "update",
                value: function(e) {
                    this.time += e,
                    !this.loop && this.time > this.clip.duration - Oi.BLEND_DURATION && (this.active = !1),
                    this.time >= this.clip.duration && (this.time = this.loop ? 0 : this.clip.duration);
                    var t = e / Math.min(Oi.BLEND_DURATION, this.clip.duration / 4 + .001);
                    return this.blendProgress = ci.clamp01(this.blendProgress + (this.active ? t : -t)),
                    this.active
                }
            }, {
                key: "play",
                value: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    return this.loop || (this.time = 0),
                    e || (this.blendProgress = 1),
                    this.active = !0,
                    this
                }
            }, {
                key: "clone",
                value: function() {
                    return new e(this.clip,this.loop)
                }
            }, {
                key: "stop",
                value: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    return this.active = !1,
                    e || (this.blendProgress = 0),
                    this
                }
            }]),
            e
        }()
          , Oi = function(e) {
            function t() {
                var e;
                return L()(this, t),
                (e = F()(this, D()(t).call(this)))._animations = [],
                e._animators = [],
                e._animatorsById = {},
                e._clips = [],
                e._activeClips = [],
                e._previousTime = 0,
                e
            }
            return z()(t, e),
            O()(t, [{
                key: "addClipsAndAnimator",
                value: function(e, t) {
                    for (var n = 0; n < e.length; n++) {
                        this._animations.push(e[n]);
                        var i = new Vi(e[n],!1,0);
                        this._clips.push(i)
                    }
                    this._animatorsById[t.id] = t,
                    this._animators.push(t),
                    this.update()
                }
            }, {
                key: "getClipByName",
                value: function(e) {
                    for (var t = 0; t < this._clips.length; t++)
                        if (this._clips[t].clip.name == e)
                            return this._clips[t];
                    return console.warn("getClipByName: not found", e, this._clips),
                    null
                }
            }, {
                key: "getClipDuration",
                value: function(e) {
                    return this._clips[e] ? this._clips[e].clip.duration : 0
                }
            }, {
                key: "playClip",
                value: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    for (var n in this._activeClips)
                        this._activeClips[n].stop(t);
                    for (var i = 0; i < this._clips.length; i++)
                        this._clips[i].loop && this._clips[i].stop(t);
                    e ? e.loop ? e.play(t) : this._activeClips.push(e.clone().play(t)) : console.warn("playClip: not found", this._clips)
                }
            }, {
                key: "update",
                value: function() {
                    var e = Li.getInstance().time
                      , t = e - this._previousTime
                      , n = []
                      , i = !1;
                    for (var r in this._activeClips)
                        i = this._activeClips[r].update(t) || i,
                        this._activeClips[r].blendProgress > 0 && n.push(this._activeClips[r]);
                    this._activeClips = n;
                    for (var s = 0; s < this._clips.length; s++)
                        this._clips[s].loop && (i = this._clips[s].update(t) || i);
                    this._previousTime = e,
                    this.applyAnimation()
                }
            }, {
                key: "playAnimationData",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    Ci.doLogs && console.log("playAnimationData", e, this._animations),
                    e.ids.length > 0 || (t && t.call(this),
                    Ci.doLogs && console.log("animation has no transform: ", e))
                }
            }, {
                key: "playAnimation",
                value: function(e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    Ci.doLogs && console.log("playAnimation", e);
                    var n = this.getClipByName(e);
                    return !!n && (this.playClip(n, t),
                    !0)
                }
            }, {
                key: "applyAnimation",
                value: function() {
                    var e = [];
                    for (var t in this._activeClips) {
                        var n = this._activeClips[t];
                        n.blendProgress && e.push({
                            clip: n.clip,
                            weight: n.blendProgress,
                            time: n.time
                        })
                    }
                    for (var i = 0; i < this._clips.length; i++)
                        if (this._clips[i].loop) {
                            var r = this._clips[i];
                            r.blendProgress && e.push({
                                clip: r.clip,
                                weight: r.blendProgress,
                                time: r.time
                            })
                        }
                    if (e.length)
                        for (var s = 0; s < this._animators.length; s++)
                            this._animators[s].applyAnimations(e)
                }
            }, {
                key: "destruct",
                value: function() {
                    !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    if (this._animations)
                        for (var e = 0; e < this._animations.length; e++)
                            this._animations[e] && this._animations[e].destruct();
                    if (this._animations = null,
                    this._animators) {
                        for (var n = 0; n < this._animators.length; n++)
                            this._animators[n].destruct();
                        this._animators = null
                    }
                    q()(D()(t.prototype), "destruct", this).call(this)
                }
            }, {
                key: "animatorsById",
                get: function() {
                    return this._animatorsById
                }
            }, {
                key: "clips",
                get: function() {
                    return this._clips
                }
            }, {
                key: "animations",
                get: function() {
                    return this._animations
                }
            }]),
            t
        }(vi);
        Oi.BLEND_DURATION = .5;
        var Ni = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                  , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
                L()(this, e),
                this.v = yi.f.fromValues(t, n, i, r)
            }
            return O()(e, [{
                key: "clone",
                value: function() {
                    return new e(this.x,this.y,this.z,this.w)
                }
            }, {
                key: "copy",
                value: function(e) {
                    return yi.f.set(this.v, e.x, e.y, e.z, e.w),
                    this
                }
            }, {
                key: "setValues",
                value: function(e, t, n, i) {
                    return yi.f.set(this.v, e, t, n, i),
                    this
                }
            }, {
                key: "dot",
                value: function(e) {
                    return yi.f.dot(this.v, e.v)
                }
            }, {
                key: "transform",
                value: function(e) {
                    return yi.f.transformMat4(this.v, this.v, e),
                    this
                }
            }, {
                key: "x",
                get: function() {
                    return this.v[0]
                },
                set: function(e) {
                    this.v[0] = e
                }
            }, {
                key: "y",
                get: function() {
                    return this.v[1]
                },
                set: function(e) {
                    this.v[1] = e
                }
            }, {
                key: "z",
                get: function() {
                    return this.v[2]
                },
                set: function(e) {
                    this.v[2] = e
                }
            }, {
                key: "w",
                get: function() {
                    return this.v[3]
                },
                set: function(e) {
                    this.v[3] = e
                }
            }], [{
                key: "dot",
                value: function(e, t) {
                    return yi.f.dot(e.v, t.v)
                }
            }, {
                key: "transform",
                value: function(e, t, n) {
                    return yi.f.transformMat4(e.v, t.v, n),
                    e
                }
            }]),
            e
        }();
        Ni.ZERO = new Ni;
        var Fi, Bi = Ni, Di = function e() {
            L()(this, e),
            this.transformIds = [],
            this.visible = !0
        }, Ui = function e() {
            L()(this, e),
            this.materialsNames = [],
            this.emission = 1
        }, zi = function e() {
            L()(this, e),
            this.textureIndex = 0,
            this.textureNames = []
        }, Hi = function() {
            function e() {
                L()(this, e),
                this.screenPosition = new Bi
            }
            return O()(e, [{
                key: "name",
                get: function() {
                    return this.transform.name
                }
            }, {
                key: "visible",
                get: function() {
                    return this.screenPosition.z > 0 && this.screenPosition.x > 0 && this.screenPosition.x < 1 && this.screenPosition.y > 0 && this.screenPosition.y < 1
                }
            }]),
            e
        }(), Gi = function(e) {
            function t() {
                var e;
                return L()(this, t),
                (e = F()(this, D()(t).apply(this, arguments))).selectionSets = [],
                e.animationDatas = [],
                e.emissionSets = [],
                e.textureSwaps = [],
                e.hotspots = [],
                e
            }
            return z()(t, e),
            O()(t, [{
                key: "destruct",
                value: function() {
                    this.selectionSets = null,
                    this.animationDatas = null,
                    this.emissionSets = null,
                    this.textureSwaps = null,
                    q()(D()(t.prototype), "destruct", this).call(this)
                }
            }]),
            t
        }(vi), $i = function() {
            function e() {
                L()(this, e)
            }
            return O()(e, null, [{
                key: "parseComponents",
                value: function(e, t) {
                    var n = t.components;
                    if (e.selectionSets) {
                        var i = !0
                          , r = !1
                          , s = void 0;
                        try {
                            for (var a, o = e.selectionSets[Symbol.iterator](); !(i = (a = o.next()).done); i = !0) {
                                var l = a.value
                                  , h = new Di;
                                h.name = l.name,
                                null != l.visible && (h.visible = l.visible);
                                for (var u = 0; u < l.ids.length; u++)
                                    t.getTransformById(l.ids[u]) ? console.error("selectionSets: transform not found: this can be caused by a disabled gameObject in unity") : h.transformIds.push(l.ids[u]);
                                n.selectionSets.push(h)
                            }
                        } catch (X) {
                            r = !0,
                            s = X
                        } finally {
                            try {
                                i || null == o.return || o.return()
                            } finally {
                                if (r)
                                    throw s
                            }
                        }
                    }
                    if (e.animationInfos) {
                        var c = !0
                          , v = !1
                          , d = void 0;
                        try {
                            for (var f, _ = e.animationInfos[Symbol.iterator](); !(c = (f = _.next()).done); c = !0) {
                                var p = f.value
                                  , m = {};
                                m.name = p.name,
                                m.startTime = p.startFrame / 30,
                                m.endTime = p.endFrame / 30,
                                m.looping = p.looping,
                                p.ids ? m.ids = p.ids : m.ids = [],
                                n.animationDatas.push(m)
                            }
                        } catch (X) {
                            v = !0,
                            d = X
                        } finally {
                            try {
                                c || null == _.return || _.return()
                            } finally {
                                if (v)
                                    throw d
                            }
                        }
                    }
                    if (e.emissionSets) {
                        var g = !0
                          , y = !1
                          , E = void 0;
                        try {
                            for (var T, R = e.emissionSets[Symbol.iterator](); !(g = (T = R.next()).done); g = !0) {
                                var A = T.value
                                  , x = new Ui;
                                x.name = A.name,
                                x.materialsNames = A.materialNames,
                                x.emission = A.emission,
                                n.emissionSets.push(x)
                            }
                        } catch (X) {
                            y = !0,
                            E = X
                        } finally {
                            try {
                                g || null == R.return || R.return()
                            } finally {
                                if (y)
                                    throw E
                            }
                        }
                    }
                    if (e.textureSwaps) {
                        var k = !0
                          , b = !1
                          , M = void 0;
                        try {
                            for (var w, S = e.textureSwaps[Symbol.iterator](); !(k = (w = S.next()).done); k = !0) {
                                var C = w.value
                                  , I = new zi;
                                I.name = C.name;
                                var P = !0
                                  , L = !1
                                  , V = void 0;
                                try {
                                    for (var O, N = C.textureNames[Symbol.iterator](); !(P = (O = N.next()).done); P = !0) {
                                        var F = O.value;
                                        I.textureNames.push(F)
                                    }
                                } catch (X) {
                                    L = !0,
                                    V = X
                                } finally {
                                    try {
                                        P || null == N.return || N.return()
                                    } finally {
                                        if (L)
                                            throw V
                                    }
                                }
                                I.textureIndex = C.textureIndex,
                                n.textureSwaps.push(I)
                            }
                        } catch (X) {
                            b = !0,
                            M = X
                        } finally {
                            try {
                                k || null == S.return || S.return()
                            } finally {
                                if (b)
                                    throw M
                            }
                        }
                    }
                    if (e.hotspots) {
                        var B = !0
                          , D = !1
                          , U = void 0;
                        try {
                            for (var z, H = e.hotspots[Symbol.iterator](); !(B = (z = H.next()).done); B = !0) {
                                var G = z.value
                                  , $ = new Hi;
                                $.transform = t.getTransformById(G.transformID),
                                $.size = G.size,
                                n.hotspots.push($)
                            }
                        } catch (X) {
                            D = !0,
                            U = X
                        } finally {
                            try {
                                B || null == H.return || H.return()
                            } finally {
                                if (D)
                                    throw U
                            }
                        }
                    }
                    return n
                }
            }]),
            e
        }();
        !function(e) {
            e.HotspotClicked = "HotspotClicked",
            e.HotspotClickedFromWebglUI = "HotspotClickedFromWebglUI",
            e.CameraMoved = "CameraMoved",
            e.CameraStopped = "CameraStopped"
        }(Fi || (Fi = {}));
        var Xi = function() {
            function e() {
                L()(this, e),
                this.listeners = []
            }
            return O()(e, [{
                key: "dispatch",
                value: function(e) {
                    for (var t = 0; t < this.listeners.length; t++)
                        this.listeners[t].call(this, e)
                }
            }]),
            e
        }()
          , Wi = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            O()(t, null, [{
                key: "dispatchEvent",
                value: function(e, n) {
                    t.events[e] || (t.events[e] = new Xi),
                    t.events[e].dispatch(n)
                }
            }, {
                key: "addEventListener",
                value: function(e, n) {
                    t.events[e] || (t.events[e] = new Xi),
                    t.events[e].listeners.push(n)
                }
            }, {
                key: "removeEventListener",
                value: function(e) {
                    for (var n in t.events) {
                        var i = t.events[n]
                          , r = i.listeners.indexOf(e, 0);
                        r > -1 && (Ci.doLogs && console.log("removed EventListener", i, r),
                        i.listeners.splice(r, 1))
                    }
                }
            }]),
            t
        }(vi);
        Wi.events = {};
        var ji = function() {
            function e(t) {
                L()(this, e),
                this._model = t,
                this.refreshUI()
            }
            return O()(e, [{
                key: "refreshUI",
                value: function() {
                    var e = this;
                    this._datGui && this._datGui.destruct(),
                    Ci.isDebugMode && (this._datGui = new xi(null));
                    var t = this._model
                      , n = new ki
                      , i = t.rootTransform;
                    n.init(i.name);
                    var r = t.components.selectionSets;
                    if (r && r.length > 0)
                        for (var s = n.addGroup("selectionSets"), a = function(t) {
                            var n = r[t];
                            s.addParamBool(n.name, n.visible, function(t) {
                                return e._model.setSetEnabled(n.name, t)
                            })
                        }, o = 0; o < r.length; o++)
                            a(o);
                    var l = t.components.animationDatas;
                    if (l && l.length > 0) {
                        var h = n.addGroup("animations")
                          , u = function(t) {
                            var n = l[t];
                            h.addButton(n.name, function() {
                                return e._model.playAnimationData.bind(e._model, n.name)()
                            })
                        };
                        for (o = 0; o < l.length; o++)
                            u(o)
                    }
                    var c = t.components.hotspots;
                    if (c && c.length > 0) {
                        var v = n.addGroup("hotspots")
                          , d = function(e) {
                            var t = c[e];
                            v.addButton(t.transform.name, function() {
                                return Wi.dispatchEvent(Fi.HotspotClickedFromWebglUI, t)
                            })
                        };
                        for (o = 0; o < c.length; o++)
                            d(o)
                    }
                    var f = this._model.unityAnimator.clips;
                    if (f.length > 0) {
                        var _ = n.addGroup("clips")
                          , p = function(t) {
                            var n = f[t].clip;
                            _.addButton(n.name, function() {
                                return e._model.playAnimation.bind(e._model, n.name)()
                            })
                        };
                        for (o = 0; o < f.length; o++)
                            p(o)
                    }
                    for (o = 0; o < n.children.length; o++)
                        n.children[o].collapsed = !0;
                    this._datGui && this._datGui.init(n)
                }
            }, {
                key: "destruct",
                value: function() {
                    this._datGui && (this._datGui.destruct(),
                    this._datGui = null),
                    this._model = null
                }
            }], [{
                key: "getneedsUI",
                value: function(e, t) {
                    return Ci.isDebugMode && (e.selectionSets.length > 0 || e.animationDatas.length > 0 || e.hotspots.length > 0 || e.emissionSets.length > 0 || e.textureSwaps.length > 0) || t.length > 0
                }
            }]),
            e
        }()
          , Yi = function() {
            function e() {
                L()(this, e)
            }
            return O()(e, null, [{
                key: "setSetEnabled",
                value: function(e, t, n) {
                    Ci.doLogs && console.log("setSetEnabled", e, t, n);
                    for (var i = e.components.selectionSets, r = 0; r < i.length; r++) {
                        var s = i[r];
                        if (s.name == t) {
                            s.visible != n && (s.visible = n,
                            this.handleSetVisibilityChange(e));
                            break
                        }
                    }
                }
            }, {
                key: "handleSetVisibilityChange",
                value: function(e) {
                    Ci.doLogs && console.log("handleSetVisibilityChange", e);
                    var t = e.components.selectionSets
                      , n = !0
                      , i = !1
                      , r = void 0;
                    try {
                        for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done); n = !0) {
                            var o = s.value
                              , l = !0
                              , h = !1
                              , u = void 0;
                            try {
                                for (var c, v = o.transformIds[Symbol.iterator](); !(l = (c = v.next()).done); l = !0) {
                                    var d = c.value
                                      , f = e.unityRenderer.getRendererById(d);
                                    if (null != f) {
                                        var _ = !0
                                          , p = !1
                                          , m = void 0;
                                        try {
                                            for (var g, y = f[Symbol.iterator](); !(_ = (g = y.next()).done); _ = !0) {
                                                g.value.visible = !1
                                            }
                                        } catch (D) {
                                            p = !0,
                                            m = D
                                        } finally {
                                            try {
                                                _ || null == y.return || y.return()
                                            } finally {
                                                if (p)
                                                    throw m
                                            }
                                        }
                                    } else
                                        console.warn("handleSetVisibilityChange: id not present in model: ", d, "set: ", o.name)
                                }
                            } catch (D) {
                                h = !0,
                                u = D
                            } finally {
                                try {
                                    l || null == v.return || v.return()
                                } finally {
                                    if (h)
                                        throw u
                                }
                            }
                        }
                    } catch (D) {
                        i = !0,
                        r = D
                    } finally {
                        try {
                            n || null == a.return || a.return()
                        } finally {
                            if (i)
                                throw r
                        }
                    }
                    var E = !0
                      , T = !1
                      , R = void 0;
                    try {
                        for (var A, x = t[Symbol.iterator](); !(E = (A = x.next()).done); E = !0) {
                            var k = A.value
                              , b = !0
                              , M = !1
                              , w = void 0;
                            try {
                                for (var S, C = k.transformIds[Symbol.iterator](); !(b = (S = C.next()).done); b = !0) {
                                    var I = S.value
                                      , P = e.unityRenderer.getRendererById(I);
                                    if (null != P) {
                                        var L = !0
                                          , V = !1
                                          , O = void 0;
                                        try {
                                            for (var N, F = P[Symbol.iterator](); !(L = (N = F.next()).done); L = !0) {
                                                var B = N.value;
                                                B.visible = B.visible || k.visible
                                            }
                                        } catch (D) {
                                            V = !0,
                                            O = D
                                        } finally {
                                            try {
                                                L || null == F.return || F.return()
                                            } finally {
                                                if (V)
                                                    throw O
                                            }
                                        }
                                    } else
                                        console.warn("handleSetVisibilityChange: id not present in model: ", I, "set: ", k.name)
                                }
                            } catch (D) {
                                M = !0,
                                w = D
                            } finally {
                                try {
                                    b || null == C.return || C.return()
                                } finally {
                                    if (M)
                                        throw w
                                }
                            }
                        }
                    } catch (D) {
                        T = !0,
                        R = D
                    } finally {
                        try {
                            E || null == x.return || x.return()
                        } finally {
                            if (T)
                                throw R
                        }
                    }
                }
            }]),
            e
        }()
          , qi = function(e) {
            function t(e) {
                var n;
                return L()(this, t),
                (n = F()(this, D()(t).call(this)))._transforms = [],
                n._transformsById = {},
                n._failedToLoad = !1,
                n._unityRenderer = new Pi(e),
                n._unityAnimator = new Oi,
                n._unityComponents = new Gi,
                n
            }
            return z()(t, e),
            O()(t, [{
                key: "handleLoaded",
                value: function() {
                    this._unityRenderer.handleLoaded(),
                    this._modelUI && this._modelUI.destruct();
                    var e = this._unityAnimator.clips;
                    ji.getneedsUI(this.components, e) && (this._modelUI = new ji(this))
                }
            }, {
                key: "update",
                value: function() {
                    this._unityAnimator.update(),
                    this._unityRenderer.update()
                }
            }, {
                key: "draw",
                value: function(e) {
                    this._unityRenderer.draw(e, this._unityAnimator.animatorsById),
                    this._unityRenderer.drawTransparent(e)
                }
            }, {
                key: "addTransform",
                value: function(e) {
                    this._transforms.push(e),
                    this._transformsById[e.id] = e
                }
            }, {
                key: "getTransformById",
                value: function(e) {
                    return this._transformsById[e]
                }
            }, {
                key: "playAnimation",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return this.unityAnimator.playAnimation(e, t > 0)
                }
            }, {
                key: "playAnimationData",
                value: function(e) {
                    for (var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = 0; r < this.components.animationDatas.length; r++)
                        if (e == this.components.animationDatas[r].name)
                            return t = this.components.animationDatas[r],
                            this.unityAnimator.playAnimationData(t, n, i),
                            !0;
                    if (!t)
                        return console.error("playAnimation: not found", e, this.components.animationDatas),
                        !1
                }
            }, {
                key: "setSetEnabled",
                value: function(e, t) {
                    Yi.setSetEnabled(this, e, t),
                    this._unityRenderer.sortByMaterial()
                }
            }, {
                key: "destruct",
                value: function() {
                    !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    if (this._unityAnimator.destruct(),
                    this._unityRenderer.destruct(),
                    this._transforms) {
                        for (var e = 0; e < this._transforms.length; e++)
                            this._transforms[e] && this._transforms[e].destruct();
                        this._transforms = null
                    }
                    this._transformsById = null,
                    this._unityComponents && (this._unityComponents.destruct(),
                    this._unityComponents = null),
                    this._modelUI && (this._modelUI.destruct(),
                    this._modelUI = null),
                    q()(D()(t.prototype), "destruct", this).call(this)
                }
            }, {
                key: "unityRenderer",
                get: function() {
                    return this._unityRenderer
                }
            }, {
                key: "unityAnimator",
                get: function() {
                    return this._unityAnimator
                }
            }, {
                key: "transforms",
                get: function() {
                    return this._transforms
                }
            }, {
                key: "components",
                get: function() {
                    return this._unityComponents
                },
                set: function(e) {
                    this._unityComponents = e
                }
            }, {
                key: "rootTransform",
                get: function() {
                    return this.transforms[0]
                }
            }, {
                key: "ui",
                get: function() {
                    return this._modelUI
                }
            }, {
                key: "failedToLoad",
                set: function(e) {
                    this._failedToLoad = e
                },
                get: function() {
                    return this._failedToLoad
                }
            }]),
            t
        }(vi);
        function Ki(e) {
            return k(b).getVariable(T.VERSIONED_STATIC_ROOT) + "webgl/" + e
        }
        var Zi = function() {
            function e() {
                L()(this, e)
            }
            return O()(e, null, [{
                key: "cacheIsPathRequested",
                value: function(t) {
                    return e._clientCache[t]
                }
            }, {
                key: "cacheRegisterRequested",
                value: function(t, n) {
                    e._clientCache[t] = n
                }
            }, {
                key: "cacheRegisterCallback",
                value: function(t, n) {
                    e._clientCacheCallbacks[t] || (e._clientCacheCallbacks[t] = []),
                    e._clientCacheCallbacks[t].push(n)
                }
            }, {
                key: "cacheRequestDone",
                value: function(t, n) {
                    var i = e._clientCacheCallbacks[t];
                    if (i)
                        for (var r = 0; r < i.length; r++)
                            i[r](n);
                    e._clientCacheCallbacks[t] = null,
                    e._clientCache[t] = !1
                }
            }, {
                key: "cacheRequestError",
                value: function(t) {
                    var n = e._clientCacheCallbacks[t];
                    if (n)
                        for (var i = 0; i < n.length; i++)
                            n[i](null);
                    e._clientCacheCallbacks[t] = null,
                    e._clientCache[t] = !1
                }
            }, {
                key: "loadText",
                value: function(t, n) {
                    if (e.cacheRegisterCallback(t, n),
                    !e.cacheIsPathRequested(t)) {
                        var i = new XMLHttpRequest;
                        e.cacheRegisterRequested(t, i),
                        i.onreadystatechange = function(n) {
                            4 === i.readyState && (200 === i.status ? e.cacheRequestDone(t, i.responseText) : e.cacheRequestError(t))
                        }
                        ,
                        i.open("GET", t, !0),
                        i.send()
                    }
                }
            }, {
                key: "loadArrayBuffer",
                value: function(t, n) {
                    if (e.cacheRegisterCallback(t, n),
                    !e.cacheIsPathRequested(t)) {
                        var i = new XMLHttpRequest;
                        e.cacheRegisterRequested(t, i),
                        i.open("GET", t, !0),
                        i.responseType = "arraybuffer",
                        i.send(),
                        i.onreadystatechange = function(n) {
                            4 === i.readyState && e.cacheRequestDone(t, i.response)
                        }
                    }
                }
            }, {
                key: "loadImage",
                value: function(t, n) {
                    if (e.cacheRegisterCallback(t, n),
                    e.cacheIsPathRequested(t))
                        return e.cacheIsPathRequested(t);
                    var i = new Image;
                    return e.cacheRegisterRequested(t, i),
                    i.crossOrigin = "Anonymous",
                    i.onload = function() {
                        e.cacheRequestDone(t, i)
                    }
                    ,
                    i.onerror = function() {
                        console.log("TextureLoader: could not load image", t),
                        e.cacheRequestDone(t, i)
                    }
                    ,
                    i.src = t,
                    i
                }
            }, {
                key: "loadMultipleImages",
                value: function(t, n) {
                    for (var i = this, r = t.length, s = [], a = function(e) {
                        return function(t) {
                            r--,
                            s[e] = t,
                            0 === r && n.call(i, s)
                        }
                    }, o = 0; o < t.length; ++o)
                        e.loadImage(t[o], a(o))
                }
            }, {
                key: "loadSingleFromRequireContext",
                value: function(e, t) {
                    return new Promise(function(n, i) {
                        var r;
                        try {
                            r = e("./".concat(t.replace(/^\.\//, "")))
                        } catch (s) {
                            i(s)
                        }
                        "function" === typeof r ? r(n) : n(r)
                    }
                    )
                }
            }, {
                key: "loadFromRequireContext",
                value: function(t, n, i) {
                    Promise.all(n.map(function(n) {
                        return e.loadSingleFromRequireContext(t, n)
                    })).then(function(e) {
                        return i(e)
                    })
                }
            }, {
                key: "loadMultipleTexts",
                value: function(t, n) {
                    for (var i = this, r = t.length, s = [], a = function(e) {
                        return function(t) {
                            r--,
                            s[e] = t,
                            0 === r && n.apply(i, s)
                        }
                    }, o = 0; o < t.length; ++o)
                        e.loadText(t[o], a(o))
                }
            }]),
            e
        }();
        Zi._clientCache = {},
        Zi._clientCacheCallbacks = {};
        var Ji = function() {
            function e(t, n) {
                L()(this, e),
                this.loaded = !1,
                this._url = n,
                t.add(this)
            }
            return O()(e, [{
                key: "load",
                value: function(e) {
                    var t = this;
                    Zi.loadText(this._url, function(n) {
                        t.text_ = n,
                        t.loaded = !0,
                        e.call(t)
                    })
                }
            }, {
                key: "text",
                get: function() {
                    if (void 0 === this.text_)
                        throw new Error("Trying to get TextLoader.text property but loading is not complete for: ".concat(this._url));
                    return this.text_
                }
            }]),
            e
        }()
          , Qi = function e() {
            L()(this, e)
        };
        Qi.ACTIVE_ATTRIBUTES = 35721,
        Qi.ACTIVE_ATTRIBUTE_MAX_LENGTH = 35722,
        Qi.ACTIVE_TEXTURE = 34016,
        Qi.ACTIVE_UNIFORMS = 35718,
        Qi.ACTIVE_UNIFORM_MAX_LENGTH = 35719,
        Qi.ALIASED_LINE_WIDTH_RANGE = 33902,
        Qi.ALIASED_POINT_SIZE_RANGE = 33901,
        Qi.ALPHA = 6406,
        Qi.ALPHA_BITS = 3413,
        Qi.ALWAYS = 519,
        Qi.ARRAY_BUFFER = 34962,
        Qi.ARRAY_BUFFER_BINDING = 34964,
        Qi.ATTACHED_SHADERS = 35717,
        Qi.BACK = 1029,
        Qi.BLEND = 3042,
        Qi.BLEND_COLOR = 32773,
        Qi.BLEND_DST_ALPHA = 32970,
        Qi.BLEND_DST_RGB = 32968,
        Qi.BLEND_EQUATION = 32777,
        Qi.BLEND_EQUATION_ALPHA = 34877,
        Qi.BLEND_EQUATION_RGB = 32777,
        Qi.BLEND_SRC_ALPHA = 32971,
        Qi.BLEND_SRC_RGB = 32969,
        Qi.BLUE_BITS = 3412,
        Qi.BOOL = 35670,
        Qi.BOOL_VEC2 = 35671,
        Qi.BOOL_VEC3 = 35672,
        Qi.BOOL_VEC4 = 35673,
        Qi.BROWSER_DEFAULT_WEBGL = 37444,
        Qi.BUFFER_SIZE = 34660,
        Qi.BUFFER_USAGE = 34661,
        Qi.BYTE = 5120,
        Qi.CCW = 2305,
        Qi.CLAMP_TO_EDGE = 33071,
        Qi.COLOR_ATTACHMENT0 = 36064,
        Qi.COLOR_BUFFER_BIT = 16384,
        Qi.COLOR_CLEAR_VALUE = 3106,
        Qi.COLOR_WRITEMASK = 3107,
        Qi.COMPILE_STATUS = 35713,
        Qi.COMPRESSED_TEXTURE_FORMATS = 34467,
        Qi.CONSTANT_ALPHA = 32771,
        Qi.CONSTANT_COLOR = 32769,
        Qi.CONTEXT_LOST_WEBGL = 37442,
        Qi.CULL_FACE = 2884,
        Qi.CULL_FACE_MODE = 2885,
        Qi.CURRENT_PROGRAM = 35725,
        Qi.CURRENT_VERTEX_ATTRIB = 34342,
        Qi.CW = 2304,
        Qi.DECR = 7683,
        Qi.DECR_WRAP = 34056,
        Qi.DELETE_STATUS = 35712,
        Qi.DEPTH_ATTACHMENT = 36096,
        Qi.DEPTH_BITS = 3414,
        Qi.DEPTH_BUFFER_BIT = 256,
        Qi.DEPTH_CLEAR_VALUE = 2931,
        Qi.DEPTH_COMPONENT = 6402,
        Qi.DEPTH_COMPONENT16 = 33189,
        Qi.DEPTH_FUNC = 2932,
        Qi.DEPTH_RANGE = 2928,
        Qi.DEPTH_STENCIL = 34041,
        Qi.DEPTH_STENCIL_ATTACHMENT = 33306,
        Qi.DEPTH_TEST = 2929,
        Qi.DEPTH_WRITEMASK = 2930,
        Qi.DITHER = 3024,
        Qi.DONT_CARE = 4352,
        Qi.DST_ALPHA = 772,
        Qi.DST_COLOR = 774,
        Qi.DYNAMIC_DRAW = 35048,
        Qi.ELEMENT_ARRAY_BUFFER = 34963,
        Qi.ELEMENT_ARRAY_BUFFER_BINDING = 34965,
        Qi.EQUAL = 514,
        Qi.FASTEST = 4353,
        Qi.FLOAT = 5126,
        Qi.FLOAT_MAT2 = 35674,
        Qi.FLOAT_MAT3 = 35675,
        Qi.FLOAT_MAT4 = 35676,
        Qi.FLOAT_VEC2 = 35664,
        Qi.FLOAT_VEC3 = 35665,
        Qi.FLOAT_VEC4 = 35666,
        Qi.FRAGMENT_SHADER = 35632,
        Qi.FRAMEBUFFER = 36160,
        Qi.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049,
        Qi.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048,
        Qi.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051,
        Qi.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050,
        Qi.FRAMEBUFFER_BINDING = 36006,
        Qi.FRAMEBUFFER_COMPLETE = 36053,
        Qi.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054,
        Qi.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057,
        Qi.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055,
        Qi.FRAMEBUFFER_UNSUPPORTED = 36061,
        Qi.FRONT = 1028,
        Qi.FRONT_AND_BACK = 1032,
        Qi.FRONT_FACE = 2886,
        Qi.FUNC_ADD = 32774,
        Qi.FUNC_REVERSE_SUBTRACT = 32779,
        Qi.FUNC_SUBTRACT = 32778,
        Qi.GENERATE_MIPMAP_HINT = 33170,
        Qi.GEQUAL = 518,
        Qi.GREATER = 516,
        Qi.GREEN_BITS = 3411,
        Qi.HIGH_FLOAT = 36338,
        Qi.HIGH_INT = 36341,
        Qi.INCR = 7682,
        Qi.INCR_WRAP = 34055,
        Qi.INFO_LOG_LENGTH = 35716,
        Qi.INT = 5124,
        Qi.INT_VEC2 = 35667,
        Qi.INT_VEC3 = 35668,
        Qi.INT_VEC4 = 35669,
        Qi.INVALID_ENUM = 1280,
        Qi.INVALID_FRAMEBUFFER_OPERATION = 1286,
        Qi.INVALID_OPERATION = 1282,
        Qi.INVALID_VALUE = 1281,
        Qi.INVERT = 5386,
        Qi.KEEP = 7680,
        Qi.LEQUAL = 515,
        Qi.LESS = 513,
        Qi.LINEAR = 9729,
        Qi.LINEAR_MIPMAP_LINEAR = 9987,
        Qi.LINEAR_MIPMAP_NEAREST = 9985,
        Qi.LINES = 1,
        Qi.LINE_LOOP = 2,
        Qi.LINE_STRIP = 3,
        Qi.LINE_WIDTH = 2849,
        Qi.LINK_STATUS = 35714,
        Qi.LOW_FLOAT = 36336,
        Qi.LOW_INT = 36339,
        Qi.LUMINANCE = 6409,
        Qi.LUMINANCE_ALPHA = 6410,
        Qi.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661,
        Qi.MAX_CUBE_MAP_TEXTURE_SIZE = 34076,
        Qi.MAX_FRAGMENT_UNIFORM_VECTORS = 36349,
        Qi.MAX_RENDERBUFFER_SIZE = 34024,
        Qi.MAX_TEXTURE_IMAGE_UNITS = 34930,
        Qi.MAX_TEXTURE_SIZE = 3379,
        Qi.MAX_VARYING_VECTORS = 36348,
        Qi.MAX_VERTEX_ATTRIBS = 34921,
        Qi.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660,
        Qi.MAX_VERTEX_UNIFORM_VECTORS = 36347,
        Qi.MAX_VIEWPORT_DIMS = 3386,
        Qi.MEDIUM_FLOAT = 36337,
        Qi.MEDIUM_INT = 36340,
        Qi.MIRRORED_REPEAT = 33648,
        Qi.NEAREST = 9728,
        Qi.NEAREST_MIPMAP_LINEAR = 9986,
        Qi.NEAREST_MIPMAP_NEAREST = 9984,
        Qi.NEVER = 512,
        Qi.NICEST = 4354,
        Qi.NONE = 0,
        Qi.NOTEQUAL = 517,
        Qi.NO_ERROR = 0,
        Qi.NUM_COMPRESSED_TEXTURE_FORMATS = 34466,
        Qi.ONE = 1,
        Qi.ONE_MINUS_CONSTANT_ALPHA = 32772,
        Qi.ONE_MINUS_CONSTANT_COLOR = 32770,
        Qi.ONE_MINUS_DST_ALPHA = 773,
        Qi.ONE_MINUS_DST_COLOR = 775,
        Qi.ONE_MINUS_SRC_ALPHA = 771,
        Qi.ONE_MINUS_SRC_COLOR = 769,
        Qi.OUT_OF_MEMORY = 1285,
        Qi.PACK_ALIGNMENT = 3333,
        Qi.POINTS = 0,
        Qi.POLYGON_OFFSET_FACTOR = 32824,
        Qi.POLYGON_OFFSET_FILL = 32823,
        Qi.POLYGON_OFFSET_UNITS = 10752,
        Qi.RED_BITS = 3410,
        Qi.RENDERBUFFER = 36161,
        Qi.RENDERBUFFER_ALPHA_SIZE = 36179,
        Qi.RENDERBUFFER_BINDING = 36007,
        Qi.RENDERBUFFER_BLUE_SIZE = 36178,
        Qi.RENDERBUFFER_DEPTH_SIZE = 36180,
        Qi.RENDERBUFFER_GREEN_SIZE = 36177,
        Qi.RENDERBUFFER_HEIGHT = 36163,
        Qi.RENDERBUFFER_INTERNAL_FORMAT = 36164,
        Qi.RENDERBUFFER_RED_SIZE = 36176,
        Qi.RENDERBUFFER_STENCIL_SIZE = 36181,
        Qi.RENDERBUFFER_WIDTH = 36162,
        Qi.RENDERER = 7937,
        Qi.REPEAT = 10497,
        Qi.REPLACE = 7681,
        Qi.RGB = 6407,
        Qi.RGB5_A1 = 32855,
        Qi.RGB565 = 36194,
        Qi.RGBA = 6408,
        Qi.RGBA4 = 32854,
        Qi.SAMPLER_2D = 35678,
        Qi.SAMPLER_CUBE = 35680,
        Qi.SAMPLES = 32937,
        Qi.SAMPLE_ALPHA_TO_COVERAGE = 32926,
        Qi.SAMPLE_BUFFERS = 32936,
        Qi.SAMPLE_COVERAGE = 32928,
        Qi.SAMPLE_COVERAGE_INVERT = 32939,
        Qi.SAMPLE_COVERAGE_VALUE = 32938,
        Qi.SCISSOR_BOX = 3088,
        Qi.SCISSOR_TEST = 3089,
        Qi.SHADER_COMPILER = 36346,
        Qi.SHADER_SOURCE_LENGTH = 35720,
        Qi.SHADER_TYPE = 35663,
        Qi.SHADING_LANGUAGE_VERSION = 35724,
        Qi.SHORT = 5122,
        Qi.SRC_ALPHA = 770,
        Qi.SRC_ALPHA_SATURATE = 776,
        Qi.SRC_COLOR = 768,
        Qi.STATIC_DRAW = 35044,
        Qi.STENCIL_ATTACHMENT = 36128,
        Qi.STENCIL_BACK_FAIL = 34817,
        Qi.STENCIL_BACK_FUNC = 34816,
        Qi.STENCIL_BACK_PASS_DEPTH_FAIL = 34818,
        Qi.STENCIL_BACK_PASS_DEPTH_PASS = 34819,
        Qi.STENCIL_BACK_REF = 36003,
        Qi.STENCIL_BACK_VALUE_MASK = 36004,
        Qi.STENCIL_BACK_WRITEMASK = 36005,
        Qi.STENCIL_BITS = 3415,
        Qi.STENCIL_BUFFER_BIT = 1024,
        Qi.STENCIL_CLEAR_VALUE = 2961,
        Qi.STENCIL_FAIL = 2964,
        Qi.STENCIL_FUNC = 2962,
        Qi.STENCIL_INDEX = 6401,
        Qi.STENCIL_INDEX8 = 36168,
        Qi.STENCIL_PASS_DEPTH_FAIL = 2965,
        Qi.STENCIL_PASS_DEPTH_PASS = 2966,
        Qi.STENCIL_REF = 2967,
        Qi.STENCIL_TEST = 2960,
        Qi.STENCIL_VALUE_MASK = 2963,
        Qi.STENCIL_WRITEMASK = 2968,
        Qi.STREAM_DRAW = 35040,
        Qi.SUBPIXEL_BITS = 3408,
        Qi.TEXTURE = 5890,
        Qi.TEXTURE0 = 33984,
        Qi.TEXTURE1 = 33985,
        Qi.TEXTURE2 = 33986,
        Qi.TEXTURE3 = 33987,
        Qi.TEXTURE4 = 33988,
        Qi.TEXTURE5 = 33989,
        Qi.TEXTURE6 = 33990,
        Qi.TEXTURE7 = 33991,
        Qi.TEXTURE8 = 33992,
        Qi.TEXTURE9 = 33993,
        Qi.TEXTURE10 = 33994,
        Qi.TEXTURE11 = 33995,
        Qi.TEXTURE12 = 33996,
        Qi.TEXTURE13 = 33997,
        Qi.TEXTURE14 = 33998,
        Qi.TEXTURE15 = 33999,
        Qi.TEXTURE16 = 34e3,
        Qi.TEXTURE17 = 34001,
        Qi.TEXTURE18 = 34002,
        Qi.TEXTURE19 = 34003,
        Qi.TEXTURE20 = 34004,
        Qi.TEXTURE21 = 34005,
        Qi.TEXTURE22 = 34006,
        Qi.TEXTURE23 = 34007,
        Qi.TEXTURE24 = 34008,
        Qi.TEXTURE25 = 34009,
        Qi.TEXTURE26 = 34010,
        Qi.TEXTURE27 = 34011,
        Qi.TEXTURE28 = 34012,
        Qi.TEXTURE29 = 34013,
        Qi.TEXTURE30 = 34014,
        Qi.TEXTURE31 = 34015,
        Qi.TEXTURE_2D = 3553,
        Qi.TEXTURE_BINDING_2D = 32873,
        Qi.TEXTURE_BINDING_CUBE_MAP = 34068,
        Qi.TEXTURE_CUBE_MAP = 34067,
        Qi.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070,
        Qi.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072,
        Qi.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074,
        Qi.TEXTURE_CUBE_MAP_POSITIVE_X = 34069,
        Qi.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071,
        Qi.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073,
        Qi.TEXTURE_MAG_FILTER = 10240,
        Qi.TEXTURE_MIN_FILTER = 10241,
        Qi.TEXTURE_WRAP_S = 10242,
        Qi.TEXTURE_WRAP_T = 10243,
        Qi.TRIANGLES = 4,
        Qi.TRIANGLE_FAN = 6,
        Qi.TRIANGLE_STRIP = 5,
        Qi.UNPACK_ALIGNMENT = 3317,
        Qi.UNPACK_COLORSPACE_CONVERSION_WEBGL = 37443,
        Qi.UNPACK_FLIP_Y_WEBGL = 37440,
        Qi.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441,
        Qi.UNSIGNED_BYTE = 5121,
        Qi.UNSIGNED_INT = 5125,
        Qi.UNSIGNED_SHORT = 5123,
        Qi.UNSIGNED_SHORT_4_4_4_4 = 32819,
        Qi.UNSIGNED_SHORT_5_5_5_1 = 32820,
        Qi.UNSIGNED_SHORT_5_6_5 = 33635,
        Qi.VALIDATE_STATUS = 35715,
        Qi.VENDOR = 7936,
        Qi.VERSION = 7938,
        Qi.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975,
        Qi.VERTEX_ATTRIB_ARRAY_ENABLED = 34338,
        Qi.VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922,
        Qi.VERTEX_ATTRIB_ARRAY_POINTER = 34373,
        Qi.VERTEX_ATTRIB_ARRAY_SIZE = 34339,
        Qi.VERTEX_ATTRIB_ARRAY_STRIDE = 34340,
        Qi.VERTEX_ATTRIB_ARRAY_TYPE = 34341,
        Qi.VERTEX_SHADER = 35633,
        Qi.VIEWPORT = 2978,
        Qi.ZERO = 0;
        var er = Qi
          , tr = function() {
            function e() {
                L()(this, e)
            }
            return O()(e, null, [{
                key: "log",
                value: function() {
                    if (e.ENABLED) {
                        for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                            n[i] = arguments[i];
                        console.log(n)
                    }
                }
            }, {
                key: "error",
                value: function() {
                    if (e.ENABLED) {
                        for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                            n[i] = arguments[i];
                        console.error(n)
                    }
                }
            }, {
                key: "getScreenLogDiv",
                value: function() {
                    return e._screenLogDiv || (e._screenLogDiv = e.createDebugDiv()),
                    e._screenLogDiv
                }
            }, {
                key: "logToScreen",
                value: function(t) {
                    e.ENABLED && (e._screenLogDiv || (e._screenLogDiv = e.createDebugDiv()),
                    e._screenLogDiv.innerHTML = t)
                }
            }, {
                key: "logAppendToScreen",
                value: function(t) {
                    e.ENABLED && (e._screenLogDiv || (e._screenLogDiv = e.createDebugDiv()),
                    e._screenLogDiv.innerHTML += t)
                }
            }, {
                key: "logArray",
                value: function(t) {
                    if (e.ENABLED) {
                        for (var n = t.length, i = "", r = 0; r < n; r++)
                            i += t[r],
                            i += ",";
                        i = i.substring(0, i.length - 1),
                        console.log(i)
                    }
                }
            }, {
                key: "log2dArray",
                value: function(t) {
                    if (e.ENABLED) {
                        for (var n = t.length, i = "", r = 0; r < n; r++)
                            for (var s = 0; s < t[r].length; s++)
                                i += t[r][s],
                                i += ",";
                        i = i.substring(0, i.length - 1),
                        console.log(i)
                    }
                }
            }, {
                key: "createDebugDiv",
                value: function() {
                    var e = document.createElement("div");
                    return document.body.appendChild(e),
                    e.style.position = "absolute",
                    e.style.left = "160px",
                    e.style.top = "0px",
                    e.style.color = "#fff",
                    e.style.backgroundColor = "#000",
                    e.style.display = "block",
                    e.style.width = "158px",
                    e.style.height = "94px",
                    e.style.padding = "1px",
                    e.style.font = "10px Helvetica,Arial,sans-serif",
                    e.style.lineHeight = "14px",
                    e.style.zIndex = "1000",
                    e
                }
            }]),
            e
        }();
        tr.ENABLED = !0;
        var nr = tr
          , ir = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                L()(this, e),
                this.v = yi.d.fromValues(t, n)
            }
            return O()(e, [{
                key: "clone",
                value: function() {
                    return new e(this.x,this.y)
                }
            }, {
                key: "copy",
                value: function(e) {
                    return yi.d.copy(this.v, e.v),
                    this
                }
            }, {
                key: "setValues",
                value: function(e, t) {
                    return yi.d.set(this.v, e, t),
                    this
                }
            }, {
                key: "length",
                value: function() {
                    return yi.d.length(this.v)
                }
            }, {
                key: "toString",
                value: function() {
                    return this.x + "," + this.y
                }
            }, {
                key: "equals",
                value: function(e) {
                    return e.x === this.x && e.y === this.y
                }
            }, {
                key: "normalize",
                value: function() {
                    return yi.d.normalize(this.v, this.v),
                    this
                }
            }, {
                key: "negate",
                value: function() {
                    return yi.d.negate(this.v, this.v),
                    this
                }
            }, {
                key: "multiplyScalar",
                value: function(e) {
                    return yi.d.scale(this.v, this.v, e),
                    this
                }
            }, {
                key: "multiply",
                value: function(e) {
                    return yi.d.multiply(this.v, this.v, e.v),
                    this
                }
            }, {
                key: "add",
                value: function(e) {
                    return yi.d.add(this.v, this.v, e.v),
                    this
                }
            }, {
                key: "subtract",
                value: function(e) {
                    return yi.d.subtract(this.v, this.v, e.v),
                    this
                }
            }, {
                key: "subtractScalar",
                value: function(e) {
                    return this.x -= e,
                    this.y -= e,
                    this
                }
            }, {
                key: "rotate",
                value: function(e, t) {
                    var n = Math.sin(t)
                      , i = Math.cos(t);
                    this.x -= e.x,
                    this.y -= e.y;
                    var r = this.x * i - this.y * n
                      , s = this.x * n + this.y * i;
                    return this.x = r + e.x,
                    this.y = s + e.y,
                    this
                }
            }, {
                key: "x",
                get: function() {
                    return this.v[0]
                },
                set: function(e) {
                    this.v[0] = e
                }
            }, {
                key: "y",
                get: function() {
                    return this.v[1]
                },
                set: function(e) {
                    this.v[1] = e
                }
            }], [{
                key: "dot",
                value: function(e, t) {
                    return yi.d.dot(e.v, t.v)
                }
            }, {
                key: "distance",
                value: function(e, t) {
                    return yi.d.distance(e.v, t.v)
                }
            }, {
                key: "multiplyScalar",
                value: function(e, t, n) {
                    return e.x = t.x * n,
                    e.y = t.y * n,
                    e
                }
            }, {
                key: "cross",
                value: function(e, t, n) {
                    return yi.d.cross(e.v, t.v, n.v),
                    e
                }
            }, {
                key: "add",
                value: function(e, t, n) {
                    return yi.d.add(e.v, t.v, n.v),
                    e
                }
            }, {
                key: "subtract",
                value: function(e, t, n) {
                    return yi.d.subtract(e.v, t.v, n.v),
                    e
                }
            }, {
                key: "lerp",
                value: function(e, t, n, i) {
                    return yi.d.lerp(e.v, t.v, n.v, i),
                    e
                }
            }, {
                key: "fract",
                value: function(t, n) {
                    return e.subtract(n, e.floor(t, n), t),
                    t
                }
            }, {
                key: "floor",
                value: function(e, t) {
                    return e.x = Math.floor(t.x),
                    e.y = Math.floor(t.y),
                    e
                }
            }]),
            e
        }();
        ir.ZERO = new ir(0,0);
        var rr = ir
          , sr = function(e) {
            function t(e, n) {
                var i, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                if (L()(this, t),
                (i = F()(this, D()(t).call(this)))._loc = e.shader.uniformLocations[n],
                i._loc || nr.log("FloatUniform: uniform does not exist on shader: ", e.name, n),
                !e.shader.program)
                    throw new ReferenceError("Cannot construct FloatUniform from material: material shader is not yet initialized.");
                return i._renderer = e.renderer,
                i._program = e.shader.program,
                i.set(r),
                i
            }
            return z()(t, e),
            O()(t, [{
                key: "set",
                value: function(e) {
                    e != this._value && (this._value = e,
                    this._renderer.renderState.setProgram(this._program),
                    this._renderer.context.uniform1f(this._loc, this._value))
                }
            }, {
                key: "getValue",
                value: function() {
                    return this._value
                }
            }, {
                key: "destruct",
                value: function() {
                    q()(D()(t.prototype), "destruct", this).call(this)
                }
            }]),
            t
        }(vi)
          , ar = function() {
            function e(t, n) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new rr;
                if (L()(this, e),
                this._value = i,
                this._loc = t.shader.uniformLocations[n],
                this._loc || nr.log("FloatUniform: uniform does not exist on shader: ", n),
                !t.shader.program)
                    throw new ReferenceError("Cannot construct Vector2Uniform from material: material shader is not yet initialized.");
                this._renderer = t.renderer,
                this._program = t.shader.program
            }
            return O()(e, [{
                key: "set",
                value: function(e) {
                    e.x == this._value.x && e.y == this._value.y || (this._value = e,
                    this._renderer.renderState.setProgram(this._program),
                    this._renderer.context.uniform2fv(this._loc, this._value.v))
                }
            }, {
                key: "getValue",
                value: function() {
                    return this._value
                }
            }]),
            e
        }()
          , or = function() {
            function e(t, n) {
                arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Ri;
                if (L()(this, e),
                this._value = new Ri,
                this._loc = t.shader.uniformLocations[n],
                this._loc || nr.log("FloatUniform: uniform does not exist on shader: ", n),
                !t.shader.program)
                    throw new ReferenceError("Cannot construct Vector3Uniform from material: material shader is not yet initialized.");
                this._renderer = t.renderer,
                this._program = t.shader.program
            }
            return O()(e, [{
                key: "set",
                value: function(e) {
                    e.x == this._value.x && e.y == this._value.y && e.z == this._value.z || (this._value.copy(e),
                    this._renderer.renderState.setProgram(this._program),
                    this._renderer.context.uniform3fv(this._loc, this._value.v))
                }
            }, {
                key: "getValue",
                value: function() {
                    return this._value
                }
            }]),
            e
        }()
          , lr = function(e) {
            function t(e, n, i) {
                var r;
                return L()(this, t),
                (r = F()(this, D()(t).call(this)))._shaderDefines = {},
                r.drawType = er.TRIANGLES,
                r.depthTest = !0,
                r.depthWrite = !0,
                r.blend = !1,
                r.culling = er.BACK,
                r.blendFuncSeparate = !1,
                r.renderer = e,
                r.name = n,
                r.shader = i,
                r.id = t.staticId++,
                r.setDefaultBlending(),
                r
            }
            return z()(t, e),
            O()(t, [{
                key: "setActive",
                value: function() {
                    if (void 0 === this.shader.program || void 0 === this.shader.textureUniforms)
                        throw new Error("Trying to activate material but the associated shader is not yet initialized");
                    this.renderer.renderState.setProgram(this.shader.program);
                    for (var e = 0; e < this.shader.textureUniforms.length; e++)
                        this.shader.textureUniforms[e].bind();
                    if (this.renderer.renderState.material != this && (this.renderer.renderState.material = this,
                    this.renderer.renderState.setDepthTest(this.depthTest),
                    this.renderer.renderState.setDepthMask(this.depthWrite),
                    this.depthFunc && this.renderer.renderState.setDepthFunc(this.depthFunc),
                    this.renderer.renderState.setCulling(this.culling),
                    this.renderer.renderState.setBlendEnabled(this.blend),
                    this.blend))
                        if (this.renderer.renderState.setBlendEquation(this.blendEquation),
                        this.blendFuncSeparate) {
                            if (void 0 === this.sourceBlendRGB || void 0 === this.destinationBlendRGB || void 0 === this.sourceBlendAlpha || void 0 === this.destinationBlendAlpha)
                                throw new ReferenceError("expected blend properties to be set");
                            this.renderer.renderState.setBlendFuncSeparate(this.sourceBlendRGB, this.destinationBlendRGB, this.sourceBlendAlpha, this.destinationBlendAlpha)
                        } else
                            this.renderer.renderState.setBlendFunc(this.sourceBlend, this.destinationBlend)
                }
            }, {
                key: "setDefaultBlending",
                value: function() {
                    this.depthTest = !0,
                    this.depthWrite = !0,
                    this.blend = !1,
                    this.blendEquation = er.FUNC_ADD,
                    this.sourceBlend = er.ZERO,
                    this.destinationBlend = er.ONE
                }
            }, {
                key: "setAlphaBlending",
                value: function() {
                    this.depthWrite = !1,
                    this.depthTest = !0,
                    this.blend = !0,
                    this.blendEquation = er.FUNC_ADD,
                    this.setBlendUnified(er.SRC_ALPHA, er.ONE_MINUS_SRC_ALPHA)
                }
            }, {
                key: "setPreMultipliedAlphaBlending",
                value: function() {
                    this.depthWrite = !1,
                    this.depthTest = !0,
                    this.blend = !0,
                    this.blendEquation = er.FUNC_ADD,
                    this.setBlendUnified(er.ONE, er.ONE_MINUS_SRC_ALPHA)
                }
            }, {
                key: "setMaxBlending",
                value: function() {
                    this.depthWrite = !1,
                    this.depthTest = !1,
                    this.blend = !0,
                    this.blendEquation = 32776,
                    this.sourceBlend = er.ONE,
                    this.destinationBlend = er.ONE,
                    this.setBlendUnified(er.ONE, er.ONE)
                }
            }, {
                key: "setAdditiveBlending",
                value: function() {
                    this.depthWrite = !1,
                    this.depthTest = !0,
                    this.blend = !0,
                    this.blendEquation = er.FUNC_ADD,
                    this.setBlendUnified(er.ONE, er.ONE)
                }
            }, {
                key: "setMultiplyBlending",
                value: function() {
                    this.depthWrite = !1,
                    this.depthTest = !0,
                    this.blend = !0,
                    this.blendEquation = er.FUNC_ADD,
                    this.setBlendUnified(er.ZERO, er.SRC_COLOR)
                }
            }, {
                key: "setSubtractiveBlending",
                value: function() {
                    this.depthWrite = !1,
                    this.depthTest = !1,
                    this.blend = !0,
                    this.blendEquation = er.FUNC_SUBTRACT,
                    this.setBlendUnified(er.ONE, er.ONE_MINUS_SRC_ALPHA)
                }
            }, {
                key: "setBlendUnified",
                value: function(e, t) {
                    this.blendFuncSeparate = !1,
                    this.sourceBlend = e,
                    this.destinationBlend = t
                }
            }, {
                key: "setBlendSeparate",
                value: function(e, t, n, i) {
                    this.blendFuncSeparate = !0,
                    this.sourceBlendRGB = e,
                    this.sourceBlendAlpha = n,
                    this.destinationBlendRGB = t,
                    this.destinationBlendAlpha = i
                }
            }, {
                key: "setCullingBackFace",
                value: function() {
                    this.culling = er.BACK
                }
            }, {
                key: "setCullingFrontFace",
                value: function() {
                    this.culling = er.FRONT
                }
            }, {
                key: "setCullingDisabled",
                value: function() {
                    this.culling = er.NONE
                }
            }, {
                key: "setDrawTypePoints",
                value: function() {
                    this.drawType = er.POINTS
                }
            }, {
                key: "setDrawTypeLines",
                value: function() {
                    this.drawType = er.LINES
                }
            }, {
                key: "setDrawTypeLineStrip",
                value: function() {
                    this.drawType = er.LINE_STRIP
                }
            }, {
                key: "setDrawTypeTriangles",
                value: function() {
                    this.drawType = er.TRIANGLES
                }
            }, {
                key: "setDrawTypeTriangleFan",
                value: function() {
                    this.drawType = er.TRIANGLE_FAN
                }
            }, {
                key: "setDrawTypeTriangleStrip",
                value: function() {
                    this.drawType = er.TRIANGLE_STRIP
                }
            }, {
                key: "setFloat",
                value: function(e, t) {
                    var n = this.getLoc(e);
                    n && (this.renderer.renderState.setProgram(this.shader.program),
                    this.renderer.context.uniform1f(n, t))
                }
            }, {
                key: "setInt",
                value: function(e, t) {
                    var n = this.getLoc(e);
                    n && (this.renderer.renderState.setProgram(this.shader.program),
                    this.renderer.context.uniform1i(n, t))
                }
            }, {
                key: "setFloats",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                      , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                      , r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0
                      , s = this.getLoc(e);
                    s && (this.renderer.renderState.setProgram(this.shader.program),
                    this.renderer.context.uniform4f(s, t, n, i, r))
                }
            }, {
                key: "setShaderVector",
                value: function(e, t) {
                    var n = this.renderer.context
                      , i = this.getLoc(e);
                    if (i)
                        switch (this.renderer.renderState.setProgram(this.shader.program),
                        t.length) {
                        case 1:
                            n.uniform1f(i, t[0]);
                            break;
                        case 2:
                            n.uniform2f(i, t[0], t[1]);
                            break;
                        case 3:
                            n.uniform3f(i, t[0], t[1], t[2]);
                            break;
                        case 4:
                            n.uniform4f(i, t[0], t[1], t[2], t[3])
                        }
                }
            }, {
                key: "setMatrix",
                value: function(e, t) {
                    var n = this.getLoc(e);
                    n && (this.renderer.renderState.setProgram(this.shader.program),
                    this.renderer.context.uniformMatrix4fv(n, !1, t))
                }
            }, {
                key: "setMatrix3x3",
                value: function(e, t) {
                    var n = this.getLoc(e);
                    n && (this.renderer.renderState.setProgram(this.shader.program),
                    this.renderer.context.uniformMatrix3fv(n, !1, t))
                }
            }, {
                key: "setMatrix2x2",
                value: function(e, t) {
                    var n = this.getLoc(e);
                    n && (this.renderer.renderState.setProgram(this.shader.program),
                    this.renderer.context.uniformMatrix2fv(n, !1, t))
                }
            }, {
                key: "setMatrixArray",
                value: function(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = e + "[" + n + "]";
                        this.setMatrix(i, t[n])
                    }
                }
            }, {
                key: "setMatrixArray2",
                value: function(e, t) {
                    var n = this.getLoc(e);
                    n && (this.renderer.renderState.setProgram(this.shader.program),
                    this.renderer.context.uniformMatrix4fv(n, !1, t))
                }
            }, {
                key: "setMatrixFloatArray",
                value: function(e, t) {
                    var n = this.getLoc(e);
                    n && (this.renderer.renderState.setProgram(this.shader.program),
                    this.renderer.context.uniformMatrix4fv(n, !1, t))
                }
            }, {
                key: "setTexture",
                value: function(e, t) {
                    if (!this.shader)
                        throw new ReferenceError("Material has no Shader");
                    var n = this.shader.getTextureUniformByName(e);
                    n && n.set(t)
                }
            }, {
                key: "setFloat32Array",
                value: function(e, t) {
                    var n = this.getLoc(e);
                    n && (this.renderer.renderState.setProgram(this.shader.program),
                    this.renderer.context.uniform1fv(n, t))
                }
            }, {
                key: "setInt32Array",
                value: function(e, t) {
                    var n = this.getLoc(e);
                    n && (this.renderer.renderState.setProgram(this.shader.program),
                    this.renderer.context.uniform1iv(n, t))
                }
            }, {
                key: "setColor",
                value: function(e, t) {
                    var n = this.getLoc(e);
                    n && (this.renderer.renderState.setProgram(this.shader.program),
                    this.renderer.context.uniform4f(n, t.r, t.g, t.b, t.a))
                }
            }, {
                key: "setVector3",
                value: function(e, t) {
                    var n = this.getLoc(e);
                    n && (this.renderer.renderState.setProgram(this.shader.program),
                    this.renderer.context.uniform3fv(n, t.v))
                }
            }, {
                key: "setVector3Array",
                value: function(e, t) {
                    var n = this.getLoc(e);
                    n && (this.renderer.renderState.setProgram(this.shader.program),
                    this.renderer.context.uniform3fv(n, t))
                }
            }, {
                key: "setVector2",
                value: function(e, t) {
                    var n = this.getLoc(e);
                    n && (this.renderer.renderState.setProgram(this.shader.program),
                    this.renderer.context.uniform2fv(n, t.v))
                }
            }, {
                key: "setVector2Array",
                value: function(e, t) {
                    var n = this.getLoc(e);
                    n && (this.renderer.renderState.setProgram(this.shader.program),
                    this.renderer.context.uniform2fv(n, t))
                }
            }, {
                key: "setVector4",
                value: function(e, t) {
                    var n = this.getLoc(e);
                    n && (this.renderer.renderState.setProgram(this.shader.program),
                    this.renderer.context.uniform4fv(n, t.v))
                }
            }, {
                key: "setVector4Array",
                value: function(e, t) {
                    var n = this.getLoc(e);
                    n && (this.renderer.renderState.setProgram(this.shader.program),
                    this.renderer.context.uniform4fv(n, t))
                }
            }, {
                key: "getLoc",
                value: function(e) {
                    var t = this.shader.uniformLocations[e];
                    if (!1 !== t && !t) {
                        if (!this.shader)
                            throw new ReferenceError("Material has no Shader");
                        if (!this.shader.program)
                            throw new ReferenceError("Material shader has not yet been initialized");
                        if (this.renderer.renderState.setProgram(this.shader.program),
                        t = this.renderer.context.getUniformLocation(this.shader.program, e))
                            return this.shader.uniformLocations[e] = t,
                            t;
                        this.shader.uniformLocations[e] = !1,
                        nr.log("uniform not present in shader: ", this.name, e)
                    }
                    return t
                }
            }, {
                key: "hasUniform",
                value: function(e) {
                    if (!this.shader)
                        throw new ReferenceError("Material has no Shader");
                    return !!this.shader.uniformLocations[e]
                }
            }, {
                key: "addFloatUniform",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return new sr(this,e,t)
                }
            }, {
                key: "addVector2Uniform",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new rr;
                    return new ar(this,e,t)
                }
            }, {
                key: "addVector3Uniform",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Ri;
                    return new or(this,e,t)
                }
            }, {
                key: "addShaderDefines",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    for (var i = 0; i < t.length; i++) {
                        var r = t[i]instanceof Array ? t[i][0] : t[i]
                          , s = t[i]instanceof Array ? t[i][1] : 1;
                        void 0 == this._shaderDefines[r] && (this._shaderDefines[r] = s)
                    }
                }
            }, {
                key: "getShaderDefines",
                value: function() {
                    return this._shaderDefines
                }
            }, {
                key: "clearShaderDefines",
                value: function() {
                    this._shaderDefines = []
                }
            }, {
                key: "destruct",
                value: function() {
                    this.isDestructed || this.shader.destruct(),
                    q()(D()(t.prototype), "destruct", this).call(this)
                }
            }]),
            t
        }(vi);
        lr.staticId = 0;
        var hr = lr
          , ur = function e(t, n, i) {
            L()(this, e),
            this.name = t,
            this.stride = n,
            this.loc = i
        }
          , cr = function() {
            function e(t, n, i, r) {
                if (L()(this, e),
                this.name = n,
                this._samplerIndex = r,
                !t.program)
                    throw new ReferenceError("Cannot construct TextureUniform from shader: shader is not yet initialized.");
                t.renderer.renderState.setProgram(t.program),
                t.renderer.context.uniform1i(i, r)
            }
            return O()(e, [{
                key: "set",
                value: function(e) {
                    this._texture = e
                }
            }, {
                key: "bind",
                value: function() {
                    this._texture && this._texture.bindToSlot(this._samplerIndex)
                }
            }]),
            e
        }()
          , vr = function e() {
            L()(this, e)
        };
        vr.READ_BUFFER = 3074,
        vr.UNPACK_ROW_LENGTH = 3314,
        vr.UNPACK_SKIP_ROWS = 3315,
        vr.UNPACK_SKIP_PIXELS = 3316,
        vr.PACK_ROW_LENGTH = 3330,
        vr.PACK_SKIP_ROWS = 3331,
        vr.PACK_SKIP_PIXELS = 3332,
        vr.COLOR = 6144,
        vr.DEPTH = 6145,
        vr.STENCIL = 6146,
        vr.RED = 6403,
        vr.RGB8 = 32849,
        vr.RGBA8 = 32856,
        vr.RGB10_A2 = 32857,
        vr.TEXTURE_BINDING_3D = 32874,
        vr.UNPACK_SKIP_IMAGES = 32877,
        vr.UNPACK_IMAGE_HEIGHT = 32878,
        vr.TEXTURE_3D = 32879,
        vr.TEXTURE_WRAP_R = 32882,
        vr.MAX_3D_TEXTURE_SIZE = 32883,
        vr.UNSIGNED_INT_2_10_10_10_REV = 33640,
        vr.MAX_ELEMENTS_VERTICES = 33e3,
        vr.MAX_ELEMENTS_INDICES = 33001,
        vr.TEXTURE_MIN_LOD = 33082,
        vr.TEXTURE_MAX_LOD = 33083,
        vr.TEXTURE_BASE_LEVEL = 33084,
        vr.TEXTURE_MAX_LEVEL = 33085,
        vr.MIN = 32775,
        vr.MAX = 32776,
        vr.DEPTH_COMPONENT24 = 33190,
        vr.MAX_TEXTURE_LOD_BIAS = 34045,
        vr.TEXTURE_COMPARE_MODE = 34892,
        vr.TEXTURE_COMPARE_FUNC = 34893,
        vr.CURRENT_QUERY = 34917,
        vr.QUERY_RESULT = 34918,
        vr.QUERY_RESULT_AVAILABLE = 34919,
        vr.STREAM_READ = 35041,
        vr.STREAM_COPY = 35042,
        vr.STATIC_READ = 35045,
        vr.STATIC_COPY = 35046,
        vr.DYNAMIC_READ = 35049,
        vr.DYNAMIC_COPY = 35050,
        vr.MAX_DRAW_BUFFERS = 34852,
        vr.DRAW_BUFFER0 = 34853,
        vr.DRAW_BUFFER1 = 34854,
        vr.DRAW_BUFFER2 = 34855,
        vr.DRAW_BUFFER3 = 34856,
        vr.DRAW_BUFFER4 = 34857,
        vr.DRAW_BUFFER5 = 34858,
        vr.DRAW_BUFFER6 = 34859,
        vr.DRAW_BUFFER7 = 34860,
        vr.DRAW_BUFFER8 = 34861,
        vr.DRAW_BUFFER9 = 34862,
        vr.DRAW_BUFFER10 = 34863,
        vr.DRAW_BUFFER11 = 34864,
        vr.DRAW_BUFFER12 = 34865,
        vr.DRAW_BUFFER13 = 34866,
        vr.DRAW_BUFFER14 = 34867,
        vr.DRAW_BUFFER15 = 34868,
        vr.MAX_FRAGMENT_UNIFORM_COMPONENTS = 35657,
        vr.MAX_VERTEX_UNIFORM_COMPONENTS = 35658,
        vr.SAMPLER_3D = 35679,
        vr.SAMPLER_2D_SHADOW = 35682,
        vr.FRAGMENT_SHADER_DERIVATIVE_HINT = 35723,
        vr.PIXEL_PACK_BUFFER = 35051,
        vr.PIXEL_UNPACK_BUFFER = 35052,
        vr.PIXEL_PACK_BUFFER_BINDING = 35053,
        vr.PIXEL_UNPACK_BUFFER_BINDING = 35055,
        vr.FLOAT_MAT2x3 = 35685,
        vr.FLOAT_MAT2x4 = 35686,
        vr.FLOAT_MAT3x2 = 35687,
        vr.FLOAT_MAT3x4 = 35688,
        vr.FLOAT_MAT4x2 = 35689,
        vr.FLOAT_MAT4x3 = 35690,
        vr.SRGB = 35904,
        vr.SRGB8 = 35905,
        vr.SRGB8_ALPHA8 = 35907,
        vr.COMPARE_REF_TO_TEXTURE = 34894,
        vr.RGBA32F = 34836,
        vr.RGB32F = 34837,
        vr.RGBA16F = 34842,
        vr.RGB16F = 34843,
        vr.VERTEX_ATTRIB_ARRAY_INTEGER = 35069,
        vr.MAX_ARRAY_TEXTURE_LAYERS = 35071,
        vr.MIN_PROGRAM_TEXEL_OFFSET = 35076,
        vr.MAX_PROGRAM_TEXEL_OFFSET = 35077,
        vr.MAX_VARYING_COMPONENTS = 35659,
        vr.TEXTURE_2D_ARRAY = 35866,
        vr.TEXTURE_BINDING_2D_ARRAY = 35869,
        vr.R11F_G11F_B10F = 35898,
        vr.UNSIGNED_INT_10F_11F_11F_REV = 35899,
        vr.RGB9_E5 = 35901,
        vr.UNSIGNED_INT_5_9_9_9_REV = 35902,
        vr.TRANSFORM_FEEDBACK_BUFFER_MODE = 35967,
        vr.MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS = 35968,
        vr.TRANSFORM_FEEDBACK_VARYINGS = 35971,
        vr.TRANSFORM_FEEDBACK_BUFFER_START = 35972,
        vr.TRANSFORM_FEEDBACK_BUFFER_SIZE = 35973,
        vr.TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN = 35976,
        vr.RASTERIZER_DISCARD = 35977,
        vr.MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS = 35978,
        vr.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS = 35979,
        vr.INTERLEAVED_ATTRIBS = 35980,
        vr.SEPARATE_ATTRIBS = 35981,
        vr.TRANSFORM_FEEDBACK_BUFFER = 35982,
        vr.TRANSFORM_FEEDBACK_BUFFER_BINDING = 35983,
        vr.RGBA32UI = 36208,
        vr.RGB32UI = 36209,
        vr.RGBA16UI = 36214,
        vr.RGB16UI = 36215,
        vr.RGBA8UI = 36220,
        vr.RGB8UI = 36221,
        vr.RGBA32I = 36226,
        vr.RGB32I = 36227,
        vr.RGBA16I = 36232,
        vr.RGB16I = 36233,
        vr.RGBA8I = 36238,
        vr.RGB8I = 36239,
        vr.RED_INTEGER = 36244,
        vr.RGB_INTEGER = 36248,
        vr.RGBA_INTEGER = 36249,
        vr.SAMPLER_2D_ARRAY = 36289,
        vr.SAMPLER_2D_ARRAY_SHADOW = 36292,
        vr.SAMPLER_CUBE_SHADOW = 36293,
        vr.UNSIGNED_INT_VEC2 = 36294,
        vr.UNSIGNED_INT_VEC3 = 36295,
        vr.UNSIGNED_INT_VEC4 = 36296,
        vr.INT_SAMPLER_2D = 36298,
        vr.INT_SAMPLER_3D = 36299,
        vr.INT_SAMPLER_CUBE = 36300,
        vr.INT_SAMPLER_2D_ARRAY = 36303,
        vr.UNSIGNED_INT_SAMPLER_2D = 36306,
        vr.UNSIGNED_INT_SAMPLER_3D = 36307,
        vr.UNSIGNED_INT_SAMPLER_CUBE = 36308,
        vr.UNSIGNED_INT_SAMPLER_2D_ARRAY = 36311,
        vr.DEPTH_COMPONENT32F = 36012,
        vr.DEPTH32F_STENCIL8 = 36013,
        vr.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269,
        vr.FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING = 33296,
        vr.FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE = 33297,
        vr.FRAMEBUFFER_ATTACHMENT_RED_SIZE = 33298,
        vr.FRAMEBUFFER_ATTACHMENT_GREEN_SIZE = 33299,
        vr.FRAMEBUFFER_ATTACHMENT_BLUE_SIZE = 33300,
        vr.FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE = 33301,
        vr.FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE = 33302,
        vr.FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE = 33303,
        vr.FRAMEBUFFER_DEFAULT = 33304,
        vr.DEPTH_STENCIL_ATTACHMENT = 33306,
        vr.DEPTH_STENCIL = 34041,
        vr.UNSIGNED_INT_24_8 = 34042,
        vr.DEPTH24_STENCIL8 = 35056,
        vr.UNSIGNED_NORMALIZED = 35863,
        vr.DRAW_FRAMEBUFFER_BINDING = 36006,
        vr.READ_FRAMEBUFFER = 36008,
        vr.DRAW_FRAMEBUFFER = 36009,
        vr.READ_FRAMEBUFFER_BINDING = 36010,
        vr.RENDERBUFFER_SAMPLES = 36011,
        vr.FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER = 36052,
        vr.MAX_COLOR_ATTACHMENTS = 36063,
        vr.COLOR_ATTACHMENT1 = 36065,
        vr.COLOR_ATTACHMENT2 = 36066,
        vr.COLOR_ATTACHMENT3 = 36067,
        vr.COLOR_ATTACHMENT4 = 36068,
        vr.COLOR_ATTACHMENT5 = 36069,
        vr.COLOR_ATTACHMENT6 = 36070,
        vr.COLOR_ATTACHMENT7 = 36071,
        vr.COLOR_ATTACHMENT8 = 36072,
        vr.COLOR_ATTACHMENT9 = 36073,
        vr.COLOR_ATTACHMENT10 = 36074,
        vr.COLOR_ATTACHMENT11 = 36075,
        vr.COLOR_ATTACHMENT12 = 36076,
        vr.COLOR_ATTACHMENT13 = 36077,
        vr.COLOR_ATTACHMENT14 = 36078,
        vr.COLOR_ATTACHMENT15 = 36079,
        vr.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE = 36182,
        vr.MAX_SAMPLES = 36183,
        vr.HALF_FLOAT = 5131,
        vr.RG = 33319,
        vr.RG_INTEGER = 33320,
        vr.R8 = 33321,
        vr.RG8 = 33323,
        vr.R16F = 33325,
        vr.R32F = 33326,
        vr.RG16F = 33327,
        vr.RG32F = 33328,
        vr.R8I = 33329,
        vr.R8UI = 33330,
        vr.R16I = 33331,
        vr.R16UI = 33332,
        vr.R32I = 33333,
        vr.R32UI = 33334,
        vr.RG8I = 33335,
        vr.RG8UI = 33336,
        vr.RG16I = 33337,
        vr.RG16UI = 33338,
        vr.RG32I = 33339,
        vr.RG32UI = 33340,
        vr.VERTEX_ARRAY_BINDING = 34229,
        vr.R8_SNORM = 36756,
        vr.RG8_SNORM = 36757,
        vr.RGB8_SNORM = 36758,
        vr.RGBA8_SNORM = 36759,
        vr.SIGNED_NORMALIZED = 36764,
        vr.COPY_READ_BUFFER = 36662,
        vr.COPY_WRITE_BUFFER = 36663,
        vr.COPY_READ_BUFFER_BINDING = 36662,
        vr.COPY_WRITE_BUFFER_BINDING = 36663,
        vr.UNIFORM_BUFFER = 35345,
        vr.UNIFORM_BUFFER_BINDING = 35368,
        vr.UNIFORM_BUFFER_START = 35369,
        vr.UNIFORM_BUFFER_SIZE = 35370,
        vr.MAX_VERTEX_UNIFORM_BLOCKS = 35371,
        vr.MAX_FRAGMENT_UNIFORM_BLOCKS = 35373,
        vr.MAX_COMBINED_UNIFORM_BLOCKS = 35374,
        vr.MAX_UNIFORM_BUFFER_BINDINGS = 35375,
        vr.MAX_UNIFORM_BLOCK_SIZE = 35376,
        vr.MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS = 35377,
        vr.MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS = 35379,
        vr.UNIFORM_BUFFER_OFFSET_ALIGNMENT = 35380,
        vr.ACTIVE_UNIFORM_BLOCKS = 35382,
        vr.UNIFORM_TYPE = 35383,
        vr.UNIFORM_SIZE = 35384,
        vr.UNIFORM_BLOCK_INDEX = 35386,
        vr.UNIFORM_OFFSET = 35387,
        vr.UNIFORM_ARRAY_STRIDE = 35388,
        vr.UNIFORM_MATRIX_STRIDE = 35389,
        vr.UNIFORM_IS_ROW_MAJOR = 35390,
        vr.UNIFORM_BLOCK_BINDING = 35391,
        vr.UNIFORM_BLOCK_DATA_SIZE = 35392,
        vr.UNIFORM_BLOCK_ACTIVE_UNIFORMS = 35394,
        vr.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = 35395,
        vr.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = 35396,
        vr.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 35398,
        vr.INVALID_INDEX = 4294967295,
        vr.MAX_VERTEX_OUTPUT_COMPONENTS = 37154,
        vr.MAX_FRAGMENT_INPUT_COMPONENTS = 37157,
        vr.MAX_SERVER_WAIT_TIMEOUT = 37137,
        vr.OBJECT_TYPE = 37138,
        vr.SYNC_CONDITION = 37139,
        vr.SYNC_STATUS = 37140,
        vr.SYNC_FLAGS = 37141,
        vr.SYNC_FENCE = 37142,
        vr.SYNC_GPU_COMMANDS_COMPLETE = 37143,
        vr.UNSIGNALED = 37144,
        vr.SIGNALED = 37145,
        vr.ALREADY_SIGNALED = 37146,
        vr.TIMEOUT_EXPIRED = 37147,
        vr.CONDITION_SATISFIED = 37148,
        vr.WAIT_FAILED = 37149,
        vr.SYNC_FLUSH_COMMANDS_BIT = 1,
        vr.VERTEX_ATTRIB_ARRAY_DIVISOR = 35070,
        vr.ANY_SAMPLES_PASSED = 35887,
        vr.ANY_SAMPLES_PASSED_CONSERVATIVE = 36202,
        vr.SAMPLER_BINDING = 35097,
        vr.RGB10_A2UI = 36975,
        vr.INT_2_10_10_10_REV = 36255,
        vr.TRANSFORM_FEEDBACK = 36386,
        vr.TRANSFORM_FEEDBACK_PAUSED = 36387,
        vr.TRANSFORM_FEEDBACK_ACTIVE = 36388,
        vr.TRANSFORM_FEEDBACK_BINDING = 36389,
        vr.TEXTURE_IMMUTABLE_FORMAT = 37167,
        vr.MAX_ELEMENT_INDEX = 36203,
        vr.TEXTURE_IMMUTABLE_LEVELS = 33503;
        var dr = vr
          , fr = function(e) {
            function t(e) {
                var n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return L()(this, t),
                (n = F()(this, D()(t).call(this))).uniformLocations = {},
                n.id = t.staticId,
                t.staticId++,
                n.renderer = e,
                n.shaderDefines = i,
                n
            }
            return z()(t, e),
            O()(t, [{
                key: "load",
                value: function(e, t, n) {
                    var i = this;
                    Promise.all([t.loadAssetByName("".concat(e, ".vs.glsl")), t.loadAssetByName("".concat(e, ".fs.glsl"))]).then(function(r) {
                        i.loadIncludes(r, t, function(t) {
                            i.init(e, t[0], t[1], n)
                        })
                    })
                }
            }, {
                key: "loadIncludes",
                value: function(e, t, n) {
                    for (var i = this, r = /^#include\s+(\S+)/, s = [], a = 0; a < e.length; a++)
                        for (var o = e[a].split("\n"), l = 0; l < o.length; l++) {
                            var h = o[l];
                            h = h.trim();
                            var u;
                            null !== (u = r.exec(h)) && s.push([u[1], u])
                        }
                    if (s.length) {
                        for (var c = [], v = 0; v < s.length; v++)
                            c[v] = s[v][0];
                        Promise.all(c.map(function(e) {
                            return t.loadAssetByPath(e)
                        })).then(function(r) {
                            for (var a = 0; a < e.length; a++)
                                for (var o = 0; o < s.length; o++)
                                    e[a] = e[a].replace(s[o][1][0], "\n\n///// Start " + c[o] + "\n\n" + r[o] + "\n\n///// End " + c[o] + "\n\n");
                            i.loadIncludes(e, t, n)
                        })
                    } else
                        n.call(this, e)
                }
            }, {
                key: "init",
                value: function(e, n, i) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                    if (this.name = e,
                    this.shaderDefines) {
                        var s = "";
                        for (var a in this.shaderDefines)
                            s += "#define " + a + " " + this.shaderDefines[a] + "\n";
                        nr.log("adding defines: ", this.name, s),
                        n = s + n,
                        i = s + i
                    }
                    n = t.stripUniformDuplicates(n),
                    i = t.stripUniformDuplicates(i),
                    n = this.renderer.preprocessShaderString(n),
                    i = this.renderer.preprocessShaderString(i);
                    var o = this.renderer.context
                      , l = this.compileShader(o, n, o.VERTEX_SHADER)
                      , h = this.compileShader(o, i, o.FRAGMENT_SHADER);
                    return this.program = this.LinkProgram(o, l, h),
                    this.getUniforms(o, this.program),
                    this.getAttributes(o, this.program),
                    r && r.call(this),
                    this
                }
            }, {
                key: "compileShader",
                value: function(e, t, n) {
                    var i = e.createShader(n);
                    if (e.shaderSource(i, t),
                    e.compileShader(i),
                    e.getShaderParameter(i, e.COMPILE_STATUS))
                        return i;
                    var r = e.getShaderInfoLog(i);
                    if (r) {
                        nr.error("compileShader: error: " + this.name, (n === er.VERTEX_SHADER ? "vs" : "fs") + " \n" + r),
                        console.log("%c compileShader: " + this.name + (n === er.VERTEX_SHADER ? " vs" : " fs"), "background: #fff0f0; color: skyblue"),
                        console.log(r);
                        for (var s = /ERROR: (\d+):(\d+):/, a = r.split("\n"), o = [], l = 0; l < a.length; l++) {
                            var h, u = a[l];
                            null !== (h = s.exec(u)) && (o[parseInt(h[2], 10) - 1] = u)
                        }
                        a = t.split("\n");
                        var c = [];
                        c[0] = "";
                        for (var v = 0; v < a.length; v++)
                            c[0] += "%c" + a[v] + "\n",
                            c[v + 1] = o[v] ? "background: #fff0f0; color: skyblue" : "background: white; color: black",
                            o[v] && (c[0] += " --\x3e " + o[v] + "\n");
                        console.log.apply(console, c),
                        console.log("%c compileShader: " + this.name + (n === er.VERTEX_SHADER ? " vs" : " fs"), "background: #fff0f0; color: skyblue")
                    }
                    throw new Error("unable to compile shader")
                }
            }, {
                key: "LinkProgram",
                value: function(e, t, n) {
                    var i = e.createProgram();
                    if (e.attachShader(i, t),
                    e.attachShader(i, n),
                    e.linkProgram(i),
                    e.getProgramParameter(i, e.LINK_STATUS))
                        return i;
                    throw console.log("LinkProgram", this.name),
                    new Error("Program link error:\n" + e.getProgramInfoLog(i))
                }
            }, {
                key: "getUniforms",
                value: function(e, t) {
                    var n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
                    this.textureUniforms = [],
                    this.uniformLocations = {};
                    for (var i = 0, r = 0; r < n; r++) {
                        var s = e.getActiveUniform(t, r)
                          , a = e.getUniformLocation(this.program, s.name);
                        this.uniformLocations[s.name] = a,
                        s.type !== er.SAMPLER_2D && s.type !== er.SAMPLER_CUBE && s.type !== dr.SAMPLER_3D || (this.textureUniforms.push(new cr(this,s.name,a,i)),
                        i++)
                    }
                }
            }, {
                key: "getAttributes",
                value: function(e, n) {
                    var i = e.getProgramParameter(n, e.ACTIVE_ATTRIBUTES);
                    this.attributes = [];
                    for (var r = 0; r < i; r++) {
                        var s = e.getActiveAttrib(n, r)
                          , a = e.getAttribLocation(this.program, s.name)
                          , o = t.getStride(s.type);
                        this.attributes.push(new ur(s.name,o,a))
                    }
                }
            }, {
                key: "getAttributeByName",
                value: function(e) {
                    if (this.attributes)
                        for (var t = 0; t < this.attributes.length; t++)
                            if (this.attributes[t].name === e)
                                return this.attributes[t];
                    return null
                }
            }, {
                key: "getTextureUniformByName",
                value: function(e) {
                    if (this.textureUniforms)
                        for (var t = 0; t < this.textureUniforms.length; t++)
                            if (this.textureUniforms[t].name === e)
                                return this.textureUniforms[t];
                    return null
                }
            }, {
                key: "destruct",
                value: function() {
                    q()(D()(t.prototype), "destruct", this).call(this)
                }
            }], [{
                key: "stripUniformDuplicates",
                value: function(e) {
                    for (var t = "", n = {}, i = /^uniform\s+(\S*)\s+(\S*);/, r = e.split("\n"), s = 0; s < r.length; s++) {
                        var a = r[s];
                        a = a.trim();
                        var o;
                        if (null !== (o = i.exec(a))) {
                            var l = o[2];
                            n[l] && (a = "// " + a),
                            n[l] = !0
                        }
                        t += a + "\n"
                    }
                    return t
                }
            }, {
                key: "getStride",
                value: function(e) {
                    switch (e) {
                    case er.FLOAT:
                        return 1;
                    case er.FLOAT_VEC2:
                        return 2;
                    case er.FLOAT_VEC3:
                        return 3;
                    case er.FLOAT_VEC4:
                        return 4;
                    default:
                        return nr.error("attribute type not handled: " + e),
                        -1
                    }
                }
            }]),
            t
        }(vi);
        fr.staticId = 0;
        var _r = fr
          , pr = function(e) {
            function t(e, n, i) {
                var r;
                return L()(this, t),
                (r = F()(this, D()(t).call(this, e, i, new _r(e)))).shaderIndex = e.shaderIndex,
                r.shaderName = i,
                n.add(Be()(r)),
                r
            }
            return z()(t, e),
            O()(t, [{
                key: "load",
                value: function(e) {
                    var t = this;
                    this.shader.shaderDefines = this.getShaderDefines(),
                    this.shader.load(this.shaderName, this.shaderIndex, function() {
                        e.call(t)
                    })
                }
            }]),
            t
        }(hr)
          , mr = function e(t) {
            L()(this, e),
            this.MAX_VERTEX_ATTRIBS = t.getParameter(t.MAX_VERTEX_ATTRIBS),
            this.MAX_VARYING_VECTORS = t.getParameter(t.MAX_VARYING_VECTORS),
            this.MAX_VERTEX_UNIFORM_VECTORS = t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),
            this.MAX_FRAGMENT_UNIFORM_VECTORS = t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),
            this.MAX_TEXTURE_IMAGE_UNITS = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
            this.MAX_VERTEX_TEXTURE_IMAGE_UNITS = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
            this.MAX_TEXTURE_SIZE = t.getParameter(t.MAX_TEXTURE_SIZE),
            this.MAX_CUBE_MAP_TEXTURE_SIZE = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),
            this.MAX_VIEWPORT_DIMS = t.getParameter(t.MAX_VIEWPORT_DIMS),
            this.MAX_RENDERBUFFER_SIZE = t.getParameter(t.MAX_RENDERBUFFER_SIZE),
            this.MAX_COMBINED_TEXTURE_IMAGE_UNITS = t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
            var n = t.getExtension("WEBGL_debug_renderer_info");
            for (var i in this.UNMASKED_RENDERER = n && t.getParameter(n.UNMASKED_RENDERER_WEBGL),
            this.UNMASKED_VENDOR = n && t.getParameter(n.UNMASKED_VENDOR_WEBGL),
            this)
                this.hasOwnProperty(i) && nr.log(i, this[i])
        }
          , gr = function(e) {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
                  , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
                  , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
                return L()(this, t),
                F()(this, D()(t).call(this, e, n, i, r))
            }
            return z()(t, e),
            O()(t, [{
                key: "r",
                get: function() {
                    return this.v[0]
                },
                set: function(e) {
                    this.v[0] = e
                }
            }, {
                key: "g",
                get: function() {
                    return this.v[1]
                },
                set: function(e) {
                    this.v[1] = e
                }
            }, {
                key: "b",
                get: function() {
                    return this.v[2]
                },
                set: function(e) {
                    this.v[2] = e
                }
            }, {
                key: "a",
                get: function() {
                    return this.v[3]
                },
                set: function(e) {
                    this.v[3] = e
                }
            }]),
            O()(t, [{
                key: "isEqualTo",
                value: function(e) {
                    return this.r == e.r && this.g == e.g && this.b == e.b && this.a == e.a
                }
            }, {
                key: "clampCeil",
                value: function(e) {
                    this.r > e && (this.r = e),
                    this.g > e && (this.g = e),
                    this.b > e && (this.b = e),
                    this.a > e && (this.a = e)
                }
            }, {
                key: "toRGBString",
                value: function() {
                    return "rgb(" + Math.round(255 * this.r) + "," + Math.round(255 * this.g) + "," + Math.round(255 * this.b) + ")"
                }
            }, {
                key: "getHex",
                value: function() {
                    return "#" + t.componentToHex(this.r) + t.componentToHex(this.g) + t.componentToHex(this.b)
                }
            }, {
                key: "setRGBA255",
                value: function(e) {
                    this.r = e[0] / 255,
                    this.g = e[1] / 255,
                    this.b = e[2] / 255,
                    this.a = e[3],
                    console.log("setRGBA255: ", e, this.r, this.g, this.b, this.a)
                }
            }, {
                key: "getRGBA255",
                value: function() {
                    return [Math.round(255 * this.r), Math.round(255 * this.g), Math.round(255 * this.b), this.a]
                }
            }, {
                key: "setFromHex",
                value: function(e) {
                    e = e.replace(/[^0-9A-F]/gi, "");
                    var t = parseInt(e, 16);
                    this.r = (t >> 16 & 255) / 255,
                    this.g = (t >> 8 & 255) / 255,
                    this.b = (255 & t) / 255,
                    this.a = 1
                }
            }, {
                key: "setFromHSV",
                value: function(e, t, n) {
                    var i = 0
                      , r = 0
                      , s = 0
                      , a = Math.floor(6 * e)
                      , o = 6 * e - a
                      , l = n * (1 - t)
                      , h = n * (1 - o * t)
                      , u = n * (1 - (1 - o) * t);
                    switch (a % 6) {
                    case 0:
                        i = n,
                        r = u,
                        s = l;
                        break;
                    case 1:
                        i = h,
                        r = n,
                        s = l;
                        break;
                    case 2:
                        i = l,
                        r = n,
                        s = u;
                        break;
                    case 3:
                        i = l,
                        r = h,
                        s = n;
                        break;
                    case 4:
                        i = u,
                        r = l,
                        s = n;
                        break;
                    case 5:
                        i = n,
                        r = l,
                        s = h
                    }
                    this.r = i,
                    this.g = r,
                    this.b = s
                }
            }, {
                key: "getRgbaString",
                value: function() {
                    return "rgba(" + Math.round(255 * this.r) + ", " + Math.round(255 * this.g) + ", " + Math.round(255 * this.b) + ", " + this.a + ")"
                }
            }], [{
                key: "componentToHex",
                value: function(e) {
                    var t = (e *= 255).toString(16);
                    return 1 === t.length ? "0" + t : t
                }
            }, {
                key: "fromHex",
                value: function(e) {
                    var n = new t;
                    return n.setFromHex(e),
                    n
                }
            }, {
                key: "fromRGB255",
                value: function(e) {
                    var n = new t;
                    return n.setRGBA255(e),
                    n
                }
            }, {
                key: "getRandom",
                value: function() {
                    return new t(Math.random(),Math.random(),Math.random())
                }
            }, {
                key: "colorFromString",
                value: function(e) {
                    var n = []
                      , i = [];
                    i[0] = e.substr(0, Math.floor(e.length / 3)),
                    i[1] = e.substr(Math.floor(e.length / 3), Math.floor(2 * e.length / 3)),
                    i[2] = e.substr(Math.floor(2 * e.length / 3), e.length);
                    for (var r = 0; r < i.length; r++)
                        for (var s = 0; s < i[r].length; s++)
                            r in n || (n[r] = 0),
                            n[r] += i[r].charCodeAt(s);
                    return new t(n[0] / 128 % 1,n[1] / 128 % 1,n[2] / 128 % 1,1)
                }
            }, {
                key: "fromHSV",
                value: function(e, n, i) {
                    var r = new t;
                    return r.setFromHSV(e, n, i),
                    r
                }
            }]),
            t
        }(Bi)
          , yr = function(e) {
            function t(e) {
                var n;
                return L()(this, t),
                (n = F()(this, D()(t).call(this)))._depthMask = !0,
                n._depthTest = !0,
                n._depthFunc = -1,
                n._culling = -1,
                n._cullingEnabled = !0,
                n._blendEquation = -1,
                n._blendEnabled = !0,
                n._sourceBlend = -1,
                n._destinationBlend = -1,
                n._renderer = e,
                n.setBlendEnabled(!n._blendEnabled),
                n.setCullingEnabled(!n._cullingEnabled),
                n.setDepthMask(!n._depthMask),
                n.setDepthTest(!n._depthTest),
                n.enabledAttribArrays = [],
                n._textureSlots = [],
                n
            }
            return z()(t, e),
            O()(t, [{
                key: "bindTextureToSlot",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    this._textureSlots[t] != e && (this._renderer.context.activeTexture(er.TEXTURE0 + t),
                    this._renderer.context.bindTexture(er.TEXTURE_2D, e),
                    this._textureSlots[t] = e)
                }
            }, {
                key: "bindTexture3DToSlot",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    this._textureSlots[t] != e && (this._renderer.context.activeTexture(er.TEXTURE0 + t),
                    this._renderer.context.bindTexture(dr.TEXTURE_3D, e),
                    this._textureSlots[t] = e)
                }
            }, {
                key: "bindCubeTextureToSlot",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    this._textureSlots[t] != e && (this._renderer.context.activeTexture(er.TEXTURE0 + t),
                    this._renderer.context.bindTexture(er.TEXTURE_CUBE_MAP, e),
                    this._textureSlots[t] = e)
                }
            }, {
                key: "setProgram",
                value: function(e) {
                    return e != this._program && (this._program = e,
                    this._renderer.context.useProgram(this._program),
                    !0)
                }
            }, {
                key: "setDepthMask",
                value: function(e) {
                    e != this._depthMask && (this._renderer.context.depthMask(e),
                    this._depthMask = e)
                }
            }, {
                key: "getDepthMask",
                value: function() {
                    return this._depthMask
                }
            }, {
                key: "setDepthTest",
                value: function(e) {
                    e != this._depthTest && (e ? this._renderer.context.enable(er.DEPTH_TEST) : this._renderer.context.disable(er.DEPTH_TEST),
                    this._depthTest = e)
                }
            }, {
                key: "setDepthFunc",
                value: function(e) {
                    e != this._depthFunc && (e ? this._renderer.context.depthFunc(e) : this._renderer.context.depthFunc(this._renderer.context.LESS),
                    this._depthFunc = e)
                }
            }, {
                key: "setCullingEnabled",
                value: function(e) {
                    e != this._cullingEnabled && (e ? this._renderer.context.enable(er.CULL_FACE) : this._renderer.context.disable(er.CULL_FACE),
                    this._cullingEnabled = e)
                }
            }, {
                key: "setCulling",
                value: function(e) {
                    e != this._culling && (e == er.NONE ? this.setCullingEnabled(!1) : (this.setCullingEnabled(!0),
                    this._renderer.context.cullFace(e)),
                    this._culling = e)
                }
            }, {
                key: "setBlendEquation",
                value: function(e) {
                    e != this._blendEquation && (this._renderer.context.blendEquation(e),
                    this._blendEquation = e)
                }
            }, {
                key: "setBlendEnabled",
                value: function(e) {
                    e != this._blendEnabled && (e ? this._renderer.context.enable(er.BLEND) : this._renderer.context.disable(er.BLEND),
                    this._blendEnabled = e)
                }
            }, {
                key: "setBlendFunc",
                value: function(e, t) {
                    e == this._sourceBlend && t == this._destinationBlend || (this._renderer.context.blendFunc(e, t),
                    this._sourceBlend = e,
                    this._destinationBlend = t)
                }
            }, {
                key: "setBlendFuncSeparate",
                value: function(e, t, n, i) {
                    this._renderer.context.blendFuncSeparate(e, t, n, i),
                    this._sourceBlend = -1
                }
            }]),
            t
        }(vi)
          , Er = function() {
            function e() {
                L()(this, e),
                this.maxAnisotropy = 0
            }
            return O()(e, [{
                key: "enableExtensions",
                value: function(t) {
                    this.color_buffer_float = e.enableExtension(t, "WEBGL_color_buffer_float") || e.enableExtension(t, "EXT_color_buffer_float"),
                    this.color_buffer_half_float = e.enableExtension(t, "EXT_color_buffer_half_float"),
                    this.texture_float = e.enableExtension(t, "OES_texture_float"),
                    this.texture_float_linear = e.enableExtension(t, "OES_texture_float_linear"),
                    this.texture_half_float = e.enableExtension(t, "OES_texture_half_float"),
                    this.texture_half_float_linear = e.enableExtension(t, "OES_texture_half_float_linear"),
                    this.shader_texture_lod = e.enableExtension(t, "EXT_shader_texture_lod"),
                    this.standard_derivatives = e.enableExtension(t, "OES_standard_derivatives"),
                    this.blend_minmax = e.enableExtension(t, "EXT_blend_minmax"),
                    this.seamless_cube_map = e.enableExtension(t, "OES_seamless_cube_map"),
                    this.vertex_array_object = e.enableExtension(t, "OES_vertex_array_object"),
                    this.filter_anisotropic = e.enableExtension(t, "texture_filter_anisotropic"),
                    this.filter_anisotropic || (this.filter_anisotropic = e.enableExtension(t, "MOZ_EXT_texture_filter_anisotropic")),
                    this.filter_anisotropic || (this.filter_anisotropic = e.enableExtension(t, "WEBKIT_EXT_texture_filter_anisotropic")),
                    this.filter_anisotropic && (this.maxAnisotropy = t.getParameter(this.filter_anisotropic.MAX_TEXTURE_MAX_ANISOTROPY_EXT),
                    nr.log("MAX_TEXTURE_MAX_ANISOTROPY_EXT: ", this.maxAnisotropy)),
                    this.frag_depth = e.enableExtension(t, "EXT_frag_depth"),
                    this.depth_texture = e.enableExtension(t, "WEBGL_depth_texture"),
                    this.element_index_uint = e.enableExtension(t, "OES_element_index_uint"),
                    this.enableTextureCompression(t)
                }
            }, {
                key: "enableTextureCompression",
                value: function(t) {
                    var n = e.enableExtension(t, "WEBKIT_WEBGL_compressed_texture_s3tc");
                    if (n) {
                        var i = t.getParameter(t.COMPRESSED_TEXTURE_FORMATS);
                        if (i.length > 0)
                            for (var r in i)
                                i[r] === n.COMPRESSED_RGB_S3TC_DXT1_EXT && nr.log("support found for texture compression: RGB_S3TC_DXT1"),
                                i[r] === n.COMPRESSED_RGBA_S3TC_DXT1_EXT && nr.log("support found for texture compression: RGBA_S3TC_DXT1"),
                                i[r] === n.COMPRESSED_RGBA_S3TC_DXT3_EXT && nr.log("support found for texture compression: RGBA_S3TC_DXT3"),
                                i[r] === n.COMPRESSED_RGBA_S3TC_DXT5_EXT && nr.log("support found for texture compression: RGBA_S3TC_DXT5");
                        else
                            nr.log("no support found for texture compression ")
                    }
                }
            }, {
                key: "getMinMaxSupported",
                value: function() {
                    return null !== this.blend_minmax
                }
            }], [{
                key: "enableExtension",
                value: function(e, t) {
                    var n = e.getExtension(t);
                    return n ? nr.log("enabled extension " + t) : nr.log("extension " + t + " is not supported"),
                    n
                }
            }]),
            e
        }()
          , Tr = function() {
            function e() {
                L()(this, e),
                this.webpackContexts = [],
                this.assetNameMap = {},
                this.assetPathMap = {}
            }
            return O()(e, [{
                key: "loadAssetByPath",
                value: function(e) {
                    var t = this.getAssetByPath(e);
                    return Zi.loadSingleFromRequireContext(t.webpackContext, t.path)
                }
            }, {
                key: "getAssetByPath",
                value: function(e) {
                    var t = "./".concat(e.replace(/^\.\//, ""));
                    if ("undefined" === typeof this.assetPathMap[t])
                        throw new ReferenceError("Could not find asset with path ".concat(e, ". Available paths: \n").concat(Object.keys(this.assetPathMap).join("\n")));
                    return {
                        webpackContext: this.webpackContexts[this.assetPathMap[t]],
                        path: t
                    }
                }
            }, {
                key: "loadAssetByName",
                value: function(e) {
                    var t = this.getAssetByName(e);
                    return Zi.loadSingleFromRequireContext(t.webpackContext, t.path)
                }
            }, {
                key: "getAssetByName",
                value: function(e) {
                    if ("undefined" === typeof this.assetNameMap[e])
                        throw new ReferenceError('Could not find asset with name "'.concat(e, '". Available assets: \n').concat(Object.keys(this.assetNameMap.vs).join(", ")));
                    return {
                        webpackContext: this.webpackContexts[this.assetNameMap[e].contextIndex],
                        path: this.assetNameMap[e].path
                    }
                }
            }, {
                key: "addContext",
                value: function(e) {
                    var t = this;
                    if (!(this.webpackContexts.indexOf(e) >= 0)) {
                        var n = this.webpackContexts.length;
                        this.webpackContexts.push(e),
                        e.keys().forEach(function(e) {
                            var i = e.match(/([^\\\/]+)$/);
                            if (i) {
                                if (t.assetNameMap[i[1]]) {
                                    var r = t.webpackContexts[t.assetNameMap[i[1]].contextIndex].resolve(t.assetNameMap[i[1]].path);
                                    console.warn('WARNING: found asset "'.concat(e, '" but another asset with the name "').concat(i[1], '" was already found at "').concat(r, '"'))
                                }
                                t.assetNameMap[i[1]] = {
                                    contextIndex: n,
                                    path: e
                                }
                            }
                            t.assetPathMap[e] = n
                        })
                    }
                }
            }]),
            e
        }()
          , Rr = function(e) {
            function t(e, n, i, r, s, a) {
                var o;
                return L()(this, t),
                (o = F()(this, D()(t).call(this))).data = null,
                o.vertexCount = -1,
                o._renderer = e,
                o.stride = r,
                o.name = n,
                o.storeData = s,
                o.vertexCount = i.length / r,
                a ? (o.buffer = o._renderer.context.createBuffer(),
                o.setData(i, s)) : o.data = i,
                o
            }
            return z()(t, e),
            O()(t, [{
                key: "setData",
                value: function(e, t) {
                    if (t || !this.buffer ? this.data = e : this.data = null,
                    0 === e.length)
                        throw "VertexAttribute: no data: probably a mesh file could not be loaded";
                    if (this.buffer) {
                        var n = this._renderer.context;
                        n.bindBuffer(er.ARRAY_BUFFER, this.buffer),
                        n.bufferData(er.ARRAY_BUFFER, e.byteLength, er.STATIC_DRAW),
                        n.bufferSubData(er.ARRAY_BUFFER, 0, e)
                    }
                }
            }, {
                key: "getBufferLength",
                value: function() {
                    if (this.data)
                        return this.data.length;
                    if (!this.buffer)
                        throw new ReferenceError("Cannot get buffer length: no buffer set on VertextAttribute");
                    var e = this._renderer.context;
                    return e.bindBuffer(er.ARRAY_BUFFER, this.buffer),
                    e.getBufferParameter(er.ARRAY_BUFFER, er.BUFFER_SIZE) / 4
                }
            }, {
                key: "destruct",
                value: function() {
                    if (!this.isDestructed) {
                        var e = this._renderer.context;
                        this.buffer && e.deleteBuffer(this.buffer),
                        this.data = null,
                        q()(D()(t.prototype), "destruct", this).call(this)
                    }
                }
            }], [{
                key: "serialize",
                value: function(e) {
                    return null === e.data ? (console.error("Trying to serialize vertex attribute " + e.name + " without saved data"),
                    {}) : {
                        name: e.name,
                        data: e.data,
                        stride: e.stride,
                        storeData: e.storeData
                    }
                }
            }, {
                key: "deserialize",
                value: function(e) {
                    return {
                        name: e.name,
                        data: e.data,
                        stride: e.stride,
                        storeData: e.storeData
                    }
                }
            }]),
            t
        }(vi)
          , Ar = function e(t, n) {
            L()(this, e),
            this.name = t,
            this.stride = n
        };
        Ar.POSITION = new Ar("aPos",3),
        Ar.TEXCOORD0 = new Ar("aUV0",2),
        Ar.TEXCOORD1 = new Ar("aUV1",2),
        Ar.NORMAL = new Ar("aNormal",3),
        Ar.COLOR0 = new Ar("aColor0",3),
        Ar.COLOR1 = new Ar("aColor1",3),
        Ar.TANGENT = new Ar("aTangent",4);
        var xr = Ar
          , kr = function(e) {
            function t(e) {
                var n, i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return L()(this, t),
                (n = F()(this, D()(t).call(this)))._vertexCount = 0,
                n._isInterleavedBufferDirty = !0,
                n._attributeNames = {},
                n.renderer = e,
                n.attributes = [],
                n._vertexCount = 0,
                n.id = t.id++,
                n.interleaved = i,
                n.isDynamic = r,
                n
            }
            return z()(t, e),
            O()(t, [{
                key: "setJSONData",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.animatorId = e.animatorId,
                    this.isDynamic = e.isDynamic || !1,
                    e.indices && e.indices.length > 0 && (e.use32BitIndices ? this.setIndices32(new Uint32Array(e.indices)) : this.setIndices(new Uint16Array(e.indices)));
                    for (var n = 0; n < e.attributes.length; n++) {
                        var i = e.attributes[n];
                        this.setAttribute(i.name, i.stride, new Float32Array(i.data), t)
                    }
                }
            }, {
                key: "clone",
                value: function() {
                    for (var e = new t(this.renderer,this.interleaved,this.isDynamic), n = 0; n < this.attributes.length; n++)
                        e.attributes.push(this.attributes[n]);
                    return e._vertexCount = this._vertexCount,
                    e
                }
            }, {
                key: "interleaveData",
                value: function() {
                    if (this._isInterleavedBufferDirty && this.interleaved) {
                        this.interleavedStrideSum = 0;
                        for (var e = 0; e < this.attributes.length; e++)
                            this.interleavedStrideSum += this.attributes[e].stride;
                        for (var t = new Float32Array(this.interleavedStrideSum * this._vertexCount), n = 0, i = 0; i < this._vertexCount; i++)
                            for (var r = 0; r < this.attributes.length; r++)
                                for (var s = this.attributes[r], a = 0; a < s.stride; a++)
                                    t[n++] = s.data[i * s.stride + a];
                        for (var o = 0; o < this.attributes.length; o++)
                            this.attributes[o].storeData || (this.attributes[o].data = null);
                        this.interleavedBuffer = this.renderer.context.createBuffer();
                        var l = this.renderer.context;
                        l.bindBuffer(er.ARRAY_BUFFER, this.interleavedBuffer),
                        l.bufferData(er.ARRAY_BUFFER, t, l.STATIC_DRAW),
                        this._isInterleavedBufferDirty = !1,
                        nr.log("Mesh: finalize", this.attributes.length)
                    }
                }
            }, {
                key: "isInterleaved",
                value: function() {
                    return this.interleaved
                }
            }, {
                key: "hasIndices",
                value: function() {
                    return !!this.indices
                }
            }, {
                key: "setAttribute",
                value: function(e, t, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    this.setData(n, e, t, i)
                }
            }, {
                key: "setPositions",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , n = xr.POSITION;
                    this.setData(e, n.name, n.stride, t)
                }
            }, {
                key: "getPositions",
                value: function() {
                    return this.getData(xr.POSITION.name)
                }
            }, {
                key: "setNormals",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , n = xr.NORMAL;
                    this.setData(e, n.name, n.stride, t)
                }
            }, {
                key: "getNormals",
                value: function() {
                    return this.getData(xr.NORMAL.name)
                }
            }, {
                key: "setColors",
                value: function(e) {
                    var t = xr.COLOR0;
                    this.setData(e, t.name, t.stride)
                }
            }, {
                key: "getColors",
                value: function() {
                    return this.getData(xr.COLOR0.name)
                }
            }, {
                key: "setColors1",
                value: function(e) {
                    var t = xr.COLOR1;
                    this.setData(e, t.name, t.stride)
                }
            }, {
                key: "getColors1",
                value: function() {
                    return this.getData(xr.COLOR1.name)
                }
            }, {
                key: "setUV0",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , n = xr.TEXCOORD0;
                    this.setData(e, n.name, n.stride, t)
                }
            }, {
                key: "getUV0",
                value: function() {
                    return this.getData(xr.TEXCOORD0.name)
                }
            }, {
                key: "setUV1",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , n = xr.TEXCOORD1;
                    this.setData(e, n.name, n.stride, t)
                }
            }, {
                key: "getUV1",
                value: function() {
                    return this.getData(xr.TEXCOORD1.name)
                }
            }, {
                key: "setTangents",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , n = xr.TANGENT;
                    this.setData(e, n.name, n.stride, t)
                }
            }, {
                key: "getTangents",
                value: function() {
                    return this.getData(xr.TANGENT.name)
                }
            }, {
                key: "setData",
                value: function(e, t, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    this._attributeNames = {};
                    var r = this.getAttributeIndex(t)
                      , s = e.length / n;
                    r < 0 ? this.attributes.push(new Rr(this.renderer,t,e,n,i,!this.interleaved)) : this.attributes[r].vertexCount == s ? this.attributes[r].setData(e, i) : (this.attributes[r].destruct(),
                    this.attributes[r] = new Rr(this.renderer,t,e,n,i,!this.interleaved)),
                    this._vertexCount = s,
                    this.interleaved && (this._isInterleavedBufferDirty = !0)
                }
            }, {
                key: "deleteAttribute",
                value: function(e) {
                    var t = this.getAttributeIndex(e);
                    t >= 0 && this.attributes.splice(t, 1),
                    this._isInterleavedBufferDirty = !0,
                    this._attributeNames = {}
                }
            }, {
                key: "hasAttribute",
                value: function(e) {
                    var t = this._attributeNames[e];
                    if (!0 === t || !1 === t)
                        return t;
                    var n = this.getAttributeIndex(e);
                    return this._attributeNames[e] = n >= 0,
                    this._attributeNames[e]
                }
            }, {
                key: "getAttribute",
                value: function(e) {
                    var t = this.getAttributeIndex(e);
                    return t >= 0 ? this.attributes[t] : null
                }
            }, {
                key: "getAttributeIndex",
                value: function(e) {
                    for (var t = 0; t < this.attributes.length; t++)
                        if (this.attributes[t].name === e)
                            return t;
                    return -1
                }
            }, {
                key: "getData",
                value: function(e) {
                    var t = this.getAttribute(e);
                    return t && t.data ? t.data : (nr.log("Mesh: getData", e, "no data"),
                    null)
                }
            }, {
                key: "setIndices",
                value: function(e) {
                    if (!(e instanceof Uint16Array))
                        throw "Indices need to be of type Uint16Array";
                    this.indexType = er.UNSIGNED_SHORT,
                    this.indices = e;
                    var t = this.renderer.context;
                    this.indexBuffer || (this.indexBuffer = t.createBuffer()),
                    t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
                    t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW)
                }
            }, {
                key: "setIndices32",
                value: function(e) {
                    if (!(e instanceof Uint32Array))
                        throw "Indices need to be of type Uint32Array";
                    if (this.renderer.extensionManager.element_index_uint || this.renderer.context instanceof WebGL2RenderingContext) {
                        this.indexType = er.UNSIGNED_INT,
                        this.indices = e;
                        var t = this.renderer.context;
                        this.indexBuffer || (this.indexBuffer = t.createBuffer()),
                        t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer),
                        t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW)
                    } else
                        nr.log("mesh: setIndices32: extension not supported: element_index_uint: using 16 bits indices"),
                        this.setIndices(new Uint16Array(e))
                }
            }, {
                key: "getNumVertices",
                value: function() {
                    return this._vertexCount
                }
            }, {
                key: "isSkinned",
                value: function() {
                    return this.hasAttribute("aSkinIndex")
                }
            }, {
                key: "destruct",
                value: function() {
                    if (!this.isDestructed) {
                        this.renderer.destructVAO(this);
                        var e = this.renderer.context;
                        if (this.interleavedBuffer && e.deleteBuffer(this.interleavedBuffer),
                        this.indexBuffer && e.deleteBuffer(this.indexBuffer),
                        this.attributes)
                            for (var n = 0; n < this.attributes.length; n++)
                                this.attributes[n].destruct();
                        q()(D()(t.prototype), "destruct", this).call(this)
                    }
                }
            }]),
            t
        }(vi);
        kr.id = 0;
        var br = kr
          , Mr = function e() {
            L()(this, e),
            this.down = !1,
            this.downThisFrame = !1,
            this.downByTouch = !1,
            this.clickCanceled = !1,
            this.downTime = 0
        }
          , wr = function(e) {
            function t(e) {
                var n;
                L()(this, t),
                (n = F()(this, D()(t).call(this)))._mousePos = new rr,
                n._previousMousePos = new rr,
                n._mouseVelocity = new rr,
                n._normalized = new rr,
                n._screen = new rr,
                n._wheelCallbacks = [],
                n._mouseClickCallbacks = [],
                n._mouseDownCallbacks = [],
                n._buttons = [],
                n._manualUpdate = !1,
                n._resetSpeed = !1,
                n._preventDefault = !1,
                n._touchStartListener = function(e) {
                    n._preventDefault && e.preventDefault(),
                    n._resetSpeed = !0,
                    n.mouseDown(0),
                    n._buttons[0].downByTouch = !0,
                    n.setMousePosition(e.targetTouches[0]);
                    for (var t = 0; t < n._mouseDownCallbacks.length; t++)
                        n._mouseDownCallbacks[t].call(Be()(n))
                }
                ,
                n._touchMoveListener = function(e) {
                    n.setMousePosition(e.targetTouches[0]),
                    n._preventDefault && e.preventDefault()
                }
                ,
                n._endListener = function() {
                    for (var e = 0; e < n._buttons.length; e++)
                        n._buttons[e].down = !1,
                        n._buttons[e].downThisFrame = !1,
                        n._buttons[e].downByTouch = !1
                }
                ,
                n._mouseDownListener = function(e) {
                    n._preventDefault && e.preventDefault(),
                    n.mouseDown(e.which - 1),
                    n.setMousePosition(e);
                    for (var t = 0; t < n._mouseDownCallbacks.length; t++)
                        n._mouseDownCallbacks[t].call(Be()(n))
                }
                ,
                n._mouseMoveListener = function(e) {
                    n.setMousePosition(e);
                    for (var t = 0; t < 3; t++)
                        n._buttons[t].downTime > .25 && (n._buttons[t].clickCanceled = !0)
                }
                ,
                n._mouseWheelListener = function(e) {
                    for (var t = 0; t < n._wheelCallbacks.length; t++)
                        n._wheelCallbacks[t].call(Be()(n), Math.sign(-e.deltaY))
                }
                ,
                n._upListener = function() {
                    if (n._resetSpeed = !0,
                    !n._buttons[0].clickCanceled)
                        for (var e = 0; e < n._mouseClickCallbacks.length; e++)
                            n._mouseClickCallbacks[e].call(Be()(n));
                    for (var t = 0; t < n._buttons.length; t++)
                        n._buttons[t].down = !1,
                        n._buttons[t].downThisFrame = !1,
                        n._buttons[t].downByTouch = !1
                }
                ,
                n._target = e;
                for (var i = 0; i < 3; i++)
                    n._buttons.push(new Mr);
                return n._target.addEventListener("touchstart", n._touchStartListener, !1),
                n._target.addEventListener("touchmove", n._touchMoveListener, {
                    passive: !1
                }),
                n._target.addEventListener("touchend", n._upListener, !1),
                n._target.addEventListener("touchcancel", n._endListener, !1),
                n._target.addEventListener("mousedown", n._mouseDownListener, !1),
                n._target.addEventListener("mousemove", n._mouseMoveListener, !1),
                n._target.addEventListener("mouseup", n._upListener, !1),
                n._target.addEventListener("mousecancel", n._endListener, !1),
                n._target.addEventListener("mouseout", n._endListener, !1),
                n._target.addEventListener("wheel", n._mouseWheelListener, !1),
                n.updateLoop(),
                n
            }
            return z()(t, e),
            O()(t, [{
                key: "setPreventDefault",
                value: function(e) {
                    this._preventDefault = e
                }
            }, {
                key: "mouseDown",
                value: function(e) {
                    this._resetSpeed = !0,
                    this._buttons[e].down = !0,
                    this._buttons[e].downThisFrame = !0,
                    this._buttons[e].clickCanceled = !1,
                    this._buttons[e].downByTouch = !1,
                    this._buttons[e].downTime = 0
                }
            }, {
                key: "addWheelEvent",
                value: function(e) {
                    this._wheelCallbacks.push(e)
                }
            }, {
                key: "addMouseClickEvent",
                value: function(e) {
                    this._mouseClickCallbacks.push(e)
                }
            }, {
                key: "addMouseDownEvent",
                value: function(e) {
                    this._mouseDownCallbacks.push(e)
                }
            }, {
                key: "setMousePosition",
                value: function(e) {
                    this._mousePos.x = e.pageX,
                    this._mousePos.y = e.pageY
                }
            }, {
                key: "getPixelPos",
                value: function() {
                    return this._mousePos
                }
            }, {
                key: "getNormalizedPos",
                value: function() {
                    return this._normalized
                }
            }, {
                key: "getScreenPos",
                value: function() {
                    return this._screen
                }
            }, {
                key: "getNormalizedVelocity",
                value: function() {
                    return this._mouseVelocity
                }
            }, {
                key: "getButton",
                value: function(e) {
                    return this._buttons[e]
                }
            }, {
                key: "getMouseDown",
                value: function() {
                    return this._buttons[0].down
                }
            }, {
                key: "getMouseDownThisFrame",
                value: function() {
                    return this._buttons[0].downThisFrame
                }
            }, {
                key: "getMouseDownRight",
                value: function() {
                    return this._buttons[2].down
                }
            }, {
                key: "getMouseDownThisFrameRight",
                value: function() {
                    return this._buttons[2].downThisFrame
                }
            }, {
                key: "updateManual",
                value: function() {
                    this._manualUpdate = !0,
                    this.update()
                }
            }, {
                key: "updateLoop",
                value: function() {
                    var e = this;
                    this.isDestructed || this._manualUpdate || (this.update(),
                    window.requestAnimationFrame(function() {
                        return e.updateLoop()
                    }))
                }
            }, {
                key: "update",
                value: function() {
                    this._normalized.x = this._mousePos.x / this._target.clientWidth,
                    this._normalized.y = this._mousePos.y / this._target.clientHeight,
                    this._screen.x = 2 * this._normalized.x - 1,
                    this._screen.y = -(2 * this._normalized.y - 1),
                    this._resetSpeed ? (this._resetSpeed = !1,
                    this._mouseVelocity.setValues(0, 0)) : (this._mouseVelocity.x = this._normalized.x - this._previousMousePos.x,
                    this._mouseVelocity.y = this._normalized.y - this._previousMousePos.y),
                    this._previousMousePos.copy(this._normalized);
                    for (var e = 0; e < 3; e++) {
                        var t = this._buttons[e];
                        t.downTime > 0 && (t.downThisFrame = !1),
                        this._buttons[e].down && (t.downTime += Li.getInstance().deltaTime)
                    }
                }
            }, {
                key: "cancelClick",
                value: function() {
                    for (var e = 0; e < this._buttons.length; e++)
                        this._buttons[e].clickCanceled = !0
                }
            }, {
                key: "destruct",
                value: function() {
                    this._target && (this._target.removeEventListener("touchstart", this._touchStartListener, !1),
                    this._target.removeEventListener("touchmove", this._touchMoveListener, !1),
                    this._target.removeEventListener("touchend", this._upListener, !1),
                    this._target.removeEventListener("touchcancel", this._endListener, !1),
                    this._target.removeEventListener("mousedown", this._mouseDownListener, !1),
                    this._target.removeEventListener("mousemove", this._mouseMoveListener, !1),
                    this._target.removeEventListener("mouseend", this._endListener, !1),
                    this._target.removeEventListener("mousecancel", this._endListener, !1),
                    this._target.removeEventListener("mouseout", this._endListener, !1),
                    this._target.removeEventListener("wheel", this._mouseWheelListener, !1),
                    this._target.removeEventListener("mouseup", this._upListener, !1)),
                    q()(D()(t.prototype), "destruct", this).call(this)
                }
            }]),
            t
        }(vi)
          , Sr = n(705)
          , Cr = function(e) {
            function t(e, n, i, r, s) {
                var a, o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5], l = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6], h = arguments.length > 7 && void 0 !== arguments[7] && arguments[7], u = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];
                if (L()(this, t),
                (a = F()(this, D()(t).call(this))).textureCount = 0,
                a.isWebgl2 = !1,
                a._renderWidth = 1,
                a._renderHeight = 1,
                a._renderSize = new rr,
                a.handleCanvasResize = function() {
                    a.setRenderSize(a.getCanvas().width, a.getCanvas().height)
                }
                ,
                a.id = t._id++,
                null === r ? a.shaderIndex = new Tr : "function" === typeof r ? (a.shaderIndex = new Tr,
                a.shaderIndex.addContext(r)) : a.shaderIndex = r,
                a.shaderIndex.addContext(Sr),
                a._canvas = n,
                a._canvas.addEventListener("resize", a.handleCanvasResize),
                i === t.webgl2ContextName ? a.isWebgl2 = !0 : o || a.getAlphaIsCorrect() || (o = !0),
                a.context = a.getCanvas().getContext(i, {
                    alpha: o,
                    stencil: h,
                    preserveDrawingBuffer: !l,
                    premultipliedAlpha: u,
                    antialias: s
                }),
                !a.context)
                    throw new Error("could not get a 3d context: aborting");
                return a.maxParams = new mr(a.context),
                a.renderState = new yr(Be()(a)),
                t.staticExtensionManager = a.extensionManager = new Er,
                a.extensionManager.enableExtensions(a.context),
                a._copyTextureMaterial = new pr(Be()(a),e,"default"),
                a._copyTextureMaterial.depthTest = !1,
                a._copyTextureMaterial.depthWrite = !1,
                a._clearColor = new gr(.5,.5,.5,1),
                a._blitMesh = a.createTriangle(),
                a
            }
            return z()(t, e),
            O()(t, [{
                key: "getAlphaIsCorrect",
                value: function() {
                    var e = document.createElement("canvas");
                    e.width = 1,
                    e.height = 1;
                    var t = e.getContext("experimental-webgl", {
                        alpha: !1,
                        preserveDrawingBuffer: !1
                    });
                    t.clearColor(1, 0, 0, 1),
                    t.clear(t.COLOR_BUFFER_BIT | t.DEPTH_BUFFER_BIT);
                    var n = document.createElement("canvas").getContext("2d");
                    n.drawImage(e, 0, 0);
                    var i = 255 === n.getImageData(0, 0, 1, 1).data[3];
                    return i || nr.log("alpha bug detected"),
                    i
                }
            }, {
                key: "init",
                value: function() {
                    nr.log("renderer: textureCount", this.textureCount),
                    this.unSetRenderTexture(),
                    this.handleCanvasResize()
                }
            }, {
                key: "getRenderContext",
                value: function() {
                    throw new ReferenceError("GetRenderContext(): no implementation defined, no context available.")
                }
            }, {
                key: "preprocessShaderString",
                value: function(e) {
                    return e
                }
            }, {
                key: "draw",
                value: function(e, t) {
                    arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                }
            }, {
                key: "startBatch",
                value: function(e, t) {}
            }, {
                key: "drawElements",
                value: function(e, t) {
                    arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                }
            }, {
                key: "endBatch",
                value: function() {}
            }, {
                key: "createTriangle",
                value: function() {
                    var e = new br(this)
                      , t = new Float32Array([-1, -1, 0, -1, 3, 0, 3, -1, 0]);
                    e.setPositions(t);
                    var n = new Float32Array([0, 0, 0, 2, 2, 0]);
                    e.setUV0(n);
                    var i = new Uint16Array([0, 2, 1]);
                    return e.setIndices(i),
                    e
                }
            }, {
                key: "getCanvas",
                value: function() {
                    return this._canvas
                }
            }, {
                key: "getMouseListener",
                value: function() {
                    return this._mouseListener || (this._mouseListener = new wr(this.getCanvas())),
                    this._mouseListener
                }
            }, {
                key: "getRenderWidth",
                value: function() {
                    return this._renderWidth
                }
            }, {
                key: "getRenderHeight",
                value: function() {
                    return this._renderHeight
                }
            }, {
                key: "getRenderSize",
                value: function() {
                    return this._renderSize
                }
            }, {
                key: "enablePointsprites",
                value: function() {
                    this.context.enable(34370)
                }
            }, {
                key: "blit",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                      , i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                      , r = n || this._copyTextureMaterial;
                    t && this.setRenderTexture(t),
                    e && r.setTexture("uTexture", e),
                    i && this.clear(),
                    this.draw(this._blitMesh, r),
                    t && this.unSetRenderTexture()
                }
            }, {
                key: "setRenderTexture",
                value: function(e) {
                    e.scaleToCanvas && e.setSize(Math.round(this.getCanvas().width * e.sizeMultiplier), Math.round(this.getCanvas().height * e.sizeMultiplier)),
                    e.setAsTarget(),
                    this.setRenderSize(e.width, e.height)
                }
            }, {
                key: "unSetRenderTexture",
                value: function() {
                    var e = this.context;
                    e.bindFramebuffer(e.FRAMEBUFFER, null),
                    e.bindRenderbuffer(e.RENDERBUFFER, null),
                    this.setRenderSize(this.getCanvas().width, this.getCanvas().height)
                }
            }, {
                key: "clearWithColor",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                      , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                    this.context.clearColor(e, t, n, i),
                    this.clear(),
                    this.context.clearColor(this._clearColor.r, this._clearColor.g, this._clearColor.b, this._clearColor.a)
                }
            }, {
                key: "clearRenderTexture",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                      , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                      , r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                    this.setRenderTexture(e),
                    this.clearWithColor(t, n, i, r),
                    this.unSetRenderTexture()
                }
            }, {
                key: "getAspect",
                value: function() {
                    return this._renderWidth / this._renderHeight
                }
            }, {
                key: "clearDepth",
                value: function() {
                    this.renderState.setDepthMask(!0),
                    this.context.clear(er.DEPTH_BUFFER_BIT)
                }
            }, {
                key: "setClearColor",
                value: function(e, t, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                    this._clearColor.setValues(e, t, n, i),
                    this.context.clearColor(e, t, n, i)
                }
            }, {
                key: "getClearColor",
                value: function() {
                    return this._clearColor
                }
            }, {
                key: "clear",
                value: function() {
                    this.context.depthMask(!0),
                    this.context.clear(er.COLOR_BUFFER_BIT | er.DEPTH_BUFFER_BIT),
                    this.context.depthMask(this.renderState.getDepthMask())
                }
            }, {
                key: "setRenderSize",
                value: function(e, t) {
                    this._renderWidth === e && this._renderHeight === t || (this._renderWidth = e,
                    this._renderHeight = t,
                    this._renderSize.x = e,
                    this._renderSize.y = t,
                    this.context.viewport(0, 0, this._renderWidth, this._renderHeight))
                }
            }, {
                key: "setScissor",
                value: function(e, t, n, i) {
                    var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                    e = ci.clamp01(e),
                    t = ci.clamp01(t);
                    var s = (n = ci.clamp01(n)) - e
                      , a = (i = ci.clamp01(i)) - t
                      , o = this._renderWidth
                      , l = this._renderHeight;
                    this.context.enable(er.SCISSOR_TEST),
                    this.context.scissor(e * o, t * l, s * o, a * l),
                    r && this.context.viewport(e * o, t * l, s * o, a * l)
                }
            }, {
                key: "setScissorPixels",
                value: function(e, t, n, i) {
                    this.context.enable(er.SCISSOR_TEST),
                    this.context.scissor(e, t, n - e, i - t)
                }
            }, {
                key: "unSetScissor",
                value: function() {
                    this.context.disable(er.SCISSOR_TEST)
                }
            }, {
                key: "setViewPort",
                value: function(e, t, n, i) {
                    this._renderWidth = n,
                    this._renderHeight = i,
                    this.context.viewport(e, t, this._renderWidth, this._renderHeight)
                }
            }, {
                key: "unsetViewPort",
                value: function() {
                    this.context.viewport(0, 0, this._canvas.width, this._canvas.height)
                }
            }, {
                key: "setChannelMask",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                      , t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                      , i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    this.context.colorMask(e, t, n, i)
                }
            }, {
                key: "clearChannelMask",
                value: function() {
                    this.context.colorMask(!0, !0, !0, !0)
                }
            }, {
                key: "setStencilEnabled",
                value: function(e) {
                    e ? this.context.enable(er.STENCIL_TEST) : this.context.disable(er.STENCIL_TEST)
                }
            }, {
                key: "startDrawToStencil",
                value: function() {
                    var e = this.context;
                    this.setStencilEnabled(!0),
                    e.stencilFunc(er.ALWAYS, 1, 255),
                    e.stencilOp(er.KEEP, er.KEEP, er.REPLACE),
                    e.stencilMask(255)
                }
            }, {
                key: "setStencilFuncEqual",
                value: function(e) {
                    this.context.stencilFunc(e ? er.EQUAL : er.NOTEQUAL, 1, 255)
                }
            }, {
                key: "destructVAO",
                value: function(e) {}
            }, {
                key: "destruct",
                value: function() {
                    if (!this.isDestructed) {
                        nr.log("Renderer: destruct");
                        for (var e = this.context, n = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), i = 0; i < n; ++i)
                            e.activeTexture(e.TEXTURE0 + i),
                            e.bindTexture(e.TEXTURE_2D, null),
                            e.bindTexture(e.TEXTURE_CUBE_MAP, null);
                        e.bindBuffer(e.ARRAY_BUFFER, null),
                        e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, null),
                        e.bindRenderbuffer(e.RENDERBUFFER, null),
                        e.bindFramebuffer(e.FRAMEBUFFER, null),
                        e.useProgram(null);
                        var r = e.getExtension("WEBGL_lose_context");
                        r && r.loseContext(),
                        this._blitMesh && this._blitMesh.destruct(),
                        this._copyTextureMaterial && this._copyTextureMaterial.destruct(),
                        this._canvas.removeEventListener("resize", this.handleCanvasResize),
                        this._mouseListener && this._mouseListener.destruct(),
                        q()(D()(t.prototype), "destruct", this).call(this)
                    }
                }
            }]),
            t
        }(vi);
        Cr._id = 0,
        Cr.webgl2ContextName = "webgl2",
        Cr.webgl1ContextName = "experimental-webgl";
        var Ir = Cr
          , Pr = function(e) {
            function t(e, n, i, r) {
                var s, a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], o = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], l = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
                return L()(this, t),
                (s = F()(this, D()(t).call(this, e, n, "webgl2", i, r, a, o, l)))._vertexArrayObjects = {},
                s._vertexArrayObjects = {},
                s
            }
            return z()(t, e),
            O()(t, [{
                key: "init",
                value: function() {
                    q()(D()(t.prototype), "init", this).call(this)
                }
            }, {
                key: "getRenderContext",
                value: function() {
                    return this.context
                }
            }, {
                key: "preprocessShaderString",
                value: function(e) {
                    var t = e.indexOf("#version")
                      , n = "";
                    return t > -1 && (n = e.substr(t, e.indexOf("\n", t) - t)),
                    e = n + "\n#define WEBGL2\n" + (e = e.replace(n, ""))
                }
            }, {
                key: "getVAO",
                value: function(e, t) {
                    var n = null
                      , i = this._vertexArrayObjects[e.id];
                    return i ? (n = i[t.id]) || (n = this.initVAO(e, t),
                    i[t.id] = n) : (i = [],
                    n = this.initVAO(e, t),
                    i[t.id] = n,
                    this._vertexArrayObjects[e.id] = i),
                    n
                }
            }, {
                key: "initVAO",
                value: function(e, t) {
                    var n = this.getRenderContext()
                      , i = n.createVertexArray();
                    n.bindVertexArray(i);
                    var r = 0;
                    e.isInterleaved() && (e.interleaveData(),
                    this.context.bindBuffer(this.context.ARRAY_BUFFER, e.interleavedBuffer));
                    for (var s = 0; s < e.attributes.length; s++) {
                        var a = e.attributes[s]
                          , o = t.shader.getAttributeByName(a.name);
                        if (o) {
                            if (a.stride !== o.stride) {
                                nr.log("Renderer: initVAO: strides don't match: ", a.stride, o.stride);
                                continue
                            }
                            if (e.isInterleaved())
                                n.enableVertexAttribArray(o.loc),
                                n.vertexAttribPointer(o.loc, o.stride, n.FLOAT, !1, 4 * e.interleavedStrideSum, r);
                            else {
                                if (void 0 === a.buffer)
                                    throw new ReferenceError("Expected buffer to be defined on VertexAttribute on non-interleaved mesh.");
                                n.bindBuffer(n.ARRAY_BUFFER, a.buffer),
                                n.enableVertexAttribArray(o.loc),
                                n.vertexAttribPointer(o.loc, o.stride, n.FLOAT, !1, 4 * o.stride, 0)
                            }
                        }
                        e.interleaved && (r += 4 * a.stride)
                    }
                    return e.indexBuffer && n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, e.indexBuffer),
                    i
                }
            }, {
                key: "draw",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                      , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
                    t.setActive();
                    var r = this.getVAO(e, t);
                    this.context.bindVertexArray(r),
                    this.drawElements(e, t, n, i)
                }
            }, {
                key: "startBatch",
                value: function(e, t) {
                    t.setActive();
                    var n = this.getVAO(e, t);
                    this.getRenderContext().bindVertexArray(n)
                }
            }, {
                key: "drawElements",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                      , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
                    if (e.hasIndices()) {
                        var r = e.indices.length;
                        i > 0 ? this.context.drawElements(t.drawType, Math.min(r, i), e.indexType, 0) : this.context.drawElements(t.drawType, r, e.indexType, 0)
                    } else {
                        var s = e.getNumVertices() - n;
                        i > 0 ? this.context.drawArrays(t.drawType, n, Math.min(s, i)) : this.context.drawArrays(t.drawType, n, s)
                    }
                }
            }, {
                key: "drawInstanced",
                value: function(e, t, n, i) {
                    t.setActive();
                    var r = this._vertexArrayObjects && void 0 !== this._vertexArrayObjects[e.id] && void 0 !== this._vertexArrayObjects[e.id][t.id]
                      , s = this.getVAO(e, t)
                      , a = this.getRenderContext();
                    if (a.bindVertexArray(s),
                    !r)
                        for (var o = 0; o < i.attributes.length; ++o) {
                            var l = i.attributes[o];
                            a.bindBuffer(a.ARRAY_BUFFER, l.buffer),
                            a.enableVertexAttribArray(l.index),
                            a.vertexAttribPointer(l.index, l.nrComponents, a.FLOAT, !1, l.bufferStride, l.bufferOffset),
                            a.vertexAttribDivisor(l.index, 1)
                        }
                    e.hasIndices() ? a.drawElementsInstanced(t.drawType, e.indices.length, e.indexType, 0, n) : a.drawArraysInstanced(t.drawType, 0, e.getNumVertices(), n)
                }
            }, {
                key: "destruct",
                value: function() {
                    if (!this.isDestructed) {
                        if (nr.log("RendererWebGL2: destruct"),
                        this._vertexArrayObjects)
                            for (var e in this._vertexArrayObjects)
                                for (var n = 0; n < this._vertexArrayObjects[e].length; ++n)
                                    this.getRenderContext().deleteVertexArray(this._vertexArrayObjects[e][n]);
                        q()(D()(t.prototype), "destruct", this).call(this)
                    }
                }
            }]),
            t
        }(Ir)
          , Lr = function() {
            function e() {
                L()(this, e)
            }
            return O()(e, null, [{
                key: "checkFloatCompatibility",
                value: function(t, n) {
                    if (!t.extensionManager.texture_float)
                        if (t.extensionManager.texture_half_float) {
                            if (n === e.RGB_FLOAT)
                                return e.RGB_HALF_FLOAT;
                            if (n === e.RGBA_FLOAT)
                                return e.RGBA_HALF_FLOAT
                        } else
                            console.log("Texture: setFormatType: not supported: ", n);
                    return n
                }
            }, {
                key: "checkHalfFloatCompatibility",
                value: function(t, n) {
                    if (!t.extensionManager.texture_half_float)
                        if (t.extensionManager.texture_float) {
                            if (n === e.RGB_HALF_FLOAT)
                                return e.RGB_FLOAT;
                            if (n === e.RGBA_HALF_FLOAT)
                                return e.RGBA_FLOAT
                        } else
                            console.log("Texture: setFormatType: not supported: ", n);
                    return n
                }
            }, {
                key: "validateFormatType",
                value: function(t, n) {
                    switch (n) {
                    case e.RGB_FLOAT:
                        n = this.checkFloatCompatibility(t, n);
                    case e.RGBA_FLOAT:
                        n = this.checkFloatCompatibility(t, n);
                    case e.RGBA_HALF_FLOAT:
                        n = this.checkHalfFloatCompatibility(t, n);
                    case e.RGB_HALF_FLOAT:
                        n = this.checkHalfFloatCompatibility(t, n)
                    }
                    return n
                }
            }, {
                key: "getFormat",
                value: function(t, n) {
                    switch (n) {
                    case e.RGBA_UNSIGNED_BYTE:
                        return er.RGBA;
                    case e.RGB_UNSIGNED_BYTE:
                    case e.RGB_FLOAT:
                        return er.RGB;
                    case e.RGBA_FLOAT:
                    case e.RGBA_HALF_FLOAT:
                        return er.RGBA;
                    case e.RGB_HALF_FLOAT:
                        return er.RGB;
                    case e.RG_HALF_FLOAT:
                        return dr.RG;
                    case e.LUMINANCE_UNSIGNED_BYTE:
                    case e.LUMINANCE_FLOAT:
                    case e.LUMINANCE_HALF_fLOAT:
                        return t instanceof Pr ? dr.RED : er.LUMINANCE;
                    case e.DEPTH_UINTSHORT:
                    case e.DEPTH_FLOAT:
                        return er.DEPTH_COMPONENT;
                    default:
                        return nr.error("can not yet get format for formatType: ", n),
                        -1
                    }
                }
            }, {
                key: "getType",
                value: function(t, n) {
                    switch (n) {
                    case e.RGBA_UNSIGNED_BYTE:
                    case e.RGB_UNSIGNED_BYTE:
                        return er.UNSIGNED_BYTE;
                    case e.RGBA_FLOAT:
                    case e.RGB_FLOAT:
                        return er.FLOAT;
                    case e.RGBA_HALF_FLOAT:
                    case e.RGB_HALF_FLOAT:
                    case e.RG_HALF_FLOAT:
                        return e.getHalfFloatType(t);
                    case e.LUMINANCE_UNSIGNED_BYTE:
                        return er.UNSIGNED_BYTE;
                    case e.LUMINANCE_FLOAT:
                        return er.FLOAT;
                    case e.LUMINANCE_HALF_fLOAT:
                        return e.getHalfFloatType(t);
                    case e.DEPTH_UINTSHORT:
                        return er.UNSIGNED_SHORT;
                    case e.DEPTH_FLOAT:
                        return er.FLOAT;
                    default:
                        return nr.error("can not yet get type for formatType: ", n),
                        -1
                    }
                }
            }, {
                key: "getHalfFloatType",
                value: function(e) {
                    if (e instanceof Pr)
                        return dr.HALF_FLOAT;
                    var t = e.extensionManager.texture_half_float;
                    return t ? t.HALF_FLOAT_OES : -1
                }
            }, {
                key: "getInternalFormat",
                value: function(t) {
                    switch (t) {
                    case e.RGBA_UNSIGNED_BYTE:
                        return dr.RGBA8;
                    case e.RGB_UNSIGNED_BYTE:
                        return dr.RGB8;
                    case e.RGBA_FLOAT:
                        return dr.RGBA32F;
                    case e.RGB_FLOAT:
                        return dr.RGB32F;
                    case e.RGBA_HALF_FLOAT:
                        return dr.RGBA16F;
                    case e.RGB_HALF_FLOAT:
                        return dr.RGB16F;
                    case e.RG_HALF_FLOAT:
                        return dr.RG16F;
                    case e.LUMINANCE_UNSIGNED_BYTE:
                        return dr.R8;
                    case e.LUMINANCE_FLOAT:
                        return dr.R32F;
                    case e.LUMINANCE_HALF_fLOAT:
                        return dr.R16F;
                    case e.DEPTH_UINTSHORT:
                        return dr.DEPTH_COMPONENT24;
                    case e.DEPTH_FLOAT:
                        return dr.DEPTH_COMPONENT32F;
                    default:
                        return nr.error("can not yet get type for formatType: ", t),
                        -1
                    }
                }
            }, {
                key: "getBytesPerPixel",
                value: function(t) {
                    switch (t) {
                    case e.RGBA_UNSIGNED_BYTE:
                        return 4;
                    case e.RGB_UNSIGNED_BYTE:
                        return 3;
                    case e.RGB_FLOAT:
                        return 12;
                    case e.RGBA_FLOAT:
                        return 16;
                    case e.RGBA_HALF_FLOAT:
                        return 8;
                    case e.RGB_HALF_FLOAT:
                        return 6;
                    case e.RG_HALF_FLOAT:
                        return 4;
                    case e.LUMINANCE_UNSIGNED_BYTE:
                        return 1;
                    case e.LUMINANCE_FLOAT:
                        return 4;
                    case e.LUMINANCE_HALF_fLOAT:
                    case e.DEPTH_UINTSHORT:
                        return 2;
                    case e.DEPTH_FLOAT:
                    default:
                        return 4
                    }
                }
            }]),
            e
        }();
        Lr.ALPHA_UNSIGNED_BYTE = "ALPHA UNSIGNED_BYTE",
        Lr.ALPHA_FLOAT = "ALPHA FLOAT",
        Lr.RGBA_UNSIGNED_BYTE = "RGBA UNSIGNED_BYTE",
        Lr.RGBA_FLOAT = "RGBA FLOAT",
        Lr.RGBA_HALF_FLOAT = "RGBA HALF_FLOAT",
        Lr.RGB_HALF_FLOAT = "RGB HALF_FLOAT",
        Lr.RGB_UNSIGNED_BYTE = "RGB UNSIGNED_BYTE",
        Lr.RGB_FLOAT = "RGB_FLOAT",
        Lr.LUMINANCE_UNSIGNED_BYTE = "LUMINANCE UNSIGNED_BYTE",
        Lr.LUMINANCE_FLOAT = "LUMINANCE FLOAT",
        Lr.LUMINANCE_HALF_fLOAT = "LUMINANCE HALF_FLOAT",
        Lr.DEPTH_UINTSHORT = "DEPTH_UINTSHORT",
        Lr.DEPTH_FLOAT = "DEPTH_FLOAT",
        Lr.RG_HALF_FLOAT = "RG HALF_FLOAT";
        var Vr = function(e) {
            function t(e) {
                var n;
                L()(this, t),
                (n = F()(this, D()(t).call(this))).renderer = e,
                n.renderer.textureCount++;
                var i = n.renderer.context;
                return n.textureGL = i.createTexture(),
                n
            }
            return z()(t, e),
            O()(t, [{
                key: "bindToSlot",
                value: function() {
                    arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                }
            }, {
                key: "setSize",
                value: function(e, t, n) {}
            }, {
                key: "destruct",
                value: function() {
                    if (!this.isDestructed) {
                        var e = this.renderer.context;
                        this.textureGL && e.deleteTexture(this.textureGL)
                    }
                    q()(D()(t.prototype), "destruct", this).call(this)
                }
            }]),
            t
        }(vi)
          , Or = function(e) {
            function t(e, n, i, r) {
                var s, a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4], o = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], l = arguments.length > 6 && void 0 !== arguments[6] && arguments[6], h = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];
                return L()(this, t),
                (s = F()(this, D()(t).call(this, e, n, Ir.webgl1ContextName, i, r, a, o, l, h)))._vertexArrayObjects = {},
                s
            }
            return z()(t, e),
            O()(t, [{
                key: "init",
                value: function() {
                    q()(D()(t.prototype), "init", this).call(this)
                }
            }, {
                key: "getRenderContext",
                value: function() {
                    return this.context
                }
            }, {
                key: "preprocessShaderString",
                value: function(e) {
                    return "#define WEBGL1\n" + e
                }
            }, {
                key: "initVAO",
                value: function(e, t) {
                    var n = this.extensionManager.vertex_array_object
                      , i = n.createVertexArrayOES();
                    return n.bindVertexArrayOES(i),
                    this.setStates(e, t),
                    n.bindVertexArrayOES(null),
                    i
                }
            }, {
                key: "setStates",
                value: function(e, t) {
                    var n = this.context;
                    if (e.isInterleaved()) {
                        e.interleaveData(),
                        n.bindBuffer(n.ARRAY_BUFFER, e.interleavedBuffer);
                        for (var i = 0, r = 0; r < e.attributes.length; r++) {
                            var s = e.attributes[r]
                              , a = t.shader.getAttributeByName(s.name);
                            a && (n.enableVertexAttribArray(a.loc),
                            n.vertexAttribPointer(a.loc, a.stride, n.FLOAT, !1, 4 * e.interleavedStrideSum, i)),
                            i += 4 * s.stride
                        }
                    } else
                        for (var o = 0; o < e.attributes.length; o++) {
                            var l = e.attributes[o]
                              , h = t.shader.getAttributeByName(l.name);
                            if (h) {
                                if (void 0 === l.buffer)
                                    throw new ReferenceError("Expected buffer to be defined on VertexAttribute when setting states.");
                                n.bindBuffer(n.ARRAY_BUFFER, l.buffer),
                                n.enableVertexAttribArray(h.loc),
                                n.vertexAttribPointer(h.loc, h.stride, n.FLOAT, !1, 4 * h.stride, 0)
                            }
                        }
                    e.indexBuffer && n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, e.indexBuffer)
                }
            }, {
                key: "destructVAO",
                value: function(e) {
                    var t = this.extensionManager.vertex_array_object;
                    if (t) {
                        var n = this._vertexArrayObjects[e.id];
                        for (var i in n) {
                            var r = n[i];
                            t.deleteVertexArrayOES(r)
                        }
                        this._vertexArrayObjects[e.id] = []
                    }
                }
            }, {
                key: "getVAO",
                value: function(e, t) {
                    var n, i = this._vertexArrayObjects[e.id];
                    return i ? (n = i[t.id]) || (n = this.initVAO(e, t),
                    i[t.id] = n) : (i = {},
                    n = this.initVAO(e, t),
                    i[t.id] = n,
                    this._vertexArrayObjects[e.id] = i),
                    n
                }
            }, {
                key: "bindVAO",
                value: function(e) {
                    var t = this.extensionManager.vertex_array_object;
                    e != this._currentVAO && (t.bindVertexArrayOES(e),
                    this._currentVAO = e)
                }
            }, {
                key: "drawVAO",
                value: function(e, t, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                      , r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1;
                    n.setActive(),
                    this.bindVAO(e),
                    this.drawElements(t, n, i, r),
                    this.bindVAO(null)
                }
            }, {
                key: "draw",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                      , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
                    if (t.setActive(),
                    !this.extensionManager.vertex_array_object || e.isDynamic)
                        this.setStates(e, t),
                        this.drawElements(e, t, n, i);
                    else {
                        var r = this.getVAO(e, t);
                        this.bindVAO(r),
                        this.drawElements(e, t, n, i),
                        this.bindVAO(null)
                    }
                }
            }, {
                key: "startBatch",
                value: function(e, t) {
                    t.setActive(),
                    this.extensionManager.vertex_array_object ? this.extensionManager.vertex_array_object.bindVertexArrayOES(this.getVAO(e, t)) : this.setStates(e, t)
                }
            }, {
                key: "drawElements",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                      , i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : -1;
                    if (e.indices) {
                        if (void 0 === e.indexType)
                            throw new ReferenceError("expected mesh.indexType to be set on a mesh with indices");
                        i > 0 ? this.context.drawElements(t.drawType, Math.min(i, e.indices.length), e.indexType, n * (e.indexType == er.UNSIGNED_SHORT ? 2 : 4)) : this.context.drawElements(t.drawType, e.indices.length, e.indexType, 0)
                    } else {
                        var r = e.getNumVertices() - n;
                        i > 0 ? this.context.drawArrays(t.drawType, n, Math.min(r, i)) : this.context.drawArrays(t.drawType, n, r)
                    }
                }
            }, {
                key: "endBatch",
                value: function() {
                    this.extensionManager.vertex_array_object && this.extensionManager.vertex_array_object.bindVertexArrayOES(null)
                }
            }, {
                key: "destruct",
                value: function() {
                    if (!this.isDestructed) {
                        nr.log("RendererWebGL1: destruct");
                        var e = this.extensionManager.vertex_array_object;
                        if (e && this._vertexArrayObjects)
                            for (var n = 0; n < this._vertexArrayObjects.length; n++)
                                e.deleteVertexArrayOES(this._vertexArrayObjects[n]);
                        q()(D()(t.prototype), "destruct", this).call(this)
                    }
                }
            }]),
            t
        }(Ir)
          , Nr = function(e) {
            function t(e) {
                var n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Lr.RGBA_UNSIGNED_BYTE, r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], s = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
                if (L()(this, t),
                (n = F()(this, D()(t).call(this, e))).name = "unnamed",
                n._width = -1,
                n._height = -1,
                n._size = new rr,
                n.internalFormat = -1,
                n.filterLinearEnabled = !0,
                n.useMips = !1,
                n._mipsCreated = !1,
                n.wrapModeClamp = !0,
                e instanceof Or)
                    n.formatType = Lr.validateFormatType(e, i);
                else {
                    if (!(e instanceof Pr))
                        throw new Error("Could not determine type of renderer");
                    n.formatType = i,
                    n.internalFormat = Lr.getInternalFormat(i)
                }
                return n._format = Lr.getFormat(n.renderer, n.formatType),
                n._type = Lr.getType(n.renderer, n.formatType),
                n.useMips = r,
                s ? n.setFilteringLinear() : n.setFilteringNearest(),
                n.setWrapModeClamp(a),
                n
            }
            return z()(t, e),
            O()(t, [{
                key: "bindToSlot",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.renderer.renderState.bindTextureToSlot(this.textureGL, e)
                }
            }, {
                key: "bind",
                value: function() {
                    this.renderer.context.activeTexture(er.TEXTURE0 + this.renderer.maxParams.MAX_TEXTURE_IMAGE_UNITS - 1),
                    this.renderer.context.bindTexture(er.TEXTURE_2D, this.textureGL)
                }
            }, {
                key: "setSize",
                value: function(e, t) {
                    if (e !== this.width || t !== this.height) {
                        if (this._width = e,
                        this._height = t,
                        this.bind(),
                        this.renderer instanceof Or) {
                            var n = this.renderer.context;
                            n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, 0),
                            n.texImage2D(er.TEXTURE_2D, 0, this.format, this.width, this.height, 0, this.format, this.type, null)
                        } else if (this.renderer instanceof Pr) {
                            var i = this.renderer.context;
                            i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, 0),
                            i.texImage2D(er.TEXTURE_2D, 0, this.internalFormat, this.width, this.height, 0, this.format, this.type, null)
                        }
                        nr.log("expensive operation: resize: ", e, t, "format: ", this.format)
                    }
                }
            }, {
                key: "getSize",
                value: function() {
                    return this._size.setValues(this.width, this.height),
                    this._size
                }
            }, {
                key: "setFilteringLinear",
                value: function() {
                    this.setFiltering(!0)
                }
            }, {
                key: "setFilteringNearest",
                value: function() {
                    this.setFiltering(!1)
                }
            }, {
                key: "setFiltering",
                value: function(e) {
                    this.filterLinearEnabled = e;
                    var t, n = this.renderer.context;
                    this.bind(),
                    t = this._mipsCreated ? e ? er.LINEAR_MIPMAP_LINEAR : er.NEAREST_MIPMAP_LINEAR : e ? er.LINEAR : er.NEAREST,
                    n.texParameteri(er.TEXTURE_2D, er.TEXTURE_MAG_FILTER, e ? er.LINEAR : er.NEAREST),
                    n.texParameteri(er.TEXTURE_2D, er.TEXTURE_MIN_FILTER, t)
                }
            }, {
                key: "setFilterAnisotropic",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 4;
                    if (this.setFilteringLinear(),
                    this.renderer.extensionManager.filter_anisotropic) {
                        var t = this.renderer.context;
                        e = Math.min(this.renderer.extensionManager.maxAnisotropy, e),
                        t.texParameterf(t.TEXTURE_2D, this.renderer.extensionManager.filter_anisotropic.TEXTURE_MAX_ANISOTROPY_EXT, e)
                    }
                }
            }, {
                key: "setWrapModeClamp",
                value: function(e) {
                    this.wrapModeClamp = e;
                    var t = this.renderer.context;
                    this.bind();
                    var n = e ? er.CLAMP_TO_EDGE : er.REPEAT;
                    t.texParameteri(er.TEXTURE_2D, er.TEXTURE_WRAP_S, n),
                    t.texParameteri(er.TEXTURE_2D, er.TEXTURE_WRAP_T, n)
                }
            }, {
                key: "setWrapModeClampHorizontal",
                value: function(e) {
                    this.setWrapModeClampForDirection(e, er.TEXTURE_WRAP_S)
                }
            }, {
                key: "setWrapModeClampVertical",
                value: function(e) {
                    this.setWrapModeClampForDirection(e, er.TEXTURE_WRAP_T)
                }
            }, {
                key: "setWrapModeClampForDirection",
                value: function(e, t) {
                    var n = this.renderer.context;
                    this.bind();
                    var i = e ? er.CLAMP_TO_EDGE : er.REPEAT;
                    n.texParameteri(er.TEXTURE_2D, t, i)
                }
            }, {
                key: "generateMips",
                value: function() {
                    if (this.renderer instanceof Or && !t.isPOT(this.width, this.height))
                        nr.error("can't generate mips: npot: ", this.width, this.height);
                    else {
                        var e = this.renderer.context;
                        this.bind(),
                        e.generateMipmap(e.TEXTURE_2D),
                        this.useMips = !0,
                        this._mipsCreated = !0,
                        this.filterLinearEnabled ? this.setFilteringLinear() : this.setFilteringNearest()
                    }
                }
            }, {
                key: "disableMips",
                value: function() {
                    this.useMips = !1,
                    this._mipsCreated = !1,
                    this.filterLinearEnabled ? this.setFilteringLinear() : this.setFilteringNearest()
                }
            }, {
                key: "setData",
                value: function(e, t, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                      , r = this.renderer.context;
                    this.bind(),
                    r.pixelStorei(er.UNPACK_ALIGNMENT, 1),
                    r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, i ? 1 : 0),
                    r.pixelStorei(er.UNPACK_COLORSPACE_CONVERSION_WEBGL, er.NONE),
                    this.renderer instanceof Or ? r.texImage2D(er.TEXTURE_2D, 0, this.format, t, n, 0, this.format, this.type, e) : this.renderer instanceof Pr && r.texImage2D(er.TEXTURE_2D, 0, this.internalFormat, t, n, 0, this.format, this.type, e),
                    this._width = t,
                    this._height = n
                }
            }, {
                key: "getData",
                value: function(e) {
                    var n, i = this.renderer.context;
                    switch (e || (e = t.getFramebuffer(this.renderer)),
                    i.bindFramebuffer(er.FRAMEBUFFER, e),
                    i.framebufferTexture2D(er.FRAMEBUFFER, er.COLOR_ATTACHMENT0, er.TEXTURE_2D, this.textureGL, 0),
                    this.formatType) {
                    case Lr.RGBA_FLOAT:
                        n = new Float32Array(this.width * this.height * 4);
                        break;
                    case Lr.RGB_FLOAT:
                        n = new Float32Array(this.width * this.height * 3);
                        break;
                    case Lr.RGBA_UNSIGNED_BYTE:
                        n = new Uint8Array(this.width * this.height * 4);
                        break;
                    case Lr.RGB_UNSIGNED_BYTE:
                        n = new Uint8Array(this.width * this.height * 3);
                        break;
                    case Lr.LUMINANCE_UNSIGNED_BYTE:
                        n = new Uint8Array(this.width * this.height);
                        break;
                    default:
                        throw new Error("can not yet get data for format type: " + this.formatType)
                    }
                    return i.readPixels(0, 0, this.width, this.height, this.format, this.type, n),
                    i.bindFramebuffer(i.FRAMEBUFFER, null),
                    n
                }
            }, {
                key: "getPixel",
                value: function(e, n) {
                    var i = this.renderer.context
                      , r = t.getFramebuffer(this.renderer);
                    i.bindFramebuffer(er.FRAMEBUFFER, r),
                    i.framebufferTexture2D(er.FRAMEBUFFER, er.COLOR_ATTACHMENT0, er.TEXTURE_2D, this.textureGL, 0);
                    var s = new Uint8Array(4);
                    return i.readPixels(e, n, 1, 1, er.RGBA, er.UNSIGNED_BYTE, s),
                    i.bindFramebuffer(i.FRAMEBUFFER, null),
                    s
                }
            }, {
                key: "getAspect",
                value: function() {
                    return this.width / this.height
                }
            }, {
                key: "setImage",
                value: function(e) {
                    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
                      , i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (!this.isDestructed) {
                        var r = this.renderer.context;
                        this.bind(),
                        r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, n ? 1 : 0),
                        r.pixelStorei(er.UNPACK_COLORSPACE_CONVERSION_WEBGL, er.NONE),
                        r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i ? 1 : 0),
                        r.texImage2D(er.TEXTURE_2D, 0, this.format, this.format, this.type, e),
                        e instanceof HTMLVideoElement ? (this._width = e.videoWidth,
                        this._height = e.videoHeight) : (this._width = e.width,
                        this._height = e.height,
                        t.textureBytesLoaded += this.width * this.height * Lr.getBytesPerPixel(this.formatType)),
                        this.useMips && this.generateMips(),
                        n && r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, 0),
                        i && r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0)
                    }
                }
            }, {
                key: "destruct",
                value: function() {
                    t._framebuffers[this.renderer.id] && (this.renderer.context.deleteFramebuffer(t._framebuffers[this.renderer.id]),
                    t._framebuffers[this.renderer.id] = null);
                    q()(D()(t.prototype), "destruct", this).call(this)
                }
            }, {
                key: "width",
                get: function() {
                    return this._width
                }
            }, {
                key: "height",
                get: function() {
                    return this._height
                }
            }, {
                key: "format",
                get: function() {
                    return this._format
                }
            }, {
                key: "type",
                get: function() {
                    return this._type
                }
            }], [{
                key: "isPOT",
                value: function(e, t) {
                    return 0 === (e & e - 1) && 0 === (t & t - 1)
                }
            }, {
                key: "getFramebuffer",
                value: function(e) {
                    if (!t._framebuffers[e.id]) {
                        var n = e.context;
                        t._framebuffers[e.id] = n.createFramebuffer()
                    }
                    return t._framebuffers[e.id]
                }
            }, {
                key: "logImageTextureMemoryUsage",
                value: function() {
                    nr.log("ImageTextureMemoryUsage: " + t.textureBytesLoaded / 1048576 + " MB")
                }
            }]),
            t
        }(Vr);
        Nr.textureBytesLoaded = 0,
        Nr._framebuffers = {};
        var Fr = function(e) {
            function t(e, n, i) {
                var r, s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], o = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], l = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6], h = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : Lr.RGBA_UNSIGNED_BYTE, u = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
                return L()(this, t),
                (r = F()(this, D()(t).call(this, e, h, s, a, o)))._flipY = !0,
                r._premultiply = !1,
                r.loaded = !1,
                r._flipY = l,
                r._url = i,
                r._premultiply = u,
                n.add(Be()(r)),
                r
            }
            return z()(t, e),
            O()(t, [{
                key: "load",
                value: function(e) {
                    var t = this;
                    Zi.loadImage(this._url, function(n) {
                        t.setImage(n, t._flipY, t._premultiply),
                        t.loaded = !0,
                        t.image = n,
                        e.call(t)
                    })
                }
            }]),
            t
        }(Nr)
          , Br = function() {
            function e() {
                L()(this, e)
            }
            return O()(e, null, [{
                key: "addExtension",
                value: function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return Ci.usePngOnly ? t + ".png" : Ci.useWebp ? t + ".webp" : n || e.texturesWithPngExtension.indexOf(t) >= 0 ? t + ".png" : t + ".jpg"
                }
            }, {
                key: "getWebpSupported",
                value: function() {
                    var e = document.createElement("canvas");
                    return !(!e.getContext || !e.getContext("2d")) && 0 == e.toDataURL("image/webp").indexOf("data:image/webp")
                }
            }]),
            e
        }();
        Br.texturesWithPngExtension = ["blueNoise", "Texture", "Uncensored_baseColor"],
        Br.texturesWithPointFiltering = ["kraken", "Texture", "Uncensored_baseColor", "Maze_AO"],
        Br.texturesWithMipMaps = ["Javier_Valdez"];
        var Dr = function(e) {
            function t(e, n, i, r) {
                var s, a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 24;
                L()(this, t),
                (s = F()(this, D()(t).call(this, e, n, "unlit"))).skinned = !1,
                s.hasVoxelTransition = !1,
                s.usesAOWithUv2 = !1,
                s.uv0ScaleOffset = new Bi(1,1,0,0),
                s.transparent = i.isTransparent,
                s.skinned = i.isSkinned,
                s.hasVoxelTransition = i.hasVoxelTransition,
                s.usesAOWithUv2 = i.usesAOWithUv2;
                var o = !0
                  , l = !1
                  , h = void 0;
                try {
                    for (var u, c = i.properties[Symbol.iterator](); !(o = (u = c.next()).done); o = !0) {
                        var v = u.value;
                        switch (v.name) {
                        case "_MainTex":
                            var d = Ki(r + Br.addExtension(v.sValue))
                              , f = s.transparent ? Lr.RGBA_UNSIGNED_BYTE : Lr.RGB_UNSIGNED_BYTE
                              , _ = Br.texturesWithMipMaps.indexOf(v.sValue) >= 0;
                            s._texture = new Fr(e,n,d,_,!0,!0,!0,f),
                            Br.texturesWithPointFiltering.indexOf(v.sValue) >= 0 && s._texture.setFilteringNearest();
                            break;
                        case "_AO":
                            var p = Ki(r + Br.addExtension(v.sValue));
                            s._ao = new Fr(e,n,p,!1,!0,!0,!0,Lr.RGB_UNSIGNED_BYTE),
                            Br.texturesWithPointFiltering.indexOf(v.sValue) >= 0 && s._texture.setFilteringNearest()
                        }
                    }
                } catch (m) {
                    l = !0,
                    h = m
                } finally {
                    try {
                        o || null == c.return || c.return()
                    } finally {
                        if (l)
                            throw h
                    }
                }
                return i.textureScale && i.textureOffset && (s.uv0ScaleOffset.x = i.textureScale[0],
                s.uv0ScaleOffset.y = i.textureScale[1],
                s.uv0ScaleOffset.z = i.textureOffset[0],
                s.uv0ScaleOffset.w = i.textureOffset[1],
                1 == s.uv0ScaleOffset.x && 1 == s.uv0ScaleOffset.y && 0 == s.uv0ScaleOffset.z && 0 == s.uv0ScaleOffset.w || s.addShaderDefines(["SCALE_UV0", 1])),
                s.transparent && (s.setAlphaBlending(),
                s.addShaderDefines(["TRANSPARENT", 1])),
                s.skinned && (a > 0 ? (s.addShaderDefines(["SKINNED_MATRICES", 1]),
                s.addShaderDefines(["BONE_COUNT", a]),
                Ci.doLogs && console.log("skinned material: boneCount: ", a)) : Ci.doLogs && console.error("bonecount should be > 0 on mesh that uses skinned material", i, a)),
                s.hasVoxelTransition && s.addShaderDefines(["HAS_VOXEL_TRANSITION", 1]),
                s.usesAOWithUv2 && s.addShaderDefines(["AO_ON_UV2", 1]),
                s
            }
            return z()(t, e),
            O()(t, [{
                key: "init",
                value: function() {
                    this.setTexture("uTexture", this._texture),
                    this.usesAOWithUv2 && this.setTexture("_AO", this._ao),
                    this.setVector4("_UV0Scale", this.uv0ScaleOffset)
                }
            }, {
                key: "destruct",
                value: function() {
                    this._texture && this._texture.destruct(),
                    q()(D()(t.prototype), "destruct", this).call(this)
                }
            }]),
            t
        }(pr)
          , Ur = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                  , r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
                L()(this, e),
                this.q = yi.c.create(),
                yi.c.set(this.q, t, n, i, r)
            }
            return O()(e, [{
                key: "clone",
                value: function() {
                    return new e(this.x,this.y,this.z,this.w)
                }
            }, {
                key: "copy",
                value: function(e) {
                    return yi.c.set(this.q, e.x, e.y, e.z, e.w),
                    this
                }
            }, {
                key: "setValues",
                value: function(e, t, n, i) {
                    return yi.c.set(this.q, e, t, n, i),
                    this
                }
            }, {
                key: "toString",
                value: function() {
                    return "(" + this.x + ", " + this.y + ", " + this.z + ", " + this.w + ")"
                }
            }, {
                key: "dot",
                value: function(e) {
                    return yi.c.dot(this.q, e.q)
                }
            }, {
                key: "identity",
                value: function() {
                    return yi.c.identity(this.q),
                    this
                }
            }, {
                key: "multiply",
                value: function(e) {
                    return yi.c.multiply(this.q, this.q, e.q),
                    this
                }
            }, {
                key: "invert",
                value: function() {
                    return this.x = -this.x,
                    this.y = -this.y,
                    this.z = -this.z,
                    this.w = this.w,
                    this
                }
            }, {
                key: "rotateX",
                value: function(e) {
                    return yi.c.rotateX(this.q, this.q, e),
                    this
                }
            }, {
                key: "rotateY",
                value: function(e) {
                    return yi.c.rotateY(this.q, this.q, e),
                    this
                }
            }, {
                key: "rotateZ",
                value: function(e) {
                    return yi.c.rotateZ(this.q, this.q, e),
                    this
                }
            }, {
                key: "setAxisAngleRadians",
                value: function(e, t) {
                    return yi.c.setAxisAngle(this.q, e.v, t),
                    this
                }
            }, {
                key: "rotateAxisAngleRadians",
                value: function(t, n) {
                    return yi.c.setAxisAngle(e._tempQuat, t.v, n),
                    yi.c.multiply(this.q, e._tempQuat, this.q),
                    this
                }
            }, {
                key: "x",
                get: function() {
                    return this.q[0]
                },
                set: function(e) {
                    this.q[0] = e
                }
            }, {
                key: "y",
                get: function() {
                    return this.q[1]
                },
                set: function(e) {
                    this.q[1] = e
                }
            }, {
                key: "z",
                get: function() {
                    return this.q[2]
                },
                set: function(e) {
                    this.q[2] = e
                }
            }, {
                key: "w",
                get: function() {
                    return this.q[3]
                },
                set: function(e) {
                    this.q[3] = e
                }
            }], [{
                key: "dot",
                value: function(e, t) {
                    return yi.c.dot(e.q, t.q)
                }
            }, {
                key: "multiply",
                value: function(e, t, n) {
                    return yi.c.multiply(e.q, t.q, n.q),
                    e
                }
            }, {
                key: "invert",
                value: function(e, t) {
                    return e.x = -t.x,
                    e.y = -t.y,
                    e.z = -t.z,
                    e.w = -t.w,
                    e
                }
            }, {
                key: "lerp",
                value: function(e, t, n, i) {
                    return yi.c.lerp(e.q, t.q, n.q, i),
                    e
                }
            }, {
                key: "slerp",
                value: function(e, t, n, i) {
                    return yi.c.slerp(e.q, t.q, n.q, i),
                    e
                }
            }, {
                key: "closestSlerp",
                value: function(t, n, i, r) {
                    return n.dot(i) < 0 ? (e.invert(this.tInvB, i),
                    e.slerp(t, n, this.tInvB, r)) : e.slerp(t, n, i, r),
                    t
                }
            }, {
                key: "fromMat3",
                value: function(e, t) {
                    return yi.c.fromMat3(e.q, t),
                    e
                }
            }, {
                key: "lookAt",
                value: function(t, n, i, r) {
                    e._tempForward.copy(n),
                    e._tempForward.subtract(i),
                    e._tempForward.normalize(),
                    Ri.cross(e._tempRight, r, e._tempForward),
                    e._tempRight.normalize(),
                    Ri.cross(e._tempUp, e._tempForward, e._tempRight),
                    e._tempUp.normalize();
                    var s = yi.a.fromValues(e._tempRight.x, e._tempRight.y, e._tempRight.z, e._tempUp.x, e._tempUp.y, e._tempUp.z, e._tempForward.x, e._tempForward.y, e._tempForward.z);
                    return e.fromMat3(t, s),
                    t
                }
            }, {
                key: "CreateFromAxisAngle",
                value: function(e, t, n) {
                    var i = .5 * n
                      , r = Math.sin(i);
                    e.setValues(t.x * r, t.y * r, t.z * r, Math.cos(i))
                }
            }, {
                key: "fromEuler",
                value: function(e, t, n, i) {
                    return yi.c.fromEuler(e.q, t, n, i),
                    e
                }
            }]),
            e
        }();
        Ur.IDENTITY = new Ur,
        Ur._tempQuat = yi.c.create(),
        Ur.tInvB = new Ur,
        Ur._tempForward = new Ri,
        Ur._tempRight = new Ri,
        Ur._tempUp = new Ri;
        var zr = function(e) {
            function t() {
                var e;
                return L()(this, t),
                (e = F()(this, D()(t).call(this))).autoUpdate = !0,
                e._rotation = new Ur,
                e._pos = new Ri,
                e._scale = new Ri(1,1,1),
                e._parent = null,
                e._matrix = yi.b.create(),
                e._localMatrix = yi.b.create(),
                e._changeCallback = [],
                e._children = [],
                e._tempMat4 = yi.b.create(),
                e._tempMat3 = yi.a.create(),
                e._tempV3a = new Ri,
                e._dirty = !0,
                e._signalDirtyDown = !1,
                e
            }
            return z()(t, e),
            O()(t, [{
                key: "identity",
                value: function() {
                    this._pos.setValues(0, 0, 0),
                    this._rotation.identity(),
                    this._scale.setValues(1, 1, 1)
                }
            }, {
                key: "setParent",
                value: function(e) {
                    this._parent !== e && (this._parent && this._parent.removeChild(this),
                    this._parent = e,
                    e && e.addChild(this),
                    this.setDirty())
                }
            }, {
                key: "getParent",
                value: function() {
                    return this._parent
                }
            }, {
                key: "addChild",
                value: function(e) {
                    this._children.indexOf(e) < 0 && (this._children.push(e),
                    e.setParent(this))
                }
            }, {
                key: "removeChild",
                value: function(e) {
                    var t = this._children.indexOf(e);
                    t > -1 && (this._children.splice(t, 1),
                    e.setParent(null))
                }
            }, {
                key: "getChildren",
                value: function() {
                    return this._children
                }
            }, {
                key: "addChangeCallBack",
                value: function(e) {
                    this._changeCallback.push(e)
                }
            }, {
                key: "setDirty",
                value: function() {
                    this._dirty || (this._dirty = !0,
                    this.signalDirtyDown())
                }
            }, {
                key: "setParentDirty",
                value: function() {
                    this.signalDirtyDown()
                }
            }, {
                key: "signalDirtyDown",
                value: function() {
                    if (!this._signalDirtyDown) {
                        this._signalDirtyDown = !0;
                        for (var e = this._changeCallback.length - 1; e >= 0; e--)
                            this._changeCallback[e].call(this);
                        for (var t = this._children.length - 1; t >= 0; t--)
                            this._children[t].setParentDirty()
                    }
                }
            }, {
                key: "clone",
                value: function() {
                    var e = new t;
                    return e.setScale(this._scale),
                    e.setRotation(this._rotation),
                    e.setPosition(this._pos),
                    e
                }
            }, {
                key: "copy",
                value: function(e) {
                    return this.setScale(e._scale),
                    this.setRotation(e._rotation),
                    this.setPosition(e._pos),
                    this
                }
            }, {
                key: "updateMatrix",
                value: function() {
                    (this._dirty || this._signalDirtyDown) && (this.autoUpdate && (this._dirty && yi.b.fromRotationTranslationScale(this._localMatrix, this._rotation.q, this._pos.v, this._scale.v),
                    this._parent ? yi.b.multiply(this._matrix, this._parent.getWorldMatrix(), this._localMatrix) : this._dirty && yi.b.copy(this._matrix, this._localMatrix)),
                    this._dirty = !1,
                    this._signalDirtyDown = !1)
                }
            }, {
                key: "lookAt",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ri.UP;
                    this.setPosition(e),
                    this.lookAtFromCurrentPos(t, n)
                }
            }, {
                key: "lookAtFromCurrentPos",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ri.UP;
                    Ur.lookAt(this._rotation, this._pos, e, t),
                    this.setDirty()
                }
            }, {
                key: "setPositionRotationScale",
                value: function(e, t, n) {
                    this._pos.copy(e),
                    this._rotation.copy(t),
                    this._scale.copy(n),
                    this.setDirty()
                }
            }, {
                key: "getWorldMatrix",
                value: function() {
                    return this.updateMatrix(),
                    this._matrix
                }
            }, {
                key: "getLocalMatrix",
                value: function() {
                    return this.updateMatrix(),
                    this._localMatrix
                }
            }, {
                key: "getPosition",
                value: function() {
                    return this._pos
                }
            }, {
                key: "setPosition",
                value: function(e) {
                    this._pos.copy(e),
                    this.setDirty()
                }
            }, {
                key: "setPositionValues",
                value: function(e, t, n) {
                    this._pos.setValues(e, t, n),
                    this.setDirty()
                }
            }, {
                key: "getWorldPosition",
                value: function() {
                    this.updateMatrix();
                    var e = this._tempV3a;
                    return e.copy(Ri.ZERO),
                    e.transform(this._matrix),
                    e
                }
            }, {
                key: "getScale",
                value: function() {
                    return this._scale
                }
            }, {
                key: "setScale",
                value: function(e) {
                    this._scale.copy(e),
                    this.setDirty()
                }
            }, {
                key: "setScaleScalar",
                value: function(e) {
                    this._scale.setValues(e, e, e),
                    this.setDirty()
                }
            }, {
                key: "setScaleValues",
                value: function(e, t, n) {
                    this._scale.setValues(e, t, n),
                    this.setDirty()
                }
            }, {
                key: "translateX",
                value: function(e) {
                    this._pos.x += e,
                    this.setDirty()
                }
            }, {
                key: "translateY",
                value: function(e) {
                    this._pos.y += e,
                    this.setDirty()
                }
            }, {
                key: "translateZ",
                value: function(e) {
                    this._pos.z += e,
                    this.setDirty()
                }
            }, {
                key: "translate",
                value: function(e) {
                    this._pos.add(e),
                    this.setDirty()
                }
            }, {
                key: "translateValues",
                value: function(e, t, n) {
                    this._pos.x += e,
                    this._pos.y += t,
                    this._pos.z += n,
                    this.setDirty()
                }
            }, {
                key: "getRotation",
                value: function() {
                    return this._rotation
                }
            }, {
                key: "setRotation",
                value: function(e) {
                    this._rotation.copy(e),
                    this.setDirty()
                }
            }, {
                key: "getRotationMatrix",
                value: function() {
                    return yi.b.fromQuat(this._tempMat4, this._rotation.q),
                    this._tempMat4
                }
            }, {
                key: "getRotationMatrixMat3",
                value: function() {
                    return yi.a.fromQuat(this._tempMat3, this._rotation.q),
                    this._tempMat3
                }
            }, {
                key: "getWorldRotationMatrixMat3",
                value: function() {
                    var e = this.getRotationMatrixMat3();
                    return this._parent && yi.a.multiply(e, this._parent.getWorldRotationMatrixMat3(), e),
                    e
                }
            }, {
                key: "getWorldRotationMatrix",
                value: function() {
                    var e = this.getRotationMatrix();
                    return this._parent && yi.b.multiply(e, this._parent.getRotationMatrix(), e),
                    e
                }
            }, {
                key: "setRotationFromMatrix",
                value: function(e) {
                    Ur.fromMat3(this._rotation, e),
                    this.setDirty()
                }
            }, {
                key: "rotateRadiansValues",
                value: function(e, t, n) {
                    return this._rotation.rotateY(t),
                    this._rotation.rotateX(e),
                    this._rotation.rotateZ(n),
                    this.setDirty(),
                    this._rotation
                }
            }, {
                key: "rotateRadians",
                value: function(e) {
                    return this.rotateRadiansValues(e.x, e.y, e.z)
                }
            }, {
                key: "rotateDegreesValues",
                value: function(e, n, i) {
                    return this.rotateRadiansValues(e * t._degToRad, n * t._degToRad, i * t._degToRad)
                }
            }, {
                key: "rotateDegrees",
                value: function(e) {
                    return this.rotateDegreesValues(e.x, e.y, e.z)
                }
            }, {
                key: "rotateAxisAngleRadians",
                value: function(e, t) {
                    return this._rotation.rotateAxisAngleRadians(e, t),
                    this.setDirty(),
                    this._rotation
                }
            }, {
                key: "rotateDegreesY",
                value: function(e) {
                    this._rotation.rotateY(e * t._degToRad),
                    this.setDirty()
                }
            }, {
                key: "rotateRadiansX",
                value: function(e) {
                    this._rotation.rotateX(e),
                    this.setDirty()
                }
            }, {
                key: "rotateRadiansY",
                value: function(e) {
                    this._rotation.rotateY(e),
                    this.setDirty()
                }
            }, {
                key: "rotateRadiansZ",
                value: function(e) {
                    this._rotation.rotateZ(e),
                    this.setDirty()
                }
            }, {
                key: "setEulerDegreesValues",
                value: function(e, t, n) {
                    this._rotation.identity(),
                    this.rotateDegreesValues(e, t, n)
                }
            }, {
                key: "setEulerDegrees",
                value: function(e) {
                    this.setEulerDegreesValues(e.x, e.y, e.z)
                }
            }, {
                key: "setEulerDegreesXY",
                value: function(e) {
                    this.setEulerDegreesValues(e.x, e.y, 0)
                }
            }, {
                key: "setEulerRadians",
                value: function(e) {
                    this._rotation.identity(),
                    this.rotateRadiansValues(e.x, e.y, e.z)
                }
            }, {
                key: "setRadiansX",
                value: function(e) {
                    this._rotation.identity(),
                    this.rotateRadiansX(e)
                }
            }, {
                key: "setRadiansY",
                value: function(e) {
                    this._rotation.identity(),
                    this.rotateRadiansY(e)
                }
            }, {
                key: "setRadiansZ",
                value: function(e) {
                    this._rotation.identity(),
                    this.rotateRadiansZ(e)
                }
            }, {
                key: "getEulerDegrees",
                value: function() {
                    yi.a.fromQuat(this._tempMat3, this._rotation.q);
                    var e = t.getEulerRadiansYXZ(this._tempMat3);
                    return e.x *= t._radToDeg,
                    e.y *= t._radToDeg,
                    e.z *= t._radToDeg,
                    e
                }
            }, {
                key: "getForward",
                value: function() {
                    var e = this.getRotationMatrixMat3();
                    return this._tempV3a.setValues(e[6], e[7], e[8]),
                    this._tempV3a
                }
            }, {
                key: "getWorldForward",
                value: function() {
                    var e = this.getWorldRotationMatrixMat3();
                    return this._tempV3a.setValues(e[6], e[7], e[8]),
                    this._tempV3a
                }
            }, {
                key: "getRight",
                value: function() {
                    var e = this.getRotationMatrixMat3();
                    return this._tempV3a.setValues(e[0], e[1], e[2]),
                    this._tempV3a
                }
            }, {
                key: "getWorldRight",
                value: function() {
                    var e = this.getWorldRotationMatrixMat3();
                    return this._tempV3a.setValues(e[0], e[1], e[2]),
                    this._tempV3a
                }
            }, {
                key: "getUp",
                value: function() {
                    var e = this.getRotationMatrixMat3();
                    return this._tempV3a.setValues(e[3], e[4], e[5]),
                    this._tempV3a
                }
            }, {
                key: "getWorldUp",
                value: function() {
                    var e = this.getWorldRotationMatrixMat3();
                    return this._tempV3a.setValues(e[3], e[4], e[5]),
                    this._tempV3a
                }
            }, {
                key: "setDirection",
                value: function(e, n) {
                    var i = this._tempV3a;
                    Ri.cross(i, n, e),
                    i.normalize();
                    var r = t._tempV3aS;
                    Ri.cross(r, e, i),
                    r.normalize(),
                    yi.a.set(this._tempMat3, i.x, i.y, i.z, r.x, r.y, r.z, e.x, e.y, e.z),
                    this.setRotationFromMatrix(this._tempMat3)
                }
            }, {
                key: "getDirection",
                value: function() {
                    var e = this._tempV3a;
                    return e.copy(Ri.FORWARD),
                    e.transformMat3(this.getWorldRotationMatrixMat3()),
                    e
                }
            }, {
                key: "destruct",
                value: function() {
                    q()(D()(t.prototype), "destruct", this).call(this)
                }
            }], [{
                key: "getEulerRadiansYXZ",
                value: function(e) {
                    var n, i, r;
                    return e[7] < -1 + this.singularityRange ? (n = Math.PI / 2,
                    i = Math.atan2(e[3], e[0]),
                    r = 0) : e[7] > 1 - this.singularityRange ? (n = -Math.PI / 2,
                    i = -Math.atan2(e[3], e[0]),
                    r = 0) : (n = Math.asin(-e[7]),
                    i = Math.atan2(e[6], e[8]),
                    r = Math.atan2(e[1], e[4])),
                    t._tempV3aS.setValues(n, i, r),
                    t._tempV3aS
                }
            }]),
            t
        }(vi);
        zr._degToRad = Math.PI / 180,
        zr._radToDeg = 180 / Math.PI,
        zr._tempV3aS = new Ri,
        zr.singularityRange = 1e-4;
        var Hr, Gr = zr, $r = function(e) {
            function t(e, n, i, r) {
                var s;
                return L()(this, t),
                (s = F()(this, D()(t).call(this))).type = Hr.NotSet,
                s.stride = -1,
                s._lastIndex = 0,
                s._lastTime = 0,
                s.name = e,
                s.transformId = n,
                s.times = i,
                s.values = r,
                s
            }
            return z()(t, e),
            O()(t, [{
                key: "getIsEmpty",
                value: function() {
                    var e = this.values.length / this.stride;
                    if (e < 2)
                        return !0;
                    for (var t = 0; t < this.stride; ++t)
                        for (var n = 1; n < e; ++n)
                            if (this.values[(n - 1) * this.stride + t] != this.values[n * this.stride + t])
                                return !1;
                    return !0
                }
            }, {
                key: "applyTransform",
                value: function(e, t, n) {
                    console.error("applyTransform: this method should always be overloaded")
                }
            }, {
                key: "getInterpolatedFrameValue",
                value: function(e, t) {
                    if (0 !== this.times.length)
                        if (1 !== this.times.length)
                            if (0 !== t)
                                if (t < this.times[0])
                                    this.getFrameValue(e, 0);
                                else if (t >= this.times[this.times.length - 1])
                                    this.getFrameValue(e, this.times.length - 1);
                                else {
                                    var n = this.getFramePositions(t);
                                    this.getFrameValue(this.tLowFrameValue, n.lowFrame),
                                    this.getFrameValue(this.tHighFrameValue, n.highFrame),
                                    this.interpolateValue(e, this.tLowFrameValue, this.tHighFrameValue, n.ratio)
                                }
                            else
                                this.getFrameValue(e, 0);
                        else
                            this.getFrameValue(e, 0)
                }
            }, {
                key: "interpolateValue",
                value: function(e, t, n, i) {
                    console.error("interpolateValue: this method should always be overloaded")
                }
            }, {
                key: "getFrameValue",
                value: function(e, t) {
                    e instanceof Ri ? (e.x = this.values[3 * t],
                    e.y = this.values[3 * t + 1],
                    e.z = this.values[3 * t + 2]) : e instanceof Ur ? (e.x = this.values[4 * t],
                    e.y = this.values[4 * t + 1],
                    e.z = this.values[4 * t + 2],
                    e.w = this.values[4 * t + 3]) : e instanceof Float32Array && (e[0] = this.values[t])
                }
            }, {
                key: "scaleFrameTimesTo",
                value: function(e) {
                    for (var t = this.times[this.times.length - 1], n = 0; n < this.times.length; n++)
                        this.times[n] *= e / t
                }
            }, {
                key: "getTimes",
                value: function() {
                    return this.times
                }
            }, {
                key: "getFramePositions",
                value: function(e) {
                    var t = this.times.length
                      , n = e >= this._lastTime ? this._lastIndex : 0;
                    this._lastTime = e;
                    for (var i = n; i < t - 1; i++) {
                        var r = this.times[i]
                          , s = this.times[i + 1];
                        if (e > r && e <= s)
                            return this._lastIndex = i,
                            {
                                lowFrame: i,
                                highFrame: i + 1,
                                ratio: (e - r) / (s - r)
                            }
                    }
                    return console.log("getFramePositions: could not find frame: ", e, this._lastIndex, n, this.times[0], this.times[t - 1]),
                    {
                        lowFrame: 0,
                        highFrame: 0,
                        ratio: 0
                    }
                }
            }], [{
                key: "Float32ToArray",
                value: function(e) {
                    for (var t = [], n = 0; n < e.length; n++)
                        t.push(e[n]);
                    return t
                }
            }, {
                key: "serialize",
                value: function(e) {
                    return {
                        name: e.name,
                        transformId: e.transformId,
                        times: t.Float32ToArray(e.times),
                        values: t.Float32ToArray(e.values),
                        type: t.getStringFromType(e.type)
                    }
                }
            }, {
                key: "deserialize",
                value: function(e) {
                    var n = e.name
                      , i = e.transformId
                      , r = e.times
                      , s = e.values
                      , a = t.getTypeFromString(e.type);
                    e.stride;
                    switch (a) {
                    case Hr.Position:
                        return new Xr(n,i,r,s);
                    case Hr.Rotation:
                        return new Wr(n,i,r,s);
                    case Hr.Scale:
                        return new jr(n,i,r,s);
                    default:
                        return console.error("Unknown keyframe track type " + a),
                        null
                    }
                }
            }, {
                key: "getStringFromType",
                value: function(e) {
                    switch (e) {
                    case Hr.Position:
                        return "Position";
                    case Hr.Rotation:
                        return "Rotation";
                    case Hr.Scale:
                        return "Scale";
                    default:
                        return "NotSet"
                    }
                }
            }, {
                key: "getTypeFromString",
                value: function(e) {
                    switch (e) {
                    case "Position":
                        return Hr.Position;
                    case "Rotation":
                        return Hr.Rotation;
                    case "Scale":
                        return Hr.Scale;
                    default:
                        return Hr.NotSet
                    }
                }
            }]),
            t
        }(vi), Xr = function(e) {
            function t(e, n, i, r) {
                var s;
                return L()(this, t),
                (s = F()(this, D()(t).call(this, e, n, i, r))).type = Hr.Position,
                s.stride = 3,
                s.tCurrentValue = new Ri,
                s.tLowFrameValue = new Ri,
                s.tHighFrameValue = new Ri,
                s
            }
            return z()(t, e),
            O()(t, [{
                key: "applyTransform",
                value: function(e, t, n) {
                    this.getInterpolatedFrameValue(this.tCurrentValue, n),
                    yi.b.translate(e, e, this.tCurrentValue.v)
                }
            }, {
                key: "interpolateValue",
                value: function(e, t, n, i) {
                    Ri.lerp(e, t, n, i)
                }
            }]),
            t
        }($r), Wr = function(e) {
            function t(e, n, i, r) {
                var s;
                return L()(this, t),
                (s = F()(this, D()(t).call(this, e, n, i, r))).type = Hr.Rotation,
                s.stride = 4,
                s.tCurrentValue = new Ur,
                s.tRotationTransform = yi.b.create(),
                s.tLowFrameValue = new Ur,
                s.tHighFrameValue = new Ur,
                s
            }
            return z()(t, e),
            O()(t, [{
                key: "applyTransform",
                value: function(e, t, n) {
                    this.getInterpolatedFrameValue(this.tCurrentValue, n),
                    this.tCurrentValue.multiply(t),
                    yi.b.fromQuat(this.tRotationTransform, this.tCurrentValue.q),
                    yi.b.multiply(e, e, this.tRotationTransform)
                }
            }, {
                key: "interpolateValue",
                value: function(e, t, n, i) {
                    Ur.slerp(e, t, n, i)
                }
            }]),
            t
        }($r), jr = function(e) {
            function t(e, n, i, r) {
                var s;
                return L()(this, t),
                (s = F()(this, D()(t).call(this, e, n, i, r))).type = Hr.Scale,
                s.stride = 3,
                s.tCurrentValue = new Ri,
                s.tLowFrameValue = new Ri,
                s.tHighFrameValue = new Ri,
                s
            }
            return z()(t, e),
            O()(t, [{
                key: "applyTransform",
                value: function(e, t, n) {
                    this.getInterpolatedFrameValue(this.tCurrentValue, n),
                    yi.b.scale(e, e, this.tCurrentValue.v)
                }
            }, {
                key: "interpolateValue",
                value: function(e, t, n, i) {
                    Ri.lerp(e, t, n, i)
                }
            }, {
                key: "destruct",
                value: function() {
                    this.times = null,
                    this.values = null,
                    q()(D()(t.prototype), "destruct", this).call(this)
                }
            }]),
            t
        }($r);
        !function(e) {
            e[e.Position = 0] = "Position",
            e[e.Rotation = 1] = "Rotation",
            e[e.Scale = 2] = "Scale",
            e[e.NotSet = 3] = "NotSet"
        }(Hr || (Hr = {}));
        var Yr = function() {
            function e() {
                L()(this, e),
                this.position = new Ri,
                this.rotation = new Ur,
                this.scale = new Ri(1,1,1),
                this.inverseBindpose = yi.b.create(),
                this.bindTransform = new Gr,
                this.bindPosition = new Ri,
                this.bindRotation = new Ur,
                this.bindScale = new Ri(1,1,1)
            }
            return O()(e, [{
                key: "identity",
                value: function() {
                    this.position.x = 0,
                    this.position.y = 0,
                    this.position.z = 0,
                    this.rotation.identity(),
                    this.scale.x = 1,
                    this.scale.y = 1,
                    this.scale.z = 1
                }
            }]),
            e
        }()
          , qr = function() {
            function e(t, n, i, r) {
                var s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                L()(this, e),
                this.bones = [],
                this._useTexture = !1,
                this.tPosition = new Ri,
                this.tRotation = new Ur,
                this.tScale = new Ri(1,1,1),
                this.boneTransformMap = {},
                this.transformMap = {},
                this.bonesMap = {},
                this.tempMat4 = yi.b.create(),
                this.rootInverseMat4 = yi.b.create(),
                null === i && (i = n),
                this.id = r,
                this._renderer = t,
                this._useTexture = s,
                this.bones = n;
                var a = !0
                  , o = !1
                  , l = void 0;
                try {
                    for (var h, u = i[Symbol.iterator](); !(a = (h = u.next()).done); a = !0) {
                        var c = h.value;
                        this.transformMap[c.id] = c
                    }
                } catch (k) {
                    o = !0,
                    l = k
                } finally {
                    try {
                        a || null == u.return || u.return()
                    } finally {
                        if (o)
                            throw l
                    }
                }
                var v = !0
                  , d = !1
                  , f = void 0;
                try {
                    for (var _, p = n[Symbol.iterator](); !(v = (_ = p.next()).done); v = !0) {
                        var m = _.value;
                        this.bonesMap[m.id] = m
                    }
                } catch (k) {
                    d = !0,
                    f = k
                } finally {
                    try {
                        v || null == p.return || p.return()
                    } finally {
                        if (d)
                            throw f
                    }
                }
                this.initBoneStorageData(n.length),
                this.updateBoneStorageData(n),
                this.bones[0] && this.bones[0].getParent() && (this.rootTransform = this.bones[0].getParent()),
                this.rootTransform ? yi.b.invert(this.rootInverseMat4, this.rootTransform.getWorldMatrix()) : yi.b.identity(this.rootInverseMat4);
                var g = !0
                  , y = !1
                  , E = void 0;
                try {
                    for (var T, R = n[Symbol.iterator](); !(g = (T = R.next()).done); g = !0) {
                        var A = T.value
                          , x = this.getCachedBoneTransform(A.id);
                        yi.b.copy(this.tempMat4, A.getWorldMatrix()),
                        yi.b.multiply(this.tempMat4, this.rootInverseMat4, this.tempMat4),
                        yi.b.invert(x.inverseBindpose, this.tempMat4)
                    }
                } catch (k) {
                    y = !0,
                    E = k
                } finally {
                    try {
                        g || null == R.return || R.return()
                    } finally {
                        if (y)
                            throw E
                    }
                }
            }
            return O()(e, [{
                key: "setRootTransform",
                value: function(e) {
                    this.rootTransform = e
                }
            }, {
                key: "initBoneStorageData",
                value: function(e) {
                    if (this._useTexture) {
                        var t = Math.sqrt(4 * e);
                        t = this.nextPowerOfTwo(Math.ceil(t)),
                        t = Math.max(t, 4),
                        this.boneMatrices = new Float32Array(t * t * 4),
                        this.boneTexture = new Nr(this._renderer,Lr.RGBA_FLOAT,!1,!1,!0),
                        this.boneTexture.setData(this.boneMatrices, t, t)
                    } else
                        this.boneMatrices = new Float32Array(16 * e)
                }
            }, {
                key: "updateBoneStorageData",
                value: function(e) {
                    if (0 !== e.length) {
                        this.rootTransform ? yi.b.invert(this.rootInverseMat4, this.rootTransform.getWorldMatrix()) : yi.b.identity(this.rootInverseMat4);
                        var t = 0
                          , n = !0
                          , i = !1
                          , r = void 0;
                        try {
                            for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done); n = !0) {
                                var o = s.value;
                                if (void 0 === o.id)
                                    throw new ReferenceError("expected all transforms to have an id");
                                yi.b.multiply(this.tempMat4, o.getWorldMatrix(), this.getCachedBoneTransform(o.id).inverseBindpose),
                                yi.b.multiply(this.tempMat4, this.rootInverseMat4, this.tempMat4);
                                for (var l = 16 * t, h = l; h < l + 16; h++)
                                    this.boneMatrices[h] = this.tempMat4[h - l];
                                t++
                            }
                        } catch (c) {
                            i = !0,
                            r = c
                        } finally {
                            try {
                                n || null == a.return || a.return()
                            } finally {
                                if (i)
                                    throw r
                            }
                        }
                        if (this._useTexture) {
                            var u = this.boneTexture;
                            u.setData(this.boneMatrices, u.width, u.height)
                        }
                    }
                }
            }, {
                key: "applyAnimations",
                value: function(e) {
                    for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = [], i = e.length - 1; i >= 0; i--) {
                        var r = e[i];
                        n.push(r)
                    }
                    n.reverse();
                    for (var s = 0; s < n.length; s++) {
                        var a = n[s]
                          , o = a.weight
                          , l = a.clip
                          , h = a.time;
                        if (o > 0) {
                            var u = !0
                              , c = !1
                              , v = void 0;
                            try {
                                for (var d, f = l.tracks[Symbol.iterator](); !(u = (d = f.next()).done); u = !0) {
                                    var _ = d.value
                                      , p = this.getCachedBoneTransform(_.transformId)
                                      , m = this.transformMap[_.transformId];
                                    if (void 0 === m.id)
                                        throw new ReferenceError("expected transform to have an id");
                                    if (!t || t.indexOf(m.id) >= 0)
                                        if (o < 1)
                                            switch (_.type) {
                                            case Hr.Position:
                                                _.getInterpolatedFrameValue(this.tPosition, h),
                                                Ri.lerp(p.position, p.position, this.tPosition, o),
                                                m.setPosition(p.position);
                                                break;
                                            case Hr.Rotation:
                                                _.getInterpolatedFrameValue(this.tRotation, h),
                                                Ur.slerp(p.rotation, p.rotation, this.tRotation, o),
                                                m.setRotation(p.rotation);
                                                break;
                                            case Hr.Scale:
                                                _.getInterpolatedFrameValue(this.tScale, h),
                                                Ri.lerp(p.scale, p.scale, this.tScale, o),
                                                m.setScale(p.scale)
                                            }
                                        else
                                            switch (_.type) {
                                            case Hr.Position:
                                                _.getInterpolatedFrameValue(p.position, h),
                                                m.setPosition(p.position);
                                                break;
                                            case Hr.Rotation:
                                                _.getInterpolatedFrameValue(p.rotation, h),
                                                m.setRotation(p.rotation);
                                                break;
                                            case Hr.Scale:
                                                _.getInterpolatedFrameValue(p.scale, h),
                                                m.setScale(p.scale)
                                            }
                                }
                            } catch (g) {
                                c = !0,
                                v = g
                            } finally {
                                try {
                                    u || null == f.return || f.return()
                                } finally {
                                    if (c)
                                        throw v
                                }
                            }
                        }
                    }
                    this.updateBoneStorageData(this.bones)
                }
            }, {
                key: "getCachedBoneTransform",
                value: function(e) {
                    var t = this.boneTransformMap[e];
                    if (t)
                        return t;
                    var n = this.transformMap[e];
                    return n ? ((t = new Yr).position.copy(n.getPosition()),
                    t.scale.copy(n.getScale()),
                    t.rotation.copy(n.getRotation()),
                    t.bindPosition.copy(n.getPosition()),
                    t.bindScale.copy(n.getScale()),
                    t.bindRotation.copy(n.getRotation()),
                    t.bindTransform.setPositionRotationScale(n.getPosition(), n.getRotation(), n.getScale()),
                    this.boneTransformMap[e] = t,
                    t) : (console.warn("getCachedBoneTransform: transform not found", e, this.transformMap),
                    null)
                }
            }, {
                key: "setTransform",
                value: function(e, t) {
                    e.setPositionRotationScale(t.position, t.rotation, t.scale)
                }
            }, {
                key: "nextPowerOfTwo",
                value: function(e) {
                    return e--,
                    e |= e >> 1,
                    e |= e >> 2,
                    e |= e >> 4,
                    e |= e >> 8,
                    e |= e >> 16,
                    ++e
                }
            }, {
                key: "destruct",
                value: function() {
                    this.bones = null,
                    this.boneTransformMap = null,
                    this.transformMap = null,
                    this.bonesMap = null
                }
            }]),
            e
        }()
          , Kr = function(e) {
            function t(e, n, i) {
                var r;
                return L()(this, t),
                (r = F()(this, D()(t).call(this))).duration = 0,
                r.name = "not set",
                r.animStartTime = 0,
                r.animTimeOffset = 0,
                r.prevAnimationSpeed = -1e3,
                r.duration = n,
                r.name = e,
                r.tracks = i,
                r
            }
            return z()(t, e),
            O()(t, [{
                key: "jumpToTime",
                value: function(e, t) {
                    this.animTimeOffset = e,
                    this.animStartTime = t
                }
            }, {
                key: "getLoopingAnimationTime",
                value: function(e, t) {
                    var n = this;
                    0 === this.animStartTime && (this.animStartTime = e);
                    var i = function(e, t) {
                        return (n.animTimeOffset + (e - n.animStartTime) * t) % n.duration
                    };
                    return t !== this.prevAnimationSpeed && (this.animTimeOffset = i(e, this.prevAnimationSpeed),
                    this.animStartTime = e,
                    this.prevAnimationSpeed = t),
                    i(e, t)
                }
            }, {
                key: "destruct",
                value: function() {
                    if (this.tracks) {
                        var e = !0
                          , n = !1
                          , i = void 0;
                        try {
                            for (var r, s = this.tracks[Symbol.iterator](); !(e = (r = s.next()).done); e = !0) {
                                r.value.destruct()
                            }
                        } catch (a) {
                            n = !0,
                            i = a
                        } finally {
                            try {
                                e || null == s.return || s.return()
                            } finally {
                                if (n)
                                    throw i
                            }
                        }
                        this.tracks = null
                    }
                    q()(D()(t.prototype), "destruct", this).call(this)
                }
            }], [{
                key: "serialize",
                value: function(e) {
                    var t = []
                      , n = !0
                      , i = !1
                      , r = void 0;
                    try {
                        for (var s, a = e.tracks[Symbol.iterator](); !(n = (s = a.next()).done); n = !0) {
                            var o = s.value;
                            t.push($r.serialize(o))
                        }
                    } catch (l) {
                        i = !0,
                        r = l
                    } finally {
                        try {
                            n || null == a.return || a.return()
                        } finally {
                            if (i)
                                throw r
                        }
                    }
                    return {
                        name: e.name,
                        duration: e.duration,
                        tracks: t
                    }
                }
            }, {
                key: "deserialize",
                value: function(e) {
                    var n = []
                      , i = !0
                      , r = !1
                      , s = void 0;
                    try {
                        for (var a, o = e.tracks[Symbol.iterator](); !(i = (a = o.next()).done); i = !0) {
                            var l = a.value
                              , h = $r.deserialize(l);
                            h.getIsEmpty() ? console.log("empty keyframe track: removed", h) : n.push($r.deserialize(l))
                        }
                    } catch (u) {
                        r = !0,
                        s = u
                    } finally {
                        try {
                            i || null == o.return || o.return()
                        } finally {
                            if (r)
                                throw s
                        }
                    }
                    return new t(e.name,e.duration,n)
                }
            }]),
            t
        }(vi)
          , Zr = function() {
            function e() {
                L()(this, e)
            }
            return O()(e, null, [{
                key: "load",
                value: function(e, t, n, i, r) {
                    var s = this
                      , a = new Ji(t,n);
                    t.setCallbackForPreloadable(a, function() {
                        a ? (s.parseJson(e, t, JSON.parse(a.text), i, r),
                        a = null) : console.error("UnityLoader: load: no _jsonData", s)
                    })
                }
            }, {
                key: "parseJson",
                value: function(e, t, n, i, r) {
                    Ci.doLogs && console.log("parseJson", n),
                    null == n ? (console.error("UnityLoader: parseJson: no data"),
                    i.failedToLoad = !0) : (this.parseTransforms(n, i),
                    this.parseMaterials(e, t, n, i, r),
                    this.parseAnimations(e, n, i),
                    this.parseMeshRenderers(e, n, i),
                    this.parseComponents(n, i))
                }
            }, {
                key: "parseTransforms",
                value: function(e, t) {
                    for (var n = 0; n < e.transforms.length; n++) {
                        var i = e.transforms[n]
                          , r = this.transformFromData(i);
                        (i.scale[0] < 0 || i.scale[1] < 0 || i.scale[2] < 0) && Ci.doLogs && console.error("negative scale found", r.name, i.scale),
                        t.getTransformById(i.parentId) && r.setParent(t.getTransformById(i.parentId)),
                        t.addTransform(r)
                    }
                }
            }, {
                key: "transformFromData",
                value: function(e) {
                    var t = new Gr;
                    return t.setPositionRotationScale(new Ri(e.position[0],e.position[1],e.position[2]), new Ur(e.rotation[0],e.rotation[1],e.rotation[2],e.rotation[3]), new Ri(e.scale[0],e.scale[1],e.scale[2])),
                    t.name = e.name,
                    t.id = e.id,
                    t
                }
            }, {
                key: "parseMaterials",
                value: function(e, t, n, i, r) {
                    var s = !0
                      , a = !1
                      , o = void 0;
                    try {
                        for (var l, h = n.materials[Symbol.iterator](); !(s = (l = h.next()).done); s = !0) {
                            var u = l.value;
                            if (null == i.unityRenderer.getMaterialByName(u.name)) {
                                var c = new Dr(e,t,u,r);
                                c.name = u.name,
                                i.unityRenderer.addMaterial(c)
                            } else
                                Ci.doLogs && console.log("shared material", u.name)
                        }
                    } catch (v) {
                        a = !0,
                        o = v
                    } finally {
                        try {
                            s || null == h.return || h.return()
                        } finally {
                            if (a)
                                throw o
                        }
                    }
                }
            }, {
                key: "parseAnimations",
                value: function(e, t, n) {
                    Ci.doLogs && console.log("parseAnimations", t.animations);
                    for (var i = 0; i < t.animations.length; i++) {
                        for (var r = [], s = [], a = t.animations[i], o = 0; o < a.clips.length; o++)
                            r.push(Kr.deserialize(a.clips[o]));
                        for (var l = 0; l < a.bones.length; l++)
                            s.push(n.getTransformById(a.bones[l].transformId));
                        var h = new qr(e,s,n.transforms,a.id,!1);
                        n.unityAnimator.addClipsAndAnimator(r, h)
                    }
                }
            }, {
                key: "parseMeshRenderers",
                value: function(e, t, n) {
                    var i = {}
                      , r = 0
                      , s = !0
                      , a = !1
                      , o = void 0;
                    try {
                        for (var l, h = t.objects[Symbol.iterator](); !(s = (l = h.next()).done); s = !0) {
                            var u = l.value
                              , c = new Ii;
                            null != n.getTransformById(u.transformId) ? c.transform = n.getTransformById(u.transformId) : console.error("transform not found for model");
                            var v = n.unityRenderer.getMaterialByName(u.material);
                            null != v ? c.material = v : console.error("material not found for model", c.transform.name, u.material);
                            var d = u.instanceId;
                            if (i[d])
                                c.mesh = i[d];
                            else {
                                c.mesh = new br(e),
                                c.mesh.animatorId = u.animatorId,
                                u.indices.length > 0 && c.mesh.setIndices(new Uint16Array(u.indices));
                                for (var f = 0; f < u.attributes.length; f++) {
                                    var _ = u.attributes[f];
                                    c.mesh.setAttribute(_.name, _.stride, new Float32Array(_.data))
                                }
                                i[d] = c.mesh
                            }
                            r += c.mesh.getNumVertices(),
                            n.unityRenderer.addMeshRenderer(c)
                        }
                    } catch (p) {
                        a = !0,
                        o = p
                    } finally {
                        try {
                            s || null == h.return || h.return()
                        } finally {
                            if (a)
                                throw o
                        }
                    }
                    Ci.doLogs && console.log("imported mesh: vertexCount:", r)
                }
            }, {
                key: "parseComponents",
                value: function(e, t) {
                    t.components = $i.parseComponents(e, t)
                }
            }]),
            e
        }()
          , Jr = function(e) {
            function t(e, n, i) {
                var r;
                L()(this, t),
                (r = F()(this, D()(t).call(this)))._isInit = !1,
                r._worldId = i,
                r._renderer = e,
                r._unity = new qi(r._renderer);
                var s = Ki("scenes/" + (i.charAt(0).toUpperCase() + i.slice(1)) + ".json");
                return Ci.doLogs && console.log("SceneRenderer", s),
                Zr.load(r._renderer, n, s, r._unity, "scenes/"),
                r
            }
            return z()(t, e),
            O()(t, [{
                key: "init",
                value: function() {
                    Ci.doLogs && console.log("SceneRenderer: init", this._worldId),
                    Ci.isDebugMode && (this._datGui = new xi(null));
                    var e = new ki;
                    e.init(this._worldId),
                    this.postInit(e),
                    this._unity.handleLoaded(),
                    this.startLoopingAnimations(this._unity);
                    for (var t = 0; t < e.children.length; t++)
                        e.children[t].collapsed = !0;
                    this._datGui && this._datGui.init(e),
                    this._isInit = !0
                }
            }, {
                key: "postInit",
                value: function(e) {}
            }, {
                key: "playLoopingAnimation",
                value: function(e) {
                    var t = this.model.unityAnimator.getClipByName(e);
                    t ? (t.loop = !0,
                    t.play(!1)) : console.warn("playLoopingAnimation: clip not found", e)
                }
            }, {
                key: "startLoopingAnimations",
                value: function(e) {
                    for (var t = 0; t < e.components.animationDatas.length; t++)
                        e.components.animationDatas[t].looping && e.playAnimation(e.components.animationDatas[t].name)
                }
            }, {
                key: "draw",
                value: function(e) {
                    this._unity.update(),
                    this._unity.draw(e)
                }
            }, {
                key: "lookAtHotspot",
                value: function(e) {}
            }, {
                key: "destruct",
                value: function() {
                    this._unity && (this._unity.destruct(),
                    this._unity = null),
                    this._datGui && (this._datGui.destruct(),
                    this._datGui = null),
                    q()(D()(t.prototype), "destruct", this).call(this)
                }
            }, {
                key: "model",
                get: function() {
                    return this._unity
                }
            }, {
                key: "isInit",
                get: function() {
                    return this._isInit
                }
            }, {
                key: "id",
                get: function() {
                    return this._worldId
                }
            }]),
            t
        }(vi)
          , Qr = function(e) {
            function t(e) {
                var n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Lr.DEPTH_UINTSHORT;
                return L()(this, t),
                (n = F()(this, D()(t).call(this, e, s, !1, !1, !0))).setSize(i, r),
                n
            }
            return z()(t, e),
            t
        }(Nr)
          , es = function(e) {
            function t(e) {
                var n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Lr.RGBA_UNSIGNED_BYTE, a = (arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                arguments.length > 5 && void 0 !== arguments[5] && arguments[5]), o = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6], l = arguments.length > 7 && void 0 !== arguments[7] && arguments[7], h = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
                L()(this, t),
                (n = F()(this, D()(t).call(this, e, s, !1, a, o))).renderBuffer = null,
                n.colorFramebuffer = null,
                n.scaleToCanvas = !1,
                n.sizeMultiplier = 1,
                n.frameBufferComplete = !1,
                n.aaSamples = 4,
                n.setSize(i, r);
                var u = n.renderer.context;
                return n.frameBuffer = u.createFramebuffer(),
                u.bindFramebuffer(u.FRAMEBUFFER, n.frameBuffer),
                u.framebufferTexture2D(u.FRAMEBUFFER, u.COLOR_ATTACHMENT0, u.TEXTURE_2D, n.textureGL, 0),
                n.frameBufferComplete = n.testBuffer(),
                l ? n.createDepthBuffer(i, r) : h && n.createStencilBuffer(i, r),
                n
            }
            return z()(t, e),
            O()(t, [{
                key: "addMultisampleRenderBuffer",
                value: function() {
                    if (this.renderer instanceof Pr) {
                        var e = this.renderer.context;
                        this.colorFramebuffer = e.createFramebuffer(),
                        this.renderBuffer = e.createRenderbuffer(),
                        e.bindRenderbuffer(e.RENDERBUFFER, this.renderBuffer),
                        e.renderbufferStorageMultisample(e.RENDERBUFFER, this.aaSamples, this.internalFormat, this.width, this.height),
                        e.bindFramebuffer(e.FRAMEBUFFER, this.frameBuffer),
                        e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, null, 0),
                        e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.RENDERBUFFER, this.renderBuffer),
                        e.bindFramebuffer(e.FRAMEBUFFER, null),
                        e.bindFramebuffer(e.FRAMEBUFFER, this.colorFramebuffer),
                        e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.textureGL, 0),
                        e.bindFramebuffer(e.FRAMEBUFFER, null)
                    }
                }
            }, {
                key: "resolveMultisampleBuffer",
                value: function() {
                    if (this.renderer instanceof Pr && this.renderBuffer) {
                        var e = this.renderer.context;
                        e.bindFramebuffer(e.READ_FRAMEBUFFER, this.frameBuffer),
                        e.bindFramebuffer(e.DRAW_FRAMEBUFFER, this.colorFramebuffer),
                        e.clearBufferfv(e.COLOR, 0, [0, 0, 0, 1]),
                        e.blitFramebuffer(0, 0, this.width, this.height, 0, 0, this.width, this.height, e.COLOR_BUFFER_BIT, e.NEAREST),
                        e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null),
                        e.bindFramebuffer(e.READ_FRAMEBUFFER, null),
                        e.bindFramebuffer(e.FRAMEBUFFER, null)
                    }
                }
            }, {
                key: "testBuffer",
                value: function() {
                    var e = this.renderer.context;
                    e.bindFramebuffer(e.FRAMEBUFFER, this.frameBuffer);
                    var t = e.checkFramebufferStatus(e.FRAMEBUFFER);
                    switch (t) {
                    case e.FRAMEBUFFER_COMPLETE:
                        return !0;
                    case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:
                        return console.log("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_ATTACHMENT", this.formatType),
                        !1;
                    case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:
                        return console.log("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT", this.formatType),
                        !1;
                    case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:
                        return console.log("Incomplete framebuffer: FRAMEBUFFER_INCOMPLETE_DIMENSIONS", this.formatType),
                        !1;
                    case e.FRAMEBUFFER_UNSUPPORTED:
                        return console.log("Incomplete framebuffer: FRAMEBUFFER_UNSUPPORTED", this.formatType),
                        !1;
                    default:
                        return console.log("Incomplete framebuffer: " + t, this.formatType),
                        !1
                    }
                }
            }, {
                key: "setTexture3DSlice",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                      , i = this.renderer.context;
                    i.bindFramebuffer(i.FRAMEBUFFER, this.frameBuffer),
                    i.framebufferTextureLayer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0, e.textureGL, n, t)
                }
            }, {
                key: "addDepthTexture",
                value: function() {
                    this.renderer.extensionManager.depth_texture ? this.setDepthTexture(new Qr(this.renderer,this.width,this.height)) : console.log("addDepthTexture: extension not supported")
                }
            }, {
                key: "setDepthTexture",
                value: function(e) {
                    e.setSize(this.width, this.height),
                    this.depthTexture = e;
                    var t = this.renderer.context;
                    t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.TEXTURE_2D, this.depthTexture.textureGL, 0)
                }
            }, {
                key: "createDepthBuffer",
                value: function(e, t) {
                    var n = this.renderer.context;
                    this.depthBuffer = n.createRenderbuffer(),
                    n.bindRenderbuffer(n.RENDERBUFFER, this.depthBuffer),
                    n.renderbufferStorage(n.RENDERBUFFER, n.DEPTH_COMPONENT16, e, t),
                    n.framebufferRenderbuffer(n.FRAMEBUFFER, n.DEPTH_ATTACHMENT, n.RENDERBUFFER, this.depthBuffer)
                }
            }, {
                key: "createDepthStencilBuffer",
                value: function(e, t) {
                    var n = this.renderer.context;
                    this.depthBuffer = n.createRenderbuffer(),
                    n.bindRenderbuffer(n.RENDERBUFFER, this.depthBuffer),
                    n.renderbufferStorage(n.RENDERBUFFER, n.DEPTH_STENCIL, e, t),
                    n.framebufferRenderbuffer(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.RENDERBUFFER, this.depthBuffer)
                }
            }, {
                key: "createStencilBuffer",
                value: function(e, t) {
                    var n = this.renderer.context;
                    this.stencilBuffer = n.createRenderbuffer(),
                    n.bindRenderbuffer(n.RENDERBUFFER, this.stencilBuffer),
                    n.renderbufferStorage(n.RENDERBUFFER, n.STENCIL_INDEX8, e, t),
                    n.framebufferRenderbuffer(n.FRAMEBUFFER, n.STENCIL_ATTACHMENT, n.RENDERBUFFER, this.stencilBuffer)
                }
            }, {
                key: "setAsTarget",
                value: function() {
                    var e = this.renderer.context;
                    e.bindFramebuffer(e.FRAMEBUFFER, this.frameBuffer),
                    this.depthBuffer ? this.renderer.renderState.setDepthMask(!0) : this.depthTexture ? this.renderer.renderState.setDepthMask(!0) : this.renderer.renderState.setDepthMask(!1)
                }
            }, {
                key: "setSize",
                value: function(e, n) {
                    if (e !== this.width || n !== this.height) {
                        if (this.depthBuffer) {
                            var i = this.renderer.context;
                            i.bindRenderbuffer(i.RENDERBUFFER, this.depthBuffer),
                            i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_COMPONENT16, e, n),
                            i.bindRenderbuffer(er.RENDERBUFFER, null)
                        }
                        if (this.stencilBuffer) {
                            var r = this.renderer.context;
                            r.bindRenderbuffer(r.RENDERBUFFER, this.stencilBuffer),
                            r.renderbufferStorage(r.RENDERBUFFER, r.STENCIL_INDEX8, e, n),
                            r.bindRenderbuffer(er.RENDERBUFFER, null)
                        }
                        if (this.renderBuffer) {
                            var s = this.renderer.context;
                            s.bindRenderbuffer(s.RENDERBUFFER, this.renderBuffer),
                            s.renderbufferStorageMultisample(s.RENDERBUFFER, this.aaSamples, this.internalFormat, e, n),
                            s.bindRenderbuffer(er.RENDERBUFFER, null)
                        }
                        this.depthTexture && this.depthTexture.setSize(e, n),
                        q()(D()(t.prototype), "setSize", this).call(this, e, n)
                    }
                }
            }, {
                key: "getData",
                value: function() {
                    arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return q()(D()(t.prototype), "getData", this).call(this, this.frameBuffer)
                }
            }, {
                key: "getDataRef",
                value: function(e) {
                    var t = this.renderer.context;
                    t.bindFramebuffer(er.FRAMEBUFFER, this.frameBuffer),
                    t.readPixels(0, 0, this.width, this.height, this.format, this.type, e),
                    t.bindFramebuffer(t.FRAMEBUFFER, null)
                }
            }, {
                key: "getPixelU8",
                value: function(e, t) {
                    var n = this.renderer.context;
                    n.bindFramebuffer(er.FRAMEBUFFER, this.frameBuffer);
                    var i = new Uint8Array(4);
                    return n.readPixels(e, t, 1, 1, er.RGBA, er.UNSIGNED_BYTE, i),
                    n.bindFramebuffer(n.FRAMEBUFFER, null),
                    i
                }
            }, {
                key: "getPixel",
                value: function(e, t) {
                    var n, i = this.renderer.context;
                    switch (i.bindFramebuffer(er.FRAMEBUFFER, this.frameBuffer),
                    this.formatType) {
                    case Lr.RGBA_FLOAT:
                        n = new Float32Array(4);
                        break;
                    case Lr.RGBA_UNSIGNED_BYTE:
                        n = new Uint8Array(4);
                        break;
                    case Lr.LUMINANCE_UNSIGNED_BYTE:
                        n = new Uint8Array(1);
                        break;
                    case Lr.LUMINANCE_FLOAT:
                        n = new Float32Array(1);
                        break;
                    default:
                        throw new Error("Can not yet get data for format type: " + this.formatType)
                    }
                    return i.readPixels(e, t, 1, 1, this.format, this.type, n),
                    i.bindFramebuffer(i.FRAMEBUFFER, null),
                    n
                }
            }, {
                key: "destruct",
                value: function() {
                    var e = this.renderer.context;
                    this.frameBuffer && (e.deleteFramebuffer(this.frameBuffer),
                    delete this.frameBuffer),
                    this.colorFramebuffer && (e.deleteFramebuffer(this.colorFramebuffer),
                    this.colorFramebuffer = null),
                    this.depthBuffer && (e.deleteRenderbuffer(this.depthBuffer),
                    delete this.depthBuffer),
                    this.stencilBuffer && (e.deleteRenderbuffer(this.stencilBuffer),
                    delete this.stencilBuffer),
                    this.renderBuffer && (e.deleteRenderbuffer(this.renderBuffer),
                    this.renderBuffer = null),
                    this.depthTexture && (this.depthTexture.destruct(),
                    delete this.depthTexture),
                    q()(D()(t.prototype), "destruct", this).call(this)
                }
            }]),
            t
        }(Nr)
          , ts = function(e) {
            function t(e, n) {
                var i;
                return L()(this, t),
                (i = F()(this, D()(t).call(this)))._currentHotspots = [],
                i._clickRadiusSquared = 0,
                i._hotspotMaxSize = 500,
                i._renderer = e,
                i._material = new pr(e,n,"hotspots"),
                i._material.setDrawTypePoints(),
                i._material.setAlphaBlending(),
                i._material.addShaderDefines(["MAX_COUNT ", t.maxHotspotCount]),
                i._positionsRadii = new Float32Array(4 * t.maxHotspotCount),
                i._texture = new Fr(e,n,Ki("textures/hotspot.png"),!0,!0,!0,!1),
                i._clickRadiusSquared = Ze.a.mobile ? .04 : .02,
                i._clickRadiusSquared *= i._clickRadiusSquared,
                i
            }
            return z()(t, e),
            O()(t, [{
                key: "init",
                value: function(e) {
                    var t = e.addGroup("HotspotRenderer", this._material);
                    this._size = t.addParamFloat("_Size", .1),
                    this._material.setTexture("_Texture", this._texture)
                }
            }, {
                key: "handleChange",
                value: function(e) {
                    this._mesh && this._mesh.destruct(),
                    e && e.length > 0 ? this._mesh = this.createMesh(e) : this._mesh = null,
                    this._currentHotspots = e.slice(0)
                }
            }, {
                key: "createMesh",
                value: function(e) {
                    for (var t = new Float32Array(e.length), n = 0; n < e.length; n++)
                        t[n] = n;
                    var i = new br(this._renderer);
                    return i.setAttribute("aIndex", 1, t),
                    i
                }
            }, {
                key: "draw",
                value: function(e, t, n) {
                    this.updateScreenPositions(e, t)
                }
            }, {
                key: "updateScreenPositions",
                value: function(e, t) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n]
                          , r = i.transform.getWorldPosition();
                        t.worldToScreenPoint(i.screenPosition, r)
                    }
                }
            }, {
                key: "getHotspotMouseIntersect",
                value: function(e) {
                    for (var t = this._renderer.getMouseListener().getNormalizedPos(), n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.transform.getWorldPosition();
                        var r = i.screenPosition;
                        if (this.getHit(t, r))
                            return i
                    }
                    return null
                }
            }, {
                key: "getHit",
                value: function(e, t) {
                    if (t.z > 0) {
                        var n = e.x - t.x;
                        n *= this._renderer.getAspect();
                        var i = e.y - t.y;
                        return n * n + i * i < this._clickRadiusSquared
                    }
                }
            }, {
                key: "destruct",
                value: function() {
                    this._renderer = null,
                    this._currentHotspots = null,
                    this._material && (this._material.destruct(),
                    this._material = null),
                    this._texture && (this._texture.destruct(),
                    this._texture = null),
                    this._mesh && (this._mesh.destruct(),
                    this._mesh = null),
                    this._size && (this._size.destruct(),
                    this._size = null),
                    q()(D()(t.prototype), "destruct", this).call(this)
                }
            }], [{
                key: "arraysEqual",
                value: function(e, t) {
                    if (e.length !== t.length)
                        return !1;
                    for (var n = e.length; n--; )
                        if (e[n] !== t[n])
                            return !1;
                    return !0
                }
            }]),
            t
        }(vi);
        ts.maxHotspotCount = 16;
        var ns = function(e) {
            function t(e, n, i, r) {
                var s, a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
                return L()(this, t),
                (s = F()(this, D()(t).call(this, e, r, a)))._urls = i,
                n.add(Be()(s)),
                s
            }
            return z()(t, e),
            O()(t, [{
                key: "load",
                value: function(e) {
                    var t = this;
                    Zi.loadMultipleImages(this._urls, function(n) {
                        t.setImages(n),
                        e.call(t)
                    })
                }
            }]),
            t
        }(function(e) {
            function t(e) {
                var n, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                return L()(this, t),
                (n = F()(this, D()(t).call(this, e))).hasMips = !1,
                n._createMips = i,
                n._flipY = r,
                n
            }
            return z()(t, e),
            O()(t, [{
                key: "bind",
                value: function() {
                    this.renderer.context.activeTexture(er.TEXTURE0 + this.renderer.maxParams.MAX_TEXTURE_IMAGE_UNITS - 1),
                    this.renderer.context.bindTexture(er.TEXTURE_CUBE_MAP, this.textureGL)
                }
            }, {
                key: "bindToSlot",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.renderer.renderState.bindCubeTextureToSlot(this.textureGL, e)
                }
            }, {
                key: "setImage",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                      , i = this.renderer.context;
                    this.bind(),
                    i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, this._flipY ? 1 : 0);
                    var r = [er.TEXTURE_CUBE_MAP_POSITIVE_X, er.TEXTURE_CUBE_MAP_NEGATIVE_X, er.TEXTURE_CUBE_MAP_POSITIVE_Y, er.TEXTURE_CUBE_MAP_NEGATIVE_Y, er.TEXTURE_CUBE_MAP_POSITIVE_Z, er.TEXTURE_CUBE_MAP_NEGATIVE_Z];
                    this.setWrapping(),
                    this.setFilteringLinear(),
                    i.pixelStorei(er.UNPACK_COLORSPACE_CONVERSION_WEBGL, er.NONE),
                    i.texImage2D(r[t], n, er.RGBA, er.RGBA, er.UNSIGNED_BYTE, e),
                    0 === n && this._createMips && this.generateMipMaps()
                }
            }, {
                key: "setImages",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                      , n = this.renderer.context;
                    this.bind(),
                    n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL, this._flipY ? 1 : 0);
                    var i = [er.TEXTURE_CUBE_MAP_POSITIVE_X, er.TEXTURE_CUBE_MAP_NEGATIVE_X, er.TEXTURE_CUBE_MAP_POSITIVE_Y, er.TEXTURE_CUBE_MAP_NEGATIVE_Y, er.TEXTURE_CUBE_MAP_POSITIVE_Z, er.TEXTURE_CUBE_MAP_NEGATIVE_Z];
                    this.setWrapping(),
                    this.setFilteringLinear(),
                    n.pixelStorei(er.UNPACK_COLORSPACE_CONVERSION_WEBGL, er.NONE);
                    for (var r = 0; r < i.length; ++r)
                        6 === e.length ? n.texImage2D(i[r], t, er.RGBA, er.RGBA, er.UNSIGNED_BYTE, e[r]) : n.texImage2D(i[r], t, er.RGBA, er.RGBA, er.UNSIGNED_BYTE, e[0]);
                    0 === t && this._createMips && this.generateMipMaps()
                }
            }, {
                key: "setWrapping",
                value: function() {
                    var e = this.renderer.context;
                    this.bind(),
                    e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
                    e.texParameteri(e.TEXTURE_CUBE_MAP, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE)
                }
            }, {
                key: "setFilteringLinear",
                value: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                      , t = this.renderer.context;
                    this.bind(),
                    e ? this.hasMips ? (t.texParameteri(er.TEXTURE_CUBE_MAP, er.TEXTURE_MIN_FILTER, er.LINEAR_MIPMAP_LINEAR),
                    t.texParameteri(er.TEXTURE_CUBE_MAP, er.TEXTURE_MAG_FILTER, er.LINEAR)) : (t.texParameteri(er.TEXTURE_CUBE_MAP, er.TEXTURE_MIN_FILTER, er.LINEAR),
                    t.texParameteri(er.TEXTURE_CUBE_MAP, er.TEXTURE_MAG_FILTER, er.LINEAR)) : (t.texParameteri(er.TEXTURE_CUBE_MAP, er.TEXTURE_MIN_FILTER, er.NEAREST),
                    t.texParameteri(er.TEXTURE_CUBE_MAP, er.TEXTURE_MAG_FILTER, er.NEAREST))
                }
            }, {
                key: "setFilterAnisotropic",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 4;
                    if (this.setFilteringLinear(),
                    this.renderer.extensionManager.filter_anisotropic) {
                        var t = this.renderer.context;
                        e = Math.min(this.renderer.extensionManager.maxAnisotropy, e),
                        t.texParameterf(t.TEXTURE_CUBE_MAP, this.renderer.extensionManager.filter_anisotropic.TEXTURE_MAX_ANISOTROPY_EXT, e)
                    }
                }
            }, {
                key: "setData",
                value: function(e, t, n, i) {
                    var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Lr.RGBA_UNSIGNED_BYTE
                      , s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5]
                      , a = this.renderer.context;
                    this.bind(),
                    a.pixelStorei(er.UNPACK_ALIGNMENT, 1),
                    a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL, s ? 1 : 0),
                    a.pixelStorei(er.UNPACK_COLORSPACE_CONVERSION_WEBGL, er.NONE);
                    var o = Lr.getFormat(this.renderer, r)
                      , l = Lr.getType(this.renderer, r);
                    this.renderer instanceof Or ? a.texImage2D(er.TEXTURE_CUBE_MAP_POSITIVE_X + e, 0, this.format, n, i, 0, o, l, t) : this.renderer instanceof Pr && a.texImage2D(er.TEXTURE_CUBE_MAP_POSITIVE_X + e, 0, Lr.getInternalFormat(r), n, i, 0, o, l, t)
                }
            }, {
                key: "initTextures",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 256
                      , t = arguments.length > 1 ? arguments[1] : void 0
                      , n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                      , i = this.renderer.context;
                    this.bind(),
                    this._createMips = n,
                    i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, this._flipY ? 1 : 0);
                    var r = [er.TEXTURE_CUBE_MAP_POSITIVE_X, er.TEXTURE_CUBE_MAP_NEGATIVE_X, er.TEXTURE_CUBE_MAP_POSITIVE_Y, er.TEXTURE_CUBE_MAP_NEGATIVE_Y, er.TEXTURE_CUBE_MAP_POSITIVE_Z, er.TEXTURE_CUBE_MAP_NEGATIVE_Z];
                    if (t = Lr.validateFormatType(this.renderer, t),
                    this.format = Lr.getFormat(this.renderer, t),
                    this.type = Lr.getType(this.renderer, t),
                    this.setWrapping(),
                    this.setFilteringLinear(),
                    i.pixelStorei(er.UNPACK_COLORSPACE_CONVERSION_WEBGL, er.NONE),
                    n)
                        for (var s = 0; e >= 1; ) {
                            for (var a = this.createImageData(e), o = 0; o < r.length; ++o)
                                i.texImage2D(r[o], s, this.format, this.format, this.type, a);
                            s++,
                            e /= 2,
                            this.hasMips = !0
                        }
                    else
                        for (var l = this.createImageData(e), h = 0; h < r.length; ++h)
                            i.texImage2D(r[h], 0, this.format, this.format, this.type, l)
                }
            }, {
                key: "generateMipMaps",
                value: function() {
                    this.bind();
                    var e = this.renderer.context;
                    e.generateMipmap(e.TEXTURE_CUBE_MAP),
                    this.hasMips = !0,
                    this.setFilteringLinear()
                }
            }, {
                key: "createImageData",
                value: function(e) {
                    var t = document.createElement("canvas");
                    t.style.width = e + "px",
                    t.style.height = e + "px",
                    t.width = e,
                    t.height = e;
                    var n = t.getContext("2d");
                    n.beginPath();
                    for (var i = 0; i < e; i += 64)
                        n.moveTo(i, 0),
                        n.lineTo(i, e),
                        n.moveTo(0, i),
                        n.lineTo(e, i);
                    return n.strokeStyle = "#ffffff",
                    n.stroke(),
                    t
                }
            }, {
                key: "destruct",
                value: function() {
                    q()(D()(t.prototype), "destruct", this).call(this)
                }
            }]),
            t
        }(Vr))
          , is = function(e) {
            function t(e, n) {
                var i;
                return L()(this, t),
                (i = F()(this, D()(t).call(this)))._renderer = e,
                i._material = new pr(i._renderer,n,"cubeMap"),
                i._material.depthTest = !1,
                i._material.depthWrite = !1,
                i
            }
            return z()(t, e),
            O()(t, [{
                key: "init",
                value: function(e) {}
            }, {
                key: "setCubeMap",
                value: function(e, t) {
                    Ci.doLogs && console.log("setCubeMap", e),
                    this._cubeMap && this._cubeMap.destruct(),
                    this._cubeMap = this.createCubeMap(e, t)
                }
            }, {
                key: "createCubeMap",
                value: function(e, t) {
                    for (var n = ["PositiveX", "NegativeX", "NegativeY", "PositiveY", "PositiveZ", "NegativeZ"], i = [], r = Ze.a.mobile ? "1k" : "2k", s = 0; s < n.length; s++) {
                        var a = n[s];
                        i.push(Ki(Br.addExtension("textures/cubeMaps/" + r + "/" + e + "/" + a, !1)))
                    }
                    return new ns(this._renderer,t,i,!1)
                }
            }, {
                key: "draw",
                value: function(e) {
                    this._cubeMap ? (this._material.setVector3("_Frustum", e.projection.getFrustumCorner()),
                    this._material.setMatrix("_InvView", e.getInverseView()),
                    this._material.setTexture("_CubeSampler", this._cubeMap),
                    this._renderer.blit(null, null, this._material)) : Ci.doLogs && console.log("no cubeMap")
                }
            }, {
                key: "destruct",
                value: function() {
                    this._cubeMap && (this._cubeMap.destruct(),
                    this._cubeMap = null),
                    this._material && (this._material.destruct(),
                    this._material = null),
                    q()(D()(t.prototype), "destruct", this).call(this)
                }
            }]),
            t
        }(vi)
          , rs = function(e) {
            function t(e, n) {
                var i;
                return L()(this, t),
                (i = F()(this, D()(t).call(this)))._renderer = e,
                i._material = new pr(i._renderer,n,"voxelTransition"),
                i._material.depthTest = !1,
                i._material.depthWrite = !1,
                i
            }
            return z()(t, e),
            O()(t, [{
                key: "init",
                value: function(e) {
                    e.addGroup("voxelTransition", this._material).addShaderParamFloat("_TransitionLength", .05, .001, .1)
                }
            }, {
                key: "draw",
                value: function(e, t, n, i) {
                    this._material.setVector3("_Frustum", e.projection.getFrustumCorner()),
                    this._material.setTexture("_Source", t),
                    this._material.setTexture("_Destination", n),
                    this._material.setFloat("_Transition", ci.smoothStep01(i)),
                    this._material.setMatrix("_InvView", e.getInverseView()),
                    this._renderer.blit(null, null, this._material)
                }
            }, {
                key: "destruct",
                value: function() {
                    this._material && (this._material.destruct(),
                    this._material = null),
                    q()(D()(t.prototype), "destruct", this).call(this)
                }
            }]),
            t
        }(vi)
          , ss = function(e) {
            function t(e, n) {
                var i;
                return L()(this, t),
                (i = F()(this, D()(t).call(this)))._pingPong = !0,
                i._timeStep = 0,
                i._needsReset = !0,
                i._texelSize = new rr,
                i._blurred = !1,
                i._renderer = e,
                i._material = new pr(e,n,"boxBlur"),
                i._material.depthTest = !1,
                i._material.depthWrite = !1,
                i._buffer0 = i.createBuffer(e),
                i._buffer1 = i.createBuffer(e),
                i
            }
            return z()(t, e),
            O()(t, [{
                key: "createBuffer",
                value: function(e) {
                    var t = new es(e,1,1,Lr.RGB_UNSIGNED_BYTE,!1,!0,!0);
                    return t.scaleToCanvas = !0,
                    t
                }
            }, {
                key: "init",
                value: function(e) {
                    var t = this
                      , n = e.addGroup("IncrementalBlur", this._material);
                    n.addButton("reset", function() {
                        return t.reset()
                    }),
                    this._maxIterations = n.addParamInt("maxIterations", 32),
                    this._speed = n.addParamFloat("speed", .25)
                }
            }, {
                key: "getOutput",
                value: function() {
                    return this._pingPong ? this._buffer0 : this._buffer1
                }
            }, {
                key: "getFeedback",
                value: function() {
                    return this._pingPong ? this._buffer1 : this._buffer0
                }
            }, {
                key: "reset",
                value: function() {
                    this._needsReset = !0
                }
            }, {
                key: "draw",
                value: function(e) {
                    arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this._pingPong = !this._pingPong,
                    this._needsReset && (this._renderer.blit(e, this.getFeedback()),
                    this._needsReset = !1,
                    this._timeStep = 0);
                    var t = this._maxIterations.getValue()
                      , n = this._timeStep / t;
                    if ((n = ci.smoothStep01(n)) < 1) {
                        var i = n * t * this._speed.getValue();
                        this._texelSize.setValues(i / e.width, i / e.height),
                        this._material.setVector2("uSourceTexelSize", this._texelSize),
                        this._material.setTexture("uSource", e),
                        this._material.setFloat("uSharp", this._blurred ? 0 : 1 - n),
                        this._renderer.blit(this.getFeedback(), this.getOutput(), this._material, !0)
                    }
                    this._blurred ? (this._timeStep++,
                    this._timeStep > t && (this._timeStep = t)) : (this._timeStep--,
                    this._timeStep < 0 && (this._timeStep = 0))
                }
            }, {
                key: "setBlurred",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this._blurred = e,
                    t ? this._timeStep = this._blurred ? this._maxIterations.getValue() : 0 : e && this.reset()
                }
            }, {
                key: "blurred",
                get: function() {
                    return this._blurred
                }
            }, {
                key: "done",
                get: function() {
                    return this._blurred ? this._timeStep == this._maxIterations.getValue() : 0 == this._timeStep
                }
            }]),
            t
        }(vi)
          , as = function(e) {
            function t(e, n) {
                var i, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                return L()(this, t),
                (i = F()(this, D()(t).call(this, n)))._mouseDown = !1,
                i._eulerDegreesSpeed = new rr,
                i._rotating = !1,
                i._rotatingLerp = 0,
                i._rotatingLerpPrev = 0,
                i._rotationLimit = new rr(80,-1),
                i._rotationSpeed = 1,
                i._renderer = e,
                i._mouseListener = e.getMouseListener(),
                i._rotationSpeed = r,
                i
            }
            return z()(t, e),
            O()(t, [{
                key: "update",
                value: function(e) {
                    var n = this._mouseDown;
                    this._mouseDown = this._mouseListener.getMouseDown();
                    var i = e.projection.getFOV()
                      , r = .5 / Math.tan(i * (1.570796326795 / 180))
                      , s = 114.5915590261571 * Math.atan2(.5 * this._renderer.getAspect(), r)
                      , a = this.getMouseSpeed();
                    a.length() > t.MOUSE_MOVEMENT_CANCEL_TRIGGER && this._mouseListener.cancelClick(),
                    this._mouseDown && n ? (this._eulerDegreesSpeed.setValues(a.y * i * this._mouseInverseValue, a.x * s * this._mouseInverseValue),
                    this._eulerDegreesSpeed.multiplyScalar(this._rotationSpeed),
                    this._rotating = this._eulerDegreesSpeed.length() > 0,
                    this._rotatingLerp = this._rotating ? .5 : 0,
                    this._rotatingLerpPrev = this._rotatingLerp,
                    this.rotateBy(this._eulerDegreesSpeed),
                    this._eulerDegreesSpeed.setValues(Math.min(t.MAX_ROTATE_SPEED, Math.abs(this._eulerDegreesSpeed.x)) * Math.sign(this._eulerDegreesSpeed.x), Math.min(t.MAX_ROTATE_SPEED, Math.abs(this._eulerDegreesSpeed.y)) * Math.sign(this._eulerDegreesSpeed.y))) : (this._rotatingLerp = ci.clamp01(this._rotatingLerp - Li.getInstance().deltaTime),
                    this._rotating = this._rotatingLerp > 0,
                    this._rotating && (this._eulerDegreesSpeed.multiplyScalar(1 - (this._rotatingLerpPrev - this._rotatingLerp) / this._rotatingLerpPrev),
                    this.rotateBy(this._eulerDegreesSpeed)),
                    this._rotatingLerpPrev = this._rotatingLerp)
                }
            }, {
                key: "resetSpeed",
                value: function() {
                    this._mouseDown = !1,
                    this._eulerDegreesSpeed.setValues(0, 0)
                }
            }, {
                key: "rotateBy",
                value: function(e) {
                    this._rotationLimit.x > 0 && e.x * this._eulerDegreesXY.x > 0 && (e.x *= ci.smoothStep(this._rotationLimit.x, .5 * this._rotationLimit.x, Math.abs(this._eulerDegreesXY.x))),
                    this._eulerDegreesXY.add(e),
                    this._rotationLimit.x > 0 && (this._eulerDegreesXY.x = ci.clamp(this._eulerDegreesXY.x, -this._rotationLimit.x, this._rotationLimit.x)),
                    this._rotationLimit.y > 0 && (this._eulerDegreesXY.y = ci.clamp(this._eulerDegreesXY.y, -this._rotationLimit.y, this._rotationLimit.y)),
                    this._transform.setEulerDegreesXY(this._eulerDegreesXY)
                }
            }, {
                key: "rotateX",
                value: function(e) {
                    this._rotationLimit.x > 0 && e * this._eulerDegreesXY.x > 0 && (e *= ci.smoothStep(this._rotationLimit.x, .5 * this._rotationLimit.x, Math.abs(this._eulerDegreesXY.x))),
                    this._eulerDegreesXY.x += e,
                    this._rotationLimit.x > 0 && (this._eulerDegreesXY.x = ci.clamp(this._eulerDegreesXY.x, -this._rotationLimit.x, this._rotationLimit.x)),
                    this._transform.setEulerDegreesXY(this._eulerDegreesXY)
                }
            }, {
                key: "rotateY",
                value: function(e) {
                    this._eulerDegreesXY.y += e,
                    this._rotationLimit.y > 0 && (this._eulerDegreesXY.y = ci.clamp(this._eulerDegreesXY.y, -this._rotationLimit.y, this._rotationLimit.y)),
                    this._transform.setEulerDegreesXY(this._eulerDegreesXY)
                }
            }, {
                key: "setRotationLimit",
                value: function(e) {
                    this._rotationLimit.copy(e)
                }
            }, {
                key: "isRotating",
                value: function() {
                    return this._rotating
                }
            }, {
                key: "getMouseSpeed",
                value: function() {
                    return this._mouseListener.getMouseDown() ? this._mouseListener.getNormalizedVelocity() : rr.ZERO
                }
            }]),
            t
        }(function() {
            function e(t) {
                L()(this, e),
                this._eulerDegreesXY = new rr,
                this._transform = new Gr,
                this._mouseInverseValue = 1,
                this._mouseInverseValue = t ? -1 : 1
            }
            return O()(e, [{
                key: "update",
                value: function(e) {}
            }, {
                key: "setEulerDegreesXY",
                value: function(e) {
                    this._eulerDegreesXY.copy(e),
                    this._transform.setEulerDegreesXY(e)
                }
            }, {
                key: "setEulerDegrees",
                value: function(e, t) {
                    this._eulerDegreesXY.setValues(e, t),
                    this._transform.setEulerDegreesXY(this._eulerDegreesXY)
                }
            }, {
                key: "setRotation",
                value: function(e) {
                    this._transform.setRotation(e);
                    var t = this._transform.getEulerDegrees();
                    this._eulerDegreesXY.setValues(t.x, t.y)
                }
            }, {
                key: "getRotation",
                value: function() {
                    return this._transform.getRotation()
                }
            }, {
                key: "setMouseInverted",
                value: function(e) {
                    this._mouseInverseValue = e ? -1 : 1
                }
            }, {
                key: "eulerDegreesXY",
                get: function() {
                    return this._eulerDegreesXY
                }
            }]),
            e
        }());
        as.MOUSE_MOVEMENT_CANCEL_TRIGGER = .0025,
        as.MAX_ROTATE_SPEED = 10;
        var os = function(e) {
            function t(e) {
                var n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 60, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .01, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
                return L()(this, t),
                (n = F()(this, D()(t).call(this))).dirty = !0,
                n.frustumHeight = 1,
                n._projectionMatrix = yi.b.create(),
                n._tmpMat4 = yi.b.create(),
                n._tmpV3 = new Ri,
                n._tmpV4 = new Bi,
                n._frustumCorner = new Ri,
                n._jitter = new rr,
                n._jitterFrame = 0,
                n._frustumOffset = new rr,
                n._fov = i,
                n.frustumHeight = 2 * Math.tan(n._fov * t._degToRad * .5),
                n._nearPlane = r,
                n._farPlane = s,
                n._aspect = 1,
                n._changeCallback = e,
                n
            }
            return z()(t, e),
            O()(t, [{
                key: "getMatrix",
                value: function() {
                    return this.updateProjection(),
                    this._projectionMatrix
                }
            }, {
                key: "updateProjection",
                value: function() {
                    if (this.dirty) {
                        var e = this._frustumOffset.x
                          , n = this._frustumOffset.y;
                        if (0 != e || 0 != n) {
                            var i = this._nearPlane * Math.tan(this._fov / 2 * t._degToRad)
                              , r = -i
                              , s = i * this._aspect
                              , a = -s;
                            a -= e * this._nearPlane,
                            s -= e * this._nearPlane,
                            i += n * this._nearPlane,
                            r += n * this._nearPlane;
                            var o = 2 * this._nearPlane / (s - a)
                              , l = 2 * this._nearPlane / (i - r)
                              , h = (s + a) / (s - a)
                              , u = (i + r) / (i - r)
                              , c = -(this._farPlane + this._nearPlane) / (this._farPlane - this._nearPlane)
                              , v = -2 * this._farPlane * this._nearPlane / (this._farPlane - this._nearPlane);
                            yi.b.set(this._projectionMatrix, o, 0, 0, 0, 0, l, 0, 0, h, u, c, -1, 0, 0, v, 0)
                        } else
                            yi.b.perspective(this._projectionMatrix, this._fov * t._degToRad, this._aspect, this._nearPlane, this._farPlane);
                        this.dirty = !1,
                        this.getFrustumCornerRef(this._frustumCorner)
                    }
                }
            }, {
                key: "setAspect",
                value: function(e) {
                    e !== this._aspect && (this._aspect = e,
                    this.setDirty())
                }
            }, {
                key: "getAspect",
                value: function() {
                    return this._aspect
                }
            }, {
                key: "setFarPlane",
                value: function(e) {
                    e !== this._farPlane && (this._farPlane = e,
                    this.setDirty())
                }
            }, {
                key: "getFarPlane",
                value: function() {
                    return this._farPlane
                }
            }, {
                key: "setNearPlane",
                value: function(e) {
                    e !== this._nearPlane && (this._nearPlane = e,
                    this.setDirty())
                }
            }, {
                key: "getNearPlane",
                value: function() {
                    return this._nearPlane
                }
            }, {
                key: "setFOV",
                value: function(e) {
                    e !== this._fov && (this._fov = e,
                    this.frustumHeight = 2 * Math.tan(this._fov * t._degToRad * .5),
                    this.setDirty())
                }
            }, {
                key: "getFOV",
                value: function() {
                    return this._fov
                }
            }, {
                key: "getFrustumCornerRef",
                value: function(e) {
                    var t = .5 * this.frustumHeight
                      , n = t * this._aspect;
                    e.setValues(n, t, 1)
                }
            }, {
                key: "getFrustumCorner",
                value: function() {
                    return this._frustumCorner
                }
            }, {
                key: "getHaltonSequence",
                value: function(e, t) {
                    for (var n = 0, i = 1, r = e; r > 0; )
                        n += (i /= t) * (r % t),
                        r = Math.floor(r / t);
                    return n
                }
            }, {
                key: "jitter",
                value: function(e) {
                    this._jitter.setValues(this.getHaltonSequence(this._jitterFrame % 51, 2) - .5, this.getHaltonSequence(this._jitterFrame % 31, 3) - .5),
                    this._jitterFrame++,
                    yi.b.copy(this._projectionMatrix, this.getJitteredMatrix(this._jitter, e, this._tmpV4)),
                    this.getFrustumCornerRef(this._frustumCorner),
                    this.dirty = !1
                }
            }, {
                key: "getJitteredMatrix",
                value: function(e, n) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0
                      , r = Math.tan(.5 * t._degToRad * this.getFOV())
                      , s = r * (n.x / n.y)
                      , a = s / (.5 * n.x)
                      , o = r / (.5 * n.y)
                      , l = a * e.x
                      , h = o * e.y;
                    void 0 !== i && i.setValues(s / n.x, r / n.y, l / n.x, h / n.y);
                    var u = this.getFarPlane()
                      , c = this.getNearPlane()
                      , v = l - s
                      , d = l + s
                      , f = h - r
                      , _ = h + r
                      , p = 2 * c / (d * c - v * c)
                      , m = 2 * c / (_ * c - f * c)
                      , g = (d * c + v * c) / (d * c - v * c)
                      , y = (_ * c + f * c) / (_ * c - f * c)
                      , E = -(u + c) / (u - c)
                      , T = -2 * u * c / (u - c);
                    return this._tmpMat4.set([p, 0, 0, 0, 0, m, 0, 0, g, y, E, -1, 0, 0, T, 0]),
                    this._tmpMat4
                }
            }, {
                key: "getJitter",
                value: function() {
                    return this._jitter
                }
            }, {
                key: "destruct",
                value: function() {
                    q()(D()(t.prototype), "destruct", this).call(this)
                }
            }, {
                key: "setDirty",
                value: function() {
                    this.dirty = !0,
                    this._changeCallback.call(this)
                }
            }, {
                key: "setFrustumOffsetX",
                value: function(e) {
                    this._frustumOffset.x = e,
                    this.setDirty()
                }
            }, {
                key: "setFrustumOffsetY",
                value: function(e) {
                    this._frustumOffset.y = e,
                    this.setDirty()
                }
            }, {
                key: "frustumOffset",
                get: function() {
                    return this._frustumOffset
                }
            }]),
            t
        }(vi);
        os._degToRad = Math.PI / 180,
        os._radToDeg = 180 / Math.PI;
        var ls = os
          , hs = function(e) {
            function t(e) {
                var n;
                return L()(this, t),
                (n = F()(this, D()(t).call(this))).dirty = !0,
                n._viewMatrix = yi.b.create(),
                n._rotationMatrix = yi.b.create(),
                n.transform = new Gr,
                n.transform.addChangeCallBack(function() {
                    return n.setDirty()
                }),
                n._changeCallback = e,
                n
            }
            return z()(t, e),
            O()(t, [{
                key: "getWorldPosition",
                value: function() {
                    return this.transform.getWorldPosition()
                }
            }, {
                key: "setDirty",
                value: function() {
                    this.dirty = !0,
                    this._changeCallback.call(this)
                }
            }, {
                key: "getMatrix",
                value: function() {
                    return this.updateMatrix(),
                    this._viewMatrix
                }
            }, {
                key: "updateMatrix",
                value: function() {
                    this.dirty && (yi.b.invert(this._viewMatrix, this.transform.getWorldMatrix()),
                    this.dirty = !1)
                }
            }, {
                key: "getWorldRotationMatrix",
                value: function() {
                    return yi.b.invert(this._rotationMatrix, this.transform.getWorldRotationMatrix()),
                    this._rotationMatrix
                }
            }, {
                key: "destruct",
                value: function() {
                    this.transform && this.transform.destruct(),
                    q()(D()(t.prototype), "destruct", this).call(this)
                }
            }]),
            t
        }(vi)
          , us = function(e) {
            function t() {
                var e, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 60, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .01, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
                return L()(this, t),
                (e = F()(this, D()(t).call(this))).dirty = !0,
                e._viewProjection = yi.b.create(),
                e.tScreenPos = new Bi,
                e.tViewProjInv = yi.b.create(),
                e.projection = new ls(function() {
                    return e.setDirty()
                }
                ,n,i,r),
                e.view = new hs(function() {
                    return e.setDirty()
                }
                ),
                e
            }
            return z()(t, e),
            O()(t, [{
                key: "setDirty",
                value: function() {
                    this.dirty = !0
                }
            }, {
                key: "getWorldPosition",
                value: function() {
                    return this.view.getWorldPosition()
                }
            }, {
                key: "lookAt",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ri.UP;
                    this.view.transform.lookAt(e, t, n)
                }
            }, {
                key: "setPosition",
                value: function(e) {
                    this.view.transform.setPosition(e)
                }
            }, {
                key: "getViewProjection",
                value: function() {
                    return this.updateViewProjection(),
                    this._viewProjection
                }
            }, {
                key: "getProjectionMatrix",
                value: function() {
                    return this.projection.getMatrix()
                }
            }, {
                key: "getViewMatrix",
                value: function() {
                    return this.view.getMatrix()
                }
            }, {
                key: "getProjection",
                value: function() {
                    return this.projection
                }
            }, {
                key: "updateViewProjection",
                value: function() {
                    this.dirty && (yi.b.multiply(this._viewProjection, this.projection.getMatrix(), this.view.getMatrix()),
                    this.dirty = !1)
                }
            }, {
                key: "worldToScreenPoint",
                value: function(e, t) {
                    this.tScreenPos.x = t.x,
                    this.tScreenPos.y = t.y,
                    this.tScreenPos.z = t.z,
                    this.tScreenPos.w = 1,
                    this.tScreenPos.transform(this.getViewProjection()),
                    this.tScreenPos.x /= this.tScreenPos.w,
                    this.tScreenPos.y /= this.tScreenPos.w,
                    this.tScreenPos.x = .5 * this.tScreenPos.x + .5,
                    this.tScreenPos.y = -.5 * this.tScreenPos.y + .5,
                    e.copy(this.tScreenPos)
                }
            }, {
                key: "screenToWorldPoint",
                value: function(e, t) {
                    yi.b.invert(this.tViewProjInv, this.getViewProjection());
                    var n = 2 * t.x - 1
                      , i = -2 * t.y + 1;
                    e.x = n,
                    e.y = i,
                    e.z = 1,
                    e.transform(this.tViewProjInv)
                }
            }, {
                key: "getDepth",
                value: function(e) {
                    return this.tScreenPos.x = e.x,
                    this.tScreenPos.y = e.y,
                    this.tScreenPos.z = e.z,
                    this.tScreenPos.w = 1,
                    this.tScreenPos.transform(this.getViewProjection()),
                    this.tScreenPos.z
                }
            }, {
                key: "destruct",
                value: function() {
                    this.projection && this.projection.destruct(),
                    this.view && this.view.destruct(),
                    q()(D()(t.prototype), "destruct", this).call(this)
                }
            }]),
            t
        }(vi)
          , cs = function(e) {
            function t(e, n) {
                var i;
                return L()(this, t),
                (i = F()(this, D()(t).call(this)))._isEnabled = !1,
                i._isDeviceAvailable = !1,
                i._eventBind = !1,
                i._target = new Ur,
                i._current = new Ur,
                i._screen = new Ur,
                i._tempTransform = new Gr,
                i._worldRot = new Ur(-Math.sqrt(.5),0,0,Math.sqrt(.5)),
                i._transform = n,
                i.enable(),
                i
            }
            return z()(t, e),
            O()(t, [{
                key: "enable",
                value: function() {
                    var e = this;
                    "ondeviceorientation"in window && (this._isDeviceAvailable = !0),
                    this._isDeviceAvailable && (this._eventBind || (window.addEventListener("deviceorientation", function(t) {
                        e.handleDeviceOrientation(t)
                    }, !1),
                    this._eventBind = !0),
                    this._isEnabled = !0)
                }
            }, {
                key: "isEnabled",
                value: function() {
                    return this._isEnabled && this._isDeviceAvailable
                }
            }, {
                key: "disable",
                value: function() {
                    this._isEnabled = !1
                }
            }, {
                key: "handleDeviceOrientation",
                value: function(e) {
                    if (this._isEnabled) {
                        var t = window.orientation || 0;
                        this._tempTransform.setEulerDegreesValues(e.beta, e.alpha, -1 * e.gamma),
                        this._target.copy(this._tempTransform.getRotation());
                        var n = -t / 2 * Math.PI / 180;
                        this._screen.setValues(0, Math.sin(n), 0, Math.cos(n)),
                        this._target.multiply(this._screen),
                        this._target.multiply(this._worldRot),
                        Ur.closestSlerp(this._current, this._current, this._target, .7),
                        this._transform.setRotation(this._current)
                    }
                }
            }, {
                key: "rotation",
                get: function() {
                    return this._current
                }
            }]),
            t
        }(vi)
          , vs = function(e) {
            function t(e) {
                var n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 70, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .01, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100, a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                return L()(this, t),
                (n = F()(this, D()(t).call(this, i, r, s)))._eulerDegrees = new Ri,
                n._currentFov = 70,
                n._minFov = 20,
                n._maxFov = 120,
                n._defaultFov = 70,
                n._locked = !1,
                n._invView = yi.b.create(),
                n._wasRotating = !1,
                n._oldFOV = 0,
                n._renderer = e,
                n._maxFov = i,
                n._defaultFov = i,
                n._mouseListener = e.getMouseListener(),
                n._rotationController = new as(n._renderer,a),
                n
            }
            return z()(t, e),
            O()(t, [{
                key: "scrollZoom",
                value: function(e) {
                    if (!this._locked) {
                        var t = this.projection.getFOV();
                        e > 0 ? (t /= 1.05) < 40 && (t = 40) : (t *= 1.05) > 100 && (t = 100),
                        this.projection.setFOV(t)
                    }
                }
            }, {
                key: "update",
                value: function() {
                    if (this.projection.setAspect(this._renderer.getAspect()),
                    this.projection.getMatrix(),
                    !this._locked) {
                        this._rotationController.update(this);
                        var e = this.projection.getFOV() != this._oldFOV;
                        this._oldFOV = this.projection.getFOV(),
                        this._rotationController.isRotating() || e ? Wi.dispatchEvent(Fi.CameraMoved, 0) : this._wasRotating && Wi.dispatchEvent(Fi.CameraStopped, 0),
                        this._wasRotating = this._rotationController.isRotating()
                    }
                    var t = this._rotationController.eulerDegreesXY;
                    this._eulerDegrees.x = t.x,
                    this._eulerDegrees.y = t.y,
                    this.view.transform.setEulerDegrees(this._eulerDegrees)
                }
            }, {
                key: "getRotationController",
                value: function() {
                    return this._rotationController
                }
            }, {
                key: "setRotation",
                value: function(e) {
                    this._rotationController.setRotation(e),
                    this._eulerDegrees.copy(this.view.transform.getEulerDegrees())
                }
            }, {
                key: "rotateX",
                value: function(e) {
                    this._eulerDegrees.x += e,
                    this._rotationController.setEulerDegrees(this._eulerDegrees.x, this._eulerDegrees.y)
                }
            }, {
                key: "rotateY",
                value: function(e) {
                    this._eulerDegrees.y += e,
                    this._rotationController.setEulerDegrees(this._eulerDegrees.x, this._eulerDegrees.y)
                }
            }, {
                key: "setRotationX",
                value: function(e) {
                    this._eulerDegrees.x = e,
                    this._rotationController.setEulerDegrees(this._eulerDegrees.x, this._eulerDegrees.y)
                }
            }, {
                key: "setRotationY",
                value: function(e) {
                    this._eulerDegrees.y = e,
                    this._rotationController.setEulerDegrees(this._eulerDegrees.x, this._eulerDegrees.y)
                }
            }, {
                key: "getRotationX",
                value: function() {
                    return this._eulerDegrees.x
                }
            }, {
                key: "getRotationY",
                value: function() {
                    return this._eulerDegrees.y
                }
            }, {
                key: "setDistance",
                value: function(e) {
                    this.view.transform.setPositionValues(0, 0, e)
                }
            }, {
                key: "disableGyroscope",
                value: function() {
                    this._gyroscope = null
                }
            }, {
                key: "enableGyroscope",
                value: function() {
                    this._gyroscope || (this._gyroscope = new cs(this._renderer.getCanvas(),this.view.transform))
                }
            }, {
                key: "getGyroscope",
                value: function() {
                    return this._gyroscope
                }
            }, {
                key: "enablePinch",
                value: function() {
                    var e = this;
                    this._currentFov = this.projection.getFOV(),
                    this._minFov = 1 * this.projection.getFOV() / 2,
                    this._maxFov = 3 * this.projection.getFOV() / 2,
                    this._renderer.getCanvas().addEventListener("gestureend", function(t) {
                        var n = Math.max(Math.min(1 / t.scale * e._currentFov, e._maxFov), e._minFov);
                        e.projection.setFOV(n),
                        e._currentFov = e.projection.getFOV(),
                        t.preventDefault()
                    }, !1),
                    this._renderer.getCanvas().addEventListener("gesturechange", function(t) {
                        var n = Math.max(Math.min(1 / t.scale * e._currentFov, e._maxFov), e._minFov);
                        e.projection.setFOV(n),
                        t.preventDefault()
                    }, !1)
                }
            }, {
                key: "getInverseView",
                value: function() {
                    return yi.b.invert(this._invView, this.getViewMatrix()),
                    this._invView
                }
            }, {
                key: "zoom",
                value: function(e) {
                    this.projection.setFOV(ci.lerp(85, this._defaultFov, e))
                }
            }, {
                key: "locked",
                set: function(e) {
                    this._locked = e
                },
                get: function() {
                    return this._locked
                }
            }]),
            t
        }(us)
          , ds = function(e) {
            function t(e, n, i) {
                var r;
                return L()(this, t),
                (r = F()(this, D()(t).call(this)))._blurred = !1,
                r._transitionProgress = 1,
                r._firstTransition = !0,
                r._doTransition = !1,
                r._hotspotsDirty = !0,
                r._renderer = e,
                r._main = i,
                r._cubeMapRenderer = new is(e,n),
                r._renderTexture0 = new es(e,1,1,Lr.RGB_UNSIGNED_BYTE,!1,!0,!0,!0),
                r._renderTexture0.scaleToCanvas = !0,
                r._renderTexture1 = new es(e,1,1,Lr.RGB_UNSIGNED_BYTE,!1,!0,!0,!0),
                r._renderTexture1.scaleToCanvas = !0,
                r._incrementalBlur = new ss(e,n),
                r._camera = new vs(e),
                r._camera.rotateY(180),
                r._hotspotRenderer = new ts(e,n),
                r._voxelTransition = new rs(e,n),
                r
            }
            return z()(t, e),
            O()(t, [{
                key: "init",
                value: function(e) {
                    this._cubeMapRenderer.init(e),
                    this._incrementalBlur.init(e),
                    this._hotspotRenderer.init(e),
                    this._voxelTransition.init(e)
                }
            }, {
                key: "loadScene",
                value: function(e, t) {
                    e != this._worldId ? (this.drawAll(this._camera, this._renderTexture0),
                    this._scene ? (this._scene.destruct(),
                    this._scene = null,
                    Ci.doLogs && console.log("destructing worldId", e)) : Ci.doLogs && console.log("no scene to destruct"),
                    this._worldId = e,
                    Ci.doLogs && console.log("loadScene", e),
                    this._cubeMapRenderer.setCubeMap(e, t),
                    this._camera.setRotationY(180),
                    this._camera.setRotationX(0),
                    this.setCameraAnglesToScene(e),
                    this._firstTransition || this._incrementalBlur.setBlurred(!0),
                    [ti.EGYPT, ti.SAUDI_ARABIA, ti.RFS_1, ti.RFS_2, ti.MEXICO, ti.RUSSIA, ti.VIETNAM].indexOf(e) >= 0 && (this._scene = new Jr(this._renderer,t,e))) : Ci.doLogs && console.log("loadScene: not switching", e, this._worldId)
                }
            }, {
                key: "setCameraAnglesToScene",
                value: function(e) {
                    e == ti.RFS_2 && this._camera.setRotationY(0),
                    e == ti.DOME && this._camera.setRotationX(-17),
                    e == ti.HALL && this._camera.setRotationX(23),
                    e == ti.SAUDI_ARABIA && (this._camera.setRotationX(-10),
                    this._camera.setRotationY(198)),
                    e == ti.EXTERIOR1 && (this._camera.setRotationX(15),
                    this._camera.setRotationY(180)),
                    e == ti.EXTERIOR2 && (this._camera.setRotationX(-15),
                    this._camera.setRotationY(248)),
                    e == ti.EXTERIOR3 && (this._camera.setRotationX(-15),
                    this._camera.setRotationY(-41)),
                    e == ti.EXTERIOR4 && (this._camera.setRotationX(-15),
                    this._camera.setRotationY(75)),
                    e == ti.EXTERIOR5 && (this._camera.setRotationX(-14),
                    this._camera.setRotationY(180))
                }
            }, {
                key: "handleSceneLoaded",
                value: function() {
                    this._scene && this._scene.init(),
                    this._hotspotsDirty = !0,
                    this._firstTransition ? this._firstTransition = !1 : this._doTransition = !0
                }
            }, {
                key: "draw",
                value: function() {
                    this._camera.update();
                    var e = Li.getInstance().deltaTime;
                    this._incrementalBlur.done && (this._doTransition && (this._transitionProgress = 0,
                    this._doTransition = !1,
                    this._camera.locked = !0),
                    this._transitionProgress < 1 && (this._transitionProgress += e,
                    this._transitionProgress >= 1 && (this._transitionProgress = 1,
                    this._blurred = !1,
                    this._incrementalBlur.setBlurred(!1, !0),
                    this._camera.locked = !1))),
                    this._transitionProgress < 1 ? (this._camera.zoom(ci.smoothStep01(this._transitionProgress)),
                    this.drawAll(this._camera, this._renderTexture1),
                    this._voxelTransition.draw(this._camera, this._incrementalBlur.getOutput(), this._renderTexture1, this._transitionProgress)) : !this._incrementalBlur.done || this._incrementalBlur.blurred ? (this._incrementalBlur.done || this._incrementalBlur.draw(this._renderTexture0),
                    this._renderer.blit(this._incrementalBlur.getOutput())) : this.drawAll(this._camera),
                    this.hotspotHitDetection(),
                    this._hotspotsDirty && (Wi.dispatchEvent(Fi.CameraMoved, 0),
                    this._hotspotsDirty = !1)
                }
            }, {
                key: "drawAll",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    t && (this._renderer.setRenderTexture(t),
                    this._renderer.clear()),
                    this._cubeMapRenderer.draw(e),
                    this._scene && this._scene.isInit && (this._scene.draw(e),
                    this._hotspotRenderer.draw(this.scene.model.components.hotspots, this._camera, 1)),
                    t && this._renderer.unSetRenderTexture()
                }
            }, {
                key: "hotspotHitDetection",
                value: function() {
                    if (null != this.scene) {
                        var e = this.scene.model.components.hotspots;
                        if (this._renderer.getMouseListener().getMouseDownThisFrame()) {
                            var t = this._hotspotRenderer.getHotspotMouseIntersect(e);
                            t && this._main.handleHotspotClicked(t)
                        }
                    }
                }
            }, {
                key: "getHotspots",
                value: function() {
                    if (this.scene) {
                        if (this.scene.isInit)
                            return this.scene.model.components.hotspots;
                        Ci.doLogs && console.log("getHotspots: scene is loading")
                    } else
                        Ci.doLogs && console.log("getHotspots: no scene");
                    return []
                }
            }, {
                key: "destruct",
                value: function() {
                    this._voxelTransition && (this._voxelTransition.destruct(),
                    this._voxelTransition = null),
                    this._hotspotRenderer && (this._hotspotRenderer.destruct(),
                    this._hotspotRenderer = null),
                    this._cubeMapRenderer && (this._cubeMapRenderer.destruct(),
                    this._cubeMapRenderer = null),
                    this._camera && (this._camera.destruct(),
                    this._camera = null),
                    this._scene && (this._scene.destruct(),
                    this._scene = null),
                    this._renderTexture0 && (this._renderTexture0.destruct(),
                    this._renderTexture0 = null),
                    this._renderTexture1 && (this._renderTexture1.destruct(),
                    this._renderTexture1 = null),
                    q()(D()(t.prototype), "destruct", this).call(this)
                }
            }, {
                key: "modelMode",
                set: function(e) {
                    this.cubeMapBlurred = e,
                    this._camera.locked = e
                }
            }, {
                key: "cubeMapBlurred",
                set: function(e) {
                    this._blurred != e && (this._blurred = e,
                    this._incrementalBlur.setBlurred(e),
                    e && this.drawAll(this._camera, this._renderTexture0))
                }
            }, {
                key: "scene",
                get: function() {
                    return this._scene
                }
            }, {
                key: "cameraRotation",
                get: function() {
                    return this._camera.getRotationY()
                }
            }]),
            t
        }(vi)
          , fs = function(e) {
            function t(e) {
                var n, i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return L()(this, t),
                (n = F()(this, D()(t).call(this)))._pixelRatio = 1,
                n._needsResize = !1,
                n._resizeInterval = 30,
                n._resizeWait = 0,
                n._canvasParent = e,
                n._autoResize = i,
                e || (n._autoResize = !1),
                n._manualResizeUpdate = !1,
                n.canvas = n.prepareCanvas(e),
                window.devicePixelRatio ? n._pixelRatio = window.devicePixelRatio : n._pixelRatio = 1,
                n._autoResize && n.handleResize(),
                n
            }
            return z()(t, e),
            O()(t, [{
                key: "getCanvas",
                value: function() {
                    return this.canvas
                }
            }, {
                key: "prepareCanvas",
                value: function(e) {
                    var t = document.createElement("canvas");
                    return t.setAttribute("id", "canvas"),
                    t.style.position = "absolute",
                    t.style.left = "0px",
                    t.style.top = "0px",
                    this._canvasParent && (t.style.width = this._canvasParent.offsetWidth + "px",
                    t.style.height = this._canvasParent.offsetHeight + "px"),
                    e && e.appendChild(t),
                    this._autoResize && (this._resizeHandler = this.handleResize.bind(this),
                    window.addEventListener("resize", this._resizeHandler)),
                    t
                }
            }, {
                key: "setSize",
                value: function(e, t) {
                    this._goalWidth == e && this._goalHeight == t || this._autoResize && (this._resizeHandler && window.removeEventListener("resize", this._resizeHandler),
                    this._autoResize = !1),
                    this._goalWidth = e,
                    this._goalHeight = t,
                    this.delayedResize()
                }
            }, {
                key: "setMaxResolution",
                value: function(e) {
                    this._maxResolution = (new rr).copy(e),
                    this.delayedResize()
                }
            }, {
                key: "setPixelRatio",
                value: function(e) {
                    this._pixelRatio = e,
                    this.delayedResize()
                }
            }, {
                key: "setAutoResize",
                value: function(e) {
                    this._autoResize = e,
                    this._resizeHandler && (this._autoResize ? (window.addEventListener("resize", this._resizeHandler),
                    this.handleResize()) : window.removeEventListener("resize", this._resizeHandler))
                }
            }, {
                key: "getPixelRatio",
                value: function() {
                    return this._pixelRatio
                }
            }, {
                key: "getParentHeight",
                value: function() {
                    return null === this._canvasParent ? null : this._canvasParent.offsetHeight
                }
            }, {
                key: "getAspectRatio",
                value: function() {
                    return this.canvas.width / this.canvas.height
                }
            }, {
                key: "handleResize",
                value: function() {
                    var e = this;
                    if (this._canvasParent) {
                        var t = this._canvasParent.offsetWidth
                          , n = this._canvasParent.offsetHeight;
                        (this._goalWidth !== t || this._goalHeight !== n || this._needsResize) && (this._goalWidth = t,
                        this._goalHeight = n,
                        this._manualResizeUpdate || (clearTimeout(this._resizeTimeOut),
                        this._resizeTimeOut = setTimeout(function() {
                            return e.delayedResize()
                        }, 100)))
                    }
                }
            }, {
                key: "updateResize",
                value: function() {
                    this._manualResizeUpdate = !0,
                    this.handleResize(),
                    this.delayedResize()
                }
            }, {
                key: "delayedResize",
                value: function() {
                    if (!this.isDestructed) {
                        if (this._needsResize = !1,
                        void 0 === this._goalWidth || void 0 === this._goalHeight)
                            throw new ReferenceError("canvas size not yet set");
                        if (this._maxResolution) {
                            var e = window.devicePixelRatio ? window.devicePixelRatio : 1
                              , t = Math.min(this._maxResolution.x / this._goalWidth, this._maxResolution.y / this._goalHeight);
                            this._pixelRatio = t < e ? t / e : e
                        }
                        this.canvas.width = this._goalWidth * this._pixelRatio,
                        this.canvas.height = this._goalHeight * this._pixelRatio,
                        this._autoResize && this._canvasParent ? (this.canvas.style.width = this._canvasParent.offsetWidth + "px",
                        this.canvas.style.height = this._canvasParent.offsetHeight + "px") : (this.canvas.style.width = this._goalWidth + "px",
                        this.canvas.style.height = this._goalHeight + "px");
                        var n = document.createEvent("Event");
                        n.initEvent("resize", !1, !0),
                        this.canvas.dispatchEvent(n)
                    }
                }
            }, {
                key: "forceResize",
                value: function() {
                    if (!this._canvasParent)
                        throw new ReferenceError("canvas has no parent");
                    if (this._resizeWait--,
                    this._resizeWait <= 0) {
                        this._resizeWait = this._resizeInterval;
                        var e = this._canvasParent.offsetWidth
                          , t = this._canvasParent.offsetHeight;
                        if (this.canvas.width != e * this._pixelRatio || this.canvas.height != t * this._pixelRatio) {
                            this.canvas.width = e * this._pixelRatio,
                            this.canvas.height = t * this._pixelRatio;
                            var n = document.createEvent("Event");
                            n.initEvent("resize", !1, !0),
                            this.canvas.dispatchEvent(n)
                        }
                        this.canvas.style.width == e + "px" && this.canvas.style.height == t + "px" || (this.canvas.style.width = e + "px",
                        this.canvas.style.height = t + "px")
                    }
                }
            }, {
                key: "destruct",
                value: function() {
                    this._resizeHandler && window.removeEventListener("resize", this._resizeHandler),
                    this.canvas.width = 1,
                    this.canvas.height = 1,
                    this._canvasParent && this._canvasParent.removeChild(this.canvas),
                    q()(D()(t.prototype), "destruct", this).call(this)
                }
            }, {
                key: "canvasParent",
                get: function() {
                    return this._canvasParent
                }
            }]),
            t
        }(vi)
          , _s = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            t
        }(Object(Z.createEventClass)()("ON_CAMERA_MOVED", "ON_CAMERA_STOPPED", "HOTSPOT_CLICKED"))
          , ps = function(e) {
            function t(e) {
                var n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 80, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .01, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 100, a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1, o = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6],
                arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
                return L()(this, t),
                (n = F()(this, D()(t).call(this, i, r, s)))._eulerDegrees = new Ri,
                n._active = !1,
                n._renderer = e,
                n.pivot = new Gr,
                n.pivot.setPositionValues(0, 0, 0),
                n.view.transform.setPositionValues(0, 0, a),
                n.view.transform.setParent(n.pivot),
                n._mouseListener = e.getMouseListener(),
                n._rotationController = new as(n._renderer,o,2),
                n
            }
            return z()(t, e),
            O()(t, [{
                key: "scrollZoom",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    if (this._active) {
                        var n = ci.lerp(1, 1.05, t)
                          , i = this.view.transform.getPosition().z;
                        e > 0 ? (i /= n) < 7 && (i = 7) : (i *= n) > 35 && (i = 35),
                        this.view.transform.setPositionValues(0, 0, i)
                    }
                }
            }, {
                key: "update",
                value: function() {
                    if (this.projection.setAspect(this._renderer.getAspect()),
                    this._rotationController.update(this),
                    !this._gyroscope) {
                        var e = this._rotationController.eulerDegreesXY;
                        this._eulerDegrees.x = e.x,
                        this._eulerDegrees.y = e.y,
                        this.pivot.setEulerDegrees(this._eulerDegrees)
                    }
                }
            }, {
                key: "getRotationController",
                value: function() {
                    return this._rotationController
                }
            }, {
                key: "setRotation",
                value: function(e) {
                    this._rotationController.setRotation(e),
                    this._eulerDegrees.copy(this.pivot.getEulerDegrees())
                }
            }, {
                key: "rotateX",
                value: function(e) {
                    this._eulerDegrees.x += e,
                    this._rotationController.setEulerDegrees(this._eulerDegrees.x, this._eulerDegrees.y)
                }
            }, {
                key: "rotateY",
                value: function(e) {
                    this._eulerDegrees.y += e,
                    this._rotationController.setEulerDegrees(this._eulerDegrees.x, this._eulerDegrees.y)
                }
            }, {
                key: "setRotationX",
                value: function(e) {
                    this._eulerDegrees.x = e,
                    this._rotationController.setEulerDegrees(this._eulerDegrees.x, this._eulerDegrees.y)
                }
            }, {
                key: "setRotationY",
                value: function(e) {
                    this._eulerDegrees.y = e,
                    this._rotationController.setEulerDegrees(this._eulerDegrees.x, this._eulerDegrees.y)
                }
            }, {
                key: "setRotationZ",
                value: function(e) {
                    this._eulerDegrees.z = e,
                    this.pivot.setEulerDegrees(this._eulerDegrees)
                }
            }, {
                key: "getRotationX",
                value: function() {
                    return this._eulerDegrees.x
                }
            }, {
                key: "getRotationY",
                value: function() {
                    return this._eulerDegrees.y
                }
            }, {
                key: "getRotationZ",
                value: function() {
                    return this._eulerDegrees.z
                }
            }, {
                key: "setDistance",
                value: function(e) {
                    this.view.transform.setPositionValues(0, 0, e)
                }
            }, {
                key: "disableGyroscope",
                value: function() {
                    this._gyroscope = null
                }
            }, {
                key: "enableGyroscope",
                value: function() {
                    this._gyroscope || (this._gyroscope = new cs(this._renderer.getCanvas(),this.pivot))
                }
            }, {
                key: "getGyroscope",
                value: function() {
                    return this._gyroscope
                }
            }, {
                key: "addHammerPinch",
                value: function() {
                    var e = this
                      , t = this._hammer;
                    t.get("pinch").set({
                        enable: !0
                    }),
                    t.on("pinch", function(t) {
                        e.handlePinch(t.scale)
                    }),
                    t.on("pinchend", function(t) {
                        e.handlePinch(t.scale)
                    })
                }
            }, {
                key: "handlePinch",
                value: function(e) {
                    this.scrollZoom(e - 1, .25)
                }
            }, {
                key: "mouseResponse",
                set: function(e) {}
            }, {
                key: "fov",
                set: function(e) {
                    console.log("fov", this.projection.getFOV(), e),
                    this.projection.setFOV(e)
                }
            }, {
                key: "active",
                set: function(e) {
                    this._active = e
                }
            }]),
            t
        }(us)
          , ms = function(e) {
            function t(e, n) {
                var i;
                return L()(this, t),
                (i = F()(this, D()(t).call(this)))._renderer = e,
                i._mesh = i.createMesh(),
                i._material = new pr(e,n,"dottedCircle"),
                i._material.setCullingDisabled(),
                i._material.setAlphaBlending(),
                i._material.setDrawTypePoints(),
                i
            }
            return z()(t, e),
            O()(t, [{
                key: "init",
                value: function(e) {
                    var t = e.addGroup("dottedCircle", this._material);
                    t.addShaderParamFloat("uRadius", 7),
                    t.addShaderParamFloat("uY", -1, -10, 0),
                    t.addShaderParamFloat("uThickness", .075, 0, .2)
                }
            }, {
                key: "createMesh",
                value: function() {
                    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 128, t = new br(this._renderer), n = new Float32Array(e), i = 0; i < e; i++)
                        n[i] = i / e;
                    return t.setAttribute("aPhase", 1, n),
                    t
                }
            }, {
                key: "draw",
                value: function(e, t) {
                    this._material.setMatrix("uViewProjection", e.getViewProjection()),
                    this._material.setFloat("uVisibility", t),
                    this._material.setFloat("uScreenHeight", this._renderer.getRenderHeight()),
                    this._renderer.draw(this._mesh, this._material)
                }
            }, {
                key: "destruct",
                value: function() {
                    this._mesh && (this._mesh.destruct(),
                    this._mesh = null),
                    this._material && (this._material.destruct(),
                    this._material = null),
                    q()(D()(t.prototype), "destruct", this).call(this)
                }
            }]),
            t
        }(vi)
          , gs = function(e) {
            function t(e, n) {
                var i;
                return L()(this, t),
                (i = F()(this, D()(t).call(this)))._isInit = !1,
                i._visible = !1,
                i._visibility = 0,
                i._initialScale = 1,
                i._defaultRotationX = -15,
                i._defaultRotationY = -90,
                i._defaultFov = 50,
                i._defaultDistance = 20,
                i._renderer = e,
                i._unity = new qi(i._renderer),
                Ze.a.mobile && (i._defaultFov = 75),
                i._camera = new ps(i._renderer,i._defaultFov),
                i._camera.setDistance(i._defaultDistance),
                i._camera.getRotationController().setRotationLimit(new rr(20,-1)),
                i._dottedCircle = new ms(i._renderer,n),
                i
            }
            return z()(t, e),
            O()(t, [{
                key: "init",
                value: function(e) {
                    var t = this;
                    e.addGroup("modelViewer").addParamFloat("progress", 1, 0, 1, function(e) {
                        t._material && t._material.setFloat("_Progress", e)
                    }),
                    this._dottedCircle.init(e)
                }
            }, {
                key: "load",
                value: function(e, t) {
                    this._unity && (this._unity.destruct(),
                    this._unity = null,
                    this._material = null),
                    this._camera.setRotationY(this._defaultRotationY),
                    t == bi.TRUTH ? this._camera.setRotationX(0) : this._camera.setRotationX(this._defaultRotationX),
                    this._camera.setDistance(this._defaultDistance),
                    this._camera.fov = this._defaultFov,
                    this._unity = new qi(this._renderer),
                    this._isInit = !1,
                    this._modelId = t;
                    var n = Ki("models/" + t + ".json");
                    Ci.doLogs && console.log("ModelViewer: url", n),
                    Zr.load(this._renderer, e, n, this._unity, "models/")
                }
            }, {
                key: "handleModelLoaded",
                value: function() {
                    this._unity.failedToLoad || (Ci.doLogs && console.log("ModelViewer: handleModelLoaded", this._unity),
                    this._unity.handleLoaded(),
                    this.startLoopingAnimations(this._unity),
                    this._visible = !0,
                    this._initialScale = this._unity.rootTransform.getScale().x,
                    this._isInit = !0,
                    this._material = this._unity.unityRenderer.materials[0])
                }
            }, {
                key: "playLoopingAnimation",
                value: function(e) {
                    var t = this._unity.unityAnimator.getClipByName(e);
                    t ? (t.loop = !0,
                    t.play(!1)) : console.warn("playLoopingAnimation: clip not found", e)
                }
            }, {
                key: "startLoopingAnimations",
                value: function(e) {
                    for (var t = 0; t < e.components.animationDatas.length; t++)
                        e.components.animationDatas[t].looping && e.playAnimation(e.components.animationDatas[t].name)
                }
            }, {
                key: "draw",
                value: function() {
                    if (this._isInit) {
                        var e = .75 * Li.getInstance().deltaTime;
                        if (this._visibility += this._visible ? e : -e,
                        this._visibility = ci.clamp01(this._visibility),
                        0 == this._visibility && this._closedCallback) {
                            var t = this._closedCallback;
                            this._closedCallback = null,
                            t.call(this)
                        }
                        this._material.setFloat("_Progress", this._visibility),
                        this._camera.active = this._visibility > 0,
                        this._visibility > 0 && (this._camera.update(),
                        this._unity.update(),
                        this._unity.draw(this._camera),
                        this._dottedCircle.draw(this._camera, this._visibility))
                    }
                }
            }, {
                key: "setScreenShiftX",
                value: function(e) {
                    this._camera.projection.setFrustumOffsetX(e)
                }
            }, {
                key: "setScreenShiftY",
                value: function(e) {
                    this._camera.projection.setFrustumOffsetY(e)
                }
            }, {
                key: "close",
                value: function(e) {
                    this._visible = !1,
                    this._closedCallback = e
                }
            }, {
                key: "destruct",
                value: function() {
                    this._unity && (this._unity.destruct(),
                    this._unity = null),
                    this._camera && (this._camera.destruct(),
                    this._camera = null),
                    this._dottedCircle && (this._dottedCircle.destruct(),
                    this._dottedCircle = null),
                    q()(D()(t.prototype), "destruct", this).call(this)
                }
            }]),
            t
        }(vi)
          , ys = function(e) {
            function t(e) {
                var n;
                return L()(this, t),
                (n = F()(this, D()(t).call(this)))._initialized = !1,
                n._paused = !1,
                null != t._instance && (t._instance.destruct(),
                console.error("WebglMain: constructor: an instance of WebglMain already exists!")),
                t._instance = Be()(n),
                n._dispatcher = e,
                n
            }
            return z()(t, e),
            O()(t, [{
                key: "setup",
                value: function(e, t) {
                    this._canvasParent = e,
                    nr.ENABLED = t,
                    Ci.isDebugMode = t,
                    Ci.doLogs = t
                }
            }, {
                key: "load",
                value: function(e, t) {
                    this._canvasManager || (this._canvasManager = new fs(this._canvasParent,!0),
                    this._renderer = new Or(e,this._canvasManager.getCanvas(),n(708),!1),
                    Ci.isDebugMode && (this._datGui = new xi(e)),
                    Ci.useWebp = Br.getWebpSupported(),
                    this._sceneManager = new ds(this._renderer,e,this),
                    this._modelViewer = new gs(this._renderer,e)),
                    this.loadScene(t, e)
                }
            }, {
                key: "init",
                value: function() {
                    var e = this;
                    if (!this._initialized) {
                        this._initialized = !0;
                        var t = new ki;
                        t.init("controls"),
                        this._portrait = t.addParamBool("portrait", !1),
                        this._renderer.init(),
                        this._renderer.setClearColor(0, 0, 0, 1),
                        this._sceneManager.init(t),
                        this._modelViewer.init(t);
                        for (var n = 0; n < t.children.length; n++)
                            t.children[n].collapsed = !0;
                        this._hotspotClickedHandler = function(t) {
                            return e.handleHotspotClicked(t)
                        }
                        ,
                        Wi.addEventListener(Fi.HotspotClickedFromWebglUI, this._hotspotClickedHandler),
                        this._cameraMovedHandler = function() {
                            return e.handleCameraMove()
                        }
                        ,
                        Wi.addEventListener(Fi.CameraMoved, this._cameraMovedHandler),
                        this._cameraStoppedHandler = function() {
                            return e.handleCameraStop()
                        }
                        ,
                        Wi.addEventListener(Fi.CameraStopped, this._cameraStoppedHandler),
                        this._datGui && this._datGui.init(t),
                        this.handleSceneLoaded(),
                        this.update()
                    }
                }
            }, {
                key: "update",
                value: function() {
                    var e = this;
                    !0 !== this.isDestructed && (this._paused || (this.cropPortait(),
                    this._sceneManager.draw(),
                    this._modelViewer.draw()),
                    window.requestAnimationFrame(function() {
                        return e.update()
                    }))
                }
            }, {
                key: "cropPortait",
                value: function() {
                    if (this._portrait.getValue()) {
                        var e = .5 * (1 - 9 / 16 / (this._canvasManager.canvas.width / this._canvasManager.canvas.height));
                        e > 0 ? this._renderer.setScissor(e, 0, 1 - e, 1) : this._renderer.unSetScissor()
                    } else
                        this._renderer.unSetScissor()
                }
            }, {
                key: "loadScene",
                value: function(e, t) {
                    this._sceneManager.loadScene(e, t)
                }
            }, {
                key: "handleSceneLoaded",
                value: function() {
                    this._sceneManager.handleSceneLoaded()
                }
            }, {
                key: "handleCameraMove",
                value: function() {
                    this._dispatcher.dispatchEvent(new _s(_s.types.ON_CAMERA_MOVED,{
                        hotspots: this.getHotspots(),
                        cameraRotation: this.cameraRotation
                    }))
                }
            }, {
                key: "handleCameraStop",
                value: function() {
                    this._dispatcher.dispatchEvent(new _s(_s.types.ON_CAMERA_STOPPED,{
                        hotspots: this.getHotspots()
                    }))
                }
            }, {
                key: "handleHotspotClicked",
                value: function(e) {
                    this._dispatcher.dispatchEvent(new _s(_s.types.HOTSPOT_CLICKED,{
                        id: e.name
                    })),
                    Ci.doLogs && console.log("handleHotspot clicked", e.name, e.screenPosition.x, e.screenPosition.y)
                }
            }, {
                key: "getHotspots",
                value: function() {
                    return this._sceneManager.getHotspots()
                }
            }, {
                key: "getHotspot",
                value: function(e) {
                    for (var t = this.getHotspots(), n = 0; n < t.length; n++)
                        if (t[n].transform.name == e)
                            return t[n];
                    return Ci.doLogs && console.warn("getHotspot: not found: ", e, t),
                    null
                }
            }, {
                key: "showModel",
                value: function(e, t) {
                    this._modelViewer.load(t, e)
                }
            }, {
                key: "handleModelLoaded",
                value: function() {
                    this._modelViewer.handleModelLoaded()
                }
            }, {
                key: "hideModel",
                value: function(e) {
                    var t = this;
                    this._modelViewer.close(function() {
                        e && e.call(t)
                    })
                }
            }, {
                key: "setWorldBlurred",
                value: function(e) {
                    this._sceneManager.modelMode = e
                }
            }, {
                key: "setModelScreenShiftX",
                value: function(e) {
                    this._modelViewer.setScreenShiftX(e)
                }
            }, {
                key: "setModelScreenShiftY",
                value: function(e) {
                    this._modelViewer.setScreenShiftY(e)
                }
            }, {
                key: "destruct",
                value: function() {
                    Wi.removeEventListener(this._hotspotClickedHandler),
                    Wi.removeEventListener(this._cameraMovedHandler),
                    Wi.removeEventListener(this._cameraStoppedHandler),
                    t._instance = null,
                    this._sceneManager && (this._sceneManager.destruct(),
                    this._sceneManager = null),
                    this._canvasManager && (this._canvasManager.destruct(),
                    this._canvasManager = null),
                    this._modelViewer && (this._modelViewer.destruct(),
                    this._modelViewer = null),
                    this._datGui && (this._datGui.destruct(),
                    this._datGui = null),
                    this._renderer && (this._renderer.destruct(),
                    this._renderer = null),
                    q()(D()(t.prototype), "destruct", this).call(this)
                }
            }, {
                key: "dispatcher",
                get: function() {
                    return this._dispatcher
                }
            }, {
                key: "cameraRotation",
                get: function() {
                    return this._sceneManager.cameraRotation
                }
            }, {
                key: "paused",
                set: function(e) {
                    this._paused = e
                }
            }]),
            t
        }(vi);
        ys._instance = null;
        var Es = function(e) {
            function t() {
                var e;
                return L()(this, t),
                (e = F()(this, D()(t).call(this)))._webGLMain = new ys(Be()(e)),
                e
            }
            return z()(t, e),
            O()(t, [{
                key: "setup",
                value: function(e, t) {
                    this._webGLMain.setup(e, t)
                }
            }, {
                key: "load",
                value: function(e, t, n) {
                    var i = this;
                    return new Promise(function(r) {
                        var s = new Si;
                        i._webGLMain.load(s, e.worldId),
                        s.load(function() {
                            t && t(),
                            r()
                        }, n)
                    }
                    )
                }
            }, {
                key: "gotoWorld",
                value: function(e, t, n) {
                    var i = this
                      , r = new Si;
                    this._webGLMain.loadScene(e, r),
                    r.load(function() {
                        i._webGLMain.handleSceneLoaded(),
                        t && t()
                    }, n)
                }
            }, {
                key: "showModel",
                value: function(e, t, n) {
                    var i = this
                      , r = new Si;
                    this._webGLMain.showModel(e, r),
                    r.load(function() {
                        i._webGLMain.handleModelLoaded(),
                        t && t()
                    }, n)
                }
            }, {
                key: "hideModel",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    this._webGLMain.hideModel(e)
                }
            }, {
                key: "setModelScreenShiftX",
                value: function(e) {
                    this._webGLMain.setModelScreenShiftX(e)
                }
            }, {
                key: "setModelScreenShiftY",
                value: function(e) {
                    this._webGLMain.setModelScreenShiftY(e)
                }
            }, {
                key: "setWorldBlurred",
                value: function(e) {
                    this._webGLMain.setWorldBlurred(e)
                }
            }, {
                key: "init",
                value: function() {
                    this._webGLMain.init()
                }
            }, {
                key: "play",
                value: function() {
                    this._webGLMain.paused = !1
                }
            }, {
                key: "pause",
                value: function() {
                    this._webGLMain.paused = !0
                }
            }, {
                key: "destruct",
                value: function() {
                    this._webGLMain && this._webGLMain.destruct()
                }
            }, {
                key: "destructAndCreateNewWebGLMain",
                value: function() {
                    this._webGLMain && this._webGLMain.destruct(),
                    this._webGLMain = new ys(this)
                }
            }, {
                key: "dispatcher",
                get: function() {
                    return this._webGLMain.dispatcher
                }
            }]),
            t
        }(wi.a)
          , Ts = function(e) {
            function t() {
                var e;
                return L()(this, t),
                (e = F()(this, D()(t).call(this))).currentModel = null,
                e
            }
            return z()(t, e),
            O()(t, [{
                key: "setup",
                value: function(e) {
                    var t = this
                      , n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    this._webgl = new Es,
                    this._webgl.setup(e, n);
                    var i = new ki;
                    i.init("external");
                    var r = Object.keys(ti).map(function(e) {
                        return ti[e]
                    })
                      , s = i.addGroup("Scenes")
                      , a = !0
                      , o = !1
                      , l = void 0;
                    try {
                        for (var h, u = r[Symbol.iterator](); !(a = (h = u.next()).done); a = !0) {
                            var c = h.value;
                            s.addButton(c, this._webgl.gotoWorld.bind(this._webgl, c))
                        }
                    } catch (y) {
                        o = !0,
                        l = y
                    } finally {
                        try {
                            a || null == u.return || u.return()
                        } finally {
                            if (o)
                                throw l
                        }
                    }
                    var v = Object.keys(bi).map(function(e) {
                        return bi[e]
                    });
                    s = i.addGroup("Models");
                    var d = !0
                      , f = !1
                      , _ = void 0;
                    try {
                        for (var p, m = v[Symbol.iterator](); !(d = (p = m.next()).done); d = !0) {
                            var g = p.value;
                            s.addButton(g, this._webgl.showModel.bind(this._webgl, g))
                        }
                    } catch (y) {
                        f = !0,
                        _ = y
                    } finally {
                        try {
                            d || null == m.return || m.return()
                        } finally {
                            if (f)
                                throw _
                        }
                    }
                    i.addButton("hide model", function() {
                        return t._webgl.hideModel()
                    }),
                    i.addParamBool("blurred", !1, function(e) {
                        t._webgl.setWorldBlurred(e)
                    }),
                    i.addParamFloat("modelScreenShiftX", 0, -1, 1, function(e) {
                        return t._webgl.setModelScreenShiftX(e)
                    }),
                    i.addParamFloat("modelScreenShiftY", 0, -1, 1, function(e) {
                        return t._webgl.setModelScreenShiftY(e)
                    }),
                    n && (this._datGui = new xi(null),
                    this._datGui.init(i)),
                    this._webgl.dispatcher.addEventListener(_s.types.ON_CAMERA_MOVED, function(e) {}),
                    this._webgl.dispatcher.addEventListener(_s.types.ON_CAMERA_STOPPED, function(e) {}),
                    this._webgl.dispatcher.addEventListener(_s.types.HOTSPOT_CLICKED, function(e) {})
                }
            }, {
                key: "load",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {}
                    ;
                    this._webgl.load({
                        worldId: ti.EXTERIOR1
                    }, e, t)
                }
            }, {
                key: "init",
                value: function() {
                    this._webgl.init()
                }
            }, {
                key: "play",
                value: function() {
                    this._webgl.play()
                }
            }, {
                key: "pause",
                value: function() {
                    this._webgl.pause()
                }
            }, {
                key: "gotoWorld",
                value: function(e) {
                    var t = this;
                    return new Promise(function(n) {
                        t._webgl.gotoWorld(e, function() {
                            return n()
                        }, function() {})
                    }
                    )
                }
            }, {
                key: "showModel",
                value: function(e) {
                    var t = this;
                    return this.currentModel = e,
                    new Promise(function(n) {
                        t._webgl.showModel(e, function() {
                            null === t.currentModel && t.hideModel(),
                            n()
                        }, function() {})
                    }
                    )
                }
            }, {
                key: "hideModel",
                value: function() {
                    this.currentModel = null,
                    this._webgl.hideModel()
                }
            }, {
                key: "setModelScreenShiftX",
                value: function(e) {
                    this._webgl.setModelScreenShiftX(e)
                }
            }, {
                key: "setModelScreenShiftY",
                value: function(e) {
                    this._webgl.setModelScreenShiftY(e)
                }
            }, {
                key: "setWorldBlurred",
                value: function(e) {
                    this._webgl.setWorldBlurred(e)
                }
            }, {
                key: "addListener",
                value: function(e, t) {
                    return new ze.DisposableEventListener(this._webgl.dispatcher,e,function(e) {
                        return t(e)
                    }
                    )
                }
            }, {
                key: "destruct",
                value: function() {
                    this._datGui && (this._datGui.destruct(),
                    this._datGui = null),
                    this._webgl && (this._webgl.destruct(),
                    this._webgl = null),
                    q()(D()(t.prototype), "destruct", this).call(this)
                }
            }]),
            t
        }(vi)
          , Rs = function() {
            var e = new si.a;
            e.init(li.config, li.environment);
            var t = Gn.create({
                baseURL: e.getURL(E.API),
                headers: {
                    Accept: "application/json"
                },
                responseType: "json"
            });
            t.interceptors.response.use(function(e) {
                return function(e) {
                    return e && e.data && "undefined" !== typeof e.data.data ? S()({}, e, e.data) : e
                }(e)
            }, function(e) {
                throw function(e) {
                    if (e && e.response && e.response.data && e.response.data.error) {
                        var t = S()({
                            config: e.config
                        }, e.response, e.response.data);
                        return delete t.data,
                        t
                    }
                    return e
                }(e)
            }),
            x(b, e),
            x("gateway", t),
            x("appPreloader", new hi),
            x("webgl", new Ts)
        };
        function As(e) {
            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], a = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            return W.TweenLite.fromTo(e, n, X()({}, s ? "autoAlpha" : "opacity", i), (t = {},
            X()(t, s ? "autoAlpha" : "opacity", r),
            X()(t, "ease", W.Linear.easeNone),
            X()(t, "clearProps", a ? "opacity,visibility" : ""),
            t))
        }
        function xs(e) {
            var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .5, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            return W.TweenLite.to(e, n, (t = {},
            X()(t, r ? "autoAlpha" : "opacity", i),
            X()(t, "ease", W.Linear.easeNone),
            X()(t, "clearProps", s ? "opacity,visibility" : ""),
            t))
        }
        var ks = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            O()(t, [{
                key: "setupTransitionInTimeline",
                value: function(e, t, n) {
                    e.add(As(t.$el, .01))
                }
            }, {
                key: "setupTransitionOutTimeline",
                value: function(e, t, n) {
                    var i = t.$el
                      , r = i.offsetHeight
                      , s = i.offsetWidth;
                    e.to(t.$refs.progress, 0, {
                        width: "100%"
                    }),
                    e.to(t.$refs.content, 1, {
                        yPercent: -50,
                        ease: W.Power3.easeInOut
                    }, .1),
                    e.to(t.$refs.grid.$el, 1, {
                        yPercent: -25,
                        ease: W.Power3.easeInOut
                    }, .1),
                    e.fromTo(t.$el, 1, {
                        clip: "rect(0, ".concat(s, "px, ").concat(r, "px, 0)")
                    }, {
                        clip: "rect(0, ".concat(s, "px, 0px, 0)"),
                        ease: W.Power3.easeInOut
                    }, .1),
                    e.add(xs(t.$el, 0))
                }
            }, {
                key: "setupLoopingAnimationTimeline",
                value: function(e, t, n) {}
            }]),
            t
        }(I.AbstractTransitionController)
          , bs = function(e) {
            function t(e) {
                return L()(this, t),
                F()(this, D()(t).call(this, Object.assign(e, {
                    batchSize: 1,
                    cached: !1
                })))
            }
            return z()(t, e),
            O()(t, [{
                key: "loadAsset",
                value: function(e) {
                    return Promise.resolve()
                }
            }, {
                key: "load",
                value: function(e) {
                    var t = this;
                    return new Promise(function(n) {
                        t.options.loadMethod(t.options.params, function() {
                            return n()
                        }, function(t) {
                            e(t)
                        })
                    }
                    )
                }
            }, {
                key: "dispose",
                value: function() {
                    q()(D()(t.prototype), "dispose", this).call(this)
                }
            }]),
            t
        }(Pe.AbstractLoadTask)
          , Ms = {
            name: "SitePreloader",
            components: {
                ScrollingGridBlocks: An
            },
            extends: I.AbstractTransitionComponent,
            computed: S()({}, Object(C.d)({
                deviceState: function(e) {
                    return e.app.deviceState
                }
            })),
            methods: {
                handleAllComponentsReady: function() {
                    this.transitionController = new ks(this),
                    this.isReady()
                },
                loadApplication: function() {
                    var e = Ce()(we.a.mark(function e() {
                        var t = this;
                        return we.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.transitionIn(!0),
                                    this.$appPreloader.addTask(new bs({
                                        loadMethod: this.$webgl.load.bind(this.$webgl)
                                    })),
                                    [this.RouteNames.WEBGL, this.RouteNames.TEST].includes(this.$route.name) || this.$appPreloader.addTask(new Pe.LoadImageTask({
                                        assets: Qe(Object.values(at), this.$versionRoot)
                                    })),
                                    this.$appPreloader.addTask(new Pe.LoadImageTask({
                                        assets: ["".concat(this.$versionRoot, "image/filler-main-background-").concat(this.deviceState < Te.deviceState.MEDIUM ? "small" : "large", ".png")]
                                    })),
                                    e.next = 6,
                                    this.$appPreloader.start({
                                        onUpdate: function(e) {
                                            t.$refs.progress.style.width = "".concat(Math.round(2 * e * 100), "%")
                                        }
                                    });
                                case 6:
                                    document.documentElement.classList.add("is-loaded"),
                                    this.$emit("complete");
                                case 8:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }
        }
          , ws = n(244);
        var Ss = Object(d.a)(Ms, function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                class: [e.$style.sitePreloader]
            }, [n("ScrollingGridBlocks", {
                ref: "grid",
                attrs: {
                    "light-opacity": 1,
                    "has-mask": !1,
                    color: "#fff"
                }
            }), e._v(" "), n("div", {
                ref: "content",
                class: e.$style.content
            }, [n("span", {
                class: e.$style.loader
            }), e._v(" "), n("p", {
                class: ["heading-02", e.$style.text]
            }, [e._v("\n      " + e._s(e.$t("general.loading")) + "\n    ")]), e._v(" "), n("span", {
                ref: "progress",
                class: e.$style.progress
            })])], 1)
        }, [], !1, function(e) {
            this.$style = ws.default.locals || ws.default
        }, null, null).exports
          , Cs = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            O()(t, [{
                key: "toggleLogoVisibility",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      //, n = this.parentController.$refs.logo.$el.querySelector("svg");
                    W.TweenLite.killTweensOf(n),
                    e ? W.TweenLite.fromTo(n, t ? .01 : .8, {
                        yPercent: 100,
                        scaleY: 5,
                        opacity: 1,
                        transformOrigin: "top center"
                    }, {
                        yPercent: 0,
                        scaleY: 1,
                        transformOrigin: "top center",
                        ease: te.VinnieInOut,
                        clearProps: "yPercent,scaleY,transformOrigin,opacity"
                    }) : W.TweenLite.to(n, t ? .01 : .2, {
                        opacity: 0,
                        ease: W.Power3.easeOut
                    })
                }
            }, {
                key: "toggleShareOptions",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , n = this.parentController.$refs.shareOptions;
                    W.TweenLite.to(n, t ? 0 : .8, {
                        yPercent: e ? 0 : 20,
                        autoAlpha: e ? 1 : 0,
                        ease: te.VinnieInOut
                    })
                }
            }, {
                key: "setupTransitionInTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupTransitionOutTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupLoopingAnimationTimeline",
                value: function(e, t, n) {}
            }]),
            t
        }(I.AbstractTransitionController)
          , Is = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            O()(t, [{
                key: "setupTransitionInTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupTransitionOutTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupLoopingAnimationTimeline",
                value: function(e, t, n) {}
            }]),
            t
        }(I.AbstractTransitionController)
          , Ps = {
            name: "CurrentPageTitle",
            extends: I.AbstractTransitionComponent,
            data: function() {
                return {
                    titles: G.map(function(e) {
                        return e.title
                    })
                }
            },
            computed: S()({}, Object(C.d)({
                currentScrollSection: function(e) {
                    return e.app.currentScrollSection
                }
            })),
            methods: {
                handleAllComponentsReady: function() {
                    this.transitionController = new Is(this),
                    this.isReady()
                }
            }
        }
          , Ls = n(245);
        var Vs = Object(d.a)(Ps, function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("h2", {
                class: e.$style.currentPageTitle
            }, [n("span", {
                class: e.$style.wrapper
            }, [n("span", {
                class: ["font-pixel", e.$style.numberWrapper]
            }, [e._v("\n      0\n      "), n("span", {
                class: e.$style.numbers
            }, e._l(e.titles, function(t, i) {
                var r;
                return n("span", {
                    key: "number-" + i,
                    ref: "number",
                    refInFor: !0,
                    class: [e.$style.number, (r = {},
                    r[e.$style.isPrevious] = e.currentScrollSection > i,
                    r[e.$style.isNext] = e.currentScrollSection < i,
                    r)],
                    attrs: {
                        "aria-hidden": e.currentScrollSection !== i
                    }
                }, [e._v(e._s(i + 1))])
            }), 0)]), e._v(" "), n("span", {
                class: e.$style.titleWrapper
            }, e._l(e.titles, function(t, i) {
                var r;
                return n("span", {
                    key: "title-" + i,
                    class: [e.$style.title, (r = {},
                    r[e.$style.isActive] = e.currentScrollSection === i,
                    r)],
                    attrs: {
                        "aria-hidden": e.currentScrollSection !== i
                    }
                }, [e._v(e._s(e.$t(t)))])
            }), 0)])])
        }, [], !1, function(e) {
            this.$style = Ls.default.locals || Ls.default
        }, null, null).exports
          , Os = {
            name: "SiteHeader",
            components: {
                CurrentPageTitle: Vs,
                ShareList: wt
            },
            extends: I.AbstractTransitionComponent,
            props: {
                inverted: l.a.bool.def(!1)
            },
            data: function() {
                return {
                    isShareVisible: !1
                }
            },
            computed: S()({}, Object(C.d)({
                isLogoVisible: function(e) {
                    return e.app.headerLogoVisible
                }
            })),
            watch: {
                isLogoVisible: function(e) {
                    this.transitionController.toggleLogoVisibility(e)
                },
                isShareVisible: function(e) {
                    this.transitionController.toggleShareOptions(e)
                }
            },
            mounted: function() {
                this.inverted && this.$scroll && this.addMasking()
            },
            methods: {
                handleAllComponentsReady: function() {
                    this.transitionController = new Cs(this),
                    this.transitionController.toggleLogoVisibility(this.isLogoVisible, !0),
                    this.transitionController.toggleShareOptions(this.isShareVisible, !0),
                    this.isReady()
                },
                addMasking: function() {
                    this.$scroll.addEventListener(re.types.UPDATE, this.onScrollUpdate)
                },
                toggleShareOptions: function() {
                    this.isShareVisible = !this.isShareVisible
                },
                onShareClose: function() {
                    this.isShareVisible = !1
                },
                onScrollUpdate: function() {
                    var e = this
                      , t = window
                      , n = t.innerHeight
                      , i = t.innerWidth
                      , r = Array.from(document.querySelectorAll("[".concat("data-invert-navigation", "]"))).reduce(function(t, i) {
                        var r = e.getInViewProperties(i)
                          , s = r.inView
                          , a = r.top
                          , o = r.bottom;
                        return s && (t.top = Math.min(t.top, Math.max(0, a)),
                        t.bottom = Math.min(n, o)),
                        t
                    }, {
                        top: n,
                        bottom: n,
                        right: i,
                        left: 0
                    })
                      , s = r.top
                      , a = r.right
                      , o = r.bottom
                      , l = r.left;
                    this.$el.style.clip = "rect(".concat(s, "px, ").concat(a, "px, ").concat(o, "px, ").concat(l, "px)")
                },
                getInViewProperties: function(e) {
                    var t = window.innerHeight
                      , n = e.getBoundingClientRect()
                      , i = n.top
                      , r = n.bottom;
                    return {
                        top: i,
                        bottom: r,
                        inView: i < t && r > 0
                    }
                }
            }
        }
          , Ns = n(246);
        var Fs = Object(d.a)(Os, function() {
            var e, t = this, n = t.$createElement, i = t._self._c || n;
            return i("header", {
                class: [t.$style.siteHeader, (e = {},
                e[t.$style.inverted] = t.inverted,
                e)],
                attrs: {
                    "aria-disabled": t.inverted
                }
            }, [i("div", {
                class: t.$style.background
            }), t._v(" "), i("div", {
                class: ["content", t.$style.pageTitle]
            }, [i("CurrentPageTitle")], 1), t._v(" "), i("div", {
                class: t.$style.content
            }, [i("button", {
                class: t.$style.menuToggle,
                on: {
                    click: function(e) {
                        return t.$emit("toggleNavigation")
                    }
                }
            }, [i("Icon", {
                attrs: {
                    name: "menu"
                }
            })], 1), t._v(" "), i("a", {
                class: t.$style.hashtag,
                attrs: {
                    href: t.$t("general.hashtagUrl"),
                    target: "_blank"
                }
            }, [i("Icon", {
                attrs: {
                    name: "hashtag-rotated"
                }
            })], 1), t._v(" "), i("Icon", {
                ref: "logo",
                class: t.$style.logo,
                attrs: {
                    name: "logo-small"
                }
            }), t._v(" "), i("nav", {
                class: t.$style.metaNavigation
            }, [i("dl", {
                directives: [{
                    name: "closable",
                    rawName: "v-closable",
                    value: {
                        exclude: [],
                        handler: "onShareClose"
                    },
                    expression: "{\n          exclude: [],\n          handler: 'onShareClose'\n        }"
                }],
                class: t.$style.share
            }, [i("dt", [i("button", {
                class: t.$style.shareButton,
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        t.toggleShareOptions(e)
                    }
                }
            }, [i("Icon", {
                attrs: {
                    name: "share"
                }
            })], 1)]), t._v(" "), i("dd", {
                ref: "shareOptions"
            }, [i("ShareList", {
                class: t.$style.shareList
            })], 1)])])], 1)])
        }, [], !1, function(e) {
            this.$style = Ns.default.locals || Ns.default
        }, null, null).exports
          , Bs = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            O()(t, [{
                key: "setupTransitionInTimeline",
                value: function(e, t, n) {
                    e.add(As(t.$el, .1)),
                    e.add(As(t.$refs.background, .8), 0),
                    e.fromTo(t.$refs.content, .8, {
                        xPercent: -100
                    }, {
                        xPercent: 0,
                        clearProps: "xPercent",
                        ease: te.VinnieInOut
                    }, 0),
                    e.fromTo(t.$refs.hashtag.$el, .6, {
                        xPercent: -25
                    }, {
                        xPercent: 0,
                        clearProps: "xPercent",
                        ease: te.VinnieInOut
                    }, .2),
                    e.fromTo(t.$refs.hashtag.$el, .3, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1,
                        clearProps: "visibility,opacity",
                        ease: W.Linear.easeNone
                    }, .2)
                }
            }, {
                key: "setupTransitionOutTimeline",
                value: function(e, t, n) {
                    e.add(xs(t.$el, .05), .7),
                    e.add(xs(t.$refs.background, .6), .2),
                    e.add(xs(t.$refs.hashtag.$el, .35), 0),
                    e.to(t.$refs.content, .7, {
                        xPercent: -100,
                        ease: te.VinnieInOut
                    }, 0)
                }
            }, {
                key: "setupLoopingAnimationTimeline",
                value: function(e, t, n) {}
            }]),
            t
        }(I.AbstractTransitionController)
          , Ds = {
            name: "MainNavigation",
            components: {
                ScrollingGridBlocks: An
            },
            extends: I.AbstractTransitionComponent,
            props: {
                isOpen: l.a.bool.required
            },
            data: function() {
                return {
                    blocks: G,
                    locales: []
                }
            },
            computed: {
                splittedHashtag: function() {
                    return this.$t("general.hashtag").split(/(?=[A-Z])/)
                }
            },
            watch: {
                isOpen: function(e) {
                    e && this.transitionIn(!0)
                }
            },
            mounted: function() {
                this.locales = this.$config.getProperty(this.PropertyNames.AVAILABLE_LOCALES)
            },
            methods: {
                handleAllComponentsReady: function() {
                    this.transitionController = new Bs(this),
                    this.isReady()
                },
                onMenuItemClick: function() {
                    var e = Ce()(we.a.mark(function e(t) {
                        return we.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.onCloseClick();
                                case 2:
                                    this.$eventBus.$emit(Gt.MENU_CLICK, t);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                onCloseClick: function() {
                    var e = Ce()(we.a.mark(function e() {
                        return we.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.transitionOut(!0);
                                case 2:
                                    this.$emit("close");
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                onLocaleChangeClick: function(e) {
                    this.$setLanguage(e)
                }
            }
        }
          , Us = n(247);
        var zs, Hs = Object(d.a)(Ds, function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("nav", {
                class: [e.$style.mainNavigation]
            }, [n("div", {
                ref: "background",
                class: e.$style.background
            }), e._v(" "), n("Icon", {
                ref: "hashtag",
                class: e.$style.hashtag,
                attrs: {
                    name: "hashtag"
                }
            }), e._v(" "), n("div", {
                ref: "content",
                class: e.$style.contentWrapper
            }, [n("ScrollingGridBlocks", {
                class: e.$style.grid,
                attrs: {
                    color: "#BFBFD4",
                    paused: !e.isOpen,
                    "light-opacity": .1,
                    "has-mask": !1
                }
            }), e._v(" "), n("div", {
                class: e.$style.content
            }, [n("header", {
                class: e.$style.header
            }, [n("button", {
                class: e.$style.closeButton,
                on: {
                    click: e.onCloseClick
                }
            }, [n("Icon", {
                attrs: {
                    name: "close"
                }
            })], 1), e._v(" "), n("ul", {
                class: e.$style.locales
            }, e._l(e.locales, function(t, i) {
                return n("li", {
                    key: "locale-" + i
                }, [n("button", {
                    class: ["font-pixel", e.$style.localeButton],
                    on: {
                        click: function(n) {
                            return e.onLocaleChangeClick(t)
                        }
                    }
                }, [n("Icon", {
                    attrs: {
                        name: "lang-" + t
                    }
                })], 1)])
            }), 0)]), e._v(" "), n("ul", {
                class: e.$style.navItemList
            }, e._l(e.blocks, function(t, i) {
                return n("li", {
                    key: "item-" + i,
                    class: e.$style.navItem
                }, [n("button", {
                    class: e.$style.navButton,
                    on: {
                        click: function(t) {
                            return t.preventDefault(),
                            e.onMenuItemClick(i)
                        }
                    }
                }, [e._v("\n            " + e._s(e.$t(t.title)) + "\n          ")])])
            }), 0)])], 1)], 1)
        }, [], !1, function(e) {
            this.$style = Us.default.locals || Us.default
        }, null, null).exports, Gs = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            O()(t, [{
                key: "setupTransitionInTimeline",
                value: function(e, t, n) {
                    e.add(As(t.$el))
                }
            }, {
                key: "setupTransitionOutTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupLoopingAnimationTimeline",
                value: function(e, t, n) {}
            }]),
            t
        }(I.AbstractTransitionController);
        !function(e) {
            e.EGYPT = "egypt",
            e.MEXICO = "mexico",
            e.RUSSIA = "russia",
            e.SAUDI_ARABIA = "saudiArabia",
            e.VIETNAM = "vietnam",
            e.RSF = "rsf"
        }(zs || (zs = {}));
        var $s = zs
          , Xs = [{
            model: bi.KRAKEN,
            content: $s.RUSSIA
        }, {
            model: bi.SCALE,
            content: $s.EGYPT
        }, {
            model: bi.CAGE,
            content: $s.SAUDI_ARABIA
        }, {
            model: bi.SHRINE,
            content: $s.MEXICO
        }, {
            model: bi.MAZE,
            content: $s.VIETNAM
        }, {
            model: bi.TRUTH,
            content: $s.RSF
        }]
          , Ws = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            O()(t, [{
                key: "setupTransitionInTimeline",
                value: function(e, t, n) {
                    e.add(As(t.$el))
                }
            }, {
                key: "setupTransitionOutTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupLoopingAnimationTimeline",
                value: function(e, t, n) {}
            }]),
            t
        }(I.AbstractTransitionController)
          , js = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            O()(t, [{
                key: "setupTransitionInTimeline",
                value: function(e, t, n) {
                    e.add(As(t.$el))
                }
            }, {
                key: "setupTransitionOutTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupLoopingAnimationTimeline",
                value: function(e, t, n) {}
            }]),
            t
        }(I.AbstractTransitionController)
          , Ys = {
            name: "WalkthroughMap",
            components: {
                CloseButton: fn
            },
            extends: I.AbstractTransitionComponent,
            props: {
                currentWorld: l.a.string,
                isOpen: l.a.bool
            },
            data: function() {
                return {
                    WorldId: ti
                }
            },
            computed: S()({}, Object(C.d)({
                deviceState: function(e) {
                    return e.app.deviceState
                }
            })),
            watch: {
                isOpen: function() {
                    this.isOpen ? this.transitionIn(!0) : this.transitionOut(!0)
                },
                deviceState: function() {
                    this.handleResize()
                }
            },
            mounted: function() {
                this.resize = new ze.DisposableEventListener(window,"resize",Xe()(this.handleResize, 200)),
                this.handleResize()
            },
            beforeDestroy: function() {
                this.resize.dispose()
            },
            methods: {
                handleAllComponentsReady: function() {
                    this.transitionController = new js(this),
                    this.isReady()
                },
                onHotspotClick: function(e) {
                    this.$emit("gotoWorld", e),
                    this.$emit("close")
                },
                handleResize: function() {
                    if (this.deviceState < Te.deviceState.MEDIUM)
                        this.$refs.map.removeAttribute("style");
                    else {
                        var e = this.$refs.mapWrapper
                          , t = e.offsetWidth
                          , n = e.offsetHeight
                          , i = Ue()([0, 0, 518, 334], [0, 0, t, n], "contain")
                          , r = Ne()(i, 3)[2];
                        Object.assign(this.$refs.map.style, {
                            width: "".concat(r, "px"),
                            fontSize: "".concat(r / 100, "px")
                        })
                    }
                }
            }
        }
          , qs = n(248);
        var Ks = {
            name: "WalkthroughNavigation",
            components: {
                CloseButton: _n,
                WalkthroughMap: Object(d.a)(Ys, function() {
                    var e = this
                      , t = e.$createElement
                      , n = e._self._c || t;
                    return n("div", {
                        class: [e.$style.walkthroughMap]
                    }, [n("div", {
                        ref: "mapWrapper",
                        class: e.$style.mapWrapper
                    }, [n("div", {
                        ref: "map",
                        class: e.$style.map
                    }, [n("Icon", {
                        attrs: {
                            name: "map"
                        }
                    }), e._v(" "), n("Icon", {
                        class: e.$style.rsfLogo,
                        attrs: {
                            name: "rsf-small"
                        }
                    }), e._v(" "), n("ul", {
                        class: e.$style.hotspotList
                    }, e._l(Object.keys(e.WorldId), function(t) {
                        var i;
                        return n("li", {
                            key: "world-" + t,
                            class: [e.$style.hotspot, e.$style[e.WorldId[t]], (i = {},
                            i[e.$style.isActive] = e.currentWorld === e.WorldId[t],
                            i)]
                        }, [n("button", {
                            class: e.$style.hotspotButton,
                            on: {
                                click: function(n) {
                                    return e.onHotspotClick(e.WorldId[t])
                                }
                            }
                        }, [n("Icon", {
                            class: e.$style.buttonArrow,
                            attrs: {
                                name: "arrow-right"
                            }
                        }), e._v("\n            " + e._s(e.$t("walkthrough.rooms." + e.WorldId[t])) + "\n            "), [e.WorldId.RFS_1].includes(e.WorldId[t]) ? n("span", {
                            class: e.$style.rsfNumber
                        }, [e._v("1")]) : e._e(), e._v(" "), [e.WorldId.RFS_2].includes(e.WorldId[t]) ? n("span", {
                            class: e.$style.rsfNumber
                        }, [e._v("2")]) : e._e()], 1)])
                    }), 0)], 1)]), e._v(" "), n("CloseButton", {
                        class: e.$style.closeButton,
                        nativeOn: {
                            click: function(t) {
                                return t.preventDefault(),
                                e.$emit("close")
                            }
                        }
                    })], 1)
                }, [], !1, function(e) {
                    this.$style = qs.default.locals || qs.default
                }, null, null).exports
            },
            extends: I.AbstractTransitionComponent,
            props: {
                isVisible: l.a.bool,
                currentWorldId: l.a.string
            },
            data: function() {
                return {
                    WorldId: ti,
                    ModelId: bi,
                    currentModel: "",
                    isMapOpen: !1
                }
            },
            computed: {
                currentWorldIndex: function() {
                    var e = this;
                    return Object.values(this.WorldId).findIndex(function(t) {
                        return t === e.currentWorldId
                    })
                },
                previousWorldId: function() {
                    var e = Object.keys(this.WorldId).length;
                    return Object.values(this.WorldId)[(this.currentWorldIndex - 1 + e) % e]
                },
                nextWorldId: function() {
                    var e = Object.keys(this.WorldId).length;
                    return Object.values(this.WorldId)[(this.currentWorldIndex + 1) % e]
                }
            },
            watch: {
                currentModel: function() {
                    this.currentModel && this.$emit("gotoModel", this.currentModel)
                },
                isVisible: function() {
                    this.isVisible ? this.transitionIn(!0) : this.transitionOut(!0)
                },
                isMapOpen: function() {
                    this.$webgl.setWorldBlurred(this.isMapOpen),
                    this.$emit("mapOpenChange", this.isMapOpen)
                }
            },
            methods: S()({}, Object(C.c)({
                setWebglVisiblity: ve
            }), {
                handleAllComponentsReady: function() {
                    this.transitionController = new Ws(this),
                    this.isVisible && this.transitionIn(!0),
                    this.isReady()
                },
                onPreviousClick: function() {
                    this.$emit("gotoWorld", this.previousWorldId)
                },
                onNextClick: function() {
                    this.$emit("gotoWorld", this.nextWorldId)
                },
                onCloseClick: function() {
                    this.setWebglVisiblity(!1)
                },
                toggleMap: function() {
                    this.isMapOpen = !this.isMapOpen
                }
            })
        }
          , Zs = n(249);
        var Js = Object(d.a)(Ks, function() {
            var e, t, n = this, i = n.$createElement, r = n._self._c || i;
            return r("nav", {
                class: [n.$style.walkthroughNavigation, (e = {},
                e[n.$style.isMapOpen] = n.isMapOpen,
                e)]
            }, [r("button", {
                class: [n.$style.navigationButton, n.$style.previous],
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        n.onPreviousClick(e)
                    }
                }
            }, [r("Icon", {
                attrs: {
                    name: "arrow-left"
                }
            })], 1), n._v(" "), r("button", {
                class: [n.$style.navigationButton, n.$style.next],
                on: {
                    click: function(e) {
                        return e.preventDefault(),
                        n.onNextClick(e)
                    }
                }
            }, [r("Icon", {
                attrs: {
                    name: "arrow-right"
                }
            })], 1), n._v(" "), r("CloseButton", {
                class: n.$style.closeButton,
                nativeOn: {
                    click: function(e) {
                        return e.preventDefault(),
                        n.onCloseClick(e)
                    }
                }
            }), n._v(" "), r("button", {
                class: [n.$style.toggleMapButton, (t = {},
                t[n.$style.isMapOpen] = n.isMapOpen,
                t)],
                on: {
                    click: n.toggleMap
                }
            }, [n._v("\n    " + n._s(n.$t("walkthrough." + (n.isMapOpen ? "close" : "open") + "Map")) + "\n  ")]), n._v(" "), r("WalkthroughMap", {
                attrs: {
                    "current-world": n.currentWorldId,
                    "is-open": n.isMapOpen
                },
                on: {
                    gotoWorld: function(e) {
                        return n.$emit("gotoWorld", e)
                    },
                    close: n.toggleMap
                }
            })], 1)
        }, [], !1, function(e) {
            this.$style = Zs.default.locals || Zs.default
        }, null, null).exports
          , Qs = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            O()(t, [{
                key: "setupTransitionInTimeline",
                value: function(e, t, n) {
                    e.add(As(t.$el, .1));
                    var i = {};
                    t.deviceState >= Te.deviceState.MEDIUM ? i.xPercent = -100 : i.yPercent = 100,
                    e.fromTo(t.$refs.wrapper, 1, i, {
                        xPercent: 0,
                        yPercent: 0,
                        ease: te.VinnieInOut,
                        clearProps: "xPercent,yPercent"
                    }, 0)
                }
            }, {
                key: "setupTransitionOutTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupLoopingAnimationTimeline",
                value: function(e, t, n) {}
            }]),
            t
        }(I.AbstractTransitionController)
          , ea = {
            hotspotId: l.a.string,
            model: l.a.string,
            content: l.a.string
        }
          , ta = {
            name: "HotspotOverlay",
            components: {
                PrimaryButton: Ee
            },
            props: {
                data: me(l.a.shape(ea))
            },
            extends: I.AbstractTransitionComponent,
            computed: S()({}, Object(C.d)({
                deviceState: function(e) {
                    return e.app.deviceState
                }
            }), {
                content: function() {
                    return null === this.data ? null : this.$store.getters.translation.walkthrough[this.data.content]
                }
            }),
            watch: {
                data: function() {
                    var e = this;
                    null !== this.data ? this.$nextTick(function() {
                        e.onDeviceStateChange(),
                        e.$webgl.showModel(e.data.model),
                        e.transitionIn(!0)
                    }) : this.scroll && (this.scroll.dispose(),
                    this.$refs.content.style.height = ""),
                    this.grid.paused = null === this.data
                },
                deviceState: function() {
                    this.onDeviceStateChange()
                }
            },
            mounted: function() {
                this.grid = new an(this.$refs.gridBlocks,this.scroll,{
                    color: "#131313",
                    maxLightOpacity: .025,
                    hasMask: !1
                })
            },
            beforeDestroy: function() {
                this.grid.dispose()
            },
            methods: {
                handleAllComponentsReady: function() {
                    this.transitionController = new Qs(this),
                    this.isReady()
                },
                onReadBookClick: function() {
                    this.$emit("openBook", this.content.book),
                    this.onCloseClick()
                },
                onCloseClick: function() {
                    var e = Ce()(we.a.mark(function e() {
                        return we.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.$webgl.hideModel(),
                                    e.next = 3,
                                    this.transitionOut(!0);
                                case 3:
                                    this.scroll && this.scroll.dispose(),
                                    this.$emit("close");
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                onDeviceStateChange: function() {
                    var e = this.deviceState >= Te.deviceState.MEDIUM ? this.$refs.copy : this.$refs.content;
                    e && e === this.$refs.copy && (e.style.height = "",
                    e.style.height = "".concat(e.offsetHeight, "px"),
                    this.scroll = new se,
                    this.scroll.init(e, {
                        alwaysShowTracks: !0
                    }),
                    this.grid.scroll = this.scroll)
                }
            }
        }
          , na = n(250);
        var ia = Object(d.a)(ta, function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                class: [e.$style.hotspotOverlay]
            }, [n("div", {
                ref: "wrapper",
                class: e.$style.wrapper
            }, [n("div", {
                ref: "gridBlocks",
                class: e.$style.gridBlocks
            }), e._v(" "), n("div", {
                ref: "content",
                class: e.$style.content
            }, [e.content ? [n("h2", {
                class: ["heading-02", e.$style.title]
            }, [e._v("\n          " + e._s(e.content.title) + "\n        ")]), e._v(" "), n("div", {
                ref: "copy",
                class: ["rich-content small", e.$style.copy],
                domProps: {
                    innerHTML: e._s(e.content.copy)
                }
            }), e._v(" "), e.content.cta && e.content.book ? n("div", {
                class: e.$style.bookCta
            }, [n("Icon", {
                class: e.$style.book,
                attrs: {
                    name: "book"
                }
            }), e._v(" "), n("div", {
                class: e.$style.bookContent
            }, [n("p", {
                class: ["copy-02", e.$style.bookCtaText]
            }, [e._v("\n              " + e._s(e.content.cta.text) + "\n            ")]), e._v(" "), n("PrimaryButton", {
                attrs: {
                    small: !0
                },
                on: {
                    click: e.onReadBookClick
                }
            }, [e._v("\n              " + e._s(e.content.cta.label) + "\n            ")])], 1)], 1) : e._e()] : e._e()], 2), e._v(" "), n("button", {
                class: e.$style.closeButton,
                on: {
                    click: function(t) {
                        return t.preventDefault(),
                        e.onCloseClick(t)
                    }
                }
            }, [n("Icon", {
                attrs: {
                    name: "arrow-left"
                }
            })], 1)])])
        }, [], !1, function(e) {
            this.$style = na.default.locals || na.default
        }, null, null).exports
          , ra = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            O()(t, [{
                key: "setupTransitionInTimeline",
                value: function(e, t, n) {
                    e.add(As(t.$el), 1)
                }
            }, {
                key: "setupTransitionOutTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupLoopingAnimationTimeline",
                value: function(e, t, n) {}
            }]),
            t
        }(I.AbstractTransitionController)
          , sa = {
            name: "BookOverlay",
            props: {
                content: me(l.a.shape({
                    title: l.a.string,
                    credits: l.a.string,
                    copy: l.a.string,
                    notes: l.a.string
                }))
            },
            components: {
                CloseButton: _n
            },
            extends: I.AbstractTransitionComponent,
            watch: {
                content: function() {
                    null !== this.content && this.transitionIn(!0)
                }
            },
            mounted: function() {
                this.scroll = new se,
                this.scroll.init(this.$refs.scroll, {
                    alwaysShowTracks: !0
                })
            },
            methods: {
                handleAllComponentsReady: function() {
                    this.transitionController = new ra(this),
                    this.isReady()
                },
                onCloseClick: function() {
                    var e = Ce()(we.a.mark(function e() {
                        return we.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.transitionOut(!0);
                                case 2:
                                    this.$emit("close");
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
            }
        }
          , aa = n(251);
        var oa = Object(d.a)(sa, function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                class: [e.$style.bookOverlay]
            }, [n("div", {
                class: e.$style.sketchPad
            }, [n("div", {
                class: e.$style.content
            }, [n("span", {
                class: [e.$style.frame, e.$style.top]
            }), e._v(" "), n("span", {
                class: [e.$style.frame, e.$style.bottom]
            }), e._v(" "), n("div", {
                ref: "scroll",
                class: e.$style.scroll
            }, [n("div", [e.content ? [n("h2", {
                class: ["heading-02", e.$style.title]
            }, [e._v("\n              " + e._s(e.content.title) + "\n            ")]), e._v(" "), n("p", {
                class: ["copy-02", e.$style.credits],
                domProps: {
                    innerHTML: e._s(e.content.credits)
                }
            }), e._v(" "), n("p", {
                class: ["rich-content small"],
                domProps: {
                    innerHTML: e._s(e.content.copy)
                }
            }), e._v(" "), e.content.notes ? n("p", {
                class: ["rich-content small", e.$style.notes],
                domProps: {
                    innerHTML: e._s(e.content.notes)
                }
            }) : e._e()] : e._e()], 2)]), e._v(" "), n("CloseButton", {
                class: e.$style.closeButton,
                nativeOn: {
                    click: function(t) {
                        return t.preventDefault(),
                        e.onCloseClick(t)
                    }
                }
            })], 1)])])
        }, [], !1, function(e) {
            this.$style = aa.default.locals || aa.default
        }, null, null).exports
          , la = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            O()(t, [{
                key: "setupTransitionInTimeline",
                value: function(e, t, n) {
                    var i = t.$refs.icon;
                    e.fromTo(i.$el, 1.2, {
                        autoAlpha: 0,
                        scale: 1.2
                    }, {
                        autoAlpha: 1,
                        scale: 1,
                        ease: W.Expo.easeOut,
                        clearProps: "opacity,visibility"
                    })
                }
            }, {
                key: "setupTransitionOutTimeline",
                value: function(e, t, n) {
                    var i = t.$refs.icon;
                    e.to(i.$el, .5, {
                        autoAlpha: 0,
                        scale: 1.2,
                        ease: W.Expo.easeOut
                    })
                }
            }, {
                key: "setupLoopingAnimationTimeline",
                value: function(e, t, n) {}
            }]),
            t
        }(I.AbstractTransitionController)
          , ha = {
            name: "NavigationHint",
            extends: I.AbstractTransitionComponent,
            props: {
                isVisible: l.a.bool
            },
            computed: {
                isDesktop: function() {
                    return !Ze.a.tablet && !Ze.a.mobile
                }
            },
            watch: {
                isVisible: function(e) {
                    return e ? this.transitionIn() : this.transitionOut()
                }
            },
            methods: {
                handleAllComponentsReady: function() {
                    this.transitionController = new la(this),
                    this.isReady()
                }
            }
        }
          , ua = n(252);
        var ca = {
            name: "WebglContainer",
            components: {
                WalkthroughNavigation: Js,
                HotspotOverlay: ia,
                BookOverlay: oa,
                NavigationHint: Object(d.a)(ha, function() {
                    var e = this.$createElement
                      , t = this._self._c || e;
                    return t("div", {
                        class: [this.$style.navigationHint]
                    }, [t("Icon", {
                        ref: "icon",
                        class: this.$style.icon,
                        attrs: {
                            name: "rotate"
                        }
                    })], 1)
                }, [], !1, function(e) {
                    this.$style = ua.default.locals || ua.default
                }, null, null).exports
            },
            extends: I.AbstractTransitionComponent,
            data: function() {
                return {
                    isLoading: !1,
                    currentWorldId: ti.DOME,
                    currentOverlay: null,
                    currentBookContent: null,
                    isMapOpen: !1,
                    isHintVisible: !1
                }
            },
            computed: S()({}, Object(C.d)({
                isWebglVisible: function(e) {
                    return e.app.webglVisible
                }
            }), {
                isWorldBlurred: function() {
                    return null !== this.currentOverlay || null !== this.currentBookContent
                }
            }),
            watch: {
                isWorldBlurred: function() {
                    this.$webgl.setWorldBlurred(this.isWorldBlurred)
                },
                isLoading: function() {
                    this.onCameraMoved({
                        data: {
                            hotspots: []
                        }
                    })
                },
                isWebglVisible: function(e) {
                    var t = this;
                    e ? (this.$webgl.init(),
                    this.transitionIn(!0).then(function() {
                        t.isHintVisible = !0
                    })) : this.transitionOut(!0)
                }
            },
            mounted: function() {
                var e = this.$route.name === this.RouteNames.WEBGL;
                this.$webgl.setup(this.$el, e),
                this.$webgl.addListener(_s.types.ON_CAMERA_MOVED, this.onCameraMoved),
                this.$emit("webglReady")
            },
            beforeDestroy: function() {
                this.$webgl.destruct()
            },
            methods: {
                handleAllComponentsReady: function() {
                    var e = this;
                    this.transitionController = new Gs(this),
                    this.transitionController.addEventListener(I.TransitionEvent.TRANSITION_IN_START, function() {
                        e.$webgl.play(),
                        e.handleResize()
                    }),
                    this.transitionController.addEventListener(I.TransitionEvent.TRANSITION_OUT_START, function() {
                        return e.$webgl.pause()
                    }),
                    this.isReady()
                },
                onCameraMoved: function(e) {
                    var t = e.data
                      , n = Ne()(t.hotspots, 1)[0];
                    if (this.isHintVisible && (this.isHintVisible = !1),
                    n && n.visible && !this.isLoading) {
                        this.currentHotspotId = n.name;
                        var i = window
                          , r = i.innerWidth
                          , s = i.innerHeight;
                        W.TweenLite.set(this.$refs.hotspot.$el, {
                            x: r * n.screenPosition.x,
                            y: s * n.screenPosition.y,
                            clearProps: "visibility,opacity"
                        })
                    } else
                        W.TweenLite.set(this.$refs.hotspot.$el, {
                            visibility: "hidden",
                            opacity: 0
                        })
                },
                onMapOpenChange: function(e) {
                    this.isMapOpen = e
                },
                onWorldClick: function() {
                    var e = Ce()(we.a.mark(function e(t) {
                        return we.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.currentWorldId = t,
                                    this.isLoading = !0,
                                    e.next = 4,
                                    this.$webgl.gotoWorld(t);
                                case 4:
                                    this.isLoading = !1;
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                onModelClick: function(e) {
                    this.currentOverlay = Xs.find(function(t) {
                        return t.model === e
                    })
                },
                onHotspotClick: function() {
                    var e = this;
                    this.currentOverlay = Xs.find(function(t) {
                        return t.model === e.currentHotspotId
                    })
                },
                onHotspotClose: function() {
                    this.currentOverlay = null
                },
                onOpenBookClick: function(e) {
                    this.currentBookContent = e
                },
                onBookClose: function() {
                    this.currentBookContent = null
                },
                handleResize: function() {
                    var e = window
                      , t = e.innerWidth
                      , n = e.innerHeight
                      , i = this.$refs.overlay.$el
                      , r = i.offsetWidth
                      , s = i.offsetHeight;
                    r < t && this.$webgl.setModelScreenShiftX(r / t),
                    s < n && this.$webgl.setModelScreenShiftY(-.25 - s / n)
                }
            }
        }
          , va = n(253);
        var da = Object(d.a)(ca, function() {
            var e, t, n, i = this, r = i.$createElement, s = i._self._c || r;
            return s("div", {
                class: [i.$style.webglContainer, (e = {},
                e[i.$style.hasOverlay] = null !== i.currentOverlay || null !== i.currentBookContent,
                e)]
            }, [s("WalkthroughNavigation", {
                attrs: {
                    "current-world-id": i.currentWorldId,
                    "is-visible": null === i.currentOverlay && null === i.currentBookContent
                },
                on: {
                    gotoWorld: i.onWorldClick,
                    gotoModel: i.onModelClick,
                    mapOpenChange: i.onMapOpenChange,
                    close: function(e) {
                        return i.$emit("close")
                    }
                }
            }), i._v(" "), s("Icon", {
                ref: "hotspot",
                class: [i.$style.hotspot, (t = {},
                t[i.$style.isBlurred] = i.isMapOpen,
                t)],
                attrs: {
                    name: "info-hotspot"
                },
                nativeOn: {
                    click: function(e) {
                        return i.onHotspotClick(e)
                    }
                }
            }), i._v(" "), s("span", {
                class: [i.$style.loading, (n = {},
                n[i.$style.isActive] = i.isLoading,
                n)]
            }), i._v(" "), s("NavigationHint", {
                ref: "navigationHint",
                attrs: {
                    "is-visible": null === i.currentOverlay && null === i.currentBookContent && i.isHintVisible && !i.isMapOpen
                }
            }), i._v(" "), s("HotspotOverlay", {
                ref: "overlay",
                attrs: {
                    data: i.currentOverlay
                },
                on: {
                    openBook: i.onOpenBookClick,
                    close: i.onHotspotClose
                }
            }), i._v(" "), s("BookOverlay", {
                attrs: {
                    content: i.currentBookContent
                },
                on: {
                    close: i.onBookClose
                }
            })], 1)
        }, [], !1, function(e) {
            this.$style = va.default.locals || va.default
        }, null, null).exports
          , fa = function(e) {
            function t() {
                return L()(this, t),
                F()(this, D()(t).apply(this, arguments))
            }
            return z()(t, e),
            O()(t, [{
                key: "gotoSubPage",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    return W.TweenLite.set(this.parentController.$el, {
                        perspective: "1200px"
                    }),
                    W.TweenLite.set(this.parentController.$refs.cube, {
                        transformStyle: "preserve-3d"
                    }),
                    new Promise(function(i) {
                        var r = new W.TimelineMax({
                            onComplete: function() {
                                return i()
                            }
                        });
                        r.addLabel("start", t),
                        r.to(e.parentController.$refs.cube, n / 2, {
                            z: -window.innerWidth / 2
                        }, "start"),
                        r.to(e.parentController.$refs.cube, n, {
                            xPercent: -50,
                            rotationY: -90
                        }, "start")
                    }
                    )
                }
            }, {
                key: "gotoHomePage",
                value: function() {
                    var e = this
                      , t = Ne()(this.parentController.$refs.routerView.$el.children, 2)
                      , n = (t[0],
                    t[1]);
                    return W.TweenLite.set(this.parentController.$el, {
                        perspective: "1200px",
                        xPercent: 0
                    }),
                    W.TweenLite.set(this.parentController.$refs.cube, {
                        transformStyle: "preserve-3d",
                        z: -window.innerWidth / 2,
                        xPercent: -50,
                        rotationY: -90
                    }),
                    W.TweenLite.set(n, {
                        clearProps: "xPercent"
                    }),
                    new Promise(function(t) {
                        var n = new W.TimelineMax({
                            onComplete: function() {
                                return t()
                            }
                        });
                        n.to(e.parentController.$refs.cube, 1, {
                            xPercent: 0,
                            rotationY: 0
                        }, 0),
                        n.to(e.parentController.$refs.cube, .5, {
                            z: 0
                        }, "-=".concat(.5))
                    }
                    )
                }
            }, {
                key: "setupTransitionInTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupTransitionOutTimeline",
                value: function(e, t, n) {}
            }, {
                key: "setupLoopingAnimationTimeline",
                value: function(e, t, n) {}
            }]),
            t
        }(I.AbstractTransitionController)
          , _a = {
            name: "App",
            components: {
                SiteHeader: Fs,
                MainNavigation: Hs,
                ScrollingGridBlocks: An,
                WebglContainer: da,
                SitePreloader: Ss
            },
            extends: I.AbstractTransitionComponent,
            data: function() {
                return {
                    isNavigationOpen: !1,
                    isMounted: !1,
                    isWebglReady: !1,
                    isAllComponentsReady: !1,
                    isAllAssetsLoaded: !1,
                    hasPreloader: !0
                }
            },
            computed: S()({}, Object(C.d)({
                deviceState: function(e) {
                    return e.app.deviceState
                }
            }), {
                canShowRouterView: function() {
                    return this.isAllAssetsLoaded && this.isMounted && this.isWebglReady && this.isAllComponentsReady
                }
            }),
            watch: {
                $route: function() {
                    vt(this.$route),
                    [this.RouteNames.HOME, this.RouteNames.WEBGL].includes(this.$route.name) || this.currentRoute === this.$route.name ? [this.RouteNames.JOURNALIST, this.RouteNames.VIDEO, this.RouteNames.LEGAL].includes(this.currentRoute) && this.$route.name === this.RouteNames.HOME && (W.TweenLite.set(this.$el, {
                        clearProps: "perspective,x,xPercent"
                    }),
                    W.TweenLite.set(this.$refs.cube, {
                        clearProps: "transformStyle,z,xPercent,rotationY"
                    })) : this.gotoSubPage(0),
                    this.currentRoute = this.$route.name
                },
                canShowRouterView: function() {
                    var e = this;
                    [this.RouteNames.HOME, this.RouteNames.WEBGL].includes(this.$route.name) || this.$nextTick(function() {
                        return e.gotoSubPage(1)
                    }),
                    this.$webgl.pause(),
                    this.$route.name === this.RouteNames.WEBGL && (this.$webgl.init(),
                    this.$refs.webgl.transitionIn(!0))
                }
            },
            created: function() {
                this.currentRoute = this.$route.name,
                this.$deviceStateTracker.addEventListener(Xn.DeviceStateEvent.STATE_UPDATE, this.handleDeviceStateUpdate),
                this.setDeviceState(this.$deviceStateTracker.currentState)
            },
            mounted: function() {
                r.a.prototype.$scroll = new se,
                this.$scroll.addEventListener(re.types.UPDATE, this.handleScroll),
                window.addEventListener("resize", Xe()(this.handleResize, 150)),
                this.handleResize(),
                this.$eventBus.$on(Gt.PAGE_CHANGE, this.onPageChange),
                this.isMounted = !0,
                vt(this.$route)
            },
            beforeDestroy: function() {
                r.a.prototype.$scroll && (r.a.prototype.$scroll.dispose(),
                r.a.prototype.$scroll = null),
                this.$eventBus.$off(Gt.PAGE_CHANGE, this.onPageChange)
            },
            methods: S()({}, Object(C.c)({
                setDeviceState: he
            }), {
                onAssetLoadComplete: function() {
                    var e = Ce()(we.a.mark(function e() {
                        return we.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.isAllAssetsLoaded = !0,
                                    e.next = 3,
                                    this.$refs.preloader.transitionOut(!0);
                                case 3:
                                    this.hasPreloader = !1;
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                handleAllComponentsReady: function() {
                    this.transitionController = new fa(this),
                    this.isAllComponentsReady = !0,
                    this.isReady()
                },
                toggleNavigation: function() {
                    this.isNavigationOpen = !this.isNavigationOpen
                },
                handleScroll: function() {
                    document.documentElement.style.setProperty("--scroll-position", "".concat(this.$scroll.y, "px"))
                },
                handleResize: function() {
                    var e = .01 * window.innerHeight;
                    document.documentElement.style.setProperty("--vh", "".concat(e, "px")),
                    this.$scroll && this.$scroll.update()
                },
                handleWebglReady: function() {
                    this.isWebglReady = !0,
                    this.$refs.preloader.loadApplication()
                },
                handleDeviceStateUpdate: function(e) {
                    this.setDeviceState(e.data.state)
                },
                onLeave: function(e, t) {
                    I.FlowManager.transitionOut.then(function() {
                        return I.FlowManager.done()
                    }).then(t)
                },
                gotoSubPage: function() {
                    var e = Ce()(we.a.mark(function e() {
                        var t, n = arguments;
                        return we.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = n.length > 0 && void 0 !== n[0] ? n[0] : 0,
                                    e.next = 3,
                                    this.transitionController.gotoSubPage(t, this.$route.name === this.RouteNames.TEST ? .01 : 1);
                                case 3:
                                    this.resetPageTransforms();
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                onPageChange: function() {
                    var e = Ce()(we.a.mark(function e(t) {
                        return we.a.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.transitionController.gotoHomePage();
                                case 2:
                                    this.$router.push({
                                        name: t
                                    }),
                                    this.resetPageTransforms(!0);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }, e, this)
                    }));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                resetPageTransforms: function() {
                    arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? (W.TweenLite.set(this.$el, {
                        clearProps: "perspective"
                    }),
                    W.TweenLite.set(this.$refs.cube, {
                        clearProps: "transformStyle,z,xPercent,rotationY"
                    })) : (W.TweenLite.set(this.$el, {
                        xPercent: -100,
                        clearProps: "perspective"
                    }),
                    W.TweenLite.set(this.$refs.cube, {
                        clearProps: "transformStyle,z,rotationY"
                    })),
                    this.$eventBus.$emit(Gt.PAGE_TRANSITION_COMPLETE)
                }
            })
        }
          , pa = n(254);
        var ma = Object(d.a)(_a, function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                class: [e.$style.app]
            }, [e.hasPreloader ? n("SitePreloader", {
                ref: "preloader",
                on: {
                    complete: e.onAssetLoadComplete
                }
            }) : e._e(), e._v(" "), n("WebglContainer", {
                ref: "webgl",
                on: {
                    webglReady: e.handleWebglReady
                }
            }), e._v(" "), e.isAllAssetsLoaded ? n("div", {
                ref: "cube",
                class: e.$style.cube
            }, [e.canShowRouterView ? n("SiteHeader", {
                on: {
                    toggleNavigation: e.toggleNavigation
                }
            }) : e._e(), e._v(" "), e.canShowRouterView ? n("SiteHeader", {
                attrs: {
                    inverted: !0
                },
                on: {
                    toggleNavigation: e.toggleNavigation
                }
            }) : e._e(), e._v(" "), n("MainNavigation", {
                attrs: {
                    "is-open": e.isNavigationOpen
                },
                on: {
                    close: e.toggleNavigation
                }
            }), e._v(" "), e.canShowRouterView ? n("ScrollingGridBlocks", {
                attrs: {
                    paused: e.$route.name !== e.RouteNames.HOME
                }
            }) : e._e(), e._v(" "), n("main", [n("transition", {
                on: {
                    leave: e.onLeave
                }
            }, [e.canShowRouterView ? n("router-view", {
                ref: "routerView"
            }) : e._e()], 1)], 1)], 1) : e._e()], 1)
        }, [], !1, function(e) {
            this.$style = pa.default.locals || pa.default
        }, null, null).exports
          , ga = {};
        Object.keys(ga).forEach(function(e) {
            return r.a.filter(e, ga[e])
        }),
        Object.keys(h).forEach(function(e) {
            return r.a.directive(e, h[e])
        }),
        Object.keys(f).forEach(function(e) {
            return r.a.component(e, f[e])
        }),
        Rs(),
        window.webpackPublicPath && (n.p = window.webpackPublicPath);
        var ya = On()
          , Ea = Un()
          , Ta = M();
        Ta.localeEnabled && (r.a.use(a.a, {
            store: Ea,
            router: Ta.localeRoutingEnabled ? ya : null,
            config: Ta.config,
            proxy: Kn
        }),
        r.a.initI18nManager()),
        Object(o.sync)(Ea, ya);
        var Ra = new r.a({
            router: ya,
            store: Ea,
            render: function(e) {
                return e(ma)
            }
        });
        ii(Ea).then(function() {
            Ra.$mount("#app")
        })
    }
});
