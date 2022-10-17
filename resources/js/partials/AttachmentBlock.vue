<template>
    <div>
        <div class="input-label" v-if="inputlabel"><label>{{inputlabel}}<span v-if="required">*</span></label></div>
        <input :type="type ? type : 'text'" :class="inputClass" :name="name" :id="id" :required="required"
               :placeholder="placeholder ? placeholder : ''">
        <div class="attachment-small-txt" v-if="smallText">{{smallText}}</div>
    </div>
</template>
<script>
    export default {
        props: ['inputlabel', 'name', 'id', 'required', 'type', 'inputClass', 'placeholder', 'smallText']
    }
</script>