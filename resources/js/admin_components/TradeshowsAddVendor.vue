<template>
    <div class="main-container">
        <!-- Header -->
        <adm-header></adm-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="tradeshowform-div">
                    <div class="page-title pink-title-bg">
                        <span><a> Trade shows </a> / Add Vendor </span>
                    </div>

                    <div class="tradeshowform-main main-div">

                        <div class="row m-0">
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="First Name" required="true" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="Last Name" required="true" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="Company" required="true" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                        </div>

                        <div class="row m-0 mt30">
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="Job Title" required="true" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="Email" required="true" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="Contact" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>

                        </div>

                        <div class="row m-0 mt30">
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="SF Vendor Code" required="true" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="Password" required="true" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="RE-Enter Password" required="true" name=""
                                                  id="" inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                        </div>

                        <div class="row m-0 mb30 mt40">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="overflow-auto">
                                    <table class="tradeshowform-table">
                                        <tbody>
                                        <tr class="pink-dynamic-cl">
                                            <td>
                                                <checkbox label="Select All" cbvalue="1"></checkbox>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        <tradeshow-form-table-row cblabel="Christchurch" cbvalue="1"
                                                                  tsdate="5th August 2019" tstime="1:30 - 4:30pm"
                                                                  tsdescription="Westport Stadium"
                                                                  tsprice="$800" dropdownname="dropdownname"
                                                                  selectPlaceholder="Number of Attendees"></tradeshow-form-table-row>
                                        <tradeshow-form-table-row cblabel="Christchurch" cbvalue="1"
                                                                  tsdate="5th August 2019" tstime="1:30 - 4:30pm"
                                                                  tsdescription="Westport Stadium"
                                                                  tsprice="$800" dropdownname="dropdownname"
                                                                  selectPlaceholder="Number of Attendees"></tradeshow-form-table-row>
                                        <tradeshow-form-table-row cblabel="Christchurch" cbvalue="1"
                                                                  tsdate="5th August 2019" tstime="1:30 - 4:30pm"
                                                                  tsdescription="Westport Stadium"
                                                                  tsprice="$800" dropdownname="dropdownname"
                                                                  selectPlaceholder="Number of Attendees"></tradeshow-form-table-row>
                                        <tradeshow-form-table-row cblabel="Christchurch" cbvalue="1"
                                                                  tsdate="5th August 2019" tstime="1:30 - 4:30pm"
                                                                  tsdescription="Westport Stadium"
                                                                  tsprice="$800" dropdownname="dropdownname"
                                                                  selectPlaceholder="Number of Attendees"></tradeshow-form-table-row>
                                        <tradeshow-form-table-row cblabel="Christchurch" cbvalue="1"
                                                                  tsdate="5th August 2019" tstime="1:30 - 4:30pm"
                                                                  tsdescription="Westport Stadium"
                                                                  tsprice="$800" dropdownname="dropdownname"
                                                                  selectPlaceholder="Number of Attendees"></tradeshow-form-table-row>
                                        <tradeshow-form-table-row cblabel="Christchurch" cbvalue="1"
                                                                  tsdate="5th August 2019" tstime="1:30 - 4:30pm"
                                                                  tsdescription="Westport Stadium"
                                                                  tsprice="$800" dropdownname="dropdownname"
                                                                  selectPlaceholder="Number of Attendees"></tradeshow-form-table-row>


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="row m-0 mb30 mt40">
                            <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
                                <input-text-block inputlabel="Electric Appliances You May Be Using" type="text" name=""
                                                  id="" inputClass="input-textbox"
                                                  placeholder="Laptop, Fry Pan"></input-text-block>
                            </div>
                            <div class="col-lg-2 col-md-6 col-sm-12 col-xs-12 xs-mt-25 sm-mt-25">
                                <input-text-block inputlabel="Voltage Required" type="text" name="" id=""
                                                  inputClass="input-textbox"></input-text-block>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 xs-mt-25 sm-mt-25">
                                <div class="w80 float-left">
                                    <select-box drpdwnlabel="How Many" dropdownName="dropdownname"
                                                :dropdwnOptions="dropdwnOptions" selectPlaceholder=""></select-box>
                                </div>
                                <div class="w20 float-right">
                                    <small-icon-block fontAwesomeClass="fa fa-plus" inputLabel="label"></small-icon-block>
                                </div>
                            </div>
                        </div>
                        <div class="row m-0 mb30 mt30">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <input-text-block inputlabel="Comments" type="text" name="" id=""
                                                  inputClass="input-textbox" placeholder="Optional"></input-text-block>
                            </div>
                        </div>

                        <div class="row m-0 mt30">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 item-box">
                                <a class="btn mt1 mb1 mr15 green-bg">Add</a>
                                <a class="btn mt1 mb1">Discard</a>
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
    import SelectBox from '../partials/SelectBox.vue'
    import Checkbox from '../partials/Checkbox.vue'
    import InputTextBlock from '../partials/InputTextBlock'
    import TradeshowFormTableRow from '../partials/TradeshowFormTableRow.vue'
    import SmallIconBlock from '../partials/SmallIconBlock.vue'

    export default {
        data() {
            return {
                dropdwnOptions: [
                    {label: 'Option1', value: '1'},
                    {label: 'Option2', value: '2'},
                    {label: 'Option3', value: '3'},
                ]
            }
        },
        components: {
            AdmHeader, TradeshowFormTableRow, SelectBox, Checkbox, InputTextBlock, SmallIconBlock
        }
    }
</script>
<style lang="scss">
</style>