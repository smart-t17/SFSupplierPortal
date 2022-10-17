<template>
    <thead :class="dynamicClass">
    <tr>
        <td :colspan="colspan"> {{firstColumnHeading}}</td>
        <td>{{secondColumnHeading}}</td>
    </tr>
    </thead>
</template>


<script>
    export default {
        props: ['firstColumnHeading', 'secondColumnHeading', 'dynamicClass', 'colspan']
    }
</script>




