<template>
    <div class="main-container">
        <!-- Header -->
        <adm-header></adm-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="adm-ts-events-div">
                    <div class="page-title pink-title-bg">
                        <span> <a href="">Trade shows</a> / Events </span>
                    </div>

                    <div class="adm-ts-events-main main-div gray-bg">
                        <div class="row m-0">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div id="datatable" class="datatable">
                                    <v-client-table :data="tableData" :columns="columns" :options="options">
                                        <div slot="ACTION" slot-scope="props" class="action-btn">
                                            <a class="fa fa-edit" href="/tradeshows/adm-event"></a>
                                        </div>
                                        <div slot="afterFilter" class="datatable-filter-div">
                                            <datatable-buttons actionClass="datatable-filter ml5"
                                                               fontAwesomeClass="fa-upload"
                                                               actionLabel="Export"></datatable-buttons>
                                            <datatable-buttons actionClass="datatable-filter ml5"
                                                               fontAwesomeClass="fa-share"
                                                               actionLabel="Share"></datatable-buttons>

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
                columns: ['ID', 'NAME', 'CITY', 'VENUE', 'SHOW_DATE', 'REGISTRATION_START_DATE', 'REGISTRATION_END_DATE', 'START_TIME', 'END_TIME', 'ACTION'],
                tableData: [
                    {
                        ID: 1,
                        NAME: "Westport Trade Show",
                        CITY: "Christchurch",
                        VENUE: "Alexandra Park",
                        SHOW_DATE: "5th August 2019",
                        REGISTRATION_START_DATE: "1st March 2019",
                        REGISTRATION_END_DATE: "5th August 2019",
                        START_TIME: " 1:30pm",
                        END_TIME: "5:00pm",
                        ACTION: ""
                    },
                    {
                        ID: 2,
                        NAME: "Westport Trade Show",
                        CITY: "Christchurch",
                        VENUE: "Alexandra Park",
                        SHOW_DATE: "5th August 2019",
                        REGISTRATION_START_DATE: "1st March 2019",
                        REGISTRATION_END_DATE: "5th August 2019",
                        START_TIME: " 1:30pm",
                        END_TIME: "5:00pm",
                        ACTION: ""
                    },
                    {
                        ID: 3,
                        NAME: "Westport Trade Show",
                        CITY: "Christchurch",
                        VENUE: "Alexandra Park",
                        SHOW_DATE: "5th August 2019",
                        REGISTRATION_START_DATE: "1st March 2019",
                        REGISTRATION_END_DATE: "5th August 2019",
                        START_TIME: " 1:30pm",
                        END_TIME: "5:00pm",
                        ACTION: ""
                    },
                    {
                        ID: 4,
                        NAME: "Westport Trade Show",
                        CITY: "Christchurch",
                        VENUE: "Alexandra Park",
                        SHOW_DATE: "5th August 2019",
                        REGISTRATION_START_DATE: "1st March 2019",
                        REGISTRATION_END_DATE: "5th August 2019",
                        START_TIME: " 1:30pm",
                        END_TIME: "5:00pm",
                        ACTION: ""
                    },
                    {
                        ID: 5,
                        NAME: "Westport Trade Show",
                        CITY: "Christchurch",
                        VENUE: "Alexandra Park",
                        SHOW_DATE: "5th August 2019",
                        REGISTRATION_START_DATE: "1st March 2019",
                        REGISTRATION_END_DATE: "5th August 2019",
                        START_TIME: " 1:30pm",
                        END_TIME: "5:00pm",
                        ACTION: ""
                    },
                    {
                        ID: 6,
                        NAME: "Westport Trade Show",
                        CITY: "Christchurch",
                        VENUE: "Alexandra Park",
                        SHOW_DATE: "5th August 2019",
                        REGISTRATION_START_DATE: "1st March 2019",
                        REGISTRATION_END_DATE: "5th August 2019",
                        START_TIME: " 1:30pm",
                        END_TIME: "5:00pm",
                        ACTION: ""
                    },
                    {
                        ID: 7,
                        NAME: "Westport Trade Show",
                        CITY: "Christchurch",
                        VENUE: "Alexandra Park",
                        SHOW_DATE: "5th August 2019",
                        REGISTRATION_START_DATE: "1st March 2019",
                        REGISTRATION_END_DATE: "5th August 2019",
                        START_TIME: " 1:30pm",
                        END_TIME: "5:00pm",
                        ACTION: ""
                    },
                    {
                        ID: 8,
                        NAME: "Westport Trade Show",
                        CITY: "Christchurch",
                        VENUE: "Alexandra Park",
                        SHOW_DATE: "5th August 2019",
                        REGISTRATION_START_DATE: "1st March 2019",
                        REGISTRATION_END_DATE: "5th August 2019",
                        START_TIME: " 1:30pm",
                        END_TIME: "5:00pm",
                        ACTION: ""
                    },
                    {
                        ID: 9,
                        NAME: "Westport Trade Show",
                        CITY: "Christchurch",
                        VENUE: "Alexandra Park",
                        SHOW_DATE: "5th August 2019",
                        REGISTRATION_START_DATE: "1st March 2019",
                        REGISTRATION_END_DATE: "5th August 2019",
                        START_TIME: " 1:30pm",
                        END_TIME: "5:00pm",
                        ACTION: ""
                    },
                    {
                        ID: 10,
                        NAME: "Westport Trade Show",
                        CITY: "Christchurch",
                        VENUE: "Alexandra Park",
                        SHOW_DATE: "5th August 2019",
                        REGISTRATION_START_DATE: "1st March 2019",
                        REGISTRATION_END_DATE: "5th August 2019",
                        START_TIME: " 1:30pm",
                        END_TIME: "5:00pm",
                        ACTION: ""
                    },
                    {
                        ID: 11,
                        NAME: "Westport Trade Show",
                        CITY: "Christchurch",
                        VENUE: "Alexandra Park",
                        SHOW_DATE: "5th August 2019",
                        REGISTRATION_START_DATE: "1st March 2019",
                        REGISTRATION_END_DATE: "5th August 2019",
                        START_TIME: " 1:30pm",
                        END_TIME: "5:00pm",
                        ACTION: ""
                    },
                    {
                        ID: 12,
                        NAME: "Westport Trade Show",
                        CITY: "Christchurch",
                        VENUE: "Alexandra Park",
                        SHOW_DATE: "5th August 2019",
                        REGISTRATION_START_DATE: "1st March 2019",
                        REGISTRATION_END_DATE: "5th August 2019",
                        START_TIME: " 1:30pm",
                        END_TIME: "5:00pm",
                        ACTION: ""
                    },
                    {
                        ID: 13,
                        NAME: "Westport Trade Show",
                        CITY: "Christchurch",
                        VENUE: "Alexandra Park",
                        SHOW_DATE: "5th August 2019",
                        REGISTRATION_START_DATE: "1st March 2019",
                        REGISTRATION_END_DATE: "5th August 2019",
                        START_TIME: " 1:30pm",
                        END_TIME: "5:00pm",
                        ACTION: ""
                    },
                    {
                        ID: 14,
                        NAME: "Westport Trade Show",
                        CITY: "Christchurch",
                        VENUE: "Alexandra Park",
                        SHOW_DATE: "5th August 2019",
                        REGISTRATION_START_DATE: "1st March 2019",
                        REGISTRATION_END_DATE: "5th August 2019",
                        START_TIME: " 1:30pm",
                        END_TIME: "5:00pm",
                        ACTION: ""
                    },
                    {
                        ID: 15,
                        NAME: "Westport Trade Show",
                        CITY: "Christchurch",
                        VENUE: "Alexandra Park",
                        SHOW_DATE: "5th August 2019",
                        REGISTRATION_START_DATE: "1st March 2019",
                        REGISTRATION_END_DATE: "5th August 2019",
                        START_TIME: " 1:30pm",
                        END_TIME: "5:00pm",
                        ACTION: ""
                    },

                ],

                options: {
                    perPageValues: [10, 20, 30, 40, 50],
                    texts: {filterPlaceholder: "Search"},
                    sortable: []
                    // see the options API
                }
            }
        },
        components: {
            AdmHeader, DatatableButtons
        }
    }

</script>
<style lang="scss">
</style>