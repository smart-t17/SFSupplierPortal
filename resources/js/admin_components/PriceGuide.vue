<template>
    <div class="main-container">
        <!-- Header -->
        <adm-header></adm-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="adm-priceguide-div">
                    <div class="page-title darkgreen-title-bg">
                        <span>Price Guide</span>
                    </div>

                    <div class="adm-priceguide-main main-div gray-bg">
                        <div class="row m-0">
                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <div class="xs-table-scroll xs-mt-15">
                                    <table class="monthly-table pricing-table">
                                        <pricing-guide-table-header dynamicClass="brown-heading-cl"
                                                                    firstColumnHeading="MONTHLY SPECIALS"
                                                                    secondColumnHeading="SPACE"
                                                                    thirdColumnHeading="PRICE"></pricing-guide-table-header>
                                        <tbody>

                                        <tr>
                                            <td>Front Page</td>
                                            <td>1 Space</td>
                                            <td>
                                                <div><!----> <input type="text" name="" id="" required="required"
                                                                    placeholder="" class="input-textbox"></div>
                                            </td>
                                            <td>
                                                <div class="float-right price-edit"><a href="" class="pr5"><img
                                                        src="/images/price_right.png?3d04709041a7adbc2cd3592c6ab1d8e7"></a><a
                                                        href=""><img
                                                        src="/images/price_close.png?740e5f76c3af22da93f9926d82c100e9"></a>
                                                </div>
                                            </td>
                                        </tr>
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

                                    <button-block btnClass="mt30 mr10 green-bg" btnLabel="Save Changes"></button-block>
                                    <button-block btnClass="mt30" btnLabel="Discard"></button-block>

                                </div>
                            </div>
                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <div class="xs-table-scroll xs-mt-40 sm-mt-40">
                                    <table class="tradeshow-table pricing-table">
                                        <pricing-guide-table-header dynamicClass="brown-heading-cl"
                                                                    firstColumnHeading="TRADE SHOWS"
                                                                    secondColumnHeading="PRICE"></pricing-guide-table-header>
                                        <tbody>
                                        <pricing-guide-tradeshow-row first-column-content="Christchurch"
                                                                     second-column-content="$800"></pricing-guide-tradeshow-row>
                                        <pricing-guide-tradeshow-row first-column-content="Christchurch"
                                                                     second-column-content="$800"></pricing-guide-tradeshow-row>
                                        <pricing-guide-tradeshow-row first-column-content="Christchurch"
                                                                     second-column-content="$800"></pricing-guide-tradeshow-row>
                                        <pricing-guide-tradeshow-row first-column-content="Christchurch"
                                                                     second-column-content="$800"></pricing-guide-tradeshow-row>
                                        <pricing-guide-tradeshow-row first-column-content="Christchurch"
                                                                     second-column-content="$800"></pricing-guide-tradeshow-row>
                                        <pricing-guide-tradeshow-row first-column-content="Christchurch"
                                                                     second-column-content="$800"></pricing-guide-tradeshow-row>
                                        <pricing-guide-tradeshow-row first-column-content="Christchurch"
                                                                     second-column-content="$800"></pricing-guide-tradeshow-row>
                                        <pricing-guide-tradeshow-row first-column-content="Christchurch"
                                                                     second-column-content="$800"></pricing-guide-tradeshow-row>
                                        <pricing-guide-tradeshow-row first-column-content="Christchurch"
                                                                     second-column-content="$800"></pricing-guide-tradeshow-row>
                                        <pricing-guide-tradeshow-row first-column-content="Christchurch"
                                                                     second-column-content="$800"></pricing-guide-tradeshow-row>

                                        </tbody>
                                    </table>
                                    <button-block btnClass="mt30 mr10 green-bg" btnLabel="Save Changes"></button-block>
                                    <button-block btnClass="mt30" btnLabel="Discard"></button-block>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                <div class="xs-table-scroll xs-mt-40 sm-mt-40">
                                    <table class="annual-table pricing-table">
                                        <pricing-guide-table-header dynamicClass="brown-heading-cl"
                                                                    firstColumnHeading="ANNUAL CATALOGUE"
                                                                    secondColumnHeading="PRICE"></pricing-guide-table-header>
                                        <tbody>
                                        <pricing-guide-annual-row first-column-content="Quarter Page"
                                                                  second-column-content="$480"></pricing-guide-annual-row>
                                        <pricing-guide-annual-row first-column-content="Quarter Page"
                                                                  second-column-content="$480"></pricing-guide-annual-row>
                                        <pricing-guide-annual-row first-column-content="Quarter Page"
                                                                  second-column-content="$480"></pricing-guide-annual-row>
                                        <pricing-guide-annual-row first-column-content="Quarter Page"
                                                                  second-column-content="$480"></pricing-guide-annual-row>
                                        <pricing-guide-annual-row first-column-content="Quarter Page"
                                                                  second-column-content="$480"></pricing-guide-annual-row>
                                        <pricing-guide-annual-row first-column-content="Quarter Page"
                                                                  second-column-content="$480"></pricing-guide-annual-row>
                                        <pricing-guide-annual-row first-column-content="Quarter Page"
                                                                  second-column-content="$480"></pricing-guide-annual-row>
                                        <pricing-guide-annual-row first-column-content="Quarter Page"
                                                                  second-column-content="$480"></pricing-guide-annual-row>

                                        </tbody>
                                    </table>
                                    <button-block btnClass="mt30 mr10 green-bg" btnLabel="Save Changes"></button-block>
                                    <button-block btnClass="mt30" btnLabel="Discard"></button-block>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- Main End -->


    </div>
</template>
<script>
    import AdmHeader from '../admin_components/Header.vue'
    import PricingGuideTableHeader from '../admin_partials/PricingGuideTableHeader.vue'
    import PricingGuideMonthlyRow from '../admin_partials/PricingGuideMonthlyRow.vue'
    import PricingGuideTradeshowRow from '../admin_partials/PricingGuideTradeshowRow.vue'
    import PricingGuideAnnualRow from '../admin_partials/PricingGuideAnnualRow.vue'
    import ButtonBlock from '../partials/ButtonBlock.vue'

    export default {
        components: {
            AdmHeader,
            PricingGuideTableHeader,
            PricingGuideMonthlyRow,
            PricingGuideTradeshowRow,
            PricingGuideAnnualRow,
            ButtonBlock
        }
    }
</script>
<style lang="scss">
</style>