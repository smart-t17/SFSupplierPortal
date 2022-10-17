<template>
    <div class="main-container">
        <!-- Header -->
        <adm-header></adm-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="newproductreq-div">
                    <div class="page-title purple-title-bg">
                        <span>My product Edit Request</span>
                    </div>
                    <div class="newproductreq-main main-div adm-form-main">

                        <div class="row m-0">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12"></div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <datatable-buttons actionClass="datatable-filter ml10" fontAwesomeClass="fa-share"
                                                   actionLabel="Share"></datatable-buttons>
                                <datatable-buttons actionClass="datatable-filter " fontAwesomeClass="fa-upload"
                                                   actionLabel="Export"></datatable-buttons>
                            </div>
                        </div>

                        <!--<div class="row m-0 mt30">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 item-box">
                                <div class="input-label"><label>IS THIS PRODUCT REQUESTED BY SF
                                    STAFF?</label></div>
                            </div>
                            <div class="col-lg-1 col-md-2 col-sm-2 col-xs-12 item-box">
                                <checkbox label="Yes" cbvalue="yes"></checkbox>
                                <checkbox label="No" cbvalue="no" class="d-block d-sm-none"></checkbox>
                            </div>
                            <div class="col-lg-6 col-md-5 col-sm-5 col-xs-12 item-box">
                                <input-text-block type="text" inputlabel="" name="" id="" required=""
                                                  inputClass="input-textbox"
                                                  placeholder="SF Staff Name"></input-text-block>
                            </div>
                            <div class="col-lg-5 col-md-5 col-sm-5 col-xs-12 item-box">
                                <select-box drpdwnlabel="" dropdownName="dropdownname"
                                            :dropdwnOptions="dropdwnOptions" selectPlaceholder="SF Branch"></select-box>
                            </div>
                            <div class="col-lg-1 col-md-2 col-sm-2 col-xs-12 item-box d-none d-sm-block">
                                <checkbox label="No" cbvalue="no"></checkbox>
                            </div>
                            <div class="col-lg-11 col-md-10 col-sm-10 col-xs-12 item-box"></div>
                        </div>-->

                        <div class="row m-0 mt30">
                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 item-box">
                                <input-text-block type="text" inputlabel="SF Product Code" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12 item-box">
                                <input-text-block type="text" inputlabel="SF Product Description" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                        </div>

                        <div class="row m-0 mt30">
                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 item-box">
                                <input-text-block type="text" inputlabel="Vendor Product Code" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12 item-box">
                                <input-text-block type="text" inputlabel="Brief Product Description" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                        </div>

                        <div class="row m-0 mt30">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 item-box">
                                <text-area-block textarealabel="Full Product Description" name="" id="" placeholder=""
                                ></text-area-block>
                            </div>
                        </div>

                        <div class="row m-0 mt30">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item-box">
                                <input-text-block type="text" inputlabel="Brand" name="" id=""
                                                  inputClass="input-textbox" placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item-box">
                                <input-text-block type="text" inputlabel="Country of Origin" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item-box">
                                <adm-input-file fileLabel="Product Image"
                                                fontAwsomeCls="fa-download"></adm-input-file>
                            </div>
                        </div>

                        <div class="row m-0 mt30">
                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 item-box">
                                <select-box drpdwnlabel="Category" dropdownName="dropdownname"
                                            :dropdwnOptions="dropdwnOptions" selectPlaceholder=""
                                ></select-box>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 item-box">
                                <select-box drpdwnlabel="MOQ Requirement" dropdownName="dropdownname"
                                            :dropdwnOptions="dropdwnOptions" selectPlaceholder=""
                                ></select-box>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 item-box">
                                <input-text-block type="text" inputlabel="MOQ Figure" name="" id=""
                                                  inputClass="input-textbox" placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 item-box">
                                <input-text-block type="text" inputlabel="Lead Time" name="" id=""
                                                  inputClass="input-textbox" placeholder=""></input-text-block>
                            </div>
                        </div>

                        <div class="row m-0 mt30">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item-box">
                                <input-text-block type="text" inputlabel="Product Shelf Life Time" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item-box">
                                <text-area-block textarealabel="Storage Instruction" name="" id="" placeholder=""
                                ></text-area-block>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item-box">
                                <input-text-block type="text" inputlabel="Product Website" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder="Insert Link"></input-text-block>
                            </div>
                        </div>

                    </div>
                    <hr>
                    <v-collapse-group :onlyOneActive="false">
                        <div class="newproductreq-main2 accordian-div accordian-div1 main-div">
                            <div class="row m-0">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                                    <v-collapse-wrapper @afterToggle="changeStatus"
                                                        :class="{active: status}">
                                        <div class="header" v-collapse-toggle>

                                            <label class="accordion-title">Inner/Base Product Information</label>
                                        </div>
                                        <div class="my-content" v-collapse-content>
                                            <div class="row mt30">
                                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <select-box drpdwnlabel="UOM" dropdownName="dropdownname"
                                                                :dropdwnOptions="dropdwnOptions" selectPlaceholder=""
                                                                required=""></select-box>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <input-text-block type="text" inputlabel="Pack Size" name="" id=""
                                                                      required="" inputClass="input-textbox"
                                                                      placeholder=""></input-text-block>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <input-text-block type="text" inputlabel="Net Content [Weight]"
                                                                      name=""
                                                                      id="" required="" inputClass="input-textbox"
                                                                      placeholder=""></input-text-block>
                                                </div>
                                            </div>
                                            <div class="row mt30">
                                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <input-text-block type="text" inputlabel="SF Buy Price" name=""
                                                                      id=""
                                                                      required="" inputClass="input-textbox"
                                                                      placeholder=""></input-text-block>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <input-text-block type="text" inputlabel="Currency" name="" id=""
                                                                      required="" inputClass="input-textbox"
                                                                      placeholder=""></input-text-block>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <input-text-block type="text" inputlabel="Barcode" name="" id=""
                                                                      required="" inputClass="input-textbox"
                                                                      placeholder=""></input-text-block>
                                                </div>
                                            </div>

                                        </div>
                                    </v-collapse-wrapper>
                                </div>
                            </div>
                        </div>

                        <hr>
                        <div class="newproductreq-main2 accordian-div accordian-div2 main-div">
                            <div class="row m-0">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                                    <v-collapse-wrapper @afterToggle="changeStatus1"
                                                        :class="{active: status1}">
                                        <div class="header" v-collapse-toggle>
                                            <label class="accordion-title">Outer/Carton Product Information</label>
                                        </div>
                                        <div class="my-content" v-collapse-content>
                                            <div class="row mt30">
                                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <select-box drpdwnlabel="UOM" dropdownName="dropdownname"
                                                                :dropdwnOptions="dropdwnOptions" selectPlaceholder=""
                                                                required=""></select-box>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <input-text-block type="text" inputlabel="Pack Size" name="" id=""
                                                                      required="" inputClass="input-textbox"
                                                                      placeholder=""></input-text-block>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <input-text-block type="text" inputlabel="Net Content [Weight]"
                                                                      name=""
                                                                      id="" required="" inputClass="input-textbox"
                                                                      placeholder=""></input-text-block>
                                                </div>

                                            </div>
                                            <div class="row mt30">
                                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <input-text-block type="text" inputlabel="SF Buy Price" name=""
                                                                      id=""
                                                                      required="" inputClass="input-textbox"
                                                                      placeholder=""></input-text-block>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <input-text-block type="text" inputlabel="Currency" name="" id=""
                                                                      required="" inputClass="input-textbox"
                                                                      placeholder=""></input-text-block>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <input-text-block type="text" inputlabel="Barcode" name="" id=""
                                                                      required="" inputClass="input-textbox"
                                                                      placeholder=""></input-text-block>
                                                </div>
                                            </div>

                                        </div>
                                    </v-collapse-wrapper>
                                </div>
                            </div>
                        </div>

                        <hr>
                        <div class="newproductreq-main2 accordian-div accordian-div3 main-div">
                            <div class="row m-0">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                                    <v-collapse-wrapper @afterToggle="changeStatus2"
                                                        :class="{active: status2}">
                                        <div class="header" v-collapse-toggle>

                                            <label class="accordion-title">Bulk Purchase Opportunity</label>
                                        </div>
                                        <div class="my-content" v-collapse-content>
                                            <div class="row mt30">
                                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <select-box drpdwnlabel="UOM" dropdownName="dropdownname"
                                                                :dropdwnOptions="dropdwnOptions" selectPlaceholder=""
                                                                required=""></select-box>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <input-text-block type="text" inputlabel="Pack Size" name="" id=""
                                                                      required="" inputClass="input-textbox"
                                                                      placeholder=""></input-text-block>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <input-text-block type="text" inputlabel="Net Content [Weight]"
                                                                      name=""
                                                                      id="" required="" inputClass="input-textbox"
                                                                      placeholder=""></input-text-block>
                                                </div>
                                            </div>
                                            <div class="row mt30">
                                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <input-text-block type="text" inputlabel="SF Buy Price" name=""
                                                                      id=""
                                                                      required="" inputClass="input-textbox"
                                                                      placeholder=""></input-text-block>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <input-text-block type="text" inputlabel="Currency" name="" id=""
                                                                      required="" inputClass="input-textbox"
                                                                      placeholder=""></input-text-block>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <input-text-block type="text" inputlabel="Barcode" name="" id=""
                                                                      required="" inputClass="input-textbox"
                                                                      placeholder=""></input-text-block>
                                                </div>
                                            </div>
                                        </div>
                                    </v-collapse-wrapper>
                                </div>
                            </div>
                        </div>

                        <hr>
                        <div class="newproductreq-main2 accordian-div accordian-div4 main-div adm-form-main">
                            <div class="row m-0">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                                    <v-collapse-wrapper @afterToggle="changeStatus3"
                                                        :class="{active: status3}">
                                        <div class="header" v-collapse-toggle>
                                            <label class="accordion-title">Nutritional</label>
                                        </div>
                                        <div class="my-content" v-collapse-content>
                                            <div class="row mt15">
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <text-area-block textarealabel="Ingredients" name="" id=""
                                                                     placeholder="" required=""></text-area-block>
                                                </div>
                                            </div>
                                            <div class="row mt30">
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <text-area-block textarealabel="Cooking Instruction" name="" id=""
                                                                     placeholder=""
                                                                     required=""></text-area-block>
                                                </div>
                                            </div>
                                            <div class="row mt30 mb30">
                                                <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                                                    <text-area-block textarealabel="Additional Information" name=""
                                                                     id=""
                                                                     placeholder=""
                                                                     required=""></text-area-block>
                                                </div>
                                                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <adm-input-file fileLabel="Full Product Spec Sheet [Pif]"
                                                                    fontAwsomeCls="fa-download"></adm-input-file>
                                                </div>
                                            </div>
                                            <hr>
                                            <div class="row mt30">
                                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                    <text-area-block textarealabel="Service Per Packaging " name=""
                                                                     id=""
                                                                     placeholder="16" required=""></text-area-block>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                    <text-area-block textarealabel="Service Size" name="" id=""
                                                                     placeholder=" 132g" required=""></text-area-block>
                                                </div>
                                            </div>
                                            <div class="row mt30 nutritional-extra">
                                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                                    <input-text-block type="text" inputlabel="Nutritional" name="" id=""
                                                                      required="" inputClass="input-textbox"
                                                                      placeholder=""></input-text-block>
                                                    <input-text-block type="text" inputlabel="" name=""
                                                                      id=""
                                                                      inputClass="input-textbox mt2"
                                                                      placeholder=""></input-text-block>
                                                    <input-text-block type="text" inputlabel="" name=""
                                                                      id=""
                                                                      inputClass="input-textbox mt2"
                                                                      placeholder=""></input-text-block>
                                                    <input-text-block type="text" inputlabel="" name=""
                                                                      id=""
                                                                      inputClass="input-textbox mt2"
                                                                      placeholder=""></input-text-block>
                                                    <input-text-block type="text" inputlabel="" name=""
                                                                      id=""
                                                                      inputClass="input-textbox mt2"
                                                                      placeholder=""></input-text-block>
                                                    <input-text-block type="text" inputlabel="" name=""
                                                                      id=""
                                                                      inputClass="input-textbox mt2"
                                                                      placeholder=""></input-text-block>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                                    <input-text-block type="text" inputlabel="Quantity Per Serve"
                                                                      name=""
                                                                      id="" required="" inputClass="input-textbox"
                                                                      placeholder=""></input-text-block>
                                                    <input-text-block type="text" inputlabel="" name=""
                                                                      id=""
                                                                      inputClass="input-textbox mt2"
                                                                      placeholder=""></input-text-block>
                                                    <input-text-block type="text" inputlabel="" name=""
                                                                      id=""
                                                                      inputClass="input-textbox mt2"
                                                                      placeholder=""></input-text-block>
                                                    <input-text-block type="text" inputlabel="" name=""
                                                                      id=""
                                                                      inputClass="input-textbox mt2"
                                                                      placeholder=""></input-text-block>
                                                    <input-text-block type="text" inputlabel="" name=""
                                                                      id=""
                                                                      inputClass="input-textbox mt2"
                                                                      placeholder=""></input-text-block>
                                                    <input-text-block type="text" inputlabel="" name=""
                                                                      id=""
                                                                      inputClass="input-textbox mt2"
                                                                      placeholder=""></input-text-block>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                                    <input-text-block type="text" inputlabel="Quantity Per 100g [100ml]"
                                                                      name="" id="" required="" inputClass="input-textbox"
                                                                      placeholder=""
                                                                      labelID="quantity_per"></input-text-block>
                                                    <input-text-block type="text" inputlabel="" name=""
                                                                      id=""
                                                                      inputClass="input-textbox mt2"
                                                                      placeholder=""></input-text-block>
                                                    <input-text-block type="text" inputlabel="" name=""
                                                                      id=""
                                                                      inputClass="input-textbox mt2"
                                                                      placeholder=""></input-text-block>
                                                    <input-text-block type="text" inputlabel="" name=""
                                                                      id=""
                                                                      inputClass="input-textbox mt2"
                                                                      placeholder=""></input-text-block>
                                                    <input-text-block type="text" inputlabel="" name=""
                                                                      id=""
                                                                      inputClass="input-textbox mt2"
                                                                      placeholder=""></input-text-block>
                                                    <input-text-block type="text" inputlabel="" name=""
                                                                      id=""
                                                                      inputClass="input-textbox mt2"
                                                                      placeholder=""></input-text-block>
                                                </div>
                                                <div class="col-lg-3 col-md-3 col-sm-3 col-12">
                                                    <input-text-block type="text" inputlabel="% Daily Intake / Serving"
                                                                      name="" id="" required="" inputClass="input-textbox"
                                                                      placeholder=""></input-text-block>
                                                    <input-text-block type="text" inputlabel="" name=""
                                                                      id=""
                                                                      inputClass="input-textbox mt2"
                                                                      placeholder=""></input-text-block>
                                                    <input-text-block type="text" inputlabel="" name=""
                                                                      id=""
                                                                      inputClass="input-textbox mt2"
                                                                      placeholder=""></input-text-block>
                                                    <input-text-block type="text" inputlabel="" name=""
                                                                      id=""
                                                                      inputClass="input-textbox mt2"
                                                                      placeholder=""></input-text-block>
                                                    <input-text-block type="text" inputlabel="" name=""
                                                                      id=""
                                                                      inputClass="input-textbox mt2"
                                                                      placeholder=""></input-text-block>
                                                    <input-text-block type="text" inputlabel="" name=""
                                                                      id=""
                                                                      inputClass="input-textbox mt2"
                                                                      placeholder=""></input-text-block>
                                                </div>
                                            </div>
                                            <div class="row mt30 mb30">
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <text-area-block textarealabel="Additional Information" name=""
                                                                     id=""
                                                                     placeholder="Quantities stated are average only"
                                                                     required=""></text-area-block>
                                                </div>
                                            </div>

                                            <hr>
                                            <div class="row mt30 mb30">
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <input-text-block type="text" inputlabel="Allergens List" name=""
                                                                      id=""
                                                                      inputClass="input-textbox"
                                                                      placeholder="Peanuts or Peanut Products"></input-text-block>
                                                    <input-text-block type="text" inputlabel="" name=""
                                                                      id=""
                                                                      inputClass="input-textbox mt2"
                                                                      placeholder=""></input-text-block>
                                                    <input-text-block type="text" inputlabel="" name=""
                                                                      id=""
                                                                      inputClass="input-textbox mt2"
                                                                      placeholder=""></input-text-block>
                                                </div>
                                            </div>
                                            <hr>
                                            <div class="row mt30">
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <input-text-block type="text" inputlabel="Dietary Information"
                                                                      name=""
                                                                      id=""
                                                                      inputClass="input-textbox"
                                                                      placeholder="GMO Free / Palm Oil Free / Vegan"></input-text-block>
                                                    <input-text-block type="text" inputlabel="" name=""
                                                                      id=""
                                                                      inputClass="input-textbox mt2"
                                                                      placeholder=""></input-text-block>
                                                </div>

                                            </div>
                                        </div>
                                    </v-collapse-wrapper>
                                </div>
                            </div>
                        </div>

                        <hr>
                        <div class="newproductreq-main2 accordian-div accordian-div5 main-div">
                            <div class="row m-0">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                                    <v-collapse-wrapper @afterToggle="changeStatus4"
                                                        :class="{active: status4}">
                                        <div class="header" v-collapse-toggle>
                                            <label class="accordion-title">Additional Information</label>
                                        </div>
                                        <div class="my-content" v-collapse-content>
                                            <div class="row mt15">
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                                    <input-text-block type="text" inputlabel="" name="" id=""
                                                                      inputClass="input-textbox"
                                                                      placeholder=""></input-text-block>
                                                </div>
                                            </div>
                                        </div>
                                    </v-collapse-wrapper>
                                </div>
                            </div>
                        </div>

                        <hr>
                        <div class="newproductreq-main2 accordian-div accordian-div6 main-div adm-form-main">
                            <div class="row m-0">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                                    <v-collapse-wrapper @afterToggle="changeStatus5"
                                                        :class="{active: status5}">
                                        <div class="header" v-collapse-toggle>
                                            <label class="accordion-title">Supporting Documentation</label>
                                        </div>
                                        <div class="my-content" v-collapse-content>
                                            <div class="row mt15">
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <adm-input-file fileLabel=""
                                                                    fontAwsomeCls="fa-download"></adm-input-file>
                                                </div>
                                            </div>
                                        </div>
                                    </v-collapse-wrapper>
                                </div>
                            </div>
                        </div>

                        <hr>
                        <div class="newproductreq-main2 accordian-div accordian-div7 main-div">
                            <div class="row m-0">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                                    <v-collapse-wrapper @afterToggle="changeStatus6"
                                                        :class="{active: status6}">
                                        <div class="header" v-collapse-toggle>
                                            <label class="accordion-title">Ranging Desire</label>
                                        </div>
                                        <div class="my-content" v-collapse-content>
                                            <div class="row mt15">
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <checkbox label="Nationally All Branches" cbvalue="1"></checkbox>
                                                </div>
                                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    <checkbox label="Branch Specific" cbvalue="1"></checkbox>
                                                </div>
                                            </div>

                                        </div>
                                    </v-collapse-wrapper>
                                </div>
                            </div>
                        </div>

                        <hr>
                        <div class="newproductreq-main2 accordian-div accordian-div8 main-div">
                            <div class="row m-0">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <a class="mb10 btn mt1 mb1 mr15">Save Changes</a>
                                    <a class="mb10 btn mt1 mb1 green-bg mr15">Approve</a>
                                    <a class="mb10 btn mt1 mb1 orange-bg">Decline</a>
                                </div>
                            </div>
                        </div>
                    </v-collapse-group>

                </div>
            </div>
        </div>
        <!-- Main End -->

    </div>
</template>
<script>
    import AdmHeader from '../admin_components/Header.vue'
    import InputTextBlock from '../partials/InputTextBlock.vue'
    import Checkbox from '../partials/Checkbox.vue'
    import TextAreaBlock from '../partials/TextAreaBlock.vue'
    import SelectBox from '../partials/SelectBox.vue'
    import SmallIconBlock from '../partials/SmallIconBlock.vue'
    import InputFile from '../partials/InputFile.vue'
    import DatatableButtons from '../partials/DatatableButtons.vue'
    import AdmInputFile from '../admin_partials/AdmInputFile.vue'

    import Vue from 'vue'
    import VueCollapse from 'vue2-collapse'

    Vue.use(VueCollapse)

    export default {
        data() {
            return {
                dropdwnOptions: [
                    {label: 'Option1', value: '1'},
                    {label: 'Option2', value: '2'},
                    {label: 'Option3', value: '3'},
                ],
                status: false,
                status1: false,
                status2: false,
                status3: false,
                status4: false,
                status5: false,
                status6: false,
            }
        },
        components: {
            AdmHeader,
            InputTextBlock,
            Checkbox,
            TextAreaBlock,
            SelectBox,
            SmallIconBlock,
            InputFile,
            DatatableButtons,
            AdmInputFile
        },
        methods: {
            changeStatus(value) {
                this.status = value.status;
            }, changeStatus1(value1) {
                this.status1 = value1.status;
            }, changeStatus2(value2) {
                this.status2 = value2.status;
            }, changeStatus3(value3) {
                this.status3 = value3.status;
            }, changeStatus4(value4) {
                this.status4 = value4.status;
            }, changeStatus5(value5) {
                this.status5 = value5.status;
            }, changeStatus6(value6) {
                this.status6 = value6.status;
            }

        }
    }
</script>
<style lang="scss">
</style>
