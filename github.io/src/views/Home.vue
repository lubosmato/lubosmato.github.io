<template>
  <main role="main" class="container-fluid pt-4">
    <div class="row">
      <div class="col-xl-2 col-lg-3 col-sm-4">
        <div class="card">
          <img
            class="card-img-top"
            src="https://avatars0.githubusercontent.com/u/7008489"
            alt="That should be me"
          />
          <div class="card-body">
            <h5 class="card-title">Luboš Matejčík</h5>
            <p class="card-text lead">Code lover 💪</p>
            <p class="card-text">
              Stuff I enjoy: <br />
              <span
                class="badge badge-primary mr-1"
                v-for="(item, i) in enjoyedStuff"
                :key="i"
                >{{ item }}</span
              >
            </p>
            <a href="https://github.com/lubosmato" target="_blank">Github</a>
          </div>
        </div>
      </div>
      <div class="col-xl-10 col-lg-9 col-sm-8">
        <div class="row">
          <div class="col">
            <h1>Projects that make me happy</h1>
            <p class="lead">
              From time to time I get an extremly stupid idea for a project and
              sometimes it ends up in a box of unfinished projects and sometimes
              <strong>it ends up here.</strong>
            </p>
            <p class="lead">
              These finished projects strengthen my will and make me happy!
            </p>
          </div>
        </div>

        <div class="row mt-4 mb-4">
          <div
            class="col-sm-12 col-md-6 col-lg-4"
            v-for="(project, i) in projects"
            :key="i"
          >
            <Project :project="project" class="mb-4" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Project from "@/components/Project.vue";

export default {
  name: "Home",
  components: { Project },
  data() {
    return {
      enjoyedStuff: [
        "C++",
        "Python",
        "ES6+",
        "Vue.js",
        "Laravel",
        "ESP8266/32"
      ],
      projects: []
    };
  },
  async mounted() {
    try {
      const response = await fetch("/projects.json");
      this.projects = await response.json();
    } catch {
      console.error(":( no projects");
    }
  }
};
</script>
