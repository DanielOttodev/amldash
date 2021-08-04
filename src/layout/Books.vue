<template>
<v-container>
<BooksForm />

<BooksList/>
</v-container>
</template>

<script>
import BooksForm from '../components/BooksForm.vue'
import BooksList from '../components/BooksList.vue'
export default {
    
    name:'Books',
    components: {
        BooksForm,
        BooksList
    }
}
</script>