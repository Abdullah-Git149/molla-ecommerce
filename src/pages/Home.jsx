import React from 'react';

function Home() {
    return (
        <div>
            <div className="page-wrapper">
                <header className="header header-6">
                    <div className="header-top">
                        <div className="container">
                            <div className="header-left">
                                <ul className="top-menu top-link-menu d-none d-md-block">
                                    <li>
                                        <a href="#">Links</a>
                                        <ul>
                                            <li><a href="tel:#"><i className="icon-phone" />Call: +0123 456 789</a></li>
                                        </ul>
                                    </li>
                                </ul>{/* End .top-menu */}
                            </div>{/* End .header-left */}
                            <div className="header-right">
                                <div className="social-icons social-icons-color">
                                    <a href="#" className="social-icon social-facebook" title="Facebook" target="_blank"><i className="icon-facebook-f" /></a>
                                    <a href="#" className="social-icon social-twitter" title="Twitter" target="_blank"><i className="icon-twitter" /></a>
                                    <a href="#" className="social-icon social-pinterest" title="Instagram" target="_blank"><i className="icon-pinterest-p" /></a>
                                    <a href="#" className="social-icon social-instagram" title="Pinterest" target="_blank"><i className="icon-instagram" /></a>
                                </div>{/* End .soial-icons */}
                                <ul className="top-menu top-link-menu">
                                    <li>
                                        <a href="#">Links</a>
                                        <ul>
                                            <li><a href="#signin-modal" data-toggle="modal"><i className="icon-user" />Login</a></li>
                                        </ul>
                                    </li>
                                </ul>{/* End .top-menu */}
                                <div className="header-dropdown">
                                    <a href="#">USD</a>
                                    <div className="header-menu">
                                        <ul>
                                            <li><a href="#">Eur</a></li>
                                            <li><a href="#">Usd</a></li>
                                        </ul>
                                    </div>{/* End .header-menu */}
                                </div>{/* End .header-dropdown */}
                                <div className="header-dropdown">
                                    <a href="#">Eng</a>
                                    <div className="header-menu">
                                        <ul>
                                            <li><a href="#">English</a></li>
                                            <li><a href="#">French</a></li>
                                            <li><a href="#">Spanish</a></li>
                                        </ul>
                                    </div>{/* End .header-menu */}
                                </div>{/* End .header-dropdown */}
                            </div>{/* End .header-right */}
                        </div>
                    </div>
                    <div className="header-middle">
                        <div className="container">
                            <div className="header-left">
                                <div className="header-search header-search-extended header-search-visible d-none d-lg-block">
                                    <a href="#" className="search-toggle" role="button"><i className="icon-search" /></a>
                                    <form action="#" method="get">
                                        <div className="header-search-wrapper search-wrapper-wide">
                                            <label htmlFor="q" className="sr-only">Search</label>
                                            <button className="btn btn-primary" type="submit"><i className="icon-search" /></button>
                                            <input type="search" className="form-control" name="q" id="q" placeholder="Search product ..." required />
                                        </div>{/* End .header-search-wrapper */}
                                    </form>
                                </div>{/* End .header-search */}
                            </div>
                            <div className="header-center">
                                <a href="index.html" className="logo">
                                    <img src="assets/images/demos/demo-6/logo.png" alt="Molla Logo" width={82} height={20} />
                                </a>
                            </div>{/* End .header-left */}
                            <div className="header-right">
                                <a href="wishlist.html" className="wishlist-link">
                                    <i className="icon-heart-o" />
                                    <span className="wishlist-count">3</span>
                                    <span className="wishlist-txt">My Wishlist</span>
                                </a>
                                <div className="dropdown cart-dropdown">
                                    <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                        <i className="icon-shopping-cart" />
                                        <span className="cart-count">2</span>
                                        <span className="cart-txt">$ 164,00</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <div className="dropdown-cart-products">
                                            <div className="product">
                                                <div className="product-cart-details">
                                                    <h4 className="product-title">
                                                        <a href="product.html">Beige knitted elastic runner shoes</a>
                                                    </h4>
                                                    <span className="cart-product-info">
                                                        <span className="cart-product-qty">1</span>
                              x $84.00
                            </span>
                                                </div>{/* End .product-cart-details */}
                                                <figure className="product-image-container">
                                                    <a href="product.html" className="product-image">
                                                        <img src="assets/images/products/cart/product-1.jpg" alt="product" />
                                                    </a>
                                                </figure>
                                                <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close" /></a>
                                            </div>{/* End .product */}
                                            <div className="product">
                                                <div className="product-cart-details">
                                                    <h4 className="product-title">
                                                        <a href="product.html">Blue utility pinafore denim dress</a>
                                                    </h4>
                                                    <span className="cart-product-info">
                                                        <span className="cart-product-qty">1</span>
                              x $76.00
                            </span>
                                                </div>{/* End .product-cart-details */}
                                                <figure className="product-image-container">
                                                    <a href="product.html" className="product-image">
                                                        <img src="assets/images/products/cart/product-2.jpg" alt="product" />
                                                    </a>
                                                </figure>
                                                <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close" /></a>
                                            </div>{/* End .product */}
                                        </div>{/* End .cart-product */}
                                        <div className="dropdown-cart-total">
                                            <span>Total</span>
                                            <span className="cart-total-price">$160.00</span>
                                        </div>{/* End .dropdown-cart-total */}
                                        <div className="dropdown-cart-action">
                                            <a href="cart.html" className="btn btn-primary">View Cart</a>
                                            <a href="checkout.html" className="btn btn-outline-primary-2"><span>Checkout</span><i className="icon-long-arrow-right" /></a>
                                        </div>{/* End .dropdown-cart-total */}
                                    </div>{/* End .dropdown-menu */}
                                </div>{/* End .cart-dropdown */}
                            </div>
                        </div>{/* End .container */}
                    </div>{/* End .header-middle */}
                    <div className="header-bottom sticky-header">
                        <div className="container">
                            <div className="header-left">
                                <nav className="main-nav">
                                    <ul className="menu sf-arrows">
                                        <li className="megamenu-container active">
                                            <a href="index.html" className="sf-with-ul">Home</a>
                                            <div className="megamenu demo">
                                                <div className="menu-col">
                                                    <div className="menu-title">Choose your demo</div>{/* End .menu-title */}
                                                    <div className="demo-list">
                                                        <div className="demo-item">
                                                            <a href="index-1.html">
                                                                <span className="demo-bg" style={{ backgroundImage: 'url(assets/images/menu/demos/1.jpg)' }} />
                                                                <span className="demo-title">01 - furniture store</span>
                                                            </a>
                                                        </div>{/* End .demo-item */}
                                                        <div className="demo-item">
                                                            <a href="index-2.html">
                                                                <span className="demo-bg" style={{ backgroundImage: 'url(assets/images/menu/demos/2.jpg)' }} />
                                                                <span className="demo-title">02 - furniture store</span>
                                                            </a>
                                                        </div>{/* End .demo-item */}
                                                        <div className="demo-item">
                                                            <a href="index-3.html">
                                                                <span className="demo-bg" style={{ backgroundImage: 'url(assets/images/menu/demos/3.jpg)' }} />
                                                                <span className="demo-title">03 - electronic store</span>
                                                            </a>
                                                        </div>{/* End .demo-item */}
                                                        <div className="demo-item">
                                                            <a href="index-4.html">
                                                                <span className="demo-bg" style={{ backgroundImage: 'url(assets/images/menu/demos/4.jpg)' }} />
                                                                <span className="demo-title">04 - electronic store</span>
                                                            </a>
                                                        </div>{/* End .demo-item */}
                                                        <div className="demo-item">
                                                            <a href="index-5.html">
                                                                <span className="demo-bg" style={{ backgroundImage: 'url(assets/images/menu/demos/5.jpg)' }} />
                                                                <span className="demo-title">05 - fashion store</span>
                                                            </a>
                                                        </div>{/* End .demo-item */}
                                                        <div className="demo-item">
                                                            <a href="index-6.html">
                                                                <span className="demo-bg" style={{ backgroundImage: 'url(assets/images/menu/demos/6.jpg)' }} />
                                                                <span className="demo-title">06 - fashion store</span>
                                                            </a>
                                                        </div>{/* End .demo-item */}
                                                        <div className="demo-item">
                                                            <a href="index-7.html">
                                                                <span className="demo-bg" style={{ backgroundImage: 'url(assets/images/menu/demos/7.jpg)' }} />
                                                                <span className="demo-title">07 - fashion store</span>
                                                            </a>
                                                        </div>{/* End .demo-item */}
                                                        <div className="demo-item">
                                                            <a href="index-8.html">
                                                                <span className="demo-bg" style={{ backgroundImage: 'url(assets/images/menu/demos/8.jpg)' }} />
                                                                <span className="demo-title">08 - fashion store</span>
                                                            </a>
                                                        </div>{/* End .demo-item */}
                                                        <div className="demo-item">
                                                            <a href="index-9.html">
                                                                <span className="demo-bg" style={{ backgroundImage: 'url(assets/images/menu/demos/9.jpg)' }} />
                                                                <span className="demo-title">09 - fashion store</span>
                                                            </a>
                                                        </div>{/* End .demo-item */}
                                                        <div className="demo-item">
                                                            <a href="index-10.html">
                                                                <span className="demo-bg" style={{ backgroundImage: 'url(assets/images/menu/demos/10.jpg)' }} />
                                                                <span className="demo-title">10 - shoes store</span>
                                                            </a>
                                                        </div>{/* End .demo-item */}
                                                        <div className="demo-item hidden">
                                                            <a href="index-11.html">
                                                                <span className="demo-bg" style={{ backgroundImage: 'url(assets/images/menu/demos/11.jpg)' }} />
                                                                <span className="demo-title">11 - furniture simple store</span>
                                                            </a>
                                                        </div>{/* End .demo-item */}
                                                        <div className="demo-item hidden">
                                                            <a href="index-12.html">
                                                                <span className="demo-bg" style={{ backgroundImage: 'url(assets/images/menu/demos/12.jpg)' }} />
                                                                <span className="demo-title">12 - fashion simple store</span>
                                                            </a>
                                                        </div>{/* End .demo-item */}
                                                        <div className="demo-item hidden">
                                                            <a href="index-13.html">
                                                                <span className="demo-bg" style={{ backgroundImage: 'url(assets/images/menu/demos/13.jpg)' }} />
                                                                <span className="demo-title">13 - market</span>
                                                            </a>
                                                        </div>{/* End .demo-item */}
                                                        <div className="demo-item hidden">
                                                            <a href="index-14.html">
                                                                <span className="demo-bg" style={{ backgroundImage: 'url(assets/images/menu/demos/14.jpg)' }} />
                                                                <span className="demo-title">14 - market fullwidth</span>
                                                            </a>
                                                        </div>{/* End .demo-item */}
                                                        <div className="demo-item hidden">
                                                            <a href="index-15.html">
                                                                <span className="demo-bg" style={{ backgroundImage: 'url(assets/images/menu/demos/15.jpg)' }} />
                                                                <span className="demo-title">15 - lookbook 1</span>
                                                            </a>
                                                        </div>{/* End .demo-item */}
                                                        <div className="demo-item hidden">
                                                            <a href="index-16.html">
                                                                <span className="demo-bg" style={{ backgroundImage: 'url(assets/images/menu/demos/16.jpg)' }} />
                                                                <span className="demo-title">16 - lookbook 2</span>
                                                            </a>
                                                        </div>{/* End .demo-item */}
                                                        <div className="demo-item hidden">
                                                            <a href="index-17.html">
                                                                <span className="demo-bg" style={{ backgroundImage: 'url(assets/images/menu/demos/17.jpg)' }} />
                                                                <span className="demo-title">17 - fashion store</span>
                                                            </a>
                                                        </div>{/* End .demo-item */}
                                                        <div className="demo-item hidden">
                                                            <a href="index-18.html">
                                                                <span className="demo-bg" style={{ backgroundImage: 'url(assets/images/menu/demos/18.jpg)' }} />
                                                                <span className="demo-title">18 - fashion store (with sidebar)</span>
                                                            </a>
                                                        </div>{/* End .demo-item */}
                                                        <div className="demo-item hidden">
                                                            <a href="index-19.html">
                                                                <span className="demo-bg" style={{ backgroundImage: 'url(assets/images/menu/demos/19.jpg)' }} />
                                                                <span className="demo-title">19 - games store</span>
                                                            </a>
                                                        </div>{/* End .demo-item */}
                                                        <div className="demo-item hidden">
                                                            <a href="index-20.html">
                                                                <span className="demo-bg" style={{ backgroundImage: 'url(assets/images/menu/demos/20.jpg)' }} />
                                                                <span className="demo-title">20 - book store</span>
                                                            </a>
                                                        </div>{/* End .demo-item */}
                                                        <div className="demo-item hidden">
                                                            <a href="index-21.html">
                                                                <span className="demo-bg" style={{ backgroundImage: 'url(assets/images/menu/demos/21.jpg)' }} />
                                                                <span className="demo-title">21 - sport store</span>
                                                            </a>
                                                        </div>{/* End .demo-item */}
                                                        <div className="demo-item hidden">
                                                            <a href="index-22.html">
                                                                <span className="demo-bg" style={{ backgroundImage: 'url(assets/images/menu/demos/22.jpg)' }} />
                                                                <span className="demo-title">22 - tools store</span>
                                                            </a>
                                                        </div>{/* End .demo-item */}
                                                        <div className="demo-item hidden">
                                                            <a href="index-23.html">
                                                                <span className="demo-bg" style={{ backgroundImage: 'url(assets/images/menu/demos/23.jpg)' }} />
                                                                <span className="demo-title">23 - fashion left navigation store</span>
                                                            </a>
                                                        </div>{/* End .demo-item */}
                                                        <div className="demo-item hidden">
                                                            <a href="index-24.html">
                                                                <span className="demo-bg" style={{ backgroundImage: 'url(assets/images/menu/demos/24.jpg)' }} />
                                                                <span className="demo-title">24 - extreme sport store</span>
                                                            </a>
                                                        </div>{/* End .demo-item */}
                                                    </div>{/* End .demo-list */}
                                                    <div className="megamenu-action text-center">
                                                        <a href="#" className="btn btn-outline-primary-2 view-all-demos"><span>View All Demos</span><i className="icon-long-arrow-right" /></a>
                                                    </div>{/* End .text-center */}
                                                </div>{/* End .menu-col */}
                                            </div>{/* End .megamenu */}
                                        </li>
                                        <li>
                                            <a href="category.html" className="sf-with-ul">Shop</a>
                                            <div className="megamenu megamenu-md">
                                                <div className="row no-gutters">
                                                    <div className="col-md-8">
                                                        <div className="menu-col">
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="menu-title">Shop with sidebar</div>{/* End .menu-title */}
                                                                    <ul>
                                                                        <li><a href="category-list.html">Shop List</a></li>
                                                                        <li><a href="category-2cols.html">Shop Grid 2 Columns</a></li>
                                                                        <li><a href="category.html">Shop Grid 3 Columns</a></li>
                                                                        <li><a href="category-4cols.html">Shop Grid 4 Columns</a></li>
                                                                        <li><a href="category-market.html"><span>Shop Market<span className="tip tip-new">New</span></span></a></li>
                                                                    </ul>
                                                                    <div className="menu-title">Shop no sidebar</div>{/* End .menu-title */}
                                                                    <ul>
                                                                        <li><a href="category-boxed.html"><span>Shop Boxed No Sidebar<span className="tip tip-hot">Hot</span></span></a></li>
                                                                        <li><a href="category-fullwidth.html">Shop Fullwidth No Sidebar</a></li>
                                                                    </ul>
                                                                </div>{/* End .col-md-6 */}
                                                                <div className="col-md-6">
                                                                    <div className="menu-title">Product Category</div>{/* End .menu-title */}
                                                                    <ul>
                                                                        <li><a href="product-category-boxed.html">Product Category Boxed</a></li>
                                                                        <li><a href="product-category-fullwidth.html"><span>Product Category Fullwidth<span className="tip tip-new">New</span></span></a></li>
                                                                    </ul>
                                                                    <div className="menu-title">Shop Pages</div>{/* End .menu-title */}
                                                                    <ul>
                                                                        <li><a href="cart.html">Cart</a></li>
                                                                        <li><a href="checkout.html">Checkout</a></li>
                                                                        <li><a href="wishlist.html">Wishlist</a></li>
                                                                        <li><a href="dashboard.html">My Account</a></li>
                                                                        <li><a href="#">Lookbook</a></li>
                                                                    </ul>
                                                                </div>{/* End .col-md-6 */}
                                                            </div>{/* End .row */}
                                                        </div>{/* End .menu-col */}
                                                    </div>{/* End .col-md-8 */}
                                                    <div className="col-md-4">
                                                        <div className="banner banner-overlay">
                                                            <a href="category.html" className="banner banner-menu">
                                                                <img src="assets/images/menu/banner-1.jpg" alt="Banner" />
                                                                <div className="banner-content banner-content-top">
                                                                    <div className="banner-title text-white">Last <br />Chance<br /><span><strong>Sale</strong></span></div>{/* End .banner-title */}
                                                                </div>{/* End .banner-content */}
                                                            </a>
                                                        </div>{/* End .banner banner-overlay */}
                                                    </div>{/* End .col-md-4 */}
                                                </div>{/* End .row */}
                                            </div>{/* End .megamenu megamenu-md */}
                                        </li>
                                        <li>
                                            <a href="product.html" className="sf-with-ul">Product</a>
                                            <div className="megamenu megamenu-sm">
                                                <div className="row no-gutters">
                                                    <div className="col-md-6">
                                                        <div className="menu-col">
                                                            <div className="menu-title">Product Details</div>{/* End .menu-title */}
                                                            <ul>
                                                                <li><a href="product.html">Default</a></li>
                                                                <li><a href="product-centered.html">Centered</a></li>
                                                                <li><a href="product-extended.html"><span>Extended Info<span className="tip tip-new">New</span></span></a></li>
                                                                <li><a href="product-gallery.html">Gallery</a></li>
                                                                <li><a href="product-sticky.html">Sticky Info</a></li>
                                                                <li><a href="product-sidebar.html">Boxed With Sidebar</a></li>
                                                                <li><a href="product-fullwidth.html">Full Width</a></li>
                                                                <li><a href="product-masonry.html">Masonry Sticky Info</a></li>
                                                            </ul>
                                                        </div>{/* End .menu-col */}
                                                    </div>{/* End .col-md-6 */}
                                                    <div className="col-md-6">
                                                        <div className="banner banner-overlay">
                                                            <a href="category.html">
                                                                <img src="assets/images/menu/banner-2.jpg" alt="Banner" />
                                                                <div className="banner-content banner-content-bottom">
                                                                    <div className="banner-title text-white">New Trends<br /><span><strong>spring 2019</strong></span></div>{/* End .banner-title */}
                                                                </div>{/* End .banner-content */}
                                                            </a>
                                                        </div>{/* End .banner */}
                                                    </div>{/* End .col-md-6 */}
                                                </div>{/* End .row */}
                                            </div>{/* End .megamenu megamenu-sm */}
                                        </li>
                                        <li>
                                            <a href="#" className="sf-with-ul">Pages</a>
                                            <ul>
                                                <li>
                                                    <a href="about.html" className="sf-with-ul">About</a>
                                                    <ul>
                                                        <li><a href="about.html">About 01</a></li>
                                                        <li><a href="about-2.html">About 02</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="contact.html" className="sf-with-ul">Contact</a>
                                                    <ul>
                                                        <li><a href="contact.html">Contact 01</a></li>
                                                        <li><a href="contact-2.html">Contact 02</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="login.html">Login</a></li>
                                                <li><a href="faq.html">FAQs</a></li>
                                                <li><a href="404.html">Error 404</a></li>
                                                <li><a href="coming-soon.html">Coming Soon</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="blog.html" className="sf-with-ul">Blog</a>
                                            <ul>
                                                <li><a href="blog.html">Classic</a></li>
                                                <li><a href="blog-listing.html">Listing</a></li>
                                                <li>
                                                    <a href="#">Grid</a>
                                                    <ul>
                                                        <li><a href="blog-grid-2cols.html">Grid 2 columns</a></li>
                                                        <li><a href="blog-grid-3cols.html">Grid 3 columns</a></li>
                                                        <li><a href="blog-grid-4cols.html">Grid 4 columns</a></li>
                                                        <li><a href="blog-grid-sidebar.html">Grid sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">Masonry</a>
                                                    <ul>
                                                        <li><a href="blog-masonry-2cols.html">Masonry 2 columns</a></li>
                                                        <li><a href="blog-masonry-3cols.html">Masonry 3 columns</a></li>
                                                        <li><a href="blog-masonry-4cols.html">Masonry 4 columns</a></li>
                                                        <li><a href="blog-masonry-sidebar.html">Masonry sidebar</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">Mask</a>
                                                    <ul>
                                                        <li><a href="blog-mask-grid.html">Blog mask grid</a></li>
                                                        <li><a href="blog-mask-masonry.html">Blog mask masonry</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">Single Post</a>
                                                    <ul>
                                                        <li><a href="single.html">Default with sidebar</a></li>
                                                        <li><a href="single-fullwidth.html">Fullwidth no sidebar</a></li>
                                                        <li><a href="single-fullwidth-sidebar.html">Fullwidth with sidebar</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="elements-list.html" className="sf-with-ul">Elements</a>
                                            <ul>
                                                <li><a href="elements-products.html">Products</a></li>
                                                <li><a href="elements-typography.html">Typography</a></li>
                                                <li><a href="elements-titles.html">Titles</a></li>
                                                <li><a href="elements-banners.html">Banners</a></li>
                                                <li><a href="elements-product-category.html">Product Category</a></li>
                                                <li><a href="elements-video-banners.html">Video Banners</a></li>
                                                <li><a href="elements-buttons.html">Buttons</a></li>
                                                <li><a href="elements-accordions.html">Accordions</a></li>
                                                <li><a href="elements-tabs.html">Tabs</a></li>
                                                <li><a href="elements-testimonials.html">Testimonials</a></li>
                                                <li><a href="elements-blog-posts.html">Blog Posts</a></li>
                                                <li><a href="elements-portfolio.html">Portfolio</a></li>
                                                <li><a href="elements-cta.html">Call to Action</a></li>
                                                <li><a href="elements-icon-boxes.html">Icon Boxes</a></li>
                                            </ul>
                                        </li>
                                    </ul>{/* End .menu */}
                                </nav>{/* End .main-nav */}
                                <button className="mobile-menu-toggler">
                                    <span className="sr-only">Toggle mobile menu</span>
                                    <i className="icon-bars" />
                                </button>
                            </div>{/* End .header-left */}
                            <div className="header-right">
                                <i className="la la-lightbulb-o" /><p>Clearance Up to 30% Off</p>
                            </div>
                        </div>{/* End .container */}
                    </div>{/* End .header-bottom */}
                </header>{/* End .header */}
                <main className="main">
                    <div className="intro-slider-container">
                        <div className="intro-slider owl-carousel owl-theme owl-nav-inside owl-light" data-toggle="owl" data-owl-options="{
                        &quot;dots&quot;: false,
                        &quot;nav&quot;: false, 
                        &quot;responsive&quot;: {
                            &quot;992&quot;: {
                                &quot;nav&quot;: true
                            }
                        }
                    }">
                            <div className="intro-slide" style={{ backgroundImage: 'url(assets/images/demos/demo-6/slider/slide-1.jpg)' }}>
                                <div className="container intro-content text-center">
                                    <h3 className="intro-subtitle text-white">You're Looking Good</h3>{/* End .h3 intro-subtitle */}
                                    <h1 className="intro-title text-white">New Lookbook</h1>{/* End .intro-title */}
                                    <a href="category.html" className="btn btn-outline-white-4">
                                        <span>Discover More</span>
                                    </a>
                                </div>{/* End .intro-content */}
                            </div>{/* End .intro-slide */}
                            <div className="intro-slide" style={{ backgroundImage: 'url(assets/images/demos/demo-6/slider/slide-2.jpg)' }}>
                                <div className="container intro-content text-center">
                                    <h3 className="intro-subtitle text-white">Don???t Miss</h3>{/* End .h3 intro-subtitle */}
                                    <h1 className="intro-title text-white">Mysrety Deals</h1>{/* End .intro-title */}
                                    <a href="category.html" className="btn btn-outline-white-4">
                                        <span>Discover More</span>
                                    </a>
                                </div>{/* End .intro-content */}
                            </div>{/* End .intro-slide */}
                        </div>{/* End .intro-slider owl-carousel owl-theme */}
                        <span className="slider-loader" />{/* End .slider-loader */}
                    </div>{/* End .intro-slider-container */}
                    <div className="pt-2 pb-3">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="banner banner-overlay">
                                        <a href="#">
                                            <img src="assets/images/demos/demo-6/banners/banner-1.jpg" alt="Banner" />
                                        </a>
                                        <div className="banner-content banner-content-center">
                                            <h4 className="banner-subtitle text-white"><a href="#">New in</a></h4>{/* End .banner-subtitle */}
                                            <h3 className="banner-title text-white"><a href="#"><strong>Women???s</strong></a></h3>{/* End .banner-title */}<a href="#">
                                            </a><a href="#" className="btn btn-outline-white banner-link underline">Shop Now</a>
                                        </div>{/* End .banner-content */}
                                    </div>{/* End .banner */}
                                </div>{/* End .col-sm-6 */}
                                <div className="col-sm-6">
                                    <div className="banner banner-overlay">
                                        <a href="#">
                                            <img src="assets/images/demos/demo-6/banners/banner-2.jpg" alt="Banner" />
                                        </a>
                                        <div className="banner-content banner-content-center">
                                            <h4 className="banner-subtitle text-white"><a href="#">New in</a></h4>{/* End .banner-subtitle */}
                                            <h3 className="banner-title text-white"><a href="#"><strong>Men???s</strong></a></h3>{/* End .banner-title */}
                                            <a href="#" className="btn btn-outline-white banner-link underline">Shop Now</a>
                                        </div>{/* End .banner-content */}
                                    </div>{/* End .banner */}
                                </div>{/* End .col-sm-6 */}
                            </div>{/* End .row */}
                            <hr className="mt-0 mb-0" />
                        </div>{/* End .container */}
                    </div>{/* End .bg-gray */}
                    <div className="mb-5" />{/* End .mb-5 */}
                    <div className="container">
                        <div className="heading heading-center mb-3">
                            <h2 className="title">Trending</h2>{/* End .title */}
                            <ul className="nav nav-pills justify-content-center" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="trending-all-link" data-toggle="tab" href="#trending-all-tab" role="tab" aria-controls="trending-all-tab" aria-selected="true">All</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="trending-women-link" data-toggle="tab" href="#trending-women-tab" role="tab" aria-controls="trending-women-tab" aria-selected="false">Women</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="trending-men-link" data-toggle="tab" href="#trending-men-tab" role="tab" aria-controls="trending-men-tab" aria-selected="false">Men</a>
                                </li>
                            </ul>
                        </div>{/* End .heading */}
                        <div className="tab-content tab-content-carousel">
                            <div className="tab-pane p-0 fade show active" id="trending-all-tab" role="tabpanel" aria-labelledby="trending-all-link">
                                <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                &quot;nav&quot;: false, 
                                &quot;dots&quot;: true,
                                &quot;margin&quot;: 20,
                                &quot;loop&quot;: false,
                                &quot;responsive&quot;: {
                                    &quot;0&quot;: {
                                        &quot;items&quot;:2
                                    },
                                    &quot;480&quot;: {
                                        &quot;items&quot;:2
                                    },
                                    &quot;768&quot;: {
                                        &quot;items&quot;:3
                                    },
                                    &quot;992&quot;: {
                                        &quot;items&quot;:4
                                    },
                                    &quot;1200&quot;: {
                                        &quot;items&quot;:4,
                                        &quot;nav&quot;: true,
                                        &quot;dots&quot;: false
                                    }
                                }
                            }">
                                    <div className="product product-7 text-center">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-6/products/product-1-1.jpg" alt="Product image" className="product-image" />
                                                <img src="assets/images/demos/demo-6/products/product-1-2.jpg" alt="Product image" className="product-image-hover" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Clothing</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Denim jacket</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $19.99
                        </div>
                                            <div className="product-nav product-nav-thumbs">
                                                <a href="#" className="active">
                                                    <img src="assets/images/demos/demo-6/products/product-1-thumb.jpg" alt="product desc" />
                                                </a>
                                                <a href="#">
                                                    <img src="assets/images/demos/demo-6/products/product-1-2-thumb.jpg" alt="product desc" />
                                                </a>
                                                <a href="#">
                                                    <img src="assets/images/demos/demo-6/products/product-1-3-thumb.jpg" alt="product desc" />
                                                </a>
                                            </div>{/* End .product-nav */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product product-7 text-center">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-6/products/product-2-1.jpg" alt="Product image" className="product-image" />
                                                <img src="assets/images/demos/demo-6/products/product-2-2.jpg" alt="Product image" className="product-image-hover" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Shoes</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Sandals</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $24.99
                        </div>{/* End .product-price */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product product-7 text-center">
                                        <figure className="product-media">
                                            <span className="product-label label-sale">sale</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-6/products/product-3-1.jpg" alt="Product image" className="product-image" />
                                                <img src="assets/images/demos/demo-6/products/product-3-2.jpg" alt="Product image" className="product-image-hover" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Clothing</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Printed sweatshirt</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                <span className="new-price">Now $7.99</span>
                                                <span className="old-price">Was $12.99</span>
                                            </div>{/* End .product-price */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product product-7 text-center">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-6/products/product-4-1.jpg" alt="Product image" className="product-image" />
                                                <img src="assets/images/demos/demo-6/products/product-4-2.jpg" alt="Product image" className="product-image-hover" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Clothing</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Linen-blend paper bag trousers</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $17.99
                        </div>{/* End .product-price */}
                                            <div className="product-nav product-nav-thumbs">
                                                <a href="#" className="active">
                                                    <img src="assets/images/demos/demo-6/products/product-4-thumb.jpg" alt="product desc" />
                                                </a>
                                                <a href="#">
                                                    <img src="assets/images/demos/demo-6/products/product-4-2-thumb.jpg" alt="product desc" />
                                                </a>
                                            </div>{/* End .product-nav */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product product-7 text-center">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-6/products/product-1-1.jpg" alt="Product image" className="product-image" />
                                                <img src="assets/images/demos/demo-6/products/product-1-2.jpg" alt="Product image" className="product-image-hover" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Clothing</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Denim jacket</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $19.99
                        </div>{/* End .product-price */}
                                            <div className="product-nav product-nav-thumbs">
                                                <a href="#" className="active">
                                                    <img src="assets/images/demos/demo-6/products/product-1-thumb.jpg" alt="product desc" />
                                                </a>
                                                <a href="#">
                                                    <img src="assets/images/demos/demo-6/products/product-1-2-thumb.jpg" alt="product desc" />
                                                </a>
                                                <a href="#">
                                                    <img src="assets/images/demos/demo-6/products/product-1-3-thumb.jpg" alt="product desc" />
                                                </a>
                                            </div>{/* End .product-nav */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                </div>{/* End .owl-carousel */}
                            </div>{/* .End .tab-pane */}
                            <div className="tab-pane p-0 fade" id="trending-women-tab" role="tabpanel" aria-labelledby="trending-women-link">
                                <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                &quot;nav&quot;: false, 
                                &quot;dots&quot;: true,
                                &quot;margin&quot;: 20,
                                &quot;loop&quot;: false,
                                &quot;responsive&quot;: {
                                    &quot;0&quot;: {
                                        &quot;items&quot;:0
                                    },
                                    &quot;480&quot;: {
                                        &quot;items&quot;:2
                                    },
                                    &quot;768&quot;: {
                                        &quot;items&quot;:3
                                    },
                                    &quot;992&quot;: {
                                        &quot;items&quot;:4
                                    },
                                    &quot;1200&quot;: {
                                        &quot;items&quot;:4,
                                        &quot;nav&quot;: true,
                                        &quot;dots&quot;: false
                                    }
                                }
                            }">
                                    <div className="product product-7 text-center">
                                        <figure className="product-media">
                                            <span className="product-label label-sale">sale</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-6/products/product-3-1.jpg" alt="Product image" className="product-image" />
                                                <img src="assets/images/demos/demo-6/products/product-3-2.jpg" alt="Product image" className="product-image-hover" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Clothing</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Printed sweatshirt</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                <span className="new-price">Now $7.99</span>
                                                <span className="old-price">Was $12.99</span>
                                            </div>{/* End .product-price */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product product-7 text-center">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-6/products/product-4-1.jpg" alt="Product image" className="product-image" />
                                                <img src="assets/images/demos/demo-6/products/product-4-2.jpg" alt="Product image" className="product-image-hover" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Clothing</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Linen-blend paper bag trousers</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $17.99
                        </div>{/* End .product-price */}
                                            <div className="product-nav product-nav-thumbs">
                                                <a href="#" className="active">
                                                    <img src="assets/images/demos/demo-6/products/product-4-thumb.jpg" alt="product desc" />
                                                </a>
                                                <a href="#">
                                                    <img src="assets/images/demos/demo-6/products/product-4-2-thumb.jpg" alt="product desc" />
                                                </a>
                                            </div>{/* End .product-nav */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                    <div className="product product-7 text-center">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-6/products/product-1-1.jpg" alt="Product image" className="product-image" />
                                                <img src="assets/images/demos/demo-6/products/product-1-2.jpg" alt="Product image" className="product-image-hover" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Clothing</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Denim jacket</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $19.99
                        </div>{/* End .product-price */}
                                            <div className="product-nav product-nav-thumbs">
                                                <a href="#" className="active">
                                                    <img src="assets/images/demos/demo-6/products/product-1-thumb.jpg" alt="product desc" />
                                                </a>
                                                <a href="#">
                                                    <img src="assets/images/demos/demo-6/products/product-1-2-thumb.jpg" alt="product desc" />
                                                </a>
                                                <a href="#">
                                                    <img src="assets/images/demos/demo-6/products/product-1-3-thumb.jpg" alt="product desc" />
                                                </a>
                                            </div>{/* End .product-nav */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                </div>{/* End .owl-carousel */}
                            </div>{/* .End .tab-pane */}
                            <div className="tab-pane p-0 fade" id="trending-men-tab" role="tabpanel" aria-labelledby="trending-men-link">
                                <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" data-owl-options="{
                                &quot;nav&quot;: false, 
                                &quot;dots&quot;: true,
                                &quot;margin&quot;: 20,
                                &quot;loop&quot;: false,
                                &quot;responsive&quot;: {
                                    &quot;0&quot;: {
                                        &quot;items&quot;:0
                                    },
                                    &quot;480&quot;: {
                                        &quot;items&quot;:2
                                    },
                                    &quot;768&quot;: {
                                        &quot;items&quot;:3
                                    },
                                    &quot;992&quot;: {
                                        &quot;items&quot;:4
                                    },
                                    &quot;1200&quot;: {
                                        &quot;items&quot;:4,
                                        &quot;nav&quot;: true,
                                        &quot;dots&quot;: false
                                    }
                                }
                            }">
                                    <div className="product product-7 text-center">
                                        <figure className="product-media">
                                            <span className="product-label label-sale">sale</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-6/products/product-3-1.jpg" alt="Product image" className="product-image" />
                                                <img src="assets/images/demos/demo-6/products/product-3-2.jpg" alt="Product image" className="product-image-hover" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Clothing</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Printed sweatshirt</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                <span className="new-price">Now $7.99</span>
                                                <span className="old-price">Was $12.99</span>
                                            </div>{/* End .product-price */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                </div>{/* End .owl-carousel */}
                            </div>{/* .End .tab-pane */}
                        </div>{/* End .tab-content */}
                    </div>{/* End .container */}
                    <div className="mb-5" />{/* End .mb-5 */}
                    <div className="deal bg-image pt-8 pb-8" style={{ backgroundImage: 'url(assets/images/demos/demo-6/deal/bg-1.jpg)' }}>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-sm-12 col-md-8 col-lg-6">
                                    <div className="deal-content text-center">
                                        <h4>Limited quantities. </h4>
                                        <h2>Deal of the Day</h2>
                                        <div className="deal-countdown" data-until="+10h" />{/* End .deal-countdown */}
                                    </div>{/* End .deal-content */}
                                    <div className="row deal-products">
                                        <div className="col-6 deal-product text-center">
                                            <figure className="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-6/deal/product-1.jpg" alt="Product image" className="product-image" />
                                                </a>
                                            </figure>{/* End .product-media */}
                                            <div className="product-body">
                                                <h3 className="product-title"><a href="product.html">Elasticated cotton shorts</a></h3>{/* End .product-title */}
                                                <div className="product-price">
                                                    <span className="new-price">Now $24.99</span>
                                                    <span className="old-price">Was $30.99</span>
                                                </div>{/* End .product-price */}
                                            </div>{/* End .product-body */}
                                            <a href="category.html" className="action">shop now</a>
                                        </div>
                                        <div className="col-6 deal-product text-center">
                                            <figure className="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/demos/demo-6/deal/product-2.jpg" alt="Product image" className="product-image" />
                                                </a>
                                            </figure>{/* End .product-media */}
                                            <div className="product-body">
                                                <h3 className="product-title"><a href="product.html">Fine-knit jumper</a></h3>{/* End .product-title */}
                                                <div className="product-price">
                                                    <span className="new-price">Now $8.99</span>
                                                    <span className="old-price">Was $17.99</span>
                                                </div>{/* End .product-price */}
                                            </div>{/* End .product-body */}
                                            <a href="category.html" className="action">shop now</a>
                                        </div>
                                    </div>
                                </div>{/* End .col-lg-5 */}
                            </div>{/* End .row */}
                        </div>{/* End .container */}
                    </div>{/* End .deal */}
                    <div className="pt-4 pb-3" style={{ backgroundColor: '#222' }}>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-3 col-sm-6">
                                    <div className="icon-box text-center">
                                        <span className="icon-box-icon">
                                            <i className="icon-truck" />
                                        </span>
                                        <div className="icon-box-content">
                                            <h3 className="icon-box-title">Payment &amp; Delivery</h3>{/* End .icon-box-title */}
                                            <p>Free shipping for orders over $50</p>
                                        </div>{/* End .icon-box-content */}
                                    </div>{/* End .icon-box */}
                                </div>{/* End .col-lg-3 col-sm-6 */}
                                <div className="col-lg-3 col-sm-6">
                                    <div className="icon-box text-center">
                                        <span className="icon-box-icon">
                                            <i className="icon-rotate-left" />
                                        </span>
                                        <div className="icon-box-content">
                                            <h3 className="icon-box-title">Return &amp; Refund</h3>{/* End .icon-box-title */}
                                            <p>Free 100% money back guarantee</p>
                                        </div>{/* End .icon-box-content */}
                                    </div>{/* End .icon-box */}
                                </div>{/* End .col-lg-3 col-sm-6 */}
                                <div className="col-lg-3 col-sm-6">
                                    <div className="icon-box text-center">
                                        <span className="icon-box-icon">
                                            <i className="icon-unlock" />
                                        </span>
                                        <div className="icon-box-content">
                                            <h3 className="icon-box-title">Secure Payment</h3>{/* End .icon-box-title */}
                                            <p>100% secure payment</p>
                                        </div>{/* End .icon-box-content */}
                                    </div>{/* End .icon-box */}
                                </div>{/* End .col-lg-3 col-sm-6 */}
                                <div className="col-lg-3 col-sm-6">
                                    <div className="icon-box text-center">
                                        <span className="icon-box-icon">
                                            <i className="icon-headphones" />
                                        </span>
                                        <div className="icon-box-content">
                                            <h3 className="icon-box-title">Quality Support</h3>{/* End .icon-box-title */}
                                            <p>Alway online feedback 24/7</p>
                                        </div>{/* End .icon-box-content */}
                                    </div>{/* End .icon-box */}
                                </div>{/* End .col-lg-3 col-sm-6 */}
                            </div>{/* End .row */}
                        </div>{/* End .container */}
                    </div>{/* End .bg-light pt-2 pb-2 */}
                    <div className="mb-6" />{/* End .mb-5 */}
                    <div className="container">
                        <h2 className="title text-center mb-4">New Arrivals</h2>{/* End .title text-center */}
                        <div className="products">
                            <div className="row justify-content-center">
                                <div className="col-6 col-md-4 col-lg-3">
                                    <div className="product product-7 text-center">
                                        <figure className="product-media">
                                            <span className="product-label label-sale">Sale</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-6/products/product-5-1.jpg" alt="Product image" className="product-image" />
                                                <img src="assets/images/demos/demo-6/products/product-5-2.jpg" alt="Product image" className="product-image-hover" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Clothing</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Tie-detail top</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                <span className="new-price">Now $3.99</span>
                                                <span className="old-price">Was $6.99</span>
                                            </div>{/* End .product-price */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
                                <div className="col-6 col-md-4 col-lg-3">
                                    <div className="product product-7 text-center">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-6/products/product-6-1.jpg" alt="Product image" className="product-image" />
                                                <img src="assets/images/demos/demo-6/products/product-6-2.jpg" alt="Product image" className="product-image-hover" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Shoes</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Sandals</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $12.99
                        </div>{/* End .product-price */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
                                <div className="col-6 col-md-4 col-lg-3">
                                    <div className="product product-7 text-center">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-6/products/product-7-1.jpg" alt="Product image" className="product-image" />
                                                <img src="assets/images/demos/demo-6/products/product-7-2.jpg" alt="Product image" className="product-image-hover" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Bags</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Small bucket bag</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $14.99
                        </div>{/* End .product-price */}
                                            <div className="product-nav product-nav-thumbs">
                                                <a href="#" className="active">
                                                    <img src="assets/images/demos/demo-6/products/product-7-thumb.jpg" alt="product desc" />
                                                </a>
                                                <a href="#">
                                                    <img src="assets/images/demos/demo-6/products/product-7-2-thumb.jpg" alt="product desc" />
                                                </a>
                                            </div>{/* End .product-nav */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
                                <div className="col-6 col-md-4 col-lg-3">
                                    <div className="product product-7 text-center">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-6/products/product-8-1.jpg" alt="Product image" className="product-image" />
                                                <img src="assets/images/demos/demo-6/products/product-8-2.jpg" alt="Product image" className="product-image-hover" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Clothing</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Denim jacket</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $34.99
                        </div>{/* End .product-price */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
                                <div className="col-6 col-md-4 col-lg-3">
                                    <div className="product product-7 text-center">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-6/products/product-9-1.jpg" alt="Product image" className="product-image" />
                                                <img src="assets/images/demos/demo-6/products/product-9-2.jpg" alt="Product image" className="product-image-hover" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Clothing</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">BShort wrap dress</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $17.99
                        </div>{/* End .product-price */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
                                <div className="col-6 col-md-4 col-lg-3">
                                    <div className="product product-7 text-center">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-6/products/product-10-1.jpg" alt="Product image" className="product-image" />
                                                <img src="assets/images/demos/demo-6/products/product-10-2.jpg" alt="Product image" className="product-image-hover" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Clothing</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Biker jacket</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $34.99
                        </div>{/* End .product-price */}
                                            <div className="product-nav product-nav-thumbs">
                                                <a href="#" className="active">
                                                    <img src="assets/images/demos/demo-6/products/product-10-thumb.jpg" alt="product desc" />
                                                </a>
                                                <a href="#">
                                                    <img src="assets/images/demos/demo-6/products/product-10-2-thumb.jpg" alt="product desc" />
                                                </a>
                                            </div>{/* End .product-nav */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
                                <div className="col-6 col-md-4 col-lg-3">
                                    <div className="product product-7 text-center">
                                        <figure className="product-media">
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-6/products/product-11-1.jpg" alt="Product image" className="product-image" />
                                                <img src="assets/images/demos/demo-6/products/product-11-2.jpg" alt="Product image" className="product-image-hover" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Shoes</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Loafers</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                $9.99
                        </div>{/* End .product-price */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
                                <div className="col-6 col-md-4 col-lg-3">
                                    <div className="product product-7 text-center">
                                        <figure className="product-media">
                                            <span className="product-label label-sale">sale</span>
                                            <a href="product.html">
                                                <img src="assets/images/demos/demo-6/products/product-12-1.jpg" alt="Product image" className="product-image" />
                                                <img src="assets/images/demos/demo-6/products/product-12-2.jpg" alt="Product image" className="product-image-hover" />
                                            </a>
                                            <div className="product-action-vertical">
                                                <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                                            </div>{/* End .product-action-vertical */}
                                            <div className="product-action">
                                                <a href="#" className="btn-product btn-cart"><span>add to cart</span></a>
                                            </div>{/* End .product-action */}
                                        </figure>{/* End .product-media */}
                                        <div className="product-body">
                                            <div className="product-cat">
                                                <a href="#">Clothing</a>
                                            </div>{/* End .product-cat */}
                                            <h3 className="product-title"><a href="product.html">Super Skinny High Jeggings</a></h3>{/* End .product-title */}
                                            <div className="product-price">
                                                <span className="new-price">Now $12.99</span>
                                                <span className="old-price">Was $17.99</span>
                                            </div>{/* End .product-price */}
                                        </div>{/* End .product-body */}
                                    </div>{/* End .product */}
                                </div>{/* End .col-sm-6 col-md-4 col-lg-3 */}
                            </div>{/* End .row */}
                        </div>{/* End .products */}
                        <div className="more-container text-center mt-2">
                            <a href="#" className="btn btn-outline-dark-2 btn-more"><span>show more</span></a>
                        </div>{/* End .more-container */}
                    </div>{/* End .container */}
                    <div className="pb-3">
                        <div className="container brands pt-5 pt-lg-7 ">
                            <h2 className="title text-center mb-4">shop by brands</h2>{/* End .title text-center */}
                            <div className="owl-carousel owl-simple" data-toggle="owl" data-owl-options="{
                            &quot;nav&quot;: false, 
                            &quot;dots&quot;: false,
                            &quot;margin&quot;: 30,
                            &quot;loop&quot;: false,
                            &quot;responsive&quot;: {
                                &quot;0&quot;: {
                                    &quot;items&quot;:2
                                },
                                &quot;420&quot;: {
                                    &quot;items&quot;:3
                                },
                                &quot;600&quot;: {
                                    &quot;items&quot;:4
                                },
                                &quot;900&quot;: {
                                    &quot;items&quot;:5
                                },
                                &quot;1024&quot;: {
                                    &quot;items&quot;:6
                                }
                            }
                        }">
                                <a href="#" className="brand">
                                    <img src="assets/images/brands/1.png" alt="Brand Name" />
                                </a>
                                <a href="#" className="brand">
                                    <img src="assets/images/brands/2.png" alt="Brand Name" />
                                </a>
                                <a href="#" className="brand">
                                    <img src="assets/images/brands/3.png" alt="Brand Name" />
                                </a>
                                <a href="#" className="brand">
                                    <img src="assets/images/brands/4.png" alt="Brand Name" />
                                </a>
                                <a href="#" className="brand">
                                    <img src="assets/images/brands/5.png" alt="Brand Name" />
                                </a>
                                <a href="#" className="brand">
                                    <img src="assets/images/brands/6.png" alt="Brand Name" />
                                </a>
                                <a href="#" className="brand">
                                    <img src="assets/images/brands/7.png" alt="Brand Name" />
                                </a>
                            </div>{/* End .owl-carousel */}
                        </div>{/* End .container */}
                        <div className="mb-5 mb-lg-7" />{/* End .mb-5 */}
                        <div className="container newsletter">
                            <div className="row">
                                <div className="col-lg-6 banner-overlay-div">
                                    <div className="banner banner-overlay">
                                        <a href="#">
                                            <img src="assets/images/demos/demo-6/banners/banner-3.jpg" alt="Banner" />
                                        </a>
                                        <div className="banner-content banner-content-center">
                                            <h4 className="banner-subtitle text-white"><a href="#">Limited time only.</a></h4>{/* End .banner-subtitle */}
                                            <h3 className="banner-title text-white"><a href="#">End of Season<br />save 50% off</a></h3>{/* End .banner-title */}
                                            <a href="#" className="btn btn-outline-white banner-link underline">Shop Now</a>
                                        </div>{/* End .banner-content */}
                                    </div>{/* End .banner */}
                                </div>{/* End .col-lg-6 */}
                                <div className="col-lg-6 d-flex align-items-stretch subscribe-div">
                                    <div className="cta cta-box">
                                        <div className="cta-content">
                                            <h3 className="cta-title">Subscribe To Our Newsletter</h3>{/* End .cta-title */}
                                            <p>Sign up now for <span className="primary-color">10% discount</span> on first order. Customise my news:</p>
                                            <form action="#">
                                                <input type="email" className="form-control" placeholder="Enter your Email Address" aria-label="Email Adress" required />
                                                <div className="text-center">
                                                    <button className="btn btn-outline-dark-2" type="submit"><span>subscribe</span></button>
                                                </div>{/* End .text-center */}
                                            </form>
                                        </div>{/* End .cta-content */}
                                    </div>{/* End .cta */}
                                </div>{/* End .col-lg-6 */}
                            </div>{/* End .row */}
                        </div>{/* End .container */}
                    </div>{/* End .bg-gray */}
                    <div className="mb-2" />{/* End .mb-5 */}
                    <div className="container">
                    </div>{/* End .container */}
                    <div className="blog-posts mb-5">
                        <div className="container">
                            <h2 className="title text-center mb-4">From Our Blog</h2>{/* End .title text-center */}
                            <div className="owl-carousel owl-simple mb-3" data-toggle="owl" data-owl-options="{
                            &quot;nav&quot;: false, 
                            &quot;dots&quot;: true,
                            &quot;items&quot;: 3,
                            &quot;margin&quot;: 20,
                            &quot;loop&quot;: false,
                            &quot;responsive&quot;: {
                                &quot;0&quot;: {
                                    &quot;items&quot;:1
                                },
                                &quot;600&quot;: {
                                    &quot;items&quot;:2
                                },
                                &quot;992&quot;: {
                                    &quot;items&quot;:3
                                }
                            }
                        }">
                                <article className="entry">
                                    <figure className="entry-media">
                                        <a href="single.html">
                                            <img src="assets/images/demos/demo-6/blog/post-1.jpg" alt="image desc" />
                                        </a>
                                    </figure>{/* End .entry-media */}
                                    <div className="entry-body text-center">
                                        <div className="entry-meta">
                                            <a href="#">Nov 22, 2018</a>, 1 Comments
                      </div>{/* End .entry-meta */}
                                        <h3 className="entry-title">
                                            <a href="single.html">Sed adipiscing ornare.</a>
                                        </h3>{/* End .entry-title */}
                                        <div className="entry-content">
                                            <a href="single.html" className="read-more">Read More</a>
                                        </div>{/* End .entry-content */}
                                    </div>{/* End .entry-body */}
                                </article>{/* End .entry */}
                                <article className="entry">
                                    <figure className="entry-media">
                                        <a href="single.html">
                                            <img src="assets/images/demos/demo-6/blog/post-2.jpg" alt="image desc" />
                                        </a>
                                    </figure>{/* End .entry-media */}
                                    <div className="entry-body text-center">
                                        <div className="entry-meta">
                                            <a href="#">Dec 12, 2018</a>, 0 Comments
                      </div>{/* End .entry-meta */}
                                        <h3 className="entry-title">
                                            <a href="single.html">Fusce lacinia arcuet nulla.</a>
                                        </h3>{/* End .entry-title */}
                                        <div className="entry-content">
                                            <a href="single.html" className="read-more">Read More</a>
                                        </div>{/* End .entry-content */}
                                    </div>{/* End .entry-body */}
                                </article>{/* End .entry */}
                                <article className="entry">
                                    <figure className="entry-media">
                                        <a href="single.html">
                                            <img src="assets/images/demos/demo-6/blog/post-3.jpg" alt="image desc" />
                                        </a>
                                    </figure>{/* End .entry-media */}
                                    <div className="entry-body text-center">
                                        <div className="entry-meta">
                                            <a href="#">Dec 19, 2018</a>, 2 Comments
                      </div>{/* End .entry-meta */}
                                        <h3 className="entry-title">
                                            <a href="single.html">Quisque volutpat mattis eros.</a>
                                        </h3>{/* End .entry-title */}
                                        <div className="entry-content">
                                            <a href="single.html" className="read-more">Read More</a>
                                        </div>{/* End .entry-content */}
                                    </div>{/* End .entry-body */}
                                </article>{/* End .entry */}
                            </div>{/* End .owl-carousel */}
                        </div>{/* End .container */}
                    </div>{/* End .blog-posts */}
                </main>{/* End .main */}
                <footer className="footer">
                    <div className="footer-middle">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 col-lg-3">
                                    <div className="widget widget-about">
                                        <h4 className="widget-title">about molla</h4>{/* End .widget-title */}
                                        <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. </p>
                                        <div className="social-icons">
                                            <a href="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f" /></a>
                                            <a href="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter" /></a>
                                            <a href="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram" /></a>
                                            <a href="#" className="social-icon" title="Youtube" target="_blank"><i className="icon-youtube" /></a>
                                        </div>{/* End .soial-icons */}
                                    </div>{/* End .widget about-widget */}
                                </div>{/* End .col-sm-6 col-lg-3 */}
                                <div className="col-sm-6 col-lg-3">
                                    <div className="widget">
                                        <h4 className="widget-title">Useful Links</h4>{/* End .widget-title */}
                                        <ul className="widget-list">
                                            <li><a href="about.html">About Molla</a></li>
                                            <li><a href="#">How to shop on Molla</a></li>
                                            <li><a href="#">FAQ</a></li>
                                            <li><a href="contact.html">Contact us</a></li>
                                            <li><a href="login.html">Log in</a></li>
                                        </ul>{/* End .widget-list */}
                                    </div>{/* End .widget */}
                                </div>{/* End .col-sm-6 col-lg-3 */}
                                <div className="col-sm-6 col-lg-3">
                                    <div className="widget">
                                        <h4 className="widget-title">Customer Service</h4>{/* End .widget-title */}
                                        <ul className="widget-list">
                                            <li><a href="#">Payment Methods</a></li>
                                            <li><a href="#">Money-back guarantee!</a></li>
                                            <li><a href="#">Returns</a></li>
                                            <li><a href="#">Shipping</a></li>
                                            <li><a href="#">Terms and conditions</a></li>
                                            <li><a href="#">Privacy Policy</a></li>
                                        </ul>{/* End .widget-list */}
                                    </div>{/* End .widget */}
                                </div>{/* End .col-sm-6 col-lg-3 */}
                                <div className="col-sm-6 col-lg-3">
                                    <div className="widget">
                                        <h4 className="widget-title">My Account</h4>{/* End .widget-title */}
                                        <ul className="widget-list">
                                            <li><a href="#">Sign In</a></li>
                                            <li><a href="cart.html">View Cart</a></li>
                                            <li><a href="#">My Wishlist</a></li>
                                            <li><a href="#">Track My Order</a></li>
                                            <li><a href="#">Help</a></li>
                                        </ul>{/* End .widget-list */}
                                    </div>{/* End .widget */}
                                </div>{/* End .col-sm-6 col-lg-3 */}
                            </div>{/* End .row */}
                        </div>{/* End .container */}
                    </div>{/* End .footer-middle */}
                    <div className="footer-bottom">
                        <div className="container">
                            <figure className="footer-payments">
                                <img src="assets/images/payments.png" alt="Payment methods" width={272} height={20} />
                            </figure>{/* End .footer-payments */}
                            <img src="assets/images/demos/demo-6/logo-footer.png" alt="Molla Logo" width={82} height={25} />
                            <p className="footer-copyright">Copyright ?? 2019 Molla Store. All Rights Reserved.</p>{/* End .footer-copyright */}
                        </div>{/* End .container */}
                    </div>{/* End .footer-bottom */}
                </footer>{/* End .footer */}
            </div>{/* End .page-wrapper */}
            <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up" /></button>
            {/* Mobile Menu */}
            <div className="mobile-menu-overlay" />{/* End .mobil-menu-overlay */}
            <div className="mobile-menu-container">
                <div className="mobile-menu-wrapper">
                    <span className="mobile-menu-close"><i className="icon-close" /></span>
                    <form action="#" method="get" className="mobile-search">
                        <label htmlFor="mobile-search" className="sr-only">Search</label>
                        <input type="search" className="form-control" name="mobile-search" id="mobile-search" placeholder="Search in..." required />
                        <button className="btn btn-primary" type="submit"><i className="icon-search" /></button>
                    </form>
                    <nav className="mobile-nav">
                        <ul className="mobile-menu">
                            <li className="active">
                                <a href="index.html">Home</a>
                                <ul>
                                    <li><a href="index-1.html">01 - furniture store</a></li>
                                    <li><a href="index-2.html">02 - furniture store</a></li>
                                    <li><a href="index-3.html">03 - electronic store</a></li>
                                    <li><a href="index-4.html">04 - electronic store</a></li>
                                    <li><a href="index-5.html">05 - fashion store</a></li>
                                    <li><a href="index-6.html">06 - fashion store</a></li>
                                    <li><a href="index-7.html">07 - fashion store</a></li>
                                    <li><a href="index-8.html">08 - fashion store</a></li>
                                    <li><a href="index-9.html">09 - fashion store</a></li>
                                    <li><a href="index-10.html">10 - shoes store</a></li>
                                    <li><a href="index-11.html">11 - furniture simple store</a></li>
                                    <li><a href="index-12.html">12 - fashion simple store</a></li>
                                    <li><a href="index-13.html">13 - market</a></li>
                                    <li><a href="index-14.html">14 - market fullwidth</a></li>
                                    <li><a href="index-15.html">15 - lookbook 1</a></li>
                                    <li><a href="index-16.html">16 - lookbook 2</a></li>
                                    <li><a href="index-17.html">17 - fashion store</a></li>
                                    <li><a href="index-18.html">18 - fashion store (with sidebar)</a></li>
                                    <li><a href="index-19.html">19 - games store</a></li>
                                    <li><a href="index-20.html">20 - book store</a></li>
                                    <li><a href="index-21.html">21 - sport store</a></li>
                                    <li><a href="index-22.html">22 - tools store</a></li>
                                    <li><a href="index-23.html">23 - fashion left navigation store</a></li>
                                    <li><a href="index-24.html">24 - extreme sport store</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="category.html">Shop</a>
                                <ul>
                                    <li><a href="category-list.html">Shop List</a></li>
                                    <li><a href="category-2cols.html">Shop Grid 2 Columns</a></li>
                                    <li><a href="category.html">Shop Grid 3 Columns</a></li>
                                    <li><a href="category-4cols.html">Shop Grid 4 Columns</a></li>
                                    <li><a href="category-boxed.html"><span>Shop Boxed No Sidebar<span className="tip tip-hot">Hot</span></span></a></li>
                                    <li><a href="category-fullwidth.html">Shop Fullwidth No Sidebar</a></li>
                                    <li><a href="product-category-boxed.html">Product Category Boxed</a></li>
                                    <li><a href="product-category-fullwidth.html"><span>Product Category Fullwidth<span className="tip tip-new">New</span></span></a></li>
                                    <li><a href="cart.html">Cart</a></li>
                                    <li><a href="checkout.html">Checkout</a></li>
                                    <li><a href="wishlist.html">Wishlist</a></li>
                                    <li><a href="#">Lookbook</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="product.html" className="sf-with-ul">Product</a>
                                <ul>
                                    <li><a href="product.html">Default</a></li>
                                    <li><a href="product-centered.html">Centered</a></li>
                                    <li><a href="product-extended.html"><span>Extended Info<span className="tip tip-new">New</span></span></a></li>
                                    <li><a href="product-gallery.html">Gallery</a></li>
                                    <li><a href="product-sticky.html">Sticky Info</a></li>
                                    <li><a href="product-sidebar.html">Boxed With Sidebar</a></li>
                                    <li><a href="product-fullwidth.html">Full Width</a></li>
                                    <li><a href="product-masonry.html">Masonry Sticky Info</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Pages</a>
                                <ul>
                                    <li>
                                        <a href="about.html">About</a>
                                        <ul>
                                            <li><a href="about.html">About 01</a></li>
                                            <li><a href="about-2.html">About 02</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="contact.html">Contact</a>
                                        <ul>
                                            <li><a href="contact.html">Contact 01</a></li>
                                            <li><a href="contact-2.html">Contact 02</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="login.html">Login</a></li>
                                    <li><a href="faq.html">FAQs</a></li>
                                    <li><a href="404.html">Error 404</a></li>
                                    <li><a href="coming-soon.html">Coming Soon</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="blog.html">Blog</a>
                                <ul>
                                    <li><a href="blog.html">Classic</a></li>
                                    <li><a href="blog-listing.html">Listing</a></li>
                                    <li>
                                        <a href="#">Grid</a>
                                        <ul>
                                            <li><a href="blog-grid-2cols.html">Grid 2 columns</a></li>
                                            <li><a href="blog-grid-3cols.html">Grid 3 columns</a></li>
                                            <li><a href="blog-grid-4cols.html">Grid 4 columns</a></li>
                                            <li><a href="blog-grid-sidebar.html">Grid sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Masonry</a>
                                        <ul>
                                            <li><a href="blog-masonry-2cols.html">Masonry 2 columns</a></li>
                                            <li><a href="blog-masonry-3cols.html">Masonry 3 columns</a></li>
                                            <li><a href="blog-masonry-4cols.html">Masonry 4 columns</a></li>
                                            <li><a href="blog-masonry-sidebar.html">Masonry sidebar</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Mask</a>
                                        <ul>
                                            <li><a href="blog-mask-grid.html">Blog mask grid</a></li>
                                            <li><a href="blog-mask-masonry.html">Blog mask masonry</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Single Post</a>
                                        <ul>
                                            <li><a href="single.html">Default with sidebar</a></li>
                                            <li><a href="single-fullwidth.html">Fullwidth no sidebar</a></li>
                                            <li><a href="single-fullwidth-sidebar.html">Fullwidth with sidebar</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="elements-list.html">Elements</a>
                                <ul>
                                    <li><a href="elements-products.html">Products</a></li>
                                    <li><a href="elements-typography.html">Typography</a></li>
                                    <li><a href="elements-titles.html">Titles</a></li>
                                    <li><a href="elements-banners.html">Banners</a></li>
                                    <li><a href="elements-product-category.html">Product Category</a></li>
                                    <li><a href="elements-video-banners.html">Video Banners</a></li>
                                    <li><a href="elements-buttons.html">Buttons</a></li>
                                    <li><a href="elements-accordions.html">Accordions</a></li>
                                    <li><a href="elements-tabs.html">Tabs</a></li>
                                    <li><a href="elements-testimonials.html">Testimonials</a></li>
                                    <li><a href="elements-blog-posts.html">Blog Posts</a></li>
                                    <li><a href="elements-portfolio.html">Portfolio</a></li>
                                    <li><a href="elements-cta.html">Call to Action</a></li>
                                    <li><a href="elements-icon-boxes.html">Icon Boxes</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>{/* End .mobile-nav */}
                    <div className="social-icons">
                        <a href="#" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f" /></a>
                        <a href="#" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter" /></a>
                        <a href="#" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram" /></a>
                        <a href="#" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube" /></a>
                    </div>{/* End .social-icons */}
                </div>{/* End .mobile-menu-wrapper */}
            </div>{/* End .mobile-menu-container */}
            {/* Sign in / Register Modal */}
            <div className="modal fade" id="signin-modal" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="icon-close" /></span>
                            </button>
                            <div className="form-box">
                                <div className="form-tab">
                                    <ul className="nav nav-pills nav-fill" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="signin-tab" data-toggle="tab" href="#signin" role="tab" aria-controls="signin" aria-selected="true">Sign In</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="register-tab" data-toggle="tab" href="#register" role="tab" aria-controls="register" aria-selected="false">Register</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="tab-content-5">
                                        <div className="tab-pane fade show active" id="signin" role="tabpanel" aria-labelledby="signin-tab">
                                            <form action="#">
                                                <div className="form-group">
                                                    <label htmlFor="singin-email">Username or email address *</label>
                                                    <input type="text" className="form-control" id="singin-email" name="singin-email" required />
                                                </div>{/* End .form-group */}
                                                <div className="form-group">
                                                    <label htmlFor="singin-password">Password *</label>
                                                    <input type="password" className="form-control" id="singin-password" name="singin-password" required />
                                                </div>{/* End .form-group */}
                                                <div className="form-footer">
                                                    <button type="submit" className="btn btn-outline-primary-2">
                                                        <span>LOG IN</span>
                                                        <i className="icon-long-arrow-right" />
                                                    </button>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="signin-remember" />
                                                        <label className="custom-control-label" htmlFor="signin-remember">Remember Me</label>
                                                    </div>{/* End .custom-checkbox */}
                                                    <a href="#" className="forgot-link">Forgot Your Password?</a>
                                                </div>{/* End .form-footer */}
                                            </form>
                                            <div className="form-choice">
                                                <p className="text-center">or sign in with</p>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <a href="#" className="btn btn-login btn-g">
                                                            <i className="icon-google" />
                                Login With Google
                              </a>
                                                    </div>{/* End .col-6 */}
                                                    <div className="col-sm-6">
                                                        <a href="#" className="btn btn-login btn-f">
                                                            <i className="icon-facebook-f" />
                                Login With Facebook
                              </a>
                                                    </div>{/* End .col-6 */}
                                                </div>{/* End .row */}
                                            </div>{/* End .form-choice */}
                                        </div>{/* .End .tab-pane */}
                                        <div className="tab-pane fade" id="register" role="tabpanel" aria-labelledby="register-tab">
                                            <form action="#">
                                                <div className="form-group">
                                                    <label htmlFor="register-email">Your email address *</label>
                                                    <input type="email" className="form-control" id="register-email" name="register-email" required />
                                                </div>{/* End .form-group */}
                                                <div className="form-group">
                                                    <label htmlFor="register-password">Password *</label>
                                                    <input type="password" className="form-control" id="register-password" name="register-password" required />
                                                </div>{/* End .form-group */}
                                                <div className="form-footer">
                                                    <button type="submit" className="btn btn-outline-primary-2">
                                                        <span>SIGN UP</span>
                                                        <i className="icon-long-arrow-right" />
                                                    </button>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="register-policy" required />
                                                        <label className="custom-control-label" htmlFor="register-policy">I agree to the <a href="#">privacy policy</a> *</label>
                                                    </div>{/* End .custom-checkbox */}
                                                </div>{/* End .form-footer */}
                                            </form>
                                            <div className="form-choice">
                                                <p className="text-center">or sign in with</p>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <a href="#" className="btn btn-login btn-g">
                                                            <i className="icon-google" />
                                Login With Google
                              </a>
                                                    </div>{/* End .col-6 */}
                                                    <div className="col-sm-6">
                                                        <a href="#" className="btn btn-login  btn-f">
                                                            <i className="icon-facebook-f" />
                                Login With Facebook
                              </a>
                                                    </div>{/* End .col-6 */}
                                                </div>{/* End .row */}
                                            </div>{/* End .form-choice */}
                                        </div>{/* .End .tab-pane */}
                                    </div>{/* End .tab-content */}
                                </div>{/* End .form-tab */}
                            </div>{/* End .form-box */}
                        </div>{/* End .modal-body */}
                    </div>{/* End .modal-content */}
                </div>{/* End .modal-dialog */}
            </div>{/* End .modal */}
            <div className="container newsletter-popup-container mfp-hide" id="newsletter-popup-form">
                <div className="row justify-content-center">
                    <div className="col-10">
                        <div className="row no-gutters bg-white newsletter-popup-content">
                            <div className="col-xl-3-5col col-lg-7 banner-content-wrap">
                                <div className="banner-content text-center">
                                    <img src="assets/images/popup/newsletter/logo.png" className="logo" alt="logo" width={60} height={15} />
                                    <h2 className="banner-title">get <span>25<light>%</light></span> off</h2>
                                    <p>Subscribe to the Molla eCommerce newsletter to receive timely updates from your favorite products.</p>
                                    <form action="#">
                                        <div className="input-group input-group-round">
                                            <input type="email" className="form-control form-control-white" placeholder="Your Email Address" aria-label="Email Adress" required />
                                            <div className="input-group-append">
                                                <button className="btn" type="submit"><span>go</span></button>
                                            </div>{/* .End .input-group-append */}
                                        </div>{/* .End .input-group */}
                                    </form>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="register-policy-2" required />
                                        <label className="custom-control-label" htmlFor="register-policy-2">Do not show this popup again</label>
                                    </div>{/* End .custom-checkbox */}
                                </div>
                            </div>
                            <div className="col-xl-2-5col col-lg-5 ">
                                <img src="assets/images/popup/newsletter/img-1.jpg" className="newsletter-img" alt="newsletter" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;