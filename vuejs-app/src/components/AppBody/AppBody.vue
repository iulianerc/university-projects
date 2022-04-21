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
      
      const messageRows = Math.ceil(this.encryptMessage.length / this.key.length);
      const [keyCharsCodes, rawCryptArray] = this.prepareKeyCodes();
      
      for (let messageRow = 0; messageRow < messageRows; messageRow++) {
        keyCharsCodes.forEach((keyCharCode, columnIndex) => {
          const messageCharIndex = columnIndex + messageRow * keyCharsCodes.length
          rawCryptArray[keyCharCode].push(this.encryptMessage[messageCharIndex])
        })
      }
      
      return keyCharsCodes
        .map((keyCharCode) => {
          return rawCryptArray[keyCharCode].join('')
        }).join('')
    },
    decrypt() {
      if (this.key === '' || this.decryptMessage === '') {
        return ''
      }
      
      const cryptRows = Math.ceil(this.decryptMessage.length / this.key.length);
      const [keyCharsCodes, rawCryptArray] = this.prepareKeyCodes();
  
  
      keyCharsCodes.forEach((keyCharCode, columnIndex) => {
        let cryptRowLength = cryptRows
        let spread = 0;
        
        if (columnIndex + 1 > this.decryptMessage.length % keyCharsCodes.length) {
          cryptRowLength--;
        }
        
        if (columnIndex > 1) {
          spread = columnIndex - 1
        }
  
        rawCryptArray[keyCharCode] = this
          .decryptMessage
          .substr(columnIndex * cryptRows - spread, cryptRowLength)
          .split('')
      })
      
      console.log(rawCryptArray)
      
      let decryptedMessage = ''
      console.log(keyCharsCodes)
      for (let cryptRow = 0; cryptRow < cryptRows; cryptRow++) {
        keyCharsCodes.forEach((keyCharCode) => {
          decryptedMessage += typeof rawCryptArray[keyCharCode][cryptRow] === "undefined" ? '' : rawCryptArray[keyCharCode][cryptRow]
        })
        
      }
      
      return decryptedMessage
    }
  },
  methods: {
    prepareKeyCodes() {
      const rawCryptArray = []
      const keyCharsCodes = this.key
        .split('')
        .map((keyChar) => {
          const keyCharCode = keyChar.toUpperCase().charCodeAt(0);
          rawCryptArray[keyCharCode] = [];
          
          return keyCharCode;
        });
      
      return [
        keyCharsCodes,
        rawCryptArray
      ];
    },
  }
};
</script>
