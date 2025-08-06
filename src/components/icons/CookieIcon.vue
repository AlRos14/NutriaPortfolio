<template>
  <svg 
    :width="size" 
    :height="size" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round"
  >
    <circle cx="12" cy="12" r="1"/>
    <path d="M21 12c0 1.657-4.03 3-9 3s-9-1.343-9-3c0-.657 1.1-1.244 2.8-1.654C7.5 10.133 9.7 10 12 10s4.5.133 6.2.346c1.7.41 2.8.997 2.8 1.654z"/>
    <path d="M9 17c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"/>
    <path d="M21 17c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"/>
  </svg>
</template>

<script>
export default {
  name: 'CookieIcon',
  props: {
    size: {
      type: [String, Number],
      default: 24
    }
  }
}
</script>
