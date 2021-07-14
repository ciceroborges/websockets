<template>
  <div class="p-6 bg-white border-b border-gray-200">
    <breeze-button @click="trigger('info')">Send info...</breeze-button>
    &nbsp;
    <breeze-button @click="trigger('success')">Send success...</breeze-button>
    &nbsp;
    <breeze-button @click="trigger('warning')">Send warning...</breeze-button>
    &nbsp;
    <breeze-button @click="trigger('danger')">Send danger...</breeze-button>
    &nbsp;
    <breeze-checkbox v-on:update:checked="toEveryone = $event"/> To Everyone?
    &nbsp;
    <b style="color:#f74465; cursor:pointer;" @click="messages = []"><u>Clear</u></b>
    <br>
    <breeze-button @click="teste()">teste ...</breeze-button>
    <br />
    <br />
    <hr />
    <br />
    <div v-for="(msg, index) in messages" :key="index" style="margin-top: 2px;"> 
      <span :class="msg.status"> 
        &nbsp; <b>{{ msg.name }} </b>: <i>{{ msg.content }}</i> &nbsp;
      </span>
      <br />
    </div>
  </div>
</template>
<script>
import BreezeButton from "@/Components/Button";
import BreezeCheckbox from "@/Components/Checkbox";

export default {
  data() {
    return {
      messages: [],
      toEveryone: false,
      urlBase: "http://localhost:8000/api/",
    };
  },
  components: {
    BreezeButton,
    BreezeCheckbox
  },
  created() {
    Echo.join(`room`)
    .listen("NewMessage", ($e) => {
        this.messages.push($e.message);
    })
    
    Echo.join(`teste`)
    .listen("TesteEnvio", ($e) => {
        console.log($e);
    })

  },
  methods: {
    trigger($status, $toAll) {
      const $api = `${this.urlBase}send-event`;
      const $params = {
        name: this.$page.props.auth.user.name,
        content: `Sent a ${$status} notification.`,
        status: $status,
        toEveryone: this.toEveryone
      };

      axios
        .post($api, $params)
        .then((res) => {
          //console.log(res);
        })
        .catch((err) => {
          //console.error(err);
        });
    },
    teste() {
      const $api = `${this.urlBase}teste`;
      const $params = {};

      axios
        .post($api, $params)
        .then((res) => {
          //console.log(res);
        })
        .catch((err) => {
          //console.error(err);
        });
    },
  },
};
</script>
<style scoped>
    .info {
       background-color: #4eb1f3; 
       border-radius: 10px; 
       color: white;
    }
    .success {
       background-color: #31af57; 
       border-radius: 10px; 
       color: white;
    }
    .warning {
       background-color: #e7e422; 
       border-radius: 10px; 
       color: black;
    }
    .danger {
       background-color: #f74465; 
       border-radius: 10px; 
       color: white;
    }
</style>