module.exports = {
  createTodo: function(text, done) {
    return { text, done };
  },

  mockTodos: [
    {
      text: 'learn programming'
    },
    {
      text: 'Learn differen paradigms'
    },
    {
      text: 'Create a todo app'
    }
  ]
};
