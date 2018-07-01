const hasEmptyFieldsMixin = {
  methods: {
    hasEmptyFields(object) {
      for (let prop in object) {
        if (object.hasOwnProperty(prop)) {
          const x = object[prop]
          if (x === null || x.trim() === "" || x === 0) {
            console.log("No has rellenado todos los campos.")
            return true
          }
        }
      }
      return false
    }
  }
}
export default hasEmptyFieldsMixin