(function($){

var color_option = [
{name: "header-background-color", selector: ".gdlr-header-wrapper, .gdlr-navigation-outer-wrapper{ background-color: #gdlr#; }"},
{name: "main-navigation-text", selector: ".gdlr-main-menu > li > a{ color: #gdlr#; }"},
{name: "main-navigation-text-hover", selector: ".gdlr-main-menu > li:hover > a, .gdlr-main-menu > li.current-menu-item > a, .gdlr-main-menu > li.current-menu-ancestor > a{ color: #gdlr#; opacity: 1; filter: alpha(opacity=100); } .gdlr-navigation-gimmick{ background: #gdlr#; height: 2px; }"},
{name: "main-navigation-border", selector: ".gdlr-navigation-outer-wrapper .gdlr-navigation-wrapper{ border-color: #gdlr#; }.gdlr-navigation-wrapper .gdlr-main-menu > li > a:before{ color: #gdlr#; }"},
{name: "sub-menu-top-border", selector: ".gdlr-main-menu > .gdlr-normal-menu .sub-menu, .gdlr-main-menu > .gdlr-mega-menu .sf-mega{ border-top-color: #gdlr#; }"},
{name: "sub-menu-background", selector: ".gdlr-main-menu > .gdlr-normal-menu li , .gdlr-main-menu > .gdlr-mega-menu .sf-mega{ background-color: #gdlr#; }"},
{name: "sub-menu-text", selector: ".gdlr-main-menu > li > .sub-menu a, .gdlr-main-menu > li > .sf-mega a{ color: #gdlr#; }"},
{name: "sub-menu-text-hover", selector: ".gdlr-main-menu > li > .sub-menu a:hover, .gdlr-main-menu > li > .sub-menu .current-menu-item > a, .gdlr-main-menu > li > .sub-menu .current-menu-ancestor > a, .gdlr-main-menu > li > .sf-mega a:hover, .gdlr-main-menu > li > .sf-mega .current-menu-item > a, .gdlr-main-menu > li > .sf-mega .current-menu-ancestor > a{ color: #gdlr#; } .gdlr-main-menu .gdlr-normal-menu li > a.sf-with-ul:after { border-left-color: #gdlr#; } "},
{name: "sub-mega-menu-text-hover", selector: ".gdlr-main-menu .sf-mega-section-inner > ul > li > a:hover, .gdlr-main-menu .sf-mega-section-inner > ul > li.current-menu-item > a { background-color: #gdlr#; } "},
{name: "sub-menu-divider", selector: ".gdlr-main-menu > li > .sub-menu *, .gdlr-main-menu > li > .sf-mega *{ border-color: #gdlr#; }"},
{name: "sub-menu-mega-title", selector: ".gdlr-main-menu > li > .sf-mega .sf-mega-section-inner > a { color: #gdlr#; }"},
{name: "sub-menu-mega-title-hover", selector: ".gdlr-main-menu > li > .sf-mega .sf-mega-section-inner > a:hover, .gdlr-main-menu > li > .sf-mega .sf-mega-section-inner.current-menu-item > a, .gdlr-main-menu > li > .sf-mega .sf-mega-section-inner.current-menu-ancestor > a { color: #gdlr#; }"},
{name: "mobile-menu-background", selector: "#gdlr-responsive-navigation.dl-menuwrapper button { background-color: #gdlr#; }"},
{name: "mobile-menu-background-hover", selector: "#gdlr-responsive-navigation.dl-menuwrapper button:hover, #gdlr-responsive-navigation.dl-menuwrapper button.dl-active, #gdlr-responsive-navigation.dl-menuwrapper ul{ background-color: #gdlr#; }"},
{name: "menu-search-button-icon", selector: ".top-search-button i{ color: #gdlr#; }"},
{name: "menu-search-background", selector: ".gdlr-nav-search-form{ background-color: #gdlr#; }"},
{name: "menu-search-text", selector: ".gdlr-nav-search-form i, .gdlr-nav-search-form input[type=\"text\"]{ color: #gdlr#; }"},
{name: "body-background", selector: ".body-wrapper{ background-color: #gdlr#; }"},
{name: "container-backgrond", selector: ".gdlr-item.gdlr-blog-full, .gdlr-sidebar .widget.gdlr-item, .blog-item-filter, .gdlr-item.gdlr-blog-medium, .gdlr-item.gdlr-blog-grid, .gdlr-with-background, .gdlr-item.gdlr-author-item, .gdlr-pagination{ background-color: #gdlr#; }"},
{name: "container-bottom-border", selector: ".body-wrapper .gdlr-item.gdlr-blog-full, .gdlr-sidebar .widget.gdlr-item, .body-wrapper .gdlr-item.gdlr-blog-medium, .body-wrapper .gdlr-item.gdlr-blog-grid, .body-wrapper .gdlr-with-background, .body-wrapper .blog-item-filter, .body-wrapper .gdlr-author-item, .body-wrapper .gdlr-pagination{ border-bottom-color: #gdlr#; }"},
{name: "page-title-color", selector: ".gdlr-page-title, .gdlr-page-title-gimmick{ color: #gdlr#; }"},
{name: "page-caption-color", selector: ".gdlr-page-caption{ color: #gdlr#; }"},
{name: "heading-color", selector: "h1, h2, h3, h4, h5, h6, .gdlr-title, .gdlr-title a{ color: #gdlr#; } .post-author-title, .comment-reply-title, .gdlr-comments-area .comments-title, .related-post-title{ border-color: #gdlr#; } .single-post .gdlr-single-nav, .single-post .gdlr-single-nav a{ color: #gdlr#; border-color: #gdlr#; }.gdlr-title-background{ background-color: #gdlr#; border-color: #gdlr#; } "},
{name: "item-title-color", selector: ".gdlr-item-title-wrapper .gdlr-item-title{ color: #gdlr#; border-color: #gdlr#; }"},
{name: "item-title-line", selector: ".gdlr-item-title-divider{ border-color: #gdlr#; }"},
{name: "item-title-caption-color", selector: ".gdlr-item-title-wrapper .gdlr-item-caption{ color: #gdlr#; }"},
{name: "body-text-color", selector: "body{ color: #gdlr#; }"},
{name: "body-link-color", selector: "a{ color: #gdlr#; }"},
{name: "body-link-hover-color", selector: "a:hover{ color: #gdlr#; }"},
{name: "border-color", selector: "body *{ border-color: #gdlr#; }"},
{name: "404-box-background", selector: ".page-not-found-block{ background-color: #gdlr#; }"},
{name: "404-box-text", selector: ".page-not-found-block{ color: #gdlr#; }"},
{name: "404-search-background", selector: ".page-not-found-search .gdl-search-form input[type=\"text\"]{ background-color: #gdlr#; }"},
{name: "404-search-text", selector: ".page-not-found-search .gdl-search-form input[type=\"text\"]{ color: #gdlr#; }"},
{name: "sidebar-title-color", selector: ".gdlr-sidebar .gdlr-widget-title{ color: #gdlr#; border-color: #gdlr#; }"},
{name: "sidebar-border-color", selector: ".gdlr-sidebar *{ border-color: #gdlr#; }"},
{name: "sidebar-list-circle", selector: ".gdlr-sidebar ul li:before { border-color: #gdlr#; }"},
{name: "search-form-background", selector: ".gdl-search-form input{ background-color: #gdlr#; }"},
{name: "search-form-text-color", selector: ".gdl-search-form input{ color: #gdlr#; }"},
{name: "search-form-border-color", selector: ".gdl-search-form input{ border-color: #gdlr#; }"},
{name: "tag-cloud-background", selector: ".tagcloud a{ background-color: #gdlr#; }"},
{name: "tag-cloud-text", selector: ".tagcloud a, .tagcloud a:hover{ color: #gdlr#; }"},
{name: "instagram-icon", selector: ".gdlr-sidebar .gdlr-nav-container .icon-twitter, .gdlr-sidebar .icon-instagram, .gdlr-sidebar .gdlr-instagram-list-link a{ color: #gdlr#; }"},
{name: "instagram-nav-icon", selector: ".gdlr-sidebar .gdlr-nav-container .gdlr-flex-prev, .gdlr-sidebar .gdlr-nav-container .gdlr-flex-next{ border-color: #gdlr#; color: #gdlr#; }"},
{name: "accordion-text", selector: ".gdlr-accordion-item.style-1 .pre-active .accordion-title{ color: #gdlr#; }"},
{name: "accordion-title-active-color", selector: ".gdlr-accordion-item.style-1 .accordion-title{ color: #gdlr#; }"},
{name: "accordion-icon-background", selector: ".gdlr-accordion-item.style-1 .accordion-title i{ background-color: #gdlr#; }"},
{name: "accordion-icon-color", selector: ".gdlr-accordion-item.style-1 .accordion-title i{ color: #gdlr#; }"},
{name: "accordion-icon-active-background", selector: ".gdlr-accordion-item.style-1 .accordion-title i.icon-minus{ background-color: #gdlr#; }"},
{name: "accordion-icon-active-color", selector: ".gdlr-accordion-item.style-1 .accordion-title i.icon-minus{ color: #gdlr#; }"},
{name: "banner-icon-color", selector: ".gdlr-banner-item-wrapper .flex-direction-nav .flex-prev, .gdlr-banner-item-wrapper .flex-direction-nav .flex-next{ color: #gdlr#; }"},
{name: "box-with-icon-background", selector: ".gdlr-box-with-icon-item{ background-color: #gdlr#; }"},
{name: "box-with-icon-title", selector: ".gdlr-box-with-icon-item > i, .gdlr-box-with-icon-item .box-with-icon-title{ color: #gdlr#; }"},
{name: "box-with-icon-text", selector: ".gdlr-box-with-icon-item{ color: #gdlr#; }"},
{name: "button-text-color", selector: ".gdlr-button, .gdlr-button:hover, .gdlr-top-menu > .gdlr-mega-menu .sf-mega a.gdlr-button{ color: #gdlr#; }"},
{name: "button-background-color", selector: ".gdlr-button{ background-color: #gdlr#; }"},
{name: "button-with-border-color", selector: ".gdlr-button.with-border, input[type=\"button\"], input[type=\"submit\"]{ color: #gdlr#; }"},
{name: "button-border-color", selector: ".gdlr-button.with-border, input[type=\"button\"], input[type=\"submit\"]{ border: 2px solid #gdlr#; }"},
{name: "button-inner-border-color", selector: ".gdlr-button.with-border, input[type=\"button\"], input[type=\"submit\"]{ outline: 1px solid #gdlr#; }"},
{name: "column-service-title-color", selector: ".column-service-title{ color: #gdlr#; }"},
{name: "column-service-content-color", selector: ".column-service-content{ color: #gdlr#; }"},
{name: "column-service-icon-color", selector: ".column-service-icon i{ color: #gdlr#; }"},
{name: "list-with-icon-title-color", selector: ".list-with-icon .list-with-icon-title{ color: #gdlr#; }"},
{name: "pie-chart-title-color", selector: ".gdlr-pie-chart-item .pie-chart-title{ color: #gdlr#; }"},
{name: "price-background", selector: ".gdlr-price-inner-item{ background-color: #gdlr#; }"},
{name: "price-title-background", selector: ".gdlr-price-item .price-title-wrapper{ background-color: #gdlr#; }"},
{name: "price-title-text", selector: ".gdlr-price-item .price-title{ color: #gdlr#; }"},
{name: "price-tag-background", selector: ".gdlr-price-item .price-tag{ background-color: #gdlr#; }"},
{name: "active-price-tag-background", selector: ".gdlr-price-item .best-price .price-tag{ background-color: #gdlr#; }"},
{name: "price-tag-text", selector: ".gdlr-price-item .price-tag{ color: #gdlr#; }"},
{name: "process-icon-background", selector: ".gdlr-process-tab .gdlr-process-icon{ background-color: #gdlr#; }"},
{name: "process-icon-border", selector: ".gdlr-process-tab .gdlr-process-icon{ border-color: #gdlr#; }"},
{name: "process-icon-color", selector: ".gdlr-process-tab .gdlr-process-icon i{ color: #gdlr#; }"},
{name: "process-line-color", selector: ".gdlr-process-tab .process-line .process-line-divider{ border-color: #gdlr#; } .gdlr-process-tab .process-line .icon-chevron-down, .gdlr-process-tab .process-line .icon-chevron-right{ color: #gdlr#; }"},
{name: "process-title-color", selector: ".gdlr-process-wrapper .gdlr-process-tab .gdlr-process-title{ color: #gdlr#; }"},
{name: "skill-text-color", selector: ".gdlr-skill-item-wrapper{ color: #gdlr#; }"},
{name: "stunning-text-title-color", selector: ".stunning-text-title{ color: #gdlr#; }"},
{name: "stunning-text-caption-color", selector: ".stunning-text-caption{ color: #gdlr#; }"},
{name: "stunning-text-background", selector: ".gdlr-stunning-text-item.with-padding{ background-color: #gdlr#; }"},
{name: "stunning-text-border", selector: ".gdlr-stunning-text-item.with-border{ border-color: #gdlr#; }"},
{name: "tab-title-background", selector: ".tab-title-wrapper .tab-title{ background-color: #gdlr#; }"},
{name: "tab-title-color", selector: ".tab-title-wrapper .tab-title{ color: #gdlr#; }"},
{name: "tab-title-content", selector: ".tab-title-wrapper .tab-title.active, .tab-content-wrapper{ background-color: #gdlr#; }"},
{name: "table-head-background", selector: "table tr th{ background-color: #gdlr#; }"},
{name: "table-head-text", selector: "table tr th{ color: #gdlr#; }"},
{name: "table-style2-odd-background", selector: "table.style-2 tr:nth-child(odd){ background-color: #gdlr#; }"},
{name: "table-style2-odd-text", selector: "table.style-2 tr:nth-child(odd){ color: #gdlr#; }"},
{name: "table-style2-even-background", selector: "table.style-2 tr:nth-child(even){ background-color: #gdlr#; }"},
{name: "table-style2-even-text", selector: "table.style-2 tr:nth-child(even){ color: #gdlr#; }"},
{name: "blog-title-color", selector: ".gdlr-blog-title, .gdlr-blog-title a{ color: #gdlr#; }"},
{name: "blog-title-hover-color", selector: ".gdlr-blog-title a:hover{ color: #gdlr#; }"},
{name: "blog-info-color", selector: ".gdlr-blog-info, .gdlr-blog-info a, .gdlr-blog-info i{ color: #gdlr#; }"},
{name: "blog-sticky-background", selector: ".gdlr-blog-thumbnail .gdlr-sticky-banner{ background-color: #gdlr#; }"},
{name: "blog-sticky-text", selector: ".gdlr-blog-thumbnail .gdlr-sticky-banner, .gdlr-blog-thumbnail .gdlr-sticky-banner i{ color: #gdlr#; }"},
{name: "blog-aside-background", selector: ".format-aside .gdlr-blog-content{ background-color: #gdlr#; }"},
{name: "blog-aside-text", selector: ".format-aside .gdlr-blog-content{ color: #gdlr#; }"},
{name: "blog-quote-text-color", selector: ".format-quote .gdlr-top-quote blockquote{ color: #gdlr#; }"},
{name: "blog-quote-author-color", selector: ".format-quote .gdlr-quote-author{ color: #gdlr#; }"},
{name: "blog-carousel-navigation-background", selector: ".gdlr-outer-nav.gdlr-nav-container span{ background-color: #gdlr#; }"},
{name: "blog-carousel-navigation-icon", selector: ".gdlr-outer-nav.gdlr-nav-container span i{ color: #gdlr#; }"},
{name: "blog-carousel-navigation-background-hover", selector: ".gdlr-outer-nav.gdlr-nav-container span:hover{ background-color: #gdlr#; }"},
{name: "blog-carousel-navigation-icon-hover", selector: ".gdlr-outer-nav.gdlr-nav-container span:hover i{ color: #gdlr#; }"},
{name: "blog-full-date-day", selector: ".gdlr-blog-full .blog-date-day{ color: #gdlr#; border-bottom-color: #gdlr#; }"},
{name: "blog-full-date-month", selector: ".gdlr-blog-full .blog-date-month{ color: #gdlr#; }"},
{name: "blog-full-date-year", selector: ".gdlr-blog-full .blog-date-year{ color: #gdlr#; }"},
{name: "blog-full-calendar-icon", selector: ".gdlr-blog-full .blog-date-wrapper .icon-calendar-empty, .format-link .gdlr-link-format-icon{ color: #gdlr#; }"},
{name: "blog-filter-color", selector: ".blog-item-filter, .blog-item-filter a{ color: #gdlr#; }"},
{name: "blog-filter-hover-color", selector: ".blog-item-filter a:hover, .blog-item-filter a.active{ color: #gdlr#; }"},
{name: "pagination-background", selector: ".gdlr-pagination .page-numbers{ background-color: #gdlr#; }"},
{name: "pagination-text-color", selector: ".gdlr-pagination .page-numbers{ color: #gdlr#; }"},
{name: "pagination-background-hover", selector: ".gdlr-pagination .page-numbers:hover, .gdlr-pagination .page-numbers.current{ background-color: #gdlr#; }"},
{name: "pagination-text-color-hover", selector: ".gdlr-pagination .page-numbers:hover, .gdlr-pagination .page-numbers.current{ color: #gdlr#; }"},
{name: "personnel-box-background", selector: ".gdlr-personnel-item .personnel-item-inner{ background-color: #gdlr#; }"},
{name: "round-personnel-hover-background", selector: ".gdlr-personnel-item.round-style .personnel-item{ background-color: #gdlr#; }"},
{name: "personnel-author-text", selector: ".gdlr-personnel-item .personnel-author{ color: #gdlr#; }"},
{name: "personnel-author-border", selector: ".gdlr-personnel-item .personnel-author-image{ border-color: #gdlr#; }"},
{name: "personnel-position-color", selector: ".gdlr-personnel-item .personnel-position{ color: #gdlr#; }"},
{name: "personnel-content-color", selector: ".gdlr-personnel-item .personnel-content{ color: #gdlr#; }"},
{name: "personnel-social-icon-color", selector: ".gdlr-personnel-item .personnel-social i{ color: #gdlr#; }"},
{name: "testimonial-box-background", selector: ".gdlr-testimonial-item .testimonial-item-inner, .gdlr-testimonial-item .testimonial-author-image{ background-color: #gdlr#; }"},
{name: "testimonial-content-color", selector: ".gdlr-testimonial-item .testimonial-content{ color: #gdlr#; }"},
{name: "testimonial-author-text", selector: ".gdlr-testimonial-item .testimonial-author{ color: #gdlr#; }"},
{name: "testimonial-author-position", selector: ".gdlr-testimonial-item .testimonial-position{ color: #gdlr#; }"},
{name: "testimonial-author-image-border", selector: ".gdlr-testimonial-item .testimonial-author-image{ border-color: #gdlr#; }"},
{name: "testimonial-boxed-style-shadow", selector: ".gdlr-testimonial-item.box-style .testimonial-item-inner:after{ border-top-color: #gdlr#; border-left-color: #gdlr#; }"},
{name: "gallery-thumbnail-frame", selector: ".gdlr-gallery-thumbnail .gallery-item{ background-color: #gdlr#; }"},
{name: "gallery-caption-background", selector: ".gdlr-gallery-thumbnail-container .gallery-caption{ background-color: #gdlr#; }"},
{name: "gallery-caption-text", selector: ".gdlr-gallery-thumbnail-container .gallery-caption{ color: #gdlr#; }"},
{name: "slider-bullet-background", selector: ".nivo-controlNav a, .flex-control-paging li a{ background-color: #gdlr#; }"},
{name: "slider-bullet-background-hover", selector: ".nivo-controlNav a:hover, .nivo-controlNav a.active, .flex-control-paging li a:hover, .flex-control-paging li a.flex-active { background-color: #gdlr#; }"},
{name: "slider-bullet-border", selector: ".nivo-controlNav a, .flex-control-paging li a{ border-color: #gdlr# !important; }"},
{name: "slider-navigation-icon", selector: "body .nivo-directionNav a, body .flex-direction-nav a, body .flex-direction-nav a:hover, .ls-flawless .ls-nav-prev, .ls-flawless .ls-nav-next{ color: #gdlr#; }"},
{name: "slider-caption-background", selector: ".gdlr-caption{ background-color: #gdlr#; }"},
{name: "slider-caption-title", selector: ".gdlr-caption-title{ color: #gdlr#; }"},
{name: "slider-caption-text", selector: ".gdlr-caption-text{ color: #gdlr#; }"},
{name: "post-slider-caption-background", selector: ".gdlr-caption-wrapper.post-slider{ background-color: #gdlr#; }"},
{name: "post-slider-caption-title", selector: ".gdlr-caption-wrapper.post-slider .gdlr-caption-title{ color: #gdlr#; }"},
{name: "post-slider-caption-text", selector: ".gdlr-caption-wrapper.post-slider .gdlr-caption-text{ color: #gdlr#; }"},
{name: "slider-outer-nav-background", selector: ".gdlr-item-title-wrapper .gdlr-flex-prev, .gdlr-item-title-wrapper .gdlr-flex-next{ background-color: #gdlr#; }"},
{name: "slider-outer-nav-icon", selector: ".gdlr-item-title-wrapper .gdlr-flex-prev, .gdlr-item-title-wrapper .gdlr-flex-next{ color: #gdlr#; }"},
{name: "input-box-background", selector: "input[type=\"text\"], input[type=\"email\"], input[type=\"password\"], textarea, .gdlr-comments-area .comment-body{ background-color: #gdlr#; }"},
{name: "input-box-text", selector: "input[type=\"text\"], input[type=\"email\"], input[type=\"password\"], textarea{ color: #gdlr#; }input::input-placeholder{ color:#gdlr#; } input::-webkit-input-placeholder{ color:#gdlr#; }input::-moz-placeholder{ color:#gdlr#; } input:-moz-placeholder{ color:#gdlr#; }input:-ms-input-placeholder{ color:#gdlr#; }textarea::input-placeholder{ color:#gdlr#; } textarea::-webkit-input-placeholder{ color:#gdlr#; }textarea::-moz-placeholder{ color:#gdlr#; } textarea:-moz-placeholder{ color:#gdlr#; }textarea:-ms-input-placeholder{ color:#gdlr#; }"},
{name: "footer-background-color", selector: ".footer-wrapper{ background-color: #gdlr#; }"},
{name: "footer-title-color", selector: ".footer-wrapper .gdlr-widget-title, .footer-wrapper .gdlr-widget-title a{ color: #gdlr#; }"},
{name: "footer-text-color", selector: ".footer-wrapper{ color: #gdlr#; }"},
{name: "footer-link-color", selector: ".footer-wrapper a{ color: #gdlr#; }"},
{name: "footer-link-hover-color", selector: ".footer-wrapper a:hover{ color: #gdlr#; }"},
{name: "footer-border-color", selector: ".footer-wrapper *{ border-color: #gdlr#; }"},
{name: "footer-input-box-background", selector: ".footer-wrapper input[type=\"text\"], .footer-wrapper input[type=\"email\"], .footer-wrapper input[type=\"password\"], .footer-wrapper textarea{ background-color: #gdlr#; }"},
{name: "footer-input-box-text", selector: ".footer-wrapper input[type=\"text\"], .footer-wrapper input[type=\"email\"], .footer-wrapper input[type=\"password\"], .footer-wrapper textarea{ color: #gdlr#; }"},
{name: "footer-input-box-border", selector: ".footer-wrapper input[type=\"text\"], .footer-wrapper input[type=\"email\"], .footer-wrapper input[type=\"password\"], .footer-wrapper textarea{ border-color: #gdlr#; }"},
{name: "footer-button-text-color", selector: ".footer-wrapper .gdlr-button, .footer-wrapper .gdlr-button:hover, .footer-wrapper input[type=\"button\"], .footer-wrapper input[type=\"submit\"]{ color: #gdlr#; }"},
{name: "footer-button-border-color", selector: ".footer-wrapper input[type=\"button\"], .footer-wrapper input[type=\"submit\"]{ border-color: #gdlr#; outline-color: #gdlr#; }"},
{name: "footer-tag-cloud-background", selector: ".footer-wrapper .tagcloud a{ background-color: #gdlr#; }"},
{name: "footer-tag-cloud-text", selector: ".footer-wrapper .tagcloud a, .footer-wrapper .tagcloud a:hover{ color: #gdlr#; }"},
{name: "gdlr-copyright-background", selector: ".copyright-wrapper{ background-color: #gdlr#; }"},
{name: "gdlr-copyright-text-color", selector: ".copyright-wrapper{ color: #gdlr#; }"},
{name: "gdlr-copyright-top-border", selector: ".footer-wrapper .copyright-wrapper{ border-color: #gdlr#; }"},
{name: "woo-theme-color", selector: "html .woocommerce span.onsale, html .woocommerce-page span.onsale, html .woocommerce-message,html .woocommerce div.product .woocommerce-tabs ul.tabs li.active, html .woocommerce #content div.product .woocommerce-tabs ul.tabs li.active,html .woocommerce-page div.product .woocommerce-tabs ul.tabs li.active, html .woocommerce-page #content div.product .woocommerce-tabs ul.tabs li.active { background: #gdlr#; }html .woocommerce .star-rating, html .woocommerce-page .star-rating, html .woocommerce .star-rating:before, html .woocommerce-page .star-rating:before, html .woocommerce div.product span.price, html .woocommerce div.product p.price, html .woocommerce #content div.product span.price, html .woocommerce #content div.product p.price, html .woocommerce-page div.product span.price, html .woocommerce-page div.product p.price, html .woocommerce-page #content div.product span.price, html .woocommerce-page #content div.product p.price {color: #gdlr#; }"},
{name: "woo-text-in-element-color", selector: "html .woocommerce-message a.button, html .woocommerce-error a.button, html .woocommerce-info a.button, html .woocommerce-message, html .woocommerce-error, html .woocommerce-info, html .woocommerce span.onsale, html .woocommerce-page span.onsale, html .woocommerce div.product .woocommerce-tabs ul.tabs li.active,html .woocommerce #content div.product .woocommerce-tabs ul.tabs li.active, html .woocommerce-page div.product .woocommerce-tabs ul.tabs li.active, html .woocommerce-page #content div.product .woocommerce-tabs ul.tabs li.active, html .woocommerce nav.woocommerce-pagination ul li span.current, html .woocommerce-page nav.woocommerce-pagination ul li span.current, html .woocommercenav.woocommerce-pagination ul li a:hover, html .woocommerce-page nav.woocommerce-pagination ul li a:hover{ color: #gdlr#; }"},
{name: "woo-notification-background", selector: "html .woocommerce-info{ background: #gdlr#; }"},
{name: "woo-error-background", selector: "html .woocommerce-error{ background: #gdlr#; }"},
{name: "woo-button-background", selector: "html .woocommerce a.button.alt:hover, html .woocommerce button.button.alt:hover, html .woocommerce input.button.alt:hover, html .woocommerce #respond input#submit.alt:hover, html .woocommerce #content input.button.alt:hover, html .woocommerce-page a.button.alt:hover, html .woocommerce-page button.button.alt:hover, html .woocommerce-page input.button.alt:hover, html .woocommerce-page #respond input#submit.alt:hover, html .woocommerce-page #content input.button.alt:hover, html .woocommerce a.button.alt, html .woocommerce button.button.alt, html .woocommerce input.button.alt, html .woocommerce #respond input#submit.alt, html .woocommerce #content input.button.alt, html .woocommerce-page a.button.alt, html .woocommerce-page button.button.alt, html .woocommerce-page input.button.alt, html .woocommerce-page #respond input#submit.alt, html .woocommerce-page #content input.button.alt, html .woocommerce a.button, html .woocommerce button.button, html .woocommerce input.button, html .woocommerce #respond input#submit, html .woocommerce #content input.button, html .woocommerce-page a.button, html .woocommerce-page button.button, html .woocommerce-page input.button, html .woocommerce-page #respond input#submit, html .woocommerce-page #content input.button, html .woocommerce a.button:hover, html .woocommerce button.button:hover, html .woocommerce input.button:hover, html .woocommerce #respond input#submit:hover, html .woocommerce #content input.button:hover, html .woocommerce-page a.button:hover, html .woocommerce-page button.button:hover, html .woocommerce-page input.button:hover, html .woocommerce-page #respond input#submit:hover, html .woocommerce-page #content input.button:hover, html .woocommerce ul.products li.product a.loading, html .woocommerce div.product form.cart .button, html .woocommerce #content div.product form.cart .button, html .woocommerce-page div.product form.cart .button, html .woocommerce-page #content div.product form.cart .button{ background: #gdlr#; }"},
{name: "woo-button-text", selector: "html .woocommerce a.button.alt:hover, html .woocommerce button.button.alt:hover, html .woocommerce input.button.alt:hover, html .woocommerce #respond input#submit.alt:hover, html .woocommerce #content input.button.alt:hover, html .woocommerce-page a.button.alt:hover, html .woocommerce-page button.button.alt:hover, html .woocommerce-page input.button.alt:hover, html .woocommerce-page #respond input#submit.alt:hover, html .woocommerce-page #content input.button.alt:hover, html .woocommerce a.button.alt, html .woocommerce button.button.alt, html .woocommerce input.button.alt, html .woocommerce #respond input#submit.alt, html .woocommerce #content input.button.alt, html .woocommerce-page a.button.alt, html .woocommerce-page button.button.alt, html .woocommerce-page input.button.alt, html .woocommerce-page #respond input#submit.alt, html .woocommerce-page #content input.button.alt, html .woocommerce a.button, html .woocommerce button.button, html .woocommerce input.button, html .woocommerce #respond input#submit, html .woocommerce #content input.button, html .woocommerce-page a.button, html .woocommerce-page button.button, html .woocommerce-page input.button, html .woocommerce-page #respond input#submit, html .woocommerce-page #content input.button, html .woocommerce a.button:hover, html .woocommerce button.button:hover, html .woocommerce input.button:hover, html .woocommerce #respond input#submit:hover, html .woocommerce #content input.button:hover, html .woocommerce-page a.button:hover, html .woocommerce-page button.button:hover, html .woocommerce-page input.button:hover, html .woocommerce-page #respond input#submit:hover, html .woocommerce-page #content input.button:hover, html .woocommerce ul.products li.product a.loading, html .woocommerce div.product form.cart .button, html .woocommerce #content div.product form.cart .button, html .woocommerce-page div.product form.cart .button, html .woocommerce-page #content div.product form.cart .button{ color: #gdlr#; }"},
{name: "woo-button-bottom-border", selector: "html .woocommerce a.button.alt:hover, html .woocommerce button.button.alt:hover, html .woocommerce input.button.alt:hover, html .woocommerce #respond input#submit.alt:hover, html .woocommerce #content input.button.alt:hover, html .woocommerce-page a.button.alt:hover, html .woocommerce-page button.button.alt:hover, html .woocommerce-page input.button.alt:hover, html .woocommerce-page #respond input#submit.alt:hover, html .woocommerce-page #content input.button.alt:hover, html .woocommerce a.button.alt, html .woocommerce button.button.alt, html .woocommerce input.button.alt, html .woocommerce #respond input#submit.alt, html .woocommerce #content input.button.alt, html .woocommerce-page a.button.alt, html .woocommerce-page button.button.alt, html .woocommerce-page input.button.alt, html .woocommerce-page #respond input#submit.alt, html .woocommerce-page #content input.button.alt, html .woocommerce a.button, html .woocommerce button.button, html .woocommerce input.button, html .woocommerce #respond input#submit, html .woocommerce #content input.button, html .woocommerce-page a.button, html .woocommerce-page button.button, html .woocommerce-page input.button, html .woocommerce-page #respond input#submit, html .woocommerce-page #content input.button, html .woocommerce a.button:hover, html .woocommerce button.button:hover, html .woocommerce input.button:hover, html .woocommerce #respond input#submit:hover, html .woocommerce #content input.button:hover, html .woocommerce-page a.button:hover, html .woocommerce-page button.button:hover, html .woocommerce-page input.button:hover, html .woocommerce-page #respond input#submit:hover, html .woocommerce-page #content input.button:hover, html .woocommerce ul.products li.product a.loading, html .woocommerce div.product form.cart .button, html .woocommerce #content div.product form.cart .button, html .woocommerce-page div.product form.cart .button, html .woocommerce-page #content div.product form.cart .button{ border-bottom: 3px solid #gdlr#; }"},
{name: "woo-border-color", selector: "html .woocommerce #reviews #comments ol.commentlist li img.avatar, html .woocommerce-page #reviews #comments ol.commentlist li img.avatar { background: #gdlr#; }html .woocommerce #reviews #comments ol.commentlist li img.avatar, html .woocommerce-page #reviews #comments ol.commentlist li img.avatar,html .woocommerce #reviews #comments ol.commentlist li .comment-text, html .woocommerce-page #reviews #comments ol.commentlist li .comment-text,html .woocommerce ul.products li.product a img, html .woocommerce-page ul.products li.product a img, html .woocommerce ul.products li.product a img:hover ,html .woocommerce-page ul.products li.product a img:hover, html .woocommerce-page div.product div.images img, html .woocommerce-page #content div.product div.images img,html .woocommerce form.login, html .woocommerce form.checkout_coupon, html .woocommerce form.register, html .woocommerce-page form.login,html .woocommerce-page form.checkout_coupon, html .woocommerce-page form.register, html .woocommerce table.cart td.actions .coupon .input-text,html .woocommerce #content table.cart td.actions .coupon .input-text, html .woocommerce-page table.cart td.actions .coupon .input-text,html .woocommerce-page #content table.cart td.actions .coupon .input-text { border: 1px solid #gdlr#; }html .woocommerce div.product .woocommerce-tabs ul.tabs:before, html .woocommerce #content div.product .woocommerce-tabs ul.tabs:before,html .woocommerce-page div.product .woocommerce-tabs ul.tabs:before, html .woocommerce-page #content div.product .woocommerce-tabs ul.tabs:before,html .woocommerce table.shop_table tfoot td, html .woocommerce table.shop_table tfoot th, html .woocommerce-page table.shop_table tfoot td,html .woocommerce-page table.shop_table tfoot th, html .woocommerce table.shop_table tfoot td, html .woocommerce table.shop_table tfoot th,html .woocommerce-page table.shop_table tfoot td, html .woocommerce-page table.shop_table tfoot th { border-bottom: 1px solid #gdlr#; }html .woocommerce .cart-collaterals .cart_totals table tr:first-child th, html .woocommerce .cart-collaterals .cart_totals table tr:first-child td,html .woocommerce-page .cart-collaterals .cart_totals table tr:first-child th, html .woocommerce-page .cart-collaterals .cart_totals table tr:first-child td { border-top: 3px #gdlr# solid; }html .woocommerce .cart-collaterals .cart_totals tr td, html .woocommerce .cart-collaterals .cart_totals tr th,html .woocommerce-page .cart-collaterals .cart_totals tr td, html .woocommerce-page .cart-collaterals .cart_totals tr th { border-bottom: 2px solid #gdlr#; }"},
{name: "woo-secondary-elements", selector: "html .woocommerce div.product .woocommerce-tabs ul.tabs li, html .woocommerce #content div.product .woocommerce-tabs ul.tabs li, html .woocommerce-page div.product .woocommerce-tabs ul.tabs li, html .woocommerce-page #content div.product .woocommerce-tabs ul.tabs li ,html .woocommerce table.cart a.remove, html .woocommerce #content table.cart a.remove, html .woocommerce-page table.cart a.remove, html .woocommerce-page #content table.cart a.remove, html .woocommerce #payment, html .woocommerce-page #payment, html .woocommerce .customer_details,html .woocommerce ul.order_details, html .woocommerce nav.woocommerce-pagination ul li a, html .woocommerce-page nav.woocommerce-pagination ul li a,html .woocommerce form .form-row input.input-text, html .woocommerce form .form-row textarea, html .woocommerce-page form .form-row input.input-text, html .woocommerce-page form .form-row textarea, html .woocommerce .quantity input.qty, html .woocommerce #content .quantity input.qty, html .woocommerce-page .quantity input.qty, html .woocommerce-page #content .quantity input.qty,html .woocommerce .widget_shopping_cart .total, html .woocommerce-page .widget_shopping_cart .total { background: #gdlr#; }html .woocommerce .quantity input.qty, html .woocommerce #content .quantity input.qty, html .woocommerce-page .quantity input.qty, html .woocommerce-page #content .quantity input.qty { border: 1px solid #gdlr#; }"},
{name: "woo-secondary-elements-border", selector: "html .woocommerce .widget_shopping_cart .total, html .woocommerce-page .widget_shopping_cart .total { border-top: 2px solid #gdlr#; }html .woocommerce table.cart a.remove:hover, html .woocommerce #content table.cart a.remove:hover, html .woocommerce-page table.cart a.remove:hover,html .woocommerce-page #content table.cart a.remove:hover, html #payment div.payment_box, html .woocommerce-page #payment div.payment_box { background: #gdlr#; }"},
{name: "woo-cart-summary-price", selector: "html .woocommerce table.shop_table tfoot td, html .woocommerce table.shop_table tfoot th, html .woocommerce-page table.shop_table tfoot td,html .woocommerce-page table.shop_table tfoot th, .cart-subtotal th, .shipping th , .total th, html .woocommerce table.shop_attributes .alt th,html .woocommerce-page table.shop_attributes .alt th, html .woocommerce ul.products li.product .price, html.woocommerce-page ul.products li.product .price { color: #gdlr#; }"},
{name: "woo-discount-price", selector: "html .woocommerce ul.products li.product .price del, html .woocommerce-page ul.products li.product .price del,html .woocommerce table.cart a.remove, html .woocommerce #content table.cart a.remove, html .woocommerce-page table.cart a.remove,html .woocommerce-page #content table.cart a.remove { color: #gdlr#; }"},
{name: "woo-plus-minus-product-border", selector: "html .woocommerce .quantity .plus, html .woocommerce .quantity .minus, html .woocommerce #content .quantity .plus, html .woocommerce #content .quantity .minus, html .woocommerce-page .quantity .plus, html .woocommerce-page .quantity .minus, html .woocommerce-page #content .quantity .plus, html .woocommerce-page #content .quantity .minus { border: 1px solid #gdlr#; }"},
{name: "woo-plus-minus-product-sign", selector: "html .woocommerce .quantity .plus, html .woocommerce .quantity .minus, html .woocommerce #content .quantity .plus, html .woocommerce #content .quantity .minus, html .woocommerce-page .quantity .plus, html .woocommerce-page .quantity .minus, html .woocommerce-page #content .quantity .plus, html .woocommerce-page #content .quantity .minus { color: #gdlr#; }"},
{name: "woo-plus-product-background", selector: "html .woocommerce .quantity .plus, html .woocommerce #content .quantity .plus, html .woocommerce-page .quantity .plus,html .woocommerce-page #content .quantity .plus, html .woocommerce .quantity .plus:hover, html .woocommerce #content .quantity .plus:hover,html .woocommerce-page .quantity .plus:hover, html .woocommerce-page #content .quantity .plus:hover{ background: #gdlr#; }"},
{name: "woo-minus-product-background", selector: "html .woocommerce .quantity .minus, html .woocommerce #content .quantity .minus, html .woocommerce-page .quantity .minus,html .woocommerce-page #content .quantity .minus, html .woocommerce .quantity .minus:hover, html .woocommerce #content .quantity .minus:hover,html .woocommerce-page .quantity .minus:hover, html .woocommerce-page #content .quantity .minus:hover{ background: #gdlr#; }"},
];
	
	var customizer_style = $('<style id="customizer-style"></style>');
	$("head").append(customizer_style);	
	
	function generate_dynamic_style(index, value){
		color_option[index].style = color_option[index].selector.replace('#gdlr#', value);
		
		var new_style = '';
		for(var i=0; i<color_option.length; i++){
			if(color_option[i].style){
				new_style += color_option[i].style + '\r\n';
			}
		}
		customizer_style.html(new_style);
	}
	
	// Theme Color Option
	$.each(color_option, function(index, value){
		wp.customize('gdlr_customizer[' + value.name + ']', function(value){
			value.bind(function(to){
				generate_dynamic_style(index, to);
			});
		});		
	
	});
	
	// Site title and description.
	wp.customize('blogname', function(value){
		value.bind(function(to){
			$('.site-title').text(to);
		});
	});
	wp.customize('blogdescription', function(value){
		value.bind(function(to){
			$('.site-description').text(to);
		});
	});
	
})(jQuery);