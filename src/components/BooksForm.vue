<template>
  <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
    <form>
      <validation-provider
        v-slot="{ errors }"
        name="Title"
        rules="required|max:50"
      >
        <v-text-field
          v-model="Title"
          :counter="50"
          :error-messages="errors"
          label="Title"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="Author"
        rules="required|max:50"
        
      >
        <v-text-field
          v-model="Author"
          :counter="30"
          :error-messages="errors"
          label="Author"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="Description"
        rules="required|max:100"
      >
        <v-text-field
          v-model="Description"
          :counter=100
          :error-messages="errors"
          label="Description"
          required
        ></v-text-field>
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        rules="required"
        name="checkbox"
      >
        <v-checkbox
          v-model="checkbox"
          :error-messages="errors"
          value="1"
          label="Option"
          type="checkbox"
          required
        ></v-checkbox>
      </validation-provider>

      <v-btn
        class="mr-4"
        type="submit"
        :disabled="invalid"
        @click="submit()">
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </form>
  </validation-observer>
</template>
<script>
  import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
  import axios from 'axios'
  setInteractionMode('eager')

  extend('digits', {
    ...digits,
    message: '{_field_} needs to be {length} digits. ({_value_})',
  })

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('regex', {
    ...regex,
    message: '{_field_} {_value_} does not match {regex}',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })

  export default {
    name: "BooksForm",
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      Title: '',
      Author: '',
      Description: '',
      checkbox: null,
    }),

    methods: {
      submit () {
   
          console.log('submit hit!');
        this.$refs.observer.validate()
        axios( { 
            method: 'post',
            url: 'https://azure-af-booksapi.azurewebsites.net/api/books',
           
            data: {
                
                    title: this.Title,
                    author: this.Author,
                    description: this.Description
            }}).then((response) => { // Handle response from promise object
                console.log(response);
                }, (error) => {
                console.log(error);
                });
        

      },
      clear () {
        this.Title = ''
        this.Author = ''
        this.Description = ''
        this.checkbox = null
        this.$refs.observer.reset()
      },
    },
  }
</script>