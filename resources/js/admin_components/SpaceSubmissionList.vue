<template>
    <div class="main-container">
        <!-- Header -->
        <adm-header></adm-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="adm-prospace-sublist-div">
                    <div class="page-title green-title-bg">
                        <span> Space Submission List </span>
                    </div>

                    <div class="adm-prospace-sublist-main main-div gray-bg">
                        <div class="row m-0">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div id="datatable" class="datatable">
                                    <v-client-table :data="tableData" :columns="columns" :options="options">
                                        <div slot="ACTION" slot-scope="props" class="action-btn">
                                            <a class="fa fa-edit"></a>
                                        </div>
                                    </v-client-table>
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
    import DatatableButtons from '../partials/DatatableButtons.vue'

    import Vue from 'vue'
    import {ServerTable, ClientTable, Event} from 'vue-tables-2'

    Vue.use(ClientTable, {}, false, 'bootstrap4', 'default');

    export default {
        data() {
            return {
                columns: ['ID' , 'SUBMISSION_MONTH', 'ACTION'],
                tableData: [
                    {ID: 1, SUBMISSION_MONTH: "January 2019" , ACTION: "" },
                    {ID: 2, SUBMISSION_MONTH: "January 2019" , ACTION: "" },
                    {ID: 3, SUBMISSION_MONTH: "January 2019" , ACTION: "" },
                    {ID: 4, SUBMISSION_MONTH: "January 2019" , ACTION: "" },
                    {ID: 5, SUBMISSION_MONTH: "January 2019" , ACTION: "" },
                    {ID: 6, SUBMISSION_MONTH: "January 2019" , ACTION: "" },
                    {ID: 7, SUBMISSION_MONTH: "January 2019" , ACTION: "" },
                    {ID: 8, SUBMISSION_MONTH: "January 2019" , ACTION: "" },
                    {ID: 9, SUBMISSION_MONTH: "January 2019" , ACTION: "" },
                ],

                options: {
                    perPageValues: [10, 20, 30, 40, 50],
                    texts: {filterPlaceholder: "Search"},
                    sortable: [ ]
                    // see the options API
                }
            }
        },
        components: {
            AdmHeader,DatatableButtons
        }
    }

</script>
<style lang="scss">
</style>