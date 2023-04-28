import './style.css'
import './libs/components'
import Alpine from 'alpinejs'
//import collapse from '@alpinejs/collapse'
document.addEventListener('alpine:init', () => {
    Alpine.data('dropdown', () => ({
      open: false,
      toggle () {
          this.open = !this.open
        }
    }))

})
//Alpine.plugin(collapse)
Alpine.start()
