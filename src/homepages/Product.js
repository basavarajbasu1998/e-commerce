import React from 'react'

const Product = () => {
    return (
        <div>
            <div>
                <div className="bg0 m-t-23 p-b-140">
                    <div className="container">
                        <div className="flex-w flex-sb-m p-b-52">
                            <div className="flex-w flex-l-m filter-tope-group m-tb-10">
                                <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1" data-filter="*">
                                    All Products
                                </button>
                                <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".women">
                                    Women
                                </button>
                                <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".men">
                                    Men
                                </button>
                                <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".bag">
                                    Bag
                                </button>
                                <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".shoes">
                                    Shoes
                                </button>
                                <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter=".watches">
                                    Watches
                                </button>
                            </div>
                            <div className="flex-w flex-c-m m-tb-10">
                                <div className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
                                    <i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list" />
                                    <i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none" />
                                    Filter
                                </div>
                                <div className="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search">
                                    <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search" />
                                    <i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none" />
                                    Search
                                </div>
                            </div>
                            {/* Search product */}
                            <div className="dis-none panel-search w-full p-t-10 p-b-15">
                                <div className="bor8 dis-flex p-l-15">
                                    <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                                        <i className="zmdi zmdi-search" />
                                    </button>
                                    <input className="mtext-107 cl2 size-114 plh2 p-r-15" type="text" name="search-product" placeholder="Search" />
                                </div>
                            </div>
                            {/* Filter */}
                            <div className="dis-none panel-filter w-full p-t-10">
                                <div className="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
                                    <div className="filter-col1 p-r-15 p-b-27">
                                        <div className="mtext-102 cl2 p-b-15">
                                            Sort By
                                        </div>
                                        <ul>
                                            <li className="p-b-6">
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    Default
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    Popularity
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    Average rating
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <a href="#" className="filter-link stext-106 trans-04 filter-link-active">
                                                    Newness
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    Price: Low to High
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    Price: High to Low
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="filter-col2 p-r-15 p-b-27">
                                        <div className="mtext-102 cl2 p-b-15">
                                            Price
                                        </div>
                                        <ul>
                                            <li className="p-b-6">
                                                <a href="#" className="filter-link stext-106 trans-04 filter-link-active">
                                                    All
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    $0.00 - $50.00
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    $50.00 - $100.00
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    $100.00 - $150.00
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    $150.00 - $200.00
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    $200.00+
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="filter-col3 p-r-15 p-b-27">
                                        <div className="mtext-102 cl2 p-b-15">
                                            Color
                                        </div>
                                        <ul>
                                            <li className="p-b-6">
                                                <span className="fs-15 lh-12 m-r-6" style={{ color: '#222' }}>
                                                    <i className="zmdi zmdi-circle" />
                                                </span>
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    Black
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <span className="fs-15 lh-12 m-r-6" style={{ color: '#4272d7' }}>
                                                    <i className="zmdi zmdi-circle" />
                                                </span>
                                                <a href="#" className="filter-link stext-106 trans-04 filter-link-active">
                                                    Blue
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <span className="fs-15 lh-12 m-r-6" style={{ color: '#b3b3b3' }}>
                                                    <i className="zmdi zmdi-circle" />
                                                </span>
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    Grey
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <span className="fs-15 lh-12 m-r-6" style={{ color: '#00ad5f' }}>
                                                    <i className="zmdi zmdi-circle" />
                                                </span>
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    Green
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <span className="fs-15 lh-12 m-r-6" style={{ color: '#fa4251' }}>
                                                    <i className="zmdi zmdi-circle" />
                                                </span>
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    Red
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <span className="fs-15 lh-12 m-r-6" style={{ color: '#aaa' }}>
                                                    <i className="zmdi zmdi-circle-o" />
                                                </span>
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    White
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="filter-col4 p-b-27">
                                        <div className="mtext-102 cl2 p-b-15">
                                            Tags
                                        </div>
                                        <div className="flex-w p-t-4 m-r--5">
                                            <a href="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                                                Fashion
                                            </a>
                                            <a href="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                                                Lifestyle
                                            </a>
                                            <a href="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                                                Denim
                                            </a>
                                            <a href="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                                                Streetstyle
                                            </a>
                                            <a href="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                                                Crafts
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row isotope-grid">
                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                                {/* Block2 */}
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src="images/product-01.jpg" alt="IMG-PRODUCT" />
                                        <a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Quick View
                                        </a>
                                    </div>
                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                Esprit Ruffle Shirt
                                            </a>
                                            <span className="stext-105 cl3">
                                                $16.64
                                            </span>
                                        </div>
                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON" />
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                                {/* Block2 */}
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src="images/product-02.jpg" alt="IMG-PRODUCT" />
                                        <a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Quick View
                                        </a>
                                    </div>
                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                Herschel supply
                                            </a>
                                            <span className="stext-105 cl3">
                                                $35.31
                                            </span>
                                        </div>
                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON" />
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men">
                                {/* Block2 */}
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src="images/product-03.jpg" alt="IMG-PRODUCT" />
                                        <a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Quick View
                                        </a>
                                    </div>
                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                Only Check Trouser
                                            </a>
                                            <span className="stext-105 cl3">
                                                $25.50
                                            </span>
                                        </div>
                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON" />
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                                {/* Block2 */}
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src="images/product-04.jpg" alt="IMG-PRODUCT" />
                                        <a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Quick View
                                        </a>
                                    </div>
                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                Classic Trench Coat
                                            </a>
                                            <span className="stext-105 cl3">
                                                $75.00
                                            </span>
                                        </div>
                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON" />
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                                {/* Block2 */}
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src="images/product-05.jpg" alt="IMG-PRODUCT" />
                                        <a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Quick View
                                        </a>
                                    </div>
                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                Front Pocket Jumper
                                            </a>
                                            <span className="stext-105 cl3">
                                                $34.75
                                            </span>
                                        </div>
                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON" />
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item watches">
                                {/* Block2 */}
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src="images/product-06.jpg" alt="IMG-PRODUCT" />
                                        <a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Quick View
                                        </a>
                                    </div>
                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                Vintage Inspired Classic
                                            </a>
                                            <span className="stext-105 cl3">
                                                $93.20
                                            </span>
                                        </div>
                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON" />
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                                {/* Block2 */}
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src="images/product-07.jpg" alt="IMG-PRODUCT" />
                                        <a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Quick View
                                        </a>
                                    </div>
                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                Shirt in Stretch Cotton
                                            </a>
                                            <span className="stext-105 cl3">
                                                $52.66
                                            </span>
                                        </div>
                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON" />
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                                {/* Block2 */}
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src="images/product-08.jpg" alt="IMG-PRODUCT" />
                                        <a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Quick View
                                        </a>
                                    </div>
                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                Pieces Metallic Printed
                                            </a>
                                            <span className="stext-105 cl3">
                                                $18.96
                                            </span>
                                        </div>
                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON" />
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item shoes">
                                {/* Block2 */}
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src="images/product-09.jpg" alt="IMG-PRODUCT" />
                                        <a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Quick View
                                        </a>
                                    </div>
                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                Converse All Star Hi Plimsolls
                                            </a>
                                            <span className="stext-105 cl3">
                                                $75.00
                                            </span>
                                        </div>
                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON" />
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                                {/* Block2 */}
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src="images/product-10.jpg" alt="IMG-PRODUCT" />
                                        <a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Quick View
                                        </a>
                                    </div>
                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                Femme T-Shirt In Stripe
                                            </a>
                                            <span className="stext-105 cl3">
                                                $25.85
                                            </span>
                                        </div>
                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON" />
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men">
                                {/* Block2 */}
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src="images/product-11.jpg" alt="IMG-PRODUCT" />
                                        <a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Quick View
                                        </a>
                                    </div>
                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                Herschel supply
                                            </a>
                                            <span className="stext-105 cl3">
                                                $63.16
                                            </span>
                                        </div>
                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON" />
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item men">
                                {/* Block2 */}
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src="images/product-12.jpg" alt="IMG-PRODUCT" />
                                        <a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Quick View
                                        </a>
                                    </div>
                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                Herschel supply
                                            </a>
                                            <span className="stext-105 cl3">
                                                $63.15
                                            </span>
                                        </div>
                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON" />
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                                {/* Block2 */}
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src="images/product-13.jpg" alt="IMG-PRODUCT" />
                                        <a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Quick View
                                        </a>
                                    </div>
                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                T-Shirt with Sleeve
                                            </a>
                                            <span className="stext-105 cl3">
                                                $18.49
                                            </span>
                                        </div>
                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON" />
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                                {/* Block2 */}
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src="images/product-14.jpg" alt="IMG-PRODUCT" />
                                        <a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Quick View
                                        </a>
                                    </div>
                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                Pretty Little Thing
                                            </a>
                                            <span className="stext-105 cl3">
                                                $54.79
                                            </span>
                                        </div>
                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON" />
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item watches">
                                {/* Block2 */}
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src="images/product-15.jpg" alt="IMG-PRODUCT" />
                                        <a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Quick View
                                        </a>
                                    </div>
                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                Mini Silver Mesh Watch
                                            </a>
                                            <span className="stext-105 cl3">
                                                $86.85
                                            </span>
                                        </div>
                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON" />
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
                                {/* Block2 */}
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src="images/product-16.jpg" alt="IMG-PRODUCT" />
                                        <a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Quick View
                                        </a>
                                    </div>
                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                Square Neck Back
                                            </a>
                                            <span className="stext-105 cl3">
                                                $29.64
                                            </span>
                                        </div>
                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON" />
                                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Load more */}
                        <div className="flex-c-m flex-w w-full p-t-45">
                            <a href="#" className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">
                                Load More
                            </a>
                        </div>
                    </div>
                </div>
             
                <div className="btn-back-to-top" id="myBtn">
                    <span className="symbol-btn-back-to-top">
                        <i className="zmdi zmdi-chevron-up" />
                    </span>
                </div>
                {/* Modal1 */}
                <div className="wrap-modal1 js-modal1 p-t-60 p-b-20">
                    <div className="overlay-modal1 js-hide-modal1" />
                    <div className="container">
                        <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
                            <button className="how-pos3 hov3 trans-04 js-hide-modal1">
                                <img src="images/icons/icon-close.png" alt="CLOSE" />
                            </button>
                            <div className="row">
                                <div className="col-md-6 col-lg-7 p-b-30">
                                    <div className="p-l-25 p-r-30 p-lr-0-lg">
                                        <div className="wrap-slick3 flex-sb flex-w">
                                            <div className="wrap-slick3-dots" />
                                            <div className="wrap-slick3-arrows flex-sb-m flex-w" />
                                            <div className="slick3 gallery-lb">
                                                <div className="item-slick3" data-thumb="images/product-detail-01.jpg">
                                                    <div className="wrap-pic-w pos-relative">
                                                        <img src="images/product-detail-01.jpg" alt="IMG-PRODUCT" />
                                                        <a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/product-detail-01.jpg">
                                                            <i className="fa fa-expand" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="item-slick3" data-thumb="images/product-detail-02.jpg">
                                                    <div className="wrap-pic-w pos-relative">
                                                        <img src="images/product-detail-02.jpg" alt="IMG-PRODUCT" />
                                                        <a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/product-detail-02.jpg">
                                                            <i className="fa fa-expand" />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="item-slick3" data-thumb="images/product-detail-03.jpg">
                                                    <div className="wrap-pic-w pos-relative">
                                                        <img src="images/product-detail-03.jpg" alt="IMG-PRODUCT" />
                                                        <a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/product-detail-03.jpg">
                                                            <i className="fa fa-expand" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-5 p-b-30">
                                    <div className="p-r-50 p-t-5 p-lr-0-lg">
                                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                                            Lightweight Jacket
                                        </h4>
                                        <span className="mtext-106 cl2">
                                            $58.79
                                        </span>
                                        <p className="stext-102 cl3 p-t-23">
                                            Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.
                                        </p>
                                        {/*  */}
                                        <div className="p-t-33">
                                            <div className="flex-w flex-r-m p-b-10">
                                                <div className="size-203 flex-c-m respon6">
                                                    Size
                                                </div>
                                                <div className="size-204 respon6-next">
                                                    <div className="rs1-select2 bor8 bg0">
                                                        <select className="js-select2" name="time">
                                                            <option>Choose an option</option>
                                                            <option>Size S</option>
                                                            <option>Size M</option>
                                                            <option>Size L</option>
                                                            <option>Size XL</option>
                                                        </select>
                                                        <div className="dropDownSelect2" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-w flex-r-m p-b-10">
                                                <div className="size-203 flex-c-m respon6">
                                                    Color
                                                </div>
                                                <div className="size-204 respon6-next">
                                                    <div className="rs1-select2 bor8 bg0">
                                                        <select className="js-select2" name="time">
                                                            <option>Choose an option</option>
                                                            <option>Red</option>
                                                            <option>Blue</option>
                                                            <option>White</option>
                                                            <option>Grey</option>
                                                        </select>
                                                        <div className="dropDownSelect2" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex-w flex-r-m p-b-10">
                                                <div className="size-204 flex-w flex-m respon6-next">
                                                    <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                                                        <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                                            <i className="fs-16 zmdi zmdi-minus" />
                                                        </div>
                                                        <input className="mtext-104 cl3 txt-center num-product" type="number" name="num-product" defaultValue={1} />
                                                        <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                                            <i className="fs-16 zmdi zmdi-plus" />
                                                        </div>
                                                    </div>
                                                    <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                                                        Add to cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {/*  */}
                                        <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                                            <div className="flex-m bor9 p-r-10 m-r-11">
                                                <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100" data-tooltip="Add to Wishlist">
                                                    <i className="zmdi zmdi-favorite" />
                                                </a>
                                            </div>
                                            <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Facebook">
                                                <i className="fa fa-facebook" />
                                            </a>
                                            <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Twitter">
                                                <i className="fa fa-twitter" />
                                            </a>
                                            <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Google Plus">
                                                <i className="fa fa-google-plus" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Product

