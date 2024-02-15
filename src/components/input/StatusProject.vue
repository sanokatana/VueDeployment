<template>
    <div>
      {{ displayText }}
    </div>
  </template>
  
  <script>
  export default {
    props: ['status'],
    computed: {
      displayText() {
        switch (this.status) {
          case '1':
            return 'Mazenta';
          case '2':
            return 'Banara';
          default:
            return '';
        }
      }
    }
  };
  </script>