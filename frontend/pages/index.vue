<template>
  <main>
    <h1>LISTA TELEFONICA</h1>
    <p> confira sua lista telefonica:</p>

    <div class="create-new">
      <input type="text" v-model="newTask" placeholder="Adicione um novo contato" @keypress.enter="addTask" />
      <button @click="addTask">Adicionar</button>
    </div>

    <div class="tasks">
      <Task v-for="(task, i) in $store.state.tasks" :key="i" :task="task" />
    </div>
  </main>

</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      newTask: ''
    }
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.$store.commit('ADD_TASK', this.newTask);
        this.newTask = '';
      }
    },
    getTodo() {
      axios.get("http://localhost:3000/users")
        .then(response => {
          console.log(response.data)
          const data = response.data;
          data.map((e) => {
            this.$store.commit('ADD_TASK', e.name + ": " + e.number_phone);
          })
        })
    }
  },
  watch: {
    '$store.state.list': {
      handler() {
        this.getTodo();
      }
    }
  },
  mounted() {
    this.getTodo();
  }
}
</script>

