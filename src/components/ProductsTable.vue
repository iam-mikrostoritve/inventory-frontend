<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import axios from 'axios';
import {onMounted, ref} from "vue";

onMounted(() => {
  fetchData();
});

const products = ref();

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:5001/api/records');
    products.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

fetchData()
</script>

<template>
  <div class="card">
    <DataTable :value="products" tableStyle="min-width: 50rem">
      <Column field="title" header="Name"></Column>
      <Column field="artist.artistName" header="Artist"></Column>
      <Column field="genre" header="Genre"></Column>
      <Column field="releaseDate" header="ReleaseDate"></Column>
      <Column field="label.name" header="Label"></Column>
      <Column field="country" header="Country"></Column>
      <Column field="price" header="Price"></Column>

      <template #footer> In total there are {{ products ? products.length : 0 }} products. </template>
    </DataTable>
  </div>
</template>

<style scoped>

</style>