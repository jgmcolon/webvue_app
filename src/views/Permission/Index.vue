<template>
  <div>
    <b-table striped hover  :busy="isBusy"  :items="Permissions" :fields="fields">
      <template #cell(rowId)="row">
        <a :href="`/Permission/Item/${row.value}`">Edit</a> |
        <a :href="`/Permission/Delete/${row.value}`">Delete</a>
      </template>
    </b-table>
  </div>



</template>


<script>
import axios from 'axios'

export default {
  name: 'permission-index',
  computed: {},
  data() {
    return {
      isBusy: true,
      infoModal: {
        id: 'info-modal',
        title: '',
        content: ''
      },
      fields: [
        {
          key: 'firstName',
          label: 'FirstName',
        },
        {
          key: 'lastName',
          label: 'LastName',
        },
        {
          key: 'permissionType',
          label: 'Permission Type',
        },
        {
          key: 'permissionDate',
          label: 'Permission Date',
        },
        {
          key: 'rowId',
          label: '',
        }
      ],
      Permissions: [],

    }
  },
  created() {
    axios.get("https://localhost:44337/api/Permission/GetAll").then((response) => {
      this.Permissions = response.data.data;
    })
  },

}
</script>


<style scoped>

</style>
