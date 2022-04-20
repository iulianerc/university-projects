<template>
  <div>
    <v-card class="ma-4 pa-4">
      <v-card-title>Mircea - Vasilica crypt</v-card-title>
      <v-row>
        <v-col cols="5">
          <v-text-field label="Key" outlined dense v-model="key"></v-text-field>
        </v-col>
      </v-row>
    </v-card>
    
    <v-card class="ma-4 pa-4">
      <v-card-title>Encrypting</v-card-title>
      <v-textarea label="Message" outlined dense v-model="encryptMessage"></v-textarea>
      <v-textarea label="Encrypted message" outlined :value="encrypt" readonly></v-textarea>
    </v-card>
    
    <v-card class="ma-4 pa-4">
      <v-card-title>Decrypting</v-card-title>
      <v-textarea label="Message" outlined dense v-model="decryptMessage"></v-textarea>
      <v-textarea label="Encrypted message" outlined :value="decrypt" readonly></v-textarea>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'AppBody',
  data: () => ({
    key: '',
    encryptMessage: '',
    decryptMessage: '',
  }),
  computed: {
    encrypt() {
      if (this.key === '' || this.encryptMessage === '') {
        return ''
      }
      
      const cryptArray = [];
      const messageRows = Math.ceil(this.encryptMessage.length / this.key.length);
      const keyCharsCodes = this.prepareKeyCodes(cryptArray);
      
      for (let messageRow = 0; messageRow < messageRows; messageRow++) {
        keyCharsCodes.forEach((keyCharCode, columnIndex) => {
          const messageCharIndex = columnIndex + messageRow * keyCharsCodes.length
          cryptArray[keyCharCode].push(this.encryptMessage[messageCharIndex])
        })
      }
      console.log(cryptArray)
      return cryptArray
        .filter(el => el)
        .map((cryptArrayRow) => cryptArrayRow.join(''))
        .join('')
    },
    decrypt() {
      if (this.key === '' || this.decryptMessage === '') {
        return ''
      }
      
      const cryptArray = [];
      const cryptRows = Math.ceil(this.decryptMessage.length / this.key.length);
      const keyCharsCodes = this.prepareKeyCodes(cryptArray);
      
      keyCharsCodes.forEach((keyCharCode, columnIndex) => {
        let cryptRowLength = cryptRows
        let spread = 0;
        
        if (columnIndex + 1 > this.decryptMessage.length % keyCharsCodes.length) {
          cryptRowLength--;
        }
        
        if (columnIndex > 1) {
          spread = columnIndex - 1
        }
        
        cryptArray[keyCharCode] = this
          .decryptMessage
          .substr(columnIndex * cryptRows - spread, cryptRowLength)
          .split('')
      })
  
      console.log(cryptArray)
  
      let decryptedMessage = ''
      
      for (let cryptRow = 0; cryptRow < cryptRows; cryptRow++) {
        keyCharsCodes.forEach((keyCharCode) => {
          decryptedMessage += typeof cryptArray[keyCharCode][cryptRow] === "undefined" ? '' :cryptArray[keyCharCode][cryptRow]
        })
      
      }
      
      return decryptedMessage
    }
  },
  methods: {
    prepareKeyCodes(cryptArray) {
      return this
        .key
        .split('')
        .map((keyChar) => {
          const keyCharCode = keyChar.toUpperCase().charCodeAt(0);
          cryptArray[keyCharCode] = [];
          
          return keyCharCode;
        });
    },
  }
};
</script>
