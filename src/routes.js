const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler
} = require('./handler');

const routes = [
  //membuat catatan
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  //menampilkan catatan
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  //menampilkan catatan berdasarkan {id}
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  //mengedit catatan berdasarkan {id}
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  //mengahpus catatan berdasarkan {id}
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes;