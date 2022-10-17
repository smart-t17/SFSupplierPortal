<template>
    <div class="main-container">
        <!-- Header -->
        <app-header></app-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="myproducts-div">
                    <div class="page-title purple-title-bg">
                        <span>My Products</span>
                    </div>

                    <div class="myproducts-main main-div">
                        <div id="datatable" class="datatable">
                            <v-client-table :data="tableData" :columns="columns" :options="options">
                                <div slot="action" slot-scope="props" class="action-btn">
                                    <a class="fa fa-edit"></a>
                                </div>
                            </v-client-table>
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
    import SmallIconBlock from '../partials/SmallIconBlock.vue'
    import DatatableButtons from '../partials/DatatableButtons.vue'
    import Vue from 'vue'
    import {ServerTable, ClientTable, Event} from 'vue-tables-2'

    Vue.use(ClientTable, {}, false, 'bootstrap4', 'default');

    export default {
        data() {
            return {
                columns: ['VENDOR_PRODUCT_CODE', 'DESCRIPTION', 'BRAND', 'UOM', 'action'],
                tableData: [
                    {
                        id: "1",
                        VENDOR_PRODUCT_CODE: "IT005",
                        DESCRIPTION: "MIXED MINI DANISH 120’S",
                        BRAND: "GOURMAND",
                        UOM: "CTN"
                    },
                    {
                        id: "2",
                        VENDOR_PRODUCT_CODE: "IT005",
                        DESCRIPTION: "MIXED MINI DANISH 120’S",
                        BRAND: "GOURMAND",
                        UOM: "CTN"
                    },
                    {
                        id: "3",
                        VENDOR_PRODUCT_CODE: "IT005",
                        DESCRIPTION: "MIXED MINI DANISH 120’S",
                        BRAND: "GOURMAND",
                        UOM: "CTN"
                    },
                    {
                        id: "4",
                        VENDOR_PRODUCT_CODE: "IT005",
                        DESCRIPTION: "MIXED MINI DANISH 120’S",
                        BRAND: "GOURMAND",
                        UOM: "CTN"
                    },
                    {
                        id: "1",
                        VENDOR_PRODUCT_CODE: "IT005",
                        DESCRIPTION: "MIXED MINI DANISH 120’S",
                        BRAND: "GOURMAND",
                        UOM: "CTN"
                    },
                    {
                        id: "2",
                        VENDOR_PRODUCT_CODE: "IT005",
                        DESCRIPTION: "MIXED MINI DANISH 120’S",
                        BRAND: "GOURMAND",
                        UOM: "CTN"
                    },
                    {
                        id: "3",
                        VENDOR_PRODUCT_CODE: "IT005",
                        DESCRIPTION: "MIXED MINI DANISH 120’S",
                        BRAND: "GOURMAND",
                        UOM: "CTN"
                    },
                    {
                        id: "4",
                        VENDOR_PRODUCT_CODE: "IT005",
                        DESCRIPTION: "MIXED MINI DANISH 120’S",
                        BRAND: "GOURMAND",
                        UOM: "CTN"
                    },
                    {
                        id: "1",
                        VENDOR_PRODUCT_CODE: "IT005",
                        DESCRIPTION: "MIXED MINI DANISH 120’S",
                        BRAND: "GOURMAND",
                        UOM: "CTN"
                    },
                    {
                        id: "2",
                        VENDOR_PRODUCT_CODE: "IT005",
                        DESCRIPTION: "MIXED MINI DANISH 120’S",
                        BRAND: "GOURMAND",
                        UOM: "CTN"
                    },
                    {
                        id: "3",
                        VENDOR_PRODUCT_CODE: "IT005",
                        DESCRIPTION: "MIXED MINI DANISH 120’S",
                        BRAND: "GOURMAND",
                        UOM: "CTN"
                    },
                    {
                        id: "4",
                        VENDOR_PRODUCT_CODE: "IT005",
                        DESCRIPTION: "MIXED MINI DANISH 120’S",
                        BRAND: "GOURMAND",
                        UOM: "CTN"
                    },
                ],
                options: {
                    perPageValues: [10, 20, 30, 40, 50],
                    texts: {filterPlaceholder: "Search"},
                    sortable: ['VENDOR_PRODUCT_CODE', 'DESCRIPTION', 'BRAND', 'UOM']
                    // see the options API
                }
            }
        },
        components: {
            AppHeader, AppFooter, SmallIconBlock, DatatableButtons
        }
    }
</script>
<style lang="scss">
</style>