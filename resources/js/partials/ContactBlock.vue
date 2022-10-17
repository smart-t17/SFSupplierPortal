<template>
    <div class="contact-area-block">
        <div v-if="contactName" class="contact-name"><span>{{contactName}}</span></div>
        <h6>{{contactTitle}}</h6>
        <div v-if="TContent">T <span class="contact-dashline"> <a :href="'tel:' + TContent"> {{TContent}} </a> </span>
        </div>
        <div v-if="PContent">P <span class="contact-dashline"> <a :href="'tel:' + PContent"> {{PContent}} </a></span>
        </div>
        <div v-if="EContent">E <span class="contact-dashline"> <a :href="'mailto:' + EContent"> {{EContent}} </a></span>
        </div>
        <div v-if="EEContent">E <span class="contact-dashline"><a
                :href="'mailto:' + EEContent">{{EEContent}} </a></span></div>
        <div v-if="address">{{address}}</div>
    </div>
</template>


<script>
    export default {
        props: ['contactName', 'contactTitle', 'TContent', 'PContent', 'EContent', 'EEContent', 'address'],
        /*mounted(){
            console.log(this.TContent);
        }*/
    }
</script>

