<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <hr>
                <label>Enter Any Text</label>
                <input type="text" v-model="text">
                <hr>

                <label>Filtered Properities</label>
                <p>{{ text | reverse }}</p>
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p>{{ text | countLength }}</p>
                <hr>
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <label>Computed Properities</label>
                <p>{{ reverseText }}</p>
                <p>{{ textLength }}</p>
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>
    import { textMixins } from './textMixins';

    export default {
        mixins: [textMixins],
        filters: {
            reverse(text) {
                return text.split("").reverse().join("");
            }
        }
    }
</script>

<style>
</style>
