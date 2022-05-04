<template>
  <h6>Firstname <b-badge>{{FirstName}}</b-badge></h6>
  <h6>Lastname <b-badge>{{Lastname}}</b-badge></h6>
  <h6>Permission Type <b-badge>{{PermissionType}}</b-badge></h6>
  <h6>Permission Date <b-badge>{{PermissionDate}}</b-badge></h6>
  <b-button @click="submit" :disabled="AllowSubmit" variant="danger">Delete</b-button>
</template>

<script>
import axios from 'axios'

export default {
  name: 'permission-delete',
  computed: {},
  data() {
    return {
      FirstName: '',
      Lastname: '',
      PermissionType: '',
      PermissionDate: null,
      RowID: null
    }
  },
  created() {
    if (this.$route.params.id !== '') {
      this.RowID = this.$route.params.id;

      axios.get(`https://localhost:44337/api/Permission/GetById/${this.$route.params.id}`).then((response) => {

        console.log(response.data.row);

        this.FirstName = response.data.row.firstName;
        this.Lastname = response.data.row.lastName;
        this.PermissionType = response.data.row.permissionType;
        this.PermissionDate = response.data.row.permissionDate;
      });
    }
  },
  methods: {
    submit() {
      axios.post(`https://localhost:44337/api/Permission/Delete/${this.RowID}`, [])
          .then(function (response) {
            window.location = '/Permission/index'
            console.log(response);
          });


    },
  }
}
</script>


<style scoped>

</style>
