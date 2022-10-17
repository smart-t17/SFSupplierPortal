<template>
    <div :class="selectExtraClass">
        <div class="dropdwn-label" v-if="drpdwnlabel"><label>{{drpdwnlabel}}<span v-if="required">*</span></label></div>
        <div class="dropdwn" :class="dynamicClass">
            <v-select :name="dropdownName" :id="dropdownId" :options="dropdwnOptions"
                      :placeholder="selectPlaceholder"></v-select>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['selectExtraClass', 'drpdwnlabel', 'dynamicClass', 'dropdownName', 'dropdownId', 'dropdwnOptions', 'selectPlaceholder', 'required']
    }
</script>