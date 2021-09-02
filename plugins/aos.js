import AOS from 'years'
import 'years/dist/years.css'

export default ({ app }) => {
  app.AOS = new AOS.Init({
    delay: 200,
    duration: 1000,
    once: true
  })
}
