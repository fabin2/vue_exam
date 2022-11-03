<template>
    <Transition name="modal">
        <div v-if="show" class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="modal-header">
                  <h3>Etes-vous sûr de vouloir supprimer l'utilisateur {{ userName.toUpperCase() }} ?</h3>
              </div>
              <div class="modal-footer">
                <slot name="footer">
                  <button
                    class="modal-default-button"
                    @click="effacerUtilisateur(userId), $emit('show')"
                  >CONFIRMER</button>
                  <button
                    class="modal-default-button"
                    @click="$emit('show')"
                  >ANNULER</button>
                </slot>
              </div>
            </div>
          </div>
        </div>
    </Transition>
</template>

<script>
export default {
    name: 'modal',
    props: {
        show: Boolean,
        userId: Number,
        userName: String
    },
    methods: {
        effacerUtilisateur(id){
            this.$store.commit("EFFACER_UTILISATEUR", id);
        },
    }
}
</script>

<style>
*{
  user-select: none;
}
  .modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #11ffee00;
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  max-width: 600px;
  width: 90%;
  min-width: 340px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  text-align: center;
  margin-top: 0;
  line-height: 1.5rem;
  color: #2c3e50;
}

.modal-footer {
  display: flex;
  justify-content: space-evenly;
}

.modal-default-button {
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  color: #F6F6F6;
  padding: .5rem;
  margin: 1rem 1rem;
  border-radius: 10px;
  box-shadow: #c5d0c6 1.95px 1.95px 2.6px;
  background-color: #2c3e50;
}

.modal-default-button:hover {
  color: white;
  background-color: #57616c;
  box-shadow: black 1.95px 1.95px 2.6px;
}

/*
 * Styles appliqués via l'élément <transition> 
 */
.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>