<template>
    <div class="small-icon-block">
        <div class="input-label" v-if="inputLabel"><label style="opacity: 0">{{inputLabel}}</label></div>
        <a :href="iconLink">
            <div class="file-attachement"><i :class="fontAwesomeClass" aria-hidden="true"></i></div>
        </a>
    </div>
</template>

<script>
    export default {
        props: ['fontAwesomeClass', 'inputLabel', 'iconLink']
    }
</script>