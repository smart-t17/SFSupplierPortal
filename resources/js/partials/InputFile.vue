<template>
    <div class="file-input">
        <div class="upload-btn-wrapper ">
            <div class="input-label" v-if="fileLabel"><label>{{fileLabel}}<span v-if="required">*</span></label></div>
            <div class="input-textbox-div">
                <input class="input-textbox" type="file" :name="name" :id="id" :placeholder="placeholder" multiple>
                <div class="file-attachement">
                    <i aria-hidden="true" class="fa fa-paperclip"></i>
                </div>
                <p class="small-file-txt">{{smallText}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['fileLabel', 'name', 'id', 'required', 'smallText', 'inputClass', 'placeholder']
    }
</script>