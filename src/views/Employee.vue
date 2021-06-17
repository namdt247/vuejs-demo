<template>
  <div>
    <div v-for="employee in employees" :key="employee.id">
      {{employee.name}} - {{employee.wage}}
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Employee",
  data(){
    return {
      employees: [],
    }
  },
  mounted() {
    this.loadEmployee()
  },
  methods: {
    loadEmployee(){
      axios.get('http://localhost:8088/api/v1/employees')
          .then(response => response.data)
          .then(data => this.employees = data);
    }
  },
}
</script>

<style scoped>

</style>
