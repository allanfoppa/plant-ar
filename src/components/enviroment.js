
AFRAME.registerComponent('enviroment', {
  schema: {
    title: {
      type: 'string'
    },
    time: {
      type: 'string'
    }
  },

  init: function () {
    // Do something when component first attached.
    console.log(this.data.title, this.data.time)
  },

  update: function () {
    // Do something when component's data is updated.
  },

  remove: function () {
    // Do something when the component or its entity is detached.
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  }
})
