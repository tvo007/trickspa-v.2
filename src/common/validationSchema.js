import * as yup from 'yup';

export const commentSchema = yup.object ().shape ({
  body: yup.string ().required ('Please enter a comment.'),
});

export const postSchema = yup.object ().shape ({
  title: yup.string ().required ('Please enter a title.'),
  body: yup.string ().required ('Please enter a body.'),
});



