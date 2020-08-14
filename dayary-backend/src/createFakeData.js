import Post from './models/post';

export default function createFakeDate() {
  const posts = [...Array(40).keys()].map((i) => ({
    publishedDate: new Date(),
    message: 'test',
    userName: `포스트 #${i}`,
  }));
  Post.insertMany(posts, (err, docs) => {
    console.log(docs);
  });
}
