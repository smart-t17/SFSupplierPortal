<template>
    <div class="main-container">
        <!-- Header -->
        <app-header></app-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="pricingguide-div">
                    <div class="page-title darkgreen-title-bg">
                        <span>Pricing Guide</span>
                    </div>

                    <div class="pricingguide-main main-div">
                        <div class="container">
                            <div class="row m-0 mb30 padding33">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div class="xs-table-scroll">
                                        <table class="monthly-table pricing-table">
                                            <pricing-guide-table-header dynamicClass="green-cl"
                                                                        firstColumnHeading="MONTHLY SPECIALS"
                                                                        secondColumnHeading="PRICE"
                                                                        colspan="2"></pricing-guide-table-header>
                                            <tbody>
                                            <pricing-guide-monthly-row first-column-content="Front Page"
                                                                       second-column-content="1 Space"
                                                                       third-column-content="$395"></pricing-guide-monthly-row>
                                            <pricing-guide-monthly-row first-column-content="Front Page"
                                                                       second-column-content="2 x Spaces"
                                                                       third-column-content="$700"></pricing-guide-monthly-row>
                                            <pricing-guide-monthly-row first-column-content="Inside Page"
                                                                       second-column-content="1 Space"
                                                                       third-column-content="$240"></pricing-guide-monthly-row>
                                            <pricing-guide-monthly-row first-column-content="Inside Page"
                                                                       second-column-content="2 or more Spaces"
                                                                       third-column-content="$199"></pricing-guide-monthly-row>
                                            <pricing-guide-monthly-row first-column-content="Back Page"
                                                                       second-column-content="1 Space"
                                                                       third-column-content="$255"></pricing-guide-monthly-row>
                                            <pricing-guide-monthly-row first-column-content="Back Page"
                                                                       second-column-content="2 or more Spaces"
                                                                       third-column-content="$255"></pricing-guide-monthly-row>
                                            <pricing-guide-monthly-row first-column-content="Back Page"
                                                                       second-column-content="1 Full Page"
                                                                       third-column-content="$625"></pricing-guide-monthly-row>
                                            <pricing-guide-monthly-row first-column-content="Back Page"
                                                                       second-column-content="Half Page"
                                                                       third-column-content="$350"></pricing-guide-monthly-row>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div class="xs-table-scroll">
                                        <table class="tradeshow-table pricing-table mt30">
                                            <pricing-guide-table-header dynamicClass="pink-cl"
                                                                        firstColumnHeading="TRADE SHOWS"
                                                                        secondColumnHeading="PRICE"
                                                                        colspan="4"></pricing-guide-table-header>
                                            <tbody>
                                            <pricing-guide-tradeshow-row first-column-content="Christchurch"
                                                                         second-column-content="5th August, 2019"
                                                                         third-column-content="1:30 - 4:30pm"
                                                                         fourth-column-content="Addington Raceway and events center"
                                                                         fifth-column-content="$800"></pricing-guide-tradeshow-row>
                                            <pricing-guide-tradeshow-row first-column-content="Westport"
                                                                         second-column-content="6th August, 2019"
                                                                         third-column-content="1:30 - 4:30pm"
                                                                         fourth-column-content="Addington Raceway and events center"
                                                                         fifth-column-content="$500"></pricing-guide-tradeshow-row>
                                            <pricing-guide-tradeshow-row first-column-content="Auckland"
                                                                         second-column-content="12th August, 2019"
                                                                         third-column-content="1:30 - 4:30pm"
                                                                         fourth-column-content="Addington Raceway and events center"
                                                                         fifth-column-content="$800"></pricing-guide-tradeshow-row>
                                            <pricing-guide-tradeshow-row first-column-content="Hamilton"
                                                                         second-column-content="13th August, 2019"
                                                                         third-column-content="1:30 - 4:30pm"
                                                                         fourth-column-content="Addington Raceway and events center"
                                                                         fifth-column-content="$500"></pricing-guide-tradeshow-row>
                                            <pricing-guide-tradeshow-row first-column-content="Tauranga"
                                                                         second-column-content="19th August, 2019"
                                                                         third-column-content="1:30 - 4:30pm"
                                                                         fourth-column-content="Addington Raceway and events center"
                                                                         fifth-column-content="$500"></pricing-guide-tradeshow-row>
                                            <pricing-guide-tradeshow-row first-column-content="Rotorua"
                                                                         second-column-content="20th August, 2019"
                                                                         third-column-content="1:30 - 4:30pm"
                                                                         fourth-column-content="Addington Raceway and events center"
                                                                         fifth-column-content="$500"></pricing-guide-tradeshow-row>
                                            <pricing-guide-tradeshow-row first-column-content="Gisborne"
                                                                         second-column-content="26th August, 2019"
                                                                         third-column-content="1:30 - 4:30pm"
                                                                         fourth-column-content="Addington Raceway and events center"
                                                                         fifth-column-content="$500"></pricing-guide-tradeshow-row>
                                            <pricing-guide-tradeshow-row first-column-content="Napier"
                                                                         second-column-content="27th August, 2019"
                                                                         third-column-content="1:30 - 4:30pm"
                                                                         fourth-column-content="Addington Raceway and events center"
                                                                         fifth-column-content="$500"></pricing-guide-tradeshow-row>
                                            <pricing-guide-tradeshow-row first-column-content="Wellington"
                                                                         second-column-content="2nd September, 2019"
                                                                         third-column-content="1:30 - 4:30pm"
                                                                         fourth-column-content="Addington Raceway and events center"
                                                                         fifth-column-content="$500"></pricing-guide-tradeshow-row>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div class="xs-table-scroll">
                                        <table class="annual-table pricing-table mt30">
                                            <pricing-guide-table-header dynamicClass="sky-cl"
                                                                        firstColumnHeading="ANNUAL CATALOGUE"
                                                                        secondColumnHeading="PRICE"
                                                                        colspan="2"></pricing-guide-table-header>
                                            <tbody>
                                            <!--<pricing-guide-annual-row first-content="Quarter Page"
                                                                         second-content="93mm [W] * 137mm [H]"
                                                                         third-content="$480"
                                                                         fourth-content="+ Artwork Charges"
                                                                         fifth-content="$75"></pricing-guide-annual-row>-->

                                            <tr>
                                                <td>Quarter Page</td>
                                                <td>93mm [W] * 137mm [H]</td>
                                                <td>$480</td>
                                            </tr>
                                            <tr>
                                                <td colspan="2">+ Artwork Charges</td>
                                                <td>$75</td>
                                            </tr>

                                            <tr>
                                                <td>Quarter Page</td>
                                                <td>93mm [W] * 137mm [H]</td>
                                                <td>$480</td>
                                            </tr>
                                            <tr>
                                                <td colspan="2">+ Artwork Charges</td>
                                                <td>$75</td>
                                            </tr>

                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- Main End -->

        <!-- Footer -->
        <app-footer></app-footer>
        <!-- Footer End -->


    </div>
</template>
<script>
    import AppHeader from '../components/Header.vue'
    import AppFooter from '../components/Footer.vue'
    import PricingGuideTableHeader from '../partials/PricingGuideTableHeader.vue'
    import PricingGuideMonthlyRow from '../partials/PricingGuideMonthlyRow.vue'
    import PricingGuideTradeshowRow from '../partials/PricingGuideTradeshowRow.vue'
    import PricingGuideAnnualRow from '../partials/PricingGuideAnnualRow.vue'

    export default {
        components: {
            AppHeader,
            AppFooter,
            PricingGuideTableHeader,
            PricingGuideMonthlyRow,
            PricingGuideTradeshowRow,
            PricingGuideAnnualRow
        }
    }
</script>
<style lang="scss">


</style>