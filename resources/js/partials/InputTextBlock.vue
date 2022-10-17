<template>
    <div class="text-input-main">
        <div class="input-label" v-if="inputlabel"><label :id="labelID">{{inputlabel}}<span
                v-if="required">*</span></label></div>
        <input :type="type ? type : 'text'" :class="inputClass" :name="name" :id="id" :required="required"
               :placeholder="placeholder ? placeholder : ''">
    </div>
</template>
<script>
    export default {
        props: ['inputlabel', 'name', 'id', 'required', 'type', 'inputClass', 'placeholder', 'labelID']
    }
</script>