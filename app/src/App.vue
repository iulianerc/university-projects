<script>
export default {
  name: 'App',
  data: () => ({
    orders: [
      {
        name: "Calculator",
        unitPrice: 123,
        count: 3,
      }
    ],
    showModal: false
  }),
  methods: {
    addNewOrder() {
    
    }
  }
}
</script>

<template>
  <v-app>
    <v-main>
      <v-table
      
      >
        <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Unit price
          </th>
          <th class="text-left">
            Count
          </th>
          <th class="text-left">
            Order price
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
          v-for="item in orders"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.unitPrice }}</td>
          <td>{{ item.count }}</td>
          <td>{{ item.count * item.unitPrice }}</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td class="text-right">
            <v-dialog
              v-model="showModal"
              width="500"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  style="background-color: lawngreen; color: black"
                  v-bind="attrs"
                  v-on="on"
                  @click="addNewOrder"
                >
                  Add new order
                </v-btn>
              </template>
    
              <v-card>
                Card
              </v-card>
            </v-dialog>
          </td>
        </tr>
        </tbody>
      </v-table>
    </v-main>
  </v-app>
</template>
