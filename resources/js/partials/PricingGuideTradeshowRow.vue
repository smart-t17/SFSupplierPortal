<template>
    <tr>
        <td>{{firstColumnContent}}</td>
        <td>{{secondColumnContent}}</td>
        <td>{{thirdColumnContent}}</td>
        <td>{{fourthColumnContent}}</td>
        <td>{{fifthColumnContent}}</td>
    </tr>
</template>


<script>
    export default {
        props: ['firstColumnContent', 'secondColumnContent', 'thirdColumnContent', 'fourthColumnContent', 'fifthColumnContent']
    }
</script>




