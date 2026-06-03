const comments = new Map();

class Comment {
  constructor(id, text, userId, parentId = null) {
    this.id = id;
    this.text = text;
    this.userId = userId;
    this.parentId = parentId;
    this.createAt = new Date();
    this.likes = 0;
  }
}

function addComment(id, text, userId) {
  const comment = new Comment(id, text, userId);
  comments.set(id, comment);
}

function replyToComment(id, text, userId, parentId) {
  if (!comments.has(parentId)) {
    throw new Error("Parent Not found");
  }
  const reply = new Comment(id, text, userId, parentId);
  comments.set(id, reply);
}

addComment("1", "hello world", "user1");
replyToComment("2", "reply", "user2", "1");
replyToComment("3", "reply", "user3", "2");
replyToComment("4", "reply", "user3", "1");

// console.log(comments.entries());

function BuildTree() {
  const map = new Map();
  const roots = [];

  for (let comment of comments.values()) {
    map.set(comment.id, { ...comment, children: [] });
  }

  for (let node of map.values()) {
    if (node.parentId === null) {
      roots.push(node);
    } else {
      const parent = map.get(node.parentId);
      if (parent) {
        parent.children.push(node);
      }
    }
  }

  return JSON.stringify(roots);
}

// console.log(BuildTree());

// comments --
// {
//   id:'1',
//   text:'hello',
//   userId:'1'
//   parentId:null,
//   likes:0
// }
let commnetsArray = [
  {
    id: "1",
    text: "hello world",
    userId: "user1",
    parentId: null,
    createAt: "2026-04-30T09:44:47.475Z",
    likes: 0,
    children: [
      {
        id: "2",
        text: "reply",
        userId: "user2",
        parentId: "1",
        createAt: "2026-04-30T09:44:47.475Z",
        likes: 0,
        children: [
          {
            id: "3",
            text: "reply",
            userId: "user3",
            parentId: "2",
            createAt: "2026-04-30T09:44:47.475Z",
            likes: 0,
            children: [],
          },
        ],
      },
      {
        id: "4",
        text: "reply",
        userId: "user3",
        parentId: "1",
        createAt: "2026-04-30T09:44:47.475Z",
        likes: 0,
        children: [],
      },
    ],
  },
];

function commentAry(ary = []) {
  for (let item of ary) {
    console.log(item.id, item.userId, item.parentId);
    if (item.children.length > 0) {
      commentAry(item.children);
    }
  }
}

commentAry(commnetsArray);
