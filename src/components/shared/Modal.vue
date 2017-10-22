<template>
  <el-dialog
    v-if="key === name"
    title="Tips"
    :visible.sync="visible"
    size="tiny"
    :before-close="handleClose">
    <slot>
      
    </slot>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose()">Cancel</el-button>
      <el-button type="primary" @click="openModal(false)">Confirm</el-button>
    </span>
  </el-dialog>
</template>

<script>
  import { mapGetters, mapActions, mapMutations } from 'vuex'

  export default {
    props: {
      title: {
        requied: true,
        type: String
      },
      name: {
        required: true,
        type: String
      }
    },
    methods: {
      ...mapActions({
        openModal: 'handleOpenModal'
      }),
      ...mapMutations({
        edit: 'IS_EDITED'
      }),
      handleClose() {
        this.openModal(false)
        this.$router.push('/')
        this.edit()
      }
    },
    computed: {
      visible() {
        if (this.key) {
          return true
        }
        return false
      },
      ...mapGetters({
        key: 'getModal'
      })
    }
  }
</script>