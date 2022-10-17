<template>
    <div class="datatable-action-btn" :class="actionClass">
        <a :data-toggle="dataToggle" :data-target="dataTarget" :href="dataLink"><i class="fa" :class="fontAwesomeClass"
                                                                  aria-hidden="true" v-if="fontAwesomeClass"></i> <label>{{actionLabel}}</label></a>
    </div>
</template>

<script>
    export default {
        props: ['fontAwesomeClass', 'actionLabel', 'actionClass', 'dataToggle', 'dataTarget', 'dataLink']
    }
</script>