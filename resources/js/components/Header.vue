<template>
    <header class="header1">
        <div class="navbar-wrapper">
            <nav class="main-navbar navbar-fixed-top">
                <div class="container-fluid">
                    <div class="row m-0">
                    <div class="col-sm-6">
                        <!--<div id="navbar__hamburger-button" class="">
                            <button class="menu-toggle-btn" onclick="this.classList.toggle('on')">
                                <span>
                                    <span class="dash"></span>
                                    <span class="dash"></span>
                                    <span class="dash"></span>
                                </span>
                                <span>X</span>
                            </button>
                        </div>-->
                        <div class="service-food-logo">
                            <a href="dashboard">
                                <span class="display-block">SERVICE FOODS LTD</span>
                            </a>
                        </div>
                    </div>
                        <!--<div class="col-sm-6 d-none d-sm-block">-->
                        <div class="col-sm-6 d-none d-sm-block">
                        <div class="float-right mt3">
                            <div class="notifications d-inline-block">
                                <span class="count" id="notifications-count">5</span>
                                <span class="fa fa-bell-o bell-icon"></span>
                            </div>
                            <div class="user-drpdwn dropdown d-inline-block">
                                <button type="button" class="dropdown-toggle" data-toggle="dropdown">
                                    Sarah Jonas <i class="fa fa-caret-down"></i>
                                </button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="my-profile">My Profile</a>
                                    <a class="dropdown-item" data-toggle="modal" data-target="#resetPasswordModal">Reset Password</a>
                                    <a class="dropdown-item" href="#">Log Out</a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                </div>
            </nav>
        </div>


        <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu">
        <label for="openSidebarMenu" class="sidebarIconToggle">
            <div class="spinner diagonal part-1"></div>
            <!--<div class="spinner horizontal"></div>-->
            <div class="spinner diagonal part-2"></div>
        </label>
        <div id="sidebarMenu">
            <ul class="sidebarMenuInner desktop-menu d-none d-md-block">
                <li class="monthly-item">
                    <a href="">MONTHLY SPECIALS</a>
                    <ul class="list-group flex-column d-inline-block submenu">
                        <li class="list-group-item pl-4 heading">
                            <a class="">MONTHLY SPECIALS</a>
                        </li>
                        <li class="list-group-item pl-4">
                            <a href="monthly-submission-form" class="">SUBMISSION FORM</a>
                        </li>
                        <li class="list-group-item pl-4">
                            <a href="monthly-specials-library">MONTHLY SPECIALS LIBRARY</a>
                        </li>
                    </ul>
                </li>
                <li class="trade-item">
                    <a href="">TRADE SHOWS</a>
                    <ul class="list-group flex-column d-inline-block submenu">
                        <li class="list-group-item pl-4 heading">
                            <a class="">TRADE SHOWS</a>
                        </li>
                        <li class="list-group-item pl-4">
                            <a href="trade-show-form" class="">SUBMISSION FORM</a>
                        </li>
                        <li class="list-group-item pl-4">
                            <a href="tradeshow-customers">CUSTOMERS</a>
                        </li>
                        <li class="list-group-item pl-4">
                            <a href="tradeshow-comments">COMMENT</a>
                        </li>
                    </ul>
                </li>
                <li class="annual-item">
                    <a href="">ANNUAL CATALOGUES</a>
                    <ul class="list-group flex-column d-inline-block submenu">
                        <li class="list-group-item pl-4 heading">
                            <a class="">ANNUAL CATALOGUES</a>
                        </li>
                        <li class="list-group-item pl-4">
                            <a href="annual-catalogue-form" class="">SUBMISSION FORM</a>
                        </li>
                    </ul>
                </li>
                <li class="scan-item">
                    <a href="">SCAN BACK</a>
                    <ul class="list-group flex-column d-inline-block submenu">
                        <li class="list-group-item pl-4 heading">
                            <a class="">SCAN BACK</a>
                        </li>
                        <li class="list-group-item pl-4">
                            <a href="scan-back-form" class="">SUBMISSION FORM</a>
                        </li>
                    </ul>
                </li>

                <li class="presentation-item">
                    <a href="">Product Presentation</a>
                    <ul class="list-group flex-column d-inline-block submenu">
                        <li class="list-group-item pl-4 heading">
                            <a class="">Product Presentation</a>
                        </li>
                        <li class="list-group-item pl-4">
                            <a href="add-product-presentation" class="">ADD FORM</a>
                        </li>
                    </ul>
                </li>

                <li class="newproduct-item">
                    <a href="">NEW PRODUCT REQUEST FORM</a>
                    <ul class="list-group flex-column d-inline-block submenu">
                        <li class="list-group-item pl-4 heading">
                            <a class="">NEW PRODUCT REQUEST</a>
                        </li>
                        <li class="list-group-item pl-4">
                            <a href="new-product-request-form" class="">REQUEST FORM</a>
                        </li>
                    </ul>
                </li>
                <li class="pricing-item"><a href="pricing-guide">PRICING GUIDE</a></li>
                <li class="draft-item"><a href="drafts">DRAFTS <span class="menu-notification">(2) </span> </a></li>
                <li class="submission-item"><a href="my-submissions">MY SUBMISSIONS</a></li>
                <li class="myproducts-item">
                    <a href="">MY PRODUCTS</a>
                    <ul class="list-group flex-column d-inline-block submenu">
                        <li class="list-group-item pl-4 heading">
                            <a href="my-products" class="">MY PRODUCTS</a>
                        </li>
                        <li class="list-group-item pl-4">
                            <a href="edit-product-request-form" class="">EDIT REQUEST FORM</a>
                        </li>
                    </ul>
                </li>
                <li class="contact-item"><a href="contact-us">CONTACT</a></li>
            </ul>
            <ul class="sidebarMenuInner mobile-menu d-block d-md-none">
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingOne">
                            <h4 class="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne"
                                   aria-expanded="true" aria-controls="collapseOne">
                                    <i class="more-less "></i>
                                    MONTHLY SPECIALS
                                </a>
                            </h4>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse" role="tabpanel"
                             aria-labelledby="headingOne">
                            <div class="panel-body monthly-item">
                                <ul class="list-group flex-column submenu">
                                    <!--<li class="list-group-item pl-4 heading">
                                        <a href="#" class="">MONTHLY SPECIALS</a>
                                    </li>-->
                                    <li class="list-group-item pl-4">
                                        <a href="monthly-submission-form" class="">SUBMISSION FORM</a>
                                    </li>
                                    <li class="list-group-item pl-4">
                                        <a href="monthly-specials-library">MONTHLY SPECIALS LIBRARY</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingTwo">
                            <h4 class="panel-title">
                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                                   href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <i class="more-less "></i>
                                    TRADE SHOWS
                                </a>
                            </h4>
                        </div>
                        <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel"
                             aria-labelledby="headingTwo">
                            <div class="panel-body trade-item">
                                <ul class="list-group flex-column submenu">
                                    <!--<li class="list-group-item pl-4 heading">
                                        <a href="" class="">TRADE SHOWS</a>
                                    </li>-->
                                    <li class="list-group-item pl-4">
                                        <a href="trade-show-form" class="">SUBMISSION FORM</a>
                                    </li>
                                    <li class="list-group-item pl-4">
                                        <a href="tradeshow-customers">CUSTOMERS</a>
                                    </li>
                                    <li class="list-group-item pl-4">
                                        <a href="tradeshow-comments">COMMENT</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingThree">
                            <h4 class="panel-title">
                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                                   href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <i class="more-less "></i>
                                    ANNUAL CATALOGUES
                                </a>
                            </h4>
                        </div>
                        <div id="collapseThree" class="panel-collapse collapse" role="tabpanel"
                             aria-labelledby="headingThree">
                            <div class="panel-body annual-item">
                                <ul class="list-group flex-column submenu">
                                    <!--<li class="list-group-item pl-4 heading">
                                        <a href="#" class="">ANNUAL CATALOGUES</a>
                                    </li>-->
                                    <li class="list-group-item pl-4">
                                        <a href="annual-catalogue-form" class="">SUBMISSION FORM</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingFour">
                            <h4 class="panel-title">
                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                                   href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    <i class="more-less "></i>
                                    SCAN BACK
                                </a>
                            </h4>
                        </div>
                        <div id="collapseFour" class="panel-collapse collapse" role="tabpanel"
                             aria-labelledby="headingFour">
                            <div class="panel-body scan-item">
                                <ul class="list-group flex-column submenu">
                                    <!--<li class="list-group-item pl-4 heading">
                                        <a href="#" class="">SCAN BACK</a>
                                    </li>-->
                                    <li class="list-group-item pl-4">
                                        <a href="scan-back-form" class="">SUBMISSION FORM</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingFive">
                            <h4 class="panel-title">
                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                                   href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    <i class="more-less "></i>
                                    NEW PRODUCT REQUEST FORM
                                </a>
                            </h4>
                        </div>
                        <div id="collapseFive" class="panel-collapse collapse" role="tabpanel"
                             aria-labelledby="headingFive">
                            <div class="panel-body newproduct-item">
                                <ul class="list-group flex-column submenu">
                                    <!--<li class="list-group-item pl-4 heading">
                                        <a href="#" class="">NEW PRODUCT REQUEST</a>
                                    </li>-->
                                    <li class="list-group-item pl-4">
                                        <a href="new-product-request-form" class="">REQUEST FORM</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a href="pricing-guide">
                                    PRICING GUIDE
                                </a>
                            </h4>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a href="drafts">
                                    DRAFTS (2)
                                </a>
                            </h4>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a href="my-submissions">
                                    MY SUBMISSIONS
                                </a>
                            </h4>
                        </div>
                    </div>

                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingSix">
                            <h4 class="panel-title">
                                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                                   href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                    <i class="more-less "></i>
                                    MY PRODUCTS
                                </a>
                            </h4>
                        </div>
                        <div id="collapseSix" class="panel-collapse collapse" role="tabpanel"
                             aria-labelledby="headingSix">
                            <div class="panel-body myproducts-item">
                                <ul class="list-group flex-column submenu">
                                    <li class="list-group-item pl-4 heading">
                                        <a href="my-products" class="">MY PRODUCTS</a>
                                    </li>
                                    <li class="list-group-item pl-4">
                                        <a href="edit-product-request-form" class="">EDIT REQUEST FORM</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a href="contact-us">
                                    CONTACT
                                </a>
                            </h4>
                        </div>
                    </div>

                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a href="">
                                    Reset Password
                                </a>
                            </h4>
                        </div>
                    </div>


                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a href="">
                                    Log out
                                </a>
                            </h4>
                        </div>
                    </div>

                </div>
            </ul>
        </div>

    </header>
</template>
<style>

</style>
