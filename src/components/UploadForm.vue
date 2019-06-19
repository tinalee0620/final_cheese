<template>
  <div>
    <div v-if="!showLoading" class="dropper">
      <input multiple accept="image/*" type="file" @change="uploadImages($event.target.files)">
      <!-- <span>Drag & Drop</span> -->
      <span>abcabcabcabcabc</span>
    </div>
    <div v-else class="centered">
      <Spinner/>
      <div class="wait">Please Wait</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Spinner from "./Spinner";
export default {
  name: "UploadForm",
  components: {
    Spinner
  },
  computed: mapGetters(["showLoading"]),
  methods: mapActions(["uploadImages"])
};
</script>

<style scoped>
.dropper {
  height: 50vh;
  border: 2px dashed grey;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.dropper:hover {
  background-color: #eee;
  cursor: pointer;
}

.centered {
  margin: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wait {
  display: block;
  margin: 10px;
}

input {
  width: 100%;
  height: 50vh;
  position: absolute;
  opacity: 0;
}
</style>
