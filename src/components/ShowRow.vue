<template>
  <div>
    <table>
      <tr>
        <td>
          <h3>
            {{ name }}
          </h3>
        </td>
        <td>
          <button v-on:click="removeName(name)">
            <p style="color: #FF0000">delete</p>
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ["name"],
  methods: {
      ...mapActions([
          'removeName'
      ]),
  },
};
</script>

<style scoped>
</style>