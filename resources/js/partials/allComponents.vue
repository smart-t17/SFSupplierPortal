<!--  For Text Box -->
<input-text-block type="text" inputlabel="" name="" id="" required="true" inputClass="input-textbox"
                  placeholder=""></input-text-block>

<!--  For Select Box -->
<select-box drpdwnlabel="SF BRANCH" dropdownName="dropdownname" :dropdwnOptions="dropdwnOptions"
            selectPlaceholder=""></select-box>

<!--  For CheckBox -->
<checkbox label="Create your Own Artwork" cbvalue="1"></checkbox>

<!--  For Buttons -->
<div class="row m-0 mt30">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 item-box">
        <a class="btn mt1 mb1 mr15">Save As Draft</a>
        <a class="btn mt1 mb1 green-bg">Submit</a>
    </div>
</div>
<button-block btnClass="mt30 mr10 green-bg" btnLabel="Save Changes"></button-block>
<button-block btnClass="mt30" btnLabel="Discard"></button-block>

<!-- Text area -->
<text-area-block textarealabel="FULL PRODUCT DESCRIPTION*" name="" id="" placeholder=""
                 required="true"></text-area-block>


<small-icon-block fontAwesomeClass="fa fa-plus" inputLabel="label"></small-icon-block>

<!-- Datatables -->
<div id="people">
    <v-client-table :data="tableData" :columns="columns" :options="options"></v-client-table>
</div>

<datatable-buttons actionClass="datatable-filter" fontAwesomeClass="fa-share" actionLabel="Share"></datatable-buttons>

<!-- Form Textarea -->
<form-text-area textarealabel="MESSAGE" name="" id="" required="" placeholder="" rows="5"></form-text-area>


<script>
    import InputTextBlock from '../partials/InputTextBlock.vue'
    import SelectBox from '../partials/SelectBox.vue'
    import Checkbox from '../partials/Checkbox.vue'
    import TextAreaBlock from '../partials/TextAreaBlock.vue'
    import SmallIconBlock from '../partials/SmallIconBlock.vue'
    import DatatableButtons from '../partials/DatatableButtons.vue'
    import ButtonBlock from '../partials/ButtonBlock.vue'
    import FormTextArea from '../partials/FormTextArea.vue'

    import Vue from 'vue'
    import {ServerTable, ClientTable, Event} from 'vue-tables-2'

    Vue.use(ClientTable, {}, false, 'bootstrap4', 'default');

    export default {
        data() {
            return {
                dropdwnOptions: [
                    {label: 'Option1', value: '1'},
                    {label: 'Option2', value: '2'},
                    {label: 'Option3', value: '3'},
                ],
                columns: ['id', 'name', 'age'],
                tableData: [
                    {id: 1, name: "John", age: "20"},
                    {id: 2, name: "Jane", age: "24"},
                    {id: 3, name: "Susan", age: "16"},
                    {id: 4, name: "Chris", age: "55"},
                    {id: 5, name: "Dan", age: "40"},
                    {id: 1, name: "John", age: "20"},
                    {id: 2, name: "Jane", age: "24"},
                    {id: 3, name: "Susan", age: "16"},
                    {id: 4, name: "Chris", age: "55"},
                    {id: 5, name: "Dan", age: "40"},
                    {id: 1, name: "John", age: "20"},
                    {id: 2, name: "Jane", age: "24"},
                    {id: 3, name: "Susan", age: "16"},
                    {id: 4, name: "Chris", age: "55"},
                    {id: 5, name: "Dan", age: "40"}
                ],
                options: {
                    perPageValues: [10, 20, 30, 40, 50],
                    texts: {filterPlaceholder: "Search"},
                    sortable: ['NAME', 'COMPANY', 'EMAIL', 'LOCATION', 'COMMENT']
                    // see the options API
                }
            }
        },
        components: {
            AppHeader, AppFooter
        }
    }
</script>


<!-- Page Format -->
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

    export default {
        components: {
            AppHeader, AppFooter
        }
    }
</script>
<style lang="scss">
</style>


<template>
    <div class="main-container">
        <!-- Header -->
        <app-header></app-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="adm-form-div">
                    <div class="page-title brown-title-bg">
                        <span>Contact us</span>
                    </div>

                    <div class="adm-form-main main-div adm-form-spacing">

                    </div>

                </div>
            </div>
        </div>
        <!-- Main End -->


    </div>
</template>
<script>
    import AppHeader from '../components/Header.vue'
    import InputTextBlock from '../partials/InputTextBlock.vue'
    import SelectBox from '../partials/SelectBox.vue'
    import ButtonBlock from '../partials/ButtonBlock.vue'

    export default {
        components: {
            AppHeader, InputTextBlock, SelectBox, ButtonBlock
        }
    }
</script>
<style lang="scss">
</style>