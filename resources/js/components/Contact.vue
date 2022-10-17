<template>
    <div class="main-container">
        <!-- Header -->
        <app-header></app-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="contact-div">
                    <div class="page-title brown-title-bg">
                        <span>Contact us</span>
                    </div>

                    <div class="contact-main main-div">
                    <div class="row m-0">
                        <div class="col-sm-6 col-md-4">
                            <contact-block contact-name="LISA MO" contact-title="NATIONAL CATEGORY MANAGER"
                                           t-content="021 540 528"
                                           e-content="L.mo@servicefoods.co.nz"></contact-block>
                            <contact-block contact-name="CATHY YEE" contact-title="MARKETING" t-content="027 542 5218"
                                           e-content="Cathy@servicefoods.co.nz"></contact-block>
                            <contact-block contact-name="SURESH SHETTY" contact-title="ACCOUNTS PAYABLE"
                                           p-content="09 258 5020" e-content="Ap@servicefoods.co.nz"></contact-block>
                            <contact-block contact-title="AUCKLAND FOODSERVICE" p-content="09 258 5010"
                                           e-content="Aklbuyers@servicefoods.co.nz" address="17 Saleyards Road, Otahuhu, Auckland"></contact-block>
                            <contact-block contact-title="AUCKLAND FRESH" p-content="09 258 5010"
                                           e-content="Akl-ProdBuyer@servicefoods.co.nz" e-e-content="Akl-MeatBuyer@servicefoods.co.nz" address="132 Portage Road, Otahuhu, Auckland"></contact-block>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <contact-block contact-title="HAMILTON FOODSERVICE & FRESH" p-content="07 981 2250"
                                           e-content="Aklbuyers@servicefoods.co.nz"
                                           address="7 Mainstreet Place, Te Rapa, Hamilton"></contact-block>
                            <contact-block contact-title="COROMANDEL FOODSERVICE & FRESH" p-content="07 981 2250"
                                           e-content="Aklbuyers@servicefoods.co.nz" address="7 Mainstreet Place, Te Rapa, Hamilton"></contact-block>
                            <contact-block contact-title="ROTORUA FOODSERVICE" p-content="07 346 0902"
                                           e-content="Rot-Buyers@servicefoods.co.nz"></contact-block>
                            <contact-block contact-title="TAURANGA FOODSERVICE & FRESH" p-content="07 541 0137"
                                           e-content="ProdBuyer@servicefoods.co.nz" address="71 Maleme Street, Greerton, Tauranga"></contact-block>
                            <contact-block contact-title="NAPIER FOODSERVICE" p-content="06 843 7779"
                                           e-content="Np-Buyers@servicefoods.co.nz" address="12 Turner Place, Onekawa, Napier"></contact-block>
                            <contact-block contact-title="GISBORNE FOODSERVICE" p-content="06 867 3599"
                                           e-content="Gb-Buyers@servicefoods.co.nz" address="21 Parkinson Street, Awapuni, Gisborne"></contact-block>
                        </div>
                        <div class="col-sm-12 col-md-4">
                            <contact-block contact-title="WELLINGTON FOODSERVICE" p-content="04 586 2162"
                                           e-content="Wn-buyers@servicefoods.co.nz" address="136 Gracefield Road, Gracefield, Lower Hutt"></contact-block>
                            <contact-block contact-title="WELLINGTON FRESH DIVISION" p-content="04 974 5626"
                                           e-content="Wn-ProdBuyer@servicefoods.co.nz"
                                           address="52 Jamaica Drive, Grenada North, Wellington"></contact-block>
                            <contact-block contact-title="CHRISTCHURCH FOODSERVICE & FRESH" p-content="03 389 9909"
                                           e-content="Ch-Buyers@servicefoods.co.nz" e-e-content="Ch-ProdBuyer@servicefoods.co.nz" address="220 Cumnor Terrace, Woolston, Christchurch"></contact-block>
                            <contact-block contact-title="GREYMOUTH FOODSERVICE" p-content="03 368 7143"
                                           e-content="Gm-Buyers@servicefoods.co.nz" address="68 Alexander Street, Greymouth"></contact-block>
                            <contact-block contact-title="WESTPORT FOODSERVICE" p-content="03 789 7577"
                                           e-content="Wp-Buyers@servicefoods.co.nz"
                                           address="15 Bentham Sreet, Westport"></contact-block>
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
    import ContactBlock from '../partials/ContactBlock.vue'

    export default {
        components: {
            AppHeader, AppFooter, ContactBlock
        }
    }
</script>
<style lang="scss">



</style>