

const database = (itemArr) => {
    const newlist = itemArr.slice(0, 16);
    return newlist.length
  };


  const commentsFunction = (...args) => {
    const commentData = args[0]
    //   await commentPoster(args[0]);
    //   const commentData = commentGetter(args[0]);
      const { length } = commentData;
      return length;
  };

  exports.database = database
  exports.commentsFunction = commentsFunction