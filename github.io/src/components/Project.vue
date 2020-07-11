<template>
  <div
    class="card"
    @mouseover="isAnimating = true"
    @mouseleave="isAnimating = false"
  >
    <a :href="project.link" target="_blank">
      <img class="card-img-top" :src="image" :alt="`${project.title} thumb`" />
    </a>
    <div class="card-body">
      <a :href="project.link" target="_blank">
        <h5 class="card-title">{{ project.title }}</h5>
      </a>
      <p class="card-text lead">
        {{ project.description }}
      </p>
      <p class="card-text">
        Stuff used: <br />
        <span
          class="badge badge-primary mr-1"
          v-for="(item, i) in project.used"
          :key="i"
          >{{ item }}</span
        >
      </p>
      <a :href="project.sourceLink" target="_blank">Source</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Project",
  data() {
    return {
      isAnimating: false
    };
  },
  props: {
    project: { type: Object, required: true }
  },
  computed: {
    image() {
      return this.isAnimating ? this.project.animatedImage : this.project.image;
    }
  }
};
</script>

<style scoped lang="scss"></style>
