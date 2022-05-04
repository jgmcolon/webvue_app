<template>
  <b-card>
    <div>
      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
            id="input-2"
            v-model="FirstName"
            valid-feedback=""
            invalid-feedback="Please enter something"
            :state="stateFirstName"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your LastName:" label-for="input-2">
        <b-form-input
            id="input-2"
            v-model="Lastname"

            :state="stateLastname">

        </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Permission Type" label-for="input-3">
        <b-form-select id="input-3" v-model="PermissionTypeId" :options="PermissionTypes"
                       :state="statePermissionTypeId">

        </b-form-select>
      </b-form-group>

      <b-form-group id="input-group-3" label="Permission Date" label-for="input-3">
        <datepicker v-model="PermissionDate" type="date" :state="statePermissionDate"></datepicker>
      </b-form-group>

      <b-button @click="submit" :disabled="AllowSubmit" variant="primary">Submit</b-button>
      <b-button @click="clear" variant="danger">Clear</b-button>

    </div>
  </b-card>
</template>

<script>
import axios from 'axios'

export default {
  name: 'permission-item',
  props: {
    id: String
  },
  computed: {
    stateFirstName() {
      return this.FirstName.length >= 4
    },
    stateLastname() {
      return this.Lastname.length >= 4
    },
    statePermissionTypeId() {
      return this.PermissionTypeId != ''
    },
    statePermissionDate() {
      return this.PermissionDate != null
    },
    AllowSubmit() {
      return this.FirstName.length < 4 && this.Lastname.length < 4 && this.PermissionTypeId === '' && this.PermissionDate === null
    }
  },
  data() {
    return {
      FirstName: '',
      Lastname: '',
      PermissionTypeId: '',
      PermissionTypes: [],
      PermissionDate: null,
      RowID: null
    }
  },
  created() {

    axios.get("https://localhost:44337/api/PermissionTypes/GetList").then((response) => {
      console.table(response.data.list)
      this.PermissionTypes = response.data.list
    })

    if (this.$route.params.id !== '') {
      this.RowID = this.$route.params.id;

      axios.get(`https://localhost:44337/api/Permission/GetById/${this.$route.params.id}`).then((response) => {

        console.log(response);

        this.FirstName = response.data.row.firstName;
        this.Lastname = response.data.row.lastName;
        this.PermissionTypeId = response.data.row.permissionTypeId;
        this.PermissionDate = response.data.row.permissionDate;
      });
    }


  },
  methods: {
    submit() {
      let row = {
        firstName: this.FirstName,
        lastName: this.Lastname,
        permissionTypeId: this.PermissionTypeId,
        permissionDate: this.PermissionDate,
      }


      if (this.RowID) {
        axios.post(`https://localhost:44337/api/Permission/Update/${this.RowID}`, row)
            .then(function (response) {
              window.location = '/Permission/index'
              console.log(response);
            });

      } else {
        axios.post("https://localhost:44337/api/Permission/Insert", row)
            .then(function (response) {
              window.location = '/Permission/index'
              console.log(response);
            });
      }

      this.FirstName = '';
      this.Lastname = '';
      this.PermissionTypeId = '';
      this.PermissionDate = null;

    },
    clear() {
      this.FirstName = '';
      this.Lastname = '';
      this.PermissionTypeId = '';
      this.PermissionDate = null;
    },
  }
}
</script>

