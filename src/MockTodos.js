module.exports = {
  createTodo: function(text, done) {
    return { text, done };
  },

  mockTodos: [
    {
      text: 'learn programming',
      done: true
    },
    {
      text: 'Learn different paradigms'
    },
    {
      text: 'Create a todo app'
    }
  ]
};
