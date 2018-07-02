<template>
  <div class="row">
    <div class="col-xs-12">
      <div class="container">
        <h1>Login</h1>
        <form @submit.prevent="logIn">
          <p>
            <label for="email">E-m@il</label>
            <input type="email" name="email" v-model="auth.email">
          </p>
          <p>
            <label for="password">Contraseña</label>
            <input type="password" name="password" v-model="auth.password">
          </p>
          <p>
            <input type="submit" class="btn" value="Iniciar sesión">
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import hasEmptyFields from "@/mixins/hasEmptyFields"
  import { AUTH, DB } from "@/firebase"
  export default {
    mixins: [hasEmptyFields],
    data() {
      return {
        auth: {
          email: "",
          password: ""
        }
      }
    },
    methods: {
      isAdmin(email) {
        return new Promise(resolve => {
          const adminRef = DB.ref("/admin")
          adminRef.orderByChild("profileInfo/email").equalTo(email).once("value", snapshot => {
            return resolve(snapshot.exists())
          })
        })
      },
      logIn() {
        if (this.hasEmptyFields(this.auth)) {
          const message = "No has rellenado todos los campos."
					console.error(message)
					alert(message)
					return
        }
        const email = this.auth.email
        const password = this.auth.password
        this.isAdmin(email).then(isAdmin => {
          if (isAdmin) {
            AUTH.signInWithEmailAndPassword(this.email, this.password).then(() => this.$router.replace("/dashboard"))
            .catch(err => alert(err))
          } else {
            const message = "Este usuario no se encuentra registrado."
            console.error(message)
            alert(message)
          }
        })
      }
    }
  }
</script>
